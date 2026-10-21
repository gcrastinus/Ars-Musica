/* Exercise sets for the palaestra.

   Every set is built fresh on each attempt: the items are drawn from a larger
   pool and the options are shuffled, so that a block cannot be memorized —
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
  { r: 1,     nm: "Unison (one sound twice)",       why: "The pitches are equal. There is no interval yet, only the measure by which difference is heard." },
  { r: 2,     nm: "Diapason (the eighth, 2:1)",     why: "This is half the string against the whole, and it blends so completely that the higher seems the lower raised." },
  { r: 3 / 2, nm: "Diapente (the fifth, 3:2)",      why: "This is two thirds of the string against the whole; it blends, but two sounds are plainly heard." },
  { r: 4 / 3, nm: "Diatessaron (the fourth, 4:3)",  why: "This is three quarters of the string against the whole: a concord, tighter and less open than the fifth." },
  { r: 9 / 8, nm: "Tone (9:8)",                     why: "This is the fifth diminished by the fourth. It is a step, not a concord, because the two sounds do not blend but stand next to one another." }
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
    ["They blend, and so make a concord", "They stand apart, and so make a discord"],
    useConcord ? 0 : 1,
    `That was ${t.nm}. ` + (useConcord
      ? "The concords of this art are the multiple and the first superparticular ratios: 2:1, 3:2, 4:3, and what is compounded from them."
      : "It is a lawful interval of the art and a necessary step in the scale, but it is not a concord."),
    two(1, t.r)
  );
}

function judgeClarity() {
  const wide = Math.random() < 0.5;
  const r = wide ? (3 / 2) * Math.pow(2, 22 / 1200) : 3 / 2;
  return mc(
    "Sound these together. Is this the fifth of the art, unimpaired, or is the blend injured?",
    ["Unimpaired: the fifth as the art measures it", "Injured: near a fifth, but the blend is not clean"],
    wide ? 1 : 0,
    wide
      ? "The upper sound was moved by about a comma, so due proportion is approached but not kept. Clarity, which St. Thomas names with proportion among the conditions of beauty, is what has been lost."
      : "That was 3:2, the blend of the diapente.",
    two(1, r)
  );
}

function judgeIntegrity() {
  const missing = Math.random() < 0.5;
  const L = 256 / 243, T = 9 / 8;
  const rel = missing ? [1, L, 4 / 3] : [1, L, L * T, 4 / 3];
  return {
    type: "mc",
    ask: "A fourth is to be filled by remnant, tone, and tone. Is this fourth complete, or is a step missing?",
    options: ["Complete: the tetrachord as the art fills it", "Incomplete: a step is missing"],
    answer: missing ? 1 : 0,
    why: missing
      ? "The fourth was missing one of its steps. Integrity is a condition of beauty, so what is impaired is, by that fact, ugly."
      : "Leimma, tone, and tone fill the fourth.",
    sound: { voices: rel, mode: "seq", many: true }
  };
}

/* ---------- E3 · length and pitch ---------- */
const LENGTH_ITEMS = [
  () => ratio("The string is stopped at <b>3/4</b> of its length. What is the pitch of the stopped string to the open string? Give it as a ratio.",
    ["4:3"], "The lengths are 4:3, so the pitches are 4:3 the other way. The shorter length gives the higher pitch, because the pitch ratio is the reciprocal of the length ratio.",
    two(1, 4 / 3, "seq")),
  () => ratio("The string is stopped at <b>2/3</b> of its length. What is the pitch of the stopped string to the open string?",
    ["3:2"], "This is the diapente: two thirds of the length gives three halves the pitch.",
    two(1, 3 / 2, "seq")),
  () => ratio("The string is stopped at <b>8/9</b> of its length. What interval sounds against the open string? Give the ratio.",
    ["9:8"], "This is the tone. The rule does not vary: the pitch ratio is the length ratio inverted.",
    two(1, 9 / 8, "seq")),
  () => ratio("To sound the <b>diapason</b> above the open string, at what fraction of the length is the string stopped? Answer as a fraction, e.g. 3:4.",
    ["1:2"], "Half the string gives the first and simplest concord."),
  () => ratio("To sound the <b>diatessaron</b> above the open string, at what fraction of the length is the string stopped?",
    ["3:4"], "Three quarters: lengths of 4:3 give pitches of 4:3, inverted."),
  () => ratio("To sound the <b>diapente</b> above the open string, at what fraction of the length is the string stopped?",
    ["2:3"], "Two thirds. This is the stopping-place a beginner should learn to find without hesitation."),
  () => ratio("A length of 2/3 sounds a fifth above the open string. What length sounds a fifth above <em>that</em>?",
    ["4:9"], "It is two thirds of two thirds, because intervals compound by multiplying the lengths, not by taking equal pieces off the string.",
    null),
  () => mc("If the sounding length is shortened and nothing else is changed, the pitch",
    ["gets higher", "gets lower", "stays the same, since it is the same string"], 0,
    "A shorter sounding length gives a higher pitch, and everything in the art depends on this one observed rule."),
  () => mc("The lengths of two sounding strings stand as 3:2. Their pitches stand as",
    ["3:2, but the other way about, since the shorter string is the higher",
     "3:2, the longer string being the higher",
     "2:3, the shorter string being the lower"], 0,
    "The ratio is the same; which term belongs to which sound is inverted. Getting this backwards is the commonest error in the whole art."),
  () => ratio("Two strings sound the ratio 16:9. If the first is 144 units long, how long is the second? Give your answer as a ratio of the two lengths, shorter to longer.",
    ["9:16"], "Lengths are inverse to pitches. The figure 144 is not needed at all; the question tests whether the inversion has become automatic."),
  () => mc("Why does the art measure by <em>ratio</em> rather than by leftover inches of string?",
    ["Because intervals compound by multiplication, and inches would have you add",
     "Because inches were not yet invented in Greece",
     "Because the string is not really straight"], 0,
    "Compounding a fifth with a fourth is (3:2)×(4:3), not the adding of leftover pieces of string. This is why harmonics is arithmetic applied to sound and not a geometrical cutting of a rod.")
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
    ["256:243"], "(4:3) ÷ (81:64) = 256:243, the leimma, that is, the remnant that finishes the tetrachord. It is not half a tone."),
  () => ratio("A <b>diapente</b> taken away from a <b>diapason</b>.",
    ["4:3"], "(2:1) ÷ (3:2) = 4:3. The fourth is what the fifth lacks of the diapason."),
  () => ratio("A <b>diapason</b> compounded with a <b>diapente</b>.",
    ["3:1"], "(2:1) × (3:2) = 3:1, the triple. It is in the tetractys."),
  () => ratio("A <b>diapason</b> compounded with a <b>diapason</b>.",
    ["4:1"], "(2:1) × (2:1) = 4:1, the double diapason, the fourth number of the tetractys."),
  () => ratio("Two <b>diatessarons</b> compounded.",
    ["16:9"], "(4:3) × (4:3) = 16:9. Two fourths fall short of the diapason by a tone, since (2:1) ÷ (16:9) = 9:8."),
  () => ratio("A <b>tone</b> taken away from a <b>diapason</b>.",
    ["16:9"], "(2:1) ÷ (9:8) = 16:9, which is also two fourths compounded; so both reckonings arrive at the same interval."),
  () => ratio("<b>Three tones</b> compounded.",
    ["729:512"], "(9:8)³ = 729:512. This is slightly more than half the diapason; the excess over 2:1 taken twice is the comma."),
  () => ratio("A <b>tone</b> compounded with a <b>leimma</b>.",
    ["32:27"], "(9:8) × (256:243) = 32:27, the semiditone, that is, the small third of the Pythagorean reckoning."),
  () => ratio("A <b>diapente</b> compounded with a <b>tone</b>.",
    ["27:16"], "(3:2) × (9:8) = 27:16."),
  () => ratio("A <b>ditone</b> taken away from a <b>diapason</b>.",
    ["128:81"], "(2:1) ÷ (81:64) = 128:81."),
  () => ratio("Twelve <b>diapentes</b> compounded, then seven <b>diapasons</b> taken away. What is left?",
    ["531441:524288"], "This is the Pythagorean comma. It is not zero, and that is why no instrument of fixed pitch can close its circle with pure fifths."),
  () => mc("To compound two intervals, you",
    ["multiply their ratios", "add their ratios", "add the string lengths"], 0,
    "Compounding is multiplying, and this single fact is what makes harmonics a part of arithmetic.")
];

/* ---------- E5 · the kinds of ratio ---------- */
const KIND_OPTS = ["Multiplex", "Superparticularis", "Superpartiens", "Multiplex superparticularis", "Multiplex superpartiens"];
const KINDS = [
  { r: "2:1",   k: 0, nm: "duplus",                          why: "The greater contains the less exactly twice and nothing over, so it is a multiple, and the first of them." },
  { r: "3:1",   k: 0, nm: "triplus",                         why: "The greater contains the less three times exactly, so it is a multiple." },
  { r: "4:1",   k: 0, nm: "quadruplus",                      why: "The greater contains the less four times exactly, so it is a multiple." },
  { r: "3:2",   k: 1, nm: "sesquialter",                     why: "The greater contains the less once, and half of the less over, so it is a superparticular, and the first of them." },
  { r: "4:3",   k: 1, nm: "sesquitertius",                   why: "The greater contains the less once, and a third of the less over; it is the second superparticular." },
  { r: "5:4",   k: 1, nm: "sesquiquartus",                   why: "The greater contains the less once, and a fourth over. It is a superparticular, the third of them, and the ratio the sixteenth century would admit as a concord." },
  { r: "9:8",   k: 1, nm: "sesquioctavus",                   why: "The greater contains the less once, and an eighth over. It is a superparticular, but far down the order, which is why the tone is lawful and yet not a concord." },
  { r: "5:3",   k: 2, nm: "superbipartiens tertias",         why: "The greater contains the less once, and two thirds of the less over, which is more than one like part, so it is a superpartient." },
  { r: "7:4",   k: 2, nm: "supertripartiens quartas",        why: "The greater contains the less once, and three quarters over, so it is a superpartient." },
  { r: "16:9",  k: 2, nm: "superseptipartiens nonas",        why: "The greater contains the less once, and seven ninths over. It is a superpartient, the class in which the ancients allowed no concord." },
  { r: "256:243", k: 2, nm: "a superpartient",               why: "The greater contains the less once, and thirteen parts of two hundred forty-three over. The leimma is a superpartient, which is one reason it is the least noble interval in the scale." },
  { r: "9:4",   k: 3, nm: "duplex sesquiquartus",            why: "The greater contains the less twice, and a quarter of the less over, so it is a multiple with a superparticular part." },
  { r: "8:3",   k: 4, nm: "duplex superbipartiens tertias",  why: "The greater contains the less twice, and two thirds over. The diapason-plus-diatessaron falls in this class, which is why the Pythagoreans refused it the name of concord and Ptolemy allowed it." }
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
    "The bound was set at four. Zarlino later moved it to six (the senario), and that is how the third was admitted. The dispute is about where the bound belongs, not about whether ratios matter.")
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
    [4], "3 : 4 : 6 gives the diatessaron and then the diapente, filling the diapason; it is the same figure as 6:8:12."),
  () => num("What is the <b>arithmetic</b> mean of 3 and 6?",
    [4.5, "4.5", "9/2"], "Four and a half, which is not a whole number, and that is why the tetrad is written 6:8:9:12 rather than 3:4:...:6."),
  () => ratio("In the musical proportion <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 8?",
    ["4:3"], "That is the diatessaron."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 9?",
    ["3:2"], "That is the diapente."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 8 and 9?",
    ["9:8"], "That is the tone, and it is exactly the difference between the harmonic and the arithmetic mean."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 8 and 12?",
    ["3:2"], "That is the diapente again, from the other mean."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 9 and 12?",
    ["4:3"], "That is the diatessaron again."),
  () => ratio("In <b>6 : 8 : 9 : 12</b>, what interval stands between 6 and 12?",
    ["2:1"], "That is the diapason. All four concords, and the tone, are contained in four numbers."),
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
  () => mc("In the diatonic genus, the tetrachord (a fourth) is filled by",
    ["two tones and a remnant", "three equal steps", "a tone and two equal semitones"], 0,
    "Two tones make 81:64; what remains of 4:3 is 256:243, the leimma. The three steps are not equal and cannot be made so."),
  () => ratio("Compute the remnant: a <b>diatessaron</b> less <b>two tones</b>.",
    ["256:243"], "(4:3) ÷ (81:64) = 256:243. You have just derived the leimma yourself."),
  () => mc("Two tetrachords fill the diapason when they are joined by",
    ["a tone of disjunction", "a leimma", "nothing, because two fourths already make a diapason"], 0,
    "(4:3) × (9:8) × (4:3) = 2:1. Two fourths alone give 16:9, which falls short by exactly that tone."),
  () => ratio("Verify it: compound <b>4:3</b>, <b>9:8</b> and <b>4:3</b>. What results?",
    ["2:1"], "That is the diapason. The scale is not a convention but a consequence."),
  () => mc("Why does the filled diapason have eight standing sounds?",
    ["Because 4:3 + 9:8 + 4:3 fills it, and that path has eight sounds counting both ends",
     "Because there are eight planets",
     "Because eight is the first cube"], 0,
    "The eight is a consequence of how the diapason is filled. The name 'octave' is a later counting of what was already there."),
  () => mc("Ascending, the diatonic diapason from the lowest sound of a tetrachord runs",
    ["leimma, tone, tone, tone, leimma, tone, tone",
     "tone, tone, tone, leimma, tone, tone, leimma",
     "seven equal steps"], 0,
    "Where the leimmata fall depends on where we begin, which is what the ancients meant by the species of the diapason, and the medievals by the modes."),
  () => ratio("Two tetrachords are joined <em>without</em> a tone between them (conjunct, sharing a sound). What interval do they span together?",
    ["16:9"], "(4:3) × (4:3) = 16:9, a tone short of the diapason. This is the conjunct arrangement of the Lesser Perfect System."),
  () => mc("The leimma 256:243 is",
    ["the remnant of the fourth after two tones, and smaller than half a tone",
     "exactly half of the tone 9:8",
     "the same as the modern equal semitone"], 0,
    "It is less than half a tone: two leimmata fall short of 9:8 by the Pythagorean comma. The equal semitone of a modern keyboard is a third thing again, and irrational."),
  () => mc("Why can the tone not be halved when the diapason is filled?",
    ["Because 9:8 is superparticular, and no superparticular admits a mean proportional",
     "Because the ear cannot tell halves apart",
     "Because Boethius forbade it as a matter of taste"], 0,
    "This is Archytas’s theorem, and so the leimma is a remnant, not a half, and the eight sounds of the diapason are a consequence of that arithmetic."),
  () => ratio("A <b>tone of disjunction</b> compounded with <b>two fourths</b>. What interval results?",
    ["2:1"], "(9:8) × (4:3) × (4:3) = 2:1. That is the disjunct filling of the diapason.")
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
  ["The diapente is the ratio 3:2.", 0, "It is a claim about sounding pitch demonstrated through number, and so belongs to the middle science itself."],
  ["A fifth compounded with a fourth makes a diapason.", 0, "It concerns sounding intervals, demonstrated arithmetically, and so belongs to harmonics."],
  ["The tone cannot be divided into two equal ratios.", 1, "This is a theorem about superparticular ratios. It is true of every superparticular, sounding or not, so it belongs to arithmetic, which harmonics borrows."],
  ["All inequality proceeds from equality.", 1, "This is pure arithmetic; harmonics presupposes it and does not prove it."],
  ["A struck string moves the air, and the moved air the ear.", 2, "It gives a causal account of a natural process through the natures of bodies, and so belongs to natural philosophy, not harmonics."],
  ["The heavens make no sound, because they do not strike a medium.", 2, "This is Aristotle's argument in the De caelo, a claim about bodies settled in natural philosophy."],
  ["The pitch of a string varies as the square root of the tension.", 2, "This is Vincenzo Galilei's law. Its middle term is the nature of a stretched body, so it belongs to physics."],
  ["Boys should be taught music so far as it forms them, and no further.", 3, "This is Aristotle in the Politics. Its end is the character of the citizen, so it belongs to moral and political science."],
  ["The soul is moved in various ways by various melodies.", 3, "St. Thomas cites this when asking about song in divine praise. It concerns the passions and their ordering."],
  ["This antiphon is beautifully made, and delights the hearer.", 4, "It is a judgment about a work made to please, and so belongs to the fine art, which is not the liberal art."],
  ["The composer should not let the tune swallow the words.", 4, "It is advice about making a work well; it has a moral side, but its subject is the making."],
  ["God ought to be praised with song.", 5, "St. Thomas treats this at ST II-II q.91. Its principles are revealed, not arithmetical."],
  ["Beauty requires integrity, due proportion, and clarity.", 5, "It is a claim about being as such, made in sacred doctrine at ST I q.39 a.8. Harmonics gives it one verified instance; it does not establish it."],
  ["Two thirds of the string sounds a fifth above the whole.", 0, "This is the middle science, with a physical subject and an arithmetical middle term."],
  ["Twelve fifths overshoot seven diapasons.", 1, "No power of 3 is a power of 2. The proof needs no sound at all."],
  ["The Dorian produces a moderate and settled temper.", 3, "This is Aristotle in Politics VIII. The claim is about character, not about a ratio, so it belongs to moral and political science."],
  ["Even in mere melodies there is an imitation of character.", 3, "This is Aristotle again. Harmonics can say what interval was heard, but it cannot demonstrate this."],
  ["Ethical melodies are to be preferred in the education of the young.", 3, "This is a rule for formation in the city; its end is the citizen, not the scale."],
  ["The Phrygian inspires enthusiasm.", 3, "This is an effect ascribed to a mode, and the ascription belongs to ethics, whether or not one accepts it."]
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
    why: `That was the <b>${t.name.toLowerCase()}</b> (${t.note}).` +
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
        "Against a fixed sound, a resting place is heard as a relation and not merely as a pitch, and that is the whole use of an ison.",
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
      ? "It shifted. The isokratai do move: the drone follows the melody’s ground where the melody demands it, so a shifting ison is not a mistake."
      : "It held. That is the commonest case, and the one that gives the line its measure.",
    sound: { voices: isonWalk(R.pick([0, 1, 3, 4])), mode: "seq", drone: 1, droneShift: moved ? 4 / 3 : 0, many: true }
  };
}

/* ---------- the gamut, the hexachords, and the modes ----------
   Twenty places from Γ to ee, in the Pythagorean intonation of this course.
   Ratios are to Γ; the widgets sound Γ at 4/9 of the open string, so that a
   is the open string itself (216 Hz). The b of each diapason has two forms:
   round (b♭, fa) and square (b♮, mi). */
const GAMUT_R = {
  "Γ": 1, "A": 9 / 8, "B": 81 / 64, "C": 4 / 3, "D": 3 / 2, "E": 27 / 16, "F": 16 / 9,
  "G": 2, "a": 9 / 4, "b♭": 64 / 27, "b♮": 81 / 32, "c": 8 / 3, "d": 3, "e": 27 / 8,
  "f": 32 / 9, "g": 4, "aa": 9 / 2, "bb♭": 128 / 27, "bb♮": 81 / 16, "cc": 16 / 3,
  "dd": 6, "ee": 27 / 4
};
const SYL = ["ut", "re", "mi", "fa", "sol", "la"];
const HEX = {
  hardΓ: { kind: "hard", on: "Γ", notes: ["Γ", "A", "B", "C", "D", "E"] },
  natC:  { kind: "natural", on: "C", notes: ["C", "D", "E", "F", "G", "a"] },
  softF: { kind: "soft", on: "F", notes: ["F", "G", "a", "b♭", "c", "d"] },
  hardG: { kind: "hard", on: "G", notes: ["G", "a", "b♮", "c", "d", "e"] },
  natc:  { kind: "natural", on: "c", notes: ["c", "d", "e", "f", "g", "aa"] },
  softf: { kind: "soft", on: "f", notes: ["f", "g", "aa", "bb♭", "cc", "dd"] },
  hardg: { kind: "hard", on: "g", notes: ["g", "aa", "bb♮", "cc", "dd", "ee"] }
};
/* The places of the hand, in the order of the gamut, with every syllable
   each place takes. b and bb carry both forms. */
const GAMUT = ["Γ", "A", "B", "C", "D", "E", "F", "G", "a", "b", "c", "d", "e", "f", "g",
  "aa", "bb", "cc", "dd", "ee"].map(place => {
  const forms = place === "b" ? ["b♭", "b♮"] : place === "bb" ? ["bb♭", "bb♮"] : [place];
  const syl = [];
  Object.keys(HEX).forEach(k => {
    forms.forEach(f => {
      const i = HEX[k].notes.indexOf(f);
      if (i >= 0) syl.push({ syl: SYL[i], hex: k, form: f });
    });
  });
  /* In the order of the hexachords' beginnings, as the names are spoken:
     "G sol re ut", "c sol fa ut". */
  return { place, forms, syl };
});
MusicaArs.GAMUT = GAMUT;
MusicaArs.GAMUT_R = GAMUT_R;
MusicaArs.HEX = HEX;
MusicaArs.SYL = SYL;

function hexName(k) {
  const h = HEX[k];
  return `the ${h.kind} hexachord on ${h.on}`;
}
function hexRun(k) {
  return HEX[k].notes.map((n, i) => n + " " + SYL[i]).join(", ");
}
const GAMMA_F = () => MusicaArs.audio.base * 4 / 9;
function gf(n) { return GAMMA_F() * GAMUT_R[n]; }
function letters(seq) { return seq.join(" "); }
/* A sounded line of gamut places; the widget layer reads `freqs`. */
function line(seq, opt) {
  opt = opt || {};
  return {
    many: true,
    get freqs() { return seq.map(gf); },
    gap: opt.gap || 0.5,
    hold: opt.hold || 0,
    pause: opt.pause || 0,
    ref: opt.ref || null
  };
}

/* ---------- E12 · the syllables ----------
   G and g are left out: "G sol re ut" is the example on the card. So is the
   semitone of the natural hexachord on C, which the card also names. */
const HEXA_ASK = [
  ["natC", "C"], ["natC", "D"], ["natC", "E"], ["natC", "F"], ["natC", "a"],
  ["softF", "F"], ["softF", "a"], ["softF", "b♭"], ["softF", "c"], ["softF", "d"],
  ["hardG", "a"], ["hardG", "b♮"], ["hardG", "c"], ["hardG", "e"],
  ["hardΓ", "A"], ["hardΓ", "B"], ["hardΓ", "E"],
  ["natc", "e"], ["natc", "f"], ["natc", "aa"],
  ["softf", "aa"], ["softf", "cc"], ["hardg", "bb♮"], ["hardg", "dd"]
];
const HEXA = HEXA_ASK.map(([k, n]) => () => {
  const i = HEX[k].notes.indexOf(n);
  return mc(`In ${hexName(k)}, which syllable is sung on <b>${n}</b>?`,
    SYL.slice(), i,
    `${hexName(k).replace(/^t/, "T")} runs ${hexRun(k)}; so ${n} is ${SYL[i]}.`,
    line(HEX[k].notes.concat([n]), { pause: 0.5, hold: 0.6 }));
});
const MIFA_LETTERS = [
  ["softF", "a and b♭", ["b♭ and c", "G and a", "E and F"]],
  ["hardG", "b♮ and c", ["a and b♮", "c and d", "E and F"]],
  ["hardΓ", "B and C", ["A and B", "C and D", "E and F"]],
  ["natc", "e and f", ["d and e", "f and g", "b♮ and c"]],
  ["softf", "aa and bb♭", ["g and aa", "bb♭ and cc", "e and f"]],
  ["hardg", "bb♮ and cc", ["aa and bb♮", "cc and dd", "e and f"]]
];
const HEXA_MIFA = MIFA_LETTERS.map(([k, right, wrong]) => () => mc(
  `In ${hexName(k)}, on which two letters do mi and fa fall?`,
  [right].concat(wrong), 0,
  `${hexName(k).replace(/^t/, "T")} runs ${hexRun(k)}. The semitone, which in this course’s tuning is the leimma 256:243, lies between mi and fa, and so between ${right}.`,
  line(HEX[k].notes)));
const HEXA_EXTRA = [
  () => mc("In which hexachord is b sung as fa?",
    ["The soft hexachord, on F", "The hard hexachord, on G", "The natural hexachord, on C"], 0,
    "In the soft hexachord, F ut, G re, a mi, b♭ fa; the round b is fa, a semitone above a. The natural hexachord on C has no b at all, and in the hard hexachord the square b is mi.",
    line(HEX.softF.notes)),
  () => mc("In which hexachord is b sung as mi?",
    ["The hard hexachord, on G", "The soft hexachord, on F", "The natural hexachord, on C"], 0,
    "In the hard hexachord, G ut, a re, b♮ mi, c fa; the square b is mi, a semitone below c. In the soft hexachord the round b is fa.",
    line(HEX.hardG.notes))
];

/* ---------- E13 · the hexachord of a melody ----------
   Each melody fits exactly one kind of hexachord; the check script in
   notes/ confirms it. */
const HEXB_MEL = [
  ["natural", ["C", "D", "E", "F", "E", "D", "C"]],
  ["natural", ["D", "E", "F", "G", "F", "E", "D"]],
  ["natural", ["E", "F", "G", "a", "G", "F", "E"]],
  ["natural", ["F", "E", "D", "C", "D", "E"]],
  ["natural", ["c", "d", "e", "f", "e", "d", "c"]],
  ["natural", ["e", "f", "g", "aa", "g", "f", "e"]],
  ["soft", ["F", "G", "a", "b♭", "a", "G", "F"]],
  ["soft", ["a", "b♭", "c", "b♭", "a"]],
  ["soft", ["G", "a", "b♭", "c", "d", "c", "b♭", "a"]],
  ["soft", ["c", "b♭", "a", "G", "F"]],
  ["soft", ["f", "g", "aa", "bb♭", "aa", "g", "f"]],
  ["soft", ["bb♭", "cc", "dd", "cc", "bb♭", "aa"]],
  ["hard", ["G", "a", "b♮", "c", "b♮", "a", "G"]],
  ["hard", ["b♮", "c", "d", "c", "b♮"]],
  ["hard", ["c", "d", "e", "d", "c", "b♮"]],
  ["hard", ["Γ", "A", "B", "C", "B", "A", "Γ"]],
  ["hard", ["B", "C", "D", "E", "D", "C", "B"]],
  ["hard", ["g", "aa", "bb♮", "cc", "bb♮", "aa", "g"]]
];
const KIND_NAME = { hard: "The hard hexachord", natural: "The natural hexachord", soft: "The soft hexachord" };
const KIND_WHY = {
  natural: "It has E and F (or e and f) side by side and no b, and only the natural hexachord sings that pair as mi and fa.",
  soft: "It uses the round b (b♭), and only the soft hexachord has it, as fa.",
  hard: "It uses the square b (b♮, or B in the lowest diapason), and only the hard hexachord has it, as mi."
};
function hexOfMelody(seq) {
  return Object.keys(HEX).filter(k => seq.every(n => HEX[k].notes.includes(n)));
}
function solmize(seq, k) {
  return seq.map(n => n + " " + SYL[HEX[k].notes.indexOf(n)]).join(", ");
}
const HEXB = HEXB_MEL.map(([kind, seq]) => () => {
  const k = hexOfMelody(seq)[0];
  const opts = ["The hard hexachord", "The natural hexachord", "The soft hexachord"];
  return mc(`In which hexachord does this melody lie?<br><b>${letters(seq)}</b>`,
    opts, opts.indexOf(KIND_NAME[kind]),
    `${KIND_WHY[kind]} Sung in ${hexName(k)}, it runs ${solmize(seq, k)}.`,
    line(seq, { hold: 0.5 }));
});
const HEXB_MIFA_MEL = [
  [["D", "E", "F", "G", "a", "G", "F"], "E and F", ["D and E", "F and G", "G and a"]],
  [["F", "G", "a", "b♭", "c", "b♭", "a"], "a and b♭", ["G and a", "b♭ and c", "F and G"]],
  [["G", "a", "b♮", "c", "d", "c", "b♮"], "b♮ and c", ["a and b♮", "c and d", "G and a"]],
  [["Γ", "A", "B", "C", "D", "C"], "B and C", ["A and B", "C and D", "Γ and A"]],
  [["d", "e", "f", "g", "f", "e"], "e and f", ["d and e", "f and g", "e and g"]],
  [["g", "aa", "bb♭", "cc", "bb♭", "aa", "g"], "aa and bb♭", ["g and aa", "bb♭ and cc", "aa and cc"]],
  [["cc", "bb♮", "aa", "g", "aa", "bb♮"], "bb♮ and cc", ["aa and bb♮", "g and aa", "aa and cc"]]
];
const HEXB_MIFA = HEXB_MIFA_MEL.map(([seq, right, wrong]) => () => {
  const k = hexOfMelody(seq)[0];
  return mc(`On which two sounds of this melody do mi and fa fall?<br><b>${letters(seq)}</b>`,
    [right].concat(wrong), 0,
    `The melody lies in ${hexName(k)} and runs ${solmize(seq, k)}; so mi and fa, with the semitone between them, fall on ${right}.`,
    line(seq, { hold: 0.5 }));
});

/* ---------- E14 · mutation ----------
   The rule on the card: mutate on a sound both hexachords contain; ascending
   into re, descending into la. Distractors are chosen to be wrong under that
   rule and also as mutations (a sound one hexachord lacks, or a syllable the
   new hexachord does not give it), so that no defensible practice is marked
   wrong. The two examples on the card (Γ to F rising, F to A falling) are
   left out. */
const MUT = [
  { seq: ["C", "D", "E", "F", "G", "a", "b♮", "c"], from: "natC", to: "hardG", at: "a",
    wrong: [["On G, from sol to re", "G is re only in the soft hexachord, which has b♭ and not the b♮ this melody needs."],
            ["On b♮, from fa to mi", "b♮ is not in the natural hexachord at all, so there is nothing to change from; and the round b, which is fa, is another sound."],
            ["On F, from fa to ut", "F is ut only in the soft hexachord, which lacks the b♮ this melody needs."]] },
  { seq: ["D", "E", "F", "G", "a", "b♭", "c"], from: "natC", to: "softF", at: "G",
    wrong: [["On a, from la to re", "a is re in the hard hexachord, which has b♮, and this melody needs b♭."],
            ["On F, from fa to re", "F is ut in the soft hexachord, not re; re there is G."],
            ["On b♭, from mi to fa", "b♭ is not in the natural hexachord, so it cannot be the place where the two meet."]] },
  { seq: ["G", "a", "b♮", "c", "d", "e", "f"], from: "hardG", to: "natc", at: "d",
    wrong: [["On c, from fa to re", "c is ut in the natural hexachord on c, not re; re there is d."],
            ["On e, from la to re", "e is mi in the natural hexachord, not re."],
            ["On b♮, from mi to fa", "b♮ is not in the natural hexachord on c, so it cannot be the place where the two meet."]] },
  { seq: ["F", "G", "a", "b♭", "c", "d", "e", "f"], from: "softF", to: "natc", at: "d",
    wrong: [["On c, from sol to re", "c is ut in the natural hexachord on c, not re."],
            ["On b♭, from fa to mi", "b♭ is not in the natural hexachord on c, and the mi of a b is the square b, another sound."],
            ["On e, from la to mi", "e is not in the soft hexachord on F, so there is nothing to change from."]] },
  { seq: ["c", "d", "e", "f", "g", "aa", "bb♮", "cc"], from: "natc", to: "hardg", at: "aa",
    wrong: [["On g, from sol to re", "g is re only in the soft hexachord on f, which has bb♭ and not the bb♮ this melody needs."],
            ["On bb♮, from fa to mi", "bb♮ is not in the natural hexachord at all, so there is nothing to change from."],
            ["On f, from fa to ut", "f is ut only in the soft hexachord, which lacks the bb♮ this melody needs."]] },
  { seq: ["d", "e", "f", "g", "aa", "bb♭", "cc"], from: "natc", to: "softf", at: "g",
    wrong: [["On aa, from la to re", "aa is re in the hard hexachord, which has bb♮, and this melody needs bb♭."],
            ["On f, from fa to re", "f is ut in the soft hexachord, not re."],
            ["On bb♭, from mi to fa", "bb♭ is not in the natural hexachord, so it cannot be the place where the two meet."]] },
  { seq: ["d", "c", "b♮", "a", "G", "F", "E"], from: "hardG", to: "natC", at: "a",
    wrong: [["On G, from ut to la", "G is sol in the natural hexachord, not la; la there is a."],
            ["On F, from ut to fa", "F is not in the hard hexachord on G, so there is nothing to change from."],
            ["On b♮, from mi to la", "b♮ is not in the natural hexachord, so it cannot be the place where the two meet."]] },
  { seq: ["d", "c", "b♭", "a", "G", "F", "E", "D"], from: "softF", to: "natC", at: "a",
    wrong: [["On G, from re to la", "G is sol in the natural hexachord, not la."],
            ["On b♭, from fa to la", "b♭ is not in the natural hexachord, so it cannot be the place where the two meet."],
            ["On E, from ut to mi", "E is not in the soft hexachord, so there is nothing to change from."]] },
  { seq: ["f", "e", "d", "c", "b♭", "a", "G"], from: "natc", to: "softF", at: "d",
    wrong: [["On c, from ut to la", "c is sol in the soft hexachord on F, not la."],
            ["On e, from mi to la", "e is not in the soft hexachord on F, so it cannot be the place where the two meet."],
            ["On b♭, from fa to mi", "b♭ is not in the natural hexachord, so there is nothing to change from."]] },
  { seq: ["f", "e", "d", "c", "b♮", "a", "G"], from: "natc", to: "hardG", at: "e",
    wrong: [["On d, from re to la", "d is sol in the hard hexachord on G, not la."],
            ["On c, from ut to la", "c is fa in the hard hexachord, not la."],
            ["On b♮, from fa to mi", "b♮ is not in the natural hexachord, so there is nothing to change from."]] },
  { seq: ["cc", "bb♭", "aa", "g", "f", "e", "d"], from: "softf", to: "natc", at: "aa",
    wrong: [["On g, from re to la", "g is sol in the natural hexachord, not la."],
            ["On bb♭, from fa to la", "bb♭ is not in the natural hexachord, so it cannot be the place where the two meet."],
            ["On e, from ut to mi", "e is not in the soft hexachord on f, so there is nothing to change from."]] },
  { seq: ["dd", "cc", "bb♮", "aa", "g", "f", "e"], from: "hardg", to: "natc", at: "aa",
    wrong: [["On g, from ut to la", "g is sol in the natural hexachord, not la."],
            ["On f, from ut to fa", "f is not in the hard hexachord on g, so there is nothing to change from."],
            ["On bb♮, from mi to la", "bb♮ is not in the natural hexachord, so it cannot be the place where the two meet."]] }
];
function mutInfo(m) {
  const s1 = SYL[HEX[m.from].notes.indexOf(m.at)];
  const s2 = SYL[HEX[m.to].notes.indexOf(m.at)];
  const up = GAMUT_R[m.seq[m.seq.length - 1]] > GAMUT_R[m.seq[0]];
  const i = m.seq.indexOf(m.at);
  const before = m.seq.slice(0, i).map(n => n + " " + SYL[HEX[m.from].notes.indexOf(n)]);
  const after = m.seq.slice(i + 1).map(n => n + " " + SYL[HEX[m.to].notes.indexOf(n)]);
  const sung = before.concat([`${m.at} ${s1} as ${s2}`], after).join(", ");
  const why = `The melody begins in ${hexName(m.from)} and needs ${hexName(m.to)}. ` +
    `It is ${up ? "rising, so the mutation is made into re" : "falling, so the mutation is made into la"}, ` +
    `on ${m.at}, which both hexachords contain. It is sung ${sung}.`;
  return { s1, s2, up, why };
}
const HEXC_WHERE = MUT.map(m => () => {
  const { s1, s2, why } = mutInfo(m);
  const right = `On ${m.at}, from ${s1} to ${s2}`;
  const it = mc(`Where is the mutation made, and into which syllable?<br><b>${letters(m.seq)}</b>`,
    [right].concat(m.wrong.map(w => w[0])), 0,
    why,
    line(m.seq, { hold: 0.5 }));
  /* The reason each wrong place fails, shown when it is chosen. */
  it.whyNot = [null].concat(m.wrong.map(w => w[1]));
  return it;
});
const HEXC_INTO = MUT.map(m => () => {
  const { s1, s2, why } = mutInfo(m);
  return mc(`In this melody the singer mutates on <b>${m.at}</b>, which was ${s1}. Into which syllable?<br><b>${letters(m.seq)}</b>`,
    SYL.slice(), SYL.indexOf(s2),
    why,
    line(m.seq, { hold: 0.5 }));
});

/* ---------- E15–E17 · the modes ----------
   The phrases are composed for these exercises; none is a chant. Each ends
   on its final with a held note. An authentic phrase rises to the seventh
   or the diapason above its final and goes at most one step below it; a
   plagal phrase goes a third or a fourth below its final and no higher
   than the sixth above. The check script confirms both. The two phrases on
   the card of E16 are not among them. */
const MODES = [
  { n: 1, name: "Dorian",        fin: "D", auth: true },
  { n: 2, name: "Hypodorian",    fin: "D", auth: false },
  { n: 3, name: "Phrygian",      fin: "E", auth: true },
  { n: 4, name: "Hypophrygian",  fin: "E", auth: false },
  { n: 5, name: "Lydian",        fin: "F", auth: true },
  { n: 6, name: "Hypolydian",    fin: "F", auth: false },
  { n: 7, name: "Mixolydian",    fin: "G", auth: true },
  { n: 8, name: "Hypomixolydian", fin: "G", auth: false }
];
MusicaArs.MODES = MODES;
const PHRASES = {
  1: [["D", "F", "a", "a", "G", "a", "c", "d", "c", "a", "G", "F", "E", "D"],
      ["D", "a", "c", "d", "c", "a", "G", "a", "F", "E", "D"],
      ["C", "D", "F", "G", "a", "c", "d", "c", "a", "F", "G", "E", "D"],
      ["D", "E", "F", "G", "a", "G", "a", "c", "d", "c", "a", "F", "E", "D"]],
  2: [["D", "C", "D", "F", "F", "E", "D", "C", "A", "C", "D", "E", "D"],
      ["A", "C", "D", "E", "F", "G", "F", "E", "D", "C", "D"],
      ["D", "F", "G", "a", "G", "F", "D", "C", "A", "C", "D", "E", "D"],
      ["F", "E", "D", "C", "D", "A", "C", "D", "F", "E", "D"]],
  3: [["E", "G", "a", "c", "d", "e", "d", "c", "a", "G", "F", "E"],
      ["E", "F", "G", "a", "c", "c", "d", "c", "b♮", "a", "G", "F", "E"],
      ["D", "E", "G", "c", "c", "d", "e", "c", "a", "G", "F", "E"],
      ["E", "c", "c", "d", "c", "b♮", "c", "a", "G", "a", "F", "E"]],
  4: [["E", "D", "C", "B", "D", "E", "F", "G", "a", "G", "F", "E"],
      ["C", "D", "E", "F", "G", "a", "a", "G", "F", "E", "D", "C", "D", "E"],
      ["G", "F", "E", "D", "C", "D", "E", "G", "a", "a", "G", "F", "E", "D", "E"],
      ["E", "F", "D", "C", "B", "C", "D", "E", "F", "G", "F", "E"]],
  5: [["F", "a", "c", "c", "d", "e", "f", "e", "d", "c", "a", "G", "F"],
      ["F", "G", "a", "c", "d", "c", "a", "c", "e", "f", "d", "c", "a", "G", "F"],
      ["F", "c", "d", "c", "a", "c", "f", "e", "d", "c", "a", "G", "F"],
      ["E", "F", "G", "a", "c", "c", "e", "d", "c", "a", "G", "F"]],
  6: [["F", "E", "D", "C", "D", "F", "G", "a", "a", "G", "F", "E", "F"],
      ["C", "D", "F", "G", "a", "G", "F", "E", "D", "E", "F"],
      ["F", "a", "a", "G", "a", "c", "a", "G", "F", "E", "D", "F", "G", "F"],
      ["D", "C", "D", "F", "G", "F", "a", "G", "F", "E", "D", "E", "F"]],
  7: [["G", "b♮", "d", "e", "f", "g", "f", "e", "d", "c", "b♮", "a", "G"],
      ["G", "a", "b♮", "d", "d", "e", "g", "e", "d", "c", "b♮", "a", "G"],
      ["F", "G", "a", "c", "b♮", "d", "d", "e", "f", "d", "c", "a", "b♮", "G"],
      ["G", "d", "d", "c", "d", "e", "f", "e", "d", "b♮", "c", "a", "G"]],
  8: [["G", "F", "G", "a", "c", "c", "b♮", "a", "G", "F", "E", "D", "F", "G"],
      ["D", "F", "G", "a", "G", "a", "c", "d", "c", "a", "G", "F", "G"],
      ["G", "a", "c", "c", "d", "c", "a", "G", "F", "E", "D", "E", "G", "a", "G"],
      ["G", "F", "D", "F", "G", "a", "b♮", "c", "b♮", "a", "G"]]
};
MusicaArs.MODE_PHRASES = PHRASES;
const FINALS_REF = ["D", "E", "F", "G"].map(n => ({ label: n, get freqs() { return [gf(n)]; } }));
function modeLine(seq) { return line(seq, { gap: 0.46, hold: 1.1, ref: FINALS_REF }); }
function spanOf(seq) {
  let lo = seq[0], hi = seq[0];
  seq.forEach(n => {
    if (GAMUT_R[n] < GAMUT_R[lo]) lo = n;
    if (GAMUT_R[n] > GAMUT_R[hi]) hi = n;
  });
  return { lo, hi };
}
const ORD = ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];
function modeWhy(m, seq) {
  const { lo, hi } = spanOf(seq);
  const range = m.auth
    ? `it rises to ${hi}, ${GAMUT_R[hi] / GAMUT_R[m.fin] >= 2 ? "the diapason above its final" : "the seventh above its final"}, and goes no lower than ${lo}`
    : `it goes down to ${lo}, below its final, and rises no higher than ${hi}`;
  return `The phrase ends on ${m.fin}, and ${range}. So it is the ${m.auth ? "authentic" : "plagal"} mode on ${m.fin}, the ${ORD[m.n]} mode, which medieval writers called ${m.name}.`;
}
function modeItems(build) {
  const out = [];
  MODES.forEach(m => PHRASES[m.n].forEach(seq => out.push(() => build(m, seq))));
  return out;
}
const FIN_STEPS = {
  D: "Above D the steps are a tone and then a semitone.",
  E: "Above E the first step is a semitone.",
  F: "Below F lies a semitone, from E, and above it two tones.",
  G: "Above G come two tones and then a semitone, to c."
};
const MODEA = modeItems((m, seq) => mc(
  "On which final does this phrase end? The four finals can be sounded for comparison.",
  ["D", "E", "F", "G"], ["D", "E", "F", "G"].indexOf(m.fin),
  `${FIN_STEPS[m.fin]} ${modeWhy(m, seq)}`,
  modeLine(seq)));
const RANGE_OPTS = [
  "It is authentic, since it rises from its final toward the diapason above it",
  "It is plagal, since it lies around its final and goes a third or more below"
];
const MODEB = modeItems((m, seq) => mc(
  "Is the range of this phrase authentic or plagal?",
  RANGE_OPTS.slice(), m.auth ? 0 : 1,
  modeWhy(m, seq),
  modeLine(seq)));
function modeLabel(m) { return `Mode ${m.n} (${m.name})`; }
/* Distractors: the other mode of the same pair, the mode of the same range
   on a neighboring final, and one more chosen so that the right answer is
   not, as a rule, the longest option. */
function modeDistractors(m) {
  const partner = MODES[m.auth ? m.n : m.n - 2];
  const nbIdx = ((m.n + 1) % 8);
  const neighbor = MODES[nbIdx];
  const used = new Set([m.n, partner.n, neighbor.n]);
  const longer = MODES.filter(x => !used.has(x.n) && modeLabel(x).length >= modeLabel(m).length);
  const rest = MODES.filter(x => !used.has(x.n));
  const third = longer.length ? longer[0] : rest[0];
  return [partner, neighbor, third];
}
const MODEC = modeItems((m, seq) => {
  const ds = modeDistractors(m);
  return mc("Which mode is this phrase in?",
    [modeLabel(m)].concat(ds.map(modeLabel)), 0,
    modeWhy(m, seq),
    modeLine(seq));
});

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
    build: () => R.shuffle(
      Array.from({ length: 6 }, judgeItem)
        .concat(Array.from({ length: 2 }, judgeClarity), Array.from({ length: 2 }, judgeIntegrity))
    )
  },
  "length": {
    title: "Length and pitch",
    size: 10,
    build: () => fromFactories(LENGTH_ITEMS, 10)
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
    size: 10,
    build: () => fromFactories(SCALE_ITEMS, 10)
  },
  "science": {
    title: "Which science is this?",
    size: 10,
    build: () => Array.from({ length: 10 }, sciItem)
  },
  "eastgen": {
    title: "The tetrachord divided",
    size: 10,
    build: () => Array.from({ length: 10 }, eastGenItem)
  },
  "ison": {
    title: "The held sound",
    size: 10,
    build: () => Array.from({ length: 10 }, isonItem)
  },
  "hexA": {
    title: "The hexachord, A: the syllables",
    size: 10,
    build: () => fromFactories(HEXA.concat(HEXA_MIFA, HEXA_EXTRA), 10)
  },
  "hexB": {
    title: "The hexachord, B: the hexachord of a melody",
    size: 10,
    build: () => fromFactories(HEXB.concat(HEXB_MIFA), 10)
  },
  "hexC": {
    title: "The hexachord, C: mutation",
    size: 10,
    build: () => fromFactories(HEXC_WHERE.concat(HEXC_INTO), 10)
  },
  "modeA": {
    title: "The modes, A: the final",
    size: 10,
    build: () => fromFactories(MODEA, 10)
  },
  "modeB": {
    title: "The modes, B: authentic and plagal",
    size: 10,
    build: () => fromFactories(MODEB, 10)
  },
  "modeC": {
    title: "The modes, C: the mode by number and name",
    size: 10,
    build: () => fromFactories(MODEC, 10)
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
MusicaArs._POOLS = { hexA: HEXA.concat(HEXA_MIFA, HEXA_EXTRA), hexB: HEXB.concat(HEXB_MIFA), hexC: HEXC_WHERE.concat(HEXC_INTO), modeA: MODEA, modeB: MODEB, modeC: MODEC, _MUT: MUT, _HEXB: HEXB_MEL, _HEXBM: HEXB_MIFA_MEL, _hexOf: hexOfMelody };

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
