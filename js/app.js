(function () {
function fail(err) {
  const main = document.getElementById("main");
  if (!main) return;
  const msg = (err && err.message) ? err.message : String(err);
  main.innerHTML = `<article class="wrap">
    <p class="kicker">Error</p>
    <h2 class="lesson">The page did not start</h2>
    <p>${msg}</p>
    <p>Open <code>index.html</code> from the Ars Musica folder (the files <code>js/</code> and <code>css/</code> must sit beside it). A Dropbox website preview will not run the course.</p>
  </article>`;
}
try {
const LESSONS = window.MusicaArs && MusicaArs.LESSONS;
const CHAPTERS = window.MusicaArs && MusicaArs.CHAPTERS;
const mountWidgets = window.MusicaArs && MusicaArs.mountWidgets;
const Audio = window.MusicaArs && MusicaArs.audio;
const DRILLS = (window.MusicaArs && MusicaArs.DRILLS) || {};

const $ = (s, r = document) => r.querySelector(s);
const STORE = "musica-ars.v1";

const state = {
  id: (LESSONS && LESSONS[0] && LESSONS[0].id) || "welcome",
  theme: "dark",
  done: {},
  answers: {},
  drills: {},
  sound: false
};

/* ---- numbering and kickers, computed at load, so that inserting a lesson
   can never leave a stale number or a stale cross-reference ---- */
const chapterOf = {};
CHAPTERS.forEach(c => { chapterOf[c.id] = c; });
(function number() {
  let k = 0;
  for (const l of LESSONS) {
    if (l.n == null) l.n = String(k++);
    const ch = chapterOf[l.ch];
    if (!l.kicker) {
      l.kicker = (ch && ch.num)
        ? `Chapter ${ch.num} · Lesson ${l.n}`
        : (ch ? ch.title : "");
    }
  }
})();
const byId = {};
LESSONS.forEach(l => { byId[l.id] = l; });

function isDrill(l) { return !!l.drill; }
function scored() {
  return LESSONS.filter(l => !isDrill(l) && l.id !== "lab" && l.id !== "sources");
}
function blocks() { return LESSONS.filter(isDrill); }
function mastered(l) { return !!(state.drills[l.drill] && state.drills[l.drill].mastered); }

function progressHTML() {
  const all = scored();
  const n = all.filter(l => state.done[l.id]).length;
  const b = blocks();
  const m = b.filter(mastered).length;
  return b.length ? `${n}/${all.length} · ${m}/${b.length}` : `${n}/${all.length}`;
}

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || "{}");
    if (raw.theme === "light" || raw.theme === "dark") state.theme = raw.theme;
    if (raw.id && byId[raw.id]) state.id = raw.id;
    if (raw.done && typeof raw.done === "object") state.done = raw.done;
    if (raw.answers && typeof raw.answers === "object") state.answers = raw.answers;
    if (raw.drills && typeof raw.drills === "object") state.drills = raw.drills;
  } catch (_) { /* ignore */ }
  try { state.sound = sessionStorage.getItem(STORE + ".sound") === "1"; } catch (_) { /* ignore */ }
  document.documentElement.dataset.theme = state.theme;
  $("#b-theme").textContent = state.theme === "dark" ? "☀" : "☾";
}
function save() {
  try {
    localStorage.setItem(STORE, JSON.stringify({
      theme: state.theme, id: state.id, done: state.done,
      answers: state.answers, drills: state.drills
    }));
  } catch (_) { /* file:// or private mode */ }
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 1600);
}

function buildNav() {
  const box = $("#nav-list");
  const q = ($("#find").value || "").trim().toLowerCase();
  box.innerHTML = "";
  for (const ch of CHAPTERS) {
    const items = LESSONS.filter(l => l.ch === ch.id);
    if (!items.length) continue;
    const vis = items.filter(l => !q ||
      (l.title + " " + l.kicker + " " + l.html).toLowerCase().includes(q));
    if (q && !vis.length) continue;
    const h = document.createElement("h3");
    h.textContent = ch.title;
    box.appendChild(h);
    for (const l of vis) {
      const a = document.createElement("a");
      a.href = "#" + l.id;
      a.dataset.id = l.id;
      if (l.id === state.id) a.classList.add("on");
      if (isDrill(l)) { if (mastered(l)) a.classList.add("done"); }
      else if (state.done[l.id]) a.classList.add("done");
      a.innerHTML = `<b>${l.n}</b><span>${l.title}</span>`;
      a.addEventListener("click", e => {
        e.preventDefault();
        go(l.id);
        closeNav();
      });
      box.appendChild(a);
    }
  }
}

function closeNav() {
  $("#side-nav").classList.remove("open");
  $("#nav-backdrop").classList.remove("show");
  $("#b-nav").setAttribute("aria-expanded", "false");
}

function go(id) {
  stopSpeak();
  const lesson = byId[id] || LESSONS[0];
  state.id = lesson.id;
  if (!isDrill(lesson)) state.done[lesson.id] = true;
  save();
  render(lesson);
  buildNav();
  $("#progress").textContent = progressHTML();
  $("#b-lab").classList.toggle("on", lesson.id === "lab");
  $("#main").scrollTop = 0;
  history.replaceState(null, "", "#" + lesson.id);
}
MusicaArs.go = go;

/* Cross-references. <span class="xref" data-to="iv-2"></span> becomes a live
   link reading "Lesson 12", so renumbering can never make a lie of it. */
function fillRefs(root) {
  root.querySelectorAll(".xref").forEach(el => {
    const chId = el.dataset.ch;
    if (chId) {
      const ch = chapterOf[chId];
      if (!ch) return;
      el.textContent = el.dataset.text || ("Chapter " + (ch.num || ch.title));
      el.classList.add("live");
      const first = LESSONS.find(l => l.ch === chId);
      if (first) el.addEventListener("click", () => go(first.id));
      return;
    }
    const l = byId[el.dataset.to];
    if (!l) return;
    el.textContent = el.dataset.text || ((/^\d+$/.test(l.n) ? "Lesson " : "Block ") + l.n);
    el.classList.add("live");
    el.addEventListener("click", () => go(l.id));
  });
}

function render(lesson) {
  const i = LESSONS.indexOf(lesson);
  const prev = LESSONS[i - 1];
  const next = LESSONS[i + 1];
  const main = $("#main");
  main.innerHTML = `
    <article class="wrap">
      <div class="sound-banner" id="sound-banner">
        <span>This lesson uses sound. The browser will stay silent until you allow it.</span>
        <button class="pbtn primary" id="b-sound">Enable sound</button>
      </div>
      <div class="kicker">${lesson.kicker}</div>
      <h2 class="lesson">${lesson.title}</h2>
      <div class="prose">${lesson.html}</div>
      ${lesson.drill ? `<div class="widget" data-kind="drill" data-set="${lesson.drill}"></div>` : ""}
      ${(MusicaArs.STUDY && MusicaArs.STUDY[lesson.id])
        ? `<div class="widget study" data-kind="study" data-lesson="${lesson.id}"></div>` : ""}
      ${lesson.sources ? `<p class="sources">${lesson.sources}</p>` : ""}
      <div class="pager">
        <button class="tbtn" id="b-prev" ${prev ? "" : "disabled"}>${prev ? "← " + prev.title : ""}</button>
        <button class="tbtn" id="b-next" ${next ? "" : "disabled"}>${next ? next.title + " →" : ""}</button>
      </div>
    </article>`;
  fillRefs(main);
  mountWidgets(main);
  const hasSound = lesson.html.includes("data-kind") || !!lesson.drill;
  if (!state.sound && hasSound) $("#sound-banner").classList.add("show");
  const onSound = async () => {
    await Audio.unlock();
    state.sound = true;
    try { sessionStorage.setItem(STORE + ".sound", "1"); } catch (_) { /* ignore */ }
    $("#sound-banner")?.classList.remove("show");
  };
  $("#b-sound")?.addEventListener("click", async () => {
    await onSound();
    toast("Sound is on");
  });
  main.addEventListener("click", () => { if (!state.sound) onSound(); }, { once: true });
  $("#b-prev")?.addEventListener("click", () => prev && go(prev.id));
  $("#b-next")?.addEventListener("click", () => next && go(next.id));
}

/* The drill engine reports here when a block is finished. */
MusicaArs.recordDrill = function (setId, right, total) {
  const rec = state.drills[setId] || { best: 0, tries: 0, mastered: false };
  rec.tries += 1;
  if (right > rec.best) rec.best = right;
  if (right === total && total > 0) rec.mastered = true;
  state.drills[setId] = rec;
  save();
  buildNav();
  $("#progress").textContent = progressHTML();
  return rec;
};
MusicaArs.drillRecord = function (setId) {
  return state.drills[setId] || { best: 0, tries: 0, mastered: false };
};

/* ---- read this page aloud ------------------------------------------- */
let speakGen = 0;
let speaking = false;

function setSpeaking(on) {
  speaking = on;
  const b = $("#b-speak");
  if (!b) return;
  b.setAttribute("aria-pressed", on ? "true" : "false");
  b.setAttribute("aria-label", on ? "Stop reading" : "Read this page");
  b.title = on ? "Stop reading (r)" : "Read this page (r)";
  b.textContent = on ? "⏹" : "🔊";
}

function stopSpeak() {
  speakGen += 1;
  speaking = false;
  try { window.speechSynthesis && speechSynthesis.cancel(); } catch (_) { /* ignore */ }
  setSpeaking(false);
}
MusicaArs.stopSpeak = stopSpeak;

function skipSpeakEl(el) {
  if (!el || el.nodeType !== 1) return false;
  if (el.hidden || el.getAttribute("aria-hidden") === "true") return true;
  if (el.matches(".pager, .sound-banner, .kicker, .sources, .playrow, .dots, .drill-next, .drill-sound, .drill-input, .snaps, .scale-keys, .tbtns, .ratio-row, .tetractys, svg, .mono-svg")) return true;
  if (el.matches("button.pbtn, button.tbtn, button.key, input")) return true;
  if (el.matches(".explain") && !el.classList.contains("show")) return true;
  if (el.matches(".whead")) {
    const w = el.closest("[data-kind]");
    if (w && (w.dataset.kind === "drill" || w.dataset.kind === "study")) return true;
  }
  return false;
}

function walkSpeak(node, out) {
  if (node.nodeType === 3) {
    const t = node.textContent.replace(/\s+/g, " ");
    if (t.trim()) out.push(t);
    return;
  }
  if (node.nodeType !== 1) return;
  if (skipSpeakEl(node)) return;
  const block = /^(P|H1|H2|H3|H4|LI|DT|DD|TR|DIV|BLOCKQUOTE|ARTICLE)$/.test(node.tagName);
  const before = out.length;
  for (const child of node.childNodes) walkSpeak(child, out);
  if (block && out.length > before) out.push("\n");
}

function collectSpeakText() {
  const root = $("#main article.wrap") || $("#main");
  const out = [];
  if (root) walkSpeak(root, out);
  /* Opening page: the intro in main, then the contents list so the
     chapters and exercise titles are heard with it. */
  if (state.id === "welcome") {
    const colo = $(".colophon");
    if (colo) out.push("\n", colo.textContent, "\n");
    const nav = $("#nav-list");
    if (nav) {
      nav.querySelectorAll("h3, a").forEach(el => {
        const t = el.textContent.replace(/\s+/g, " ").trim();
        if (t) out.push(t, "\n");
      });
    }
  }
  return out.join("").replace(/[ \t]+\n/g, "\n").replace(/\n[ \t]+/g, "\n").replace(/\n{2,}/g, "\n").trim();
}

function prepSpeak(s) {
  return s
    .replace(/(\d+)\s*:\s*(\d+)/g, "$1 to $2")
    .replace(/¢/g, " cents")
    .replace(/·/g, ", ")
    .replace(/\s*\n+\s*/g, ". ")
    .replace(/\s+/g, " ")
    .replace(/\.\s*\./g, ".")
    .trim();
}

function chunkSpeak(text) {
  const bits = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if ((text[i] === "." || text[i] === "!" || text[i] === "?") &&
        (i === text.length - 1 || text[i + 1] === " ")) {
      const piece = text.slice(start, i + 1).trim();
      if (piece) bits.push(piece);
      start = i + 1;
    }
  }
  const rest = text.slice(start).trim();
  if (rest) bits.push(rest);
  const chunks = [];
  let buf = "";
  for (const b of bits) {
    if (buf && (buf + " " + b).length > 280) {
      chunks.push(buf);
      buf = b;
    } else buf = buf ? buf + " " + b : b;
  }
  if (buf) chunks.push(buf);
  return chunks;
}

function pickVoice() {
  try {
    const voices = speechSynthesis.getVoices() || [];
    const en = voices.filter(v => /^en/i.test(v.lang));
    return en.find(v => v.localService && /samantha|daniel|karen|moira|serena|rishi|siri/i.test(v.name))
      || en.find(v => v.localService)
      || en[0]
      || voices[0]
      || null;
  } catch (_) {
    return null;
  }
}

function startSpeak() {
  if (!window.speechSynthesis) {
    toast("This browser cannot read the page aloud.");
    return;
  }
  const raw = collectSpeakText();
  const text = prepSpeak(raw);
  if (!text) {
    toast("Nothing on this page to read.");
    return;
  }
  const gen = ++speakGen;
  try { speechSynthesis.cancel(); } catch (_) { /* ignore */ }
  const chunks = chunkSpeak(text);
  const voice = pickVoice();
  let i = 0;
  const next = () => {
    if (gen !== speakGen) return;
    if (i >= chunks.length) { setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(chunks[i]);
    u.rate = 0.94;
    u.lang = "en-US";
    if (voice) u.voice = voice;
    u.onend = () => { i += 1; next(); };
    u.onerror = () => { if (gen === speakGen) setSpeaking(false); };
    speechSynthesis.speak(u);
  };
  setSpeaking(true);
  /* Chrome drops the first utterance if it is queued in the same turn as cancel. */
  setTimeout(() => { if (gen === speakGen) next(); }, 40);
}

function toggleSpeak() {
  if (speaking) stopSpeak();
  else startSpeak();
}

function hookAudioStopsSpeech() {
  if (!Audio || Audio._speakHooked) return;
  Audio._speakHooked = true;
  ["tone", "interval", "sequence", "chord", "_voice"].forEach(name => {
    if (typeof Audio[name] !== "function") return;
    const orig = Audio[name].bind(Audio);
    Audio[name] = function () {
      stopSpeak();
      return orig.apply(this, arguments);
    };
  });
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  $("#b-theme").textContent = state.theme === "dark" ? "☀" : "☾";
  save();
}

function init() {
  if (!LESSONS || !LESSONS.length) throw new Error("Lessons did not load.");
  for (const l of LESSONS) {
    if (l.drill && !DRILLS[l.drill]) throw new Error("Exercise set missing: " + l.drill);
  }
  load();
  const hash = decodeURIComponent((location.hash || "").slice(1));
  if (hash && byId[hash]) state.id = hash;
  $("#b-theme").addEventListener("click", toggleTheme);
  $("#b-speak").addEventListener("click", toggleSpeak);
  $("#b-lab").addEventListener("click", () => go("lab"));
  hookAudioStopsSpeech();
  try { speechSynthesis.getVoices(); speechSynthesis.addEventListener("voiceschanged", pickVoice); } catch (_) { /* ignore */ }
  document.addEventListener("click", e => {
    if (e.target.closest("#drill-next, #study-next, #study-again, #drill-again")) stopSpeak();
  }, true);
  $("#b-nav").addEventListener("click", () => {
    const open = $("#side-nav").classList.toggle("open");
    $("#nav-backdrop").classList.toggle("show", open);
    $("#b-nav").setAttribute("aria-expanded", open ? "true" : "false");
  });
  $("#nav-backdrop").addEventListener("click", closeNav);
  $("#find").addEventListener("input", buildNav);
  window.addEventListener("keydown", e => {
    if (e.target.matches("input, textarea")) return;
    if (e.key === "d") toggleTheme();
    if (e.key === "r") { e.preventDefault(); toggleSpeak(); }
    if (e.key === "/") { e.preventDefault(); $("#find").focus(); }
    if (e.key === "Escape") closeNav();
    if (e.key === "ArrowRight") {
      const i = LESSONS.findIndex(l => l.id === state.id);
      if (LESSONS[i + 1]) go(LESSONS[i + 1].id);
    }
    if (e.key === "ArrowLeft") {
      const i = LESSONS.findIndex(l => l.id === state.id);
      if (LESSONS[i - 1]) go(LESSONS[i - 1].id);
    }
  });
  buildNav();
  go(state.id);
}

init();
} catch (err) { fail(err); }
})();
