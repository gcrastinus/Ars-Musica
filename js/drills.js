/* Exercise sets for the palaestra.

   Every set is built fresh on each attempt: the items are drawn from a larger
   pool and the options are shuffled, so that a block cannot be memorised —
   only the skill can be. A block counts as possessed only when a whole fresh
   draw is answered rightly.

   Ratios here are PITCH ratios (how many times the lower sound), except where
   a question explicitly speaks of the length of a string. */

window.MusicaArs = window.MusicaArs || {};

(function () {

/* ---------- small helpers ---------- */
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a || 1; }
function red(n, d) { const g = gcd(n, d); return [n / g, d / g]; }
function rs(n, d) { const [a, b] = red(n, d); return a + ":" + b; }

const R = {
  int: n => Math.floor(Math.random() * n),
  pick: a => a[Math.floor(Math.random() * a.length)],
  shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  },
  sample(a, n) { return R.shuffle(a).slice(0, Math.min(n, a.length)); }
};

/* An mc item: options is an array of strings, answer is the index of the
   right one BEFORE shuffling. The engine shuffles and remaps. */
function mc(ask, options, answer, why, sound) {
  return { type: "mc", ask, options, answer, why, sound };
}
function ratio(ask, accept, why, sound) {
  return { type: "ratio", ask, accept: [].concat(accept), why, sound };
}
function num(ask, accept, why) {
  return { type: "num", ask, accept: [].concat(accept).map(String), why };
}
function two(a, b, mode) { return { voices: [a, b], mode: mode || "both" }; }

/* ---------- pools ---------- */

const NAMED = [
  { r: 1,     nm: "Unison — one sound twice",       why: "The pitches are equal. There is no interval yet, only the measure by which difference is heard." },
  { r: 2,     nm: "Diapason — the eighth (2:1)",    why: "The half of the string against the whole. It blends so completely that the higher seems the lower raised." },
  { r: 3 / 2, nm: "Diapente — the fifth (3:2)",     why: "Two thirds of the string against the whole. It blends, but you plainly hear two." },
  { r: 4 / 3, nm: "Diatessaron — the fourth (4:3)", why: "Three quarters of the string against the whole. A concord, tighter and less open than the fifth." },
  { r: 9 / 8, nm: "Tone (9:8)",                     why: "The fifth diminished by the fourth. It is a step, not a concord: the two sounds do not blend, they stand next to one another." }
];

const CONCORD = [
  { r: 2,     nm: "diapason, 2:1" },
  { r: 3 / 2, nm: "diapente, 3:2" },
  { r: 4 / 3, nm: "diatessaron, 4:3" },
  { r: 4,     nm: "the double diapason, 4:1" },
  { r: 3,     nm: "diapason and diapente, 3:1" }
];
const DISCORD = [
  { r: 9 / 8,       nm: "the tone, 9:8" },
  { r: 256 / 243,   nm: "the leimma, 256:243" },
  { r: 81 / 64,     nm: "the ditone, 81:64" },
  { r: 27 / 16,     nm: "fifth and tone, 27:16" },
  { r: 32 / 27,     nm: "the semiditone, 32:27" },
  { r: 16 / 9,      nm: "two fourths compounded, 16:9" },
  { r: 243 / 128,   nm: "fifth and ditone, 243:128" }
];

/* ---------- E1 · hearing the concords ---------- */
function earItem() {
  const t = R.pick(NAMED);
  const opts = NAMED.map(x => x.nm);
  return mc(
    "Sound this, then say what interval it is.",
    opts, opts.indexOf(t.nm),
    t.why,
    two(1, t.r)
  );
}

/* ---------- E2 · concord and discord ---------- */
function judgeItem() {
  const useConcord = Math.random() < 0.5;
  const t = R.pick(useConcord ? CONCORD : DISCORD);
  return mc(
    "Sound the two together. Do they blend into one richer sound, or do they stand apart?",
    ["They blend — a concord", "They stand apart — a discord"],
    useConcord ? 0 : 1,
    `That was ${t.nm}. ` + (useConcord
      ? "The concords of this art are the multiple and the first superparticular ratios: 2:1, 3:2, 4:3, and what is compounded from them."
      : "It is a lawful interval of the art and a necessary step in the scale, but it is not a concord."),
    two(1, t.r)
  );
}

/* ---------- E3 · length and pitch ---------- */
const LENGTH_ITEMS = [
  () => ratio("The string is stopped at <b>3/4</b> of its length. What is the pitch of the stopped string to the open string? Give it as a ratio.",
    ["4:3"], "Lengths 4:3, so pitches 4:3 the other way. Shorter length, higher pitch — the pitch ratio is the reciprocal of the length ratio.",
    two(1, 4 / 3, "seq")),
  () => ratio("The string is stopped at <b>2/3</b> of its length. What is the pitch of the stopped string to the open string?",
    ["3:2"], "The diapente. Two thirds of the length gives three halves the pitch.",
    two(1, 3 / 2, "seq")),
  () => ratio("The string is stopped at <b>8/9</b> of its length. What interval sounds against the open string? Give the ratio.",
    ["9:8"], "The tone. The invariable rule: pitch ratio is the length ratio inverted.",
    two(1, 9 / 8, "seq")),
  () => ratio("You want the <b>diapason</b> above the open string. At what fraction of the length do you stop? Answer as a fraction, e.g. 3:4.",
    ["1:2"], "Half the string. The first and simplest concord."),
  () => ratio("You want the <b>diatessaron</b> above the open string. At what fraction of the length do you stop?",
    ["3:4"], "Three quarters. Lengths 4:3 give pitches 4:3 inverted."),
  () => ratio("You want the <b>diapente</b> above the open string. At what fraction of the length do you stop?",
    ["2:3"], "Two thirds. This is the stopping-place a beginner should be able to find without thinking."),
  () => ratio("A length of 2/3 sounds a fifth above the open string. What length sounds a fifth above <em>that</em>?",
    ["4:9"], "Two thirds of two thirds. Intervals compound by multiplying the lengths, not by taking equal bites out of the string.",
    null),
  () => mc("You shorten the sounding length and change nothing else. The pitch",
    ["gets higher", "gets lower", "stays the same, since it is the same string"], 0,
    "Shorter sounding length, higher pitch. Everything in the art rests on this one observed rule."),
  () => mc("The lengths of two sounding strings stand as 3:2. Their pitches stand as",
    ["3:2, but the other way about — the shorter string is the higher",
     "3:2, the longer string being the higher",
     "2:3, the shorter string being the lower"], 0,
    "The ratio is the same; which term belongs to which sound is inverted. Getting this backwards is the commonest error in the whole art."),
  () => ratio("Two strings sound the ratio 16:9. If the first is 144 units long, how long is the second? Give your answer as a ratio of the two lengths, shorter to longer.",
    ["9:16"], "Lengths are inverse to pitches. You need not know 144 at all — the question is testing whether the inversion is automatic in you yet."),
  () => mc("Why does the art measure by <em>ratio</em> rather than by leftover inches of string?",
    ["Because intervals compound by multiplication, and inches would have you add",
     "Because inches were not yet invented in Greece",
     "Because the string is not really straight"], 0,
    "Compounding a fifth with a fourth is (3:2)×(4:3), not 'add the bits you did not use'. This is why harmonics is arithmetic applied to sound and not a geometrical cutting of a rod.")
];

/* ---------- E4 · the arithmetic of intervals ---------- */
const ARITH_ITEMS = [
  () => ratio("A <b>diapente</b> compounded with a <b>diatessaron</b>. What interval results?",
    ["2:1"], "(3:2) × (4:3) = 12:6 = 2:1. A fifth and a fourth make the diapason. This is the first great arithmetic of the art."),
  () => ratio("A <b>diatessaron</b> taken away from a <b>diapente</b>.",
    ["9:8"], "(3:2) ÷ (4:3) = (3:2) × (3:4) = 9:8. The tone is what is left over when the two concords are compared."),
  () => ratio("<b>Two tones</b> compounded.",
    ["81:64"], "(9:8) × (9:8) = 81:64, the ditone. Note that it is not 5:4; the difference between them is the syntonic comma."),
  () => ratio("A <b>ditone</b> taken away from a <b>diatessaron</b>.",
    ["256:243"], "(4:3) ÷ (81:64) = 256:243, the leimma — the remnant that finishes the tetrachord. It is not half a tone."),
  () => ratio("A <b>diapente</b> taken away from a <b>diapason</b>.",
    ["4:3"], "(2:1) ÷ (3:2) = 4:3. The fourth is what the fifth lacks of the diapason."),
  () => ratio("A <b>diapason</b> compounded with a <b>diapente</b>.",
    ["3:1"], "(2:1) × (3:2) = 3:1, the triple. It is in the tetractys."),
  () => ratio("A <b>diapason</b> compounded with a <b>diapason</b>.",
    ["4:1"], "(2:1) × (2:1) = 4:1, the double diapason, the fourth number of the tetractys."),
  () => ratio("Two <b>diatessarons</b> compounded.",
    ["16:9"], "(4:3) × (4:3) = 16:9. Two fourths fall short of the diapason by a tone, since (2:1) ÷ (16:9) = 9:8."),
  () => ratio("A <b>tone</b> taken away from a <b>diapason</b>.",
    ["16:9"], "(2:1) ÷ (9:8) = 16:9 — which is also two fourths compounded. Both roads arrive at the same place."),
  () => ratio("<b>Three tones</b> compounded.",
    ["729:512"], "(9:8)³ = 729:512. This is slightly more than half the diapason; the excess over 2:1 taken twice is the comma."),
  () => ratio("A <b>tone</b> compounded with a <b>leimma</b>.",
    ["32:27"], "(9:8) × (256:243) = 32:27, the semiditone — the small third of the Pythagorean reckoning."),
  () => ratio("A <b>diapente</b> compounded with a <b>tone</b>.",
    ["27:16"], "(3:2) × (9:8) = 27:16."),
  () => ratio("A <b>ditone</b> taken away from a <b>diapason</b>.",
    ["128:81"], "(2:1) ÷ (81:64) = 128:81."),
  () => ratio("Twelve <b>diapentes</b> compounded, then seven <b>diapasons</b> taken away. What is left?",
    ["531441:524288"], "The Pythagorean comma. It is not nothing, and that is why no instrument of fixed pitch can close its circle with pure fifths."),
  () => mc("To compound two intervals, you",
    ["multiply their ratios", "add their ratios", "add the string lengths"], 0,
    "Compounding is multiplying. This single fact is what makes harmonics a part of arithmetic.")
];

/* ---------- E5 · the kinds of ratio ---------- */
const KIND_OPTS = ["Multiplex", "Superparticularis", "Superpartiens", "Multiplex superparticularis", "Multiplex superpartiens"];
const KINDS = [
  { r: "2:1",   k: 0, nm: "duplus",                          why: "The greater contains the less exactly twice and nothing over: a multiple, and the first of them." },
  { r: "3:1",   k: 0, nm: "triplus",                         why: "Three times exactly. A multiple." },
  { r: "4:1",   k: 0, nm: "quadruplus",                      why: "Four times exactly. A multiple." },
  { r: "3:2",   k: 1, nm: "sesquialter",                     why: "Once, and half of the less over. A superparticular, and the first of them." },
  { r: "4:3",   k: 1, nm: "sesquitertius",                   why: "Once, and a third of the less over. The second superparticular." },
  { r: "5:4",   k: 1, nm: "sesquiquartus",                   why: "Once, and a fourth over. A superparticular — the third of them, and the ratio the sixteenth century would admit as a concord." },
  { r: "9:8",   k: 1, nm: "sesquioctavus",                   why: "Once, and an eighth over. A superparticular, but far down the order: this is why the tone is lawful and yet not a concord." },
  { r: "5:3",   k: 2, nm: "superbipartiens tertias",         why: "Once, and two thirds of the less over — more than one like part. A superpartient." },
  { r: "7:4",   k: 2, nm: "supertripartiens quartas",        why: "Once, and three quarters over. A superpartient." },
  { r: "16:9",  k: 2, nm: "superseptipartiens nonas",        why: "Once, and seven ninths over. A superpartient — the class the ancients allowed no concord to." },
  { r: "256:243", k: 2, nm: "a superpartient",               why: "Once, and thirteen parts of two hundred forty-three over. The leimma is a superpartient, which is one reason it is the least noble interval in the scale." },
  { r: "9:4",   k: 3, nm: "duplex sesquiquartus",            why: "Twice, and a quarter of the less over: a multiple with a superparticular part." },
  { r: "8:3",   k: 4, nm: "duplex superbipartiens tertias",  why: "Twice, and two thirds over. The diapason-plus-diatessaron falls in this class — which is exactly why the Pythagoreans refused it the name of concord and Ptolemy allowed it." }
];
function kindItem() {
  const t = R.pick(KINDS);
  if (Math.random() < 0.55) {
    return mc(`To which kind of ratio does <b>${t.r}</b> belong?`, KIND_OPTS, t.k, t.why);
  }
  const wrong = R.sample(KINDS.filter(x => x.nm !== t.nm && x.nm !== "a superpartient"), 3).map(x => x.nm);
  const opts = [t.nm].concat(wrong);
  return mc(`What is the proper Latin name of the ratio <b>${t.r}</b>?`,
    opts, 0, t.why);
}
const KIND_EXTRA = [
  () => mc("Why are 2:1, 3:2 and 4:3 called the <em>first</em> concords?",
    ["Because 2:1 is the first multiple, and 3:2 and 4:3 are the first two superparticulars",
     "Because they were discovered first, historically",
     "Because they are the only ratios a voice can sing"], 0,
    "The claim is one of arithmetical order, not of history or of vocal skill. Without the classification of ratios the word 'first' has no meaning."),
  () => mc("Boethius holds that all inequality proceeds from",
    ["equality", "the number ten", "the tetractys"], 0,
    "Equality is prior and simple; every inequality is generated from it. This is why the unison is treated before any interval."),
  () => mc("5:4 is a superparticular, and stands nearer the beginning than 9:8. Why then did the Pythagoreans deny it the name of concord?",
    ["Because their bound was the tetractys: concord arises only within the first four numbers",
     "Because 5:4 cannot be sounded on a string",
     "Because 5 is not a prime number"], 0,
    "The bound was set at four. Zarlino later moved it to six — the senario — which is how the third was admitted. The dispute is about where the bound belongs, not about whether ratios matter.")
];

/* ---------- E6 · the means ---------- */
const MEAN_ITEMS = [
  () => num("What is the <b>arithmetic</b> mean of 6 and 12?",
    [9], "9 exceeds 6 by 3 and is exceeded by 12 by 3: equal <em>differences</em>."),
  () => num("What is the <b>harmonic</b> mean of 6 and 12?",
    [8], "8 exceeds 6 by 2, which is a third of 6; 12 exceeds 8 by 4, which is a third of 12. The mean exceeds and is exceeded by the same <em>part</em> of the extremes."),
  () => mc("What is the <b>geometric</b> mean of 6 and 12?",
    ["There is none in whole numbers, since 72 is not a square",
     "9, the same as the arithmetic mean",
     "8, the same as the harmonic mean"], 0,
    "x² = 72 has no whole-number root. This small fact is the reason the tone cannot be halved in ratio."),
  () => num("What is the <b>harmonic</b> mean of 3 and 6?",
    [4], "3 : 4 : 6 gives the diatessaron and then the diapente, filling the diapason — the same figure as 6:8:12."),
  () => num("What is the <b>arithmetic</b> mean of 3 and 6?",
    [4.5, "4.5", "9/2"], "Four and a half — not a whole number, which is why the tetrad is written 6:8:9:12 rather than 3:4:...:6."),
  () => ratio("In the musical proportion <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 8?",
    ["4:3"], "The diatessaron."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 9?",
    ["3:2"], "The diapente."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 8 and 9?",
    ["9:8"], "The tone — and it is exactly the difference between the harmonic and the arithmetic mean."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 8 and 12?",
    ["3:2"], "The diapente again, from the other mean."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 9 and 12?",
    ["4:3"], "The diatessaron again."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 12?",
    ["2:1"], "The diapason. All four concords, and the tone, live in four numbers."),
  () => mc("Why can the tone 9:8 not be divided into two equal intervals?",
    ["Because a superparticular ratio in least terms admits no mean proportional in whole numbers",
     "Because the ear cannot hear so small a difference",
     "Because Boethius forbade it"], 0,
    "The theorem is Archytas's, reported by Boethius, and stands in the Sectio canonis. It is why the leimma is a remnant and not a half, and why 'semitone' is a name rather than a measure."),
  () => mc("In the musical proportion, 8 is to 6 and 12 as",
    ["the harmonic mean, exceeding and exceeded by the same part of each extreme",
     "the arithmetic mean, exceeding and exceeded by the same amount",
     "the geometric mean, standing in the same ratio to each"], 0,
    "Differences 2 and 4 stand as the extremes 6 and 12. That is the definition of the harmonic mean.")
];

/* ---------- E7 · building the diapason ---------- */
const SCALE_ITEMS = [
  () => mc("In the diatonic genus, the tetrachord — a fourth — is filled by",
    ["two tones and a remnant", "three equal steps", "a tone and two equal semitones"], 0,
    "Two tones make 81:64; what remains of 4:3 is 256:243, the leimma. The three steps are not equal and cannot be made so."),
  () => ratio("Compute the remnant: a <b>diatessaron</b> less <b>two tones</b>.",
    ["256:243"], "(4:3) ÷ (81:64) = 256:243. You have just derived the leimma yourself."),
  () => mc("Two tetrachords fill the diapason when they are joined by",
    ["a tone of disjunction", "a leimma", "nothing — two fourths already make a diapason"], 0,
    "(4:3) × (9:8) × (4:3) = 2:1. Two fourths alone give 16:9, which falls short by exactly that tone."),
  () => ratio("Verify it: compound <b>4:3</b>, <b>9:8</b> and <b>4:3</b>. What results?",
    ["2:1"], "The diapason. The scale is not a convention; it is a consequence."),
  () => mc("Why does the filled diapason have eight standing sounds?",
    ["Because 4:3 + 9:8 + 4:3 fills it, and that path has eight sounds counting both ends",
     "Because there are eight planets",
     "Because eight is the first cube"], 0,
    "The eight is a consequence of how the diapason is filled. The name 'octave' is a later counting of what was already there."),
  () => mc("Ascending, the diatonic diapason from the lowest sound of a tetrachord runs",
    ["leimma, tone, tone, tone, leimma, tone, tone",
     "tone, tone, tone, leimma, tone, tone, leimma",
     "seven equal steps"], 0,
    "Where the leimmata fall depends on where you begin — which is what the ancients meant by the species of the diapason, and the medievals by the modes."),
  () => ratio("Two tetrachords are joined <em>without</em> a tone between them — conjunct, sharing a sound. What interval do they span together?",
    ["16:9"], "(4:3) × (4:3) = 16:9, a tone short of the diapason. This is the conjunct arrangement of the Lesser Perfect System."),
  () => mc("The leimma 256:243 is",
    ["the remnant of the fourth after two tones, and smaller than half a tone",
     "exactly half of the tone 9:8",
     "the same as the modern equal semitone"], 0,
    "It is less than half a tone: two leimmata fall short of 9:8 by the Pythagorean comma. The equal semitone of a modern keyboard is a third thing again, and irrational.")
];

/* ---------- E8 · which science is this ---------- */
const SCI_OPTS = [
  "The liberal art of music (harmonics)",
  "Arithmetic",
  "Natural philosophy",
  "Moral and political science",
  "The fine art of music",
  "Sacred doctrine"
];
const SCI = [
  ["The diapente is the ratio 3:2.", 0, "A claim about sounding pitch demonstrated through number: the middle science itself."],
  ["A fifth compounded with a fourth makes a diapason.", 0, "Sounding intervals, demonstrated arithmetically. Harmonics."],
  ["The tone cannot be divided into two equal ratios.", 1, "This is a theorem about superparticular ratios. It is true of every superparticular, sounding or not — so it belongs to arithmetic, which harmonics borrows."],
  ["All inequality proceeds from equality.", 1, "Pure arithmetic. Harmonics presupposes it and does not prove it."],
  ["A struck string moves the air, and the moved air the ear.", 2, "A causal account of a natural process through the natures of bodies: natural philosophy, not harmonics."],
  ["The heavens make no sound, because they do not strike a medium.", 2, "Aristotle's argument in the De caelo, followed by St. Thomas. It is a claim about bodies, settled in natural philosophy."],
  ["The pitch of a string varies as the square root of the tension.", 2, "Vincenzo Galilei's law. Its middle term is the nature of a stretched body, so it belongs to physics."],
  ["Boys should be taught music so far as it forms them, and no further.", 3, "Aristotle in the Politics. The end is the character of the citizen: moral and political science."],
  ["The soul is moved in various ways by various melodies.", 3, "St. Thomas cites this when asking about song in divine praise. It concerns the passions and their ordering."],
  ["This antiphon is beautifully made, and delights the hearer.", 4, "A judgement about a work made to please: the fine art, which is not the liberal art."],
  ["The composer should not let the tune swallow the words.", 4, "Advice about making a work well — with a moral edge, but its subject is the making."],
  ["God ought to be praised with song.", 5, "St. Thomas treats this at ST II-II q.91. Its principles are revealed, not arithmetical."],
  ["Beauty requires integrity, due proportion, and clarity.", 5, "A claim about being as such, made in sacred doctrine at ST I q.39 a.8. Harmonics gives it one verified instance; it does not establish it."],
  ["Two thirds of the string sounds a fifth above the whole.", 0, "The middle science: a physical subject, an arithmetical middle term."],
  ["Twelve fifths overshoot seven diapasons.", 1, "No power of 3 is a power of 2. The proof needs no sound at all."]
];
function sciItem() {
  const t = R.pick(SCI);
  return mc(`To which study does this belong?<br><em>“${t[0]}”</em>`, SCI_OPTS, t[1], t[2]);
}

/* ---------- E10 · the tetrachord divided (East) ---------- */
function seqSound(freqsRel) { return { voices: freqsRel, mode: "seq", many: true }; }

function eastGenItem() {
  const T = MusicaArs.TETRA;
  const t = R.pick(T);
  const opts = T.map(x => x.name);
  let c = 0;
  const rel = [1];
  t.steps.forEach(s => { c += s; rel.push(MusicaArs.fromCents(c)); });
  return {
    type: "mc",
    ask: "Four sounds, filling one fourth. How is the fourth divided?",
    options: opts,
    answer: opts.indexOf(t.name),
    why: `That was the <b>${t.name.toLowerCase()}</b> — ${t.note}.` +
      (t.era === "1881"
        ? " A division of the Patriarchal Committee of 1881; its fourth is 500¢, two cents wider than the true 4:3."
        : " An ancient division; its fourth is the true 4:3, 498.04¢."),
    sound: { voices: rel, mode: "seq", many: true }
  };
}

/* ---------- E11 · the ison ---------- */
const ISON_DEG = (function () {
  const T = 9 / 8, L = 256 / 243;
  return [1, T, T * T, T * T * L, T * T * L * T, T * T * L * T * T];
})();
const ISON_REST = [
  { i: 0, nm: "On the held sound itself" },
  { i: 1, nm: "A tone above it" },
  { i: 3, nm: "A fourth above it" },
  { i: 4, nm: "A fifth above it" }
];
function isonWalk(endIdx) {
  const path = [];
  let cur = 2 + R.int(3);
  for (let k = 0; k < 5; k++) {
    path.push(cur);
    cur += R.pick([-1, 1, 1, -1, 2, -2]);
    cur = Math.max(0, Math.min(5, cur));
  }
  path.push(endIdx === 0 ? 1 : Math.min(5, endIdx + 1));
  path.push(endIdx);
  return path.map(i => ISON_DEG[i]);
}
function isonItem() {
  if (Math.random() < 0.72) {
    const t = R.pick(ISON_REST);
    const opts = ISON_REST.map(x => x.nm);
    return {
      type: "mc",
      ask: "A line moves above a held sound. Where does it come to rest?",
      options: opts,
      answer: opts.indexOf(t.nm),
      why: `It rested ${t.nm.toLowerCase().replace("on the held sound itself", "on the held sound")}. ` +
        "Against a fixed sound, a resting place is heard as a relation and not merely as a pitch — which is the whole use of an ison.",
      sound: { voices: isonWalk(t.i), mode: "seq", drone: 1, many: true }
    };
  }
  const moved = Math.random() < 0.5;
  return {
    type: "mc",
    ask: "Listen to the held sound beneath the line. Does it move?",
    options: ["It stays on one pitch throughout", "It moves once, part way through"],
    answer: moved ? 1 : 0,
    why: moved
      ? "It shifted. Isokratai do move — the drone follows the mode where the melody demands it, and a shifting ison is not a mistake."
      : "It held. The commonest case, and the one that gives the line its measure.",
    sound: { voices: isonWalk(R.pick([0, 1, 3, 4])), mode: "seq", drone: 1, droneShift: moved ? 4 / 3 : 0, many: true }
  };
}

/* ---------- assembly ---------- */
function fromFactories(list, n) { return R.sample(list, n).map(f => f()); }

const SETS = {
  "ear": {
    title: "Hearing the concords",
    size: 10,
    build: () => Array.from({ length: 10 }, earItem)
  },
  "judge": {
    title: "Concord and discord",
    size: 10,
    build: () => Array.from({ length: 10 }, judgeItem)
  },
  "length": {
    title: "Length and pitch",
    size: 8,
    build: () => fromFactories(LENGTH_ITEMS, 8)
  },
  "arith": {
    title: "The arithmetic of intervals",
    size: 10,
    build: () => fromFactories(ARITH_ITEMS, 10)
  },
  "kinds": {
    title: "The kinds of ratio",
    size: 10,
    build: () => R.shuffle(
      Array.from({ length: 7 }, kindItem).concat(fromFactories(KIND_EXTRA, 3))
    )
  },
  "means": {
    title: "The means, and the musical proportion",
    size: 10,
    build: () => fromFactories(MEAN_ITEMS, 10)
  },
  "scale": {
    title: "Building the diapason",
    size: 8,
    build: () => fromFactories(SCALE_ITEMS, 8)
  },
  "science": {
    title: "Which science is this?",
    size: 10,
    build: () => Array.from({ length: 10 }, sciItem)
  },
  "eastgen": {
    title: "The tetrachord divided",
    size: 8,
    build: () => Array.from({ length: 8 }, eastGenItem)
  },
  "ison": {
    title: "The held sound",
    size: 8,
    build: () => Array.from({ length: 8 }, isonItem)
  }
};

SETS["exam"] = {
  title: "The examination",
  size: 14,
  build: () => R.shuffle([
    earItem(), earItem(), judgeItem(), judgeItem(),
    sciItem(), sciItem(), kindItem(), kindItem()
  ].concat(
    fromFactories(LENGTH_ITEMS, 2),
    fromFactories(ARITH_ITEMS, 2),
    fromFactories(MEAN_ITEMS, 1),
    fromFactories(SCALE_ITEMS, 1)
  ))
};

MusicaArs.DRILLS = SETS;

/* Answer checking, exported so the widget layer stays thin. */
MusicaArs.normRatio = function (s) {
  const t = String(s).trim().replace(/\s+/g, "").replace(/[/⁄]/g, ":");
  const m = t.match(/^(\d+):(\d+)$/);
  if (!m) return null;
  const a = +m[1], b = +m[2];
  if (!a || !b) return null;
  return rs(a, b);
};
MusicaArs.normNum = function (s) {
  const t = String(s).trim().replace(/\s+/g, "");
  if (/^\d+$/.test(t)) return t;
  const f = t.match(/^(\d+)[:/](\d+)$/);
  if (f) return String(+f[1] / +f[2]);
  if (/^\d*\.\d+$/.test(t)) return String(parseFloat(t));
  return null;
};

})();
