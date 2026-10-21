/* Checks for the hexachord and mode exercise sets.
   Run from the repository folder:  node notes/check-additions.js

   For each new set: the size of the pool (at least 20), duplicates, and the
   share of items in which the right option is strictly the longest (at most
   one third). For the hexachord melodies: each fits exactly one kind of
   hexachord, and each mutation is possible as written. For the mode
   phrases: each ends on its final and keeps the range stated in drills.js. */
global.window = global;
window.MusicaArs = { audio: { base: 216 } };
require("../js/drills.js");
const M = window.MusicaArs;
const P = M._POOLS;
const strip = s => String(s).replace(/<[^>]+>/g, "");
let bad = 0;
function fail(msg) { bad += 1; console.log("  FAIL " + msg); }

for (const id of ["hexA", "hexB", "hexC", "modeA", "modeB", "modeC"]) {
  const items = P[id].map(f => f());
  const keys = new Set();
  let longest = 0;
  items.forEach(it => {
    const k = it.ask + "|" + it.options.join("|") + "|" + (it.sound && it.sound.freqs ? it.sound.freqs.map(x => x.toFixed(2)).join(",") : "");
    if (keys.has(k)) fail(`${id}: duplicate item: ${strip(it.ask)}`);
    keys.add(k);
    const L = it.options.map(o => strip(o).length);
    const r = L[it.answer];
    if (L.every((x, i) => i === it.answer || x < r)) longest += 1;
    if (new Set(it.options).size !== it.options.length) fail(`${id}: repeated option in ${strip(it.ask)}`);
    if (it.answer < 0 || it.answer >= it.options.length) fail(`${id}: answer out of range in ${strip(it.ask)}`);
  });
  const share = longest / items.length;
  console.log(`${id}: ${items.length} items; right option strictly longest in ${longest} (${(share * 100).toFixed(0)}%)`);
  if (items.length < 20) fail(`${id}: fewer than 20 items`);
  if (share > 1 / 3) fail(`${id}: right option longest in more than a third`);
}

const HEX = M.HEX;
const kindsOf = seq => new Set(P._hexOf(seq).map(k => HEX[k].kind));
P._HEXB.forEach(([kind, seq]) => {
  const ks = kindsOf(seq);
  if (ks.size !== 1 || !ks.has(kind)) fail(`hexB melody ${seq.join(" ")} fits ${[...ks].join(", ") || "none"}`);
});
P._HEXBM.forEach(([seq]) => {
  if (kindsOf(seq).size !== 1) fail(`hexB mi-fa melody ${seq.join(" ")} is not in exactly one kind`);
});
P._MUT.forEach(m => {
  const i = m.seq.indexOf(m.at);
  const A = HEX[m.from].notes, B = HEX[m.to].notes;
  if (!A.includes(m.at) || !B.includes(m.at)) fail(`mutation at ${m.at} is not shared`);
  if (!m.seq.slice(0, i + 1).every(n => A.includes(n))) fail(`mutation ${m.seq.join(" ")}: notes before it not in ${m.from}`);
  if (!m.seq.slice(i).every(n => B.includes(n))) fail(`mutation ${m.seq.join(" ")}: notes after it not in ${m.to}`);
  if (m.seq.every(n => A.includes(n))) fail(`mutation ${m.seq.join(" ")}: no mutation needed`);
  const R = M.GAMUT_R;
  const up = R[m.seq[m.seq.length - 1]] > R[m.seq[0]];
  const s2 = M.SYL[B.indexOf(m.at)];
  if (s2 !== (up ? "re" : "la")) fail(`mutation ${m.seq.join(" ")}: into ${s2}, against the rule`);
  /* No other shared sound before the first missing one gives the rule's syllable. */
  const firstMissing = m.seq.findIndex(n => !A.includes(n));
  const alt = m.seq.slice(0, firstMissing).filter(n => n !== m.at && B.includes(n) && M.SYL[B.indexOf(n)] === s2);
  if (alt.length) fail(`mutation ${m.seq.join(" ")}: also possible on ${alt.join(", ")}`);
});

const R = M.GAMUT_R;
M.MODES.forEach(m => {
  M.MODE_PHRASES[m.n].forEach(seq => {
    const f = R[m.fin];
    const tag = `mode ${m.n}: ${seq.join(" ")}`;
    if (seq[seq.length - 1] !== m.fin) fail(`${tag} does not end on ${m.fin}`);
    const lo = Math.min(...seq.map(n => R[n])) / f;
    const hi = Math.max(...seq.map(n => R[n])) / f;
    if (m.auth) {
      if (hi < 2 * 8 / 9 - 1e-9) fail(`${tag}: authentic but does not reach the seventh`);
      if (lo < 8 / 9 - 1e-9) fail(`${tag}: authentic but goes more than a tone below`);
    } else {
      if (lo > 27 / 32 + 1e-9) fail(`${tag}: plagal but does not reach a third below`);
      if (hi > 27 / 16 + 1e-9) fail(`${tag}: plagal but rises above the sixth`);
    }
    seq.forEach(n => { if (R[n] == null) fail(`${tag}: unknown sound ${n}`); });
  });
});

console.log(bad ? `${bad} failure(s)` : "All checks pass.");
process.exitCode = bad ? 1 : 0;
