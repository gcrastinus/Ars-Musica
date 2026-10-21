/* Checks for the study sets.
   Run from the repository folder:  node notes/check-study.js [set ...]

   For each set: the number of questions, the index of the true option in
   range, and the count of questions in which the true option is the unique
   longest (tags removed, spaces collapsed; a tie does not count). The rule
   is that this count may not exceed one third of the set. With no
   arguments, every set is listed. */
global.window = global;
window.MusicaArs = {};
require("../js/study.js");
require("../js/study-cont.js");
const S = window.MusicaArs.STUDY;
const norm = s => String(s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const want = process.argv.slice(2);
let bad = 0;
for (const id of Object.keys(S)) {
  if (want.length && !want.includes(id)) continue;
  const qs = S[id];
  let longest = 0;
  qs.forEach((q, n) => {
    if (q.a < 0 || q.a >= q.o.length) { bad += 1; console.log(`  FAIL ${id} q${n + 1}: answer out of range`); }
    const L = q.o.map(o => norm(o[0]).length);
    if (L.every((x, i) => i === q.a || x < L[q.a])) longest += 1;
  });
  const over = longest * 3 > qs.length;
  if (over) bad += 1;
  console.log(`${id}: ${qs.length} questions; true option unique longest in ${longest}${over ? "  OVER ONE THIRD" : ""}`);
}
process.exitCode = bad ? 1 : 0;
