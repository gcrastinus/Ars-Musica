# Ars Musica additions: plan

Source prompt: ~/Downloads/CLAUDE-MUSICA-ADDITIONS-PROMPT.md (Oct 21, 2026).
Style: CLAUDE.md / AGENTS.md (the STYLE_GUIDE.md path in the prompt does not exist on this machine).

## How the prompt maps onto this course

The prompt speaks of a "home screen", a "Guided Path", "sets A, B, C" and "doctrine cards". This course has none of those under those names, so:

- **Home screen** = the palaestra's opening lesson (ex-0, "How to use the palaestra"), whose ordered list of blocks is the course's map of the exercises, plus the nav (which lists every lesson automatically) and the colophon count of blocks.
- **Guided Path** = the Guided switch. Any lesson with a `drill` is a block; it is counted in the header, scheduled for spaced returns, and marked due in the nav without further wiring. The new blocks join that automatically; the count words ("eleven") are updated by hand.
- **Sets A, B, C** = three blocks per exercise, each with its own fixed pool of at least 20 items, of which a fresh draw of 10 is taken (the existing pattern: pool, draw, shuffle, all-right-to-possess). The sets are graded: A the elements, B recognition in a melody, C the hardest judgment.
- **Doctrine cards** = `remark` boxes at the head of the set-A lesson (and one short card on B and C), followed by the plain instruction paragraph and the `why-block`, as the existing drill lessons have.

## 1. The hand and the hexachord (E12, E13, E14)

- New widget `hand` (widgets.js): a schematic left hand in SVG with the twenty places of the gamut (Γ to ee, in the common late-medieval spiral). Tapping a place sounds it and shows its letter and syllables ("G sol re ut"); each syllable is a button that sounds its hexachord. Play buttons for the three hexachords. Pitches in this course's Pythagorean intonation, a = 216 Hz (the open string), Γ = 96 Hz.
- New drills in drills.js: `hexA` (syllable of a pitch in a named hexachord; mi and fa around the semitone), `hexB` (which hexachord a short written melody lies in; where mi and fa fall in it), `hexC` (where to mutate and into which syllable, by the rule stated on the card: on a pitch the two hexachords share, ascending into re, descending into la).
- Each item sounds what it asks about (the hexachord and the pitch, or the melody).
- Lessons ex-hexA, ex-hexB, ex-hexC after E11, placed in the palaestra chapter and marked in ex-0 as belonging to Chapter VIII, after vii-1.
- Links: vii-1 (Guido) and the remark in v-2 (Guidonian names) point to E12; vi-2's list of what remains is left as it is.
- Doctrine kept: the hexachord system, with mutation and the hand, is the later theorists' elaboration on Guido's syllables (vii-1 says so; the card repeats it).

## 2. Mode finals and ranges (E15, E16, E17)

- New drills `modeA` (the final: D, E, F or G), `modeB` (authentic or plagal), `modeC` (mode by number and medieval name).
- Phrases are composed for the exercise (not real incipits, since no source to verify pitches is at hand); each ends on its final, with notes of longer value at the end; authentic phrases rise to the seventh or the diapason above the final and go at most one step below; plagal phrases go a third or a fourth below the final and no higher than the sixth above. A "the four finals" reference button sounds D, E, F, G.
- Consistency with the course: v-species and sys-1 leave the mapping of the Greek names onto the church tones open, and sys-1 warns that "Dorian" did not mean the same thing to Ptolemy as to a tenth-century cantor. The card says the names are the medieval Latin names of the church modes, borrowed from the Greek, and points to sys-1. east-1's "plagal tones stand a fourth below their authentics" is kept.
- Links from vii-7 (Glarean's "eight church modes") and v-species (the church tones) to E15.

## 3. Sing-back prompts

- New widget `singback` with `data-set="concords"` (diapason, diapente, diatessaron, tone) and `data-set="hexachord"` (ut to la, la to ut, mi fa, fa mi, ut mi sol, re fa la, and similar). Each model: hear it, sing or hum it, hear it again. No microphone, no score. Header marks it as optional.
- Placed after the drill on E1 (ex-ear) and after the drill on E14 (the last hexachord set), using a new lesson field `coda` that app.js renders after the drill widget.

## Engine changes (small)

- drills.js `many` sounds may carry absolute `freqs`, a `gap`, a longer last note, and `ref` buttons (extra playback such as the four finals or the hexachord alone).
- app.js renders `lesson.coda`.

## Checks

- A node script (scratchpad) builds each new pool and reports: pool size per set (at least 20), the share of items in which the correct option is strictly the longest (at most one third), and duplicate items.
- Style search on all new text (the CLAUDE.md list).
- Browser: open every new lesson, play every new sound, run a draw of each set, no console errors.

## Commits

1. Plan.
2. Engine and hand widget plus hexachord sets and lessons.
3. Mode sets and lessons.
4. Sing-back widget and placements; ex-0, colophon, counts, links.
5. Report.
