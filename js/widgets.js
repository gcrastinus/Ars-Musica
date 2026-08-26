(function () {
const Audio = MusicaArs.audio;
const parseRatio = MusicaArs.parseRatio;

function gcd(a, b) {
  a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b));
  while (b) { const t = a % b; a = b; b = t; }
  return a || 1;
}
function asFrac(x, max = 81) {
  let best = { n: 1, d: 1, e: Infinity };
  for (let d = 1; d <= max; d++) {
    const n = Math.round(x * d);
    const e = Math.abs(x - n / d);
    if (e < best.e) best = { n, d, e };
    if (e < 1e-9) break;
  }
  const g = gcd(best.n, best.d);
  return `${best.n / g}:${best.d / g}`;
}

const TICKS = [
  { p: 1, lab: "1" },
  { p: 8 / 9, lab: "8/9" },
  { p: 3 / 4, lab: "3/4" },
  { p: 2 / 3, lab: "2/3" },
  { p: 1 / 2, lab: "1/2" }
];

MusicaArs.mountWidgets = function mountWidgets(root) {
  root.querySelectorAll("[data-kind]").forEach(el => {
    const kind = el.dataset.kind;
    if (kind === "monochord") mountMonochord(el);
    else if (kind === "interval") mountInterval(el);
    else if (kind === "tetractys") mountTetractys(el);
    else if (kind === "scale") mountScale(el);
    else if (kind === "listen") mountListen(el);
    else if (kind === "compare") mountCompare(el);
    else if (kind === "comma") mountComma(el);
    else if (kind === "temper") mountTemper(el);
    else if (kind === "tetrad") mountTetrad(el);
    else if (kind === "gps") mountGPS(el);
    else if (kind === "genera") mountGenera(el);
    else if (kind === "byzgenera") mountByzGenera(el);
    else if (kind === "obikhod") mountObikhod(el);
    else if (kind === "ison") mountIson(el);
    else if (kind === "drill") mountDrill(el);
    else if (kind === "study") mountStudy(el);
  });
}

/* ---- helpers for Chapter VII ------------------------------------------
   These widgets speak in PITCH multipliers of the open string, not in
   stopped lengths, because from the sixteenth century onward the art's
   own quantities stop being lengths of a string. Some of them are not
   ratios of whole numbers at all, and cannot be. That is the point. */

function pitchOf(s) {
  const t = String(s).trim();
  if (/c$/i.test(t)) return MusicaArs.fromCents(parseFloat(t));
  if (t.charAt(0) === "^") return Math.pow(2, MusicaArs.parseRatio(t.slice(1)));
  if (t.charAt(0) === "#") return Math.pow(5, MusicaArs.parseRatio(t.slice(1)));
  return MusicaArs.parseRatio(t);
}
function centStr(r) {
  return (Math.round(MusicaArs.cents(r) * 100) / 100).toFixed(2) + "¢";
}

function mountListen(el) {
  const len = parseRatio(el.dataset.len || "1");
  const label = el.dataset.label || "Play";
  const row = document.createElement("div");
  row.className = "playrow";
  const b = document.createElement("button");
  b.className = "pbtn primary";
  b.textContent = label;
  b.addEventListener("click", () => Audio.tone(Audio.freqFromLength(len)));
  row.appendChild(b);
  el.appendChild(row);
}

function mountInterval(el) {
  const a = parseRatio(el.dataset.a || "1");
  const b = parseRatio(el.dataset.b || "1/2");
  const name = el.dataset.name || "";
  const fLow = Audio.freqFromLength(Math.max(a, b));
  const fHigh = Audio.freqFromLength(Math.min(a, b));
  const lenRatio = Math.max(a, b) / Math.min(a, b);
  const freqRatio = fHigh / fLow;

  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>${name || "Two lengths"}</strong>
    <span class="readout">lengths ${asFrac(lenRatio)} · pitches ${asFrac(freqRatio)}</span>`;
  el.appendChild(head);

  const row = document.createElement("div");
  row.className = "ratio-row";
  const barA = document.createElement("div");
  barA.className = "bar a";
  barA.style.flex = String(Math.max(a, b));
  barA.textContent = "longer";
  const barB = document.createElement("div");
  barB.className = "bar b";
  barB.style.flex = String(Math.min(a, b));
  barB.textContent = "shorter";
  row.append(barA, barB);
  el.appendChild(row);

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="low">Lower</button>
    <button class="pbtn" data-m="high">Higher</button>
    <button class="pbtn" data-m="seq">One after the other</button>
    <button class="pbtn primary" data-m="together">Together</button>`;
  play.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (!m) return;
    Audio.interval(fLow, fHigh, m);
  });
  el.appendChild(play);
}

function mountTetractys(el) {
  el.innerHTML = `<div class="whead"><strong>The tetractys</strong><span>1 + 2 + 3 + 4 = 10</span></div>
    <div class="tetractys">
      <div class="row"><i class="dot"></i></div>
      <div class="row"><i class="dot"></i><i class="dot"></i></div>
      <div class="row"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div>
      <div class="row"><i class="dot"></i><i class="dot"></i><i class="dot"></i><i class="dot"></i></div>
    </div>
    <p class="readout" style="margin:8px 0 0">From these four numbers come 2:1, 3:2, 4:3, and 4:1.</p>
    <div class="playrow">
      <button class="pbtn" data-r="2:1">2:1</button>
      <button class="pbtn" data-r="3:2">3:2</button>
      <button class="pbtn" data-r="4:3">4:3</button>
      <button class="pbtn" data-r="4:1">4:1</button>
    </div>`;
  el.addEventListener("click", e => {
    const r = e.target.dataset.r;
    if (!r) return;
    const [n, d] = r.split(":").map(Number);
    Audio.interval(Audio.base, Audio.base * (n / d), "together");
  });
}

function mountScale(el) {
  /* Pythagorean diatonic from the open string, going up:
     1, 9/8, 81/64, 4/3, 3/2, 27/16, 243/128, 2
     as FREQUENCY ratios, i.e. lengths the reciprocals. */
  const steps = [
    { name: "1", len: 1, lat: "open" },
    { name: "9:8", len: 8 / 9, lat: "tone" },
    { name: "81:64", len: 64 / 81, lat: "ditone" },
    { name: "4:3", len: 3 / 4, lat: "fourth" },
    { name: "3:2", len: 2 / 3, lat: "fifth" },
    { name: "27:16", len: 16 / 27, lat: "fifth+tone" },
    { name: "243:128", len: 128 / 243, lat: "fifth+ditone" },
    { name: "2:1", len: 1 / 2, lat: "diapason" }
  ];
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>A diatonic filling of the diapason</strong><span>each step is a length on one string</span>`;
  el.appendChild(head);
  const keys = document.createElement("div");
  keys.className = "scale-keys";
  steps.forEach(s => {
    const b = document.createElement("button");
    b.className = "key";
    b.innerHTML = `<span class="nm">${s.lat}</span><span class="rt">${s.name}</span>`;
    b.addEventListener("click", () => Audio.tone(Audio.freqFromLength(s.len), 0.9));
    keys.appendChild(b);
  });
  el.appendChild(keys);
  const play = document.createElement("div");
  play.className = "playrow";
  const up = document.createElement("button");
  up.className = "pbtn primary";
  up.textContent = "Play the eight, low to high";
  up.addEventListener("click", () => {
    Audio.sequence(steps.map(s => Audio.freqFromLength(s.len)));
  });
  play.appendChild(up);
  el.appendChild(play);
}

/* Two candidate versions of one interval, heard against the same low sound.
   data-one / data-two are pitch multipliers; data-one-name / data-two-name
   label them; data-title heads the box. */
function mountCompare(el) {
  const a = pitchOf(el.dataset.one || "81:64");
  const b = pitchOf(el.dataset.two || "5:4");
  const nameA = el.dataset.oneName || "First";
  const nameB = el.dataset.twoName || "Second";
  const f0 = Audio.base;
  const fa = f0 * a;
  const fb = f0 * b;
  const diff = a > b ? a / b : b / a;

  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>${el.dataset.title || "Two ways to take one interval"}</strong>
    <span class="readout">they differ by ${centStr(diff)}</span>`;

  const tab = document.createElement("div");
  tab.className = "tune-tab";
  tab.innerHTML = `
    <div class="trow th"><span>Version</span><span>Size</span><span>Hear it</span></div>
    <div class="trow"><span>${nameA}</span><span class="num">${centStr(a)}</span>
      <span class="tbtns"><button class="pbtn" data-m="a-seq">apart</button><button class="pbtn primary" data-m="a-both">together</button></span></div>
    <div class="trow"><span>${nameB}</span><span class="num">${centStr(b)}</span>
      <span class="tbtns"><button class="pbtn" data-m="b-seq">apart</button><button class="pbtn primary" data-m="b-both">together</button></span></div>`;
  tab.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (!m) return;
    const f = m.charAt(0) === "a" ? fa : fb;
    Audio.interval(f0, f, m.endsWith("seq") ? "seq" : "together");
  });

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `<button class="pbtn" data-m="ab">The two upper sounds, one after the other</button>`;
  play.addEventListener("click", e => {
    if (e.target.dataset.m === "ab") Audio.interval(fa, fb, "seq");
  });

  el.append(head, tab, play);
}

/* The comma. The old art's own arithmetic proves that a closed instrument
   cannot be pure: twelve fifths overshoot seven diapasons, and four fifths
   overshoot two diapasons plus a just third. */
function mountComma(el) {
  const which = el.dataset.which || "pythagorean";
  const f0 = Audio.base;

  function fold(r) { while (r >= 2) r /= 2; while (r < 1) r *= 2; return r; }

  let title, lines, targetR, builtR, buildSeq;
  if (which === "syntonic") {
    builtR = fold(Math.pow(3 / 2, 4));                 /* 81:64 */
    targetR = 5 / 4;
    title = "Four fifths against one just third";
    lines = [
      ["Four pure fifths, folded into one diapason", "81:64", builtR],
      ["The just major third the singers wanted", "5:4", targetR]
    ];
    buildSeq = [1, 3 / 2, fold(Math.pow(3 / 2, 2)), fold(Math.pow(3 / 2, 3)), builtR];
  } else {
    builtR = fold(Math.pow(3 / 2, 12));
    targetR = 1;
    title = "Twelve fifths against seven diapasons";
    lines = [
      ["Twelve pure fifths, folded back", "a comma sharp", builtR],
      ["Seven diapasons — where you meant to land", "the open string", 1]
    ];
    buildSeq = [];
    for (let i = 0; i <= 12; i++) buildSeq.push(fold(Math.pow(3 / 2, i)));
  }
  const gap = builtR / targetR;

  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>${title}</strong><span class="readout">the gap is ${centStr(gap)}</span>`;

  const tab = document.createElement("div");
  tab.className = "tune-tab";
  tab.innerHTML = `
    <div class="trow th"><span>Where you arrive</span><span>What it is</span><span>Hear it</span></div>
    ${lines.map((l, i) => `<div class="trow"><span>${l[0]}</span><span class="num">${l[1]}</span>
      <span class="tbtns"><button class="pbtn" data-i="${i}">sound it</button></span></div>`).join("")}`;
  tab.addEventListener("click", e => {
    const i = e.target.dataset.i;
    if (i == null) return;
    Audio.tone(f0 * lines[+i][2], 1.3);
  });

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="walk">Walk it, fifth by fifth</button>
    <button class="pbtn primary" data-m="clash">The two arrivals together</button>`;
  play.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (m === "walk") Audio.sequence(buildSeq.map(r => f0 * r), 0.4, 0.36);
    else if (m === "clash") Audio.interval(f0 * lines[1][2], f0 * lines[0][2], "together");
  });

  el.append(head, tab, play);
}

/* Three tunings of the same two intervals, and the triad each yields. */
const SYSTEMS = [
  {
    name: "Pythagorean",
    note: "pure 3:2 fifths only",
    fifth: 3 / 2,
    third: 81 / 64
  },
  {
    name: "Quarter-comma meantone",
    note: "pure 5:4 thirds, fifths narrowed",
    fifth: Math.pow(5, 0.25),
    third: 5 / 4
  },
  {
    name: "Equal temperament",
    note: "twelve equal steps; neither is pure",
    fifth: Math.pow(2, 7 / 12),
    third: Math.pow(2, 4 / 12)
  }
];

function mountTemper(el) {
  const f0 = Audio.base;
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>Three tunings of the same two intervals</strong>
    <span class="readout">pure fifth ${centStr(3 / 2)} · pure third ${centStr(5 / 4)}</span>`;

  const tab = document.createElement("div");
  tab.className = "tune-tab wide";
  tab.innerHTML = `
    <div class="trow th"><span>System</span><span>Fifth</span><span>Third</span><span>Hear</span></div>
    ${SYSTEMS.map((s, i) => `<div class="trow">
      <span>${s.name}<small>${s.note}</small></span>
      <span class="num">${centStr(s.fifth)}</span>
      <span class="num">${centStr(s.third)}</span>
      <span class="tbtns">
        <button class="pbtn" data-i="${i}" data-m="fifth">5th</button>
        <button class="pbtn" data-i="${i}" data-m="third">3rd</button>
        <button class="pbtn primary" data-i="${i}" data-m="triad">triad</button>
      </span></div>`).join("")}`;
  tab.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const s = SYSTEMS[+b.dataset.i];
    if (b.dataset.m === "fifth") Audio.interval(f0, f0 * s.fifth, "together");
    else if (b.dataset.m === "third") Audio.interval(f0, f0 * s.third, "together");
    else Audio.chord([f0, f0 * s.third, f0 * s.fifth]);
  });

  el.append(head, tab);
}

/* ---- the musical proportion 6 : 8 : 9 : 12 ---------------------------- */
const TETRAD = [6, 8, 9, 12];
const TETRAD_PAIRS = [
  [0, 3, "diapason", "2:1"],
  [0, 2, "diapente", "3:2"],
  [1, 3, "diapente", "3:2"],
  [0, 1, "diatessaron", "4:3"],
  [2, 3, "diatessaron", "4:3"],
  [1, 2, "tone", "9:8"]
];
function mountTetrad(el) {
  const f = n => Audio.freqFromLength(6 / n * 0.5);  /* 6 is the longest = lowest */
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>The musical proportion</strong><span class="readout">6 : 8 : 9 : 12 — lengths of one string</span>`;

  const keys = document.createElement("div");
  keys.className = "scale-keys";
  TETRAD.forEach(n => {
    const b = document.createElement("button");
    b.className = "key";
    b.innerHTML = `<span class="nm">length</span><span class="rt">${n}</span>`;
    b.addEventListener("click", () => Audio.tone(f(n), 1.0));
    keys.appendChild(b);
  });

  const tab = document.createElement("div");
  tab.className = "tune-tab";
  tab.innerHTML = `
    <div class="trow th"><span>Between</span><span>What it is</span><span>Hear it</span></div>
    ${TETRAD_PAIRS.map((p, i) => `<div class="trow">
      <span>${TETRAD[p[0]]} and ${TETRAD[p[1]]}</span>
      <span class="num">${p[2]}, ${p[3]}</span>
      <span class="tbtns"><button class="pbtn" data-i="${i}" data-m="seq">apart</button><button class="pbtn primary" data-i="${i}" data-m="both">together</button></span>
    </div>`).join("")}`;
  tab.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const p = TETRAD_PAIRS[+b.dataset.i];
    Audio.interval(f(TETRAD[p[0]]), f(TETRAD[p[1]]), b.dataset.m === "seq" ? "seq" : "together");
  });

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `<button class="pbtn primary" data-m="all">Sound all four, low to high</button>`;
  play.addEventListener("click", e => {
    if (e.target.dataset.m === "all") Audio.sequence(TETRAD.map(f), 0.45, 0.42);
  });

  el.append(head, keys, tab, play);
}

/* ---- the Greater Perfect System --------------------------------------- */
const T = 9 / 8, L = 256 / 243;
const GPS_STEPS = [
  ["Proslambanomenos", null, "the added sound"],
  ["Hypate hypaton", T, "lowest of the lowest"],
  ["Parhypate hypaton", L, ""],
  ["Lichanos hypaton", T, "the forefinger sound"],
  ["Hypate meson", T, "joins the two lower tetrachords"],
  ["Parhypate meson", L, ""],
  ["Lichanos meson", T, ""],
  ["Mese", T, "the middle — the ruling sound"],
  ["Paramese", T, "across the tone of disjunction"],
  ["Trite diezeugmenon", L, ""],
  ["Paranete diezeugmenon", T, ""],
  ["Nete diezeugmenon", T, ""],
  ["Trite hyperbolaion", L, ""],
  ["Paranete hyperbolaion", T, ""],
  ["Nete hyperbolaion", T, "highest of the highest"]
];
const GPS_FIXED = new Set([0, 1, 4, 7, 8, 11, 14]);
function mountGPS(el) {
  /* exact integer arithmetic: every sound of the system is a ratio of whole
     numbers to the proslambanomenos, and the point is lost if we round. */
  const rows = [];
  let n = 1, d = 1;
  GPS_STEPS.forEach((s, i) => {
    if (s[1]) {
      if (s[1] === T) { n *= 9; d *= 8; } else { n *= 256; d *= 243; }
      const g = gcd(n, d); n /= g; d /= g;
    }
    rows.push({
      name: s[0], gloss: s[2], ratio: n / d, frac: n + ":" + d,
      fixed: GPS_FIXED.has(i), step: s[1]
    });
  });
  const base = Audio.base * 0.55;
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>The Greater Perfect System</strong><span class="readout">fifteen sounds, spanning 4:1 — two diapasons</span>`;

  const list = document.createElement("div");
  list.className = "gps";
  rows.forEach((row, i) => {
    const b = document.createElement("button");
    b.className = "gps-row" + (row.fixed ? " fixed" : "");
    b.innerHTML = `<span class="gname">${row.name}</span>
      <span class="gstep">${row.step ? (row.step === T ? "tone" : "leimma") : "—"}</span>
      <span class="grat">${row.frac}</span>`;
    b.title = row.gloss || "";
    b.addEventListener("click", () => Audio.tone(base * row.ratio, 0.95));
    list.appendChild(b);
  });

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="lower">The lower diapason</button>
    <button class="pbtn" data-m="upper">The upper diapason</button>
    <button class="pbtn primary" data-m="all">The whole system</button>`;
  play.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (!m) return;
    const f = rows.map(x => base * x.ratio);
    if (m === "lower") Audio.sequence(f.slice(0, 8), 0.34, 0.3);
    else if (m === "upper") Audio.sequence(f.slice(7), 0.34, 0.3);
    else Audio.sequence(f, 0.3, 0.26);
  });

  const note = document.createElement("p");
  note.className = "readout";
  note.style.margin = "10px 0 0";
  note.textContent = "The seven sounds set in bolder type are the standing ones. The rest move when the genus changes.";

  el.append(head, list, play, note);
}

/* ---- the three genera -------------------------------------------------- */
const GENERA = [
  {
    name: "Diatonic", note: "leimma, tone, tone",
    steps: [1, 256 / 243, (256 / 243) * (9 / 8), 4 / 3],
    labs: ["hypate", "parhypate", "lichanos", "mese"]
  },
  {
    name: "Chromatic", note: "leimma, apotome, trihemitone 32:27",
    steps: [1, 256 / 243, (256 / 243) * (2187 / 2048), 4 / 3],
    labs: ["hypate", "parhypate", "lichanos", "mese"]
  },
  {
    name: "Enharmonic", note: "diesis, diesis, ditone",
    steps: [1, Math.sqrt(256 / 243), 256 / 243, 4 / 3],
    labs: ["hypate", "parhypate", "lichanos", "mese"]
  }
];
function mountGenera(el) {
  const base = Audio.base * 0.8;
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>One fourth, divided three ways</strong><span class="readout">the outer sounds stand; the two inner ones move</span>`;
  const tab = document.createElement("div");
  tab.className = "tune-tab";
  tab.innerHTML = `
    <div class="trow th"><span>Genus</span><span>Its division</span><span>Hear it</span></div>
    ${GENERA.map((g, i) => `<div class="trow">
      <span>${g.name}</span><span class="num">${g.note}</span>
      <span class="tbtns"><button class="pbtn primary" data-i="${i}">sound the tetrachord</button></span>
    </div>`).join("")}`;
  tab.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const g = GENERA[+b.dataset.i];
    Audio.sequence(g.steps.map(s => base * s), 0.5, 0.46);
  });
  const note = document.createElement("p");
  note.className = "readout";
  note.style.margin = "10px 0 0";
  note.textContent = "The enharmonic dieses are sounded here as exact halves of the leimma. Boethius could give them no whole-number ratio, and said so.";
  el.append(head, tab, note);
}

/* ---- the tetrachord, divided six ways ---------------------------------
   The Byzantine figures are the Patriarchal Committee's of 1881, in
   seventy-seconds of a diapason. They are a modern codification and are
   marked as such wherever they appear. No medieval source gives sizes. */
const MORION = 1200 / 72;
const CT = r => MusicaArs.cents(r);
const halfLeimma = CT(256 / 243) / 2;
const TETRA = [
  { key: "pyth", name: "Pythagorean diatonic", note: "leimma · tone · tone", era: "ancient",
    steps: [CT(256 / 243), CT(9 / 8), CT(9 / 8)] },
  { key: "bdia", name: "Byzantine diatonic", note: "12 · 10 · 8 moria", era: "1881",
    steps: [12 * MORION, 10 * MORION, 8 * MORION] },
  { key: "soft", name: "Soft chromatic", note: "8 · 14 · 8 moria", era: "1881",
    steps: [8 * MORION, 14 * MORION, 8 * MORION] },
  { key: "hard", name: "Hard chromatic", note: "6 · 20 · 4 moria", era: "1881",
    steps: [6 * MORION, 20 * MORION, 4 * MORION] },
  { key: "benh", name: "Byzantine enharmonic", note: "12 · 12 · 6 moria", era: "1881",
    steps: [12 * MORION, 12 * MORION, 6 * MORION] },
  { key: "genh", name: "Greek enharmonic", note: "diesis · diesis · ditone", era: "ancient",
    steps: [halfLeimma, halfLeimma, CT(81 / 64)] }
];
MusicaArs.TETRA = TETRA;

function tetraFreqs(steps, base) {
  const f = [base];
  let c = 0;
  steps.forEach(s => { c += s; f.push(base * MusicaArs.fromCents(c)); });
  return f;
}

function mountByzGenera(el) {
  const base = Audio.base * 0.9;
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>One fourth, divided six ways</strong>
    <span class="readout">the four marked 1881 are a modern codification</span>`;
  const tab = document.createElement("div");
  tab.className = "tune-tab wide";
  tab.innerHTML = `
    <div class="trow th"><span>Division</span><span>Steps</span><span>Span</span><span>Hear</span></div>
    ${TETRA.map((t, i) => {
      const span = t.steps.reduce((a, b) => a + b, 0);
      return `<div class="trow">
        <span>${t.name}<small>${t.note}${t.era === "1881" ? " · Patriarchal Committee, 1881" : ""}</small></span>
        <span class="num">${t.steps.map(s => Math.round(s)).join(" · ")}</span>
        <span class="num">${span.toFixed(1)}¢</span>
        <span class="tbtns"><button class="pbtn primary" data-i="${i}">sound it</button></span>
      </div>`;
    }).join("")}`;
  tab.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    Audio.sequence(tetraFreqs(TETRA[+b.dataset.i].steps, base), 0.5, 0.46);
  });
  const note = document.createElement("p");
  note.className = "readout";
  note.style.margin = "10px 0 0";
  note.textContent = "The spans: the two ancient divisions close on 498.04¢, the true 4:3. The 1881 divisions close on 500¢ — a fourth already tempered, two cents wide, before a note is sung.";
  el.append(head, tab, note);
}

/* ---- the Obikhod scale: four whole-tone trichords --------------------- */
const SOGLASIYA = [
  { name: "Prostoye", gloss: "simple" },
  { name: "Mrachnoye", gloss: "dark" },
  { name: "Svetloye", gloss: "light" },
  { name: "Tresvetloye", gloss: "thrice-light" }
];
function obikhodRatios() {
  /* T T s | T T s | T T s | T T — sounded here in the Pythagorean sizes of
     this course, because no Russian source ever gives interval sizes. */
  const T = 9 / 8, L = 256 / 243;
  const pattern = [T, T, L, T, T, L, T, T, L, T, T];
  const out = [1];
  let r = 1;
  pattern.forEach(s => { r *= s; out.push(r); });
  return out;
}
function mountObikhod(el) {
  const r = obikhodRatios();
  const base = Audio.base * 0.62;
  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>The Obikhod scale</strong><span class="readout">twelve sounds · four trichords, each a tone and a tone</span>`;

  const rows = document.createElement("div");
  rows.className = "tune-tab";
  rows.innerHTML = `
    <div class="trow th"><span>Trichord</span><span>What it is</span><span>Hear it</span></div>
    ${SOGLASIYA.map((s, i) => `<div class="trow">
      <span>${s.name}<small>${s.gloss}</small></span>
      <span class="num">tone · tone</span>
      <span class="tbtns"><button class="pbtn" data-i="${i}">sound it</button></span>
    </div>`).join("")}`;
  rows.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    const k = +b.dataset.i * 3;
    Audio.sequence(r.slice(k, k + 3).map(x => base * x), 0.5, 0.46);
  });

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="all">All twelve, low to high</button>
    <button class="pbtn primary" data-m="dim">The diminished octave</button>`;
  play.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (m === "all") Audio.sequence(r.map(x => base * x), 0.34, 0.3);
    else if (m === "dim") Audio.interval(base * r[2], base * r[9], "together");
  });

  const note = document.createElement("p");
  note.className = "readout";
  note.style.margin = "10px 0 0";
  note.innerHTML = "The third sound of the first trichord and the first of the fourth stand an <em>octave apart by name</em> and 1086¢ apart in fact — a diminished octave, inside one system, with no modulation. That is the signature of building by threes rather than by fourths.";
  el.append(head, rows, play, note);
}

/* ---- the ison: a held sound under a moving line ----------------------- */
function mountIson(el) {
  const T = 9 / 8, L = 256 / 243;
  const deg = [1, T, T * T, T * T * L, T * T * L * T, T * T * L * T * T];
  const base = Audio.base * 0.8;
  const line = [2, 3, 4, 3, 4, 5, 4, 3, 2, 1, 0].map(i => base * deg[i]);
  const drone = base * deg[0];

  const head = document.createElement("div");
  head.className = "whead";
  head.innerHTML = `<strong>A held sound beneath a moving one</strong><span class="readout">the texture, not a transcription of any chant</span>`;

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="line">The line alone</button>
    <button class="pbtn" data-m="drone">The held sound alone</button>
    <button class="pbtn primary" data-m="both">Both together</button>
    <button class="pbtn" data-m="shift">With the held sound moved once</button>`;
  play.addEventListener("click", async e => {
    const m = e.target.dataset.m;
    if (!m) return;
    if (m === "line") { Audio.sequence(line, 0.5, 0.46); return; }
    if (m === "drone") { Audio.tone(drone, 2.2); return; }
    await Audio.unlock();
    Audio.stopAll();
    const now = Audio.ctx.currentTime;
    const gap = 0.46, span = line.length * gap + 0.6;
    if (m === "both") {
      Audio._voice(drone, span, now, -0.3);
    } else {
      Audio._voice(drone, span * 0.55, now, -0.3);
      Audio._voice(base * deg[3], span * 0.5, now + span * 0.55, -0.3);
    }
    line.forEach((f, i) => Audio._voice(f, 0.5, now + i * gap, 0.3));
  });

  const note = document.createElement("p");
  note.className = "readout";
  note.style.margin = "10px 0 0";
  note.innerHTML = "The line is invented for this demonstration. What is not invented is the effect: against a fixed sound every degree acquires a character it does not have alone, and the ear is told at every moment where it stands.";
  el.append(head, play, note);
}

/* ---- study questions --------------------------------------------------
   A programmed set: the questions of one lesson, shuffled afresh on every
   visit, taken one at a time. A wrong choice is answered with the reason
   that choice fails — not with the right answer — and the student goes on
   choosing until he finds it. Nothing here is scored or gated; this is
   study, not the palaestra. */
function mountStudy(el) {
  const set = (MusicaArs.STUDY || {})[el.dataset.lesson];
  if (!set || !set.length) { el.remove(); return; }

  let items = [], idx = 0, clean = 0, tried = 0;

  const head = document.createElement("div");
  head.className = "whead";
  const body = document.createElement("div");
  body.className = "drill-body study-body";
  el.append(head, body);

  function shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }

  function paintHead() {
    head.innerHTML = `<strong>Study questions</strong>
      <span class="readout">${Math.min(idx + 1, items.length)} of ${items.length}${
        tried ? " · " + clean + " answered at the first attempt" : ""}</span>`;
  }

  function start() {
    items = shuffle(set).map(it => {
      const pairs = shuffle(it.o.map((p, i) => ({ text: p[0], why: p[1], right: i === it.a })));
      return { q: it.q, pairs };
    });
    idx = 0; clean = 0; tried = 0;
    paintHead();
    show();
  }

  function show() {
    const it = items[idx];
    let used = 0, gotClean = true, settled = false;
    body.innerHTML = `
      <div class="dots">${items.map((_, i) =>
        `<i class="${i < idx ? "dot-ok" : (i === idx ? "dot-now" : "")}"></i>`).join("")}</div>
      <p class="q">${it.q}</p>
      <div class="opts">${it.pairs.map((p, i) =>
        `<button class="opt" data-i="${i}">${p.text}</button>`).join("")}</div>
      <div class="study-said"></div>
      <div class="playrow drill-next" style="display:none">
        <button class="pbtn primary" id="study-next">${idx + 1 < items.length ? "Next question" : "Finish"}</button>
      </div>`;
    const said = body.querySelector(".study-said");

    body.querySelector(".opts").addEventListener("click", e => {
      const b = e.target.closest(".opt");
      if (!b || b.disabled || settled) return;
      const p = it.pairs[+b.dataset.i];
      used += 1;
      if (p.right) {
        settled = true;
        b.classList.add("right");
        [...body.querySelectorAll(".opt")].forEach(o => { o.disabled = true; });
        said.insertAdjacentHTML("beforeend",
          `<p class="explain show"><b class="good">Just so.</b> ${p.why}</p>`);
        tried += 1;
        if (gotClean && used === 1) clean += 1;
        paintHead();
        body.querySelector(".drill-next").style.display = "flex";
      } else {
        gotClean = false;
        b.classList.add("wrong", "ruled");
        b.disabled = true;
        said.insertAdjacentHTML("beforeend",
          `<p class="explain show"><b class="bad">Not that one.</b> ${p.why}</p>`);
      }
    });

    body.querySelector("#study-next").addEventListener("click", () => {
      idx += 1;
      paintHead();
      if (idx >= items.length) finish();
      else show();
    });
  }

  function finish() {
    body.innerHTML = `
      <div class="dots">${items.map(() => `<i class="dot-ok"></i>`).join("")}</div>
      <p class="q">${items.length} questions, ${clean} of them answered at the first attempt.</p>
      <p class="explain show">The order changes every time you come back to this page, and the answers move with it. If a question caught you out, the paragraph it came from is above.</p>
      <div class="playrow"><button class="pbtn primary" id="study-again">Shuffle and go again</button></div>`;
    body.querySelector("#study-again").addEventListener("click", start);
    head.innerHTML = `<strong>Study questions</strong><span class="readout">${clean} of ${items.length} at the first attempt</span>`;
  }

  start();
}

/* ---- the exercise engine ---------------------------------------------- */
function mountDrill(el) {
  const setId = el.dataset.set;
  const set = MusicaArs.DRILLS[setId];
  if (!set) { el.textContent = "Exercise set not found: " + setId; return; }

  let items = [], idx = 0, right = 0, answered = false;

  const head = document.createElement("div");
  head.className = "whead";
  const body = document.createElement("div");
  body.className = "drill-body";
  el.append(head, body);

  function shuffled(a) {
    const b = a.map((x, i) => [x, i]);
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }

  function paintHead() {
    const rec = MusicaArs.drillRecord(setId);
    const badge = rec.mastered
      ? `<span class="mark good">possessed</span>`
      : (rec.tries ? `<span class="mark">best ${rec.best}/${items.length || set.size}</span>` : "");
    head.innerHTML = `<strong>Exercise · ${set.title}</strong>
      <span class="readout">${idx < items.length ? (idx + 1) + " of " + items.length : items.length + " of " + items.length} ${badge}</span>`;
  }

  function start() {
    items = set.build();
    idx = 0; right = 0; answered = false;
    paintHead();
    showItem();
  }

  function soundRow(sound) {
    if (!sound) return "";
    if (sound.many) {
      return `<div class="playrow drill-sound">
        <button class="pbtn primary" data-s="run">Sound it</button>
        <button class="pbtn" data-s="run">Again</button>
        ${sound.drone ? `<button class="pbtn" data-s="nodrone">The line without the held sound</button>` : ""}
      </div>`;
    }
    const seq = sound.mode === "seq";
    return `<div class="playrow drill-sound">
      <button class="pbtn primary" data-s="${seq ? "seq" : "together"}">${seq ? "Sound them, one then the other" : "Sound them together"}</button>
      <button class="pbtn" data-s="${seq ? "together" : "seq"}">${seq ? "Together" : "One after the other"}</button>
      <button class="pbtn" data-s="low">Lower alone</button>
      <button class="pbtn" data-s="high">Higher alone</button>
    </div>`;
  }

  /* A sequence of several sounds, optionally over a held one. */
  async function runMany(s, withDrone) {
    const b = Audio.base * 0.8;
    const gap = 0.5, dur = 0.54;
    await Audio.unlock();
    Audio.stopAll();
    const now = Audio.ctx.currentTime;
    const span = s.voices.length * gap + 0.5;
    if (withDrone && s.drone) {
      if (s.droneShift) {
        Audio._voice(b * s.drone, span * 0.5, now, -0.3);
        Audio._voice(b * s.drone * s.droneShift, span * 0.52, now + span * 0.5, -0.3);
      } else {
        Audio._voice(b * s.drone, span, now, -0.3);
      }
    }
    s.voices.forEach((v, i) => Audio._voice(b * v, dur, now + i * gap, s.drone ? 0.3 : 0));
  }

  function showItem() {
    const it = items[idx];
    answered = false;
    const order = it.type === "mc" ? shuffled(it.options) : null;
    const opts = order
      ? order.map(([text, orig], i) => `<button class="opt" data-i="${i}" data-orig="${orig}">${text}</button>`).join("")
      : "";
    const input = it.type !== "mc"
      ? `<div class="drill-input">
          <input type="text" id="drill-in" autocomplete="off" spellcheck="false"
            placeholder="${it.type === "ratio" ? "e.g. 4:3" : "a number"}">
          <button class="pbtn primary" id="drill-go">Answer</button>
        </div>`
      : "";
    body.innerHTML = `
      <div class="dots">${items.map((_, i) =>
        `<i class="${i < idx ? (items[i]._ok ? "dot-ok" : "dot-no") : (i === idx ? "dot-now" : "")}"></i>`).join("")}</div>
      <p class="q">${it.ask}</p>
      ${soundRow(it.sound)}
      <div class="opts">${opts}</div>
      ${input}
      <p class="explain" id="drill-why"></p>
      <div class="playrow drill-next" style="display:none">
        <button class="pbtn primary" id="drill-next">Next</button>
      </div>`;

    const s = it.sound;
    if (s) {
      body.querySelector(".drill-sound").addEventListener("click", e => {
        const m = e.target.dataset.s;
        if (!m) return;
        if (s.many) { runMany(s, m !== "nodrone"); return; }
        Audio.interval(Audio.base * s.voices[0], Audio.base * s.voices[1], m);
      });
    }

    if (it.type === "mc") {
      body.querySelector(".opts").addEventListener("click", e => {
        const b = e.target.closest(".opt");
        if (!b || answered) return;
        grade(+b.dataset.orig === it.answer, b);
      });
    } else {
      const inp = body.querySelector("#drill-in");
      const submit = () => {
        if (answered) return;
        const norm = it.type === "ratio" ? MusicaArs.normRatio : MusicaArs.normNum;
        const got = norm(inp.value);
        const want = it.accept.map(norm).filter(Boolean);
        grade(!!got && want.includes(got), null, it.accept[0]);
      };
      body.querySelector("#drill-go").addEventListener("click", submit);
      inp.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
      setTimeout(() => inp.focus(), 30);
    }

    body.querySelector("#drill-next").addEventListener("click", () => {
      idx += 1;
      paintHead();
      if (idx >= items.length) finish();
      else showItem();
    });
  }

  function grade(ok, btn, want) {
    answered = true;
    items[idx]._ok = ok;
    if (ok) right += 1;
    const it = items[idx];
    if (it.type === "mc") {
      [...body.querySelectorAll(".opt")].forEach(o => {
        if (+o.dataset.orig === it.answer) o.classList.add("right");
        else if (o === btn) o.classList.add("wrong", "sel");
        o.disabled = true;
      });
    } else {
      const inp = body.querySelector("#drill-in");
      inp.disabled = true;
      inp.classList.add(ok ? "right" : "wrong");
      body.querySelector("#drill-go").disabled = true;
    }
    const why = body.querySelector("#drill-why");
    why.innerHTML = (ok ? "<b class='good'>Rightly.</b> " : `<b class='bad'>Not so.</b> ${want ? "The answer is <b>" + want + "</b>. " : ""}`) + it.why;
    why.classList.add("show");
    body.querySelector(".drill-next").style.display = "flex";
    /* Focus the Next button only after the keystroke that answered has fully
       finished, or the same Enter would answer and advance in one press and
       the explanation would never be read. */
    const nextBtn = body.querySelector("#drill-next");
    setTimeout(() => { if (document.body.contains(nextBtn)) nextBtn.focus(); }, 160);
  }

  function finish() {
    const rec = MusicaArs.recordDrill(setId, right, items.length);
    const perfect = right === items.length;
    body.innerHTML = `
      <div class="dots">${items.map(i => `<i class="${i._ok ? "dot-ok" : "dot-no"}"></i>`).join("")}</div>
      <p class="q">${right} of ${items.length}.</p>
      <p class="explain show">${perfect
        ? "A whole fresh draw, answered rightly. This block is possessed. Come back to it now and then; a habit that is not used is not kept."
        : (right >= items.length - 1
          ? "Close. One more draw — the items and the order will be different, so what you have is the skill and not the memory of a page."
          : "Not yet. The lessons this block rests on will serve before another draw. There is no hurry, and no penalty; the only thing that would be lost is the art.")}</p>
      <div class="playrow"><button class="pbtn primary" id="drill-again">Draw a fresh set</button></div>`;
    body.querySelector("#drill-again").addEventListener("click", start);
    paintHead();
    void rec;
  }

  start();
}

function mountMonochord(el) {
  const lock = el.dataset.lock ? parseRatio(el.dataset.lock) : null;
  const snap = (el.dataset.snap || "1,3/4,2/3,1/2,8/9").split(",").map(parseRatio);
  let pos = lock != null ? lock : parseRatio(el.dataset.start || "2/3");
  pos = Math.max(0.12, Math.min(1, pos));

  const W = 640, H = 168, left = 36, right = 604, y = 78;
  const xOf = p => left + (1 - p) * (right - left);
  const pOf = x => 1 - (x - left) / (right - left);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("class", "mono-svg");
  svg.innerHTML = `
    <rect class="board" x="18" y="40" width="604" height="88" rx="10"/>
    <line class="string" x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke-width="3"/>
    <rect class="nut" x="${left - 6}" y="52" width="8" height="52" rx="1"/>
    <rect class="nut" x="${right - 2}" y="52" width="8" height="52" rx="1"/>
    <g class="ticks"></g>
    <rect class="bridge" x="0" y="50" width="10" height="56" rx="2"/>
    <text class="ticklab poslab" x="320" y="150" text-anchor="middle"></text>`;
  const ticks = svg.querySelector(".ticks");
  TICKS.forEach(t => {
    const x = xOf(t.p);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("class", "tick");
    line.setAttribute("x1", x); line.setAttribute("x2", x);
    line.setAttribute("y1", "128"); line.setAttribute("y2", "138");
    const lab = document.createElementNS("http://www.w3.org/2000/svg", "text");
    lab.setAttribute("class", "ticklab");
    lab.setAttribute("x", x); lab.setAttribute("y", "28");
    lab.setAttribute("text-anchor", "middle");
    lab.textContent = t.lab;
    ticks.append(line, lab);
  });
  const bridge = svg.querySelector(".bridge");
  const poslab = svg.querySelector(".poslab");
  const readout = document.createElement("div");
  readout.className = "whead";

  function setPos(p, doSnap) {
    p = Math.max(0.12, Math.min(1, p));
    if (doSnap) {
      let best = p, e = 0.018;
      for (const s of snap) {
        const d = Math.abs(p - s);
        if (d < e) { e = d; best = s; }
      }
      p = best;
    }
    pos = p;
    bridge.setAttribute("x", xOf(p) - 5);
    const ratio = 1 / p;
    poslab.textContent = `stopped length ${asFrac(p)} of the open string  ·  pitch ${asFrac(ratio)} times the open`;
    readout.innerHTML = `<strong>Monochord</strong><span>${poslab.textContent}</span>`;
    if (typeof paintSnaps === "function") paintSnaps();
  }

  function clientToPos(ev) {
    const pt = svg.createSVGPoint();
    const e = ev.touches ? ev.touches[0] : ev;
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return pos;
    const loc = pt.matrixTransform(ctm.inverse());
    return pOf(loc.x);
  }

  if (lock == null) {
    svg.addEventListener("pointerdown", ev => {
      svg.setPointerCapture(ev.pointerId);
      setPos(clientToPos(ev), false);
      ev.preventDefault();
    });
    svg.addEventListener("pointermove", ev => {
      if (!svg.hasPointerCapture(ev.pointerId)) return;
      setPos(clientToPos(ev), false);
    });
    svg.addEventListener("pointerup", ev => {
      if (!svg.hasPointerCapture(ev.pointerId)) return;
      svg.releasePointerCapture(ev.pointerId);
      setPos(pos, true);
    });
  } else {
    bridge.style.cursor = "default";
  }

  const snaps = document.createElement("div");
  snaps.className = "snaps";
  const marks = [
    { p: 1, lab: "open 1" },
    { p: 8 / 9, lab: "tone 8/9" },
    { p: 3 / 4, lab: "fourth 3/4" },
    { p: 2 / 3, lab: "fifth 2/3" },
    { p: 1 / 2, lab: "diapason 1/2" }
  ];
  function paintSnaps() {
    [...snaps.children].forEach((b, i) => {
      b.classList.toggle("on", Math.abs(pos - marks[i].p) < 0.002);
    });
  }
  marks.forEach(m => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = m.lab;
    b.disabled = lock != null;
    b.addEventListener("click", () => setPos(m.p, false));
    snaps.appendChild(b);
  });
  setPos(pos, false);

  const play = document.createElement("div");
  play.className = "playrow";
  play.innerHTML = `
    <button class="pbtn" data-m="open">Open string</button>
    <button class="pbtn" data-m="stop">Stopped string</button>
    <button class="pbtn" data-m="seq">One after the other</button>
    <button class="pbtn primary" data-m="both">Together</button>`;
  play.addEventListener("click", e => {
    const m = e.target.dataset.m;
    if (!m) return;
    const fOpen = Audio.freqFromLength(1);
    const fStop = Audio.freqFromLength(pos);
    if (m === "open") Audio.tone(fOpen);
    else if (m === "stop") Audio.tone(fStop);
    else Audio.interval(fOpen, fStop, m === "seq" ? "seq" : "together");
  });

  el.append(readout, svg, snaps, play);
}
})();
