# Ars Musica — evaluation, and notes on the new Chapter VII

23 August 2026

---

## 1. The short verdict

The course is genuinely good, and it is good in the way that is hardest to fake: it knows what it is about. Fourteen lessons take a reader who knows nothing from "sound is what hearing is of" to a demonstrated diatonic scale, and at no point does it substitute a modern label for a thing. The decision to refuse the treble clef, the note names, and the word *octave* until the ratio 2:1 has been heard is the single best decision in the design, and everything downstream benefits from it.

Its real distinction is epistemic discipline. Lesson 2 places harmonics as a *scientia media* and then holds that classification all the way through; Lesson 12 refuses to settle 5:4; Lesson 13 distinguishes a true doctrine of cosmic order from a false physical claim without discarding Boethius; the Appendix names what is closed, what is open, and what is a pedagogical crutch. That last habit — marking the status of each claim — is rarer than it should be in books of this kind, and it is what makes the course usable by someone who will go on to read the primary texts.

The weaknesses, before the additions, were three: **it ends at Boethius without saying so as an argument**; **it leaves 5:4 open in a way the tradition itself did not**; and **it under-argues its own relevance** to a student who has heard that all this was superseded.

## 2. Doctrine

**Strong.** I did not find a claim I would call an error. A few notes:

- The *scientia media* framing (L2) is correctly stated and correctly attributed. It is also the load-bearing idea of the whole course, and Chapter VII now uses it as the instrument of judgement — which is the right way to make a first principle earn its keep.
- L3 on Augustine's *bene modulandi* is exact about the difficulty of *modulari*, and honest that the course follows Boethius rather than Augustine's five books on meter.
- L12's handling of Aristoxenus is fair but slightly thin. Aristoxenus was not anti-mathematical; he wanted a demonstrative science with theorems, and took the trained ear rather than integer ratios as the criterion. Euclid's *Sectio canonis* and Ptolemy characterised him polemically, and later readers inherited the caricature. One clause would fix this, and it would strengthen your point, since it makes Ptolemy's middle position the obvious one rather than a compromise.
- L13's treatment of *musica mundana* is the best short version of that argument I have seen. Keep it exactly as it is.
- The one place where the course's caution now looks like under-commitment is the third. Chapter VII resolves this: the question is left open in I–VI, where it genuinely is not first, and Lesson 17 reports how the art itself closed it — by widening the bound of concord from four to six with Zarlino, which is a development *within* Ptolemy's method rather than a defeat of reason by the ear.

## 3. Pedagogy

**Strong, with one structural risk.**

The lesson lengths are right. The check questions are unusually well made: the wrong options are the mistakes a real student makes (the octave as "eight notes," the tone as "any pleasant sound," music-as-liberal-art conflated with music-as-formation), so answering wrongly teaches something. The `why` texts do not scold.

The structural risk is the reliance on hearing. Everything after L4 assumes the student is actually clicking Play and comparing. A student who reads it as prose will get the argument and not the art — and the course has no way of knowing. Two cheap fixes, if you want them:

1. **An ear-check.** One or two checks that can only be answered by listening — e.g. "play these two; which is the fifth?" — rather than by reasoning from the text. This is a different widget (an answer that depends on audio state) and about thirty lines of code.
2. **A stopping instruction.** L0 already tells the student to sit with 2:1. Consider making one or two lessons refuse to advance until the monochord has been dragged. Coercive, but this course is unusual in that its central act is not reading.

Two smaller notes:

- The progress counter (now 0/23) counts checks, not lessons, which is right, but the four unscored lessons (Appendix, Workshop) are invisible to it. Fine.
- Search matches on title and kicker only, not body text. With 25 lessons that starts to matter — a student wanting "comma" or "temperament" will not find it from the sidebar. Adding `l.html` to the search predicate is a one-line change; I did not make it, because it changes behaviour you may have chosen deliberately.

## 4. Code

Clean, small, and honest — no framework, no build step, no dependency that can rot. Specific observations:

- `app.js` wraps `init()` in try/catch and renders a legible failure. Good instinct, and rarer than it should be.
- The audio engine is well judged: four partials with a decaying envelope, not a raw sine, so intervals actually *blend* audibly. This matters more than it sounds like it does — with pure sines the whole pedagogy would fail.
- `state.done[id] = true` for unscored lessons means merely visiting the Appendix marks it done. Harmless.
- `localStorage` under `file://` is fragile in some browsers; you already guard it. The `serve.command` shim is the right answer.
- One real risk for the future: the check answer is stored as an index into `options`. If you ever reorder options in an existing lesson, every saved answer silently becomes wrong. Not urgent at this size.
- The Google Fonts link means the page briefly differs offline. Your fallback stack (`Iowan Old Style`, Palatino) is good enough that this is invisible on a Mac.

## 5. What I added

A new **Chapter VII · What came after**, eight lessons (15–22), placed after Lesson 14 and before the Appendix, so that Chapters I–VI are untouched in their order and their argument.

| # | Lesson | The hinge |
|---|---|---|
| 15 | Two musics: the science and the practice | Guido's staff; *speculativa* / *practica*; the science falls silent, and is not refuted |
| 16 | Many voices, and measured time | *Musica enchiriadis*, Franco, *ars nova*; rules become a **grammar** rather than a demonstration |
| 17 | The third comes in | Odington → Dunstaple → Ramis → Zarlino's *senario*; the open question of L10/L12 closed |
| 18 | The comma | (3:2)¹² ≠ 2⁷ and 81:64 ≠ 5:4 — a **theorem of the old art** that forces everything after |
| 19 | Temperament, and what Bach's title means | Meantone, well temperament, equal; the ratio is deliberately abandoned for modulation |
| 20 | From interval to chord | Mersenne → Sauveur → Rameau; the **middle term** changes from number to the *corps sonore* |
| 21 | Key: an architecture in time | Glarean → tonality → sonata form; a real achievement the ancients did not have |
| 22 | What was gained, what was lost | Lesson 14's six lines, audited one by one |

**The two claims the chapter asserts flatly**, because they are secure and because they are what a reader most needs:

1. **Bach's *wohltemperirt* does not mean equal temperament.** It names an irregular, circulating tuning in which all twenty-four keys are usable and *each keeps its own character* — which is exactly what makes a cycle through twenty-four worth composing. Equal temperament spread on the Continent from the later eighteenth century and became the English norm only in the 1840s–50s. (You had this as a half-memory; it is the commonest thing to get wrong about this period.) Which particular temperament Bach wanted is conjecture, and the chapter does not guess.
2. **The equal semitone is irrational** — the twelfth root of two — and so the tuning of a modern keyboard cannot in principle be stated as a ratio of whole numbers. That is the sharpest single break between Boethius's art and modern practice, and it was made deliberately, by men who understood the arithmetic, as the price of modulation.

**The two claims that most help the art**, which I would not have expected before reading Bod:

- The comma is not an embarrassment for the classical art; it is a **result** of it. No power of 3 is a power of 2, so no closed instrument can be pure. Everything the next three centuries do about tuning is a response to something Pythagorean arithmetic itself proves.
- The **experimental method was practised on music before it was practised on the heavens.** Vincenzo Galilei hung weights on strings in a cellar in Pisa to test a claim of Boethius, and his son grew up in that cellar; Kepler learned the same cycle from philology. This is Bod's thesis, argued at length, and it is a far better defence of the liberal art in the modern world than nostalgia: the art was one of the parents.

**Three things the chapter concedes were genuinely refuted**, because a tradition is not honoured by defending what is false: the hammers in the smithy; the claim that one set of proportions governs lengths *and* tensions alike (Vincenzo's weights: pitch goes as the square root of tension, so the diapason needs four times the weight, not twice); and audible music of the spheres, which Aristotle and Thomas had already denied. Everything else on Lesson 14's list was not refuted but **left behind, because the questions changed** — and the difference between those two is the whole point of the chapter.

**Stopping point.** The chapter ends where key is still the ground of form, per your instruction. Lesson 22 closes with one honestly-labelled paragraph naming what lies past it — Helmholtz's beating partials (1863) and the loosening of the tonal centre through Wagner to Schoenberg around 1908 — and says plainly that this is another course. If you later want the walk carried to 1910, that paragraph is the seam to open.

## 6. Three new widgets

- **`compare`** — two candidate versions of one interval against the same low sound (used for 81:64 against 5:4). Shows the size of each in cents and the gap between them.
- **`comma`** — walks the twelve fifths and sounds the two arrivals together, so the Pythagorean comma is *heard* and not merely computed; a second instance does the syntonic comma.
- **`temper`** — Pythagorean, quarter-comma meantone, and equal temperament side by side, with the fifth, the third, and the full triad playable in each.

These speak in **pitch multipliers**, not stopped string lengths, because from the sixteenth century the art's own quantities stop being lengths — and some of them are not ratios at all. `audio.js` gains a `chord()` method (three or more voices at once) and cents conversions; the cent is introduced explicitly as *a later measure, not a cause*.

## 7. How Bod was used — and where he was not followed

Bod supplied the shape of the whole and the two "helps the art" claims above. He is a historian of knowledge, not an authority on this art, and I treated him as a servant in the way your Appendix already describes.

Where he is contested, I did not follow him:

- **Rameau and Newton's *Opticks*.** Bod says Rameau demonstrated "analogically" that a note is a spectrum of tones as white light is a spectrum of colours, on the model of the *Opticks*. That specific debt belongs to Louis-Bertrand Castel, not to Rameau's own theory; Rameau's Newtonianism is methodological and rhetorical (he was hailed as the "Newton of music"). Dropped.
- **Rameau's chronology.** Bod runs 1722 and 1726 together. In fact the *Traité* (1722) still argues from string divisions and number in the old manner; Rameau learned of Sauveur's partials only afterwards, and the *corps sonore* becomes the foundation from the *Nouveau système* (1726) onward. The chapter's whole argument about the middle term depends on getting this right, so it is stated exactly.
- **Cai Yuanding and equal temperament.** Bod attributes the oldest theory of equal temperament to Cai (Song dynasty); the standard claim is Zhu Zaiyu (1584). Moot here, since you asked for Western music only, and the chapter treats none of it.
- **Ratio notation.** Bod writes consonances as 1:2, 2:3, 3:4 in some places and 2:1, 3:2, 4:3 in others. The course's convention (lengths, and pitches inverted) is stricter and is kept.

The chapter's other datings were checked against the scholarship rather than taken from Bod, and a few common errors are avoided: the *Ars nova* treatise is not simply Vitry's (Sarah Fuller, 1985); Guido gave the syllables, not the developed hexachord system; Ramis's fiercest published attacker was Burtius (1487), with Gaffurius alongside; Aaron (1523) describes meantone *by ear* and Salinas (1577) supplies the arithmetic; equal temperament reached England *late*, not early.

## 8. What I would consider next

1. **The ear-check widget** (§3). The largest remaining gap between what the course intends and what it can verify.
2. **Search the body text.** One line.
3. **A Greek Perfect System lesson**, if you ever want Chapter V to be complete rather than sufficient — currently the tetrachord appears without the system it belongs to.
4. **Augustine's meter**, as a short appendix rather than a chapter. Lesson 16 now points at it (measured time finally gets a notation), which slightly raises the debt.
5. **A printable one-page summary** of the six lines, for a student to keep beside the string.

None of these is urgent. The course as it stands does what it says it does, and now says what became of it.

---

# Second pass — the liberal art argued, and the palaestra built

Items 1, 2 and 3 of §8 are now done, along with a good deal more. The course has grown from 25 pages to 44.

## 9. Why the art is liberal — the argument the course was missing

The old Chapter I *asserted* that music is a liberal art and never argued it. Two new lessons do.

**Lesson 2, "Why this art is called liberal,"** gives three grounds, and they are the three the tradition actually uses:

| | Ground | Authority |
|---|---|---|
| **End** | It is *ordered to knowing*, not to a use to be had through action | Aristotle, *Metaph.* I.2; Aquinas, *In Meta.* I lect. 3 |
| **Work** | Its *opus* is immediately of reason and remains in the knower | *Super Boeth. De Trin.* q.5 a.1 ad 3 |
| **Effect** | It makes a *judge* rather than an instrument — and a judge is free | Boethius I.34; Seneca, *Ep.* 88.2 |

It also answers the two objections a scholastic will raise first — that the art is *useful* (an art is not servile for being usable, only for being *ordered to* use), and that it needs the body (so does the astronomer's eye; the sense supplies the subject, not the work) — and it closes with Aquinas's deeper rationale at ST I-II q.57 a.3 ad 3: these are liberal as distinct from arts ordered to bodily works, *inquantum corpus serviliter subditur animae, et homo secundum animam est liber*.

Two things I fixed while writing it, both of which a careful reader would have caught. The famous sentence *illae solae artes liberales dicuntur quae ad sciendum ordinantur* is from **In Meta. I lect. 3**, not from the *Summa*, where it is commonly and wrongly cited. And Thomas's phrase for music's work in the *Super Boethium* is ***melodias formare*** — "to form melodies" — which looks at first like a concession that composition is the *opus* after all. It is not, and the lesson says why: the point of his list is that every work in it is performed by reason *immediately*, without passing into outward matter. A melody formed by reason is a set of pitches known in their proportions. That is the scale.

**Lesson 3, "What the art does to the one who has it,"** gives four fruits. The first is the one worth having:

> You will hear that some pairs of sounds please and some do not. You will measure them, and find that the pleasing ones are the simple ratios. You will alter the ratio, and the pleasure will alter with it. The delight is *tracking* something the mind can state. Do that once, honestly, on a string in a quiet room, and the modern conviction that beauty is nothing but private preference has not been argued against. It has been refuted, in your own hearing, by you.

That is the strongest case I can make for why a modern person should do this, and it is not rhetoric — it is Aquinas's *pulchra dicuntur quae visa placent* and *sensus ratio quaedam est* turned into an experiment the student performs himself. The other three: that it teaches sense and reason to correct one another; that it makes a judge; and that it is a road that goes up — with Plato's warning at *Republic* 531c that the Pythagoreans themselves failed this test, and Augustine's letter to Memorius on why he wrote *De musica* at all.

## 10. Chapter IX · The end of the art

Three closing lessons, placed after the history so that the deepest part of the case is made to someone who has the art in hand.

- **Plato's ladder.** *Republic* VII, with the two criticisms kept distinct: the empirics who put ears before minds, and — the one aimed at this course's own ancestors — the Pythagoreans who seek numbers only in the concords they happen to hear and never ascend to problems. The lesson then says how far to follow Plato and where a Thomist must stop: take the demand for ascent, refuse the suggestion that the string was only a ladder. The *Timaeus* is handled exactly as Lesson 19 handles the spheres — distinguish, don't discard.
- **Augustine's ascent.** *De musica* VI: the five kinds of number (*sonantes, occursores, progressores, recordabiles, iudiciales*), in the order of discovery and then in Augustine's order of *dignity*, which is nearly the reverse and puts memory below action — a point a Thomist reader will stop at, so the lesson flags it. The hinge is that the judging numbers are not ours: we correct what we hear by a measure we did not make. Where Thomas parts from Augustine on illumination is marked rather than smoothed over, and the lesson ends with *Confessions* X.33, which is the mature form of the whole question.
- **The freedom of the judge.** The modern case, classically stated, in four points: you hold a verified counterexample to the quantity-is-real/quality-is-taste picture; you have practised something useless on purpose, which is the formation; you can ask *by what measure*; and you know one approximation precisely, in an age of approximations nobody remembers making. It ends on the smallness of the art being the point — that here, early, and with a piece of wire, a man can find out what it is to know one whole thing through its causes. Newman is quoted once and explicitly labelled a modern witness, not an authority within the art. Nothing anywhere says what anyone ought to listen to.

## 11. The doctrine the exercises exposed

Drilling a skill shows immediately where the teaching is missing. Four lessons were added, and none of it is new doctrine — it is all in Boethius, Nicomachus, Ptolemy, or the *Sectio canonis*:

- **Lesson 5 · The kinds of ratio.** The five species of inequality with their Latin names (*duplus, sesquialter, sesquitertius, sesquioctavus, superbipartiens tertias*…). Lesson 10 was using "the first multiple and the first two superparticulars" as a phrase; now it is a demonstration. The lesson also locates the seam that Chapter VIII later opens: 5:4 is a superparticular standing *before* 9:8 in the order, so the Pythagorean refusal of it cannot rest on the kind of ratio — it rests on the *bound* at four. Zarlino moved the bound to six. The dispute was never ratio-versus-ear.
- **Lesson 14 · The three means and the musical proportion.** 6 : 8 : 9 : 12 — the two means of 6 and 12, containing the diapason, both fifths, both fourths, and the tone. The tone turns out to be simply the distance between the harmonic and the arithmetic mean, which is a second road to what Lesson 13 got by division. And it supplies a proof the course had been owing you: Archytas's theorem (Boethius III.11) that no superparticular in least terms admits a mean proportional — hence the tone cannot be halved, hence the leimma is a *remnant* and not a half, hence every fixed-pitch instrument in Europe has been a compromise.
- **Lessons 17–18 · The Greek system and the three genera.** The fifteen sounds of the Greater Perfect System with their Greek names and exact ratios, spanning 4:1; the standing sounds against the moving ones; the Lesser Perfect System; and a warning that the medieval church tones took the Greek modal names without taking the Greek things. Then the three genera, with Boethius's ratios — and the honest report that he gives the enharmonic diesis *no* whole-number ratio at all, and that his Book IV monochord numbers for the chromatic and enharmonic are approximations that disagree with his Book I ratios. That is not carelessness in him and shouldn't be hidden: it is an art that knows where its instruments stop.

## 12. The palaestra — nine exercise blocks

**Every block opens with a "Why this block, and what it is for"** panel tying the drill to the end of a liberal art. That was your instruction and it turned out to be the best thing about the section: a drill without it *is* a servile exercise, whatever its subject.

| | Block | What it actually builds |
|---|---|---|
| E1 | Hearing the concords | naming 1:1, 2:1, 3:2, 4:3, 9:8 by ear — the fifth against the fourth is the discrimination it exists for |
| E2 | Concord and discord | judging blend *before* the ratio is shown, so the two criteria stay independent witnesses |
| E3 | Length and pitch | the reciprocal, in both directions, until it is automatic |
| E4 | The arithmetic of intervals | compounding and taking away, typed as ratios — the *opus* itself |
| E5 | The kinds of ratio | classification and the Latin names |
| E6 | The means | computing means; naming every interval in 6:8:9:12 |
| E7 | Building the diapason | deriving the leimma, verifying that the parts fill the whole |
| E8 | Which science is this? | sorting claims among harmonics, arithmetic, natural philosophy, moral science, the fine art, and sacred doctrine |
| E9 | The examination | fourteen mixed items from all eight |

**Mastery-gated, as you chose.** Items are drawn fresh from a larger pool each attempt and the options are reshuffled, so there is no page to memorise — only the skill can be repeated. A block reads *possessed* only on a whole clean draw. No timer, no penalty, unlimited attempts; the header now shows checks answered and blocks possessed side by side.

E8 deserves a note. Sorting "the tone cannot be halved" (arithmetic) from "the diapente is 3:2" (harmonics) from "a struck string moves the air" (natural philosophy) from "God ought to be praised with song" (sacred doctrine) is the distinctively *liberal* skill in the whole course — knowing a science means knowing its boundaries — and it is the one that will still be doing you good when the leimma has gone. E2 also carries an unscored panel on the disputed third, because grading you on 81:64 against 5:4 would be dishonest; instead it points out that your ear has been formed by four centuries of music the Greeks never heard, which is worth knowing about yourself before appealing to it.

## 13. What changed under the hood

- **`js/drills.js`** (new). Item pools and generators for the nine sets, plus ratio and number normalisation, so `8:6` is accepted for `4:3`.
- **`app.js` rewritten in part.** Lesson numbers and chapter kickers are now *computed at load*, so inserting a lesson can never leave a stale number. Cross-references are live links (`<span class="xref" data-to="v-2">` renders as "Lesson 15" and navigates), so renumbering can never make a lie of a reference either — this mattered, since the chapter you approved last time is now Chapter VIII. Search reads body text, not just titles. Drill state persists alongside the rest.
- **Four new widgets:** the 6:8:9:12 tetrad with every interval playable; the fifteen-sound Greek system with exact integer ratios; the three genera side by side; and the drill engine.
- One real bug found in testing and fixed: answering a typed item with the Enter key immediately advanced past the explanation, because the same keystroke reached the newly focused Next button.

## 14. What I would still consider

1. **A printable one-page summary** of the six lines, to keep beside the string. Still the cheapest good idea on the list.
2. **Augustine's meter** as a short appendix. Lesson 22 and Lesson 30 both now lean on it.
3. **Spaced return.** The blocks are mastery-gated but nothing prompts you back to a block gone cold. A "last practised" date and a gentle nudge in the nav would take an hour.
4. **A second ear block at the far end** — naming intervals in the tempered tuning against the pure, once Chapter VIII has been read. It would close the loop between the art and the instrument you actually own.
