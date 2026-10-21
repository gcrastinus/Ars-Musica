# Report: St. Thomas as the core and measure (part 2)

Done from ~/Downloads/MUSICA-THOMAS-PROMPT.md. Plan: notes/MUSICA-THOMAS-PLAN.md. Commits on main, all pushed: 8c96d9b (plan, style guide, check script), a569d07 (contemplations), 297520a (lessons), 9d0c34b (Music and the city), and this report. The part 1 principle and wording (music states the application, and the demonstration belongs to the other science) are kept everywhere they stood. The hexachord, mode, and sing-back work was not touched.

## How the texts were checked

- *Summa theologiae*, English: the Dominican Province translation (2nd ed., 1920) at newadvent.org, compared word for word. Latin: corpusthomisticum.org.
- *De regno* and *Super Boetium De Trinitate*: Latin at corpusthomisticum.org; English rendered for the course, marked "rendered from the Latin" in the citation.
- Commentary on *Politics* VIII: the Parma edition, vol. 21 (1867), Book VIII lect. 2–3, read in the archive.org scan (OCR). Corpusthomisticum carries only St. Thomas's own part, which ends at III.6.
- Bodin: Knolles's translation, *The Six Bookes of a Commonweale* (London, 1606), Book VI ch. 6. The two passages quoted (pp. 755 and 760) were read on the page images, not only in the OCR. Long s is printed as s. The original u/v and I/J spellings are kept.
- Kepler: *Harmonices mundi* (Linz, 1619), Book III, *Digressio politica*, pp. 86 ff., in the archive.org OCR of the Latin. Paraphrased only.

## Additions and their sources

### The Thomistic account (head of c-ethos)

The lead of c-ethos is now a list of paragraphs. The renderer accepts one paragraph or several, and the search box now searches the lead. The governing sentence from part 1 comes first, unchanged. Five paragraphs follow, written as one argument:

1. The fact. "the human soul is moved in various ways according to various melodies of sound" (II–II q.91 a.2). Passion is a movement of the sensitive appetite (I–II q.22 a.3). Reason rules that appetite "by a politic power … because the sensitive appetite has something of its own, by virtue whereof it can resist the commands of reason" (I q.81 a.3 ad 2).
2. Virtue. The passions are good or evil as subject to reason (I–II q.24 a.1). "it belongs to the perfection of moral good, that man should be moved unto good, not only in respect of his will, but also in respect of his sensitive appetite" (q.24 a.3). "Virtue overcomes inordinate passion; it produces ordinate passion" (q.59 a.5 ad 1). The mean is the mean that reason puts into the matter, and in the passions it is set "with due regard to us, who are moved in respect of the passions" (q.64 a.1–2).
3. Delight. The senses please man for the sake of knowing (I–II q.31 a.6). Pleasure "at a well-harmonized sound … has nothing to do with the preservation of nature" (II–II q.141 a.4 ad 3). Peter of Auvergne adds that judging the ratios of tones and delighting in them rightly is an exercise toward virtue (Parma lect. 2, paraphrased).
4. Use. Song may be blamed when it is sung "in order to show off, or to provoke pleasure" (II–II q.91 a.2 ad 2). The lead also uses ad 5, ad 4 ("move the soul to pleasure rather than create a good disposition within it"), and II–II q.168 a.2. This paragraph links to c-city.
5. Principle. The account is stated from moral philosophy and theology, not demonstrated. Music considers sounds "not inasmuch as they are sounds, but inasmuch as they are proportionable according to numbers" (*Super Boetium De Trin.* q.5 a.3 ad 6, rendered).

### Quotations corrected in the contemplations

Six passages set as quotations of St. Thomas were paraphrases. Each now gives the checked text:

- **c-musician, I–II q.57 a.3.** The second sentence ("the habit of art is in the reason; the making that follows …") is not in the article.
- **c-criteria, *Super Boetium* q.5 a.3 ad 6.** This was a paraphrase. It is now the Latin with an English rendering.
- **c-please, I q.5 a.4.** This was elided without marks and is actually ad 1. The citation is corrected and the text is given in full, with marked ellipses. The inserted "(*consonantia*)" was taken out of the q.39 a.8 quotation and left in the recast.
- **c-soul, I q.76 a.1.** "Not … as a sailor in a ship" is not in the article. The quotation and the recast that repeated it are corrected.
- **c-virtue, I–II q.64.** This was a composite of a.1 and a.2. It is now the exact text of both. The study response that said "the mean of reason, not the mean of the thing" now says "every mean of moral virtue is the mean which reason puts into the matter," because q.64 a.2 says that in justice the rational mean *is* the real mean.
- **c-ethos, II–II q.91 a.2.** The closing sentence ("Yet if it be done for ostentation … it is to be blamed") is not in the text. It is replaced by the body of the article and by ad 2.

A display bug was also fixed. Eighteen ellipses in contemplate.js were written `\ldots` inside JavaScript strings, and they showed on the page as "ldots." They are now "…".

### Measuring sentences

In the contemplations:
- **c-ethos, return 1.** Plato's choice of modes is measured by law's end in the common good (I–II q.90 a.2) and by prudence.
- **c-ethos, return 2.** Aristotle's rule on the aulos is received at II–II q.91 a.2 ad 4, with St. Thomas's own reason for the instruments of the Old Law.
- **c-musician, return 3.** Boethius's judge is measured by Peter of Auvergne: right judging and delight are an exercise toward virtue.
- **c-please, return 2.** II–II q.141 a.4 ad 3: the delight is for becomingness and is proper to man.
- **c-soul, return 2.** St. Thomas follows Aristotle, and the fitting Boethius names is an effect of the soul, not the soul.
- **c-virtue, return 1.** Plato's ordered soul, stated by I q.81 a.3 ad 2.
- **c-ascent, return 2.** Augustine's judging numbers are judged by I q.84 a.6 ("in a way the material cause"; abstraction). The honesty note now cites q.84 a.5–6.
- **c-ascent, return 3.** *Confessions* X as St. Thomas reads it at II–II q.91 a.2 ad 2.

In the lessons (the sources lines are updated to match):
- **i-1:** St. Thomas receives the observation and judges its use by prudence and the common good, with a link to c-city. This is where the course first names politics.
- **lib-2:** I–II q.24 a.3.
- **v-species:** II–II q.91 a.2 and the mean set by reason.
- **sys-2:** I–II q.90 a.2.
- **vi-1:** I q.76 a.1, correcting the analogy.
- **vi-2:** the teaching on use is now attributed to St. Thomas, with ad 2 and ad 4.
- **ex-modeC:** Peter of Auvergne's reading of Dorian as the first tone ("most moral") and Phrygian as the third. The mapping is still left open.
- **east-5:** St. Thomas's reason in ad 4 is distinguished from the Eastern one.
- **end-1:** the *Timaeus*, measured by I–II q.59 a.5 ad 1.
- **end-2:** I q.84 a.6.
- **end-3:** I–II q.24 a.3.
- **sources:** St. Thomas is named as the measure on music and the soul, the passions, virtue, and the city, and Peter of Auvergne is credited for Book VIII.

East-1 (the characters of the eight Byzantine tones) was left alone. It is the Eastern tradition's own account, which the course reports without judging.

### Music and the city (c-city, C7)

The contemplation follows c-ethos. The two later contemplations moved from C7 and C8 to C8 and C9. The lead is an argument in four paragraphs:

1. The principle.
2. What music offers the city. II–II q.91 a.2 is applied to common hearing, and Plato (*Republic* III) and Aristotle (*Politics* VIII) are recalled from c-ethos, not repeated. Grocheio is measured by II–II q.168 a.2.
3. What the city may ask:
   - law and the common good (I–II q.90 a.2), with q.95 a.1 quoted;
   - Peter of Auvergne: what is taught the young is measured by the end of the commonwealth, and the aulos is kept for war;
   - *De regno* II.4: superfluous pleasures corrupt prudence, but a little pleasure is needed for refreshment;
   - II–II q.168 a.4: the lack of mirth is a vice.
4. How St. Thomas judges both:
   - I q.81 a.3 ad 2: music can dispose the citizens but not compel them;
   - Bodin's harmonic justice and Kepler's correction of it are measured by II–II q.61 a.2 (geometrical and arithmetical proportion) and q.120 a.1 (equity).

The first encounter is *De regno* II.4, in Latin and English. The three returns are:

1. Peter of Auvergne, Parma lect. 2 (rendered).
2. II–II q.168 a.2 (Dominican translation), whose sed contra quotes Augustine's *De musica*.
3. Bodin, Knolles, pp. 755 and 760.

The honesty note states the principle and the authorship of Book VIII. There are ten study questions. The true option is the unique longest in 2 of them. Its index varies (1, 2, 0, 1, 3, 2, 1, 0, 3, 2). No question asks about a card's own example.

## Unverified, paraphrased, or read only from OCR

- **Grocheio (unverified).** Neither the Rohloff nor the Mews edition could be reached. The c-city lead and one study question paraphrase his teaching from general knowledge: he calls the music of ordinary life the music of the city, and the epic song is to be sung to the old and to working citizens at rest, so that they bear their own hardships and return to work, for the preservation of the city. No words of his are quoted. This should be checked against the Mews edition (2011) or Page, *Plainsong and Medieval Music* 2 (1993).
- **Kepler (paraphrased).** He is paraphrased from the 1619 Latin OCR: he transcribes Bodin's chapter because Bodin brought too little mathematics, he compares the popular state, aristocracy, and kingship to the arithmetical, geometrical, and harmonic proportions, and he says Bodin's "harmonic" sets are mixtures of the other two. This was not checked against Aiton, Duncan, and Field.
- **Peter of Auvergne (from OCR).** He is quoted only in English, rendered from the Parma OCR, and the Latin is not printed. The words read clearly. Even so, the passage should be compared with a clean edition (Lanza's critical edition, or the Marietti/Spiazzi text with its own lecture numbers).
- ***De regno* numbering.** It is cited as II.4, in the numbering of the Corpus Thomisticum. Other translations number it differently, Phelan and Eschmann among them.

## One-third counts for every set touched

Each count is the number of questions in which the true option is the unique longest (`node notes/check-study.js`):

| Set | Count |
|---|---|
| i-1 | 4 of 12 |
| lib-2 | 3 of 11 |
| v-species | 3 of 10 |
| sys-2 | 3 of 11 |
| vi-1 | 3 of 11 |
| vi-2 | 3 of 11 |
| east-5 | 3 of 11 |
| end-1 | 3 of 11 |
| end-2 | 3 of 11 |
| end-3 | 3 of 11 |
| c-musician | 3 of 10 |
| c-criteria | 3 of 10 |
| c-please | 3 of 10 |
| c-soul | 3 of 10 |
| c-virtue | 3 of 10 |
| c-ethos | 3 of 10 |
| c-city | 2 of 10 |
| c-ascent | 3 of 10 |

ex-modeC has no study set. No set is over one third.

## Browser check

The course was served locally and loaded in headless Chrome. Twenty-two pages were opened: every contemplation, with all three returns unlocked, and every lesson touched. None had a console error or an exception. Every cross-reference was filled, and every study widget mounted.

## Decisions for Timothy

1. **A gloss before the author's words.** The account is in the lead of c-ethos, so it comes before Aristotle's words. But c-how says that each theme opens with "the author's words, without a gloss in front of them," and c-ethos and c-city now open with an argument. One option is to change that sentence in c-how. The other is to move the account into the honesty note or into a lesson.
2. **Damon and Plato's *Laws*.** The prompt says they are already in the course, but they are not. Neither is cited anywhere. Following "add no new authors," they were not added. c-city recalls only *Republic* III and *Politics* VIII.
3. **The title.** The title is "Music and the city," in the course's sentence case, not "Music and the City."
4. **Peter of Auvergne.** He is a new name, because the prompt required the attribution. He is introduced with an appositive at each first mention, not with a passage of his own except in c-city.
5. **Equity as the measure of Bodin.** Bodin's harmonic justice is measured by giving its regard for circumstances to equity (II–II q.120 a.1). That is my reading, though Bodin's own list of four terms includes equity. Please confirm that this is the judgment you want St. Thomas to make here.
6. **Inferences stated as consequences.** Some sentences go a step beyond the text they cite: "so no law about music makes citizens virtuous by the music alone," and "the city's care for music is one part of its care for virtue." They are inferences from I q.81 a.3 ad 2 and I–II q.95 a.1, not St. Thomas's words.
7. **Other quotations in the contemplations.** The passages of Aristotle, Plato, Boethius, Augustine, and Ptolemy were not rechecked. The Ptolemy passages in c-criteria and some Aristotle passages read as compressed paraphrases. A pass like the one done for St. Thomas may be wanted.
8. **"St." with a period.** The prompt says both "Never 'Dr.' 'St.' with a period" and "Write 'St. Thomas.'" "St. Thomas" was kept with the period, as the course already writes it. No "Saint Thomas" remained in js/ or index.html.
9. **Long study sets.** i-1 is at exactly one third (4 of 12), as it was before.
