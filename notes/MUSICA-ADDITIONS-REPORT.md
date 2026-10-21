# Ars Musica additions: report

Done Oct 21, 2026, from ~/Downloads/CLAUDE-MUSICA-ADDITIONS-PROMPT.md. Plan: notes/MUSICA-ADDITIONS-PLAN.md. Commits 7793d25 (plan), 66cb652 (engine and widgets), d6f978b (exercise sets and check script), 61f6ca5 (lessons), 478d8b7 (wiring and links), all pushed to origin/main.

## What was built

**1. The hand and the hexachord: three blocks, E12 to E14** (palaestra chapter, after E11)
- E12 · The syllables of the hexachord (`ex-hexA`, set `hexA`). Two doctrine cards: "The six syllables and the three hexachords" and "The hand". The second card holds the new **hand** widget: a schematic left hand with the twenty places Γ to ee. Tapping a place sounds it (b and bb sound the round b first, then the square b) and shows its name ("G sol re ut", "b fa ♮ mi"); each syllable is a button that sounds its hexachord. There are buttons for the hard, natural, and soft hexachords.
- E13 · The hexachord of a melody (`ex-hexB`, set `hexB`). One card.
- E14 · Mutation (`ex-hexC`, set `hexC`). One card, with a rising and a falling worked example. When a wrong place is chosen, the reason it fails is shown before the right reasoning.
- Pitches use the course's Pythagorean intonation, with a at the open string (216 Hz) and Γ at 96 Hz.

**2. Mode finals and ranges: three blocks, E15 to E17**
- E15 · The final of a mode (`ex-modeA`). Card "The four finals", with a widget that sounds each final with the steps around it.
- E16 · Authentic and plagal (`ex-modeB`). Card "The two ranges", with two example phrases on D.
- E17 · The eight modes (`ex-modeC`). Card "The numbers and the names", with a widget that sounds the range of each mode.
- Every mode item plays a composed phrase with a held final, and has D, E, F, G reference buttons.

**3. Sing-back prompts** (new `singback` widget, rendered after the drill by a new lesson field `coda`)
- After E1 · Hearing the concords: diapason, diapente, diatessaron, and tone.
- After E14 · Mutation: ut to la, la to ut, re mi fa, mi fa sol, fa mi re, ut mi sol.
- The pattern is "Hear the model", sing or hum, "Hear it again". There is no microphone and no score, and the header says "optional". The purpose sentences are "Singing an interval lets us feel the proportion that we have just calculated." and "Singing the syllables lets us feel the proportions that we have just reckoned, with the semitone between mi and fa."

**Wiring**
- The nav and the Guided switch take in the six new blocks automatically. They are counted in the header, scheduled for spaced returns, and marked due.
- ex-0 ("How to use the palaestra") lists E12 to E14 and E15 to E17 in "The order to take them in", says they belong to Chapter VIII and are best taken after vii-1 and vii-7, and mentions the two sing-back prompts. "eleven blocks" is now "seventeen" there, in the colophon, and in the header placeholder.
- Links were added from vii-1 (Guido) to E12 to E14, from the v-2 remark (Guidonian names) to E12, from vii-7 (Glarean's eight church modes) to E15 to E17, and from the v-species remark (the church tones) to E15.

## Item counts per set (a draw takes 10 from each pool)

| Set | Pool | Right option strictly the longest |
|---|---|---|
| hexA: syllables (24) + mi and fa (6) + which b is fa or mi (2) | 32 | 3 (9%) |
| hexB: hexachord of a melody (18) + mi and fa in a melody (7) | 25 | 6 (24%) |
| hexC: where and into what (12) + into which syllable (12) | 24 | 0 |
| modeA: the final | 32 | 0 |
| modeB: authentic or plagal (the two options are the same length) | 32 | 0 |
| modeC: mode by number and name | 32 | 4 (13%, the Mode 8 items, since "Hypomixolydian" is the longest name) |

Run `node notes/check-additions.js` to check all of the following:
- each pool has at least 20 items, with no duplicates;
- the right option is the longest in no more than a third of the items;
- each hexachord melody fits exactly one kind of hexachord;
- each mutation is possible as written, follows the re/la rule, and is the only place the rule allows;
- each mode phrase ends on its final and keeps its stated range. An authentic phrase reaches the seventh or higher and goes at most a tone below the final; a plagal phrase reaches a third or more below the final and goes no higher than the sixth above.

Every check passes.

**Card examples kept out of the items.** G and g are not asked about in hexA, because "G sol re ut" is the card's example. The semitone of the natural hexachord on C is not asked about, because the card names it. The two mutation examples on the card (Γ to F rising, F to A falling) are not items. The card phrases and figures for the modes are not in the phrase pool.

## Browser check

I ran headless Chrome (file://, after a reload that ignored the cache) over ex-ear, E12 to E17, ex-0, vii-1, v-2, vii-7, v-species, E9, and the workshop. On each page I:
- enabled sound;
- clicked every widget button and every place on the hand;
- ran a full draw of each drill, sounding every item and every reference button.

There were no console errors and no exceptions, and every cross-reference resolved. I looked at screenshots in dark and light themes and at 390 px width.

## Not verified against a source (written from general knowledge)

- **Places on the hand.** These follow the common late-medieval layout as I know it: Γ at the thumb tip, C to F across the finger bases, ee on the back of the middle finger. The widget note says the manuscripts differ in small details.
- **The mutation rule.** "In rising we mutate into re, in falling into la" is stated as "a common rule of the later manuals", not as the only practice. The E14 why-block says other places are sometimes used. The items avoid any distractor that would be a defensible mutation under another convention, such as mutating into ut when rising.
- **The modes.** These are standard textbook doctrine: the finals D, E, F, G; the authentic range from the final to the diapason above; the plagal range from about the fourth below to the fifth or sixth above; the Greek names Dorian to Hypomixolydian. The sources line names "the Carolingian and later medieval theorists" generally and cites no particular treatise.
- **Phrases and melodies.** No real chant incipits were used, because I could not check pitches against a source. Every phrase and melody is composed, and each lesson and sources line says so.
- **Latin names.** Each appears once, in parentheses: *molle*, *durum*, *protus*, *deuterus*, *tritus*, *tetrardus*.

## Decisions for Timothy

1. **Six blocks rather than two.** I read "sets A, B, C" as three graded blocks per exercise, each possessed on its own. That makes seventeen blocks and six new entries in the nav. The alternative is one lesson per exercise with a set switch inside it, which would need changes to how app.js counts blocks.
2. **Placement.** The new blocks sit in the palaestra after E11, marked as belonging to Chapter VIII, in the same way E10 and E11 are marked for Chapter IX. They could instead go inside Chapter VIII after vii-1 and vii-7.
3. **Sing-back after the hexachord.** It is on E14 only, as the prompt says "after the hexachord exercise". It could also go on E12, where the syllables are first sung.
4. **E9 · The examination** does not draw from the new sets. Its text speaks of "the eight" blocks, so I left it alone.
5. **The reference finals in E15 to E17.** The D, E, F, G buttons allow matching by absolute pitch. The instruction asks the student to decide by the steps around the last sound. The buttons can be removed from sets A or C if they make the exercise too easy.
6. **Letter names.** The welcome page says the course needs "no names of notes". The new blocks use letters from Γ to ee, because the hexachord and the modes cannot be stated without them. They belong to Chapter VIII, after vii-1 has introduced Guido's letters.
7. **The ♮ glyph.** EB Garamond seems to lack ♮, so it falls back to another font with a slight gap ("bb ♮"). It is legible. A span with a fallback font would tidy it.
8. **Study questions.** I wrote none for the new lessons. That matches the existing drill lessons, which have none.
