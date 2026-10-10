MARKED by Grok Bot at Timothy's request, Oct 10, 2026; Timothy reviews the flagged entries before approval. Not yet APPROVED.

# Ars Musica: style review, step 1 (list only)

Prepared October 10, 2026, after `git pull` (now at 4c2be45). Nothing in the course has been changed, and nothing has been committed. This file is untracked.

Read first: `../Trivium/TIMOTHY-STYLE-PACK.md` (v2), `AGENTS.md`, `CLAUDE.md`.

## 1. Survey: student-facing English sentences per file

These are approximate counts, made by a script that pulls the string literals out of each file, strips the HTML, and counts sentences of three or more words. They include questions and option labels, so they overcount a little.

| File | What it holds | Sentences (approx.) |
|---|---|---|
| `js/study.js` | Study questions, options and the response to each option, for every lesson | 5,790 |
| `js/content.js` | Lesson text for every chapter, with headings, remarks and source lines | 1,740 |
| `js/study-cont.js` | Study questions for the Contemplations | 990 |
| `js/drills.js` | Palaestra exercise items and their feedback | 330 |
| `js/contemplate.js` | Contemplation passages (mostly translated quotations) and their framing | 240 |
| `js/widgets.js` | Labels and captions on the monochord and other widgets | 110 |
| `js/app.js` | Interface messages (errors, progress, navigation) | 20 |
| `index.html` | Header labels, tooltips, colophon, loading message | 14 |
| `js/audio.js` | None (code only) | 0 |

No single file holds both the first chapter's lesson text and its question feedback. The lesson text is in `js/content.js` and the questions and feedback are in `js/study.js`. As you chose, this sample covers the welcome page and Chapter I in both files:

- `content.js`: `welcome`, `i-1`, `lib-1`, `lib-2`, `i-2`, `arith-1`, `i-3` (lines 21–194).
- `study.js`: the sets for the same seven lessons (lines 19–80 and 162–579).

## 2. Sentences read and left alone

- Read: about 1,290 sentences (about 272 of lesson text and about 1,020 in the study sets, counting questions, option labels and responses).
- Listed below: 192 individual entries (73 in the lesson text, 119 in the question feedback) and 5 pattern entries, which cover about 140 further occurrences.
- Left alone: about 950 sentences, including every option label, all Latin and Greek, the source lines, quotations, and the designer credit (your own line, a9a86ad).

## 3. Notes before the list

- **Lines that may be yours.** Commit feba2be ("text edits", Aug 26) changed a few sentences in this range. The style pack rates those Ars Musica edits as lower confidence, but rule 3 says your wording is yours to change. Where an entry touches one of them, it says **(feba2be)**.
- **Lesson sentences quoted by the study questions.** Several study questions quote the lesson word for word ("The seven liberal arts are two roads"; "If you do not yet know what a ratio of whole numbers is…"; "center of gravity"; "the great one"). If a lesson sentence changes, the question that quotes it should change with it. Each entry says so where it applies.
- **The study.js rule.** The comment at the top of `study.js` says that a wrong choice is met "with the reason that choice fails … without naming the right one". The proposed hints keep to that rule.
- **Kinds used below:** aphorism/slogan; setup/reveal (including colon reveals); page-talk; "you"/imperative; dash; "exactly/precisely/simply"; quip hint; fragment; figure (metaphor or idiom used in place of the literal claim); spelling (British).

---

## 4. Lesson text (`js/content.js`)

### welcome: How to use this course

**1.** welcome ¶2 **(feba2be)**. Kind: fragment, colon reveal
- OLD: The pictures are not decoration. They are to the ear what a Euclidean diagram is to the eye: the little bridge on the string, then the reason the sound is as it is.
- NEW: The pictures are not decoration; they are to the ear what a Euclidean diagram is to the eye, because they show first the little bridge on the string and then the reason the sound is as it is.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: TIMOTHY'S WORDING? Current wording came from his hand edit in feba2be (Aug 26), so it stays unless he changes it.

**2.** welcome ¶3. Kind: fragment
- OLD: Two practical notes.
- NEW: There are two practical notes.
- [x] yes [ ] change: ____ [ ] keep

**3.** welcome ¶3. Kind: dash
- OLD: Second, this course uses the old intonation of the art — whole-number ratios of a single string — not the slightly adjusted pitches of a modern piano.
- NEW: Second, this course uses the old intonation of the art (whole-number ratios of a single string), not the slightly adjusted pitches of a modern piano.
- [x] yes [ ] change: ____ [ ] keep

**4.** welcome, remark "What you will possess". Kind: dash, figure ("lives in")
- OLD: This course teaches the mathematical skill of the art in full, and shows the doctrine of the whole faithfully enough to be believed and returned to — but the doctrine’s full demonstration lives in the books it points you toward.
- NEW: This course teaches the mathematical skill of the art in full, and shows the doctrine of the whole faithfully enough to be believed and returned to; but the full demonstration of the doctrine is found in the books to which the course refers.
- Note: the correct option of study welcome Q6 says "lives in the books"; the option stays as it is.
- [ ] yes [x] change: This course teaches the mathematical skill of the art in full, and shows the doctrine of the whole faithfully enough to be believed and returned to, but the full demonstration of the doctrine is in the books it points you toward. [ ] keep
- Grok note: NEW's passive is stiffer than OLD; this only removes the dash and the figure. The Q6 option still says "lives in the books".

### i-1: Three studies of music

**5.** i-1 ¶1. Kind: setup ("is this")
- OLD: A clear statement of the three intellectual studies, drawn from Aristotle, Plato, and Boethius, is this.
- NEW: Drawing on Aristotle, Plato, and Boethius, we can state the three intellectual studies of music clearly as follows.
- [x] yes [ ] change: ____ [ ] keep

**6.** i-1 ¶2. Kind: staccato run; link left implicit
- OLD: Fine art is nearer the liberal arts than shoemaking is, because it belongs to leisure and aims at the beautiful. It is still not a liberal art. Liberal study aims at truth as such.
- NEW: Fine art is nearer the liberal arts than shoemaking is, because it belongs to leisure and aims at the beautiful. But it is still not a liberal art, because liberal study aims at truth as such.
- [x] yes [ ] change: ____ [ ] keep

**7.** i-1 ¶3. Kind: staccato run, aphoristic close
- OLD: Parents who watch what is sung in the house, and lawgivers who watch what is sung in the city, are not doing mathematics. They are forming character. That is training, and it can be a part of moral science. It is not the liberal art.
- NEW: Parents who watch what is sung in the house, and lawgivers who watch what is sung in the city, are not doing mathematics but forming character. That is training, and it can be a part of moral science, but it is not the liberal art.
- [x] yes [ ] change: ____ [ ] keep

**8.** i-1 ¶4. Kind: dash
- OLD: Third, music as a liberal art — which the Greeks, when they were being careful, called harmonics.
- NEW: Third, music as a liberal art, which the Greeks, when they were being careful, called harmonics.
- [ ] yes [x] change: Third, there is music as a liberal art, which the Greeks, when they were being careful, called harmonics. [ ] keep
- Grok note: NEW is still a fragment.

**9.** i-1 ¶4. Kind: "one" (stiff; the pack prefers "we")
- OLD: One considers this scale as a nature, for the sake of the truth about numbered sound, not for the sake of a concert and not for the sake of making citizens of a certain stamp.
- NEW: We consider this scale as a nature, for the sake of the truth about numbered sound, not for the sake of a concert and not for the sake of making citizens of a certain stamp.
- [x] yes [ ] change: ____ [ ] keep

**10.** i-1, remark "A name". Kind: aphoristic pair; link left implicit
- OLD: The gift of the Muses is song. The liberal art is the science of the ratios from which song is possible.
- NEW: The gift of the Muses is song, but the liberal art is the science of the ratios from which song is possible.
- [x] yes [ ] change: ____ [ ] keep

**11.** i-1, last ¶. Kind: aphoristic closer, staccato
- OLD: The other two are real. They are not first, and they are not what the quadrivium names musica.
- NEW: The other two are real studies, but they are not first, and they are not what the quadrivium names musica.
- Note: the correct option of study i-1 Q10 quotes "They are real; they are not first…"; the option stays.
- [x] yes [ ] change: ____ [ ] keep

### lib-1: Why this art is called liberal

**12.** lib-1 ¶1. Kind: page-talk, "you"
- OLD: You have been told which of the three studies this course is. You have not been told why the tradition calls it a liberal art, or what makes any art liberal.
- NEW: We have seen which of the three studies this course is, but not why the tradition calls it a liberal art, or what makes any art liberal.
- [x] yes [ ] change: ____ [ ] keep

**13.** lib-1 ¶1. Kind: aphorism / figure ("not decoration")
- OLD: The question is not decoration. A man who does not know it will not know what he is doing when he stops a string, and will not know what he has when he is finished.
- NEW: The question matters, because a man who does not know the answer will not know what he is doing when he stops a string, or what he has when he is finished.
- [x] yes [ ] change: ____ [ ] keep

**14.** lib-1 heading. Kind: "Label: fragment" heading
- OLD: First: its end. It is ordered to knowing.
- NEW: The first mark is its end: it is ordered to knowing.
- Note: this is a heading, so the pack leaves it to you (rule 16). Entries 15 and 16 are the other two headings.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: Heading; left to Timothy (rule 16). Same for 15 and 16.

**15.** lib-1 heading. Kind: "Label: fragment" heading
- OLD: Second: its work. The opus stays in the one who makes it.
- NEW: The second mark is its work: the opus stays in the one who makes it.
- [ ] yes [ ] change: ____ [x] keep

**16.** lib-1 heading. Kind: "Label: fragment" heading
- OLD: Third: its effect. It makes a judge, and a judge is a free man.
- NEW: The third mark is its effect: it makes a judge, and a judge is a free man.
- [ ] yes [ ] change: ____ [x] keep

**17.** lib-1 ¶3. Kind: spelling
- OLD: St. Thomas, commenting, puts it in a sentence worth memorising:
- NEW: St. Thomas, commenting, puts it in a sentence worth memorizing:
- [x] yes [ ] change: ____ [ ] keep

**18.** lib-1 ¶3. Kind: fragment, colon reveal, figure ("runs on")
- OLD: And immediately after, the distinction the whole tradition runs on:
- NEW: Immediately after, he states the distinction on which the whole tradition depends:
- [x] yes [ ] change: ____ [ ] keep

**19.** lib-1 ¶4. Kind: colon reveal
- OLD: So liberal does not mean difficult, or refined, or suitable to gentlemen. It means: ordered to knowing.
- NEW: So liberal does not mean difficult, or refined, or suitable to gentlemen; it means ordered to knowing.
- [x] yes [ ] change: ____ [ ] keep

**20.** lib-1 ¶4. Kind: dash
- OLD: …the free man should learn useful things, but not all of them, and not as an artisan learns them — to be always seeking after the useful does not become free and exalted souls.
- NEW: …the free man should learn useful things, but not all of them, and not as an artisan learns them, because to be always seeking after the useful does not become free and exalted souls.
- Note: the Aristotle quotation itself is unchanged.
- [x] yes [ ] change: ____ [ ] keep

**21.** lib-1 ¶5. Kind: figure
- OLD: An objection presses at once.
- NEW: An objection arises at once.
- [x] yes [ ] change: ____ [ ] keep

**22.** lib-1 ¶7 **(feba2be)**. Kind: vague setup line
- OLD: That work is of this kind.
- NEW: The work of a liberal art is of the following kind.
- Note: your edit replaced "Notice what kind of work that is." Listed so you can decide whether the line is needed at all.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: TIMOTHY'S WORDING? Current wording came from his hand edit in feba2be (Aug 26), so it stays unless he changes it.

**23.** lib-1 ¶7. Kind: dash
- OLD: A cobbler’s work ends in a shoe — something outside him, which stays on the bench when he has forgotten how it was made.
- NEW: A cobbler’s work ends in a shoe, something outside him, which stays on the bench when he has forgotten how it was made.
- [ ] yes [x] change: A cobbler’s work ends in a shoe, which is something outside him and stays on the bench when he has forgotten how it was made. [ ] keep

**24.** lib-1 ¶7. Kind: "you" in teaching text
- OLD: When you have found the diapason on the string and know why it is 2:1, the work you have made is a possession of your reason, and there is nothing left over on the bench.
- NEW: When we have found the diapason on the string and know why it is 2:1, the work we have made is a possession of our reason, and there is nothing left over on the bench.
- [x] yes [ ] change: ____ [ ] keep

**25.** lib-1, remark "On melodias formare". Kind: staccato reveal
- OLD: Thomas’s phrase for the work of musica is “to form melodies,” and a hasty reader will take that to mean composition after all. It does not.
- NEW: Thomas’s phrase for the work of musica is “to form melodies,” and a hasty reader will take that to mean composition after all, but it does not mean composition.
- [ ] yes [x] change: Thomas’s phrase for the work of musica is “to form melodies,” and a hasty reader will take that to mean composition after all, but it does not. [ ] keep

**26.** same remark. Kind: setup ("The whole point")
- OLD: The whole point of his list is that each work named is performed by reason immediately, without passing into outward matter.
- NEW: In his list, each work named is performed by reason immediately, without passing into outward matter.
- [x] yes [ ] change: ____ [ ] keep

**27.** same remark. Kind: dash
- OLD: A melody formed by reason is an ordered set of pitches known in their proportions — which is what this course has been calling the scale.
- NEW: A melody formed by reason is an ordered set of pitches known in their proportions, which is what this course has been calling the scale.
- [x] yes [ ] change: ____ [ ] keep

**28.** lib-1 ¶9. Kind: staccato run, aphoristic close
- OLD: Boethius’s judge is free in Aristotle’s sense. He is not an instrument of the art; he is its master. Anyone at all can be moved by a sound. Only the man who knows the measure can say what has been done to him, and by what.
- NEW: Boethius’s judge is free in Aristotle’s sense, because he is not an instrument of the art but its master. Anyone at all can be moved by a sound, but only the man who knows the measure can say what has been done to him, and by what.
- [x] yes [ ] change: ____ [ ] keep

**29.** lib-1 heading. Kind: "you will meet" (named in the pack)
- OLD: Two objections you will meet
- NEW: Two objections
- [x] yes [ ] change: ____ [ ] keep

**30.** lib-1 ¶10. Kind: "precisely"
- OLD: Medicine is a noble art and is ordered to health, and that ordering is precisely what makes it not liberal.
- NEW: Medicine is a noble art and is ordered to health, and that ordering is what makes it not liberal.
- [x] yes [ ] change: ____ [ ] keep

**31.** lib-1 ¶10. Kind: dash
- OLD: Harmonics may be used — St. Thomas himself treats the use of song at ST II-II q.91 — and remains ordered to knowing.
- NEW: Harmonics may be used (St. Thomas himself treats the use of song at ST II-II q.91) and remains ordered to knowing.
- [x] yes [ ] change: ____ [ ] keep

**32.** lib-1, remark "Thomas’s deeper reason". Kind: dash introducing a list
- OLD: Even in speculative matters, he says, there is something after the manner of a work — the construction of a syllogism, the forming of a fitting speech, the work of numbering or measuring.
- NEW: Even in speculative matters, he says, there is something after the manner of a work, such as the construction of a syllogism, the forming of a fitting speech, or the work of numbering or measuring.
- [x] yes [ ] change: ____ [ ] keep

### lib-2: Effects of possessing this art

**33.** lib-2 ¶1 **(feba2be)**. Kind: "you"
- OLD: What follows for you?
- NEW: What follows for the one who has it?
- [ ] yes [ ] change: ____ [x] keep
- Grok note: TIMOTHY'S WORDING? Current wording came from his hand edit in feba2be (Aug 26), so it stays unless he changes it. (He rewrote this paragraph and left the question as it is.)

**34.** lib-2 ¶2. Kind: fragment, aphorism
- OLD: Four things. They are not four sentiments.
- NEW: Four things follow, and none of them is a sentiment.
- [x] yes [ ] change: ____ [ ] keep

**35.** lib-2 ¶3. Kind: setup line
- OLD: This is the great one, and everything else in the list is smaller.
- NEW: This is the most important of the four, and the other three are lesser.
- Note: study lib-2 Q1 says "The first of the four things is called the great one"; that question would need the same change.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: "the great one" is quoted by study lib-2 Q1 (entry 130); if Timothy changes it, both change together.

**36.** lib-2 ¶5. Kind: "you" (repeated), staccato run, figure ("tracking")
- OLD: That is a large claim, and in most matters you must take it on the word of a wise man. Here you need not. You will hear that some pairs of sounds please and some do not. You will measure them, and find that the pleasing ones are the simple ratios. You will alter the ratio, and the pleasure will alter with it. The delight is tracking something the mind can state.
- NEW: That is a large claim, and in most matters we must take it on the word of a wise man, but here we need not. We will hear that some pairs of sounds please and some do not; we will measure them, and find that the pleasing ones are the simple ratios; and when we alter the ratio, the pleasure will alter with it. So the delight varies with something the mind can state.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Study lib-2 Q1 B (entry 131) quotes "tracking"; both change together.

**37.** lib-2 ¶6. Kind: imperative, punchline reveal
- OLD: Do that once, honestly, on a string in a quiet room, and the modern conviction that beauty is nothing but private preference has not been argued against. It has been refuted, in your own hearing, by you.
- NEW: If we do that once, honestly, on a string in a quiet room, we have not merely argued against the modern conviction that beauty is nothing but private preference; we have refuted it in our own hearing.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Study lib-2 Q4 A (entry 138) follows this sentence; both change together.

**38.** lib-2 ¶7. Kind: figure ("worth more than its size"); colon list
- OLD: This is why the art is worth more than its size. It is small: one string, three ratios, a scale.
- NEW: This is why the art matters more than its small extent would suggest. It is small (one string, three ratios, a scale),
- Note: the next sentence would then continue "but it is a verified instance of the claim…".
- [ ] yes [x] change: This is why the art matters more than its size would suggest. It is small (one string, three ratios, a scale), but it is a verified instance of the claim … [ ] keep
- Grok note: NEW ends in a comma; the next sentence must be joined to it.

**39.** lib-2 ¶7. Kind: aphoristic closer
- OLD: Harmonics is one place where a man can check.
- NEW: Harmonics is one place where a man can check that claim for himself.
- [x] yes [ ] change: ____ [ ] keep

**40.** lib-2 ¶8. Kind: figure
- OLD: The Pythagorean who will not listen and the empiric who will not demonstrate are both crippled, and both are common in every age including this one.
- NEW: The Pythagorean who will not listen and the empiric who will not demonstrate both fall short, and both are common in every age including this one.
- [x] yes [ ] change: ____ [ ] keep

**41.** lib-2 ¶9. Kind: spelling
- OLD: Practising this art is practice in that habit.
- NEW: Practicing this art is practice in that habit.
- [x] yes [ ] change: ____ [ ] keep

**42.** lib-2 ¶9. Kind: imperatives
- OLD: Take what is heard seriously without stopping there; take demonstration seriously without contempt for what is heard.
- NEW: The habit is to take what is heard seriously without stopping there, and to take demonstration seriously without contempt for what is heard.
- [x] yes [ ] change: ____ [ ] keep

**43.** lib-2 ¶9. Kind: "you"
- OLD: The exercises are where you acquire it, because a habit is not acquired by reading about it.
- NEW: We acquire it in the exercises, because a habit is not acquired by reading about it.
- [x] yes [ ] change: ____ [ ] keep

**44.** lib-2 ¶10. Kind: fragment
- OLD: Boethius again: not the player, not the maker of songs, but the one who judges.
- NEW: Here again Boethius names not the player, nor the maker of songs, but the one who judges.
- [x] yes [ ] change: ____ [ ] keep

**45.** lib-2 ¶10. Kind: "you"
- OLD: It does not chiefly make you able to do more things; it makes you able to say what is the case, and why.
- NEW: It does not chiefly make us able to do more things; it makes us able to say what is the case, and why.
- Note: study lib-2 Q6 quotes "make you able"; the question would follow the lesson.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Study lib-2 Q6 quotes "make you able"; both change together.

**46.** lib-2 ¶10. Kind: staccato, "you"
- OLD: You will not half-know it. Either 3:2 is in your ear and in your reason, or it is not.
- NEW: So no one half-knows it; either 3:2 is in our ear and in our reason, or it is not.
- [ ] yes [x] change: We will not half-know it; either 3:2 is in our ear and in our reason, or it is not. [ ] keep
- Grok note: NEW's "So no one" adds an inference and a general claim.

**47.** lib-2 heading. Kind: figure ("road"), slogan
- OLD: 4. It is a road, and the road goes up.
- NEW: 4. It leads the mind upward to the rest of philosophy.
- Note: "roads" is Hugh of St. Victor's own image in the next paragraph, which stays. Only the heading's slogan is in question.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: The lesson itself uses the road figure (Hugh of St. Victor, next paragraph), so the heading's echo stays. Same for 146 and 151.

**48.** lib-2 ¶12. Kind: dashes
- OLD: The second — and these are the Pythagoreans, the very school this art descends from — do seek numbers, …
- NEW: The second (and these are the Pythagoreans, the very school from which this art descends) do seek numbers, …
- [x] yes [ ] change: ____ [ ] keep

**49.** lib-2 ¶12. Kind: fragment; unclear reference
- OLD: Pursued that second way, Socrates says, the study is useful for the search after the beautiful and the good. Pursued otherwise, useless.
- NEW: Pursued in that way, Socrates says, the study is useful for the search after the beautiful and the good; pursued otherwise, it is useless.
- Note: "that second way" can be read as the way of the second sort of student, whom Socrates is dismissing. The sense (Republic 531c) is the way that asks which numbers are concordant and why. "In that way" points back to that clause. Please check this reading.
- [ ] yes [x] change: Pursued in the way that asks which numbers are concordant and why, Socrates says, the study is useful for the search after the beautiful and the good; pursued otherwise, it is useless. [ ] keep
- Grok note: CONTENT — Timothy decides. "That second way" can be read as the way of the second sort of student, whom Socrates dismisses (Republic 531c). This names the way meant.

**50.** lib-2 ¶13 **(feba2be paragraph)**. Kind: "you" in a cross-reference
- OLD: [end-2] takes this up when you have the art.
- NEW: [end-2] takes this up once we have the art.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: TIMOTHY'S WORDING? Current wording came from his hand edit in feba2be (Aug 26), so it stays unless he changes it.

**51.** lib-2, remark "What it does not do". Kind: staccato run, aphoristic closer
- OLD: And it will not make you happy. It is one small true thing, thoroughly known. A liberal education is built of such things. It is not built of enthusiasm about them.
- NEW: And it will not make you happy. It is one small true thing, thoroughly known, and a liberal education is built of such things, not of enthusiasm about them.
- Note: "you" is kept here to match the earlier sentences of the remark, which the correct option of study lib-2 Q11 quotes.
- [x] yes [ ] change: ____ [ ] keep

### i-2: Where the art sits: a middle science

**52.** i-2 ¶1. Kind: figure ("roads", which the rules name)
- OLD: The seven liberal arts are two roads.
- NEW: The seven liberal arts form two groups.
- Note: study i-2 Q1 quotes this sentence, and its responses say "road" four times (see pattern P5).
- [x] yes [ ] change: ____ [ ] keep
- Grok note: The i-2 lesson does not use the road figure anywhere else, so "groups" is right. Study i-2 Q1 quotes this sentence; entries 152–154 and P5 change together with it.

**53.** i-2 ¶2. Kind: dashes
- OLD: Of a heap of wheat we ask how much — continuous quantity, magnitude. Of the potatoes in a sack we ask how many — discrete quantity, number.
- NEW: Of a heap of wheat we ask how much (continuous quantity, or magnitude). Of the potatoes in a sack we ask how many (discrete quantity, or number).
- [x] yes [ ] change: ____ [ ] keep

**54.** i-2 ¶3. Kind: dash
- OLD: The string that sounds, the path of a planet, the ray of light — these are natural things.
- NEW: The string that sounds, the path of a planet, and the ray of light are natural things.
- [x] yes [ ] change: ____ [ ] keep

**55.** i-2 ¶4. Kind: "you", dash
- OLD: If you do not yet know what a ratio of whole numbers is, you cannot possess this art — any more than you can possess astronomy without the circle.
- NEW: If we do not yet know what a ratio of whole numbers is, we cannot possess this art, any more than we can possess astronomy without the circle.
- Note: study i-2 Q10 quotes this sentence, and arith-1 ¶1 restates it (entry 56).
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Study i-2 Q10 quotes this sentence and arith-1 ¶1 (entry 56) restates it; all change together.

### arith-1: Numbers compared: the kinds of ratio

**56.** arith-1 ¶1. Kind: page-talk, "you", colon reveal
- OLD: The last lesson ended with a warning: if you do not know what a ratio of whole numbers is, you cannot possess this art.
- NEW: The previous lesson ended with the warning that if we do not know what a ratio of whole numbers is, we cannot possess this art.
- [x] yes [ ] change: ____ [ ] keep

**57.** arith-1 ¶1. Kind: setup line
- OLD: Here is what the art means by it.
- NEW: We now consider what the art means by a ratio.
- [x] yes [ ] change: ____ [ ] keep

**58.** arith-1 ¶1. Kind: page-talk
- OLD: This is that first book, in one page.
- NEW: What follows is a short summary of that first book.
- [x] yes [ ] change: ____ [ ] keep

**59.** arith-1 ¶2. Kind: dash
- OLD: Boethius holds that all inequality proceeds from equality, as all number proceeds from unity — which is why the art treats the unison before it treats any interval.
- NEW: Boethius holds that all inequality proceeds from equality, as all number proceeds from unity, and this is why the art treats the unison before it treats any interval.
- [x] yes [ ] change: ____ [ ] keep

**60.** arith-1 ¶3. Kind: page-talk, loose wording
- OLD: Inequality has kinds, and the kinds are what the rest of this course means when it says a word like first.
- NEW: Inequality has kinds, and these kinds are what we mean in the rest of this course when we call a ratio first.
- [x] yes [ ] change: ____ [ ] keep

**61.** arith-1 ¶5. Kind: aphorism, staccato
- OLD: The Latin is not ornament. Sesqui-alter says “a half again”; sesqui-tertius, “a third again.” The name states the ratio.
- NEW: The Latin names are not ornament, because each name states its ratio: sesqui-alter says “a half again”; sesqui-tertius, “a third again.”
- [x] yes [ ] change: ____ [ ] keep

**62.** arith-1 ¶5. Kind: figure ("in his mouth")
- OLD: A man who has the names has the arithmetic in his mouth, and will not have to stop and think what 4:3 is.
- NEW: A man who knows the names can state the arithmetic in words, and will not have to stop and think what 4:3 is.
- [x] yes [ ] change: ____ [ ] keep

**63.** arith-1 ¶6. Kind: "exactly", setup
- OLD: Now the central claim of the art can be stated exactly, and not merely asserted.
- NEW: We can now state the central claim of the art, and not merely assert it.
- [x] yes [ ] change: ____ [ ] keep

**64.** arith-1 ¶6. Kind: colon reveal, fragment
- OLD: When [iv-1] says that 2:1, 3:2 and 4:3 are the first concords, it says: the first multiple, and the first two superparticulars.
- NEW: When [iv-1] says that 2:1, 3:2 and 4:3 are the first concords, it means that they are the first multiple and the first two superparticulars.
- [x] yes [ ] change: ____ [ ] keep

**65.** arith-1 ¶7. Kind: figure ("seam … will open"), "you"
- OLD: And now you can see the seam in the tradition, which will open later.
- NEW: We can now also see the point at which the tradition will later divide.
- [ ] yes [x] change: We can now also see where the tradition will later divide. [ ] keep

**66.** arith-1 ¶7. Kind: dash
- OLD: The ratio 5:4 is a superparticular, and it stands before 9:8 in the order — it is the third of them, and 9:8 is only the eighth.
- NEW: The ratio 5:4 is a superparticular, and it stands before 9:8 in the order; it is the third of them, and 9:8 is only the eighth.
- [x] yes [ ] change: ____ [ ] keep

**67.** arith-1 ¶7. Kind: figure ("door"), dash
- OLD: The tone 9:8 is admitted not as a concord but as a step, and it enters by a different door — as the leftover when the fifth and the fourth are compared.
- NEW: The tone 9:8 is admitted not as a concord but as a step, and on a different ground, as the leftover when the fifth and the fourth are compared.
- [ ] yes [x] change: The tone 9:8 is admitted not as a concord but as a step, and on a different ground, because it is the leftover when the fifth and the fourth are compared. [ ] keep

**68.** arith-1, remark "Where the bound falls". Kind: dashes
- OLD: In 1558 Zarlino put it at six — the senario — and the thirds and sixths came in with it.
- NEW: In 1558 Zarlino put it at six (the senario), and the thirds and sixths came in with it.
- [x] yes [ ] change: ____ [ ] keep

**69.** same remark. Kind: aphoristic closer
- OLD: That is a development inside the art, argued with the art’s own instruments, and [vii-3] tells the story. It is not the ear overthrowing number.
- NEW: That is a development inside the art, argued with the art’s own instruments, and not a case of the ear overthrowing number; [vii-3] tells the story.
- [x] yes [ ] change: ____ [ ] keep

### i-3: A definition: the science of measuring well

**70.** i-3 ¶1. Kind: dash
- OLD: It means to measure a motion so that it is well measured — in sound, and (in Augustine’s own books) also in the numbering of time, as in the feet of verse.
- NEW: It means to measure a motion so that it is well measured, in sound, and (in Augustine’s own books) also in the numbering of time, as in the feet of verse.
- [ ] yes [x] change: It means to measure a motion so that it is well measured, both in sound and (in Augustine’s own books) in the numbering of time, as in the feet of verse. [ ] keep
- Grok note: NEW's comma chain is hard to follow.

**71.** i-3 ¶2. Kind: setup, figure ("rushed")
- OLD: Two words in the definition must not be rushed.
- NEW: Two words in the definition need careful attention.
- [x] yes [ ] change: ____ [ ] keep

**72.** i-3 ¶4. Kind: figure
- OLD: This course follows the quadrivium’s center of gravity, which is Boethius: the numbering of pitch.
- NEW: This course follows the chief authority of the quadrivium, Boethius, and so it treats the numbering of pitch.
- Note: study i-3 Q8 response B says "center of gravity"; it would follow the lesson (entry 140).
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Entries 140 and 187 change with this one.

**73.** i-3, remark "What we will not do". Kind: casual idiom
- OLD: We will not treat equal temperament (the piano’s slightly fudged fifths) as the nature of the intervals.
- NEW: We will not treat equal temperament (the piano’s slightly narrowed fifths) as the nature of the intervals.
- Note: study i-3 Q11 response D says "Ask what is fudged"; it would follow the lesson.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Entry 192 changes with this one.

---

## 5. Question feedback (`js/study.js`)

The IDs give the lesson set, the question number in file order, and the option letter in file order (A–D). "(correct)" marks the right option. Only the response text (the second string) is touched; option labels stay as they are.

### welcome

**74.** welcome Q1 D. Kind: figure
- OLD: Later chapters walk that road so that the art is not left looking refuted.
- NEW: Later chapters treat that history so that the art does not appear to have been refuted.
- [x] yes [ ] change: ____ [ ] keep

**75.** welcome Q2 A. Kind: imperative
- OLD: The first paragraph names those as things you do not need. Read what it puts in their place.
- NEW: The first paragraph names those as things we do not need, and then says what we do need instead.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: Practical "you" on the welcome page is fine, and the pointer "Read what it puts in their place" is useful; NEW drops the pointer.

**76.** welcome Q2 B. Kind: stiff passive; gives the answer
- OLD: No such provision is made. The page asks for a quiet room and a way to hear two sounds.
- NEW: The course makes no such provision, and the first paragraph says what it does ask for.
- Note: the old second sentence names the correct option, which the rule at the top of study.js forbids. The NEW points to the paragraph instead.
- [ ] yes [x] change: The course makes no such provision. Read the first paragraph again for what it does ask for. [ ] keep
- Grok note: CONTENT — Timothy decides. OLD names the correct option ("a quiet room and a way to hear two sounds"), which the study.js rule forbids.

**77.** welcome Q2 D. Kind: figure
- OLD: Boethius is the spine of the course, but the opening page does not make a library the first requirement.
- NEW: Boethius is the main authority of the course, but the opening page does not make a library the first requirement.
- [x] yes [ ] change: ____ [ ] keep

**78.** welcome Q3 A (correct). Kind: aphorism
- OLD: The String at the top is a free monochord for the same reason. Exactness here is the ratio, not the keyboard.
- NEW: For the same reason, the String button at the top is a free monochord, since the exactness meant here is that of the ratio, not of the keyboard.
- [ ] yes [x] change: The String button at the top is a free monochord for the same reason, because the exactness that matters here is that of the ratio, not of the keyboard. [ ] keep

**79.** welcome Q3 D. Kind: unclear word
- OLD: Later chapters treat temperament as a trade, not as a refutation.
- NEW: Later chapters treat temperament as a trade-off, not as a refutation.
- [x] yes [ ] change: ____ [ ] keep

**80.** welcome Q4 A. Kind: quip
- OLD: It is a free monochord you can return to whenever a lesson names a ratio you cannot yet hear. Nothing is being played back from a museum.
- NEW: It is a free monochord, to which we can return whenever a lesson names a ratio we cannot yet hear; it does not play back a recording.
- [ ] yes [x] change: It is a free monochord that we can return to whenever a lesson names a ratio we cannot yet hear. It does not play back a recording. [ ] keep

**81.** welcome Q4 D (correct). Kind: fragment, aphorism
- OLD: The second practical note of the opening page. The art is in the comparison, with the ear and with the number.
- NEW: The opening page describes it in its second practical note. The art lies in the comparison, made by the ear and by number.
- [ ] yes [x] change: This is the second practical note of the opening page. The art lies in the comparison, made both by the ear and by number. [ ] keep

**82.** welcome Q5 B (correct). Kind: spelling, fragment-like
- OLD: That is the list under ‘What you will possess.’ It is the art, not the neighbouring studies.
- NEW: That is the list under ‘What you will possess.’ It names the art, not the neighboring studies.
- [x] yes [ ] change: ____ [ ] keep

**83.** welcome Q6 A. Kind: page-talk, figure
- OLD: The second sentence of the box is a limit, not a boast. Look at where it says the demonstration lives.
- NEW: The second sentence of the remark states a limit, not a boast, and it says where the full demonstration is to be found.
- [ ] yes [x] change: The second sentence of the remark states a limit, not a boast. Look at where it says the full demonstration is found. [ ] keep
- Grok note: NEW drops the pointer and nearly states the answer.

**84.** welcome Q6 B. Kind: page-talk, fragment-like
- OLD: The box says the doctrine is shown faithfully enough to be believed and returned to. Omission is not the claim.
- NEW: The remark says the doctrine is shown faithfully enough to be believed and returned to, so it does not claim that the doctrine is omitted.
- [x] yes [ ] change: ____ [ ] keep

**85.** welcome Q6 C (correct). Kind: fragments
- OLD: Skill here; doctrine as far as a first-principles course can show it; the books for the rest.
- NEW: The course teaches the skill, shows the doctrine as far as a first-principles course can, and leaves the rest to the books.
- [x] yes [ ] change: ____ [ ] keep

**86.** welcome Q6 D. Kind: page-talk
- OLD: The box is about the limit of a page, not about the standing of the teaching.
- NEW: The remark concerns how much a course of this kind can show, not the standing of the teaching.
- [x] yes [ ] change: ____ [ ] keep

**87.** welcome Q7 A (correct). Kind: fragment-like
- OLD: The pictures are not decoration. They are the little bridge on the string, then the reason the sound is as it is.
- NEW: The pictures are not decoration; they show the little bridge on the string, and then the reason the sound is as it is.
- [x] yes [ ] change: ____ [ ] keep

**88.** welcome Q7 B. Kind: spelling, dash; accuracy
- OLD: No table is offered on this page, and later the palaestra is built so that a page cannot be memorised — only the skill.
- NEW: No table is offered on this page, and later the palaestra is built so that a block cannot be memorized; only the skill can be learned.
- Note: "page" becomes "block" because drills.js says "a block cannot be memorised — only the skill can be". Please confirm.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: Please confirm "block" against drills.js ("a block cannot be memorised").

**89.** welcome Q7 D. Kind: figure ("walked")
- OLD: Nothing on the opening page is gated. The whole course can be walked.
- NEW: Nothing on the opening page is gated, and every part of the course is open.
- [x] yes [ ] change: ____ [ ] keep

**90.** welcome Q9 B (correct). Kind: spelling
- OLD: The rest of the paragraph then names the neighbouring studies it is not.
- NEW: The rest of the paragraph then names the neighboring studies it is not.
- [x] yes [ ] change: ____ [ ] keep

**91.** welcome Q10 C (correct). Kind: fragment
- OLD: Hearing first, then the cause. That is the method of the whole course.
- NEW: We hear first, and then learn the cause; that is the method of the whole course.
- [x] yes [ ] change: ____ [ ] keep

**92.** welcome Q10 D. Kind: figures
- OLD: The contemplative pages later refuse that climb. The opening page has not yet left the string.
- NEW: The contemplative pages later decline to pass from the string to the spheres, and the opening page speaks only of the string.
- [ ] yes [x] change: The contemplative pages later decline that ascent, and the opening page speaks only of the string. [ ] keep
- Grok note: NEW adds "to the spheres", a claim not in OLD.

### i-1

**93.** i-1 Q2 D (correct). Kind: fragment, dash
- OLD: Two marks, and both real — which is why the lesson must still add that nearness is not identity.
- NEW: Both marks are real, and that is why the lesson must still add that nearness is not identity.
- [x] yes [ ] change: ____ [ ] keep

**94.** i-1 Q3 B (correct). Kind: fragment
- OLD: Which is why parents and lawgivers watch what is sung.
- NEW: That is why parents and lawgivers watch what is sung.
- [x] yes [ ] change: ____ [ ] keep

**95.** i-1 Q3 D. Kind: figure
- OLD: The lesson does not leave it homeless.
- NEW: The lesson does give it a place.
- [x] yes [ ] change: ____ [ ] keep

**96.** i-1 Q4 (question). Kind: dash
- OLD: Parents who watch what is sung in the house, and lawgivers who watch what is sung in the city — what does the lesson say of them?
- NEW: What does the lesson say of parents who watch what is sung in the house, and of lawgivers who watch what is sung in the city?
- [x] yes [ ] change: ____ [ ] keep

**97.** i-1 Q4 C (correct). Kind: colon, fragment
- OLD: The lesson is blunt about it: real work, and moral work, but training.
- NEW: The lesson says plainly that this is real work, and moral work, but that it is training.
- [x] yes [ ] change: ____ [ ] keep

**98.** i-1 Q5 A. Kind: "exactly"
- OLD: The lesson denies exactly this, and in those words.
- NEW: The lesson denies this in those very words.
- [x] yes [ ] change: ____ [ ] keep

**99.** i-1 Q5 C. Kind: quip hint
- OLD: That would be a work of the second study, if of any. You have answered for the wrong one of the three.
- NEW: That would be a work of the second study, if of any, and the question asks about the third.
- [x] yes [ ] change: ____ [ ] keep

**100.** i-1 Q5 D (correct). Kind: fragment, spelling
- OLD: Not a song but a scale. And it is considered as a nature, for the sake of the truth about numbered sound, which is what keeps the study from being either a concert or a civic programme.
- NEW: The work is not a song but a scale, and it is considered as a nature, for the sake of the truth about numbered sound; that is what keeps the study from being either a concert or a civic program.
- [x] yes [ ] change: ____ [ ] keep

**101.** i-1 Q6 B. Kind: missing link
- OLD: It matters, and it is not this science.
- NEW: It matters, but it is not this science.
- [x] yes [ ] change: ____ [ ] keep

**102.** i-1 Q6 D. Kind: figure
- OLD: Those names come later, and they are one of the places the tradition itself became tangled.
- NEW: Those names come later, and they are one of the places where the tradition itself became confused.
- [x] yes [ ] change: ____ [ ] keep

**103.** i-1 Q7 B (correct). Kind: imperative
- OLD: Watch for that silent substitution; it prevents a great deal of confusion later.
- NEW: Keeping that substitution in mind prevents a great deal of confusion later.
- [ ] yes [x] change: If we watch for that silent substitution, we avoid a great deal of confusion later. [ ] keep
- Grok note: NEW's gerund subject is stiff.

**104.** i-1 Q7 C. Kind: figure, colon
- OLD: The lesson sets that phrase on the far side of the distinction: the gift of the Muses is song, and this science is not song but what makes song possible.
- NEW: The lesson places that phrase on the other side of the distinction, because the gift of the Muses is song, and this science is not song but what makes song possible.
- [x] yes [ ] change: ____ [ ] keep

**105.** i-1 Q7 D. Kind: aphorism
- OLD: That is the name of the group of four sciences, not of one of them. A member is not its class.
- NEW: That is the name of the group of four sciences, not the name of any one of them.
- [x] yes [ ] change: ____ [ ] keep

**106.** i-1 Q8 C (correct). Kind: flourish, spelling
- OLD: Keeping the two apart is the whole labour of this first lesson.
- NEW: Keeping the two apart is the main task of this first lesson.
- [x] yes [ ] change: ____ [ ] keep

**107.** i-1 Q9 B (correct). Kind: casual idiom, "you"
- OLD: It is the move by which any science takes its subject: you ask what the thing is, and leave off asking what it is good for.
- NEW: Any science takes its subject in this way: it asks what the thing is, and leaves off asking what it is good for.
- [x] yes [ ] change: ____ [ ] keep

**108.** i-1 Q10 B. Kind: fragment
- OLD: Harsher than the lesson.
- NEW: That is harsher than the lesson.
- [x] yes [ ] change: ____ [ ] keep

**109.** i-1 Q10 C (correct). Kind: dramatic setup (your example), "you"
- OLD: The whole force of the lesson lies in that ‘and’. A study can be genuine, worth pursuing, and still be a different study from the one you have sat down to learn.
- NEW: The lesson grants that the other two studies are real, and denies only that they are first and that they are what the quadrivium names musica. A study can be genuine and worth pursuing, and still be a different study from the one we are learning.
- [ ] yes [x] change: The force of the lesson lies in that ‘and’, because the other two studies are real but are not first. A study can be genuine and worth pursuing, and still be a different study from the one we are learning. [ ] keep
- Grok note: NEW is long and restates the whole lesson.

**110.** i-1 Q10 D. Kind: aphoristic close
- OLD: Three ends were named, and they were not one end.
- NEW: The lesson named three ends, and they are not one end.
- [x] yes [ ] change: ____ [ ] keep

**111.** i-1 Q11 A. Kind: dash
- OLD: The lesson makes no such psychological argument, and it does not disparage delight — it calls delight good when measured by truth.
- NEW: The lesson makes no such psychological argument, and it does not disparage delight; it calls delight good when measured by truth.
- [x] yes [ ] change: ____ [ ] keep

**112.** i-1 Q11 C. Kind: dash
- OLD: The lesson grants fine art to leisure — that is the very reason it stands nearer the liberal arts than shoemaking does.
- NEW: The lesson grants fine art to leisure, and that is the very reason it stands nearer the liberal arts than shoemaking does.
- [x] yes [ ] change: ____ [ ] keep

**113.** i-1 Q11 D (correct). Kind: fragment, imperative, figure
- OLD: Good when measured by truth, and still not the same thing. Keep this distinction; it is what decides which of the three studies you are standing in at any moment.
- NEW: Delight is good when measured by truth, and still it is not the same thing as truth. This distinction decides which of the three studies we are pursuing at any moment.
- [x] yes [ ] change: ____ [ ] keep

### lib-1

**114.** lib-1 Q1 C (correct). Kind: dashes, figure
- OLD: Everything else in the lesson — the work that stays in the maker, the judge who is free — hangs upon that ordering.
- NEW: Everything else in the lesson (the work that stays in the maker, and the judge who is free) depends on that ordering.
- [x] yes [ ] change: ____ [ ] keep

**115.** lib-1 Q2 B (correct). Kind: colon reveal
- OLD: And the setting matters: the division follows immediately upon the sentence about the man who is his own cause.
- NEW: The setting matters, because the division follows immediately upon the sentence about the man who is his own cause.
- [x] yes [ ] change: ____ [ ] keep

**116.** lib-1 Q3 A (correct). Kind: figure ("hinge", which the rules name)
- OLD: The likeness between a free man and a free science is the hinge on which the whole doctrine turns.
- NEW: The likeness between a free man and a free science is the principle of the whole doctrine.
- [x] yes [ ] change: ____ [ ] keep

**117.** lib-1 Q3 C. Kind: dash
- OLD: Ask what the analogy actually compares — a science and a man, in respect of what?
- NEW: The analogy compares a science and a man; ask in respect of what.
- [ ] yes [x] change: Ask what the analogy compares: a science and a man, but in respect of what? [ ] keep
- Grok note: NEW gives the hint away in a flatter order; this keeps the pointer and drops the dash.

**118.** lib-1 Q3 D. Kind: fragment
- OLD: An effect; and the lesson does treat an effect, but under a different heading and with a different author.
- NEW: That is an effect, and the lesson does treat an effect, but under a different heading and with a different author.
- [x] yes [ ] change: ____ [ ] keep

**119.** lib-1 Q4 B. Kind: fragment
- OLD: A tidy scheme, and not his.
- NEW: The scheme is tidy, but it is not his.
- [x] yes [ ] change: ____ [ ] keep

**120.** lib-1 Q4 D (correct). Kind: fragment, quip
- OLD: Six works, and no matter touched.
- NEW: None of the six works passes into outward matter.
- [x] yes [ ] change: ____ [ ] keep

**121.** lib-1 Q5 B (correct). Kind: dash
- OLD: So a melody formed by reason is an ordered set of pitches known in their proportions — the scale.
- NEW: So a melody formed by reason is an ordered set of pitches known in their proportions, that is, the scale.
- [x] yes [ ] change: ____ [ ] keep

**122.** lib-1 Q6 A (correct). Kind: fragment, "you"
- OLD: Which is why such a possession cannot be inspected, lent, or sold. When you know why the diapason is 2:1, the work you have made is a state of your own reason.
- NEW: That is why such a possession cannot be inspected, lent, or sold. When we know why the diapason is 2:1, the work we have made is a state of our own reason.
- [x] yes [ ] change: ____ [ ] keep

**123.** lib-1 Q6 B. Kind: dash
- OLD: And the Politics passage it quotes says the free man should learn useful things — only not all of them, and not as an artisan does.
- NEW: And the Politics passage it quotes says the free man should learn useful things, though not all of them, and not as an artisan does.
- [x] yes [ ] change: ____ [ ] keep

**124.** lib-1 Q8 A. Kind: "exactly", dash
- OLD: His first clause says exactly that, and the lesson takes him for the clause that follows — the one that corrects the first.
- NEW: His first clause says that, but the lesson quotes him for the clause that follows, which corrects the first.
- [x] yes [ ] change: ____ [ ] keep

**125.** lib-1 Q9 A. Kind: figure (riddle)
- OLD: The lesson locates the difference somewhere a bystander’s use cannot reach.
- NEW: The lesson places the difference in something that another person’s use of the art cannot change.
- [ ] yes [x] change: The lesson places the difference in the art itself, where another person’s use of it cannot reach. [ ] keep
- Grok note: NEW is vaguer than needed; this stays a hint without naming the answer.

**126.** lib-1 Q9 C (correct). Kind: dash
- OLD: Hence medicine, a noble art, is not liberal — because it is ordered to health.
- NEW: Hence medicine, a noble art, is not liberal, because it is ordered to health.
- [x] yes [ ] change: ____ [ ] keep

**127.** lib-1 Q10 B. Kind: figures
- OLD: The lesson does not take that escape, and the course would collapse without hearing. It grants the listening, and then shows why granting it costs nothing.
- NEW: The lesson does not deny it, and the course could not proceed without hearing. It grants that we must listen, and then shows that granting this does not make the art servile.
- [ ] yes [x] change: The lesson does not deny that we must listen, and the course could not proceed without hearing. It grants the listening, and then shows that granting it does not make the art servile. [ ] keep

**128.** lib-1 Q10 D. Kind: dash
- OLD: It asks what office the sense holds in the science — and holding an office is not the same as being the work.
- NEW: It asks what office the sense holds in the science, and holding an office is not the same as being the work.
- [x] yes [ ] change: ____ [ ] keep

**129.** lib-1 Q11 B. Kind: dash
- OLD: The mechanical arts plainly have works — that is their whole character.
- NEW: The mechanical arts plainly have works; that is their whole character.
- [x] yes [ ] change: ____ [ ] keep

### lib-2

**130.** lib-2 Q1 (question). Kind: question not in plain words
- OLD: The first of the four things is called the great one. Why need you not take its central claim on the word of a wise man?
- NEW: The first of the four things is called the great one. Why do we not need to take its central claim on the word of a wise man?
- Note: if entry 35 is accepted, the first sentence becomes "The first of the four things is called the most important."
- [x] yes [ ] change: ____ [ ] keep

**131.** lib-2 Q1 B (correct). Kind: figure, "you"
- OLD: The delight is tracking something the mind can state, and you have seen it track. That is why the art is worth more than its size: one string, three ratios, and a verified instance.
- NEW: The delight varies with something the mind can state, and we have heard it vary. That is why the art matters more than its small extent would suggest: it is one string and three ratios, but it is a verified instance.
- [ ] yes [x] change: The delight varies with something the mind can state, and we have heard it vary. That is why the art matters more than its size would suggest: it is one string and three ratios, but it is a verified instance. [ ] keep
- Grok note: Follows entries 36 and 38.

**132.** lib-2 Q1 C. Kind: dash, "you"
- OLD: It says that here you have something better than authority ready to hand — a remark about your situation, not about his.
- NEW: It says that here we have something better than authority at hand; that is a remark about our situation, not about his.
- [x] yes [ ] change: ____ [ ] keep

**133.** lib-2 Q1 D. Kind: "precisely"
- OLD: That is precisely why it is worth checking rather than assuming.
- NEW: That is why it is worth checking rather than assuming.
- [x] yes [ ] change: ____ [ ] keep

**134.** lib-2 Q2 D (correct). Kind: fragment, dash
- OLD: One reality, two accounts of it — which is why a demonstration about proportion touches both at once.
- NEW: They are one reality with two accounts of it, and that is why a demonstration about proportion bears on both at once.
- [x] yes [ ] change: ____ [ ] keep

**135.** lib-2 Q3 C (correct). Kind: "doing the work", colon reveal, "you"
- OLD: That is the premise doing the work: were sense not a kind of reason, its pleasures could tell you nothing whatever about the intelligible.
- NEW: The argument rests on that premise, because if sense were not a kind of reason, its pleasures could tell us nothing whatever about the intelligible.
- [x] yes [ ] change: ____ [ ] keep

**136.** lib-2 Q3 D. Kind: fragment
- OLD: A physiological guess, and not the reason given.
- NEW: That is a physiological guess, not the reason given.
- [x] yes [ ] change: ____ [ ] keep

**137.** lib-2 Q4 (question). Kind: "exactly"
- OLD: What exactly is overturned by measuring the ratios honestly on a string in a quiet room?
- NEW: What is overturned by measuring the ratios honestly on a string in a quiet room?
- [x] yes [ ] change: ____ [ ] keep

**138.** lib-2 Q4 A (correct). Kind: fragment, dash, punchline
- OLD: Not argued against — refuted, in your own hearing, by you.
- NEW: The conviction is not merely argued against; it is refuted, in our own hearing and by us.
- [x] yes [ ] change: ____ [ ] keep

**139.** lib-2 Q4 C. Kind: "simply"
- OLD: The lesson holds that music as a fine art is a real study; it simply is not this one.
- NEW: The lesson holds that music as a fine art is a real study, but it is not this one.
- [x] yes [ ] change: ____ [ ] keep

**140.** i-3 Q8 B, listed here with entry 72. Kind: figure (follows the lesson)
- OLD: Ask which author is named as the quadrivium’s center of gravity.
- NEW: Ask which author is named as the chief authority of the quadrivium.
- [x] yes [ ] change: ____ [ ] keep

**141.** lib-2 Q5 A. Kind: dash
- OLD: That subordinates one criterion to the other, and the rule forbids just such subordination — in either direction.
- NEW: That subordinates one criterion to the other, and the rule forbids just such subordination, in either direction.
- [x] yes [ ] change: ____ [ ] keep

**142.** lib-2 Q5 B (correct). Kind: fragment, figure
- OLD: Set beside St. Thomas: all our knowledge begins in the senses and is completed in the intellect. The Pythagorean who will not listen and the empiric who will not demonstrate are both crippled.
- NEW: The lesson sets it beside the principle that all our knowledge begins in the senses and is completed in the intellect. The Pythagorean who will not listen and the empiric who will not demonstrate both fall short.
- Note: "both fall short" follows entry 40; if you keep "crippled" in the lesson, keep it here too.
- [x] yes [ ] change: ____ [ ] keep

**143.** lib-2 Q5 C. Kind: fragment
- OLD: A hierarchy, and the rule as given is not a hierarchy.
- NEW: That is a hierarchy, and the rule as given is not one.
- [x] yes [ ] change: ____ [ ] keep

**144.** lib-2 Q5 D. Kind: fragment
- OLD: Nothing so despairing. The rule is a discipline for using two criteria together, not a counsel for giving up whenever they disagree.
- NEW: The rule is not so despairing; it is a discipline for using two criteria together, not a counsel for giving up whenever they disagree.
- [x] yes [ ] change: ____ [ ] keep

**145.** lib-2 Q6 D (correct). Kind: fragment, "you"
- OLD: The judge’s work. In this art the difference is unusually sharp, because the art is small enough to be possessed entire: either 3:2 is in your ear and your reason, or it is not.
- NEW: That is the work of the judge. In this art the difference is unusually sharp, because the art is small enough to be possessed entire: either 3:2 is in our ear and in our reason, or it is not.
- [x] yes [ ] change: ____ [ ] keep

**146.** lib-2 Q7 B (correct). Kind: aphoristic closer
- OLD: A road exists for the sake of somewhere else.
- NEW: The image of a road means that these sciences lead to something beyond themselves.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: Hugh's road figure is the lesson's own (see 47).

**147.** lib-2 Q8 C (correct). Kind: dash, "you"
- OLD: And these are the Pythagoreans, the school this art descends from — which is why the warning is aimed at you.
- NEW: And these are the Pythagoreans, the school from which this art descends, and that is why the warning applies to anyone taking this course.
- [ ] yes [x] change: And these are the Pythagoreans, the school from which this art descends, and that is why the warning applies to us. [ ] keep

**148.** lib-2 Q9 A (correct). Kind: fragment, dash
- OLD: Most easily — a convenient starting place for something much larger.
- NEW: He says "most easily," and so sounds are a convenient starting place for something much larger.
- [ ] yes [x] change: He says ‘most easily,’ so sounds are a convenient starting place for something much larger. [ ] keep

**149.** lib-2 Q9 D. Kind: aphorism
- OLD: He says most easily studied, not only found. Overstating a claim is one way of losing it, and the gap between ‘easiest’ and ‘only’ matters a great deal here.
- NEW: He says that number in motion is most easily studied in sounds, not that it is found only there, and the difference between ‘easiest’ and ‘only’ matters a great deal here.
- [x] yes [ ] change: ____ [ ] keep

**150.** lib-2 Q11 B. Kind: "exactly", dash, quip hint
- OLD: Judging is exactly what it claims to do — the third of the four things. You have taken one of the promises for one of the denials.
- NEW: Judging is what it claims to do; it is the third of the four things. That answer takes one of the promises for one of the denials.
- [ ] yes [x] change: Judging is what the art claims to do; it is the third of the four things. This answer takes one of the promises for one of the denials. [ ] keep

**151.** lib-2 Q11 D. Kind: aphorism
- OLD: The fourth thing is that the art is a road, and roads lead somewhere.
- NEW: The fourth thing is that the art leads the mind upward to the rest of philosophy.
- Note: this follows the heading in entry 47.
- [ ] yes [ ] change: ____ [x] keep
- Grok note: Hugh's road figure is the lesson's own (see 47).

### i-2

**152.** i-2 Q1 (question). Kind: figure ("roads"), follows entry 52
- OLD: The seven liberal arts are two roads. What divides them?
- NEW: The seven liberal arts form two groups. What divides them?
- [x] yes [ ] change: ____ [ ] keep

**153.** i-2 Q1 A. Kind: spelling, dash, "roads"
- OLD: That is a judgement about difficulty, which is a fact about students rather than about subjects. Ask instead what each of the two roads is about — what kind of thing it takes for its matter.
- NEW: That is a judgment about difficulty, which is a fact about students rather than about subjects. Ask instead what each of the two groups is about, that is, what kind of thing it takes for its matter.
- [x] yes [ ] change: ____ [ ] keep

**154.** i-2 Q1 B (correct). Kind: colon reveal, "road"
- OLD: And that is why arithmetic is prior to music in a way grammar is not: the second road is one subject matter divided, not a list of accomplishments.
- NEW: That is why arithmetic is prior to music in a way that grammar is not, because the quadrivium is one subject matter divided, not a list of accomplishments.
- [x] yes [ ] change: ____ [ ] keep

**155.** i-2 Q1 C. Kind: fragment
- OLD: Near enough to sound right, and far too wide: every science concerns things of some sort.
- NEW: That sounds nearly right, but it is far too wide, because every science concerns things of some sort.
- [x] yes [ ] change: ____ [ ] keep

**156.** i-2 Q2 A. Kind: quip hint (your example)
- OLD: You have both sciences and have crossed them.
- NEW: Both sciences are named, but each is given the other’s question.
- [x] yes [ ] change: ____ [ ] keep

**157.** i-2 Q2 C (correct). Kind: "Notice that", figure
- OLD: Notice that the whole quadrivium is built on this one cut.
- NEW: The whole quadrivium is built on this one division.
- [x] yes [ ] change: ____ [ ] keep

**158.** i-2 Q3 D (correct). Kind: fragment, dash, "exactly"
- OLD: Which is also why they do not yet touch the world we hear and see — and that lack is exactly what the other two are added to repair.
- NEW: That is also why they do not yet touch the world we hear and see, and the other two are added to supply that lack.
- [x] yes [ ] change: ____ [ ] keep

**159.** i-2 Q6 B (correct). Kind: fragment
- OLD: Which is why it is the fullest of the three.
- NEW: That is why it is the fullest of the three.
- [x] yes [ ] change: ____ [ ] keep

**160.** i-2 Q7 D (correct). Kind: "Hold" (named in the pack)
- OLD: Hold both halves; dropping either one turns the art into something else.
- NEW: Both halves are needed, because without either one the art becomes something else.
- [ ] yes [x] change: We need both halves, because without either one the art becomes something else. [ ] keep

**161.** i-2 Q8 C (correct). Kind: spelling, "exact", colon reveal
- OLD: A path is travelled and left behind. That is the exact status this course claims for itself: an ordering of the mind toward wisdom, not the terminus.
- NEW: A path is traveled and then left behind, and that is the status this course claims for itself: it orders the mind toward wisdom, and it is not the end of the way.
- [ ] yes [x] change: A path is traveled and then left behind. This course claims the same status for itself, because it orders the mind toward wisdom and is not the end of the way. [ ] keep

**162.** i-2 Q8 D. Kind: spelling
- OLD: That is a Platonising claim the lesson does not make, …
- NEW: That is a Platonizing claim the lesson does not make, …
- [x] yes [ ] change: ____ [ ] keep

**163.** i-2 Q9 A (correct). Kind: fragment, imperative-style aphorism
- OLD: Which is why the next lesson is about ratio and not about melody. Take away the arithmetic and nothing is demonstrated; take away the sound and nothing is demonstrated of.
- NEW: That is why the next lesson is about ratio and not about melody. Without the arithmetic nothing is demonstrated, and without the sound there is nothing for the demonstration to be about.
- [x] yes [ ] change: ____ [ ] keep

**164.** i-2 Q9 C. Kind: fragment
- OLD: The right shape of answer with the wrong mathematics in it.
- NEW: The answer has the right form but the wrong mathematics.
- [x] yes [ ] change: ____ [ ] keep

**165.** i-2 Q10 A. Kind: idiom
- OLD: Look at the sentence that names two members of the quadrivium in a single breath.
- NEW: Look at the sentence that names two members of the quadrivium together.
- [x] yes [ ] change: ____ [ ] keep

**166.** i-2 Q11 B. Kind: dash
- OLD: What it declines to do is smaller and more precise than rejection — read its closing sentences.
- NEW: What it declines to do is smaller and more precise than rejection, as its closing sentences show.
- [ ] yes [x] change: What it declines to do is smaller and more precise than rejection. Read its closing sentences. [ ] keep
- Grok note: NEW drops the pointer.

**167.** i-2 Q11 D. Kind: "precisely"
- OLD: Taking a fitting account for a demonstration is precisely the error to watch for here.
- NEW: Taking a fitting account for a demonstration is the error to avoid here.
- [ ] yes [x] change: Taking a fitting account for a demonstration is the error to watch for here. [ ] keep
- Grok note: NEW's "avoid" shifts the sense slightly.

### arith-1

**168.** arith-1 Q1 D (correct). Kind: dash
- OLD: Boethius holds that all inequality proceeds from equality as all number proceeds from unity — which is why the art treats the unison before it treats any interval at all.
- NEW: Boethius holds that all inequality proceeds from equality as all number proceeds from unity, and this is why the art treats the unison before it treats any interval at all.
- [x] yes [ ] change: ____ [ ] keep

**169.** arith-1 Q2 A (correct). Kind: fragment, "Note that", "exactly"
- OLD: The simplest inequality there is, since the division comes out even. Note that “the first concords” means, exactly, the first multiple and the first two superparticulars.
- NEW: It is the simplest inequality, since the division comes out even. “The first concords” means the first multiple and the first two superparticulars.
- [x] yes [ ] change: ____ [ ] keep

**170.** arith-1 Q2 D. Kind: dash
- OLD: That is one of the two compound kinds, and its name begins with the word you were asked about — a hint about how the compounds are built, not a definition of the simple kind.
- NEW: That is one of the two compound kinds, and its name begins with the word in the question, which shows how the compounds are built but does not define the simple kind.
- [x] yes [ ] change: ____ [ ] keep

**171.** arith-1 Q3 (question). Kind: "exactly"
- OLD: What exactly does superparticularis require?
- NEW: What does superparticularis require?
- [x] yes [ ] change: ____ [ ] keep

**172.** arith-1 Q3 B. Kind: fragment
- OLD: One word too many.
- NEW: The definition has one word too many.
- [x] yes [ ] change: ____ [ ] keep

**173.** arith-1 Q3 D. Kind: dash
- OLD: It does not put a ratio in one class or another — 9:8 is proof enough of that.
- NEW: It does not put a ratio in one class or another, as 9:8 shows.
- [x] yes [ ] change: ____ [ ] keep

**174.** arith-1 Q5 C (correct). Kind: fragment, figure ("seam")
- OLD: Which is what makes the seam in the tradition visible: 5:4 stands early in the order and is refused all the same, so the refusal cannot rest on the kind of ratio.
- NEW: That shows where the tradition will later divide, because 5:4 stands early in the order and is refused all the same, so the refusal cannot rest on the kind of ratio.
- [x] yes [ ] change: ____ [ ] keep

**175.** arith-1 Q7 D (correct). Kind: aphorism, colon reveal, "you"
- OLD: The Latin is not ornament: the name is the arithmetic said aloud. Once you read names this way, a ratio you have never met can be classed on sight.
- NEW: The Latin name states the arithmetic in words, so once we read names this way, we can class a ratio we have never met as soon as we see it.
- [x] yes [ ] change: ____ [ ] keep

**176.** arith-1 Q8 B (correct). Kind: fragment, "simply"
- OLD: Twice, and one aliquot part besides. The two compound kinds are simply the first three joined, …
- NEW: The greater contains the less twice, and one aliquot part besides. The two compound kinds are the first three joined, …
- [x] yes [ ] change: ____ [ ] keep

**177.** arith-1 Q9 B. Kind: quip, "simply", "exactly"
- OLD: “Near enough” has no standing in this art. Three goes into 8 twice with something left, and a name saying three times is simply false of it. Do the division exactly.
- NEW: An approximate name has no standing in this art. Three goes into 8 twice with something left, so a name saying three times is false of it.
- [ ] yes [x] change: An approximate name has no standing in this art. Three goes into 8 twice with something left, so a name saying three times is false of it. Do the division exactly. [ ] keep
- Grok note: Keep the pointer; "exactly" here is literal, not padding.

**178.** arith-1 Q9 C (correct). Kind: fragment, "Notice that"
- OLD: Twice, and two thirds over. Notice that the compound names are longer for the same reason the divisions are: nothing in them is decoration.
- NEW: The greater contains the less twice, with two thirds over. The compound names are longer because the divisions are longer, and nothing in them is decoration.
- [x] yes [ ] change: ____ [ ] keep

**179.** arith-1 Q9 D. Kind: "exactly"
- OLD: The leftover is exactly right and the whole times have been dropped.
- NEW: The leftover is right, but the whole times have been dropped.
- [x] yes [ ] change: ____ [ ] keep

**180.** arith-1 Q10 B (correct). Kind: fragment, "you", colon reveal
- OLD: Which is why you may read a whole treatise without meeting one. It also means the order of terms is never idle: 3:2 and 2:3 are two comparisons, not one.
- NEW: That is why we may read a whole treatise without meeting one. It also means that the order of terms always matters, because 3:2 and 2:3 are two comparisons, not one.
- [x] yes [ ] change: ____ [ ] keep

**181.** arith-1 Q11 D (correct). Kind: dash
- OLD: In 1558 Zarlino proposed the senario, and the thirds and sixths came in with it — a development inside the art, argued with the art’s own instruments.
- NEW: In 1558 Zarlino proposed the senario, and the thirds and sixths came in with it; that was a development inside the art, argued with the art’s own instruments.
- [x] yes [ ] change: ____ [ ] keep

### i-3

**182.** i-3 Q1 C (correct). Kind: figure ("rushed past")
- OLD: Both nouns in it are contested, and the lesson spends its length keeping each from being rushed past.
- NEW: Both nouns in it are contested, and the lesson takes care to explain each of them.
- [x] yes [ ] change: ____ [ ] keep

**183.** i-3 Q3 B. Kind: "exactly"
- OLD: Re-read the sentence and notice exactly which words are denied him.
- NEW: Re-read the sentence and see which words are denied him.
- [x] yes [ ] change: ____ [ ] keep

**184.** i-3 Q5 C (correct). Kind: fragment, imperative
- OLD: A product of reason, not of the throat or the fingers. Keep it in view when a later chapter builds a scale: the building is the art’s own work, not a preparation for something else.
- NEW: The known scale is a product of reason, not of the throat or the fingers. So when a later chapter builds a scale, the building is the art’s own work, not a preparation for something else.
- [x] yes [ ] change: ____ [ ] keep

**185.** i-3 Q6 A (correct). Kind: fragment, dash, "note that", quip
- OLD: An act of the intellect, not a skill of the hand — and note that this is a definition of a man, not of a repertoire. The course will hold you to it.
- NEW: Judging is an act of the intellect, not a skill of the hand, and this is a definition of a man, not of a repertoire. The rest of the course keeps to this definition.
- [x] yes [ ] change: ____ [ ] keep

**186.** i-3 Q8 C. Kind: aphoristic closer
- OLD: Two things really measured are not a figure for one another.
- NEW: Since time and pitch are both really measured, neither is a figure for the other.
- [x] yes [ ] change: ____ [ ] keep

**187.** i-3 Q8 D (correct). Kind: dash
- OLD: The course follows the quadrivium’s center of gravity, which is Boethius, and numbers pitch — while refusing to pretend Augustine wrote a book about the monochord.
- NEW: The course follows the chief authority of the quadrivium, Boethius, and numbers pitch, while refusing to pretend that Augustine wrote a book about the monochord.
- Note: "center of gravity" changes with entry 72.
- [x] yes [ ] change: ____ [ ] keep

**188.** i-3 Q9 B (correct). Kind: dash
- OLD: The art really measures — which is why a string and a ruler are proper to it, and why the definition can be tested rather than merely admired.
- NEW: The art really measures, and that is why a string and a ruler are proper to it, and why the definition can be tested rather than merely admired.
- [x] yes [ ] change: ____ [ ] keep

**189.** i-3 Q10 A. Kind: "leans on" (named in the rules)
- OLD: The course leans on the string rather than avoiding it.
- NEW: The course depends on the string rather than avoiding it.
- [x] yes [ ] change: ____ [ ] keep

**190.** i-3 Q10 C (correct). Kind: fragment, "Notice"
- OLD: Later labels for things we must first know in themselves. Notice the pattern: each is a notation or a category that presupposes a system this course has not yet built.
- NEW: They are later labels for things we must first know in themselves, and each is a notation or a category that presupposes a system this course has not yet built.
- [x] yes [ ] change: ____ [ ] keep

**191.** i-3 Q11 A (correct). Kind: imperative, figure ("seam"); content
- OLD: Watch for that policy at every later seam.
- NEW: The same policy holds at every later point of dispute.
- Note: the sentence before it says "the course follows St. Thomas when he has spoken". The lesson's remark does not say that. It says only "Where they dispute, we will say so, and leave the rest open rather than invent a school". This is a matter of content, not style, so it is flagged here and left unchanged.
- [ ] yes [x] change: Where they dispute, the course says so and leaves the rest open rather than inventing a school. The course keeps to that policy at every later point of dispute. [ ] keep
- Grok note: CONTENT — Timothy decides. "Follows St. Thomas when he has spoken" is not in the lesson; the remark (content.js line 190) says only "Where they dispute, we will say so, and leave the rest open rather than invent a school." This replaces the whole response.

**192.** i-3 Q11 D. Kind: casual idiom (follows entry 73)
- OLD: Ask what is fudged, and what is being mistaken for what.
- NEW: Ask what is narrowed, and what is being mistaken for what.
- [x] yes [ ] change: ____ [ ] keep

---

## 6. Pattern entries (one decision each)

**P1. "the box" / "the boxed remark" (35 occurrences in the study sets for this chapter).** Kind: page-talk.
The questions and hints refer to the shaded remarks as "the box" or "the boxed remark". Two options:
- (a) Name the remark by its heading, for example "The remark ‘A name’ separates two things…", "What does the remark ‘What it does not do’ say the art will not do?". This is precise and still tells the student where to look.
- (b) Say "the remark" each time.

Locations: welcome Q5 A, Q6 (q, A, B, D); i-1 Q8 (q, A, B, D); lib-1 Q5 (q, A, C, D), Q11 (q, A, D); lib-2 Q6 A, Q11 (q, C, D); i-2 Q11 (q, A, B); arith-1 Q11 (q, A, B, C); i-3 Q10 (q, A, B, D), Q11 (q, C). Entries 83, 84 and 86 above already apply (b).
- [ ] (a) headings [x] (b) "the remark" [ ] change: ____ [ ] keep
- Grok note: "the remark" names what it is and matches entries 83, 84, 86. Where a question must point to one of two remarks in the same lesson, add its heading (option a) there only.

**P2. Pointer imperatives in hints ("Re-read…", "Read…", "Look again…", "Ask…", "Check…", "Count…", "Do the division", about 90 occurrences).** Kind: "you" commands.
These tell the student where to look, which you asked the hints to do. I recommend keeping them as they are, except where an entry above already changes the sentence for another reason. The alternative is to recast each as a statement ("The answer is in the paragraph on…"), but the pack warns that such recasts often read more stiffly than the original.
- [x] keep as is (recommended) [ ] recast: ____
- Grok note: the pointers tell the student where to look; keep "Re-read…", "Ask…" and the rest.

**P3. Dashes that introduce the English of a Latin quotation (about 10 in the lesson text, for example "Ille homo proprie dicitur liber … — that man is properly called free …").** Kind: dash.
The quotations stay as they are. Only the dash between the Latin and its English is in question. The options are to keep the dash, to use a colon, or to put the English in parentheses.
- [ ] keep [ ] colon [x] parentheses
- Grok note: the Latin and the English stay word for word; only the dash becomes parentheses around the English.

**P4. British spellings inside option labels (KEEP).** These are answer options, so they stay unless you say otherwise: i-1 Q4 A "practise"; lib-1 Q8 C "honourably"; lib-2 Q3 A "recognises"; lib-2 Q9 B "defence". The same spellings in the responses are listed above.
- [ ] keep [x] fix spelling only
- Grok note: these labels are not quotations, so American spelling: practice, honorably, recognizes, defense. Which option is correct does not change.

**P5. "road(s)" for the two groups of arts in the i-2 study set.** Kind: coined term (rule 1). Besides entries 152–154, "road" also appears in i-2 Q1 D ("both roads"), Q4 C ("the other road entirely"), and Q8 D ("the end of the road"). If entry 52 is accepted, I propose "groups" in the first two and keeping the idiom in Q8 D or making it "the end of the way". Hugh of St. Victor's "roads" in lib-2 is a quotation and stays.
- [x] yes [ ] change: ____ [ ] keep
- Grok note: the i-2 lesson does not use the figure beyond the sentence in entry 52, so "groups" in Q1 D and Q4 C, and "the end of the way" in Q8 D. Hugh's "roads" in lib-2 stays, and so do entries 47, 146, 151, which echo it.

---

## 7. Kept on purpose (not listed above)

- Option labels and correct answers, even where they contain a dash or a fragment, such as "From neither — astronomy is a natural science outright" (i-2 Q6 D) and "Parents who watch … — what does the lesson say" (only the question, entry 96, is listed).
- The two objections quoted in lib-1 ("But music is useful — in the liturgy…"; "But it needs the body. You have to listen."). They are spoken by an objector, and study lib-1 Q9 and Q10 quote them word for word.
- The practical "you" on the welcome page ("You need a quiet room…", "return to it whenever you want…", "What you will possess"). They are instructions about using the course, not teaching, and the heading is an interface label.
- "precisely as man" (lib-1, remark "Thomas’s deeper reason"). It is the technical sense (qua man), not an intensifier.
- The italic paraphrase of St. Thomas in lib-2 ¶4 ("beauty consists in due proportion … — because even sense is a certain reason"), which is treated as a quotation.
- The designer credit on the welcome page (your commit a9a86ad).

STOP.
