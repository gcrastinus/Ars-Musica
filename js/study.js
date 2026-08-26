/* Study questions.

   One set per page of study material. These are not exercises: nothing here
   is scored, gated, or randomly generated. They are fixed questions on the
   matter of the page, shuffled — questions and options both — on every visit,
   and taken one at a time.

   A wrong choice is met with the reason that choice fails, stated on its own
   terms and without naming the right one, and the student goes on choosing
   until he finds it. That is the old method of a programmed text, and it is
   used here because being told an answer and finding one are different acts.

   Format:  "<lesson id>": [ { q, a, o: [ [option, response], ... ] }, ... ]
   where `a` is the index, in the ORIGINAL order, of the true option. */

window.MusicaArs = window.MusicaArs || {};
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"iii-2": [
  { q: "The string is stopped at its midpoint. What is the ratio of the whole string to the part left sounding?", a: 0, o: [
    ["2:1", "And because the lengths stand as 2:1, the pitches stand as 2:1 the other way about. Hold both halves of that sentence."],
    ["1:2, since the part is half the whole", "The ratio is the same magnitude either way; what you have chosen is the comparison of the part to the whole, and the question asked for the whole to the part. In this art the order of the terms is not a formality — it is what tells you which sound is which."],
    ["4:3, the first superparticular", "You have named a ratio the art does use, but not the one a halved string gives. Count again: how many of the stopped length go into the open string?"],
    ["It cannot be given as a ratio, since a half is not a whole number", "A ratio compares two quantities; neither of them has to be a whole number of the other for the comparison to be exact. Here one of them is, which is what makes this the simplest case of all."]
  ]},
  { q: "Why does the art call 2:1 the <em>first</em> concord?", a: 2, o: [
    ["Because it is the easiest interval for an untrained voice to sing", "That may well be true, and it is a fact about singers rather than about number. The art’s reason for calling anything first has to be a reason of the same kind as the thing it orders."],
    ["Because it was historically the first to be discovered", "The art is not making a claim about who noticed what, and it could not prove such a claim if it made it. Look for a reason that would hold whether or not anyone had ever discovered it."],
    ["Because it is the first ratio after equality: the first multiple, and the double is the first of the multiples", "Exactly — and notice that this reason is available only to someone who has the kinds of ratio in hand. Without them, ‘first’ is a word rather than an argument."],
    ["Because it is the smallest interval the ear can distinguish", "The diapason is nothing like the smallest interval the ear can distinguish; you have been hearing far finer ones since the second chapter. And smallness is not what ‘first’ means here."]
  ]},
  { q: "What is the Greek name for this interval, and what does it mean?", a: 1, o: [
    ["<span class=\"latin\">Diapente</span>, ‘through five’", "You have taken the name of a different concord, and one that this course has not yet reached at this point. The number in that name is a counting of steps, which is exactly what the present interval is being kept free of."],
    ["<span class=\"latin\">Diapason</span>, ‘through all’", "Through all — that is, through the whole compass of the strings. The name describes the span itself and does not count anything, which is why the course prefers it at this stage."],
    ["<span class=\"latin\">Diatessaron</span>, ‘through four’", "Another concord of this art, but not this one, and again a name built on a count. Ask which name describes the interval without numbering the sounds inside it."],
    ["<span class=\"latin\">Tonos</span>, ‘stretching’", "That word names the step by which a scale is walked, not the span within which it is walked. The interval in question here is the frame, not one of the paces."]
  ]},
  { q: "Why does this course prefer <span class=\"latin\">diapason</span> to the more familiar word <em>octave</em>?", a: 3, o: [
    ["Because <em>octave</em> is a modern coinage, unknown before the eighteenth century", "The Latin name is medieval, not modern, and the course has no objection to old words. The objection is to what this particular word takes for granted."],
    ["Because <em>octave</em> refers to a slightly different interval, tempered rather than pure", "That confusion belongs much later in the story, and it is not the reason given here. At this point in the course, temperament has not entered at all."],
    ["Because the Greek name is more accurate about the ratio involved", "Neither name states a ratio. One of them states a count, and it is the count that is the trouble — not any inaccuracy about number."],
    ["Because <em>octave</em> means ‘the eighth’, and so presupposes a scale of eight steps that has not yet been built", "Just so. The interval is prior to the scale that fills it, and a name that counts the filling puts the cart before the horse. You do not need eight sounds to hear this concord; you need two lengths, one the double of the other."]
  ]},
  { q: "Two sounds are heard together and blend so completely that the higher seems to be the lower, raised. Which interval is described?", a: 2, o: [
    ["The tone, 9:8", "That is the step by which a scale is walked, and it does the opposite of blending: the two sounds stand next to one another and remain plainly two."],
    ["The <span class=\"latin\">diapente</span>, 3:2", "This does blend, and well — but you hear two sounds that belong together, not one sound raised. The description in the question is stronger than that."],
    ["The <span class=\"latin\">diapason</span>, 2:1", "This is why singers who have never heard the word still find it when they try to sing ‘the same tune higher’. The blending is so complete that the two are nearly taken for one."],
    ["The unison", "In a unison there is no higher and no lower — the pitches are equal. The description speaks of one sound seeming to be another <em>raised</em>, which requires that they differ."]
  ]},
  { q: "The lengths of the open and the stopped string stand as 2:1. How do their pitches stand?", a: 1, o: [
    ["Also 2:1, the open string being the higher", "The ratio is right and the assignment is backwards. Ask yourself which of the two sounds you would call higher, and then which of the two lengths produced it."],
    ["2:1 the other way about — the stopped string, being shorter, is the higher", "The pitch ratio is the length ratio inverted. This one sentence is the hinge of the whole art, and everything later in the course rests on your having it without thinking."],
    ["1:1, since it is the same string", "It is the same string, and that is precisely what makes the case instructive: the same string, at a different sounding length, gives a different sound. Sameness of material is not sameness of quantity."],
    ["4:1, since halving the length doubles the pitch twice over", "Halving the length doubles the pitch once. There is no second doubling anywhere in the operation described."]
  ]},
  { q: "Among the kinds of ratio, to which does 2:1 belong?", a: 0, o: [
    ["The multiple — and it is the first of them, the double", "The greater contains the less exactly twice with nothing over. That is what makes it the simplest inequality there is."],
    ["The superparticular", "In a superparticular the greater contains the less <em>once</em>, and one aliquot part of it besides. Check whether anything at all is left over when you fit the smaller term into the larger here."],
    ["The superpartient", "A superpartient leaves more than one like part over. Fit the smaller term into the larger and see how much remains."],
    ["It belongs to no kind, being equality", "Equality is 1:1, in which there is nothing to compare. Two terms that differ are not equal, however simply they differ."]
  ]},
  { q: "Which of these did the course say about the relation between this interval and the scale?", a: 3, o: [
    ["The scale is prior: the interval is defined as the distance from the first step to the eighth", "That is the modern habit of speech the course is warning against, and it inverts the order. Which of the two can be produced without the other already existing?"],
    ["They are equally fundamental and neither can be defined without the other", "A comfortable answer, and it dissolves the distinction the lesson was at pains to draw. The lesson says one of them can stand entirely alone."],
    ["The interval and the scale are the same thing under two names", "If that were so, the warning about the word <em>octave</em> would have no point at all. The lesson took trouble to separate them."],
    ["The interval is prior; the scale is one way of filling it", "And so a name for the interval that counts the filling is a name borrowed from something later. You can hear 2:1 with two sounds and no scale whatever."]
  ]},
  { q: "The course says the other first concords are found ‘nearby’. Where, exactly?", a: 2, o: [
    ["In the next multiples — 3:1 and 4:1", "Those are indeed the next multiples, and the art does recognise them as concords compounded from the first. But they are not where the course said to look for the two that come <em>next</em>."],
    ["In the superpartient ratios, 5:3 and 7:4", "The art allows no concord in that class at all. You are looking one class too far along."],
    ["In the first superparticular ratios — 3:2 and 4:3", "The sesquialter and the sesquitertian. The three first concords are therefore the first multiple and the first two superparticulars, which is a claim of arithmetical order and not of taste."],
    ["In the ratios formed from the numbers 5 and 6", "That is where a later century would look, and the course tells that story in its own place. It is not where the Pythagorean art looks, because its bound stands lower."]
  ]},
  { q: "A student says: ‘I can hear the diapason, so I have understood it.’ How would this course answer?", a: 1, o: [
    ["Rightly — the ear is the judge in this art, and hearing is understanding", "The ear gives the art its subject and is never dismissed here. But the course has been careful to say that possessing the subject is not the same act as knowing the cause."],
    ["Hearing it is where the art begins and not where it ends; he has the thing, and the art also wants the reason for it", "The nightingale hears too. What the science adds is the ratio, and the demonstration that this ratio is first."],
    ["Wrongly — the ear is unreliable and the interval must be taken on the authority of Boethius", "The course never says that, and it would contradict its own first principles about where knowledge begins. Nothing in it asks you to distrust what you have heard."],
    ["Wrongly — until he can sing it he has not understood it", "Singing is a skill of the throat, and the course is explicit that such a skill is not what makes a man a <span class=\"latin\">musicus</span>. Look for the answer that adds something to hearing without making it a matter of performance."]
  ]},
  { q: "On the monochord, everything except the sounding length is deliberately held constant. Why does that matter?", a: 2, o: [
    ["Because otherwise the string would break", "A practical worry, and not the methodological one. Ask what the experiment would fail to <em>show</em> if two things changed at once."],
    ["Because the tradition requires that the instrument be used exactly as Pythagoras used it", "The course treats the string as the honest instrument of the art, not as a relic to be handled by rule. Its reason is about demonstration, not about custom."],
    ["Because only then can the change in pitch be attributed to the change in length alone", "One quantity varies and another varies with it, and nothing else is admitted. That is the whole method of a middle science, worked with a piece of wire."],
    ["Because tension and thickness have no effect on pitch", "They have a very great effect — a later lesson turns on the discovery of exactly how much. That is precisely why they must be held still."]
  ]}
]

});

/* ---- A ---- */
/* Study questions — set A.
   Lessons: i-1, lib-1, lib-2.
   Format:  "<lesson id>": [ { q, a, o: [ [option, response], ... ] }, ... ]
   where `a` is the index, in the ORIGINAL order, of the true option. */

window.MusicaArs = window.MusicaArs || {};
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"i-1": [
  { q: "Music as a fine art studies melody, rhythm, and composition. To what end?", a: 2, o: [
    ["The formation of character in the young", "You have moved to the study that watches what is sung in the house and in the city. That one aims at what a hearer becomes, not at what a maker makes. Re-read the three ends in the order the lesson gives them."],
    ["Truth about numbered sound", "That is the aim of a study which takes pitches as a nature and asks nothing about their use. The study named in the question is a making, and a making is measured by what it brings into being."],
    ["A work that is beautiful to hear", "And that is a real end, not a contemptible one. The lesson’s objection is not that delight is bad but that delight is not truth, and only truth as such makes a study liberal."],
    ["Skill in performance upon an instrument", "Performance may be needed to display the work, but the question asked for the end of the study, not its means. An end is what the whole thing is for. Look again at what the composer is said to be aiming at."]
  ]},
  { q: "Why is fine art said to stand nearer the liberal arts than shoemaking does?", a: 3, o: [
    ["Because it requires more natural talent", "Talent may be needed, and it settles nothing about the kind of study. Shoemaking has gifts of its own. The comparison turns on what the activity is ordered to, not on how rare the aptitude is."],
    ["Because it deals with number, as the liberal arts do", "Rhythm can indeed be counted, but the lesson does not rest the comparison on number. Re-read the sentence about shoemaking and notice which pair of terms it actually uses to make the ranking."],
    ["Because it is taught in schools rather than in workshops", "Where an art is taught is an accident of custom. The lesson grades the studies by what they belong to and what they aim at, not by the buildings in which they are learned."],
    ["Because it belongs to leisure and aims at the beautiful", "Two marks, and both real — which is why the lesson must still add that nearness is not identity. Liberal study aims at truth as such, and delight measured by truth is not the same as truth."]
  ]},
  { q: "Aristotle in the <span class=\"latin\">Politics</span> and Boethius in his prologue both hold that different melodies move the soul in different ways. Where does that claim belong in the division?", a: 1, o: [
    ["To the liberal art, since it concerns what sounds do", "The liberal art considers numbered sound as a nature; it does not treat the effects of sound upon hearers. Ask whether the claim you have chosen is about ratios or about what happens to a man who listens."],
    ["To the second study — music as a part of ethics and politics", "Which is why parents and lawgivers watch what is sung. That is the forming of character, and it can be a part of moral science; but it is training, and training is not the art this course teaches."],
    ["To fine art, since composers exploit these effects", "A composer may well use the fact, but using a claim is not the study of it. The lesson assigns a claim by the science it belongs to, not by who happens to find it handy."],
    ["Nowhere in the division; it is a remark of natural philosophy about the passions", "The lesson does not leave it homeless. It cites St. Thomas repeating the claim in a question about praising God with song, and places it squarely within one of the three studies."]
  ]},
  { q: "Parents who watch what is sung in the house, and lawgivers who watch what is sung in the city — what does the lesson say of them?", a: 2, o: [
    ["They practise the liberal art in its applied form", "The lesson allows no such applied form. It separates the studies by their ends, and the end of what these men do is a citizen of a certain stamp, not a piece of knowledge."],
    ["They exercise the fine art at second hand", "The fine art makes something beautiful to hear. These men make nothing; they watch what is heard by others, and they watch it for the sake of what it does to those others."],
    ["They are not doing mathematics; they are forming character", "The lesson is blunt about it: real work, and moral work, but training. It belongs to the second study, and this course is the third."],
    ["They are doing something no part of the threefold division covers", "The lesson gives their activity a place, and names the science it can be a part of. Re-read the paragraph that cites the Politics and the prologue of Boethius."]
  ]},
  { q: "What is the <span class=\"latin\">opus</span> of music considered as a liberal art?", a: 3, o: [
    ["A song", "The lesson denies exactly this, and in those words. A song is the gift of the Muses. The question is what the science makes, and a science does not make songs."],
    ["A performance judged by a trained ear", "No performance is the work of this study, and a trained ear is nowhere called its product. Look again at the sentence in which the third study’s work is named."],
    ["A treatise on the effects of melody upon the soul, such as a lawgiver could use", "That would be a work of the second study, if of any. And the lesson notes that St. Thomas writes no treatise on music at all. You have answered for the wrong one of the three."],
    ["A scale — an ordered system of pitches generated from the first numerical ratios", "Not a song but a scale. And it is considered as a nature, for the sake of the truth about numbered sound, which is what keeps the study from being either a concert or a civic programme."]
  ]},
  { q: "What did the Greeks call this study when they were being careful?", a: 1, o: [
    ["<span class=\"latin\">Musica</span>", "That is the Latin name the quadrivium uses, and the English word this course keeps descends from it. But the question asked what the Greeks said when they wished to be exact, which was a different word."],
    ["<em>Harmonics</em>", "And the course keeps the English word music only because the tradition does, meaning harmonics unless it says otherwise. Watch for that silent substitution; it prevents a great deal of confusion later."],
    ["The music of the Muses — that is, song", "The lesson sets that phrase on the far side of the distinction: the gift of the Muses is song, and this science is not song but what makes song possible. You have named the poet’s sense."],
    ["<span class=\"latin\">Quadrivium</span>", "That is the name of the group of four sciences, not of one of them. A member is not its class. Look for the word Socrates uses when he turns to this study in the seventh book."]
  ]},
  { q: "Why does the boxed remark insist that Socrates says harmonics rather than music?", a: 2, o: [
    ["Because Socrates disapproved of song", "Nothing in the lesson makes him hostile to song; it makes him precise about a word. The point of the box is a distinction between two senses, not a verdict upon poetry."],
    ["Because the Greek word is older than the Latin one", "The age of words is not the argument. The box separates two things that a single word covers, and it says what each of them is. Ask yourself which two."],
    ["Because ‘music’ in the poet’s sense means song, while the study in question is the science of the ratios from which song is possible", "The one is the gift of the Muses; the other is what makes the gift possible at all. Keeping the two apart is the whole labour of this first lesson."],
    ["Because harmonics takes in astronomy as well", "The lesson says no such thing, and the quadrivium keeps its four sciences distinct. Re-read the box and notice that it contrasts two senses of one word, not two sciences."]
  ]},
  { q: "What does the lesson say about St. Thomas’s own writing on music?", a: 0, o: [
    ["He writes no treatise <span class=\"latin\">De musica</span>, but receives the older division and places the art among the mathematical sciences", "So his authority here is for the placing, not for a doctrine of his own about sound. Notice how much of this course will rest on where a thing is put rather than on what one text says."],
    ["He writes a <span class=\"latin\">De musica</span> defending the quadrivial place of the art", "He does not, and the lesson says so in its first paragraph. Be exact about what an author actually wrote: a citation is not a treatise."],
    ["He rejects the older division and puts music under moral science", "He receives the division rather than rejecting it. He is cited elsewhere on the moral use of song without the art itself being moved. Re-read the opening sentence."],
    ["He treats music only in the <span class=\"latin\">Summa</span>, in the question on praising God with song", "That question is cited here, but the lesson points to his commentary on Boethius as well. And the question asked where he puts the art, not where he mentions it."]
  ]},
  { q: "The lesson says the third study considers the scale ‘as a nature.’ What does that mean?", a: 1, o: [
    ["That the scale is found in the world rather than made by men", "The lesson does not argue about where scales come from. To consider something as a nature is a way of considering it, and the sentence tells you what that way is ordered to."],
    ["That it is considered for the sake of the truth about numbered sound, and not for a concert or for the making of citizens", "The phrase marks an end, not an origin. It is the move by which any science takes its subject: you ask what the thing is, and leave off asking what it is good for."],
    ["That the scale must be sung before it can be understood", "That would make the study a matter of performance, which is what this lesson has been at pains to separate out. The phrase concerns the manner of consideration, not a required activity."],
    ["That the scale is a natural object rather than a mathematical one", "The first paragraph places this art among the mathematical sciences. You have taken a phrase about how a thing is considered and turned it into a claim about which science owns it."]
  ]},
  { q: "A student concludes that the other two studies are therefore false or worthless. What does the lesson say?", a: 2, o: [
    ["They are false, being founded upon delight rather than truth", "The lesson calls them real. It denies them a place at the head of the quadrivium, not a standing of their own; and one of them it allows to be part of a science."],
    ["They are worthless for a liberal education, though harmless enough as amusements", "Harsher than the lesson. It calls the two real, and says one of them can be part of moral science — which is not a description of something worthless."],
    ["They are real; they are not first, and they are not what the quadrivium names <span class=\"latin\">musica</span>", "The whole force of the lesson lies in that ‘and’. A study can be genuine, worth pursuing, and still be a different study from the one you have sat down to learn."],
    ["They are the same study as harmonics, seen from different angles", "Then the lesson would have had no reason to divide them, and its warning about mixing the senses of the word would be idle. Three ends were named, and they were not one end."]
  ]},
  { q: "Why is delight not enough to make a study liberal?", a: 3, o: [
    ["Because delight is a passion, and passions fall outside the intellect", "The lesson makes no such psychological argument, and it does not disparage delight — it calls delight good when measured by truth. Look at the comparison it actually draws between two ends."],
    ["Because a delightful work is made for another’s sake and not its own", "That is an argument about ends and uses which the course makes elsewhere. It is not the sentence here. This lesson sets delight beside one other thing and says the two are not the same."],
    ["Because the fine arts belong to work rather than to leisure", "The lesson grants fine art to leisure — that is the very reason it stands nearer the liberal arts than shoemaking does. You have denied the concession the lesson itself makes."],
    ["Because liberal study aims at truth as such, and delight, however good, is not truth", "Good when measured by truth, and still not the same thing. Keep this distinction; it is what decides which of the three studies you are standing in at any moment."]
  ]}
],

"lib-1": [
  { q: "What does the tradition mean by calling an art liberal?", a: 2, o: [
    ["That it is difficult, and so fit for able men", "Difficulty grades nothing here. Some servile arts are very hard, and some liberal exercises are easy. The lesson rejects this reading outright and puts one definition in its place."],
    ["That it befits a gentleman, being refined rather than coarse", "Seneca does say that liberal studies are worthy of a free man, and the lesson refuses to stop at that clause. It names a mark that would hold whether or not anyone thought them refined."],
    ["That it is ordered to knowing", "<span class=\"latin\">Illae solae artes liberales dicuntur, quae ad sciendum ordinantur.</span> Everything else in the lesson — the work that stays in the maker, the judge who is free — hangs upon that ordering."],
    ["That it does not require the use of the hands", "The geometer draws and the astronomer looks, as the second objection answers. Employing the body is not the criterion. Ask instead what the art is ordered to."]
  ]},
  { q: "Where does the sentence dividing liberal from mechanical arts occur?", a: 1, o: [
    ["In the <span class=\"latin\">Summa</span>, in the question on the parts of prudence", "The sources line is pointed about this: the sentence is not in the Summa. The Summa is cited in this lesson for a different rationale altogether, about the body and the soul."],
    ["In St. Thomas’s commentary on the <span class=\"latin\">Metaphysics</span>, expounding Aristotle on the free man", "And the setting matters: the division follows immediately upon the sentence about the man who is his own cause. The two are one argument, not two separate quotations."],
    ["In Aristotle’s <span class=\"latin\">Politics</span>, where he discusses what the free man should learn", "The Politics is quoted here for a practical consequence about not always seeking the useful. The dividing sentence comes later, and its wording is St. Thomas’s rather than Aristotle’s."],
    ["In Boethius, at the close of his first book", "That is where the three sorts of men concerned with music are divided — another division, for another purpose. Check which author is being quoted in the paragraph on the art’s end."]
  ]},
  { q: "In what sense does Aristotle call the highest science free?", a: 0, o: [
    ["As we call a man free who exists for his own sake and not for another’s", "St. Thomas sharpens it: he is not for another’s sake but is his own cause. The likeness between a free man and a free science is the hinge on which the whole doctrine turns."],
    ["Because it is unconstrained by the demands of any teacher or school", "Freedom here is not independence from other men. It is a matter of what a thing exists for, and the comparison is drawn with a kind of man, not with a kind of institution."],
    ["Because its conclusions are not necessitated but freely chosen", "Nothing in the lesson makes this knowledge less necessary than any other. Ask what the analogy actually compares — a science and a man, in respect of what?"],
    ["Because it frees the one who studies it from error", "An effect; and the lesson does treat an effect, but under a different heading and with a different author. The opening of the Metaphysics asks why a science is sought, not what it cures."]
  ]},
  { q: "If the thing is ordered to knowing, why call it an art at all? What is St. Thomas’s answer?", a: 3, o: [
    ["That the word ‘art’ is used loosely here, and would be better dropped", "He keeps the word and gives a reason for keeping it. Nothing in the passage recommends abandoning the name the tradition uses for all seven."],
    ["That the seven are arts in their elementary teaching and become sciences only at their height", "A tidy scheme, and not his. He does not divide one study into a lower phase and a higher; he points to something the study has throughout."],
    ["That they are arts because they can be applied to the making of instruments and buildings", "That would order them to something outside, which is the very mark the lesson gives for the servile. Ask what kind of work the objection has failed to consider."],
    ["That they are called arts among the sciences because they have not only knowledge but a certain work, which is immediately of reason itself", "And he lists them: to construct a syllogism, to form a speech, to number, to measure, <span class=\"latin\">melodias formare</span>, to compute the courses of the stars. Six works, and no matter touched."]
  ]},
  { q: "The boxed remark warns against a hasty reading of <span class=\"latin\">melodias formare</span>. What is the misreading, and why is it wrong?", a: 1, o: [
    ["That it means singing; wrong because St. Thomas nowhere mentions the voice", "The box does not turn on whether the voice is mentioned. It turns on a principle governing every item in the list, and on what a melody must be if that principle holds."],
    ["That it means composition; wrong because each work in the list is performed by reason immediately, without passing into outward matter", "So a melody formed by reason is an ordered set of pitches known in their proportions — the scale. A man who writes a beautiful song and knows no ratio has not performed this work."],
    ["That it means the invention of new modes; wrong because the modes were fixed by tradition", "Neither half of that appears in the lesson. The box makes no claim about which modes exist or who settled them; it corrects a mistake about what sort of act forming is."],
    ["That it means teaching melodies to others; wrong because teaching is a servile art", "Teaching is nowhere called servile in this lesson, and the misreading the box actually names is a far commoner one than this. Re-read its opening sentence."]
  ]},
  { q: "The cobbler’s work ends in a shoe. What is the point of the comparison?", a: 0, o: [
    ["That the work of a liberal art ends in the one who does it, with nothing left over on the bench", "Which is why such a possession cannot be inspected, lent, or sold. When you know why the diapason is 2:1, the work you have made is a state of your own reason."],
    ["That handwork is beneath a free man", "The lesson does not sneer at the cobbler; it distinguishes him. And the Politics passage it quotes says the free man should learn useful things — only not all of them, and not as an artisan does."],
    ["That a shoe is an imperfect thing whereas knowledge is perfect", "No comparison of quality is being drawn. The two works are compared by where each of them ends up, and the shoe is allowed to be a good shoe."],
    ["That the cobbler’s art has no work of reason in it at all", "Making a shoe well plainly takes reason. The contrast is not between thought and thoughtlessness but between two destinations for a finished work."]
  ]},
  { q: "Boethius divides those concerned with music into three. Which of them is truly a <span class=\"latin\">musicus</span>?", a: 3, o: [
    ["The one who plays instruments, since he handles the matter of the art", "Boethius puts him first in the list and last in dignity. Handling the matter is what this lesson elsewhere calls being an instrument of the art rather than its master."],
    ["The one who invents songs, since he makes the thing the art is about", "The maker of songs is second of the three, and is not the one Boethius singles out. Ask where he says the whole of the art is placed."],
    ["All three equally, in their several ways", "Boethius says ‘only,’ and the lesson quotes him saying it. A division that ended in equality would not have been worth the trouble of making."],
    ["The one who judges, for the whole of it is placed in reason", "And such a judge is free in Aristotle’s sense: not an instrument of the art but its master. Anyone at all can be moved by a sound; only he can say what was done to him, and by what."]
  ]},
  { q: "To what purpose is Seneca quoted?", a: 1, o: [
    ["To establish that liberal studies are those worthy of a free man, and that this is the whole account of them", "His first clause says exactly that, and the lesson takes him for the clause that follows — the one that corrects the first. Read his sentence through to its end."],
    ["To add that one study is truly liberal: the one that makes free", "Worthiness is where he begins, not where he stops. The lesson wants the second clause because it names an effect, and an effect is the third of the three marks."],
    ["To show that liberal studies are useless, and honourably so", "Seneca is not quoted on usefulness at all, and the lesson goes on to deny that being usable makes an art servile. You have imported a claim from the objections."],
    ["To prove that the quadrivium is older than the trivium", "Nothing here dates the arts against one another. Seneca supplies a formula about what a study does to the man who has it, not a chronology."]
  ]},
  { q: "‘But music is useful — in the liturgy, in the forming of the young. Does that not make it servile?’ How is this met?", a: 2, o: [
    ["Yes, in that use; the art is liberal only so long as no use is made of it", "Then the art would change its kind whenever a choirmaster picked it up. The lesson locates the difference somewhere a bystander’s use cannot reach."],
    ["No, because the uses named are sacred and civic rather than commercial", "The lesson never grades uses by their dignity. Medicine is called noble in the very example given, and its nobility does not save it. Ask what actually does the dividing."],
    ["No: an art is not made servile by being usable, but by being ordered to use", "Hence medicine, a noble art, is not liberal — because it is ordered to health. The difference lies in the end, not in whether anyone ever profits by the art."],
    ["No, because St. Thomas never in fact treats the use of song", "He does, at ST II-II q.91, and the lesson says so while still calling the art liberal. The answer does not depend on denying that the use exists."]
  ]},
  { q: "‘But it needs the body. You have to listen.’ How is this met?", a: 0, o: [
    ["The sense supplies the subject; it is not the work — as the astronomer must look and the geometer draw", "What would make the art servile is if the knowing were for the sake of the doing. A middle science takes its subject from sense and does its work in reason."],
    ["By denying it: the ratios can be known without ever hearing a sound", "The lesson does not take that escape, and the course would collapse without hearing. It grants the listening, and then shows why granting it costs nothing."],
    ["By admitting that the art is servile in part and liberal in part", "No such division is offered. The reply is a single distinction, applied to astronomy and geometry as well, and it leaves the art wholly on one side."],
    ["Because listening is a passive reception, and passivity cannot be servile", "The lesson argues nothing about activity and passivity. It asks what office the sense holds in the science — and holding an office is not the same as being the work."]
  ]},
  { q: "The boxed remark calls St. Thomas’s second rationale the better one. What is it?", a: 2, o: [
    ["That the liberal arts are those the Church has always taught", "Nothing in the box appeals to custom or to the Church’s teaching. The rationale offered is drawn from what the arts are, and it ends in a sentence about the soul and the body."],
    ["That the liberal arts alone have a work of their own, while the mechanical arts merely repeat what others have already found out", "The mechanical arts plainly have works — that is their whole character. The contrast is not between work and no work, but between two ways in which a work may be carried out."],
    ["That arts ordered to bodily works are servile inasmuch as the body is servilely subject to the soul, and man according to the soul is free", "So the freedom in question is first the soul’s freedom over the body. That is why these arts are the ones that befit a man precisely as man."],
    ["That speculative matters have no work at all, and so cannot be servile", "The box says the opposite in its first line: even in speculative matters there is something after the manner of a work, and it names several. Re-read that sentence."]
  ]}
],

"lib-2": [
  { q: "The first of the four things is called the great one. Why need you not take its central claim on the word of a wise man?", a: 1, o: [
    ["Because the claim is self-evident once it is stated", "The lesson calls it a large claim, and grants that in most matters you would have to take it on authority. Something peculiar to this art removes the need here, and it is not obviousness."],
    ["Because you can measure the pleasing pairs of sounds, alter the ratio, and watch the pleasure alter with it", "The delight is tracking something the mind can state, and you have seen it track. That is why the art is worth more than its size: one string, three ratios, and a verified instance."],
    ["Because St. Thomas’s authority is weaker in this matter than elsewhere", "The lesson does not weigh his authority at all. It says that here you have something better than authority ready to hand — a remark about your situation, not about his."],
    ["Because the claim is a definition, and definitions stand in need of no proof", "It is not offered as a definition, and the lesson treats it as something that could in principle be doubted. That is precisely why it is worth checking rather than assuming."]
  ]},
  { q: "How do the beautiful and the good stand to one another?", a: 3, o: [
    ["They are two distinct perfections, found in different things", "Then a thing could be good and in no way beautiful, and the reason given here — that beauty is due proportion, which pleases — would have nothing to fasten on. The lesson makes them one somewhere and two somewhere."],
    ["The beautiful is a species contained under the good", "Containment is not the relation given. The formula sets the two side by side and locates their difference in one place only. Ask yourself which place that is."],
    ["The good is what pleases when seen; the beautiful is what all desire", "The halves have been swapped. Look again at which formula belongs to which term: <span class=\"latin\">pulchra dicuntur quae visa placent</span>."],
    ["They are the same in the thing and differ in notion", "The good is what all desire; things are called beautiful which please when seen. One reality, two accounts of it — which is why a demonstration about proportion touches both at once."]
  ]},
  { q: "Why do the senses delight in things duly proportioned?", a: 2, o: [
    ["Because the soul is itself made in due proportion and recognises its like", "The lesson makes no claim about the soul’s own proportions. Its reason concerns what sense is, is stated in three Latin words, and is stronger than mere resemblance."],
    ["Because habit accustoms them to whatever they meet most often", "That would make the delight a product of custom, and the whole point is that it is not arbitrary. Custom would also make it alterable by training, which the argument does not allow."],
    ["Because sense is itself a certain reason, and so delights in what is after its own kind", "<span class=\"latin\">Sensus ratio quaedam est.</span> That is the premise doing the work: were sense not a kind of reason, its pleasures could tell you nothing whatever about the intelligible."],
    ["Because proportioned things are easier for the sense organ to receive without strain", "A physiological guess, and not the reason given. The lesson’s reason is about what sense is, not about how comfortably an organ does its work."]
  ]},
  { q: "What exactly is overturned by measuring the ratios honestly on a string in a quiet room?", a: 0, o: [
    ["The conviction that beauty is nothing but private preference", "Not argued against — refuted, in your own hearing, by you. That is a different and a better thing to be able to say, and the lesson insists on the difference."],
    ["The claim that the senses can deceive", "The lesson nowhere denies that senses deceive; it insists elsewhere that sense and reason must correct one another. What is overturned here is a claim about beauty, not a claim about reliability."],
    ["The opinion that music can be a fine art", "The lesson holds that music as a fine art is a real study; it simply is not this one. Nothing done on the string decides that question either way."],
    ["The doctrine that the good and the beautiful differ", "They do differ, in notion, and the lesson says so plainly. What the experiment touches is a modern opinion about whether beauty is in the thing at all."]
  ]},
  { q: "What is Ptolemy’s rule, as the lesson gives it?", a: 1, o: [
    ["That the ear must be trained until it agrees with the ratios", "That subordinates one criterion to the other, and the rule forbids just such subordination — in either direction. Ask what it says about how the two must treat each other."],
    ["That neither criterion may despise the other", "Set beside St. Thomas: all our knowledge begins in the senses and is completed in the intellect. The Pythagorean who will not listen and the empiric who will not demonstrate are both crippled."],
    ["That reason judges while sense merely reports", "A hierarchy, and the rule as given is not a hierarchy. Both are called criteria, and the sentence stating the rule is symmetrical between them."],
    ["That where sense and reason conflict, the matter must be left undecided", "Nothing so despairing. The rule is a discipline for using two criteria together, not a counsel for giving up whenever they disagree."]
  ]},
  { q: "Liberal education does not chiefly make you able to do more things. What does it make you able to do?", a: 3, o: [
    ["To appreciate what better men have made", "That is the connoisseur, whom the boxed remark expressly declines to produce. Appreciation is a kind of taste; the lesson is after something that can be stated and defended."],
    ["To teach the art to others", "Teaching may follow from it, and the lesson does not name it here. Look at Boethius’s three sorts of men and ask which of them is being described in this paragraph."],
    ["To hear finer distinctions than an untrained ear can", "A trained ear is useful and is not the mark named. The distinction being drawn is between doing and knowing, and a finer ear is still a power of doing."],
    ["To say what is the case, and why", "The judge’s work. In this art the difference is unusually sharp, because the art is small enough to be possessed entire: either 3:2 is in your ear and your reason, or it is not."]
  ]},
  { q: "‘The quadrivium is not four hobbies attached to arithmetic.’ What is it, on the authority quoted?", a: 1, o: [
    ["Four applications of one mathematical method", "That still leaves the other three as appendages of the first, which is the picture the sentence rejects. The image quoted is not of a method but of a journey."],
    ["Roads by which the living mind enters into the secrets of philosophy", "Hugh of St. Victor’s image, and St. Thomas adds in his own voice that by these the mind is prepared for the other philosophical disciplines. A road exists for the sake of somewhere else."],
    ["The four sciences in which certainty is possible", "Certainty is not the ground offered, and no comparison with the trivium is made on that head. The image quoted says what the four are for, not how sure they are."],
    ["A curriculum fixed by custom, whose order is finally arbitrary", "The lesson holds the opposite — that there is an ascent, and that it goes somewhere. What is arbitrary would not be called a road."]
  ]},
  { q: "In <span class=\"latin\">Republic</span> VII Socrates dismisses two sorts of student. What is wrong with the second sort?", a: 2, o: [
    ["They put their ears before their minds and torture strings", "That is the first sort. The second is distinguished from it precisely by seeking numbers at all. Read the two dismissals in order and notice what the later group has that the earlier lacks."],
    ["They study numbers and never listen at all, so their science is of arithmetic and not of sound", "Their fault is not deafness; they take their numbers from concords they have in fact heard. What they fail to do comes after the hearing and after the numbering."],
    ["They take their numbers only from the concords they happen to hear, and never ascend to problems", "They never ask which numbers are concordant of themselves, and why. And these are the Pythagoreans, the school this art descends from — which is why the warning is aimed at you."],
    ["They mistake astronomy for harmonics", "No such confusion is charged against them. Both sorts are studying sound; what separates them is how far each carries the study."]
  ]},
  { q: "Why, Augustine tells Memorius, did he write <span class=\"latin\">De musica</span>?", a: 0, o: [
    ["Because the power of number in all motion is most easily studied in sounds, and because that study offers a way of rising to higher secrets of truth", "Most easily — a convenient starting place for something much larger. The paths ascend as it were gradually, and the ascent is the point of the whole book."],
    ["Because the chant of the Church stood in need of a theoretical defence", "Nothing about liturgy appears in the reason he gives. He speaks of number in motion, and of a rising by paths that mount by degrees."],
    ["Because no Latin author had yet treated harmonics", "The lesson makes no claim about who wrote first, and his stated reason is not one of priority. It concerns what sound is convenient for."],
    ["Because sounds are the only place in which number appears in motion", "He says most easily studied, not only found. Overstating a claim is one way of losing it, and the gap between ‘easiest’ and ‘only’ matters a great deal here."]
  ]},
  { q: "Among the kinds of number Augustine names in the sixth book, which are the <span class=\"latin\">iudiciales</span>?", a: 3, o: [
    ["Those in the sounding body itself", "Those are the <span class=\"latin\">sonantes</span>, and they stand at the foot of the ascent. The kind asked after stands at its head, and is marked off by something we cannot do to it."],
    ["Those in the sense that meets the sounding body", "The <span class=\"latin\">occursores</span>, second of the five. Count the list through in order and see which member the name in the question translates."],
    ["Those held in memory, by which a melody once heard can be run through again", "The <span class=\"latin\">recordabiles</span>, fourth of the five. But the ascent does not halt there, and the lesson says it runs past even its own last term. Re-read the list to its end."],
    ["Those by which we judge, which we did not make and cannot alter", "The last of the five, and the ascent runs from the first to the last and past the last. Everything below them is in some degree ours; these are not."]
  ]},
  { q: "What does the boxed remark say the art will not do?", a: 0, o: [
    ["It will not by itself make you good; the forming of character belongs to the second study of music", "Aristotle and St. Thomas both hold that music has much to do with character, but this course does not undertake that. Nor will the art make you happy. It is one small true thing, thoroughly known."],
    ["It will not make you able to judge concords", "Judging is exactly what it claims to do — the third of the four things. You have taken one of the promises for one of the denials."],
    ["It will not show you anything about the beautiful", "The first and greatest of the four things is a demonstration about the beautiful. The box denies the art several offices, and that is not among them."],
    ["It will not connect with the other quadrivial sciences", "The fourth thing is that the art is a road, and roads lead somewhere. The box denies particular accomplishments; it does not deny the ascent."]
  ]}
]

});

/* ---- B ---- */
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"i-2": [
  { q: "The seven liberal arts are two roads. What divides them?", a: 1, o: [
    ["The trivium treats what is easy, the quadrivium what is hard", "That is a judgement about difficulty, which is a fact about students rather than about subjects. Ask instead what each of the two roads is <em>about</em> — what kind of thing it takes for its matter."],
    ["The trivium concerns speech; the quadrivium concerns quantity", "And that is why arithmetic is prior to music in a way grammar is not: the second road is one subject matter divided, not a list of accomplishments."],
    ["The trivium concerns words, the quadrivium concerns things", "Near enough to sound right, and far too wide: every science concerns things of some sort. The lesson names one determinate kind of thing for the second road. Re-read the sentence that lists its four members."],
    ["The trivium is the pagan learning, the quadrivium the Christian", "Nothing in the lesson divides the arts that way, and both roads reach the Middle Ages from the same ancient sources. Look again at the parenthesis after each name and ask what its members have in common."]
  ]},
  { q: "Of a heap of wheat we ask how much; of the potatoes in a sack, how many. Which science answers which?", a: 2, o: [
    ["Geometry answers “how many”, arithmetic “how much”", "You have both sciences and have crossed them. Ask which question is answered by counting units, and which by measuring a magnitude that has no natural unit inside it."],
    ["Both belong to arithmetic, since both end in a number", "A measurement can be reported in numbers without its subject being number. The lesson divides quantity itself into two kinds <em>before</em> it assigns any science. Re-read the sentence about the heap and the sack."],
    ["Geometry answers “how much” — continuous quantity, magnitude; arithmetic “how many” — discrete quantity, number", "Aristotle’s division in the <span class=\"latin\">Categories</span>, and it is what puts these two sciences first. Notice that the whole quadrivium is built on this one cut."],
    ["Music answers “how much” and astronomy “how many”", "Those two enter the quadrivium later in the lesson, and for a quite different reason. The question is about the two sciences that treat quantity in itself."]
  ]},
  { q: "Why are arithmetic and geometry first among the four?", a: 3, o: [
    ["Because they were discovered first", "The lesson orders the four by what they treat, not by when anyone found them. An order of that kind would shift with every new piece of history. Ask what these two have in common as sciences."],
    ["Because they are the easier two", "Ease is a fact about learners. The order given here is drawn from the subjects themselves — from how far each stands from the bodies in which we first meet quantity."],
    ["Because the other two are not sciences but applications", "The lesson calls the other two sciences in the full sense; being applied does not unmake a science, since a middle science demonstrates. Ask instead what the first two treat that the second two do not."],
    ["Because they treat quantity in itself, abstracted from the movable bodies in which we first meet it", "Which is also why they do not yet touch the world we hear and see — and that lack is exactly what the other two are added to repair."]
  ]},
  { q: "Following Aristotle’s <span class=\"latin\">Physics</span> II, St. Thomas names three middle sciences. Which three?", a: 0, o: [
    ["Optics, harmonics, astronomy", "Light, sound, and the heavens — three natural subjects handled by mathematical middle terms. Each is a natural thing proved through number or figure, which is the whole shape of this kind of science."],
    ["Arithmetic, geometry, astronomy", "Two of those treat quantity abstracted from body, and so cannot stand in the middle of anything. A middle science needs something natural at one end. Ask what optics has that geometry lacks."],
    ["Grammar, logic, rhetoric", "That is the other road entirely, and it concerns speech. Middle sciences are being distinguished within the road that concerns quantity."],
    ["Physics, harmonics, optics", "Two of those are rightly placed, and the lesson says in as many words that this art is not physics. Ask which third science it names, and where that one gets its middle terms."]
  ]},
  { q: "Optics is a middle science. From which science does it take its middle terms?", a: 2, o: [
    ["Arithmetic", "That is where another of the three goes. Ask what a ray of light has about it that would be handled by figure rather than by counting."],
    ["Physics", "Physics is where its <em>subject</em> comes from — a ray is a natural thing. The middle terms of a middle science are drawn from the other end of it, the mathematical end."],
    ["Geometry", "And this is the clearest case of the pattern: a natural subject, a mathematical middle term. Harmonics has the same shape with a different mathematics."],
    ["From both arithmetic and geometry", "One of the three does draw on both, and the lesson says so plainly of that one alone. Read the three lines again and notice that they are not alike."]
  ]},
  { q: "And astronomy — from where does it take its middle terms?", a: 1, o: [
    ["From geometry only, since the planets move in circles", "The circle is indeed geometry’s, and the lesson does say astronomy cannot be had without it. But of the three lines in the list, the one for astronomy is the only one that names more than one source."],
    ["From both geometry and arithmetic", "Which is why it is the fullest of the three. The lesson also uses it as its standing comparison: geometry stands to astronomy as arithmetic stands to music."],
    ["From arithmetic only, since the periods are counted", "Counting periods is part of it; the path a body traces is not counted but described. Read the three lines of the list together and notice which one is unlike the others."],
    ["From neither — astronomy is a natural science outright", "Then it would sit with physics rather than in the quadrivium, and the lesson puts it squarely among the four. A middle science has a natural subject and still demonstrates mathematically."]
  ]},
  { q: "In harmonics, which is the natural thing and which supplies the middle term?", a: 3, o: [
    ["The number is the natural thing; the sound supplies the middle term", "You have exchanged the two ends. A middle term is what a demonstration runs through; a subject is what it is about. Which of these two could be struck with a plectrum?"],
    ["Both are natural: the string and the sound it makes", "The string and the sound are both natural, so you have named the subject twice over. A middle science has two ends, and the second is not found on the instrument."],
    ["Both are mathematical; the string is only an illustration", "If the string were an illustration, the science would be arithmetic with a picture attached, and the lesson denies exactly that. Ask what the demonstration is <em>about</em>."],
    ["The sound is the natural thing; the arithmetic ratio supplies the middle term", "So the proof that this string at this length sounds the fifth is an arithmetic proof about a natural thing. Hold both halves; dropping either one turns the art into something else."]
  ]},
  { q: "Commenting on Boethius’s <span class=\"latin\">De Trinitate</span>, St. Thomas puts mathematics after logic. What does he call the quadrivium’s sciences?", a: 2, o: [
    ["The highest of the philosophical disciplines", "He places them after one thing and before others, which is not the station of a highest science. Read what he says they lead toward."],
    ["A preparation for the trivium", "The order runs the other way — logic first, mathematics after. Read the clause about what one should learn once logic is had."],
    ["“Like paths leading the mind to the other philosophical disciplines”", "A path is travelled and left behind. That is the exact status this course claims for itself: an ordering of the mind toward wisdom, not the terminus."],
    ["Sciences of the divine, since number is eternal", "That is a Platonising claim the lesson does not make, and it would put the quadrivium at the end of the road rather than partway along it. Look at the phrase about paths."]
  ]},
  { q: "Music is neither “math about nothing in particular” nor physics. What does that leave?", a: 0, o: [
    ["Arithmetic applied to sound", "Which is why the next lesson is about ratio and not about melody. Take away the arithmetic and nothing is demonstrated; take away the sound and nothing is demonstrated <em>of</em>."],
    ["A practical art, ordered to performance", "The lesson seats it in the quadrivium, among the sciences of quantity, never among skills of the hands. Ask what its middle terms are and which science supplies them."],
    ["Geometry applied to sound", "The right shape of answer with the wrong mathematics in it. Look at the three lines listing the middle sciences and see which one harmonics stands beside."],
    ["Natural philosophy that borrows numbers for convenience", "If the numbers were a convenience the demonstrations would go through without them, and they do not. The lesson also says outright that this art is not physics."]
  ]},
  { q: "“If you do not yet know what a ratio of whole numbers is, you cannot possess this art.” What comparison does the lesson draw?", a: 1, o: [
    ["That you cannot sing before you can speak", "The lesson’s comparisons are between sciences, and singing is not one of them. Look at the sentence that names two members of the quadrivium in a single breath."],
    ["That you cannot possess astronomy without the circle", "Priority of that kind is not a matter of teaching order but of what the demonstrations are made of. A man without ratios does not have a partial harmonics; he has none."],
    ["That you cannot read before you know the letters", "A reasonable comparison, and not the one drawn here. The lesson’s example is taken from inside the quadrivium, from the science that stands to its own mathematics as this one stands to arithmetic."],
    ["That you cannot do arithmetic without geometry", "The lesson sets those two side by side as the first pair, not one under the other. Look for the comparison that pairs a middle science with the mathematics beneath it."]
  ]},
  { q: "The boxed remark reports Hattrup: music and astronomy are mathematics applied to periodic motion, one for the ear and one for the eye. How does the course use this?", a: 2, o: [
    ["As St. Thomas’s own account of the subject of harmonics", "The box is at pains to deny exactly this, and gives Thomas’s own phrase separately, calling it the more exact one. Re-read its last two sentences."],
    ["It rejects it as a modern intrusion", "The box adopts the account and uses it, and gives a reason why. What it declines to do is smaller and more precise than rejection — read its closing sentences."],
    ["As a pedagogical order that matches St. Thomas’s account of the middle sciences, while refusing to pass “periodic motion” off as his phrase", "A useful account may be borrowed without being attributed. Thomas’s own phrase is given right after: harmonics considers a natural thing through the numbers of arithmetic."],
    ["As a demonstration that the quadrivium must have exactly four members", "The box offers a reason why the two later members belong, not a proof that no others could. Taking a fitting account for a demonstration is precisely the error to watch for here."]
  ]}
],

"arith-1": [
  { q: "Between any two numbers there is either equality or inequality. What does the art say of equality?", a: 3, o: [
    ["It is a kind of inequality, namely the ratio 1:1", "You have made equality a species of its own opposite. The lesson sets the two against each other at the head of the division, and puts one before the other as unity is before number."],
    ["It is the first of the multiples", "The multiples are a kind of inequality, and each of them compares two terms that differ. Ask what there is to compare when the two terms do not differ at all."],
    ["It is a limiting case with no sounding image", "The lesson does give it a sounding image, and names it in the same sentence. Look again at the paragraph on equality before going on to the kinds."],
    ["It is one and simple, with nothing in it to divide; its sounding image is the unison", "Boethius holds that all inequality proceeds from equality as all number proceeds from unity — which is why the art treats the unison before it treats any interval at all."]
  ]},
  { q: "<span class=\"latin\">Multiplex</span> — what does the name cover, and which ratios did the lesson list under it?", a: 0, o: [
    ["The greater contains the less a whole number of times with nothing over: <span class=\"latin\">duplus</span> 2:1, <span class=\"latin\">triplus</span> 3:1, <span class=\"latin\">quadruplus</span> 4:1", "The simplest inequality there is, since the division comes out even. Note that “the first concords” means, exactly, the first multiple and the first two superparticulars."],
    ["The greater contains the less once and one part besides: 3:2, 4:3, 5:4", "You have described the next kind in the table and given its examples. Ask what is left over when the smaller term is fitted into the larger in 3:1."],
    ["Any ratio whose terms both exceed unity: 3:2, 5:3, 9:8", "That would sweep nearly the whole table into one class and leave the other four empty. The definitions turn on how the division comes out, not on the size of the terms."],
    ["Several times, and one part besides: 9:4", "That is one of the two compound kinds, and its name begins with the word you were asked about — a hint about how the compounds are built, not a definition of the simple kind."]
  ]},
  { q: "What exactly does <span class=\"latin\">superparticularis</span> require?", a: 2, o: [
    ["That the greater contain the less a whole number of times with nothing left over", "That is the kind in which the division comes out even. The word before you has a second element, and that element is what the division leaves behind."],
    ["That the greater contain the less once, and more than one aliquot part besides", "One word too many. Count how many parts this definition is allowed to leave over, then look for the kind that allows more."],
    ["That the greater contain the less once, and one aliquot part of it besides", "Hence <span class=\"latin\">sesqui-</span>, which says “and a part again”. The class holds 3:2, 4:3, 5:4 and 9:8, which is why membership in it settles nothing about being a concord."],
    ["That both its terms fall within the tetractys", "The bound at four is a further restriction the Pythagoreans lay on which ratios may be concords. It does not put a ratio in one class or another — 9:8 is proof enough of that."]
  ]},
  { q: "What is 4:3 called, and what does the name say?", a: 1, o: [
    ["<span class=\"latin\">Sesquialter</span> — “a half again”", "Both halves of that are true of a different ratio in the table. Fit 3 into 4, ask what fraction of 3 is left over, and then look for the name that states that fraction."],
    ["<span class=\"latin\">Sesquitertius</span> — “a third again”", "The name states the ratio, which is the point of learning it: a man with the names does not stop to think what 4:3 is. It is the second superparticular and the third of the first concords."],
    ["<span class=\"latin\">Quadruplus</span> — “fourfold”", "You have taken the name from the larger figure alone. That name belongs to a ratio in which the greater contains the less four whole times with nothing over, which 4:3 plainly does not."],
    ["<span class=\"latin\">Supertripartiens quartas</span> — “once and three quarters”", "That name stands in the table beside a ratio whose remainder is more than one part. Divide 4 by 3 and count what is actually left."]
  ]},
  { q: "5:4 is a superparticular. What is its name, and where does it stand among them?", a: 2, o: [
    ["<span class=\"latin\">Sesquiquintus</span>, the fourth of them", "You have taken the prefix from the greater term. In these names the suffix counts the <em>part</em> that is added, not the number on top — and the order follows the same count."],
    ["<span class=\"latin\">Sesquiquartus</span>, the eighth of them", "The name is right and the place is not. Count the superparticulars in order from the first — 3:2, then 4:3 — and see how far along 5:4 actually falls."],
    ["<span class=\"latin\">Sesquiquartus</span>, the third of them", "Which is what makes the seam in the tradition visible: 5:4 stands early in the order and is refused all the same, so the refusal cannot rest on the kind of ratio. It rests on a bound."],
    ["<span class=\"latin\">Duplex sesquiquartus</span>, which is why it is refused", "That name belongs to a ratio in which the greater contains the less several whole times over. Fit 4 into 5 and count the whole times before reaching for a two-word name."]
  ]},
  { q: "To which kind does 5:3 belong, and what is it called?", a: 0, o: [
    ["<span class=\"latin\">Superpartiens</span>: <span class=\"latin\">superbipartiens tertias</span> — once and two thirds", "The name reads off the division in order: how many whole times, how many parts, and parts of what sort. Every name in the table is built to be read that way."],
    ["<span class=\"latin\">Superparticularis</span>: <span class=\"latin\">sesquibitertius</span>", "The <span class=\"latin\">sesqui-</span> names allow exactly one part over, and you have tried to make one carry two. When more than one part remains, the table sends you to another kind altogether."],
    ["<span class=\"latin\">Multiplex</span>: <span class=\"latin\">quintuplus tertias</span>", "A multiple leaves nothing over at all, and 3 does not go into 5 a whole number of times. Do the division before choosing a class."],
    ["<span class=\"latin\">Superpartiens</span>: <span class=\"latin\">supertripartiens quartas</span>", "The class is right; that name belongs to another member of it. Count how many parts are left when 3 is taken from 5, and of what sort those parts are."]
  ]},
  { q: "7:4 is named <span class=\"latin\">supertripartiens quartas</span>. What does the name state?", a: 3, o: [
    ["Three times, and a quarter besides", "You have read the first element as a count of whole times, when it counts something else. Ask which word in the name says how often the less goes into the greater."],
    ["Seven parts of four", "That is a way of reading the figures, not of reading the name. The name carries two counts: how many whole times, and how many parts of what sort. Take the words apart."],
    ["Once, and three parts besides, the parts being thirds", "The whole and the number of parts are right, and the parts are taken from the wrong denominator. The last word of the name tells you what sort of part is meant."],
    ["Once, and three parts besides, the parts being quarters", "The Latin is not ornament: the name is the arithmetic said aloud. Once you read names this way, a ratio you have never met can be classed on sight."]
  ]},
  { q: "9:4 is <span class=\"latin\">duplex sesquiquartus</span>. To which of the five kinds does it belong?", a: 1, o: [
    ["<span class=\"latin\">Multiplex</span>", "If it were a pure multiple, 4 would go into 9 with nothing over. Do the division and look at what remains."],
    ["<span class=\"latin\">Multiplex superparticularis</span>", "Twice, and one aliquot part besides. The two compound kinds are simply the first three joined, and their names are read in the same order as the division is done."],
    ["<span class=\"latin\">Superparticularis</span>", "In a superparticular the greater contains the less <em>once</em>, and only then a part. Here it goes in more often than that, and the name says so in its first word."],
    ["<span class=\"latin\">Multiplex superpartiens</span>", "That kind leaves more than one like part over once the whole times are taken. Divide 9 by 4 and count the remainder in quarters."]
  ]},
  { q: "What is 8:3?", a: 2, o: [
    ["<span class=\"latin\">Duplex sesquiquartus</span>", "The first word is right and the second is not; that whole name is given in the table to a different ratio. Take 6 from 8 and count the remainder in thirds."],
    ["<span class=\"latin\">Triplex</span>, near enough", "“Near enough” has no standing in this art. Three goes into 8 twice with something left, and a name saying three times is simply false of it. Do the division exactly."],
    ["<span class=\"latin\">Duplex superbipartiens tertias</span>", "Twice, and two thirds over. Notice that the compound names are longer for the same reason the divisions are: nothing in them is decoration."],
    ["<span class=\"latin\">Superbipartiens tertias</span>", "The leftover is exactly right and the whole times have been dropped. That name belongs to a ratio in which the greater contains the less once. Ask how often 3 goes into 8."]
  ]},
  { q: "What is 2:3 called, and why is such a name seldom heard?", a: 1, o: [
    ["<span class=\"latin\">Subduplus</span>; the art prefers the greater ratio", "The prefix is right and the stem is not. <span class=\"latin\">Duplus</span> belongs to a ratio that comes out in whole times; what you have here leaves a part over."],
    ["<span class=\"latin\">Subsesquialter</span>; each of the five kinds has a lesser counterpart in <span class=\"latin\">sub-</span>, and the art speaks of the greater and lets the lesser be understood", "Which is why you may read a whole treatise without meeting one. It also means the order of terms is never idle: 3:2 and 2:3 are two comparisons, not one."],
    ["It has no name; ratios are always taken greater to less", "The lesson says each of the five kinds has a lesser counterpart, and shows how it is formed. Being usually left unspoken is not the same as being unnamed."],
    ["<span class=\"latin\">Sesquialter</span> still, since the ratio is the same magnitude", "The magnitude is the same and the comparison is not, and the art marks the difference with a prefix. Ask which of the two terms is being measured against the other."]
  ]},
  { q: "The boxed remark says the later dispute is never about whether ratios govern concord. What is it about?", a: 3, o: [
    ["Whether the ear may overrule number", "The box denies precisely this reading, and calls the later development one argued with the art’s own instruments. Re-read its last two sentences."],
    ["Whether 9:8 is a concord or a step", "That is settled inside the Pythagorean art and is not what the two parties quarrel over. The box points to something they disagree about, and it is a placement."],
    ["Whether Boethius or Augustine is the better guide", "Neither is a party to the dispute the box describes, which concerns number and a date in the sixteenth century. Read the box again for the two positions it actually names."],
    ["Where the bound stands: the Pythagoreans put it at four, Zarlino at six", "In 1558 Zarlino proposed the <span class=\"latin\">senario</span>, and the thirds and sixths came in with it — a development inside the art, argued with the art’s own instruments."]
  ]}
],

"i-3": [
  { q: "<span class=\"latin\">Musica est scientia bene modulandi</span>. How does the lesson render it?", a: 2, o: [
    ["The art of singing well", "Two words are altered at once. One of them names a habit of the intellect rather than a knack, and the other is not about the voice at all. Take the Latin word by word."],
    ["The science of composing well", "One word is right, the other is the one the lesson warns is mishandled by a modern ear. Ask what a <span class=\"latin\">modus</span> is before you decide what <span class=\"latin\">modulari</span> does."],
    ["The science of measuring well", "Augustine’s definition, which the Middle Ages did not discard. Both nouns in it are contested, and the lesson spends its length keeping each from being rushed past."],
    ["The measure of good science", "You have turned the sentence inside out. <span class=\"latin\">Scientia</span> is the noun the definition begins from, and the gerund tells you what it is a science <em>of</em>. Construe it again."]
  ]},
  { q: "<span class=\"latin\">Modulari</span> is called a difficult word. What does it mean here?", a: 0, o: [
    ["To measure a motion so that it is well measured", "Augustine applies it to the numbering of time as much as of sound — the feet of verse are measured in the same sense. The word is about measure, not about invention."],
    ["To write a melody, in something like the modern sense", "The lesson names this expressly as the meaning to be refused, and it is the one a modern ear supplies first. Ask what the word shares with <span class=\"latin\">modus</span>, a measure."],
    ["To modulate from one key to another", "That sense belongs to a much later theory of keys, which this course has not built and warns against importing. Nothing in the definition yet supposes a key at all."],
    ["To perform with due restraint", "You have taken the word morally, as of a man who is moderate. The lesson takes it quantitatively, of something done to a motion. Read the sentence just after “difficult word”."]
  ]},
  { q: "A player strikes the right string by custom or by ear. What does the lesson say of him?", a: 3, o: [
    ["He has the science, since the result is correct", "Then the definition would need neither of its two hard words, and the nightingale would be a <span class=\"latin\">musicus</span> too. Ask what Augustine’s first concern is said to be."],
    ["He has no art at all and merely imitates", "The lesson does not strip him of everything — it grants that he strikes the right string. What it withholds is of another order. Re-read the sentence and notice exactly which words are denied him."],
    ["He has the science in a lower degree", "The distinction is not one of degree. It divides the one who possesses the art from the one who merely does the thing, and such a division admits no half measures."],
    ["He does not know why that length is the right length", "The knowing of the cause is the whole difference, and it is why a monochord and a ratio are worth the trouble. Doing the thing and possessing the art are two acts."]
  ]},
  { q: "Why would St. Thomas not quarrel with calling music a science?", a: 1, o: [
    ["Because he holds that all the arts are sciences", "The lesson makes no such sweeping claim, and it would flatten the very distinction Augustine is drawing. Look for the reason actually given, which turns on where science is seated."],
    ["Because science is in the intellect, and a liberal art involves a work that is a product of reason itself", "So the liberal arts are not made liberal by being genteel. They are so because their work is reason’s own, which is what admits harmonics to the quadrivium."],
    ["Because he takes the point on Augustine’s authority", "A claim held on authority and a claim demonstrated are different things, and the lesson supplies a reason rather than a citation. Ask what Thomas says a liberal art has in it."],
    ["Because music demonstrates from sensible experiment", "Experiment is not the ground offered here. This paragraph is about where the art is seated, not about how it gathers evidence. Read the sentences on <span class=\"latin\">scientia</span> and the intellect."]
  ]},
  { q: "What does the lesson name as the work of harmonics?", a: 2, o: [
    ["The performed song", "The lesson names this expressly as what the work is <em>not</em>. A work in the sense meant is a product of reason itself, and it lasts after the singing stops."],
    ["The trained ear", "Training the ear is a habit of sense, and the paragraph has just separated the possessor of the art from the one who does the thing well. Ask what reason produces."],
    ["The known scale", "A product of reason, not of the throat or the fingers. Keep it in view when a later chapter builds a scale: the building is the art’s own work, not a preparation for something else."],
    ["The instrument, rightly tuned", "Tuning is done with the hands upon a thing, and the work in question is a product of reason itself. Ask what the art still has when the instrument is put away."]
  ]},
  { q: "Boethius says the same at the end of his first book. In what words?", a: 0, o: [
    ["The true <span class=\"latin\">musicus</span> is the one who judges by reason", "An act of the intellect, not a skill of the hand — and note that this is a definition of a man, not of a repertoire. The course will hold you to it."],
    ["The true <span class=\"latin\">musicus</span> is the one who sings by rule", "Singing by rule is still singing, and a rule followed is not a judgement made. The distinction being drawn turns on an act of the intellect."],
    ["The true <span class=\"latin\">musicus</span> is the one who has learned the whole of arithmetic", "Arithmetic is presupposed by this art, and having it is not what the definition turns on. The mark named is an act, not a list of prior studies."],
    ["The true <span class=\"latin\">musicus</span> is the one who hears most finely", "A fine ear is a gift of sense, and the point of the whole distinction is that sense is not what makes the man. Ask which power is being named."]
  ]},
  { q: "“Measuring well.” What is measured?", a: 2, o: [
    ["Time only, as in the feet of verse", "That is a part of it, and Augustine’s own five books go that way; the lesson grants as much and then says which way this course goes. Read on past the question."],
    ["The soul’s affections", "Nothing in the definition points to the affections, and a science of them would not belong to the quadrivium at all. Ask what the next chapters are said to be about."],
    ["Sounding motion", "And the next chapters make it definite: high and low, the comparison of two sounds, the lengths of a string. The definition stays empty until they fill it."],
    ["The intervals of the diatonic scale", "A scale is something the art arrives at, and this course refuses to begin from one. What is wanted is the wider thing of which a scale is a measuring."]
  ]},
  { q: "Augustine’s treatise turns for five books to meter. How does the course treat that?", a: 3, o: [
    ["It denies that meter belongs to music at all", "The lesson says the opposite in plain words: it grants meter a place, and then explains why this course goes another way. Read the two sentences after the mention of the five books."],
    ["It follows Augustine there and defers pitch", "The next chapters are announced as high and low and the lengths of a string, which is not meter. Ask which author is named as the quadrivium’s center of gravity."],
    ["It treats meter as a metaphor for pitch", "The lesson refuses metaphor in this very paragraph and takes time to be really numbered. Two things really measured are not a figure for one another."],
    ["Meter is the numbering of time and belongs to the art in a wide sense", "The course follows the quadrivium’s center of gravity, which is Boethius, and numbers pitch — while refusing to pretend Augustine wrote a book about the monochord."]
  ]},
  { q: "“We also will not pretend that ‘measuring well’ is a metaphor.” What is ruled out?", a: 1, o: [
    ["That music has any effect on the soul", "Nothing is said here about effects on the soul, and that would not be a question about the word “measuring” at all. Read the two sentences that stand together, one refusing a pretence and one affirming."],
    ["The reading on which “measure” is only a figure of speech", "The art really measures — which is why a string and a ruler are proper to it, and why the definition can be tested rather than merely admired."],
    ["The use of numbers at all", "The sentence defends measuring rather than retiring it. Ask what would be lost if “measure” were taken as a figure of speech."],
    ["That the art can be taught", "The whole course is a teaching of it, so nothing here could rule that out. The sentence concerns the word “measuring” and how literally it is to be taken."]
  ]},
  { q: "The boxed remark lists what the course will not begin from. Which does it name?", a: 2, o: [
    ["The monochord", "The course leans on the string rather than avoiding it. The box’s refusals are all of a later kind of label — things described there as names for what must first be known in itself."],
    ["The ratios of Boethius", "Ratios are the course’s own instrument, and it reaches them as soon as it can. The refusals in the box are all of labels that come after the things they name."],
    ["The treble clef, the names C-D-E, and “major” and “minor”", "Later labels for things we must first know in themselves. Notice the pattern: each is a notation or a category that presupposes a system this course has not yet built."],
    ["The Greek names of the concords", "The course uses those freely and defends them elsewhere against a more modern word. The box refuses a different vocabulary, one belonging to a much later practice."]
  ]},
  { q: "What else does the boxed remark refuse?", a: 0, o: [
    ["To treat equal temperament as the nature of the intervals, and to treat the ancient authorities as if they agreed", "Where they dispute, the course follows St. Thomas when he has spoken and otherwise leaves the question open rather than inventing a school. Watch for that policy at every later seam."],
    ["To read any author later than Boethius", "The lesson cites St. Thomas, who is later, and the course promises a sixteenth-century dispute of its own. The refusals concern imported categories, not dates."],
    ["To admit that the ancients ever disagreed", "The box says the reverse: it expects disputes and states what to do when it meets one. Read its last sentence, which describes a policy for exactly those places."],
    ["To use a keyboard instrument at any point", "The complaint is against taking the piano’s tuning for the nature of the intervals, not against the instrument. Ask what is fudged, and what is being mistaken for what."]
  ]}
],

"ii-1": [
  { q: "St. Thomas, reading Aristotle’s <span class=\"latin\">De anima</span>, treats sound as what?", a: 1, o: [
    ["A quality of the air, and only indirectly of the body struck", "The medium is affected, and the lesson says so. But the question asks what sound is to a power of the soul — not what it happens to travel through. Those are two different claims about one event."],
    ["The proper object of hearing, as color is of sight", "Which fixes where the art must start. A proper object is what its sense alone reaches, so nothing but hearing can hand this art its subject."],
    ["A common sensible, reached by more than one sense", "A common sensible is one several senses attain — motion, or number. The lesson pairs sound with color, and color is reached by one sense only. Ask what that pairing implies."],
    ["An accident of motion known only by reason", "If sound were known only by reason, the art would not begin where the lesson insists it begins. Read the short sentence that closes that paragraph."]
  ]},
  { q: "“We do not first have a theory and then go looking for a noise.” What order does this insist on?", a: 3, o: [
    ["That theory and sense are simultaneous", "The sentence is about which comes first, and the two words that close the paragraph settle it. Simultaneity would leave the boxed remark nothing to argue."],
    ["That theory is unnecessary in this art", "The lesson gives reason a great deal to do — it is what knows why the sounds stand as they do. What is fixed here is which comes first, not whether both are wanted."],
    ["That the ear judges the ratios", "The lesson assigns the knowing of why to reason using arithmetic, and gives the ear the sound. You have handed one power the other’s office. Read the boxed remark to the end."],
    ["That the art begins from a thing heard, and the mathematics comes to it afterward", "The shape of a middle science, stated as a rule of learning. Reverse it and you are doing arithmetic and hunting for a noise to fit."]
  ]},
  { q: "Why is a stone at rest silent, and the same stone, struck, not?", a: 0, o: [
    ["Because sound is caused: a body is struck or otherwise moved with a certain violence, and the medium is affected so as to be audible", "Notice how little is being claimed. No physics textbook is invoked; the lesson asks only that you notice what you already know."],
    ["Because the stone at rest has no pitch", "Height is a further question, and many things sound without any definite height — the lesson names a scrape and a cough. Ask first what makes anything audible at all."],
    ["Because stone is not a sounding body", "The example is chosen so that one and the same stone does both, which would be impossible if the material settled it. Notice what changed between the halves of the sentence."],
    ["Because the air must be still for sound to travel", "You have made the medium’s stillness the cause, where the lesson makes its being affected the cause. Ask what is done to the air when the stone sounds."]
  ]},
  { q: "“A taut string sounds in a way a heap of wool does not.” What is this for?", a: 2, o: [
    ["To show that strings are the only proper subject of the art", "Bells and sung vowels are named a moment later. The wool is there to make a comparison, not to narrow the art to one instrument."],
    ["To show that sound requires a hard body", "Hardness is not what the lesson picks out, and a sung vowel comes from nothing hard. Ask what the string has that the wool lacks when each is struck."],
    ["To show that not every body sounds equally", "And the lesson adds that no physics textbook is needed for this — only attention to what you already know. The art begins from ordinary noticing."],
    ["To show that the medium matters more than the body", "Both bodies sit in the same air and behave differently, so the difference cannot be laid at the medium’s door. Compare the two bodies, not their surroundings."]
  ]},
  { q: "Some sounds last and have a definite height; others do not. Which examples belong to the second kind, and which kind does the art take?", a: 1, o: [
    ["A bell and a sung vowel; the art takes those", "Both of those stand on the other side of the division — they last and they have a height. Read the two lists again and notice which examples are given no height at all."],
    ["A scrape, a cough, a wave on gravel; the art of harmonics is about the first kind", "Which quietly narrows the subject before any ratio appears. Everything later in the course is about sounds that last long enough to be compared."],
    ["A scrape and a cough; the art takes both kinds equally", "The examples are right and the scope is wrong. The sentence following the lists says plainly which kind harmonics is about, and it does not say both."],
    ["A plucked string; harmonics is about the second kind", "A plucked string lasts and has a definite height, which puts it on the other side of the division. Sort the examples again before deciding which side the art takes."]
  ]},
  { q: "“Acute” and “grave” are the old vocabulary for what?", a: 2, o: [
    ["Loud and soft", "Strength of sound is a different difference altogether, and nothing in the lesson turns on it. Ask which difference the paragraph has just been at pains to introduce."],
    ["Long and short", "Duration is named in the lesson, and it is not what these two words mark. Read the sentence they appear in and see which pair of English words they stand beside."],
    ["High and low", "The old pair has the merit of not sounding like positions in space — which is the very confusion the next sentence goes on to head off."],
    ["Concord and discord", "Those say how two sounds stand together, and only one sound is in question here. Ask how many sounds you need before the word in the lesson applies."]
  ]},
  { q: "Why insist that “high” and “low” are not places in a room?", a: 0, o: [
    ["Because they are differences of the sound itself, as red and blue are differences of color", "The parallel with color is doing real work: it makes height a quality of the thing heard rather than a report of where it came from."],
    ["Because the words were borrowed from Greek notation", "The lesson says nothing about where the English words came from, and its point does not depend on their history. Ask what kind of difference it says they mark."],
    ["Because higher sounds are not literally above lower ones on a staff", "A staff is a piece of later notation, and this course has not introduced one. The point concerns the sounds themselves, before any way of writing them."],
    ["Because the ear cannot locate sounds in space", "The ear locates sounds well enough, and no claim about that is made. What is denied is that these words are reports of location at all."]
  ]},
  { q: "What does the lesson say made the pitched sound you heard?", a: 3, o: [
    ["A body vibrating at a fixed number of hertz", "The count is admitted a little further on as a measure, and the lesson refuses to start there. Say first what the body was doing, in words needing no instrument to state."],
    ["A motion of the air alone", "The air is the medium that carries it, and the lesson names something that was moved. Ask what was set going before the air was affected."],
    ["A single motion that does not return", "A motion that does not return gives a knock, not a lasting height. Look at the word the lesson uses for what this motion does."],
    ["A vibrating body whose motion repeats", "Repetition is what a definite height rests on, and it is also what the later count of cycles counts. The tradition names the motion; physics names its rate."]
  ]},
  { q: "How does the lesson treat the later physics of frequency?", a: 2, o: [
    ["It rejects the count as foreign to the art", "The lesson says the count may be used as a measure, and it quarrels with no acoustics. Its caution is about where to begin, not about what is true."],
    ["It identifies pitch with a number of cycles per second", "That is the identification it declines to begin from. Ask what the lesson says the number measures, and what it says pitch is."],
    ["It allows the count as a measure, while refusing to begin by saying pitch is a number of hertz", "The number measures the motion that is the sound. That is a modest place for it, and it keeps the order of a middle science intact."],
    ["It treats frequency as a metaphor", "Nothing is called a metaphor here, and the count is taken as literally true of the motion. The reservation concerns the order of learning."]
  ]},
  { q: "The boxed remark asks why this order. What would go wrong if the art began from numbers?", a: 1, o: [
    ["The numbers would come out false", "The arithmetic is nowhere in doubt in this course. The box’s worry is about which science you would be doing, not about whether the figures work."],
    ["You would be doing arithmetic and then looking around for a noise that fitted it", "Which would leave the natural subject as decoration. A middle science demonstrates about a real thing, so the real thing must be had first."],
    ["The student would find it too hard", "Difficulty is not the objection. The box gives a reason of another kind, one about how a middle science is put together. Read it through to the end."],
    ["The ratios would have to be taken on authority", "Authority is not what the box guards against here; it is guarding an order. Ask which end a middle science starts from."]
  ]},
  { q: "What does the box give as St. Thomas’s ground for this order?", a: 0, o: [
    ["That all our knowledge begins in the senses", "The ear gives us sound; reason, using arithmetic, knows why these sounds stand to one another as they do. Two distinct offices, and the art needs both."],
    ["That the senses never deceive", "No such claim is made, and the art would be in trouble if it rested on one. What is claimed concerns where knowing starts, not whether sense can err."],
    ["That mathematics is less certain than sense", "Nothing here ranks the two for certainty. The claim is about the order in which knowledge comes to us. Read the box’s last two sentences."],
    ["That hearing is the noblest of the senses", "The lesson pairs hearing with sight and ranks neither, and a ranking would do no work in the argument. Ask what claim about <em>all</em> knowledge is being made."]
  ]}
],

"ii-2": [
  { q: "“One rod is long or short only by comparison.” What does that show about a sound?", a: 2, o: [
    ["That pitch is not a real difference in the sound", "The previous lesson made height a difference of the sound itself, and this one does not take it back. Being known by comparison is not the same as being unreal."],
    ["That a sound must be measured against a fixed standard pitch", "No standard is fixed anywhere in this course, and none is needed to hear that one sound stands above another. The comparison is between the two sounds you have."],
    ["That a sound is called high or low only in relation to another", "Which is why this lesson comes before any ratio: the art’s whole business is with pairs. A single sound in isolation gives the art nothing to work on."],
    ["That high and low are matters of opinion", "A rod’s length is no matter of opinion for being known by comparison, and neither is a pitch. Distinguish what a thing is from what it takes to see it."]
  ]},
  { q: "What does the word <em>interval</em> mean at this stage?", a: 0, o: [
    ["A gap, a standing-apart: these two pitches, as compared", "Nothing is counted yet and nothing is named. That bareness is deliberate — it leaves room for the ratios to arrive as a discovery rather than a definition."],
    ["A distance on a keyboard", "That is a measurement taken on an instrument this course has not introduced, and it presupposes a scale already laid out. Ask what the word says before any instrument exists."],
    ["A number of semitones", "Counting semitones supposes a scale already divided, which you do not yet have. Read the sentence that says what the word does <em>not</em> yet mean."],
    ["A concord", "Some intervals blend and some grind, and the word covers both without prejudice. You have narrowed it to one of its sorts before the sorts have been named."]
  ]},
  { q: "Play a sound, then another. How many outcomes does the lesson allow, and what are they?", a: 3, o: [
    ["Three: unison, concord, discord", "You have jumped a stage. Blending and grinding are noticed only after the two are found to differ at all. Read the sentence directly after “Play a sound, then another.”"],
    ["Three: same, higher, lower", "Higher and lower are two ways of differing, and the lesson does not yet separate them. It draws its line one step earlier and more simply. Look at the word “Either”."],
    ["As many as there are semitones between them", "Semitones divide something not yet built, and the lesson refuses that count outright at this stage. The division it draws needs no counting whatever."],
    ["Two: either they are the same in height, or they are not", "A division of that bareness can be made by anyone with ears, which is exactly why it is put first. Everything the art builds hangs from this one cut."]
  ]},
  { q: "What is unison?", a: 1, o: [
    ["The smallest interval", "An interval was said to be a standing-apart, and what you have named has no apartness in it. Ask whether there are two different sounds here, or one."],
    ["The equality of pitches — one sound", "Which is why the arithmetic puts equality before all inequality and gives it this as its sounding image. The two lessons meet exactly here."],
    ["Two sounds an octave apart, since they blend completely", "Complete blending is not sameness of height, and no named interval has been reached yet. Ask what the word itself says: one <em>what</em>?"],
    ["Any pair of sounds that blend", "Blending is what the art will call concord, and concords are made of sounds that differ. Notice how many sounds the word before you names."]
  ]},
  { q: "Why is unison “not yet a concord in the sense the art cares about most”?", a: 2, o: [
    ["Because 1:1 is not a ratio", "The arithmetic treats equality alongside the kinds of inequality and gives it a place rather than denying it one. The reason here is about hearing two things blend."],
    ["Because it is too easy to sing", "Ease of performance is a fact about voices, and nothing is settled by it in this art. Ask what a blending requires before it can happen at all."],
    ["Because there are not yet two different sounds to blend", "Concord is a relation between things that differ, so sameness cannot be its best case. Note that the lesson withholds the title without withholding the importance."],
    ["Because it is a discord", "It is nothing of the kind — a discord is a pair that remains two, and restless. You have gone past the difficulty instead of into it."]
  ]},
  { q: "If unison is not the chief sort of concord, what office does the lesson give it?", a: 0, o: [
    ["It is the measure against which difference is heard", "A measure need not be a member of what it measures. Keep this in mind when equality turns up at the head of the kinds of ratio."],
    ["It is the first of the intervals", "An interval was defined as a standing-apart, and here nothing stands apart. Granting it that title would undo the division the lesson has just drawn."],
    ["It is a limiting case of no use to the art", "The lesson gives it an office in the very sentence that withholds the other title. Read that sentence to its end rather than stopping at the withholding."],
    ["It is the last thing the art arrives at", "It is put first, before any difference is examined, precisely because of the work it does. Ask why a lesson on comparison would open with sameness."]
  ]},
  { q: "After the second listening, the lesson asks you to notice one thing. What?", a: 3, o: [
    ["Which of the two sounds is higher", "You could report that much and still miss what is asked, which concerns the two sounds taken together rather than their order. Read the question put just before the listening."],
    ["How many semitones lie between them", "The lesson says in as many words that you need no vocabulary yet, and a count of semitones is vocabulary of the heaviest sort. Read what it does ask you to notice."],
    ["Whether the pair is a fifth or a fourth", "Names of intervals are exactly what is postponed here. What is asked for is a difference you can hear while knowing no name at all."],
    ["That some pairs blend, almost into a single richer sound, and some remain two, and restless", "That is the whole datum the art will later explain by ratio. Get it firmly by ear now, because every demonstration ahead is answerable to it."]
  ]},
  { q: "What will the art call these two kinds of pair?", a: 2, o: [
    ["Unisons and intervals", "Those say whether two pitches are the same or differ, which is a division made earlier. The pairs in question here already differ."],
    ["Melodies and chords", "Those distinguish sounds heard in succession from sounds heard at once, and the boxed remark keeps that division separate from this one. Ask what is being divided: how they are played, or how they sound together."],
    ["Concords (consonances) and discords (dissonances)", "The names are supplied and then set aside — the lesson insists they can wait. They will be earned later by ratio rather than by assertion."],
    ["Multiples and superparticulars", "Those are kinds of ratio, and no ratio has been assigned to anything you have heard. What is wanted are names for what the ear reports."]
  ]},
  { q: "“The names can wait. The hearing cannot.” What is being asked of you?", a: 1, o: [
    ["To memorise the vocabulary before listening again", "The sentence sets the two in the opposite order of urgency. Read it once more and ask which of them it says may be postponed."],
    ["To have the experience now, since the terms will be idle without it", "A name laid over an experience you have not had is a counter you cannot spend. The course is built so that every term arrives after the thing it names."],
    ["To distrust the names when they come", "Nothing casts doubt on the names; the whole course is arranged to earn them. What is said is which comes first, not which is trustworthy."],
    ["To wait for a scale before listening at all", "The lesson has just had you listen twice, with no scale and no vocabulary. Ask what it says cannot wait."]
  ]},
  { q: "The boxed remark distinguishes two ways a pair of pitches may be heard. Which does the liberal art know?", a: 3, o: [
    ["Only in succession, since melody is the older practice", "The box makes no claim about which practice is older, and it says the blending that reveals a concord is often clearer the other way. Read the sentence that opens the box."],
    ["Only at once, since blending needs simultaneity", "Blending is indeed often clearer that way, and the box says so — from which it does not follow that the other way falls outside the art. Read the sentence that names both."],
    ["Neither, since the art is about single sounds", "The whole lesson is about two sounds compared. Ask what a pair could possibly be if not heard in one of the two ways the box names."],
    ["Both: one after the other, as in a melody, and at once, as in a chord", "The art claims both, and then chooses one to start with for a reason of evidence: the blending shows itself more plainly when the two sound together."]
  ]},
  { q: "Why does the box say melody must wait?", a: 0, o: [
    ["Because melody will come when there is a scale to walk on", "Which sets the order of the chapters ahead: intervals first, then a scale built from them, and only then movement along it."],
    ["Because melody belongs to practice, not to the liberal art", "The box says the liberal art knows sounds heard one after another, so melody is not being put outside it. What is missing at this point is something to move upon."],
    ["Because succession is harder to hear than simultaneity", "The box’s remark about clearness concerns where a concord first shows itself, not what melody requires. Ask what melody needs that has not been built."],
    ["Because the ear judges melody unreliably", "No such doubt about the ear is raised anywhere in this lesson. The reason given is that something is still missing, and it is not a faculty."]
  ]}
]

});

/* ---- C ---- */
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"iii-1": [
  { q: "The lesson opens by asking how we shall measure high and low ‘instead of merely noticing them.’ What is the force of that contrast?", a: 1, o: [
    ["Noticing pitch is an error of the untrained ear, which measurement corrects", "The lesson never says the ear errs; it takes what the ear reports as the very thing to be accounted for. Ask what measuring adds to a report that is already true."],
    ["Anyone with ears notices that one sound is higher; the art wants a quantity that can be compared, so that the difference may be stated and not merely felt", "And the quantity chosen is a length, which can be halved and thirded and compared exactly. Notice how much of the art follows from picking something measurable to vary."],
    ["Only trained musicians notice high and low at all, so the untrained must measure instead", "Noticing high and low is common to everyone, and the lesson assumes you have done it since childhood. The contrast drawn is not between two classes of men. Re-read the first sentence."],
    ["High and low are qualities, and qualities cannot be studied", "If that were so the lesson would have no subject and would stop at its first line. It does the opposite: it proceeds. Ask what it does with the quality it began from."]
  ]},
  { q: "What does this lesson name as the instrument of the art, and why that one?", a: 0, o: [
    ["The monochord: one string over a board, stopped at a chosen length, so that a single quantity may be set and changed at will", "One string, because one string is enough to vary one quantity. The instrument is chosen for what it can hold still, not for what it can play."],
    ["A rank of hammers of graded weight, as in the smithy", "Those belong to a story the lesson treats with reserve, saying plainly that hammer-weight does not behave as the story requires. Ask what the lesson does with that story, and what it says the story fails to show."],
    ["A choir of trained voices, since the ear is the judge", "Voices can sound the intervals but cannot display the quantity that produces them; no number can be read off a throat. Ask what the art needs to have before it, measured, as well as heard."],
    ["A rod of marked length, cut into pieces", "Cutting a rod gives you lengths but no sound, and the art must hear what its numbers do. Ask what the lesson requires the measured thing to do besides submit to measurement."]
  ]},
  { q: "The whole string sounds one pitch; stopped halfway, the freed half sounds another. What has been altered between the two soundings?", a: 3, o: [
    ["The tension, which the bridge increases", "A bridge set against the string changes where it may vibrate, not how hard it is drawn. Look at the list the lesson gives of what stays the same, and see whether this stands on it."],
    ["The thickness of the vibrating part", "The wire is as thick as it was; stopping it does not thin it. Read the lesson’s list of what is held fixed, and count the items on it."],
    ["The string itself, since half a string is a different string", "It is the same wire throughout, and the lesson says so in as many words. Half of a thing is not another thing; ask what quantity of it has changed."],
    ["The sounding length, and nothing else", "That is the whole design of the instrument. Because one thing only has moved, whatever changed in the sound may be laid at its door — the method of a middle science, worked with a piece of wire."]
  ]},
  { q: "The lesson strings together three claims: about a length, about two lengths, and about pitches. Which order does it give?", a: 2, o: [
    ["A length is a ratio; two lengths compared make a magnitude; the pitches follow the magnitude", "You have swapped the two words. One of them belongs to a single thing measured, the other to a comparison of two. Settle which is which before going further."],
    ["The pitches are the magnitudes, and the lengths are ratios taken among them", "This puts the derived thing first and the measured thing second. On the instrument you set one of these by hand; ask which, and it will not be the sound."],
    ["A length is a magnitude; two lengths compared make a ratio; the pitches stand in that same ratio, taken the other way about", "Every later computation in this course runs along that chain. Keep the last clause especially: same ratio, opposite order, the shorter string the higher sound."],
    ["A length is a magnitude; two lengths compared make a ratio; the pitches stand in exactly that ratio, in the same order", "You have the first two steps and have dropped the turn in the third. Ask which string, the long or the short, gives the higher sound, and then see whether the order can stand."]
  ]},
  { q: "An open string measures 12 units. The lesson speaks of a sounding length ‘three-halves as short.’ Where is the bridge set?", a: 0, o: [
    ["At 8 units", "Three-halves as short is two-thirds as long: twelve taken twice and divided by three. The lengths then stand as 12 to 8, that is, as 3 to 2."],
    ["At 18 units", "You have multiplied where you should have divided, and the result is longer than the string you began with. A stopped length cannot exceed the open one; check the direction of the operation."],
    ["At 9 units", "That is twelve less a quarter of itself, which is not what ‘three-halves as short’ asks for. Turn the phrase into a fraction of the whole string before you divide."],
    ["At 6 units", "Six is half of twelve, and the halving is the other stopping this lesson names. Being three-halves as short is a smaller shortening than that; convert the phrase into a fraction before setting the bridge."]
  ]},
  { q: "Dragging the bridge, the lesson says, you are ‘not playing a song.’ What are you doing?", a: 3, o: [
    ["Training the ear to recognise intervals by their names", "Naming comes later, and at this point the lesson has given you a name for nothing you hear. Ask instead what is being varied and what is being watched while it varies."],
    ["Testing whether the string is in tune", "There is nothing for it to be in tune with: one string alone has no standard but itself. Ask what two things the exercise sets side by side."],
    ["Learning to place the bridge accurately by hand", "Accuracy of hand is a knack, and the lesson is not teaching a knack. Ask what the exercise is meant to show about the relation between two quantities."],
    ["Changing one quantity and hearing another quantity change with it", "That sentence is the method of the whole art in a dozen words. What makes this a science is not the sound but the dependence of one measured thing upon another."]
  ]},
  { q: "Who, according to the lesson, tells the story of Pythagoras and the hammers?", a: 1, o: [
    ["Ptolemy and Euclid", "Neither is named on this page at all. Look at the sentence that introduces the smithy and see whose names stand in front of it."],
    ["Nicomachus and Boethius", "The pair recurs throughout this course: the Greek manual and the Latin treatise that carried it into the Middle Ages. Both are named again in the sources line at the foot of the page."],
    ["St. Thomas, in his commentary", "He appears elsewhere in this course, and not here. The tellers of the story are named in the boxed remark; go back and read its opening words."],
    ["The lesson gives no source for the story", "It gives two, in the very first words of the boxed remark, and repeats them in the sources line. Read the box again from its first sentence."]
  ]},
  { q: "How does the lesson judge the smithy story considered as a piece of metallurgy?", a: 2, o: [
    ["Sound, since heavier hammers do sound lower", "The lesson makes no such concession; it says flatly that the behaviour the story requires is not the behaviour of hammers. Read the sentence that weighs the story as metal-work."],
    ["Irrelevant, since metallurgy is not a liberal art", "The lesson does not dismiss the question on grounds of discipline. It answers it, and answers it about hammers. Look for what it actually says of the weights."],
    ["Doubtful, because hammer-weight does not behave as the story needs", "The story wants weight to stand to pitch as length does, and it does not. Notice that the lesson names the defect rather than passing over it, and keeps the story for a different reason."],
    ["Unknown, since no one has tested it", "The verdict is given plainly, not left open. Re-read the sentence beginning ‘As a piece of metallurgy’ and see how firm it is."]
  ]},
  { q: "Why does the lesson keep the story even so?", a: 0, o: [
    ["Because as teaching it says the right thing: the concords are not arbitrary tastes but track number", "A false account of the how may still carry a true doctrine of the what. The lesson keeps the doctrine and hands the demonstration over to the string."],
    ["Because tradition must be preserved whether or not it is true", "The lesson gives a reason, and a reason of use rather than of reverence. Ask what the story manages to say correctly, apart from the smithy."],
    ["Because the story is charming and holds a beginner’s attention", "Charm is not the merit claimed for it. The claim concerns the content of what the story asserts. Read again what the box says the story ‘says.’"],
    ["Because the authority of Pythagoras settles the ratios", "This course settles ratios by demonstration on a measured string, not by a name. And the lesson has just called part of the story doubtful, so authority is plainly not doing the work."]
  ]},
  { q: "The lesson calls the story ‘the traditional <span class=\"latin\">inventio</span> of the science.’ What does that mean?", a: 3, o: [
    ["The invention, that is, the fiction, made up to decorate the science", "The Latin word does not mean a fabrication, and the lesson is not calling the story an ornament — it keeps it for what it teaches. Consider what the verb <span class=\"latin\">invenire</span> does to a thing."],
    ["The founding principle from which the science is deduced", "Nothing in this course is deduced from a smithy, and the lesson makes the string, not the story, do the demonstrating. Ask what kind of account the word names."],
    ["The order in which the science ought to be taught", "That would be an order of learning, whereas the phrase concerns something that happened once, at the beginning. Ask whether the word points to an order or to an event."],
    ["The received account of how the science was found — its story of discovery", "The word is the noun of finding. A science may have a true doctrine and a legendary account of its finding; this lesson separates the two and keeps them apart."]
  ]},
  { q: "‘We will trust the string.’ What is the ground of that preference?", a: 1, o: [
    ["That strings were the instruments the Greeks actually played", "What the Greeks played is a fact about their music, not about demonstration, and the lesson’s reason is a reason about showing. Ask what the string does that the alternative fails to do."],
    ["That the string shows the number cleanly: one quantity is varied and the sound follows it, with nothing else intervening", "Trust here is earned by transparency, not by antiquity. Everything in the chapters that follow is measured on this one wire, which is why a whole lesson is spent on it."],
    ["That a string can be tuned and a hammer cannot", "Tuning is not the issue; the lesson holds tension fixed throughout precisely so that tuning shall not come into question. Ask what the lesson says the string displays."],
    ["That the string is older than the smithy", "No claim of age is made anywhere on the page, and the lesson has already refused to decide by antiquity. Look for a reason drawn from what can be measured and seen."]
  ]}
],

"iv-1": [
  { q: "The lesson introduces 3:2 by saying it comes ‘after the double.’ After in what sense?", a: 2, o: [
    ["It sounds less pleasant than the double, and so ranks lower", "Pleasantness is not what is being ranked, and the lesson later denies that the concords were settled by liking. Ask what property of the numbers themselves puts one before another."],
    ["It is heard later in the course, and so comes after in the telling", "The order of the pages follows the order of the matter, not the reverse. Ask what it is about 3 and 2 that earns them the place they are given."],
    ["It is the next simplest inequality of whole numbers after 2:1", "Simplicity of number, not of sound, fixes the order. That is how this art can say which concord is first without consulting anyone’s taste."],
    ["It is produced by stopping the string further from the end", "Where the bridge falls is a consequence, not a reason; the same argument would order the concords by carpentry. Ask what makes one pair of numbers stand before another."]
  ]},
  { q: "Where is the string stopped to sound the <span class=\"latin\">diapente</span>?", a: 1, o: [
    ["So that the sounding length is three-halves of the open string", "That would leave the sounding part longer than the whole it was taken from, which the instrument cannot do. Turn the ratio into a fraction of the open length and see which way it points."],
    ["So that the sounding length is two-thirds of the open string", "Two-thirds sounding, and the lengths therefore 3 to 2. Keep the habit of naming the fraction of the string and the ratio of the lengths in one breath."],
    ["So that the sounding length is three-quarters of the open string", "That fraction belongs to the other concord this lesson introduces, and it gives a tighter interval than the one asked for. Read again which fraction the lesson attaches to 3:2."],
    ["So that the sounding length is one-third of the open string", "You have taken the part damped off rather than the part left sounding. Ask which portion of the wire is free to vibrate when the bridge stands two parts along in three."]
  ]},
  { q: "The lengths are 3:2, open to stopped. How do the lesson’s words run for the pitches?", a: 0, o: [
    ["3:2 the other way about — stopped to open", "The ratio keeps its magnitude and reverses its order. The shorter string is the higher sound, so the greater term of the pitch comparison belongs to the stopped side."],
    ["3:2, open to stopped, exactly as the lengths run", "Then the longer piece of wire would be the higher sound. Sound the open string and the stopped one, ask which you would call higher, and then look at the order again."],
    ["2:3, stopped to open, since the pitch ratio is the reciprocal", "You have inverted the terms and the order both, and the two inversions undo each other. Write down which sound is higher, then which term of a ratio names it."],
    ["9:4, since inverting squares the ratio", "Nothing in the operation squares anything; one comparison is being read in the opposite order, not compounded with itself. Look at what inverting a ratio actually does to its two terms."]
  ]},
  { q: "Which pairing of names and ratios does the lesson give?", a: 3, o: [
    ["3:2 is the <span class=\"latin\">diatessaron</span>; 4:3 is the <span class=\"latin\">diapente</span>", "You have crossed the two. One name travels with the two-thirds stopping and the other with the three-quarters; go back and see which sentence introduces which."],
    ["3:2 is the <span class=\"latin\">diapason</span>; 4:3 is the <span class=\"latin\">diapente</span>", "The first name belongs to the concord of the preceding chapter, sounded at half the string, and neither stopping on this page falls at the halfway point."],
    ["3:2 is the tone; 4:3 is the <span class=\"latin\">diapente</span>", "The lesson calls both of its intervals concords, and neither is called a step. Look at the two sentences that introduce the stoppings and take the name each one gives."],
    ["3:2 is the <span class=\"latin\">diapente</span>, the fifth; 4:3 is the <span class=\"latin\">diatessaron</span>, the fourth", "Keep the Greek beside the ratio rather than beside the modern ordinal. The ratio is what is demonstrated on the string; the name is a label fastened to it afterwards."]
  ]},
  { q: "How does the lesson describe the way the <span class=\"latin\">diapente</span> blends?", a: 2, o: [
    ["So completely that the two seem one sound raised", "That was the course’s description of the concord of the preceding chapter, and this lesson says expressly that the blending here is not of that kind. Read the sentence after the first widget."],
    ["It does not blend at all; the two sounds merely stand side by side", "The lesson calls it a concord and says that it blends. You have described what the art will say of a step, not what it says here."],
    ["It blends, but not as the <span class=\"latin\">diapason</span> blends: you hear two, and you hear that they belong", "Two, and evidently together. Set that beside the earlier description, where the higher seemed to be the lower raised, and you have the difference between the first concord and the second."],
    ["It blends only when the sounding length is very short", "Nothing on the page makes blending depend on absolute length; the whole doctrine concerns the ratio between two lengths. Ask what the lesson says you hear, in its own words."]
  ]},
  { q: "The lesson observes that many who cannot yet match a 2:1 will still find a 3:2 with the voice. What does it draw from this?", a: 0, o: [
    ["That the fifth is the other great standing-apart in song", "An observation about singers set beside the arithmetic, not in place of it. The ratio remains the reason; the singing is a sign that the ratio is no arbitrary choice."],
    ["That the fifth is easier to hear than the double, and therefore more fundamental", "Ease in the throat is not this page’s measure of what comes first; it is at pains to order the concords by number. Ask what the remark is a remark about."],
    ["That untrained singers are unreliable and want correction", "The remark is admiring rather than corrective: it notes what such singers find, not what they get wrong. Read the sentence again and see whom it is about."],
    ["That the voice, not the string, is the true instrument of the art", "The chapter before settled the instrument, and this page goes on measuring stoppings throughout. The remark is an aside about song, not a change of method."]
  ]},
  { q: "At what fraction is the string stopped for the <span class=\"latin\">diatessaron</span>, and what are the lengths?", a: 3, o: [
    ["At four-thirds; the lengths are 4:3", "The ratio is right and the fraction cannot be: four-thirds of the string is more string than there is. Convert the ratio into a part of the whole and see which term goes underneath."],
    ["At two-thirds; the lengths are 4:3", "That fraction was already spent on the concord this lesson introduces first, and two different stoppings cannot stand at one point. Check the fraction against the ratio."],
    ["At one-quarter; the lengths are 4:1", "You have taken the piece damped off rather than the piece left sounding, and the ratio has followed the mistake. Ask which part of the wire is free to vibrate."],
    ["At three-quarters; the lengths are 4:3", "Three parts sounding out of four. Set the three stoppings side by side — the half, the two-thirds, the three-quarters — and the ratios 2:1, 3:2, 4:3 read straight off the wire."]
  ]},
  { q: "How does the lesson compare the fourth with the fifth as heard?", a: 1, o: [
    ["The fourth is not really a concord, but is admitted by custom", "The lesson calls it a concord in the same breath in which it names it, and counts it among the first three. Read the sentence that follows the second widget."],
    ["The fourth is a concord, and tighter, less open, than the fifth", "A difference of character within concord, not a difference between concord and discord. The art uses both, and a later chapter takes the fourth in particular and divides it."],
    ["The fourth is the more open and spacious of the two", "You have the comparison the wrong way about. Sound both against the same open string and ask which of them feels the more closed in."],
    ["The two are alike in character and differ only in ratio", "Then the lesson would not have troubled to describe how the second one sounds. It says something definite about the character of the fourth; find that clause."]
  ]},
  { q: "On what ground does the lesson say 2:1, 3:2 and 4:3 are the first concords?", a: 2, o: [
    ["Because a committee of composers agreed upon them", "The lesson raises that possibility only to deny it in as many words. Read the sentence beginning ‘They are not chosen’ and see what it puts in place of choosing."],
    ["Because no one has ever called any other ratio a concord", "The page names a later writer who argued for at least one more, and calls the argument a real dispute. Look for a positive reason rather than a claim of monopoly."],
    ["They are the first multiple and the first two superparticulars, and they are the concords the ear most readily grants", "An arithmetical order that the ear confirms. Both halves matter: the numbers give the ranking, and the hearing shows the ranking is no private arrangement."],
    ["Because they are the only ratios a monochord can sound", "A monochord will sound whatever ratio you set the bridge to, and later lessons set it to a good many. Ask what distinguishes these three among all the ratios available."]
  ]},
  { q: "What does the lesson say of 5:4 and of writers such as Ptolemy?", a: 0, o: [
    ["That whether such ratios should be counted concords is a real dispute, but not the first question", "The course marks the dispute and keeps it in its place in the order of learning. You will meet 5:4 again when the ditone is computed and found not to equal it."],
    ["That Ptolemy was mistaken, since only the first three are concords", "The lesson grants that the question is genuine rather than closing it. Weigh the two short sentences that follow the mention of 5:4 and see what each concedes."],
    ["That 5:4 is a concord, so the list of three is incomplete", "The page neither rules it in nor rules it out; at this stage it declines to decide. Ask what a course may do with a question besides answering it."],
    ["That the dispute is merely verbal and dissolves on inspection", "One word in the lesson’s verdict on the dispute forbids that reading. Find the adjective it fastens to the word ‘dispute.’"]
  ]},
  { q: "A string 12 units long is stopped for each of the three first concords. At what lengths does the bridge stand?", a: 3, o: [
    ["6, 4 and 3 units", "You have divided by the greater term of each ratio instead of taking the fraction the lesson names. Ask what part of the whole is left sounding for each concord, then apply it to twelve."],
    ["24, 18 and 16 units", "Every one of these is longer than the string you began with. You have multiplied where the fraction called for taking a part; check the direction before dividing."],
    ["6, 8 and 10 units", "The first two follow the fractions named on the page and the third answers to no stopping the lesson gives. Work out three-quarters of twelve and compare."],
    ["6, 8 and 9 units", "Half, two-thirds, three-quarters. Against the open twelve they give 12:6, 12:8 and 12:9 — that is, 2:1, 3:2 and 4:3, read off in whole numbers."]
  ]}
],

"iv-2": [
  { q: "The boxed remark warns against a particular error in compounding. What is it?", a: 3, o: [
    ["Measuring by ratio instead of by leftover inches", "The box says the art does measure by ratio, and says it approvingly. You have taken its recommendation for its warning; read the last two sentences of the box and see which is which."],
    ["Comparing lengths rather than pitches", "The whole method compares lengths and reads pitches off them, and nothing in the box objects to that. The warning concerns an operation performed on two intervals, not the choice of quantity measured."],
    ["Using a rod at all, since the art forbids physical measurement", "The course has spent a chapter on a measured string and will spend more; measuring is its method. The box contrasts two ways of handling the measurements, not measurement with none."],
    ["Adding string-lengths, or the leftover bits of them, instead of multiplying ratios", "Ratios compound by multiplication; inches accumulate by addition. Confuse the two and you will arrive at a pitch that does not exist, which is why the art is filed under arithmetic."]
  ]},
  { q: "The stopping at two-thirds and the stopping at one half: what interval lies between those two sounds, and how is it got?", a: 0, o: [
    ["A fourth, since (2/3) : (1/2) = 4:3", "Two-thirds divided by one half is two-thirds multiplied by two, which is four-thirds. So the road from the fifth up to the double is exactly a fourth."],
    ["A fifth, since the two-thirds stopping is where the fifth was found", "Two-thirds gives a fifth measured from the open string, not measured from the half. Divide two-thirds by one half and see what number comes out before you name it."],
    ["A tone, since the two stoppings lie close together on the wire", "Nearness on the wire is not an interval; the interval is whatever the division of the two lengths yields. Perform the division on the fractions themselves rather than eyeing the gap."],
    ["1:6, since two-thirds less one half is one-sixth", "You have subtracted the fractions, which gives a length of wire and not a ratio of pitches. Two lengths are compared in this art by division; try it that way."]
  ]},
  { q: "In the lesson’s own worked example the fifth is taken first and the fourth above it. Which three sounds are used?", a: 2, o: [
    ["The open string, three-quarters, and one half", "Those are three real sounds and the middle one is a genuine stopping of this art, but it is not the arrangement the lesson works through. Re-read the sentence after the equation and note which stopping it names first."],
    ["The open string, one half, and one quarter", "That carries you past the double and into a second span, which is a different compounding altogether. The example on this page stays inside a single diapason; see where it stops."],
    ["The open string, two-thirds, and one half", "Open to two-thirds is the fifth; two-thirds to one half is the fourth; open to one half is the diapason. Three sounds, two steps, one span."],
    ["The open string, two-thirds, and one third", "Work out the ratio from two-thirds to one third: it comes to a double all by itself, so your two steps together overshoot the span the example fills. Compute before you choose."]
  ]},
  { q: "What is the tetractys?", a: 1, o: [
    ["The four concords of the art, set in order", "The art counts three first concords, not four, and the tetractys is no list of intervals at all. Look at what the word is said to be a heap of."],
    ["The triangular heap of the first four numbers", "One, two, three, four, set in a triangle. The lesson’s interest in the figure is entirely in which ratios those four numbers make available."],
    ["A square array of ten counters", "The count of ten is right and the shape is not — and the lesson warns against making the ten the point in any case. Look at the word it uses for the figure."],
    ["The tetrachord under another name", "Two similar-sounding words for two different things: one is a figure of counters, the other a stretch of sound to be divided. Check what this one is said to be made of."]
  ]},
  { q: "What does the lesson say the tetractys claim is <em>not</em>?", a: 3, o: [
    ["A claim about number at all; it is a claim about the ear", "The whole paragraph concerns what can be formed from 1, 2, 3 and 4. Ask what the lesson says the observation is an observation about, in the last sentence of that paragraph."],
    ["A claim of the Pythagoreans; the lesson credits it to Boethius", "The page names the Pythagoreans as the ones who pointed to the figure. Read the sentence that introduces it and see whose gesture it is."],
    ["A geometrical figure, since it has no shape", "It is described as triangular, so shape is exactly what it has. The disclaimer concerns what significance is claimed for the figure, not what it looks like."],
    ["A mysticism about the number ten; it is an observation about which ratios come first", "The lesson lets the Pythagoreans point at the figure, then states the point in plain arithmetic. Notice that it also concedes a limit: the four numbers do not yield every later interval."]
  ]},
  { q: "From the numbers of the tetractys the lesson forms 4:1. What is it?", a: 0, o: [
    ["The double diapason — two diapasons compounded, since (2:1)×(2:1)=4:1", "Multiplying a ratio by itself compounds the interval with itself. Four to one is therefore two doublings, not one doubling made twice as large."],
    ["A quadruple diapason, four times as large an interval", "Intervals do not grow by multiplying their size as a magnitude, and compounding twice does not make anything four times anything. Ask how many doublings 4:1 actually contains."],
    ["A fourth above a diapason", "The fourth is 4:3, and the numeral four standing in a ratio does not by itself make an interval a fourth. Compound the double with itself and see what ratio comes out."],
    ["The interval between the first and the fourth counter of the figure", "Counters in a heap are not sounds and have no interval between them; the figure supplies numbers, and the numbers are then made into ratios. Form 4 to 1 and ask what compounding yields it."]
  ]},
  { q: "And 3:1 — what does the lesson call it, and how is it compounded?", a: 2, o: [
    ["A triple diapason: (2:1)×(2:1)×(2:1)", "Compounding the double three times gives a ratio with an eight in it, not a three. Multiply the three out before naming the result."],
    ["The diapason plus a fourth: (2:1)×(4:3)", "Multiply that out and you get eight to three, which is not the ratio asked about. Do the multiplication first and compare it with the target before choosing."],
    ["The diapason-plus-fifth: (2:1)×(3:2)=6:2, that is 3:1", "Six to two reduces to three to one, and reducing is part of the arithmetic rather than an optional tidiness. Compound the other way about and the same 3:1 appears."],
    ["5:3, since a diapason and a fifth are 2:1 and 3:2 added term by term", "Adding term to term is no operation on ratios at all, and the boxed remark on this very page forbids it. Compound the two properly and see what you get."]
  ]},
  { q: "What limit does the lesson set upon the tetractys?", a: 1, o: [
    ["The four numbers yield the concords but no further ratios whatever", "The page forms two more ratios from them in the same paragraph. Count how many the lesson says can be made from the four before deciding where the limit falls."],
    ["You cannot form every later interval from the four numbers without further work", "The claim is about firstness, not about sufficiency. Later lessons compound and divide these ratios to reach intervals that 1, 2, 3 and 4 do not hand you directly."],
    ["The four numbers yield nothing until the number ten is added to them", "The lesson goes out of its way to say the ten is not the point. Look at what it grants the four numbers do yield, and where it says the yielding stops."],
    ["The tetractys holds for lengths only, not for pitches", "Lengths and pitches stand in the same ratios read in opposite order, as the earlier chapter established, and nothing here confines the figure to one of them. Find the sentence that states the limitation."]
  ]},
  { q: "Why does the boxed remark say the art belongs to arithmetic rather than to a merely geometric cutting of a rod?", a: 0, o: [
    ["Because intervals are compounded by multiplying ratios, an operation upon numbers, and not by laying lengths end to end", "A rod may be cut and its pieces added, which gives sums of inches. The art needs products of ratios, and products are the business of arithmetic."],
    ["Because geometry cannot handle ratios at all", "Ratio is a thoroughly geometrical notion as well as an arithmetical one, and the box does not say otherwise. Its objection is to a particular way of handling the rod."],
    ["Because the monochord is a numbered instrument and not a measured one", "The monochord is measured throughout, and the lesson before this one insisted upon it. The distinction drawn here is between two operations, not between counting and measuring."],
    ["Because arithmetic is the higher of the two arts", "No ranking of the arts is offered here, and a ranking would not explain why one of the operations gives the wrong pitch. Look for a reason drawn from what compounding does."]
  ]},
  { q: "Compound a fourth with a fourth. What ratio results?", a: 3, o: [
    ["8:6, that is 4:3 over again", "You have added the terms of the two ratios instead of multiplying them, and got back the interval you began with — which should itself have warned you. Compounding is multiplication; do it."],
    ["8:3", "That is four-thirds doubled as a fraction, not four-thirds multiplied by itself. Multiplying a number by two and multiplying it by itself are different operations; perform the second."],
    ["16:6", "You have multiplied the terms above and added those below. Whatever is done must be done to both terms alike; carry the multiplication through underneath as well."],
    ["16:9", "Four-thirds times four-thirds. Note that this is not a ratio the tetractys hands you: it wants a nine and a sixteen, and so belongs to the further work the lesson mentions."]
  ]},
  { q: "Would a fourth taken first, with a fifth above it, also give a diapason?", a: 1, o: [
    ["No: the fifth must come first, being the larger concord", "Multiplication does not care which factor is written first, and the lesson’s operation is multiplication. Ask whether the product of two numbers depends on the order you set them down."],
    ["Yes: (4:3)×(3:2) is the same product as (3:2)×(4:3), namely 2:1", "The order of compounding does not change the span, though it changes the sound of the middle. In the one case the middle stopping falls at three-quarters, in the other at two-thirds."],
    ["No: the two compound only in the order the lesson gives", "Then the art would have an arithmetic of its own, unlike everybody else’s. Work the product both ways on paper and see whether the two results differ."],
    ["Yes, but the result is 12:6, a slightly different interval from 2:1", "Twelve to six and two to one are one ratio written twice; reducing does not alter a comparison, it only tidies the writing. Divide both terms by six and look."]
  ]}
],

"v-1": [
  { q: "To divide one ratio by another — 3:2 by 4:3, say — what does the lesson do?", a: 1, o: [
    ["Subtracts term from term: 3−4 above, 2−3 below", "The words ‘plus’ and ‘minus’ are used of intervals, but the operations behind them are not addition and subtraction of the terms. Look at the line of arithmetic the lesson actually writes out."],
    ["Inverts the divisor and multiplies: (3:2)×(3:4)", "The same move as dividing by a fraction. Get it into the hand now: the remnant that fills out the tetrachord is obtained by exactly this operation."],
    ["Inverts the dividend and multiplies: (2:3)×(4:3)", "You have turned over the wrong one of the two. Carry it through and the terms come out the other way up, which would put the leftover on the wrong side of unity."],
    ["Divides term by term: 3÷4 above, 2÷3 below", "That leaves two quotients and no single comparison. A ratio is one thing, and dividing one ratio by another must yield one ratio; look at the line the lesson sets down."]
  ]},
  { q: "Is the tone a concord?", a: 2, o: [
    ["Yes — it is the fourth concord, after 2:1, 3:2 and 4:3", "The lesson says in as many words that it is not one, and the concords were settled in the preceding chapter. Read the sentence immediately after the ratio is computed."],
    ["Yes, but only when sounded on a string rather than sung", "Nothing in the art makes concord depend on the instrument; the ratio is the same however it is produced. Ask what the lesson says these two sounds do when played together."],
    ["No — the two sounds do not blend as 2:1, 3:2 and 4:3 blend; they step", "Concord and step are two offices, not two degrees of one thing. The art wants both: concords to frame the span, steps to walk across it."],
    ["The question does not apply, since 9:8 is a remainder and not an interval", "A remainder of two intervals is itself an interval and can be sounded — the lesson tells you to play it. Having played it, ask what it does and does not do."]
  ]},
  { q: "Where is the string stopped to sound a tone above the open string?", a: 0, o: [
    ["At eight-ninths of the open length", "The lengths then stand as 9 to 8 and the pitches the other way about. When a ratio becomes a fraction of the whole string, its smaller term goes above and its greater below."],
    ["At nine-eighths of the open length", "That is more string than the string has. When a ratio is turned into a fraction of the whole, ask which of its two terms can possibly go on top."],
    ["At one-ninth of the open length", "You have taken the piece stopped off rather than the piece left sounding, and a ninth of a wire sounds very far above a tone. Ask which part is free to vibrate."],
    ["At eight-ninths above the halfway point", "The lesson measures its fraction from the whole open string, not from some other stopping. Read the sentence beginning ‘On the string’ and see what the fraction is a fraction of."]
  ]},
  { q: "The fourth and the fifth are stopped at three-quarters and two-thirds. What lies between them, worked out?", a: 3, o: [
    ["1:12, since three-quarters less two-thirds is one twelfth", "You have subtracted the fractions and produced a length, not a ratio of sounds. Two lengths are compared in this art by division; do it that way."],
    ["1:2, a diapason, since three-quarters times two-thirds is one half", "You have multiplied the two fractions instead of dividing one by the other — and a whole diapason between two stoppings that close should have looked wrong at once. Settle which operation compares two lengths."],
    ["8:9, so the fourth is the higher of the two", "The magnitude is right and the comparison is read the wrong way round, making the longer sounding length the higher sound. Ask which of three-quarters and two-thirds is the shorter piece of wire."],
    ["(3/4) : (2/3) = 9:8, a tone", "Three-quarters times three-halves is nine-eighths. So the tone is found either as the leftover of two concords or as the gap between two stoppings: one interval by two roads."]
  ]},
  { q: "Two tones compounded. What ratio?", a: 1, o: [
    ["18:16, that is 9:8 again", "You have added the terms of the two ratios rather than multiplying them, and so compounded a tone with nothing. If two tones gave back one tone the operation would be idle; check it."],
    ["81:64", "Nine-eighths times nine-eighths. Notice how fast the numbers climb: compounding multiplies, and the terms of Pythagorean intervals grow large for that reason alone."],
    ["5:4", "That ratio belongs to a later and different account of the distance of two tones, which this lesson names in order to set it aside. Compute the compound from 9:8 itself and compare the numbers."],
    ["81:8, since the terms above multiply and those below do not", "Whatever is done must be done to both terms or it is not an operation on the ratio at all. Multiply underneath as well as above."]
  ]},
  { q: "How does the ditone stand to the later ‘major third’ of 5:4?", a: 0, o: [
    ["The ditone is the larger step, and the Pythagorean art takes 81:64 as what two tones really are", "Set 81:64 beside 80:64 and the difference is small but real. The art does not pretend the two are one interval, and this course names the divergence rather than papering it over."],
    ["They are the same interval, 81:64 being merely 5:4 written in larger numbers", "Reduce 81:64 as far as it will go and see whether a five ever appears. Two ratios that reduce differently are two ratios."],
    ["The ditone is the smaller of the two", "Bring both to a common denominator — sixty-fourths will serve, since one of them is already there — and then say which is the greater."],
    ["5:4 is the true two-tone interval and 81:64 an error of the old arithmetic", "The lesson calls the later ratio an admission made on other grounds, not the correction of a mistake, and it declines to settle the quarrel. Before ranking either as true, ask whether the page claims to have decided anything."]
  ]},
  { q: "On what basis, the lesson says, did Ptolemy and others admit 5:4?", a: 2, o: [
    ["By measurement upon a longer monochord", "No new instrument is mentioned, and a longer string sets the same ratios as a short one. The difference pointed to is in what was allowed to count as a reason."],
    ["By the authority of the ancients", "Ptolemy is himself one of the ancients, and the lesson presents him as arguing rather than deferring. Look at the clause that says on what grounds the admission was made."],
    ["By combining sense with a different arithmetic", "Not by mere preference, and not by the arithmetic used here. Where a dispute turns on which principles are admitted, naming the principles is worth more than declaring a winner."],
    ["By rejecting the ear entirely in favour of number", "Rejecting the ear would lead no one to a ratio commended for the way it sounds. Read the clause that gives the grounds of the admission, and count how many grounds it names."]
  ]},
  { q: "What does the lesson do with the question whether the ear’s favourite third is the ditone or 5:4?", a: 3, o: [
    ["It settles it for the ditone, on the authority of Boethius", "The page declines to give a verdict and says so plainly. Read the last two sentences of that paragraph and note what they say is not required."],
    ["It settles it for 5:4, following Ptolemy", "The lesson calls this a dispute it will name rather than decide, and it goes on working with the older arithmetic. Look at how the paragraph ends."],
    ["It treats the question as meaningless, since the ear has no favourites", "The lesson speaks of the ear’s favourite without embarrassment; what the ear reports is part of the subject matter. What it withholds is a verdict, not the question."],
    ["It names the dispute and declines to settle it, noting that the first principles do not require a settlement", "A liberal art may leave a real question open without ceasing to be a science. The course says the same of St. Thomas: he does not settle it either."]
  ]},
  { q: "The boxed remark distinguishes the senses of ‘tone.’ What does the word mean in this art?", a: 1, o: [
    ["Any sound of definite pitch", "That is one of the ordinary English senses the box gathers in order to set aside. Read on to the sentence that says what the word means here."],
    ["One interval, 9:8, and nothing else", "Not a sound, not a colour of voice, not a key on a keyboard. A term with one meaning is a term you can compute with, which is why the art insists upon it."],
    ["The quality or colour of a voice", "Another of the ordinary senses the box collects before narrowing the word. What the art means by it is a quantity, not a quality."],
    ["A whole step on a keyboard", "The box treats that as a stand-in and says it is slightly off from the thing itself. A near-copy is not the meaning of the word."]
  ]},
  { q: "What does the lesson say of a piano’s whole-step?", a: 0, o: [
    ["A tempered stand-in, slightly off, as that instrument’s fifth is slightly off from 3:2 — close enough to sing with, but not the thing itself", "The lesson concedes the usefulness and denies the identity. Both halves are needed if you are to use a keyboard without being taught wrong by it."],
    ["Exactly 9:8, since the instrument is tuned by the art", "The box says that instrument’s fifth departs from the pure ratio, and its whole-step along with it. Read what it says about how close the stand-in comes."],
    ["So far from 9:8 as to be useless for learning", "The box grants it a definite usefulness in the same sentence in which it denies its exactness. Look for the concession as well as the denial."],
    ["5:4 divided in half", "No such halving is performed anywhere on this page, and the art does not take halves of ratios as first principles. Ask what the keyboard’s step is compared with, and how nearly it matches."]
  ]},
  { q: "What office does the tone hold in the art?", a: 2, o: [
    ["It is the smallest interval the art recognises", "The next lesson divides a fourth and finds something smaller left over. Nothing on this page claims a lower bound; look at what the tone is said to be used for."],
    ["It is the frame within which the concords are set", "You have exchanged frame and filling. Ask which of the two, the concord or the step, spans the greater distance, and which is used to walk across the other."],
    ["It is the ordinary step by which the art fills the fourth and the diapason", "The concords give the frame; this gives the pacing. When the tetrachord is divided in a later lesson, this is the unit that does most of the dividing."],
    ["It is a concord used to check the tuning of the others", "The lesson refuses it the name of concord in the sentence just after the ratio is computed. Its use is not a matter of checking anything."]
  ]}
],

"v-2": [
  { q: "What does the lesson say is the work of harmonics as a liberal art?", a: 0, o: [
    ["The scale: the diapason filled, so that one may go from a sound to its double by a known path", "Not a ladder drawn on paper but a path actually walked in sound. Everything computed in the last two chapters is gathered here into a single journey."],
    ["The classification of concords and discords", "That work was done in an earlier chapter and is presupposed here rather than aimed at. Read the first two sentences and see what they say the work is."],
    ["The tuning of instruments to the pure ratios", "Tuning is an application; the art is after the structure a tuning would realise. Look for what the lesson says is filled, and with what."],
    ["The drawing of a ladder of eight equal steps", "The lesson refuses both halves of that: it is not a drawing, and it insists afterwards that the steps are not equal. Read what the second sentence denies."]
  ]},
  { q: "What is a tetrachord?", a: 2, o: [
    ["A four-stringed instrument on which the art is demonstrated", "The instrument of this course is one string, and has been since the third chapter. Here the word names an interval and its division, not a piece of furniture."],
    ["A group of four concords", "The art knows three first concords, not four, and the word names something the lesson proceeds to divide rather than a collection. Look at the clause that defines it in the second paragraph."],
    ["A fourth, divided", "The old unit of filling. Two of them, with a tone between, will span the whole double — which is the argument of this page."],
    ["The tetractys under another name", "One is a triangular heap of counters from an earlier lesson, the other a stretch of sound to be divided. Similar words, different things; check what this one is said to be made of."]
  ]},
  { q: "In the diatonic genus, how is the fourth filled?", a: 1, o: [
    ["By three tones", "Multiply 9:8 by itself three times and set the result against 4:3: you have overshot. Count how many whole tones the fourth will really hold."],
    ["By two tones and a leftover", "Two whole steps and a remnant that is not a step of the same size. That inequality is why the finished scale is not a ladder of equal rungs."],
    ["By two tones and a third tone cut in half", "Halving a tone is precisely the operation the lesson says the art will not take as a first principle. Whatever remains must be got by dividing ratios, not by cutting one in two."],
    ["By four equal steps", "The lesson says twice over that the steps of this system are not equal. Read the paragraph on the tetrachord and count the parts it names."]
  ]},
  { q: "Compute the leftover: the fourth, less two tones.", a: 3, o: [
    ["(4:3) ÷ (81:64) = 243:256", "The arithmetic is right and the terms stand upside down. A remnant taken out of a larger interval must come out greater than unity; check which way the division runs."],
    ["(4:3) × (81:64) = 27:16", "You have multiplied where the question asked you to take away, and so made an interval larger than the one you began with. To remove one ratio from another, invert before multiplying."],
    ["(4−81) : (3−64), which will not reduce", "Ratios are not taken apart by subtracting their terms; the first computation of the preceding lesson shows the operation used instead. Look at how a ratio is divided by a ratio."],
    ["(4:3) ÷ (81:64) = 256:243", "Four-thirds times sixty-four eighty-firsts. Its name is the leimma, the remnant, and its awkward numbers are a permanent feature of this scale rather than a blemish to be smoothed away."]
  ]},
  { q: "Why does the lesson insist that the leimma is not ‘half a tone’?", a: 0, o: [
    ["Because half of 9:8 would be a mean the art does not take as a first principle, and 256:243 is not that mean in any case", "Two objections in one sentence: the operation is not admitted, and the number would not answer to it if it were. Keep the first — it is why this art has no ‘semitone’ properly so called."],
    ["Because it is larger than a tone, not smaller", "The lesson says outright that it is smaller than a tone. Read the sentence just before the denial and note which way the comparison runs."],
    ["Because a tone cannot be divided at all, being a first principle", "The art’s reluctance concerns what it will take as a starting point, not what is mathematically possible. Read what the lesson says halving would require."],
    ["Because 256:243 is a concord, and half-tones are not", "Nothing on the page calls this remnant a concord; the concords were settled two chapters ago, and this is what was left when one of them was divided. The objection made here is arithmetical."]
  ]},
  { q: "Count the steps of the filled diapason as the lesson lists them. How many of each?", a: 2, o: [
    ["Six tones and one leimma", "Read the pattern the lesson prints and count each name in it separately. How many remnants there are follows from how many tetrachords there are."],
    ["Seven tones", "Then every step would be equal, and the lesson says twice that they are not. Read the printed pattern and see how many kinds of step it contains."],
    ["Five tones and two leimmata", "Tone, tone, leimma, tone, tone, tone, leimma — seven steps between eight sounds. Compound the five tones with the two remnants and the product comes to exactly 2:1."],
    ["Four tones and three leimmata", "Count the printed pattern name by name rather than estimating. There are seven steps in all; get the two sorts of them in their right numbers."]
  ]},
  { q: "How do two tetrachords make a diapason?", a: 1, o: [
    ["They are laid end to end, two fourths being a diapason", "Compound 4:3 with 4:3 and set the product against 2:1: you have not arrived. Ask what must be inserted to make up the shortfall."],
    ["They are separated by a tone, and the two fourths with that tone between them fill 2:1", "Two fourths alone fall short of the double, and the joining tone makes up the difference exactly. Compound 4:3, 9:8 and 4:3 and you land on 2:1."],
    ["They overlap by a tone, the second beginning below where the first ends", "Overlapping would make the span smaller than two fourths, and two fourths already fall short. Work out the product and see which way the correction has to go."],
    ["Three are needed, not two", "Compound 4:3 three times and you overshoot the double considerably. Count the fourths the lesson names, and ask what small thing is set between them."]
  ]},
  { q: "The lesson gives the order tone, tone, leimma, tone, tone, tone, leimma — ‘or a permutation of that pattern.’ On what does the permutation depend?", a: 3, o: [
    ["On the genus — diatonic, chromatic or enharmonic", "A change of genus changes the sizes of the steps themselves and not merely their order, and the lesson keeps the genera for its closing remark. The permutation here is within one genus."],
    ["On the tuning of the instrument", "The ratios are fixed by the art and not by any instrument’s tuning; the same seven steps are in question throughout. Ask what may be moved without changing what the steps are."],
    ["On whether one sings ut re mi or some other set of syllables", "The syllables are a later help laid upon the system and do not determine its structure; the closing remark says as much. Look at the clause immediately after the printed pattern."],
    ["On where the tetrachords are set", "The same seven steps taken from a different starting place. The materials do not change; only the point at which the path is entered."]
  ]},
  { q: "The lesson says the eight sounds are built only from certain ratios. Which?", a: 0, o: [
    ["3:2, 4:3, and their difference 9:8", "Two concords and the step that separates them; nothing else is admitted. The double is the span being filled, so it is not one of the materials but the thing made."],
    ["5:4 and 6:5, the thirds", "Neither ratio appears in this construction, and the preceding lesson set the first of them aside as a later admission. Look at what the lesson lists after the word ‘only.’"],
    ["9:8 and 256:243 alone", "Those are the steps that result, not the materials the construction starts from; the remnant was itself computed out of something larger. Ask which intervals had to be in hand before either step could be found."],
    ["The twelve ratios of the tetractys", "The tetractys is four numbers, not twelve ratios, and the lesson names a short list here rather than a heap. Read the sentence after the instruction to play the eight."]
  ]},
  { q: "What does the lesson say about ‘C major,’ clefs and piano keys?", a: 2, o: [
    ["They are errors of modern practice which the art corrects", "The lesson calls them names rather than mistakes, and allows that they may sit upon a slightly altered version of the system. Read the last sentence of that paragraph."],
    ["They are the origin of the intervals, from which the ratios were afterwards derived", "That reverses the order of the whole course, which builds the intervals out of ratios before any name is given to them. Ask which of the two the lesson says came first."],
    ["They are labels stuck on this system, or on a slightly adjusted version of it", "The order of dependence matters more than the vocabulary: the structure is first and the names come after. A student who learns the names first will think the structure was made to fit them."],
    ["They are equivalent ways of saying the same thing, neither prior to the other", "The lesson’s phrasing puts one of the two plainly on top of the other. Look at the verb it uses for what the modern names do to this system."]
  ]},
  { q: "The closing remark treats the other genera and the Guidonian syllables together. What do they have in common there?", a: 1, o: [
    ["Both are rejected by this course as later corruptions", "The box calls one of them part of the full art and the other useful. An order of learning is not the same as approval or rejection; read what it grants to each."],
    ["Each is a real part or help of the art that is not first: the diatonic path and the ratios come before them", "The box is an exercise in ordering rather than in excluding. Nothing is denied a place; each is given the place it has, after the thing it presupposes."],
    ["Both are Greek, and so prior to the Latin tradition", "One of the two is described as medieval and made for singers. Check the origin the box gives each before grouping them by nation."],
    ["Both are ways of dividing the tetrachord", "Only one of the two divides anything; the other is a set of names for singing. Read the box’s two halves separately and see what each is said to be."]
  ]}
]

});

/* ---- D ---- */
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"means-1": [
  { q: "Between 6 and 12 the arithmetic mean is 9. What makes it the <em>arithmetic</em> mean?", a: 0, o: [
    ["The differences are equal: 9−6 = 3 = 12−9", "Equal differences, and nothing else is asked of it. Notice that this is the only one of the three means here that a man could find by guessing at the middle of the span."],
    ["9 stands to 6 as 12 stands to 9", "That is the condition for a different mean altogether, and 9 does not satisfy it: 9 divided by 6 is not 12 divided by 9. Work the two quotients out and see which condition you have described."],
    ["9 exceeds 6 and falls short of 12 by the same part of each", "Test it. 9−6 = 3, which is half of 6; 12−9 = 3, which is a quarter of 12. Half and a quarter are not the same part, so this is not the condition 9 satisfies."],
    ["9 lies at the middle of the span the ear hears between 6 and 12", "The mean was not chosen by listening; it was got by a rule of number, and the sound came after. Go back to the rule the lesson states for this mean and check the two subtractions."]
  ]},
  { q: "Between 6 and 12 the harmonic mean is 8. Which statement gives the reason?", a: 2, o: [
    ["The differences 2 and 4 are equal", "Two and four are not equal, and if they were you would have described the mean of equal differences instead. Do the two subtractions again, and then ask what the lesson requires of <em>this</em> mean."],
    ["8 is the number whose square is 72", "Square 8 and you get 64, not 72. A mean defined by squaring is a third kind entirely, and the lesson says no whole number answers to it here. Read the condition stated for the mean you were asked about."],
    ["8−6 = 2, a third of 6; and 12−8 = 4, a third of 12 — the same part of each", "Equal parts, not equal differences. Equivalently the differences 2 and 4 stand as the extremes 6 and 12, which is a second way of stating the same condition."],
    ["8 belongs there because 6:8 is the diatessaron", "That 6 to 8 is a fourth is something you read off afterwards; it is not the rule that produced the number 8. The lesson gets that number from a condition on differences — find the condition first."]
  ]},
  { q: "What does the lesson say of the geometric mean between 6 and 12?", a: 3, o: [
    ["It is 9, since 9 stands midway between them", "Midway by difference is one condition; equal ratios are another, and 9 fails the second: 9 to 6 is 3:2 while 12 to 9 is 4:3. Ask what a geometric mean requires of its two ratios."],
    ["It is 8, since a constant ratio runs through 6, 8 and 12", "Check the two ratios. 8 to 6 reduces to 4:3; 12 to 8 reduces to 3:2. They are not the same, so nothing constant runs through those three numbers at all."],
    ["There is no geometric mean between 6 and 12 in any sense", "The lesson denies you a whole number, which is not the same as denying that any quantity whatever stands in that relation. Be exact about what is missing: a kind of quantity, or a kind of number?"],
    ["It would be a number whose square is 72 — and there is none in whole numbers", "This is the whole hinge of the theorem that follows. The tetrad 6:8:9:12 has an arithmetic and a harmonic mean sitting in it, and the third kind of mean is simply absent."]
  ]},
  { q: "Which two pairs within 6 : 8 : 9 : 12 sound the diatessaron?", a: 1, o: [
    ["6 : 9 and 8 : 12", "Reduce them. Six to nine divides by 3, eight to twelve divides by 4, and both give three to two. That is a concord of this art, and the tetrad holds it twice — but it is not the one named here."],
    ["6 : 8 and 9 : 12", "Both reduce to 4:3, and so the fourth appears twice over, just as the fifth does. Every interval the course has taught is inside these four numbers, and none of them was put there by hand."],
    ["6 : 12 and 8 : 9", "You have paired the widest span in the tetrad with the narrowest. One is a double and the other a single step; check each against 4:3 separately and neither will survive."],
    ["8 : 12 and 9 : 12", "The first reduces to two to three and the second to three to four. Those are different ratios, so they cannot both be the concord asked for. Test each pair on its own before pairing them."]
  ]},
  { q: "6 : 9 and 8 : 12 both reduce to which ratio, and what is it called?", a: 3, o: [
    ["4:3, the diatessaron", "Divide the first pair by 3 and the second by 4 and see what you actually hold. The tetrad does contain the fourth twice, but in other pairs than these; run the reductions before assigning names."],
    ["2:1, the diapason", "A double requires the greater to contain the less exactly twice with nothing over. Nine is not twice six, and twelve is not twice eight. Only one pair in the tetrad is a double; find which."],
    ["9:8, the tone", "The tone is the narrowest interval named in this tetrad, and it stands between two numbers that differ by one. Six to nine and eight to twelve are plainly wider; reduce them and compare."],
    ["3:2, the diapente", "The fifth, twice over — once from the lesser extreme to the arithmetic mean, once from the harmonic mean to the greater. The two means each make a fifth with one of the extremes."]
  ]},
  { q: "In 6 : 8 : 9 : 12, which pair sounds the tone?", a: 0, o: [
    ["8 : 9", "The distance between the two means themselves. The lesson makes much of this: the tone, which was first got by taking a fourth from a fifth, turns up here as the gap between the harmonic and the arithmetic mean."],
    ["6 : 8", "Reduce it and you have a superparticular, but not 9:8 — the lesson lists it among the concords, not among the steps. Go back and test each adjacent pair in the tetrad in turn."],
    ["6 : 12", "That is the whole span of the tetrad, the frame within which everything else falls. A single step of the scale cannot be the same size as the compass that contains it."],
    ["9 : 12", "Nine to twelve reduces to three to four, which the lesson names among the concords. Read its list of pairs again and check the ratio it assigns to each one."]
  ]},
  { q: "The lesson says the tone reaches us here by a second road. What are the two roads?", a: 2, o: [
    ["Halving the tone, and halving the leimma", "Neither halving is available in this art, and this very lesson spends a page proving that the first is impossible. A road that cannot be walked is not one of the two."],
    ["Adding two leimmata, and subtracting a leimma from a tone", "Two leimmata do not make a tone — the lesson says plainly that they fall short, and the shortfall is the point. The second operation would in any case leave you with something other than what you set out to find."],
    ["Taking a fourth away from a fifth, and taking the interval between the harmonic and the arithmetic mean of the diapason", "Two roads, one place. That the same interval arrives by subtraction of concords and by the doctrine of means is the sort of coincidence a middle science is entitled to notice."],
    ["Measuring a string, and consulting Nicomachus", "One of those is not a derivation at all, and the lesson is careful to set the reported history aside and attend to the thing itself. Both roads it means are roads of number."]
  ]},
  { q: "Archytas’s theorem, as this lesson reports it, denies a mean proportional to which ratios?", a: 1, o: [
    ["Every ratio whatever", "Then the diapason and its compounds would be caught as well, and the lesson exempts them by name. The theorem concerns one class of ratio, not ratio as such; look at how the class is described."],
    ["Every superparticular ratio in its least terms", "Which is why the theorem does the work it does: every concord and every step of this art, save the diapason and its compounds, falls in that class. None of them can be halved in ratio."],
    ["Only the ratio 9:8", "The lesson says expressly that this is not a peculiarity of 9 and 8. A theorem holding for one pair of numbers could not carry the weight the lesson puts on it; look again at how wide it casts."],
    ["Every superpartient ratio", "That is a different class from the one the demonstration is stated about, and the lesson’s proof concerns the very ratios that make up this art’s concords and steps. Re-read the sentence in which Archytas is named."]
  ]},
  { q: "Why does the lesson say that ‘semitone is a name and not a measure’?", a: 3, o: [
    ["Because the ear cannot hear so small an interval", "It is plainly audible, and nothing in this art rests on its being too fine for the ear. The objection raised here is arithmetical, and it is not a complaint about the acuteness of hearing."],
    ["Because two leimmata make exactly one tone, so the name adds nothing", "They do not. The lesson says they fall short, and that shortfall is the whole difficulty. Work out what would follow if they did add up exactly, and you will see why it is denied."],
    ["Because the semitone belongs to a later European practice and not to this art", "The interval it names is present in this art from the beginning; what is being challenged is the word <em>half</em> inside the name. Ask what a measure must do that a mere name need not."],
    ["Because the leimma 256:243 is what is left over, not half of anything", "A remainder, and named as one — <span class=\"latin\">leimma</span> is the leaving. The whole difficulty later Europe met in building instruments of fixed pitch begins in this one arithmetical fact."]
  ]},
  { q: "What does the lesson report from Nicomachus about 6 : 8 : 9 : 12, and how does it treat the report?", a: 0, o: [
    ["That he calls it the most perfect proportion and says Pythagoras brought it out of Babylon — and the lesson sets the history aside to attend to the thing itself", "Whatever the history, the numbers are checkable, and the course prefers what it can check. The same discipline is applied to authorities elsewhere: take the observation, leave the pedigree."],
    ["That Nicomachus discovered it, which is why the course teaches it", "No claim about who discovered it is made, and the teaching would not be rested on such a claim in any case. Notice what the lesson tells you to do with the history it does report."],
    ["That Boethius rejected the proportion as Babylonian and unfit for Latin use", "Nothing of the kind is said anywhere on the page. The caution attaches to the report of its origin, not to the proportion, which the lesson then unfolds interval by interval."],
    ["That the proportion is called perfect because it pleases the ear more than any other", "The lesson is at pains to say the two inner numbers were not picked for their sound. Ask where their perfection is supposed to come from, if not from a verdict of taste."]
  ]},
  { q: "The boxed remark says this is where the scale stops looking like a choice. Why?", a: 2, o: [
    ["Because the ancients agreed upon it, and their agreement settles the matter", "The remark appeals to nothing of the sort, and this very lesson tells you to take the thing rather than the authority. Ask what in the remark does the work that consent would otherwise have to do."],
    ["Because the ear approves the result, and approval makes a consequence", "Approval is a response to a result, not a derivation of one. The remark describes what it is like to <em>possess</em> a middle science rather than to judge one; read what it says that feels like."],
    ["Because the two inner numbers are simply what the arithmetic yields when you ask for the means of 6 and 12, and the sound follows after", "Consequence, not choice. That order — number first, sound after, and no fitting by hand — is what the remark says distinguishes possessing a middle science from having heard about one."],
    ["Because no other numbers could ever be used to build a scale", "The lesson makes no such claim, and it points forward to later European attempts of quite another kind. The remark is about where these particular inner numbers came from, not about what is possible."]
  ]}
],

"v-3": [
  { q: "How does the lesson state Aristoxenus’s answer to the question why some ratios please?", a: 2, o: [
    ["That the first numbers are the cause, and the ear merely registers what number has settled", "You have given the answer of the school he argued against. Beside whose name does the claim about first ratios from first numbers stand? Sort the four positions in the opening paragraph before choosing."],
    ["That sense and reason must both be heard, and neither may despise the other", "That is a third position in the same paragraph, and its force is that it refuses to make either faculty the sole judge. The man in question was not so even-handed; find whose formula this is."],
    ["That the ear judges, and the interval is a continuum rather than a ratio", "Which is why the lesson can call him right about the ear and wrong about the ratio. A continuum may be divided anywhere, and that is exactly what the arithmetic of the earlier lesson refuses."],
    ["That number is the cause, though the study still begins from what is heard", "That is the Latin settlement the lesson attributes to the teacher of the West, not to the Greek theorist named beside him. Four positions are listed there; match each to its own man."]
  ]},
  { q: "On the lesson’s judgement, what is Aristoxenus right about and what is he wrong about?", a: 0, o: [
    ["Right that the ear is not optional; wrong if he means the art stops at the ear, or that ratio is a fiction", "The concession is real and not a courtesy. A middle science has a physical subject, and here that subject is sounding bodies as heard. What he may not do is make the hearing the whole of it."],
    ["Right about everything touching sense, wrong about everything touching number", "The lesson’s verdict is finer than a partition of territory. It grants him a principle the course itself holds, and refuses him only one further step. Read the paragraph that begins with the senses."],
    ["Wrong throughout, since ratio is the cause and sense contributes nothing", "That is the overreach the lesson warns the other school against. Nothing on this page dismisses the ear, and the whole method begins there. Ask what is conceded to him before he is corrected."],
    ["Right that the interval is a continuum, wrong that the ear can judge it", "The lesson does not part his position along that seam. Take his two claims separately — one about who judges, one about what an interval is — and ask which of them this course could ever concede."]
  ]},
  { q: "Where, on this page, do the Pythagoreans overreach?", a: 3, o: [
    ["In holding that the concord is a ratio", "The lesson grants them that outright, and the whole course is built upon it. Their fault lies elsewhere, and it is a fault of attitude rather than of doctrine. Read the sentence that follows the concession."],
    ["In counting 4:3 among the first concords", "Nothing on this page questions that. The concords they name first are the ratios the arithmetic names first, and the lesson endorses the agreement. Look for something they do beyond naming ratios."],
    ["In beginning from what is heard rather than from number", "They are not accused of beginning from hearing; if anything the complaint runs the other way. Ask what the lesson says they do with the ear, and whether that is a beginning or a dismissal."],
    ["In treating the ear as a nuisance, and in calling every later pleasure of sense — 5:4, for instance — a moral failure", "The lesson keeps their cause and refuses their contempt. Note that it does not thereby admit 5:4 as a first principle; it only declines to make a vice of hearing it with pleasure."]
  ]},
  { q: "Ptolemy’s method is called the nearest of the three to a middle science. What qualification is attached?", a: 1, o: [
    ["That his method is nevertheless the least fruitful of the three in practice", "No such comparison is drawn, and fruitfulness is not the measure being applied. The qualification concerns what does and does not follow from a method being of the right shape."],
    ["That being the right method does not make every ratio he admits a first principle — first principles are few", "The distinction is between a way of proceeding and the results reached along it. A sound method may still be used to admit more than a demonstration will carry, and the lesson keeps the two apart."],
    ["That his method is really the Pythagorean one under another name", "They are listed as distinct positions, and his formula expressly refuses to let either faculty despise the other — which is not what the other school is faulted for. Compare the two sentences again."],
    ["That Thomas rejects it, having closed the question elsewhere", "The lesson says the opposite about closure: one question at least is left expressly open. And Thomas is brought in for principles by which a harmonics is judged, not as a party rejecting one."]
  ]},
  { q: "How does the lesson describe Boethius’s own position?", a: 2, o: [
    ["He follows Aristoxenus, making the ear the judge and treating ratio as a convenience", "That is not the side he takes in teaching the West, and this course leans on him elsewhere for the contrary. Look at which of the two Greek parties the lesson says he sides with."],
    ["He suspends judgement between the parties and reports them without deciding", "The lesson has him choose. Reporting without deciding is nearer to what this page does with a single disputed ratio at the end, and that is one ratio, not the whole question of cause."],
    ["He sides with number as the cause, while still beginning from what is heard", "Which is how he can be the Latin West’s Pythagorean and still open his work with the ear. Holding those two together is precisely what a middle science demands of him."],
    ["He identifies beauty with due proportion and names its three conditions", "Those are the words of a far later writer, quoted in the boxed remark on this page, and they belong to theology rather than to harmonics. Attend to the opening paragraph and the Latin teacher named in it."]
  ]},
  { q: "The lesson grants that Thomas does not write a harmonics. Why is he brought in at all?", a: 3, o: [
    ["Because he settled the dispute about 5:4 in favour of the Pythagoreans", "The page says plainly that this question is not closed and that a first-principles course may leave it open. Whatever he supplies to the art, it is not a verdict upon that ratio."],
    ["Because he transmitted the Greek ratios to the Latin West", "That office belongs to another writer named in the same paragraph, and it is a labour of transmission rather than of principle. Ask what a man who writes no harmonics could still contribute to one."],
    ["Because his authority outranks Ptolemy’s, and rank decides such questions", "The lesson nowhere argues from rank, and its habit with authorities is to take the observation and leave the authority standing aside. Look for a contribution that would hold even with the name removed."],
    ["Because he writes the principles by which a harmonics must be judged", "Principles about the senses, about the kind of cause a science must give, and about beauty as proportion. The course uses them as a rule applied to the art, not as further doctrine within it."]
  ]},
  { q: "At <em>Summa</em> I q.5 a.4, how are beauty and goodness related?", a: 0, o: [
    ["They are the same in the thing and differ in notion: goodness is what all desire, beauty what pleases in being seen", "The difference is of notion, not of subject. That is why a concord may be called beautiful without inventing in it some second quality standing beside its proportion."],
    ["Beauty is a species of goodness, confined to what is heard", "The article is not dividing a genus into species, and the extension to hearing is made in this lesson by analogy rather than by shutting beauty up in one sense. Read what the two are said to share."],
    ["They are wholly distinct, goodness belonging to the will and beauty to private taste", "If beauty were private taste the argument of this page would collapse, since it denies at length that the pleasure of a concord is taste tacked onto a ratio. Re-read the boxed remark."],
    ["They differ in the thing and are the same in notion", "You have exchanged the two terms. Ask which of them — the thing itself, or the way it is considered — the article says admits the difference; the order of that sentence carries the whole point."]
  ]},
  { q: "What work does the phrase ‘even sense is a sort of reason’ do in the argument?", a: 1, o: [
    ["It concedes that the ear is unreliable and must be corrected by number", "The quotation dignifies sense rather than demoting it. And nothing on this page asks that the ear be corrected: the ear supplies the very subject upon which the science then works."],
    ["It explains why the sense is pleased by a ratio: the senses delight in things duly proportioned, as in what is after their own kind", "So the pleasure is not tacked onto the ratio from outside. The sense answers to proportion because it is itself a kind of reason — which is why the ear here is a witness and not a whim."],
    ["It reduces hearing to a calculation the mind performs without the ear", "Then the senses would have nothing left to delight in, and the sentence is expressly about their delight. A thing may be a sort of reason without being reason unaided; hold on to the words <em>a sort of</em>."],
    ["It licenses the ear to overrule a demonstration when the two disagree", "No such licence is given, and the closing sentences refuse to replace demonstration with the ear. The phrase accounts for a pleasure; it does not erect a court of appeal."]
  ]},
  { q: "At I q.39 a.8, which three conditions of beauty are named?", a: 3, o: [
    ["Proportion, clarity, and delight", "Delight is the response to beauty in this account, not a condition of it — the boxed remark says the senses delight in what is duly proportioned. Count the three terms in that article again."],
    ["Integrity, clarity, and utility", "Utility belongs to another order of judgement; the useful is measured by an end outside itself. Look again at the three terms in the boxed remark and see which one you have displaced."],
    ["Integrity, due proportion, and moderation", "Moderation is a virtue of the appetite and does not appear in the list. Two of your three are right; recover the third from the sentence that gives the article its number."],
    ["Integrity, due proportion or <span class=\"latin\">consonantia</span>, and clarity", "The middle term is the one this art can measure, and its Latin name is the very word the tradition uses for concord. That coincidence of vocabulary is not an accident."]
  ]},
  { q: "What does the lesson do with the question whether 5:4 is a concord in the strict sense?", a: 2, o: [
    ["It settles it in the negative, on Pythagorean grounds", "The lesson names that severity an overreach when it arrives with contempt for the ear. It does not adopt the verdict; look at the last sentence before the sources are listed."],
    ["It settles it in the affirmative, on Ptolemy’s authority", "Admitting a ratio into a method is not the same as making it a first principle, and the lesson draws that line explicitly. Nor does it treat any of the three as an authority that decides."],
    ["It leaves the question open, noting that the authorities disagree and that Thomas has not closed it", "A first-principles course may leave a question open without embarrassment. Notice how far that is from leaving it unexamined: the lesson states exactly why it stands open."],
    ["It refers the question to a different study of music altogether", "This is a question about what counts as a concord, which is precisely the business of this study. Deferring it would be a way of dodging it; ask what the lesson does instead."]
  ]},
  { q: "Why must a middle science of music begin with the ear?", a: 0, o: [
    ["Because all knowledge of nature begins in the senses, and this science has a physical subject — sounding bodies as heard", "Which is why the ear cannot be treated as an obstacle to be cleared away. The cause remains numerical; but a cause is the cause of something, and the something arrives by hearing."],
    ["Because the ratios cannot be calculated until an instrument has been measured", "Measuring a string is not the same as sensation being the origin of knowledge, and the arithmetic of this course runs well ahead of any instrument. Look for the general principle, not the practical step."],
    ["Because the ear is more certain than reason about small intervals", "No such comparison is made, and the earlier proof about halving a tone shows what comes of asking the ear to adjudicate a quantity. Certainty is not the reason the lesson gives."],
    ["Because Aristoxenus is the oldest authority on the point", "Something is conceded to him, but not on account of his age, and this course tells you to take an observation and leave the authority. Ask what principle makes the concession necessary."]
  ]}
],

"sys-1": [
  { q: "What is the <span class=\"latin\">proslambanomenos</span>, and what does its name mean?", a: 1, o: [
    ["The highest sound of the system, added above the tetrachord hyperbolaion; ‘the one taken in addition’", "The name is right and the place is not. Ask at which end of the system a sound must be added for the whole to come out at exactly two diapasons, and work the arithmetic from there."],
    ["A sound added below the tetrachord hypaton; ‘the one taken in addition’", "It belongs to no tetrachord, which is why the name calls it an addition. Remove it and the span of the system falls short of two diapasons by exactly one tone."],
    ["The middle sound of the system, from which the other sounds take their order", "The system does have a sound of which that is said, and the Peripatetic remark further down this page concerns it. But its name is not built on the idea of addition; read what the name itself says."],
    ["A movable sound belonging to the tetrachord hypaton", "It stands among the sounds the lesson lists as fixed, and it is not reckoned within any tetrachord at all. Check the list of the <span class=\"latin\">hestotes</span> and see whether the name appears there."]
  ]},
  { q: "Running upward from the bottom, in what order do the four tetrachords stand?", a: 3, o: [
    ["Hypaton, diezeugmenon, meson, hyperbolaion", "Two of these have been exchanged. Take the names at their word: one means ‘of the middle’ and one ‘of the disjunct’, and the disjunct one cannot stand before the tone that makes it disjunct."],
    ["Meson, hypaton, hyperbolaion, diezeugmenon", "You have begun in the middle. Whatever else is so, the tetrachord named ‘of the lowest’ cannot stand above the one named ‘of the middle’; sort the four names by their meanings first."],
    ["Hyperbolaion, diezeugmenon, meson, hypaton", "That is the list read downward. The question asked for the ascent, and in this art the order of terms is never a formality — it decides which sound you are naming."],
    ["Hypaton, meson, diezeugmenon, hyperbolaion", "Of the lowest, of the middle, of the disjunct, of the highest — with the proslambanomenos below them all. Four tetrachords of four sounds each, sharing sounds at the conjunctions, and fifteen in all."]
  ]},
  { q: "Where does the tone of disjunction stand?", a: 0, o: [
    ["Between the tetrachord meson and the tetrachord diezeugmenon", "Which is why the tetrachord above it is called ‘of the disjunct’. The joins on either side are conjunct: hypaton to meson below, diezeugmenon to hyperbolaion above."],
    ["Between the proslambanomenos and the tetrachord hypaton", "A tone does stand at the bottom of the system, but a tone of disjunction is one that separates two tetrachords. A single added sound is not a tetrachord; count what lies on each side of the gap."],
    ["Between the tetrachord diezeugmenon and the tetrachord hyperbolaion", "Those two are joined the other way, sharing a sound between them. Were a tone standing there as well, the system would come out wider than two diapasons; check the count of fourths and tones."],
    ["Between the tetrachord hypaton and the tetrachord meson", "Those two are conjunct — the highest sound of the one is the lowest of the next, with nothing between them. Walk the system upward from the bottom and mark each join as you pass it."]
  ]},
  { q: "Two diatonic tetrachords joined conjunct: what do the pair span?", a: 2, o: [
    ["2:1, the diapason", "That is what the other manner of joining yields, and it requires something standing between the two tetrachords to make up the difference. Multiply 4:3 by 4:3 and see what you actually get."],
    ["4:3, since the two share their ratio", "Sharing a sound is not sharing a span. Two fourths laid end to end are wider than one fourth; multiply the two ratios together rather than repeating one of them."],
    ["16:9 — a tone short of the diapason", "(4:3) × (4:3) = 16:9, and 16:9 multiplied by 9:8 gives 2:1. That missing tone is exactly what the disjunction supplies in the Greater Perfect System."],
    ["81:64, the ditone", "That is the sum of two tones, not of two fourths, and it is narrower than either interval you were asked to add together. Check first what ratio a single diatonic tetrachord spans."]
  ]},
  { q: "The lesson checks the system as a tone, four fourths, and a tone. What does the multiplication give?", a: 1, o: [
    ["3:1, a diapason and a diapente", "Work the middle term first. (4:3)⁴ is 256:81, and the two tones together make 81:64. Multiply those two and watch what cancels; nothing but the 81 should go."],
    ["4:1, two diapasons exactly", "(81:64) × (256:81) = 4:1. Nothing has been fitted by hand: the fifteen sounds fall where the ratios put them, and the frame closes of its own accord."],
    ["2:1, one diapason", "A single pair of disjunct tetrachords already spans that much. The Greater system holds four tetrachords and two tones besides; a total no larger than a part of it cannot be right."],
    ["It does not come out exactly, and the ancients adjusted the tone of disjunction to close it", "No adjustment is made or needed, and the lesson says as much. The whole point of the check is that the numbers close by themselves; run the multiplication and see them do it."]
  ]},
  { q: "<span class=\"latin\">Hypate</span> — what does the name tell you, and what does the string sound?", a: 0, o: [
    ["It is the highest-placed and most honoured string, and it sounds the lowest", "The names describe the strings of a lyre and not pitches. Once that is fixed the whole vocabulary becomes legible, and stays legible for a thousand years of treatises."],
    ["It is the highest-sounding string of the system", "You have read the name as though it described a pitch. It describes a position on an instrument, and here position and sound run opposite ways. Ask what exactly is being called highest."],
    ["It is the middle string, by which the others are ordered", "That description belongs to another name on this page, and the Peripatetic remark concerns that one. Two names cannot both mean the middle; separate them before choosing."],
    ["It is the last string, and sounds the highest", "‘Last’ is the sense of a different name in the same sentence, and the pitch you have assigned travels with it. Read the four glosses the lesson gives and match each to its own name."]
  ]},
  { q: "Which gloss does the lesson give for <span class=\"latin\">lichanos</span>?", a: 3, o: [
    ["The last string", "That is the sense of a different name in the same sentence, and it belongs to the string at the far end of the series. Take the four glosses one at a time and match them."],
    ["The most honoured string", "Honour attaches to another of the names, and it goes with a string that sounds at the bottom of the order. Nothing in this gloss concerns rank; read the sentence that lists all four."],
    ["The middle string", "The middle has a name of its own on this page, and a good deal is said about it further down. Two names cannot both mean the middle; read the glosses through in order."],
    ["The string the forefinger takes", "The name records a manner of playing rather than a place in the order. That is the general lesson of this vocabulary: it describes a lyre, and only afterwards a scale."]
  ]},
  { q: "Which of these is <em>not</em> among the <span class=\"latin\">hestotes</span>?", a: 2, o: [
    ["<span class=\"latin\">Paramese</span>", "It stands in the list of fixed sounds, at the upper end of the tone of disjunction. Read that list again and count it: there are seven names in it, and this is one of them."],
    ["<span class=\"latin\">Nete diezeugmenon</span>", "Every tetrachord has two outer sounds and both of them stand fixed; this is the upper one of its own tetrachord. Ask instead which sounds of a tetrachord are described as moving."],
    ["<span class=\"latin\">Lichanos</span>", "It is an inner sound of its tetrachord, and the inner sounds are the <span class=\"latin\">kinoumenoi</span>. What moves them is the genus, which is the matter of the lesson immediately following."],
    ["<span class=\"latin\">Proslambanomenos</span>", "It is named first in the list of fixed sounds. Standing outside every tetrachord does not make a sound movable — what moves is settled by lying inside a fourth, not beside one."]
  ]},
  { q: "What does the Peripatetic <em>Problems</em> observe about the <span class=\"latin\">mese</span>, and how does the lesson treat the source?", a: 0, o: [
    ["That if it is put out of tune the whole instrument sounds wrong — and the lesson takes the observation while declining the authority", "The compilation is not securely Aristotle’s. The remark likens it to a conjunction among words: the thing by which the rest of the sentence hangs together."],
    ["That it is the highest-sounding string, and the lesson accepts this on Aristotle’s authority", "Two errors travel together here. The lesson expressly declines to lean on that authority, and the pitch you have assigned belongs with a different name in the vocabulary."],
    ["That it never moves when the genus changes, and the lesson makes this its architectural point", "It does stand among the fixed sounds, but that is drawn from the structure of the tetrachords, not from the compilation. The remark quoted there is about tuning and about melody."],
    ["That it should be tuned last, and the lesson rejects the advice as unmusical", "No such advice is given and nothing is rejected here. What the lesson sets aside is the weight of the name attached to the book, not the content of the observation."]
  ]},
  { q: "What is the Lesser Perfect System?", a: 3, o: [
    ["The Greater system with the proslambanomenos removed, giving fourteen sounds", "Removing one sound gives a shortened version of the same system, not a second system, and your count does not match the boxed remark either. That remark describes something added, not something taken away."],
    ["A system of eleven sounds that uses the disjunction twice over", "The count is right and the reason is not. Doubling the disjunction would widen the span past two diapasons, and this is the narrower of the two systems. Re-read the boxed remark."],
    ["The name Boethius gave to the church tones of the Latin Middle Ages", "The boxed remark warns against exactly that sort of transfer, and its warning concerns the names Dorian and Phrygian, not this one. What is described here is a structure of sounds."],
    ["A fourth tetrachord synemmenon, conjunct, branching upward from the mese in place of the disjunction — eleven sounds spanning 8:3", "Taken together with the Greater it was called the Immutable System. Note that 8:3 is a diapason and a diatessaron, so the branch stops a fourth above the octave."]
  ]},
  { q: "The boxed remark warns about the names Dorian, Phrygian and Lydian. What is the warning?", a: 1, o: [
    ["That the Greeks never used them, and they are a medieval invention", "The remark says the Greeks did use them, of tonoi and harmoniai. The trouble is not that the names are late, but that they were carried across to something else and kept their sound."],
    ["That the Greek tonoi and harmoniai and the Latin church tones are not the same thing, though the names were taken over", "The transmission itself is where the tangle begins, and the course lists the question among those it leaves open. Do not let a modern book tell you one word meant one thing throughout."],
    ["That Boethius invented the Greek names to fill a gap in his sources", "He is charged with tangling a transmission, which is a different fault from fabricating one, and the remark treats it as a difficulty rather than a deception. Read what the tangle is said to consist in."],
    ["That the modes are the same in both traditions, so the modern confusion does no harm", "The remark exists in order to deny precisely that. Were they the same there would be nothing to warn against, and no open question to be listed in the Appendix."]
  ]}
],

"sys-2": [
  { q: "What is a genus, on this lesson’s definition?", a: 3, o: [
    ["A way of tuning the whole two-diapason system to a different pitch", "Nothing here moves the system as a whole, and the frame of fourths is expressly said to stand. What changes lies inside a single fourth; find how much of that fourth is at liberty."],
    ["A choice of which tetrachords to use in building a system", "The tetrachords are all present either way; what a genus alters happens within one of them. Count how many sounds of a tetrachord are free to move and you will have the scope of the thing."],
    ["A scale of eight sounds, of which the Greeks had three", "The lesson never counts sounds to define it. It points at a fourth and asks how that fourth is filled — and a fourth holds four sounds, not eight."],
    ["A way of dividing the standing fourth: the outer sounds never move, the two inner ones do", "One and the same fourth is made to sound like a different world. Nothing about the concord itself has changed, and that is the structural point the lesson wants carried into the next chapter."]
  ]},
  { q: "Ascending from the fixed lower sound, how is the diatonic fourth divided?", a: 1, o: [
    ["Tone, tone, leimma", "The three steps are right and their order is not. Read the ascent as the lesson gives it, from the fixed lower sound upward, and note carefully which step is named first."],
    ["Leimma, tone, tone — 256:243, then 9:8, then 9:8", "Multiply the three and you get 4:3 exactly. This is the genus you already possess, and the one the Middle Ages taught first; the other two are variations on the same fixed frame."],
    ["Leimma, apotome, trihemitone", "Those are the steps of another genus on this page, crowding two intervals at the bottom before a wide one at the top. Set the three divisions side by side and match each to its name."],
    ["Two dieses and a ditone", "That is the division of a third genus on this page — the one whose smallest steps have no whole-number ratio at all. Match each of the three divisions to its name before choosing."]
  ]},
  { q: "The chromatic fourth is divided by which three ratios?", a: 2, o: [
    ["256:243, then 9:8, then 9:8", "You have given a division whose two upper steps are equal. The genus asked about is not built that way; read the three ratios the lesson prints immediately beside its name."],
    ["256:243, then 2187:2048, then 81:64", "Your third step is a ditone, two whole tones, and it will not fit. Take a leimma and an apotome from the bottom of a fourth and work out exactly how much room is left above them."],
    ["256:243, then 2187:2048, then 32:27 — leimma, apotome, trihemitone", "The first two together make exactly one whole tone, so the bottom of the fourth is crowded while the top step, of three semitones, yawns. And the fourth itself has not changed at all."],
    ["Two dieses, then a trihemitone", "You have mixed the small steps of one genus with the wide step of another, and left yourself only two intervals where three are wanted. Find the sentence that prints three ratios for this genus."]
  ]},
  { q: "In the chromatic division, what do the leimma and the apotome come to when taken together?", a: 0, o: [
    ["Exactly one whole tone", "256:243 multiplied by 2187:2048 is 9:8. That is why the lesson can say the two lower steps crowd together: between them they occupy no more than a single step of the diatonic."],
    ["A semitone, since each is half of one", "Neither is half of anything — the earlier lesson proved that no such halving exists in this art. Multiply the two ratios out before assuming that the names divide anything evenly."],
    ["Three semitones", "That is the size the lesson gives to the step standing above them, not to the two beneath. Multiply 256:243 by 2187:2048 and compare the result with the interval you have named."],
    ["A ditone, 81:64", "A ditone is what remains of the fourth in another genus entirely, and it is far too wide to sit at the bottom here. Work the multiplication: much of 2187 and 2048 cancels against 243 and 256."]
  ]},
  { q: "How is the enharmonic fourth divided?", a: 3, o: [
    ["Two dieses and a trihemitone", "The wide step you name belongs to another genus, and it is smaller than what must remain here. Take a fourth, remove two very small steps from the bottom, and ask how much is left above."],
    ["A diesis, a tone, and a tone", "Two of the intervals you name are the ordinary steps of another division on this page. Count how many small steps this genus is said to have before you place anything above them."],
    ["A leimma, an apotome, and a ditone", "Those first two steps together are the mark of a different genus, where they make up a whole tone. This one is named from being well-fitted, and its lowest intervals are smaller than either."],
    ["Two very small steps called dieses, then a ditone of 81:64", "81:64 multiplied by 256:243 gives 4:3, so the two dieses together must make up the leimma, and each is half of it. That is precisely where the art runs out."]
  ]},
  { q: "What must the two enharmonic dieses amount to when taken together?", a: 1, o: [
    ["A whole tone, 9:8", "Then the ditone above them would have to shrink, and it does not: the lesson fixes it at 81:64. Take that away from a fourth and see how much room is actually left at the bottom."],
    ["The leimma, 256:243 — each diesis being half of it", "Which is exactly the trouble. The leimma cannot be halved in ratio, so the diesis has no whole-number ratio at all, and Boethius accordingly gives it none."],
    ["An apotome, 2187:2048", "That interval belongs to the coloured genus, where it stands above a leimma rather than beneath a ditone. Compute what remains of 4:3 once 81:64 has been taken away from the top."],
    ["Nothing exact, since neither of them has a ratio", "The pair has an exact ratio although neither member does, and that asymmetry is the very thing the lesson reports. Subtract the ditone from the fourth and you will have their sum in whole numbers."]
  ]},
  { q: "What does the lesson report about the numbers in Boethius’s fourth book?", a: 0, o: [
    ["That his monochord string-lengths for the chromatic and enharmonic are approximations, and do not agree with the exact ratios of his first book", "The lesson refuses to hide it. A genus the art could name and could not measure will show itself as a discrepancy the moment anyone tries to cut a string to it."],
    ["That he corrected the ratios of his first book, having found them mistaken", "No correction is claimed. The disagreement between the two books is not a change of mind but the mark of a division that cannot be given exactly in whole numbers at all."],
    ["That he omitted the chromatic and enharmonic from the monochord altogether", "He supplies numbers for them; the difficulty lies in what sort of numbers they are. Read the sentence about the fourth book again and note what it says he sets out there."],
    ["That the discrepancy is carelessness, which the lesson excuses on his behalf", "The lesson says expressly that it is not carelessness, and it excuses nothing — it reports. Ask what would have to be true of the art itself for exact numbers to be unavailable here."]
  ]},
  { q: "What does the lesson suggest follows from the enharmonic being nameable but not measurable?", a: 2, o: [
    ["That the ancients reckoned it the crudest of the three", "They reckoned it the opposite, and the lesson ties that estimate to its difficulty rather than against it. A thing hard to sing was not, for them, a thing held cheap."],
    ["That it was never actually sung", "The lesson says it was hard to sing and that it fell out of use, both of which presuppose that it was once in use. Difficulty of execution is not impossibility."],
    ["That it was very likely reckoned the most refined of the three, the hardest to sing, and the first to fall out of use", "The lesson draws a further point from this: an art that knows where its own instruments stop is in better condition than one that does not."],
    ["That the theorem of the earlier lesson must be mistaken", "The theorem stands, and the lesson leans upon it rather than doubting it. Where a demonstration and a practice disagree, this page gives an honest report; it does not withdraw the proof."]
  ]},
  { q: "The boxed remark concerns the characters ascribed to the genera. What does the lesson do with them?", a: 3, o: [
    ["It builds the doctrine of the genera upon them, as Aristotle does in the <em>Politics</em>", "The lesson names that book and grants that such ascriptions were taken seriously, but says in the same breath that nothing demonstrated in this course rests upon them."],
    ["It denies that any such ascriptions were ever made", "It reports that the ascription was made, and cites a legislator who took it seriously enough to act on it. Denying the fact is a different thing from declining to build on it."],
    ["It treats them as part of the arithmetic, since character follows from ratio", "The remark assigns them elsewhere — to a different study of music, named in the first chapter of this course. Character is not among the things these ratios demonstrate."],
    ["It reports that the ascription was made, assigns the matter to the second study of music, and builds nothing upon it", "The same discipline governs the Peripatetic remark about the mese in the previous lesson: take what is observed, and do not lean on the authority attached to it."]
  ]},
  { q: "What is the structural lesson said to govern everything in Chapter VII?", a: 1, o: [
    ["That the fourth may be filled in three ways and no more", "Three is a fact about Greek practice, not a limit the arithmetic imposes. The closing paragraph looks forward to fillings of the diapason that the Greeks never used at all."],
    ["The concords are fixed by number and do not move; the filling is a choice within limits", "Which is why later Europe, filling the diapason with a third at 5:4 and then with twelve equal steps, is doing what the Greeks did — on a larger scale and for a different reason."],
    ["That every division must come out in whole numbers", "One of the three divisions on this very page does not, and the lesson refuses to conceal the fact. A rule contradicted by the page that states it is not the rule being taught."],
    ["That the genus determines which concords are available", "The concords stand whatever the genus does, which is the whole force of saying the outer sounds never move. You have made the variable govern the fixed; look again at which is which."]
  ]},
  { q: "Across all three genera, what does <em>not</em> change?", a: 2, o: [
    ["The size of the second step up from the bottom", "That step is a tone in one division, an apotome in another and a diesis in a third. Compare the three lists the lesson prints and see how little the inner sounds have in common."],
    ["The number of small steps at the bottom of the fourth", "One division begins with a single small step, another with two crowded together at the bottom. Set the three ascents side by side and count them before you choose."],
    ["The outer sounds, and so the fourth itself — 4:3 in every genus", "Multiply the three steps of any one of the divisions and you get 4:3. The frame is fixed by the arithmetic; only what stands inside it is at liberty to move."],
    ["The character the genus is said to bear", "The lesson reports that different characters were ascribed to the different genera, so this is precisely what did not hold constant. And the matter is in any case assigned to another study."]
  ]}
]

});

/* ---- E ---- */
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"vi-1": [
  { q: "Which of Boethius’s three kinds of music is the proper subject of the liberal art this course has been teaching?", a: 2, o: [
    ["<span class=\"latin\">Musica mundana</span>, since the ratios were first found in the heavens", "The ratios of this art were found on a string, and the lesson denies that the heavens sound at all. Return to the first paragraphs and ask which kind the monochord has been demonstrating all along."],
    ["<span class=\"latin\">Musica humana</span>, the proportion of soul to body", "That is a real analogy in Boethius, but the lesson sends it to Ethics and <span class=\"latin\">De anima</span>, which treat it more properly. A liberal art is known by the subject its own principles can reach."],
    ["<span class=\"latin\">Musica instrumentalis</span> — sounding music of string, wind and voice", "Everything you have heard on the monochord belongs here. The other two are not thereby dismissed; they are handed to sciences whose principles can carry them further than harmonics can."],
    ["All three equally, since Boethius makes no order among them", "The lesson does make an order, and it turns on which kind the art’s own principles can reach. Re-read what it says harmonics may claim without trespassing."]
  ]},
  { q: "Aristotle, in <span class=\"latin\">De caelo</span> II, denies that the heavenly bodies make sound. On what ground?", a: 0, o: [
    ["They do not strike a medium, as a string strikes the air", "Sound requires a body struck and a medium to carry it. Thomas follows him in the commentary at II, lect. 14, and so this course says there is no concert in the sky."],
    ["The spheres move too slowly for their motion to be audible", "Speed is not the objection, and those who held the doctrine thought the motion very fast indeed. Ask what a sound needs in order to exist at all, rather than how fast a thing must move."],
    ["Their sound is too constant, so that we have grown deaf to it", "That is the old defence of the doctrine, offered by those who held it. You have chosen the reply Aristotle is arguing against, and mistaken it for his argument."],
    ["Scripture nowhere mentions such a sound", "This is an argument of natural philosophy about bodies and media, not an argument from silence in the sacred text. The lesson cites Wisdom for something else entirely."]
  ]},
  { q: "In what sense does the lesson allow <span class=\"latin\">musica mundana</span> to be true?", a: 3, o: [
    ["As audible chords sounded by the planets, faint but real", "This is precisely the physical claim the lesson rejects with Aristotle and Thomas. Distinguish a doctrine of cosmic order from the claim that something is actually heard."],
    ["As a poetic figure with no truth in it, tolerated out of respect for Boethius", "The lesson refuses both mockery and inflation. It holds that the doctrine is true in one sense, not that it is empty and politely endured. Re-read the boxed remark."],
    ["As a proof that the human soul is tuned like a string", "You have crossed from the world to the human being, which is the second of Boethius’s three kinds. And the lesson warns against turning any tetrachord into a map of the soul."],
    ["As the ordering of the cosmos in number, measure and weight — Wisdom 11:21, which Thomas reads at ST I q.5 a.5", "So stated it is a cosmological truth, and astronomy is the middle science that shows that order to the eye as harmonics shows order to the ear."]
  ]},
  { q: "<span class=\"latin\">Musica humana</span>, in Boethius, names what?", a: 1, o: [
    ["The art of singing, as distinct from playing on instruments", "Voice is counted with the instruments in this division, since it too strikes the air. You have divided by the means of sounding, where Boethius is dividing by something else."],
    ["The proportion of soul to body, and of the parts of the soul to one another", "Boethius means a real analogy: the order that makes two strings concordant is the kind of order that makes a living human being one. Ethics and <span class=\"latin\">De anima</span> treat it more properly."],
    ["Music considered as a human invention rather than a natural fact", "Nothing in the division turns on invention or discovery. Ask what each of the three kinds is a proportion <em>of</em>, and you will see the principle by which Boethius cuts."],
    ["The moral effect of melody upon the hearer", "That effect is real, and Thomas grants it; but this course treats it under the use of music. This kind is defined by what it is a harmony of, not by what it does to a listener."]
  ]},
  { q: "St. Thomas, quoting Augustine at ST II-II q.91 a.2 ad 5, says that music moves the passions by what?", a: 2, o: [
    ["A direct causal action of number upon the humours", "That is a stronger and more mechanical claim than the text makes, and it would need a physiology the lesson never supplies. Look for the guarded phrase Thomas actually uses."],
    ["An imitation of the motions of the heavens", "The heavens are elsewhere in this lesson, and their motion is offered as the cause of nothing in the soul. You have joined two of Boethius’s kinds that the lesson keeps carefully apart."],
    ["A “hidden correspondence” of melody to affection", "Hidden — that is, admitted as a fact and not explained by harmonics. A first-principles course may grant this much, and should not inflate it into a demonstration."],
    ["The 3:2 of the sesquialter ratio, found in the soul as in the string", "This is exactly the forcing the lesson forbids: a ratio of sounding lengths pressed into service as a proof in psychology. Analogy is not demonstration."]
  ]},
  { q: "How does the lesson describe the relation between music and astronomy?", a: 1, o: [
    ["As two performances of one symphony, the audible and the inaudible", "The lesson uses that phrase only in order to deny it. Ask what the two sciences are said to share, and how narrowly the sharing is bounded."],
    ["As companions in a limited sense: the same first ratios that please in sound are among the first ratios by which ordered motion is intelligible", "Companionship, not identity. Notice how carefully the claim is bounded — this is what harmonics may say without trespassing on cosmology."],
    ["As identical sciences, differing only in the sense to which they address themselves", "They share a kind, both being middle sciences, but they have different subjects and different demonstrations. Sameness of method is not sameness of science."],
    ["As unrelated, since astronomy has no use for ratio", "Astronomy is described here as the middle science that shows order to the eye. To deny it ratio is to deny it the very thing that makes it a middle science."]
  ]},
  { q: "Plato’s <span class=\"latin\">Timaeus</span> uses the musical ratios to mark out the world-soul. How does the lesson classify that use?", a: 0, o: [
    ["As a cosmological claim, and not a harmonics class", "The ratios travel; the science does not travel with them. Harmonics keeps its own bounds even when its numbers are borrowed by another discipline."],
    ["As a demonstration within harmonics, since the ratios are the same", "Sameness of numbers does not make sameness of science. Ask what the subject of harmonics is, and whether a world-soul is a sounding body."],
    ["As an error that Thomas corrects in his commentary", "What Thomas corrects, following Aristotle, is the claim that the heavens sound. The <span class=\"latin\">Timaeus</span> passage is not treated here as a thing to be refuted."],
    ["As a poetic ornament with no doctrinal weight", "The lesson does not dismiss it; it places it, assigning it to the discipline that can properly carry it. Placing a claim and voiding it are different acts."]
  ]},
  { q: "‘Analogy is not demonstration.’ What error is that sentence guarding against?", a: 3, o: [
    ["Denying that any analogy holds between soul and sound", "The lesson explicitly refuses to call the analogy empty. The warning cuts the other way, against a certain use of analogy rather than against its existence."],
    ["Using demonstrations where an analogy would be more persuasive", "Persuasion is not the issue; what a given argument establishes is. Ask which of the two the lesson says may never be substituted for the other."],
    ["Boethius’s division of music into three kinds", "The division is part of the tradition and the lesson keeps it. What it guards against is a particular way of pressing one of the three kinds into service."],
    ["Turning every tetrachord into a map of the soul, or a string’s 3:2 into a proof in psychology", "The art does not become more liberal by being inflated into a worldview. It becomes more liberal by being known as far as its principles go, and by knowing where they stop."]
  ]},
  { q: "How does the lesson say Boethius’s threefold division ought to be read?", a: 2, o: [
    ["As Thomas’s own teaching, since Thomas received the tradition", "Thomas received it and corrected part of it. To read the division as if he had written it is to lose exactly the correction the lesson is at pains to make."],
    ["Against Thomas, since Aristotle overturns the third kind", "The lesson refuses that posture. It does not set the tradition and the correction at war; it reads the one in the light of the other. Look at the first paragraph again."],
    ["With Thomas: not against him, and not as if Thomas had written it", "Both halves of that instruction matter. The division stands as tradition, one part of it is corrected by natural philosophy, and neither fact cancels the other."],
    ["As superseded, now that the monochord has replaced it", "The monochord demonstrates within one of the three kinds. An instrument that works inside a division cannot by itself abolish the division."]
  ]},
  { q: "A student says the art would be grander if every interval were shown to mirror something in the soul or the heavens. What does the lesson answer?", a: 1, o: [
    ["That he is right, and this is why <span class=\"latin\">musica mundana</span> stands first in Boethius", "Order in a division is not a ranking by grandeur, and the lesson warns against inflation in plain terms. Re-read the boxed remark before you answer."],
    ["That the art does not become more liberal by being inflated into a worldview, but by being known as far as its principles go and knowing where they stop", "Knowing the bound is itself part of the knowledge. This is the same discipline that let you say what the monochord shows and what it cannot show."],
    ["That such mirroring is impossible, since number in sound and number in the soul are merely equivocal", "The lesson nowhere denies the correspondence; it declines to treat it as proved by harmonics. A refusal to demonstrate is not a denial."],
    ["That Boethius should be mocked for having tried it", "The boxed remark opens by forbidding exactly that. Distinguish correcting a physical claim from ridiculing the man who made it."]
  ]},
  { q: "Where does the singing voice fall in Boethius’s division?", a: 0, o: [
    ["Under <span class=\"latin\">musica instrumentalis</span>, which the lesson expressly extends to the voice", "The division cuts by what sounds, not by whether wood or flesh does the sounding. This is why everything demonstrated on the monochord carries over to a choir."],
    ["Under <span class=\"latin\">musica humana</span>, since the voice is human", "The name misleads if it is taken that way. That kind is defined by a proportion within the living being, not by whether a human being is producing the sound."],
    ["Under both, since the voice is an instrument of the soul", "A graceful thought that blurs the cut Boethius is making. Ask what each of those two kinds is a proportion of, and you will find that they do not overlap."],
    ["Outside the division, which concerns only artificial instruments", "Then the greater part of the music this lesson is about would fall outside music altogether. Re-read the sentence naming what instrumental music includes."]
  ]}
],

"vi-2": [
  { q: "Boethius divides those who have to do with music into three. Which three?", a: 1, o: [
    ["Those who compose, those who teach, and those who judge", "Teaching does not appear in the division at all. Two of the three you have named are in it; go back and see what stands in the place of the third."],
    ["Those who play instruments, those who invent songs, and those who judge", "And only the last are <span class=\"latin\">musici</span> in the strict sense. The other two have skill or gift, which the division neither denies them nor confuses with science."],
    ["Those who sing, those who listen, and those who write music down", "Listening and writing are not terms of this division. Notation is four centuries later than Boethius, and it belongs to a different chapter of this course."],
    ["The theorist, the performer, and the patron", "The patron has no place in a division made by what habit a man possesses. Ask what each of the three <em>does</em> with respect to the art itself."]
  ]},
  { q: "Why does Boethius call only the third class <span class=\"latin\">musici</span>?", a: 3, o: [
    ["Because judging is harder than performing", "Difficulty is not the criterion, and the lesson is careful to say the definition requires no contempt for singers. Ask what kind of habit the division is sorting by."],
    ["Because judges are ordinarily also the best performers", "The lesson says the reverse can happen in either direction: a flawless performer may lack the science, and a judge of ratios who cannot perform may have it."],
    ["Because performers work for pay and so are not free men", "That argument appears nowhere in this lesson. The distinction drawn here is between two habits, one of them belonging to the hands or the throat."],
    ["Because they possess the science; the art is a work of reason", "Thomas’s account of the liberal arts agrees in substance. Notice the cost of the definition: it must not be confused with contempt for the man who sings."]
  ]},
  { q: "What practical qualification does the lesson attach to this definition?", a: 2, o: [
    ["That a performer should never be consulted about ratios", "The lesson attaches no such prohibition, and it warns against reading the definition as contempt. You have taken a distinction of habits for a ranking of persons."],
    ["That the science is useless without performance", "The science is complete as science; that is the whole point of calling the judge a <span class=\"latin\">musicus</span>. The qualification the lesson offers is milder, and it runs the other way."],
    ["That in practice the ear that has never sung is a poor judge", "So the definition separates two habits without recommending that either be neglected. A distinction drawn in principle is not a programme for a life."],
    ["That judging requires no ear at all, only arithmetic", "The subject of this art is sounding pitch as heard, so an art without an ear would have lost its subject. Re-read the line the lesson gives as the subject."]
  ]},
  { q: "Song in church and the delight of hearing belong to what, and are treated where?", a: 0, o: [
    ["To the <em>use</em> of music, which Thomas treats in ST II-II q.91", "None of it is the liberal art, and none of it is cancelled by the liberal art. The science tells you what a concord is; prudence tells you when to sing."],
    ["To the liberal art, as its practical part", "The lesson denies that they belong to the art at all, while insisting they are not thereby abolished. Ask which habit judges the fittingness of singing on a given occasion."],
    ["To <span class=\"latin\">musica humana</span>, as a proportion of soul to body", "You have reached back to Boethius’s division of the kinds of music rather than to the question of use. The lesson gives a precise place in Thomas for this matter."],
    ["To no discipline, being matters of taste", "Thomas gives them a question of their own in the <span class=\"latin\">Summa</span>, with distinctions about when they are salutary and when abused. That is not what taste means."]
  ]},
  { q: "According to the lesson, when is song abused?", a: 2, o: [
    ["When it employs instruments of any kind", "Instruments are treated with caution in one respect only, and caution is not prohibition. Look for the two specific faults the lesson names."],
    ["When it departs from the diatonic genus", "The genera are listed among the things that remain and are not first, and they have nothing to do with the moral question. This is a matter of use, not of tuning."],
    ["When it aims at display, or when the tune swallows the words", "Both faults are disorders of end: the song is for devotion, and devotion is what gets displaced. Instruments that move to pleasure rather than to a good disposition draw the same caution."],
    ["Whenever it gives pleasure", "Melody moves the soul, and that is exactly why the lesson calls song a salutary help to devotion. Pleasure is not the fault; ask what the fault does to the end of singing."]
  ]},
  { q: "‘The science tells you what a concord is; prudence tells you when to sing.’ What is that sentence dividing?", a: 3, o: [
    ["Theory from practice within the liberal art", "Both halves would then be parts of one art, which is what the sentence denies. One of the two habits named is not a liberal art at all."],
    ["Boethius from Thomas", "They are not opposed in this lesson; Thomas’s account is said to agree with Boethius in substance. The sentence divides two habits, not two authorities."],
    ["Arithmetic from harmonics", "That division is real and belongs to the account of a middle science, but neither of those two settles an occasion. Ask which habit governs a choice about acting."],
    ["The liberal art from moral science", "Each is sovereign in its own order, and neither answers the other’s question. Confusing them is the commonest way of misjudging what this course has been teaching."]
  ]},
  { q: "The lesson lists the first principles. What does it give as the <em>subject</em> of the art?", a: 1, o: [
    ["Number, considered absolutely", "That is the subject of arithmetic. This art borrows arithmetic’s demonstrations but does not take over its subject; that is precisely what makes it a middle science."],
    ["Sounding pitch, as heard", "As heard — the ear is never dismissed here. What is added to hearing is the cause, which the same list gives on its own separate line."],
    ["The ratio of the sounding quantities", "The list names this too, but on a different line and under a different heading. You have taken the cause of a thing for the thing itself; keep the two apart."],
    ["The diatonic filling of the diapason", "That is named in the list as the art’s work, which is what the art does with its subject rather than what it is about. Re-read the six lines in order."]
  ]},
  { q: "What kind of science does the list say this is?", a: 0, o: [
    ["Middle: arithmetic applied to sound", "A middle science takes its demonstrations from one science and its subject from another. Astronomy stands to sight as this art stands to hearing."],
    ["Natural: a part of the science of moving bodies", "A string is a moving body, but the demonstrations here are not drawn from natural philosophy. Ask where the proofs come from, not where the sounding thing comes from."],
    ["Purely mathematical, since it proceeds by ratio", "Then the ear would be superfluous, and the list would not have named a sensible subject at all. Ratio is only half the account; look for what the other half contributes."],
    ["Practical, since its end is a work", "The list does name a work, but a science is classed by how it knows and not only by what it produces. And the whole lesson turns on the art being a habit of the intellect."]
  ]},
  { q: "Which of these does the lesson place among the things that ‘remain, and are not first’?", a: 2, o: [
    ["The ratio 9:8 as the step of the scale", "That is one of the six lines you are told you now possess. What remains is what could not properly be had until those lines were in place."],
    ["The demonstration that 2:1 is the first concord", "The first concords are listed among the principles already gained. You have chosen from the wrong side of the divide the lesson draws."],
    ["The church modes and the Guidonian hexachord", "So too the chromatic and enharmonic genera, the Greater Perfect System, Ptolemy’s complete tables, Augustine’s metrics, composition, and the ethics of melody in full."],
    ["The claim that the musician is the one who judges", "That claim is the substance of this very lesson, and of Boethius I.34 behind it. Ask what the phrase ‘not first’ is being contrasted with."]
  ]},
  { q: "Why does the course go on to walk one of the roads it calls ‘not first’?", a: 3, o: [
    ["Because the first principles are incomplete without it", "The lesson says the opposite: you now have the first principles, and the later road is expressly not first. Incompleteness is not the reason given."],
    ["Because later music refuted the Boethian art", "That is the very claim the lesson wants you armed against. Ask why a student might be vulnerable to it, and you will have the reason for the journey."],
    ["Because the tempered instruments of later Europe are more perfect", "No such judgment is offered. The chapter is described as asking a question at its end, not as awarding a prize to one age over another."],
    ["Because a student who knows the art and nothing of what became of it is easy prey for the claim that the art was refuted", "And the chapter ends by asking which of the six lines still stand. The lesson adds a caution: do not read it before the string is in your ear."]
  ]},
  { q: "The lesson sends you back to the monochord. At what points does it tell you to halt the string?", a: 1, o: [
    ["At 1, 2/3, 1/2 and 1/3", "Three of these are on the list and the fourth is not. Count the four stopping points the lesson names, and ask what ratio each sounds against the open string."],
    ["At 1, 3/4, 2/3 and 1/2", "Which is to say the unison, the diatessaron, the diapente and the diapason. Hear them apart and together, and say what you are hearing; that is where the art begins."],
    ["At 8/9, 3/4 and 2/3 only", "One of these gives the tone, which is the step rather than a concord, and the open string itself is missing. The instruction names four points, and it begins with the string unstopped."],
    ["Wherever the ear finds a pleasing sound", "The whole method of the instrument is that the lengths are fixed in advance and the ear then judges what they give. Reversing that order gives up the demonstration."]
  ]}
],

"vii-1": [
  { q: "Around what year did Guido of Arezzo give the singers lines of fixed pitch, and what did those lines carry?", a: 2, o: [
    ["c. 900; a staff with note-shapes showing duration", "You have moved a century early and taken up the wrong quantity. Duration on the page is a much later achievement, and it belongs to a different name in this chapter."],
    ["c. 1280; a staff with letters marking the semitone", "The letters are right; the date belongs to another figure entirely, and to the writing of time rather than of pitch. Check the chapter’s first timeline row."],
    ["c. 1030; a staff with letters to fix where the semitone falls", "With it came the syllables <span class=\"latin\">ut re mi fa sol la</span>. Once pitch is written, sung music has a record that can be copied, compared, criticized and studied."],
    ["c. 1320; a staff of five lines with a clef", "That date names the <span class=\"latin\">ars nova</span> and not Guido, and the lesson says nothing about five lines or clefs. Look again at the row that opens the timeline."]
  ]},
  { q: "What difficulty were the singers of about the year 1000 actually facing?", a: 0, o: [
    ["An enormous chant repertory carried in the memory, which had to be taught, corrected, and sent four hundred miles without error", "A problem of transmission, not of theory. The schools were teaching Boethius and answering a quite different question."],
    ["That the Boethian ratios had been shown to be false", "Nothing in this chapter refutes the ratios, and the boxed remark insists on that in so many words. Ask what the singers wanted that the science was not being asked for."],
    ["That they could not agree which intervals were concords", "The concords were settled and assumed. The trouble lay in getting a particular melody from one place and one memory to another intact."],
    ["That the chant repertory was too small to fill the liturgical year", "The lesson says it had grown enormous, which is the opposite complaint. Re-read the paragraph describing what the men who sang were up against."]
  ]},
  { q: "The lesson is careful about what Guido did <em>not</em> do. Which statement does it make?", a: 3, o: [
    ["He invented the hexachord with its mutations and its famous hand", "That system is the elaboration of later theorists working on what he left them. The lesson separates the man from the tradition built in his name."],
    ["He invented notation out of nothing", "He presents himself as improving what he found, and something was already in use before him. Ask what kind of notation the ninth and tenth centuries already had."],
    ["He composed the hymn to St. John from which the syllables come", "The syllables are taken from a hymn whose lines happen to begin one step higher each time. Taking a thing and making it are different acts."],
    ["He drew his syllables from a hymn already in existence, and improved a notation already in use", "The hexachord system, with its mutations and its hand, is later theorists’ work and not his. Reformers are more often improvers than inventors."]
  ]},
  { q: "Where do the syllables <span class=\"latin\">ut re mi fa sol la</span> come from?", a: 1, o: [
    ["From the Greek tetrachord names, latinised", "The Greeks are elsewhere in this course, and their names are not these. Look for a source in the liturgy that Guido’s singers already had by heart."],
    ["From a hymn to St. John whose lines happen to begin one step higher each time", "The word ‘happen’ is doing real work there: it was a found convenience and not a design. Teaching devices are very often like this."],
    ["From the first six letters used to fix the semitone on the staff", "Letters and syllables are two different devices, and the lesson names them separately. Ask where a set of six words, rather than six letters, would have to come from."],
    ["From Boethius, who lists them in <span class=\"latin\">De institutione musica</span>", "Boethius has no such syllables, and the whole point of the split described here is that the singers needed what the science had never given them."]
  ]},
  { q: "What did the medieval schools mean by <span class=\"latin\">musica speculativa</span> and <span class=\"latin\">musica practica</span>?", a: 1, o: [
    ["A theory of composition, and a theory of performance", "Both halves of what you have named would fall on one side of this split. One of the two terms names a quadrivial science, not a theory about music-making."],
    ["The science — Boethius, ratio, the monochord, the quadrivium — and the singer’s art", "Boethius had already ruled that the <span class=\"latin\">musicus</span> is the one who judges. The medievals kept the honour with the judge and gave the work to the singer."],
    ["Music heard in the mind, and music actually sounded", "This makes the division one of where the music occurs. The lesson divides by what kind of knowing or doing is involved, which is a different cut altogether."],
    ["Sacred music, and secular music", "Neither term concerns the use to which music is put. Both name disciplines, and they are distinguished by their principles and their practitioners."]
  ]},
  { q: "Over the four centuries after Guido, what happened to the two musics?", a: 0, o: [
    ["They drifted apart, the honour staying with the judge and the work going to the singer", "That divorce sets up the whole chapter. A discipline can keep its dignity for a long while after it has stopped being asked the questions that matter to the men working."],
    ["The science absorbed the practice and gave it rules drawn from ratio", "The chapter tells the opposite story, and the next lesson shows that the working rules came from somewhere other than ratio. Re-read the paragraph on the split."],
    ["The practice was condemned by the schools as unlearned", "No condemnation is described. The medievals honoured the judge without attacking the singer; what happened between them was slower and quieter than a quarrel."],
    ["They were fused by Guido’s staff into a single discipline", "The staff gave the practice a record of its own, which made it more able to stand apart rather than less. Ask what a written practice can now do without the science."]
  ]},
  { q: "The boxed remark says this is ‘not yet a decline’. Why not?", a: 2, o: [
    ["Because the science continued to grow through these centuries", "Growth is not what the box claims. It claims something weaker and more precise about the science’s standing, which is compatible with its producing nothing new at all."],
    ["Because the practice remained subordinate to the science throughout", "The lesson has just described the two drifting apart. Subordination is exactly what was lost, and the box defends the science on other grounds."],
    ["Because the science was not refuted; it stopped being asked the questions that interested the men doing the work", "Silence is not error. But the box adds a warning: a discipline silent for four centuries while its subject matter flourishes may find that someone else has taken the subject matter."],
    ["Because no one in this period doubted Boethius", "What people happened to believe is not the point being made. The box is distinguishing two ways a science can fall out of use, only one of which is a failure of the science."]
  ]},
  { q: "What does the boxed remark say the first ratios <em>cannot</em> tell you?", a: 3, o: [
    ["What a fifth is", "That is offered as an example of what they can do, and it is the very thing the box grants the science. Read the sentence through to its second half."],
    ["Which of two strings is the longer", "That is not a musical question at all, and nothing in the chapter raises it. Look for the two questions the singers had that the science had no means to answer."],
    ["Why 2:1 sounds concordant", "This is precisely what a middle science does answer, by giving the cause in ratio. You have named a success of the art and called it a limit."],
    ["How two independent voices should move against one another, or how long a syllable should be held", "A middle science answers what its principles can reach. Both of these become the business of the next lesson, and neither is settled by ratio."]
  ]},
  { q: "The chapter’s timeline gives ‘temperament: the ratios deliberately bent’ under which dates?", a: 1, o: [
    ["1300–1558", "Those dates belong to a different row, and to a widening of concord rather than a bending of ratios. Go back to the six rows and match each phrase to its span."],
    ["1523–1850", "The word ‘deliberately’ is the point: what had been a bound of reason became a thing to be adjusted. That story is told in its own lesson later in the chapter."],
    ["1636–1737", "That span belongs to the row about a new cause for concord, not about the tuning of it. The rows run in order; count down from the top."],
    ["1547–1830", "That is the last row of the six, and it concerns an architecture in time rather than tuning. Check which phrase sits beside those years."]
  ]},
  { q: "For what three reasons does the chapter say we walk this road?", a: 0, o: [
    ["To see what later ages added, what they gave up and why, and which of your six lines still stand", "The third reason is the governing one. The chapter is a test of the principles you already hold, not a substitute for them."],
    ["To learn the repertory, to learn the notation, and to learn to compose", "None of these is offered as a purpose, and the course elsewhere places composition among the things that are not first. Re-read the opening paragraph."],
    ["To show that the Boethian art was superseded", "The chapter says that what follows is not a new set of principles, and its box denies that the science was refuted. You have named the conclusion it is guarding against."],
    ["To trace the history of the Church’s chant", "The chant appears as the occasion of one difficulty, not as the subject of the journey. Ask what the road is said to lead <em>to</em>."]
  ]},
  { q: "Which phrase does the timeline attach to the years 1300–1558?", a: 3, o: [
    ["Guido of Arezzo: pitch is written down", "That row stands at the top of the timeline with a single date, and the date is nowhere near this span. Match the rows to their years again."],
    ["Many voices at once, and time measured", "That row does overlap this span at its beginning, but its own years reach much further back. Look at where each row starts, not only where it ends."],
    ["Key, and an architecture in time", "That is the last row, and its span begins in the sixteenth century and runs into the nineteenth. Compare the two sets of years closely."],
    ["The third admitted; the bound of concord widened", "A bound set by the first four numbers gives way to one set by the first six. That is the matter of a later lesson in this chapter."]
  ]}
],

"vii-2": [
  { q: "What is the <span class=\"latin\">Musica enchiriadis</span>, and to whom is it now ascribed?", a: 1, o: [
    ["A treatise of about 1100 by Johannes Cotto, giving the rules of organum", "Cotto’s <span class=\"latin\">De musica</span> is real and is cited here, but it is later and it is not the first of its kind. Check the date the lesson gives for the first surviving rules."],
    ["An anonymous treatise from near the end of the ninth century, once ascribed to Hucbald and now to no one in particular", "It is the first surviving text that gives rules for singing two lines together. Notice that the great turn in the art’s object comes from a book with no author."],
    ["Hucbald’s treatise, the first to give rules for two voices", "The ascription to Hucbald was made and has since been given up. Half of your answer is what the lesson says; the other half is what it says was once believed."],
    ["A twelfth-century Notre Dame treatise on the singing of many voices", "Notre Dame belongs to this lesson, but two centuries later and under two names. The treatise in question is older than the polyphony of Leoninus."]
  ]},
  { q: "In parallel organum, what does the added voice do?", a: 0, o: [
    ["It doubles the given chant at the fifth or the fourth throughout", "The other manner the treatise describes begins in unison, opens out, and bends back — precisely to avoid the harsh interval that strict parallel motion would produce."],
    ["It moves always contrary to the chant", "Contrary motion is not what the word ‘parallel’ describes, and the lesson gives it as the other manner’s remedy rather than as the rule. Re-read the first paragraph."],
    ["It doubles the chant at the third or the sixth", "Those intervals are not admitted as concords for another four hundred years, which is the matter of the next lesson. Ask which intervals this art has so far demonstrated."],
    ["It repeats the chant a beat later, in imitation", "Nothing in this treatise concerns entries at different times, and measured time is not yet on the page at all. That comes later in this very lesson."]
  ]},
  { q: "How did the object of the art change with organum?", a: 3, o: [
    ["From sound to number", "Number was the cause from the beginning; that is what made the art a middle science. The change described here is in what the art considers, not in what explains it."],
    ["From the interval to the scale", "Both of these belong to classical harmonics, and the lesson names them together as what came before. The new object is neither of them."],
    ["From the voice to the instrument", "Voice and instrument were never separated in this art’s subject, since both sound. Ask what is new in what is being looked at, not in what produces it."],
    ["From an interval, and then a scale, to a succession of simultaneities", "Not what a fifth is, but how a whole line of them may lawfully move. That question cannot be answered by ratio alone, and the rules that answer it are of another kind."]
  ]},
  { q: "Given a chant and the rules of organum, what can you do — and what can you not?", a: 2, o: [
    ["You can derive why 3:2 is a concord, but cannot generate any particular organum", "You have the two capacities exactly reversed. Ask what a rule saying ‘this combination is admissible’ is able to produce, and what it must simply assume."],
    ["You can do both, since the rules follow from the ratios", "The lesson denies that they follow from the ratios at all: they are not demonstrations. Were they, the next four centuries would look very different."],
    ["You can generate every organum of that style; you cannot derive from them why 3:2 is a concord", "That was already known, and assumed. A grammar of a practice takes its materials as given and legislates only over their combination."],
    ["You can do neither without Boethius at your elbow", "The rules work on their own for the purpose they were made for. What they cannot do is prove the thing they take for granted."]
  ]},
  { q: "The boxed remark distinguishes two kinds of principle. Which kind is most music theory since the tenth century?", a: 1, o: [
    ["Deriving: principles from which the patterns follow necessarily", "That is the kind the first ratios belong to, and the diatonic scale is what follows from them. The box says most later theory is of the other kind."],
    ["Restricting: saying which things are admissible, without generating any particular one", "The box adds that this is not a criticism but a statement of what sort of knowledge it is. The rules of counterpoint restrict; the first ratios derive."],
    ["Neither, since counterpoint rules are demonstrations from a new set of ratios", "No new ratios are offered by the rules of counterpoint, and the lesson is at pains to say that they are not demonstrations. Look at the two kinds the box actually names."],
    ["Both at once, since every rule both restricts and derives", "The box separates them precisely because they come apart. A rule can forbid a great deal and still produce nothing whatever on its own."]
  ]},
  { q: "Leoninus and Perotinus worked at Notre Dame in roughly which years, and what difficulty did their music make unavoidable?", a: 3, o: [
    ["1160 to 1230; the need to widen the bound of concord to the third", "The dates are right and the difficulty is not. The third is admitted much later, and by a quite different route."],
    ["1280 to 1320; the need to write the length of every note", "The difficulty is right, and those dates belong to the men who answered it rather than to the men who created it. Keep a problem and its solution apart in time."],
    ["1100 to 1160; the need for a staff of fixed pitch", "Pitch was already on the page before them, as the previous lesson describes. Ask what second quantity a note possesses besides its height."],
    ["1160 to 1230; the need to write the length of every note, and not merely its height", "Three men singing different lines at once cannot be coordinated by pitch alone. Augustine’s half of the art at last receives an instrument."]
  ]},
  { q: "What did Franco of Cologne’s <span class=\"latin\">Ars cantus mensurabilis</span> codify, and about when?", a: 0, o: [
    ["About 1280: that the shape of a note carries its duration", "The system is still ternary and still context-dependent, and Franco gathers up practices already in motion rather than inventing alone. But time is now on the page."],
    ["About 1321: the admission of duple as well as triple division", "That date and that innovation belong to the next generation and to another treatise. Franco’s achievement is more basic than a choice between two divisions."],
    ["About 1030: the fixing of pitch by lines and letters", "You have gone back to the previous lesson and to another man entirely. Franco’s subject is the other quantity a written note can carry."],
    ["About 1330: a defence of the ancients against the moderns", "That is the work of an aged critic writing against what Franco’s system made possible. Franco stands on the other side of that quarrel, and earlier."]
  ]},
  { q: "What did the <span class=\"latin\">ars nova</span> of the 1320s admit, and under whose name do its texts circulate?", a: 2, o: [
    ["The third as a concord; the texts are Odington’s", "That is another lesson’s business and another country’s. The <span class=\"latin\">ars nova</span> is a reform of time, not of the bound of concord."],
    ["Duple as well as triple division; securely the work of Philippe de Vitry", "The innovation is right, but the lesson is deliberately cautious about that attribution and points to a scholarly doubt. Read the sentence again, and the note in the sources."],
    ["Duple as well as triple division; texts circulated under Philippe de Vitry’s name, and more securely the work of Johannes de Muris", "The caution matters. Sarah Fuller’s paper of 1985–86 asks whether the treatise under Vitry’s name existed at all, and the lesson keeps that doubt visible."],
    ["Measured pitch as well as measured time; the work of Jacobus of Liège", "Jacobus writes against the moderns rather than for them, and pitch had been measured for three centuries. You have named the opponent of the reform as its author."]
  ]},
  { q: "Jacobus of Liège wrote the <span class=\"latin\">Speculum musicae</span> against the moderns. What was his complaint?", a: 1, o: [
    ["That the new music is out of tune", "The lesson says expressly that this is not the complaint. Tuning is untouched by the quarrel; ask which of the art’s two quantities the <span class=\"latin\">ars nova</span> had altered."],
    ["That it is restless, and that the old proportions of time have been broken", "A conservative complaint about measure rather than about pitch. Notice that it concedes the moderns their concords and disputes only what they do in time."],
    ["That polyphony obscures the words of the liturgy", "That objection belongs to the moral treatment of the use of music, which this course places elsewhere. Jacobus is arguing about proportion."],
    ["That notation had made singers lazy in memory", "Nothing of the kind appears here, and the lesson treats notation as the enabling gain of the whole chapter. His grievance is about what the new music does, not how it is recorded."]
  ]},
  { q: "Augustine’s <span class=\"latin\">De musica</span> is recalled at this point. Why?", a: 0, o: [
    ["Five of its six books treat the numbering of time, which was set aside earlier as belonging to the art in a wide sense — and here that half of the art receives an instrument", "A thing set aside is not a thing discarded. The course’s own deferrals are meant to be picked up when the means to handle them appear."],
    ["Because Augustine had already devised a notation for duration", "He devised nothing of the kind, and the lesson gives that achievement to a much later century. What he contributed was a treatment, not an instrument."],
    ["Because Augustine defends the ancients against the moderns", "That role belongs to a fourteenth-century writer in this lesson. Augustine is invoked here for a subject matter, not for a position in a quarrel."],
    ["Because his metrics are among the first principles of the art", "Augustine’s metrics are listed elsewhere in this course among the things that remain and are not first. Ask in what sense this lesson says his subject belonged to the art."]
  ]},
  { q: "What does the lesson say the extension into measured time cost?", a: 2, o: [
    ["The loss of the first concords, which no longer held", "The concords are untouched, and the lesson ends by insisting they are not like the rules that followed. Nothing in the chapter revokes 2:1, 3:2 or 4:3."],
    ["Nothing; the gain was pure", "The lesson sets a gain and a cost side by side in its last paragraph. Read to the end and see what it says about the working rules from here forward."],
    ["That from here forward the working rules of music are the grammar of a practice — historical, revisable, and different in 1400 from 1300", "And the first concords are not like that. Holding both facts at once is what keeps this chapter from being either a triumph or a lament."],
    ["That written polyphony ceased to develop in Europe", "The lesson counts that polyphony among the gains, and says no other civilisation developed it to this degree. You have made a gain into a loss."]
  ]}
],

"vii-3": [
  { q: "What question did the earlier lesson leave standing, and what did it say about it?", a: 2, o: [
    ["That 81:64 is false, and that Thomas had shown it so", "Thomas is said to have left the matter open, not to have decided it. Be careful which questions an authority actually closes and which he simply does not treat."],
    ["That the ditone and 5:4 are the same interval under two names", "They stand about a tenth of a tone apart, which is why the dispute was possible at all. Two names for one thing would not have taken two hundred years to sort out."],
    ["That two tones compounded give the ditone 81:64 while singers seem to want the gentler 5:4; the dispute was real, Thomas had not closed it, and a first-principles course could leave it open", "The tradition did not leave it open. It took about two hundred years to answer, and the answer came from practice before it came from theory."],
    ["That the ditone is a concord and 5:4 a dissonance, as the first four numbers require", "The lesson calls neither one a dissonance; it says one is bright and hard and the other settles. And the restriction to the first four numbers is exactly what later gets broken."]
  ]},
  { q: "What did Walter Odington observe, and about when?", a: 1, o: [
    ["About 1482, that a monochord division can yield 5:4 outright", "That is a later man’s achievement and a bolder one: it alters the division rather than describing what singers do. Odington’s observation is about the choir."],
    ["About 1300, that the ditone 81:64 and the semiditone 32:27 are close neighbours to 5:4 and 6:5, and that singers draw them into a sweet blend by the subtlety of the voice", "The ratio on the monochord and the interval in the choir are not the same. The choir is doing something the theory has not accounted for."],
    ["About 1300, that 81:64 should be struck from the tables", "He proposes no abolition. He reports a discrepancy between what the string gives and what the voice does with it, which is a far more careful thing to do."],
    ["About 1441, that the English have a sweeter manner of singing", "That is a French poet’s remark about a later generation, not an English monk’s treatise. Two different observations about English singing, a century and a half apart."]
  ]},
  { q: "How far apart do the ditone and 5:4 stand?", a: 1, o: [
    ["A whole tone", "A gap that size would be an obvious mistuning rather than a subtle preference, and no one would have argued about it for two centuries. The lesson gives a much smaller figure."],
    ["About a tenth of a tone; the next lesson gives the gap its name", "Small enough to be sung past, large enough to matter. Every European ear from the fifteenth century onward has preferred the gentler of the two."],
    ["A semitone", "Still far too wide. The two are described as close neighbours, near enough that a voice can draw one toward the other without the change being noticed."],
    ["They are identical in size and differ only in derivation", "Then the ear could not have preferred one to the other, and the whole history in this lesson would have no occasion. Re-read the paragraph beside the comparison."]
  ]},
  { q: "In 1441 Martin le Franc praised a <span class=\"latin\">contenance angloise</span>. What does the lesson say about it?", a: 0, o: [
    ["He names John Dunstaple as its source and says Du Fay and Binchois took up his manner; he does not say what he meant, and the third-and-sixth reading is the received one, supplied by later scholars", "The lesson keeps evidence and interpretation apart. That the reading fits the music is a good reason to hold it, and not a proof."],
    ["He defines it as the use of thirds and sixths", "He does not define it at all, and that silence is the point of the paragraph. Distinguish what a source says from what scholars have since made of it."],
    ["He names Zarlino as its source", "Zarlino is a Venetian of the following century who settles the theoretical question. A poet writing in 1441 could not have named him."],
    ["He condemns it as a corruption of the Boethian concords", "The verb in the lesson is ‘praises’. And the whole movement of this chapter is practice leading theory, not practice being scolded by it."]
  ]},
  { q: "What did Ramis de Pareia publish in 1482, and what was bold about it?", a: 2, o: [
    ["<span class=\"latin\">Musices opusculum</span>, defending the Boethian bound", "That title belongs to the man who attacked him, five years later. You have taken the assailant’s book for the book assailed."],
    ["<span class=\"latin\">Le istitutioni harmoniche</span>, setting the bound at the senario", "That is another man, another city, and seventy-six years later. Ramis is earlier and blunter, and he offers a division of the string rather than a bound argued from number."],
    ["<span class=\"latin\">Musica practica</span>, with a monochord division yielding the thirds as 5:4 and 6:5 outright — breaking the Boethian restriction to the first four numbers", "He was teaching at Bologna, and the book began a quarrel that outlived him. Burtius attacked in 1487, and Gaffurio joined the assault."],
    ["<span class=\"latin\">Summa de speculatione musicae</span>, reporting what singers do", "That is the treatise of about 1300, which only observed the discrepancy. Ramis does something stronger than observe: he alters the division of the string itself."]
  ]},
  { q: "Who attacked Ramis, and how long did the quarrel run?", a: 3, o: [
    ["Zarlino, in 1558, and the quarrel ended at once", "Zarlino comes to settle the matter for his century rather than to open the fight, and he arrives long afterward. Look for names from the 1480s and 1490s."],
    ["Odington, who had already answered the question about 1300", "Odington precedes Ramis by nearly two centuries, and he observes rather than disputes. He is not a party to the quarrel he made possible."],
    ["Jacobus of Liège, defending the ancients", "Jacobus belongs to the previous lesson and to a quarrel about time rather than about the third. His century is the fourteenth, not the fifteenth."],
    ["Nicolaus Burtius in print in 1487, with Gaffurio joining the assault; Ramis’s pupil Spataro carried it on for another thirty years", "Quarrels of this kind are slow. Two hundred years pass between Odington’s observation and Zarlino’s settlement, and this is one stretch of them."]
  ]},
  { q: "Where and when did Zarlino settle the question for his century?", a: 0, o: [
    ["Venice, 1558, in <span class=\"latin\">Le istitutioni harmoniche</span>, as chapel master of St. Mark’s", "There he sets the bound of consonance at the senario, and within it the thirds and the major sixth stand as concords by right."],
    ["Bologna, 1482, in <span class=\"latin\">Musica practica</span>", "That is the city and the book of the man who opened the question, not of the man who closed it. Keep the two Italians and their two dates apart."],
    ["Venice, 1571, in the <span class=\"latin\">Dimostrationi</span>", "The city is right and the book is the later one, in which he does something quite different and much more practical. Look for his great systematic work first."],
    ["Paris, 1558, in <span class=\"latin\">Le champion des dames</span>", "You have joined a Venetian’s date to a French poem of a hundred years earlier. Check both halves of a citation before you accept it."]
  ]},
  { q: "Why does Zarlino set the bound at six?", a: 0, o: [
    ["Because six is the first perfect number: 1+2+3 is both its sum of parts and its product", "The bound is argued from the nature of number, not from what happens to please. That is what makes the settlement a work of reason rather than a surrender to the ear."],
    ["Because six is the number of voices in a full choir", "Nothing in the argument depends on how many men sing. Ask what property of the number six itself could carry the weight of a bound."],
    ["Because 6:5 is the smallest ratio a voice can sing accurately", "That would make the bound depend on the throat, which is exactly the sort of ground the lesson says was <em>not</em> used. Look instead for a property of number."],
    ["Because Ptolemy had already fixed it there", "Zarlino invokes Ptolemy for the resulting tuning, not for the bound’s justification. Distinguish the authority a writer claims from the argument he actually gives."]
  ]},
  { q: "Zarlino does not present the senario as an innovation. What does he do instead?", a: 2, o: [
    ["He credits Ramis with the discovery", "Ramis is nowhere claimed as his authority, and Zarlino’s ground is arithmetical rather than a matter of descent. Ask which of the ancient authorities he reaches for."],
    ["He claims to be restoring Boethius", "Boethius’s restriction to the first four numbers is precisely what the senario breaks. It cannot be the authority under which the breaking is done."],
    ["He identifies the resulting tuning with the syntonic diatonic of Ptolemy, the second authority the art always had", "The art had two ancient authorities, and one was available when the other ran out. Innovation dressed as recovery is a very old move, and here an honest one."],
    ["He presents it as a concession to singers", "The lesson insists that the ear was heard and then answered with an argument, not merely indulged. A concession is the very thing the boxed remark denies took place."]
  ]},
  { q: "The boxed remark denies that the ear simply overruled reason. How does it put the matter?", a: 1, o: [
    ["Reason gave way, and the ear became the judge of concord", "That is the reading the box exists to forbid. Were it so, the settlement would be a defeat for the method rather than a vindication of it."],
    ["The ear was heard, and then a different arithmetic was given for what it heard — a bound at six rather than at four, argued from the nature of number", "That is Ptolemy’s method: sense and reason correcting one another, neither despising the other. It vindicates the method, not either party to the old quarrel."],
    ["The ear was disregarded, and the senario derived from number alone", "Two centuries of singers are the occasion of the whole story, beginning with what Odington heard in a choir. The box does not pretend the ear was silent."],
    ["Neither faculty was involved; the change was a matter of fashion", "Fashion explains nothing about why a bound moved from four to six rather than to five or to seven. The box gives a reason of quite another kind."]
  ]},
  { q: "The lesson says the strain in the senario shows honestly. Where?", a: 3, o: [
    ["In the ditone, which the senario cannot express", "The senario has no difficulty there, and 81:64 was never the interval it was made to accommodate. Look for an interval that needs a number outside the first six."],
    ["In the major third, which needs a seven", "That interval falls comfortably inside the first six numbers; it is the one the whole reform was made to admit. Check the ratios of the sixths instead."],
    ["In Ptolemy’s syntonic diatonic, which Zarlino had to abandon", "He identifies his tuning with it rather than abandoning it. The strain the lesson names concerns a particular interval, and a particular practical retreat."],
    ["In the minor sixth, 8:5, which needs an eight; and by 1571, in the <span class=\"latin\">Dimostrationi</span>, Zarlino recommends a tempered tuning for actual keyboards rather than his own", "Why he had to is the matter of the next lesson. A theory that admits its own awkwardness is in better health than one that hides it."]
  ]}
]

});

/* ---- F ---- */
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"vii-4": [
  { q: "Twelve pure fifths are set against how many diapasons, and what happens where the two journeys meet?", a: 1, o: [
    ["Twelve diapasons, and the two arrive together exactly", "You have matched the count of fifths with an equal count of diapasons, which no arithmetic requires and which the lesson never claims. Go back and read how many diapasons are actually stacked against the twelve."],
    ["Seven diapasons, and the fifths overshoot", "Seven, and the overshoot is the comma. On a keyboard the two journeys are supposed to arrive at the same sound; that they do not is the fact the next three centuries are answering."],
    ["Seven diapasons, and the fifths fall short", "The count is right and the direction is wrong. Walk the twelve fifths on the widget and attend to whether you land above or below the seventh diapason before you choose again."],
    ["Five diapasons, and the two arrive together exactly", "Neither the number nor the result. Take 3:2 to the twelfth power and 2 to the fifth, set them side by side, and see how far apart they stand before deciding anything agrees."]
  ]},
  { q: "Stacking one interval upon another is what operation upon their ratios?", a: 2, o: [
    ["Adding them, so that twelve fifths give 36:24", "Ratios are not added, and 36:24 reduces to 3:2 — the very interval you began with, written in larger numbers. Return to the earlier lesson on compounding and read what the operation is."],
    ["Averaging them, so that twelve fifths give one mean interval", "An average would give you a single interval lying somewhere among the twelve, not the span of all twelve laid end to end. Ask what quantity you actually want when you stack."],
    ["Multiplying them, so that twelve fifths give 3:2 raised to the twelfth power", "Compounding is multiplying, and this whole lesson is that one rule applied twice. Notice that it settles a question about instruments by pure arithmetic, with no instrument anywhere in the room."],
    ["Subtracting the smaller term from the larger", "Subtracting terms treats a ratio as a difference between two numbers rather than a relation between them; 3 less 2 tells you nothing about the interval. Return to how the art defines a ratio."]
  ]},
  { q: "The Pythagorean comma is which ratio?", a: 1, o: [
    ["81:80, the excess of twelve fifths over seven diapasons", "You have paired a real ratio with the wrong journey. That number is the residue of a comparison between two kinds of third, not of a circle of fifths. Ask which comparison each comma settles."],
    ["531441:524288", "About 23.46 cents, and roughly a ninth of a tone. It is the exact measure of how far a keyboard tuned in pure fifths fails to close, and no adjustment of the twelve will make it vanish."],
    ["81:64, the ditone", "That is an interval in the story, not a discrepancy between two arrivals. A comma is the small remainder left over when two journeys that should have met do not. Ask what is left over here."],
    ["5:4, the third the singers want", "That is an interval one might desire, not a difference between two arrivals. Ask yourself what quantity remains when twelve fifths are set against seven diapasons, and give that quantity its name."]
  ]},
  { q: "The syntonic comma is found by comparing which two quantities?", a: 0, o: [
    ["The ditone 81:64, got from four pure fifths, against the just third 5:4, written as 80:64", "And their difference is 81:80, about a tenth of a tone. This is why a fixed instrument cannot hold pure fifths and pure thirds together: the thirds the fifths deliver are not the thirds the singers want."],
    ["Twelve pure fifths against seven diapasons", "That comparison belongs to the closing of the circle, not to the quarrel between two kinds of third. Ask which of the two commas the previous lesson made urgent, and why thirds were the reason."],
    ["The tone 9:8 against the just third 5:4", "You are setting a step against a concord, and their difference is far larger than any comma. Look again at the two quantities the lesson actually places side by side when it reaches the third."],
    ["Seven diapasons against four pure fifths", "You have crossed the terms of the two journeys. The seven diapasons belong to the comparison that closes the circle; the ditone is reached from four fifths. Re-read the paragraph that arrives at 81:64."]
  ]},
  { q: "Which of these correctly compares the two commas?", a: 2, o: [
    ["They are one interval under two names, since both are called a comma", "They arise from different comparisons and have different ratios; the word comma names a size of interval, not a single interval. Set 531441:524288 beside 81:80 and ask whether those could be one thing."],
    ["The syntonic is roughly twice the Pythagorean", "Neither is anywhere near double the other; the two lie within a few cents. Return to the sources line and read the two cent figures side by side before you compare them."],
    ["The Pythagorean is the larger — about 23.46 cents against about 21.5", "A few cents apart, and both near a tenth of a tone. The cent is a later logarithmic measure, admitted here only so that ratios of very different sizes of number can be compared at a glance."],
    ["The syntonic is the larger by about a whole tone", "A whole tone is some two hundred cents, and each comma is a small fraction of one. Whatever their order, they differ from each other by very little. Read the two figures in the sources line."]
  ]},
  { q: "The lesson gives each comma a rough size in tones. Which account is right?", a: 3, o: [
    ["Both about a ninth of a tone, the two being indistinguishable in size", "The lesson gives each its own fraction and the sources line gives each its own cent value. They are close, and the page is nonetheless careful to keep them apart. Read the two figures rather than merging them."],
    ["Both about a quarter of a tone", "A quarter of a tone is a large and unmistakable interval. A comma is small enough that most listeners meet it only as a grinding when two arrivals sound together. Re-read the two size estimates."],
    ["The Pythagorean about half a tone; the syntonic about a ninth of a tone", "Half a tone is a semitone, an interval of the scale and no residue at all. Had the failure to close been that large, nobody would have needed arithmetic to notice it. Look up the figure given."],
    ["The Pythagorean about a ninth of a tone; the syntonic about a tenth", "Near enough in size that a careless reader treats them as one, and different enough in origin that the confusion spoils everything after. Keep the two journeys, and therefore the two commas, apart."]
  ]},
  { q: "Why is the failure of the circle to close a matter of principle rather than of careless workmanship?", a: 0, o: [
    ["Because 2 and 3 are prime, so no power of 3 is ever a power of 2", "A theorem of arithmetic, not a defect of craft. No tuner however skilful can bring twelve pure fifths to meet seven diapasons, and the impossibility stands established before any instrument is touched."],
    ["Because strings and pipes are never made accurately enough", "A real difficulty of workmanship, and the wrong kind of reason altogether. The lesson claims the two journeys cannot meet even for a perfect instrument. Ask what would establish so strong a claim."],
    ["Because the ear cannot judge a fifth to better than a comma", "The lesson says the grinding of the two arrivals is plainly audible, so the ear does better than that. And a limit of hearing would not stop two quantities from being equal. Ask where the impossibility lives."],
    ["Because the fifth is only approximately 3:2 on any real instrument", "The argument takes the fifth to be exactly 3:2 and still fails to close; that is what makes it a theorem rather than a complaint. Grant the pure ratio and work the arithmetic through."]
  ]},
  { q: "Whose difficulty is the comma?", a: 2, o: [
    ["The singer’s above all, since he has no frets to guide him", "His freedom is exactly what spares him: the lesson says he takes each interval as it comes and adjusts. Ask what condition an instrument must be under for the comma to trap it."],
    ["The violinist’s, since the fingerboard fixes his string lengths", "The lesson names the violinist among those who escape, his fingers being free, and an unfretted fingerboard fixes nothing. Ask what it is about certain other instruments that leaves them no such liberty."],
    ["The keyboard’s and the fretted lute’s — instruments whose pitches must be fixed in advance", "Organ, harpsichord, lute, and eventually the piano. The history of temperament is the history of what men did to keyboards, not what they did to the truth."],
    ["Everyone’s equally, since the arithmetic is the same for all", "The arithmetic is indeed the same for all, and the predicament is not: some musicians may adjust in the moment and some may not. Ask what the lesson says a singer does that a fixed instrument cannot."]
  ]},
  { q: "The lesson insists that the comma is ‘not a defeat for the liberal art’. On what ground?", a: 1, o: [
    ["Because the comma is too small to matter in practice", "Its smallness is not the ground, and the lesson calls the grinding of the two arrivals plainly audible. A defence resting on inaudibility would concede that the art had been caught out. Look for the reason actually given."],
    ["Because the impossibility is itself a result of the art, established by arithmetic — the art’s own middle term", "The art proves the very limit that everything after it responds to. Three centuries of tuning are a reply to a theorem the Pythagoreans could themselves have stated, which is a strange sort of defeat."],
    ["Because later ages never found the comma either", "They found it, measured it, and spent three centuries dealing with it; that is the story the chapter tells. The defence offered is not one of successful concealment. Re-read the boxed remark."],
    ["Because 2:1 and 3:2 were afterwards shown to be wrong", "Nothing here abandons those two ratios: the argument is built out of them and would collapse without them. Ask whether a proof drawn from a principle can discredit the principle it uses."]
  ]},
  { q: "Which pair of facts does the lesson say follows from the first two ratios of the art?", a: 3, o: [
    ["That the fifth is not really 3:2, and that the third is not really 5:4", "Both ratios stand untouched; they are the premises of the argument, not its casualties. The trouble arises from what happens when they are stacked and compared. Re-read the sentence beginning ‘So:’."],
    ["That a pure fifth cannot be tuned, and that a pure third cannot be tuned", "Any single fifth may be tuned pure without the least difficulty, and so may any single third. The difficulty appears only when several are required to agree at once. Ask what a fixed instrument cannot do."],
    ["That the diapason must be tempered while the fifth is left pure", "The diapason is never the interval tempered in this story; it is the fixed frame within which the error is shared out. And the lesson denies just what this option grants about the fifth."],
    ["That a fixed instrument cannot have all its fifths pure and still close its circle, and cannot have pure fifths and pure thirds at once", "Two facts, and the lesson calls them facts. Everything in the next lesson — meantone, well temperament, equal temperament — is a way of choosing which of the two evils to suffer, and where."]
  ]},
  { q: "What is the cent, as this course uses it?", a: 2, o: [
    ["The unit in which Pythagorean arithmetic states its ratios", "The old art states ratios as ratios, in whole numbers. A unit that cuts an interval into equal parts is a thing of quite another kind. Ask when the cent was devised and by whom it is used here."],
    ["A ratio of small whole numbers, like the comma itself", "The sources line calls it a logarithmic measure, which is precisely not a ratio of whole numbers. That difference is the one this chapter turns upon. Read the last sentence of the sources line."],
    ["A later logarithmic measure, admitted only so that intervals may be compared", "It is no part of the art being expounded, and the lesson flags it as a convenience so that you do not mistake a modern unit for a Pythagorean quantity. Borrowed tools should be labelled."],
    ["The smallest interval the ear can detect", "The lesson makes no claim about limits of hearing, and a unit of measure is not defined by what can be heard. Ask what the sources line says the cent is, and why it is admitted at all."]
  ]}
],

"vii-5": [
  { q: "What did Pietro Aaron’s <span class=\"latin\">Toscanello in musica</span> (1523) contribute?", a: 2, o: [
    ["The first mathematical account of meantone, dividing the syntonic comma into quarters", "He offers no arithmetic whatever; he describes the thing by ear. The mathematics of the varieties arrives half a century later and by another hand. Check which name the lesson attaches to which service."],
    ["The first proposal that the diapason be divided into twelve equal parts", "That proposal belongs to a lutenist arguing about frets, and to a different decade. Aaron is giving instructions for tuning thirds and fifths, not for equal division. Read the paragraph again."],
    ["The first clear practical instruction: tune the major third pure and let the fifths sit a little flat", "By ear, and without arithmetic. Our name for his procedure, quarter-comma meantone, is a later reading of it — worth remembering when a textbook makes the sixteenth century tidier than it was."],
    ["The first circulating temperament, in which all keys are usable", "His procedure leaves one fifth grotesquely wide and four thirds unusable, so that you may play in some keys and not in others. Ask what the wolf is, and when it was finally driven out."]
  ]},
  { q: "What did Francisco de Salinas do for temperament in 1577?", a: 0, o: [
    ["Supplied the mathematics, and distinguished the varieties", "Practice ran ahead of theory by half a century here: a procedure was described in 1523, and Salinas afterwards showed what it was. That order is common throughout this chapter."],
    ["Gave the first practical instruction for tuning by ear", "Such an instruction was already in print in 1523, and by another hand. Salinas’s service is of a different kind — ask what a practical instruction given by ear conspicuously lacks."],
    ["Devised the first well temperament, so that the circle closes", "The closing of the circle belongs to a later century and to a German organist. Salinas is working on the family of tunings that still leaves a wolf. Fix the two dates well apart in your mind."],
    ["Proved that equal temperament is the only tuning that closes the circle", "Nothing in the lesson credits him with such a proof, and it could not be proved, since the well temperaments close the circle without being equal. Ask what the lesson says he distinguished."]
  ]},
  { q: "In quarter-comma meantone, what is done to the fifths?", a: 3, o: [
    ["Each is narrowed by a quarter of the Pythagorean comma", "You have the right fraction attached to the wrong comma. The previous lesson distinguished two of them, and the force of that distinction is that they cannot be exchanged. Settle which comparison yields which."],
    ["All twelve are narrowed equally, so that the circle closes", "Narrowing all twelve alike is a quite different tuning, and meantone does not close: one fifth is left grotesquely wide. Ask what the wolf is and why this procedure cannot avoid it."],
    ["The fifths are left pure and the thirds narrowed instead", "Were the fifths left pure, the third arrived at would be the hard ditone — and a beautiful third was the whole object. Ask which interval the 1523 instruction told you to tune pure."],
    ["Each of four fifths is narrowed by a quarter of the syntonic comma, so that four of them, less two diapasons, land exactly on the pure 5:4", "Hence the name. The thirds are beautiful, and the price is paid elsewhere: eight good major thirds, four unusable ones, and one fifth left grotesquely wide."]
  ]},
  { q: "What is the practical consequence of quarter-comma meantone for a keyboard player?", a: 1, o: [
    ["Every key is available to him, though each has its own colour", "That description belongs to a later kind of temperament, built precisely to remove the restriction this one imposes. Meantone leaves an interval nobody can use. Count the good thirds and the bad ones."],
    ["Eight good major thirds and four unusable ones, with one grotesquely wide fifth: he may play in some keys and not in others", "The wolf. It is why the next century states its problem as ‘so that all keys may be used’, and why a circulating tuning was worth the labour of inventing."],
    ["All thirds are equally good and all fifths equally poor", "Meantone distributes its error unevenly on purpose: it buys pure thirds in some places by ruining others. Nothing in it is spread out equally. Re-read the sentence about the wolf."],
    ["The fifths are all pure and only the thirds suffer", "That is the tuning meantone was devised to escape. Were all the fifths pure the circle would not close at all, which is the trouble the previous lesson established by arithmetic."]
  ]},
  { q: "What is the standing of Vincenzo Galilei’s 18:17 rule for placing frets?", a: 2, o: [
    ["A derivation of the equal semitone from first principles", "The equal semitone is not a ratio of whole numbers at all, so no rule stated as one could yield it exactly. Ask what relation 18:17 can stand in to a quantity it cannot equal."],
    ["The first appearance of equal fretting among lutenists", "The lesson says equal fretting was already common when he wrote, so it cannot have begun with him. What he added was the statement and the argument, not the practice itself."],
    ["A practical approximation to an equal semitone, for placing frets", "Not a derivation of one. His contribution is to state the rule and defend it, equal fretting being already common among lutenists — practice preceding theory once more, as with Aaron."],
    ["A well temperament for fretted instruments, in which each key keeps its colour", "He argues for dividing the diapason into twelve equal parts, which is the opposite of letting each key keep a colour: equal division makes them alike. Ask what irregularity means in a temperament."]
  ]},
  { q: "What distinguishes the well temperaments of Werckmeister’s <span class=\"latin\">Musicalische Temperatur</span> (1691) and his successors?", a: 2, o: [
    ["They divide the diapason into twelve equal parts", "Equal division would make the keys indistinguishable from one another, and these tunings were prized for the contrary quality. Ask what work the word irregular is doing in the lesson’s description."],
    ["They tune eight thirds pure and leave four unusable", "That is the bargain of the older family of tunings, the one with a wolf in it. Werckmeister’s object was that all keys should be usable. Ask what must happen to the wolf for that to be so."],
    ["They are irregular: the circle closes, every key is playable, and no two keys sound quite alike", "Because the error is distributed unevenly. That unevenness is not a defect but the very thing composers valued, and it is what makes a journey through all twenty-four keys worth writing."],
    ["They keep every fifth pure and accept that the circle will not close", "An instrument whose circle does not close cannot be played in all keys, and closing it was the whole motive. The previous lesson also showed that pure fifths and closure cannot be had together."]
  ]},
  { q: "<span class=\"latin\">Das wohltemperirte Clavier</span> (1722) is commonly said to celebrate equal temperament. What does the lesson say of that claim?", a: 3, o: [
    ["It is correct, since twenty-four keys are possible only under equal temperament", "Twenty-four keys are possible under any circulating tuning, equal or not, and one such had been in print since 1691. Ask what circulating means, and whether it entails equality of any kind."],
    ["It is correct, since Bach is known to have tuned his own instruments equally", "Which particular temperament Bach wanted is unknown and much conjectured; the lesson says so plainly. A claim about his practice cannot be the ground of anything here. Read the boxed remark."],
    ["It cannot be judged, since <span class=\"latin\">wohltemperirt</span> has no settled meaning", "The lesson gives the word a settled meaning and says the negative claim is secure even where the positive one is not. Distinguish what is genuinely unknown here from what is perfectly well known."],
    ["It is false: <span class=\"latin\">wohltemperirt</span> names a circulating but unequal tuning, in which each key keeps its own colour", "The negative claim is secure; which temperament he wanted is not. And the unevenness is the point — twenty-four identical exercises would hardly have been worth composing."]
  ]},
  { q: "When did equal temperament become the English norm?", a: 1, o: [
    ["By 1722, with the publication of Bach’s title", "That title names a different kind of tuning altogether, and a German title would settle nothing about English instruments in any case. The lesson gives England a date of its own, far from this one."],
    ["In the 1840s and 1850s, a century after Bach died", "It spread on the Continent from the later eighteenth century, and England came late. The dating rests on Ellis’s appendices to Helmholtz, and the lesson warns that the chronology is a range, not a threshold."],
    ["In 1691, with Werckmeister", "Werckmeister’s temperaments are irregular, and he was not writing for England. You have folded two distinct answers to the arithmetic problem into one. Check what the lesson says each of the three is."],
    ["In 1577, when Salinas supplied the mathematics", "Salinas was distinguishing the varieties of a tuning that still leaves a wolf, and the sixteenth century is far too early for the adoption in question. Find the decade the lesson actually gives England."]
  ]},
  { q: "By how much is the equal-tempered fifth out of tune, and how does its third fare?", a: 1, o: [
    ["The fifth is narrow by a quarter of the syntonic comma, and the third is pure", "That description belongs to the tuning that buys a pure third at the fifth’s expense. Equal temperament leaves no interval pure but the diapason. Compare the two deviations the lesson actually gives."],
    ["The fifth is narrow by only about a twelfth of the Pythagorean comma; the third is wide by roughly two-thirds of a syntonic comma", "Which is why the tuning is tolerable: the error is put where least noticed, and the audible cost falls upon the thirds. You have been hearing those wide thirds all your life."],
    ["The fifth is wide by a full syntonic comma and the third narrow by a twelfth of it", "Both intervals and both directions are crossed here. Go back to the paragraph that measures the three tunings and read the two clauses about equal temperament through in order."],
    ["Both fifth and third are out by a whole comma", "The whole art of temperament lies in the fractions — a quarter here, a twelfth there, two-thirds elsewhere. Reading them all as one comma throws away the very distinctions the lesson is drawing."]
  ]},
  { q: "In Pythagorean tuning, where the fifths are pure, what is the state of the third?", a: 0, o: [
    ["Hard — wide by a full syntonic comma, since it is the ditone", "Which is precisely the comparison that defined that comma. It is also why a purely Pythagorean keyboard became intolerable once thirds began to matter, and why Aaron wrote as he did."],
    ["Pure, since pure fifths generate pure thirds", "Four pure fifths give the ditone 81:64, which is not 5:4; the whole of the previous lesson turned on that gap. Work the four fifths through and compare the result with what the singers want."],
    ["Narrow by a quarter of a comma", "Narrowing by a quarter of a comma is a deliberate act performed by a tuner, not something pure fifths do of themselves. Ask what four untouched fifths deliver when they are folded back."],
    ["Wide by about two-thirds of a comma", "That figure belongs to a different tuning in the same paragraph — one in which no fifth is left pure at all. Read the three clauses in order and keep each measurement with its own tuning."]
  ]},
  { q: "What does temperament buy, and what does it sell?", a: 3, o: [
    ["It buys purer concords and sells nothing of consequence", "Temperament deliberately mistunes; nothing in it is made purer than the ratio it departs from. And the lesson calls what is surrendered the sharpest single break between the liberal art and modern practice."],
    ["It buys ease of tuning and sells nothing but a little sweetness in the thirds", "Tempering a keyboard is not easier than tuning it pure; it is harder, and it is undertaken for something else entirely. What is given up is more than sweetness. Read the paragraph on what is traded."],
    ["It buys modulation and sells the diapason, which is no longer 2:1", "The diapason stays 2:1 in every temperament in this story; it is the frame within which the error is shared out. Look again at the paragraph headed ‘What is being traded’ and see what it names as sold."],
    ["It buys modulation, and sells the whole-number ratio: the equal semitone is the twelfth root of two, an irrational quantity", "Boethius’s art measures sound by proportions of whole numbers, and a modern piano cannot in principle be so measured. The break was made deliberately, by men who understood the arithmetic perfectly well."]
  ]}
],

"vii-6": [
  { q: "What was Zarlino’s quiet novelty?", a: 1, o: [
    ["He replaced the interval with the chord as the unit of composition", "That change comes with a practice around 1600 and with a theorist a century after that. Zarlino’s step is smaller and earlier. Ask what he did with the two kinds of third."],
    ["He distinguished the major third from the minor by the way the fifth is divided — harmonically for the one, arithmetically for the other", "Which is to treat a three-note sonority as a single thing with a nature of its own. That is the first move toward taking the chord rather than the interval as the object of study."],
    ["He derived the triad from the resonance of a sounding body", "Resonance as a ground arrives more than a century later, by way of two men who had first to hear the partials and account for them. Zarlino argues from divisions and proportions."],
    ["He proposed the figured bass", "The figured bass is a practice of players and composers around 1600, not a proposal of his. His novelty is a way of telling two thirds apart. Re-read the opening sentences of the lesson."]
  ]},
  { q: "The <span class=\"latin\">basso continuo</span> becomes universal around 1600. What does the lesson say this signifies?", a: 3, o: [
    ["That performers had ceased to read counterpoint", "The lesson makes no claim about what performers could read, and realising a figured bass is itself an exercise of considerable skill. Its significance lies in what musicians take themselves to be handling."],
    ["That temperament had at last been settled", "Temperament remains unsettled for two centuries more, as the previous lesson showed. The continuo marks a change in the working material of music, not in its tuning. Read the first paragraph again."],
    ["That the overtone series had been accepted as the ground of harmony", "Nobody has yet reported the partials in print at this date, and the man who first does so cannot explain them. Keep the practice and its much later physical grounding well apart."],
    ["That the working unit of European music is no longer the interval", "A bass line with figures, from which a player realises chords. Once the unit changes, a theory of chords becomes necessary — and Rameau’s is the answer that arrives."]
  ]},
  { q: "What did Mersenne report in the <span class=\"latin\">Harmonie universelle</span> (1636)?", a: 0, o: [
    ["That in one low string he hears faint higher sounds — the octave, the twelfth, the fifteenth, the seventeenth — and that he cannot explain how one string sounds five things", "He says so outright, which is a good habit. The explanation waits upon another man’s measurements, and the harmonic grounding of the chord waits upon both."],
    ["That the partials are produced at nodes dividing the string’s length", "Locating the nodes is the work of the man who came after him and gave the sounds their name. Mersenne reports a puzzle rather than an anatomy. Ask what he says he cannot do."],
    ["That the major triad is given by nature in one sounding body", "That claim is made a century later by a theorist rebuilding his system, and it needs an account of the partials Mersenne could not supply. What he offers is a report, not a doctrine."],
    ["That absolute frequency can be measured by counting beats", "The counting of beats and the measuring of absolute frequency belong to memoirs read to the Paris Academy around 1700. Fix in your mind which man did which, and in which decade."]
  ]},
  { q: "Joseph Sauveur, in memoirs to the Paris Academy around 1700, did which of these?", a: 2, o: [
    ["Made the chord the unit and set a fundamental bass beneath the written one", "That is a theorist’s claim about the structure of music, made in 1722 and by another man. Sauveur is measuring a string and naming what it sounds. Distinguish the physicist’s work from the theorist’s."],
    ["Ranked intervals by a degree of agreeableness computed from prime factors", "That is a later arithmetical attempt, by a mathematician trying to keep number as the ground of the art. Sauveur’s work is measurement, not ranking. Check the last paragraph of the lesson."],
    ["Named the partials <span class=\"latin\">sons harmoniques</span>, located the nodes, measured absolute frequency by counting beats, and proposed that the new study be called <span class=\"latin\">acoustique</span>", "A new science, and a new name for it. Note that all this had been available for two decades before the theorist who most needed it learned of it."],
    ["Reported faint higher sounds in a low string without being able to explain them", "That report was in print in 1636, and its author said plainly that he could not explain it. Sauveur’s contribution is what follows such a report. Ask what he could do that his predecessor could not."]
  ]},
  { q: "On what does Rameau argue in the <span class=\"latin\">Traité de l’harmonie</span> (1722)?", a: 3, o: [
    ["On the overtone series, which the book takes as its first principle", "That is how a modern harmony textbook begins, and it is exactly the anachronism this lesson warns against. In 1722 he had not yet learned of the partials. Set his three dates side by side."],
    ["On the resonance of the <span class=\"latin\">corps sonore</span>", "The resonating body becomes his ground only after he learns of another man’s work, and the books resting on it come later. Put 1722, 1726, and 1737 in order and see which belongs where."],
    ["On the beating of upper partials in the ear", "That explanation of consonance belongs to the nineteenth century, and the course names it among the developments lying past its stopping point. Nothing of the sort is available to a theorist in 1722."],
    ["In the old manner: from divisions of a string, and from number", "Worth insisting on, because the textbook picture reverses it. The physical grounding is a later repair, running from the <span class=\"latin\">Nouveau système</span> of 1726 through the <span class=\"latin\">Génération harmonique</span> of 1737."]
  ]},
  { q: "What does Rameau’s <span class=\"latin\">basse fondamentale</span> assert?", a: 0, o: [
    ["That the inversions of a chord are one chord, and that beneath the written bass stands the real root, whose motion is what harmony consists in", "The unit is now the chord, and the subject of harmony is the motion of roots. This is the frame within which a later century’s talk of function becomes possible at all."],
    ["That the lowest sounding note governs the chord above it", "Were that so, an inversion would be a different chord from its root position — and the doctrine exists precisely to deny that. Re-read what the written bass is said <em>not</em> to be."],
    ["That the bass line should be figured, so that a player may realise chords", "That is the practice of the continuo, universal a century earlier and no invention of his. His doctrine concerns the identity of chords, not the manner of notating a bass."],
    ["That the triad is a gift of nature, since one sounding body already sounds it", "That claim belongs to his later re-founding, after he had learned of the partials. The doctrine asked about here is present in 1722 already, and is argued from number."]
  ]},
  { q: "How did Rameau’s system change after 1722?", a: 2, o: [
    ["He abandoned the chord as the unit and returned to the interval", "Nothing of the kind: the chord as unit is his permanent contribution. What changed was the ground he offered for it. Compare the books of 1726 and 1737 with the first one."],
    ["He adopted equal temperament as the ground of harmony", "Temperament is not the ground of his system at any stage. The change came of something he learned after 1722 and had not known when he wrote. Ask what that was, and from whom."],
    ["From the <span class=\"latin\">Nouveau système</span> (1726) through the <span class=\"latin\">Génération harmonique</span> (1737) he re-founded it on the <span class=\"latin\">corps sonore</span>", "The major triad is then no construction but a gift of nature. With that, the middle term of the science changes — and its place among the sciences changes with the middle term."],
    ["He replaced number with a ranking of intervals by prime factors", "That was another man’s project, published in 1739, and it was an attempt to keep an arithmetic ground rather than to leave one. Two quite different responses to the same moment."]
  ]},
  { q: "What did Euler attempt in the <span class=\"latin\">Tentamen novae theoriae musicae</span> (1739)?", a: 1, o: [
    ["To ground harmony in the resonance of bodies, following Rameau", "His attempt runs the other way about: it is the last great effort to keep an arithmetic ground, at the moment when the ground was shifting to physics. Re-read the sentence in which his name appears."],
    ["To keep an arithmetic ground, ranking intervals by a <span class=\"latin\">gradus suavitatis</span> computed from the prime factors of the ratio", "Ingenious — and Euler himself allowed that it agreed poorly with what musicians did. That candid admission is worth as much to a student as the system itself."],
    ["To popularise Rameau’s system for a general readership", "That service was performed by d’Alembert in 1752. Euler’s book is earlier and its purpose quite different: it is a mathematician’s proposal, not an exposition of somebody else’s."],
    ["To explain consonance by the beating of partials in the ear", "That explanation arrives in 1863 and belongs to the developments the course says lie past its stopping point. Euler’s method is arithmetical from beginning to end."]
  ]},
  { q: "Which pairing of man and date does the lesson give?", a: 3, o: [
    ["Mersenne, 1700–1701", "Those memoirs to the Paris Academy are another man’s, and the <span class=\"latin\">Harmonie universelle</span> is a good deal earlier. Set the dates of this lesson out in order before choosing again."],
    ["Euler, 1752", "1752 is the year of a popularisation by a different hand entirely. Euler’s book stands earlier, and its purpose is not popular exposition. Check the closing paragraph of the lesson."],
    ["The <span class=\"latin\">Génération harmonique</span>, 1726", "1726 is the year of the <span class=\"latin\">Nouveau système</span>; the <span class=\"latin\">Génération harmonique</span> is later still. The two together mark the re-founding, and the lesson gives each its own year."],
    ["D’Alembert, 1752", "He popularised the system, and popularisation is how a theory becomes the air a discipline breathes. Within a generation the overtone series is simply where a textbook begins."]
  ]},
  { q: "Why does the lesson say the art went sideways rather than down?", a: 2, o: [
    ["Because the new science predicted what musicians would do more successfully", "The lesson makes no such claim, and it notes an arithmetical system agreeing poorly with practice without letting that settle anything about kind. Classification here turns on something else entirely."],
    ["Because harmonics was expelled from the quadrivium by the universities", "The argument is not about statutes or faculties but about what a demonstration runs through. Re-read the definition of a middle science that the course gave at the outset."],
    ["Because the middle term changed: number gave way to the resonance of bodies, and a science demonstrating through the natures of bodies is physics", "Sideways, not down. Good physics, and in the nineteenth century very good physics — but no longer arithmetic applied to sound."],
    ["Because the subject changed from sounding pitch to vibrating bodies", "The subject stays exactly where it was: every one of these men begins at the ear, with sounding pitch. Look at the two little schemes set out in the boxes and see which line differs."]
  ]},
  { q: "What does the lesson say happened to the quadrivial <span class=\"latin\">musica</span>?", a: 0, o: [
    ["It was not refuted; its middle term was replaced, and the classification went with the middle term", "This is the transformation a modern reader is least likely to notice, because nothing in a harmony textbook announces it. The book simply begins with the overtone series, as though that had always been the beginning."],
    ["It was refuted by the discovery of the partials", "A discovery about what a string sounds does not falsify a proportion; 2:1 is what it always was. Ask what change the lesson actually locates, and whereabouts in the argument that change sits."],
    ["It survived unaltered, since the ratios still hold", "The ratios do still hold, and the lesson does not say that nothing happened. Something in the structure of the demonstration moved. Look at the two boxed schemes and compare them line by line."],
    ["It was absorbed into natural philosophy without loss", "The lesson is exact about what was given up: a demonstration through number is not the same as a demonstration through the natures of bodies, whatever the merits of the latter. ‘Without loss’ hides the change."]
  ]}
],

"vii-7": [
  { q: "What did Glarean’s <span class=\"latin\">Dodecachordon</span> (1547) do?", a: 2, o: [
    ["Reduced the church modes to two, major and minor", "The reduction to two happens within a century and a half after him, and not by his hand: he was adding, not subtracting. Count the modes before his book and after it."],
    ["Added a thirteenth mode on B", "He considered a pair on B and refused it as unusable. What he did add was a different pair altogether. Read the opening sentence of the lesson once more, slowly."],
    ["Added the Ionian and the Aeolian to the eight church modes, making twelve, and refused a thirteenth pair on B as unusable", "He thought he was restoring an ancient system. Within a century and a half his twelve had collapsed into the two we call major and minor, which is not at all what he intended."],
    ["Named the hierarchy of tonic, dominant, and subdominant", "That vocabulary belongs to the tonality the nineteenth century named, two hundred years after him. Glarean’s subject is modes and their number, not the functions of chords."]
  ]},
  { q: "What did Glarean take himself to be doing, and what came of it?", a: 0, o: [
    ["He thought he was restoring an ancient system; within a century and a half his twelve had collapsed into two", "A common shape in this history: a man reaches back and, without meaning to, hands the future one of its instruments. The two survivors are what we call major and minor."],
    ["He knew he was preparing the way for major and minor, and said so", "Nothing in the lesson credits him with such foresight, and the collapse took a century and a half to complete. Ask what he believed he was doing when he wrote."],
    ["He was proposing a new temperament for keyboards", "His subject is modes, not tunings. Temperament is a separate strand of this chapter, and the lesson brings the strands together only afterwards. Read the first paragraph again."],
    ["He was codifying a practice already universal", "The modes he named were additions to the eight, and his system did not survive as he left it. Ask what he says about antiquity, and what in fact became of his twelve."]
  ]},
  { q: "Which three developments does the lesson put together to produce tonality?", a: 1, o: [
    ["The overtone series, the fundamental bass, and equal temperament", "Two of these belong to the physical grounding of the chord and one to a tuning that arrives late. The lesson’s three are of different kinds. Re-read the paragraph beginning ‘Now put the three developments together.’"],
    ["Temperament, making each of the twelve sounds a possible home; figured bass, making the chord the unit; and the reduction of the modes to two", "Three strands from three parts of the story, none of them sufficient alone. What comes out of the three together is what the nineteenth century named tonality."],
    ["Sonata form, the symphony, and the string quartet", "Those are things built with tonality, not conditions of it. Ask what had to be in place before a drama of keys could be composed at all, and by whom each piece was supplied."],
    ["Counterpoint, measured time, and written polyphony", "The lesson names such things among what the ancients and medievals did have, and says they did not yield an art of large-scale form. Look for what was added afterwards, not for what was there already."]
  ]},
  { q: "‘A key is not a scale but a hierarchy.’ What does the lesson mean by this?", a: 3, o: [
    ["That the twelve sounds are ranked by the purity of their ratios", "Purity cannot be the ranking, since a tempered instrument has almost no pure intervals to rank. Ask what the lesson says the members of this hierarchy actually are, and what each of them does."],
    ["That one key is superior to all the others", "The claim is not that one key outranks another; it concerns an order within a single key. Read the clause that follows the dash and see what is being ordered there."],
    ["That the scale must be sung upwards from the tonic", "Nothing here concerns the direction in which a scale is sung. A hierarchy is an order of importance among things, not an order of performance. Ask what things are ordered."],
    ["That within a key there is a tonic, a dominant that demands it, and a subdominant that prepares it — chords with functions, which is to say that they point somewhere", "Pointing is the whole of it. Because a chord points, a listener can hear that we have left home and not yet returned, and on that hearing a long form is built."]
  ]},
  { q: "What does the hierarchy of key buy a composer?", a: 0, o: [
    ["Form: a structure whose real subject is departure and return, sustainable for twenty minutes without a word of text", "That is what sonata form is — a drama of keys. The same principle carries a Haydn quartet, a Mozart concerto, a Beethoven symphony, a Schubert sonata."],
    ["Freedom from the need to temper his instrument", "The order runs the other way about: temperament is one of the three conditions that made key available at all. It is something bought with, not escaped by, this hierarchy."],
    ["A demonstration of the first concords from tonic and dominant", "The lesson denies exactly this: functional harmony is not demonstrated from 2:1, 3:2, and 4:3. Ask what kind of knowledge the rules of this art are said to be."],
    ["A method of setting words more expressively", "The achievement the lesson names requires no text whatever, which is precisely what makes it remarkable. Read the paragraph beginning ‘What this buys’ and see what it is that words are not needed for."]
  ]},
  { q: "What does the lesson say sonata form is?", a: 2, o: [
    ["A fixed sequence of themes and key areas prescribed by theorists", "The lesson does not define it by a scheme of sections at all; it describes what happens in it. Re-read the sentence that begins ‘That is what sonata form is’."],
    ["A style of melody characteristic of Haydn and Mozart", "It is not a manner of writing tunes: the four composers named write very differently and use the same form. Look for something structural rather than melodic."],
    ["A drama of keys, in which the second key is a genuine conflict and the return a genuine resolution", "Which is why it needs a listener who can hear that we have left home. Take that hearing away and the form becomes an arbitrary succession of sections."],
    ["The eighteenth century’s name for the reduction of the modes to two", "The modes reduce to two as one of the conditions of tonality, not as a form; and the term in question is a later coinage. Keep conditions and constructions apart throughout this lesson."]
  ]},
  { q: "When people say <em>classical music</em>, what does the lesson say they very largely mean?", a: 1, o: [
    ["All music written before the twentieth century", "The lesson is narrower and more exact than that. It marks off a period by a technical fact about how the music is built. Ask what that fact is, and re-read the end of the third paragraph."],
    ["The music of the period in which key was structural", "Which is why the phrase, loose as it is, picks out something real. The style lasted about two hundred years and then dissolved, and the lesson is careful to say so."],
    ["Music written in the church modes", "The modes had collapsed into two before this music was written; the period in view is later. Set Glarean’s date against Haydn’s century and see how much lies between them."],
    ["Any music composed to a written score", "Notation is far older than the period the lesson has in view — the course has met a written polyphony after 900. Notation is not what marks off this repertory from the rest."]
  ]},
  { q: "What does the lesson say the Greeks and the medievals had, and what they did not?", a: 3, o: [
    ["They had neither notation nor polyphony, and so no form", "The lesson credits them with a written polyphony after 900. Their lack was of another order, and it was not a lack of means. Read the sentence and take its items one at a time."],
    ["They had harmony but not melody", "The list runs the other way about: melody they certainly had, along with mode and measured time. Read the sentence again and take its items in the order given."],
    ["They had large forms, but only with a text to carry them", "The lesson does not qualify their lack in that way. Read what it says they had, and then what it says they had not, without adding a condition of your own."],
    ["They had melody, mode, measured time, and after 900 a written polyphony; they had no art of large-scale intelligible form in sound", "A real addition to human making, and a liberal education has no reason to be grudging about it. Whoever calls everything after Boethius decline has not accounted for the late Beethoven quartets."]
  ]},
  { q: "What kind of knowledge are the rules of functional harmony?", a: 0, o: [
    ["The grammar of a style — one that lasted about two hundred years and then dissolved", "Not a demonstration from 2:1, 3:2, and 4:3. Calling it a grammar belittles nothing; the lesson calls it a very great style. The claim is about what kind of thing it is."],
    ["Demonstrations from the first concords, like the rest of the art", "The lesson says flatly that functional harmony is not demonstrated from those ratios. Ask what became of these rules when the style ended, and whether the first concords fared the same way."],
    ["Laws of the ear, valid wherever men hear", "Something valid wherever men hear would not have a date; what is described here has one, and an end as well. Ask which things in this chapter have dates and which have none."],
    ["Conventions of notation, alterable at will", "The rules are not about how music is written down, and the lesson treats them as binding within their period rather than arbitrary. Ask what sort of thing has rules, a date, and an ending."]
  ]},
  { q: "Why does the lesson insist that the first concords are not a style?", a: 2, o: [
    ["Because they were never used in composition", "They are used everywhere in composition, so that cannot be the distinction. The point concerns what happens to them when a particular manner of writing goes out of use."],
    ["Because they are conventions older than any surviving style", "Age is not the difference; an old convention is a convention still, and might lapse like any other. Ask what standing the first concords have that a convention lacks altogether."],
    ["Because they were the same for Nicomachus and are the same for you, and did not dissolve when the style dissolved", "Which is the whole use of having walked the old road first. You can tell a permanent thing from a period thing only if you have handled both of them."],
    ["Because they belong to arithmetic and not to sound", "They belong to both: the course has had you hear them on a string from the very beginning. Their standing does not come of being cut off from sound. Ask where it does come from."]
  ]},
  { q: "Where does the word <em>tonality</em> come from, as the lesson gives it?", a: 1, o: [
    ["From Rameau, in the Traité of 1722", "Rameau supplies the fundamental bass, which the term later describes; he does not supply the term. The lesson gives the naming its own decade and its own author. Check the sources line."],
    ["It is a nineteenth-century name — Fétis’s, in the 1840s — for something the eighteenth century was already practising", "The practice precedes the name, as usual in this chapter. And the 1840s are also when equal temperament became the English norm, which is a coincidence worth holding on to."],
    ["From Glarean, in 1547", "Glarean is naming modes and counting them to twelve; the hierarchy this word describes had not yet formed. Three centuries lie between his book and the coining of the term."],
    ["From the Greek theorists, by way of Boethius", "The thing named is a development of the seventeenth and eighteenth centuries, and no ancient term could have named it. Look at the sources line for the coiner and his decade."]
  ]}
],

"vii-8": [
  { q: "On the audit of the six lines, what has become of the <em>subject</em> of the art?", a: 1, o: [
    ["Replaced: the subject is now the vibrating body", "The vibrating body enters this audit on a different line, as a candidate cause and not as what the art is about. Distinguish what a science studies from what it explains its subject by."],
    ["Unchanged: sounding pitch, as heard", "Odington, Zarlino, Vincenzo Galilei, Rameau — every one of them began where you began, at the ear. That is why the whole of this history can be told as one story and not two."],
    ["Divided among three candidates", "Division into three candidates is the audit’s verdict on another line altogether. The subject is one thing throughout, and the lesson disposes of it in a single word. Read the six entries in order."],
    ["Superseded: the subject is now the composition", "The composition does appear on the audit, but on the line concerning the work of the art rather than its subject. What a man makes is not the same as what he studies."]
  ]},
  { q: "What has become of the <em>cause</em>?", a: 3, o: [
    ["Unchanged: it is still ratio", "The audit gives that verdict to a different line. Ratio is now one candidate among several, and the several belong to different sciences. Read the second entry again and count what it lists."],
    ["Refuted, along with the hammers in the smithy", "The smithy story is refuted; the doctrine of ratio as cause is not. Keep refutation and replacement apart — the lesson says that difference is the whole point of the chapter."],
    ["Reduced to one: the resonance of bodies", "Resonance is one of the candidates, and the audit names more than one. The lesson also observes that not one of them is a middle science, which would be an odd thing to say of a single candidate."],
    ["Divided: where there was one cause there are now three candidates — the resonance of bodies, the response of the ear, and the conventions of a style", "Three different sciences, and not one of them a middle science. That is why the old art could not simply be continued under new management."]
  ]},
  { q: "What does the audit say of the first concords?", a: 0, o: [
    ["Standing, and indispensable: not one tuning in the whole story abandons 2:1, 3:2, 4:3", "Temperament is defined by its deviation from them. You cannot state what a piano tuner is doing without 3:2 in hand, which is a stronger claim than bare survival."],
    ["Abandoned, since temperament put irrational quantities in their place", "Temperament approximates them; it does not do without them. An approximation requires the thing approximated in order to be described at all. Ask how you would state what a tuner is doing."],
    ["Kept as a historical curiosity, of no use to a working tuner", "The lesson says the opposite of the tuner in particular. Ask what quantity he narrows, and by what fraction of what, and whether he could say so without the old ratios in hand."],
    ["Reduced to 2:1 alone, the only interval left pure", "The diapason is indeed left pure, but the audit’s claim covers all three ratios and concerns their indispensability, not their purity. Distinguish being left pure from being needed."]
  ]},
  { q: "What does the audit say of the step — the tone?", a: 2, o: [
    ["Unchanged at 9:8", "That was its value in the old art. The audit assigns this line one of its harsher verdicts, and the reason lies in how a tempered keyboard divides the diapason. Work out what a whole step there must be."],
    ["Refuted, like the hanging weights", "Nothing about 9:8 was shown to be false; a tone in that ratio is exactly what it always was. The keyboard simply stopped using it. Keep refutation apart from disuse throughout this lesson."],
    ["Replaced: the keyboard’s whole step is the sixth root of two, and no ratio of whole numbers", "Six equal whole steps to the diapason. This is the same break as the twelfth root of two for the semitone, and it is the line on which the old art and the modern instrument part company."],
    ["Divided among three candidates", "That verdict belongs to another entry of the audit. The step has one modern value and no rivals; the trouble with it is what kind of quantity it turns out to be. Read the fourth entry."]
  ]},
  { q: "What does the audit say of the work — the <span class=\"latin\">opus</span> — of the art?", a: 3, o: [
    ["Unchanged: it is still the scale", "The scale was the opus of harmonics, and the audit does not leave this line where it found it. Read the fifth entry and see what it puts in the scale’s place."],
    ["Ended, and relocated to the academies", "That verdict belongs to the last of the six, about the kind of science and where its live work was carried on. The work of an art is what it produces, not where it is housed."],
    ["Refuted by Vincenzo Galilei’s experiments", "His weights refute a claim about proportions and tension, not an account of what the art is for. Refutation appears in the lesson’s second half and touches only three things. Count them."],
    ["Superseded: the opus of harmonics was the scale; the work of the modern art is the composition", "Which is why a modern reader opening a Boethian treatise finds no music in it. What is being produced there is a scale, exactly as the audit says, and not a piece."]
  ]},
  { q: "What does the audit say of the kind of science?", a: 1, o: [
    ["Unchanged: musica is still a middle science, taught in the arts course", "It kept its statutory place into the seventeenth century, increasingly as a Boethian formality, while the live work went elsewhere. A place on a syllabus is not a kind of science."],
    ["Ended, and relocated: the live mathematical work moved to the academies, and the nineteenth-century chair of music teaches history, criticism, and composition", "Mersenne, Sauveur, Euler — all of them working outside the arts faculty. The name stayed in the university and the science left it."],
    ["Unchanged in kind, but renamed acoustics", "A renaming would leave the demonstrations where they stood. What moved was both the manner of demonstrating and the institution in which the work was done. Read the sixth entry closely."],
    ["Refuted by the collapse of the quadrivium", "The lesson nowhere says the quadrivium collapsed, and refutation is not the verdict on this line. It distinguishes carefully between being shown false and being left behind."]
  ]},
  { q: "What did Vincenzo Galilei’s experiment with hanging weights show?", a: 2, o: [
    ["That pitch varies directly with tension, as the sources had said", "He found otherwise, which is why the lesson calls this a genuine refutation. Hang the weights in imagination and ask what doubling the tension actually gives you in the way of pitch."],
    ["That 2:1, 3:2, and 4:3 are false for string lengths", "For lengths they hold, and the course has had you produce them on a monochord from the beginning. What was under test was whether the same proportions govern a second quantity as well."],
    ["That raising a string by a diapason takes four times the tension, not twice, because pitch varies as the square root of the tension", "A claim the tradition transmitted, tested and found false. Vincenzo, being a humanist, concluded that Pythagoras must have known the truth and been garbled in transmission."],
    ["That the music of the spheres is inaudible", "That denial was made long before, by Aristotle and by St. Thomas, and it needed no weights at all. The experiment in question concerns strings and the things that stretch them."]
  ]},
  { q: "What does the lesson say about audible music of the spheres?", a: 0, o: [
    ["It goes — but Aristotle and St. Thomas had already denied it, so the tradition corrected itself from within, long before", "Worth remembering when this story is told as science overturning philosophy. A good deal of the correcting was done by philosophers, and on philosophical grounds."],
    ["It was refuted by Sauveur’s measurement of absolute frequency", "The denial is centuries older than any measurement of frequency, and it was reached by argument rather than by instruments. Look at the authorities the lesson cites for it."],
    ["It still stands, since the heavens are in ratio", "The lesson lists it among the three things that go. Whatever the proportions of the heavens may be, the audible music is not defended here. Re-read the three items marked as refuted."],
    ["It was never part of the tradition at all", "It was very much part of it, which is why the denial had to be recorded and dated. A tradition that never held a doctrine has no occasion to correct itself of it."]
  ]},
  { q: "The lesson distinguishes what was refuted from what was left behind. What does being left behind amount to?", a: 2, o: [
    ["That it was quietly shown false, without anyone announcing it", "Then it would belong with the refuted items, and the lesson would have no need of two categories. Being shown false is precisely what did not happen to these. Ask what did happen to them."],
    ["That it was forgotten through neglect, and might be recovered by scholarship", "Neglect is not the reason given. The lesson names a cause, and it is one that leaves the old claims perfectly true while making them idle. Re-read the sentence after the three refutations."],
    ["That the questions changed, so the claims ceased to be asked about — not that they were shown false", "And the difference is the whole point of the chapter. A tradition is not honoured by defending what is false, nor by conceding what was never disproved."],
    ["That it was absorbed into physics and survives there under other names", "Some of it was; but absorption is not the category the lesson draws here, and much on the list was simply no longer at issue. Ask why a claim stops being discussed at all."]
  ]},
  { q: "What debt does the lesson say the modern reader will not guess?", a: 1, o: [
    ["That modern acoustics took its instruments from the medieval organ builders", "Nothing of the kind is claimed. The debt named concerns a manner of proceeding rather than apparatus. Look at the boxed remark and see what it says was practised in the study of music first."],
    ["That the experimental manner — state a principle, contrive an experiment, let the result correct the principle — was practised in the study of music before it was practised in the study of the heavens", "Vincenzo filled a cellar in Pisa with lutes and strings and hung weights on them to test a claim of Boethius. His son grew up in that cellar."],
    ["That Kepler learned his method from Galileo’s monochords", "The lesson has Kepler learning the habit from philology, and Galileo learning it from his father’s monochords. You have crossed the two attributions. Read the last sentences of the boxed remark."],
    ["That the liberal art of music is best defended by nostalgia", "The lesson says outright that this would be a worse defence than the one it offers. Ask what it proposes instead in the final sentence of that remark."]
  ]},
  { q: "What did Helmholtz’s account of consonance (1863) do to the ratios?", a: 3, o: [
    ["Abandoned them, explaining consonance by the ear alone", "The lesson says the account did not abandon them. Read the sentence again and notice carefully what it says the explanation was an explanation <em>of</em>."],
    ["Restored them as the middle term of a middle science", "An explanation running through the beating of upper partials in the ear is physical and physiological; it does not return the art to arithmetic. Ask what kind of demonstration this is."],
    ["Showed that the simple ratios sound rough", "The account explains why they sound as they have always sounded to everyone, not the reverse. Read the sentence through to its end and take the two halves in order."],
    ["Explained why the simple ones sound smooth — their partials coincide instead of beating — without abandoning them", "Dissonance becomes a roughness in the ear. That is an explanation of the ratios’ effect by physiology, which is one further step away from arithmetic as the middle term."]
  ]}
]

});

/* ---- G ---- */
/* Study questions — Chapter IX, The other branches.

   Format:  "<lesson id>": [ { q, a, o: [ [option, response], ... ] }, ... ]
   where `a` is the index, in the ORIGINAL order, of the true option. */

window.MusicaArs = window.MusicaArs || {};
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"east-1": [
  { q: "According to the tradition’s own account, where did St John of Damascus gather the chants into eight tones?", a: 0, o: [
    ["At the monastery of Mar Saba, in the wilderness above the Dead Sea, in the eighth century", "The account adds that he set the eight in a cycle of eight weeks, so that the year turns through them and comes round again. He had been a high official at the caliph’s court and gave it up for a cell."],
    ["At the court of the caliph in Damascus, where he served as a high official", "That court is where the account says he began, and what it says he gave up — he left it for a cell. Ask where the tradition places the man at the time of the work itself."],
    ["In Constantinople, in the ninth century", "That city and that century enter this lesson only where it reports what some scholars assign to one layer of the system. The tradition’s own account names a different place and an earlier age."],
    ["At Antioch, in the sixth century", "That century and see belong to an older ascription which the lesson says is now generally set aside. The account you were asked for concerns a monk of a much later age, in a monastery."]
  ]},
  { q: "Whom does the account name as working beside him there?", a: 2, o: [
    ["Romanos the Melodist, master of the kontakion", "The lesson dates that man c. 485–555 and gives him the kontakion, some two and a half centuries earlier. Check the list of dates for who is placed at Mar Saba in the eighth century."],
    ["John Koukouzeles, <span class=\"latin\">maïstōr</span>", "The list dates him c. 1270–1341 and gives him the kalophonic style, five hundred years later, in a different city altogether. Look again at who the account places in that monastery."],
    ["Kosmas of Maiouma, called the Melodist, his adoptive brother and fellow monk", "Two Melodists stand in the lesson’s list of dates, and this is the later of them. The book itself is named for what it contains, and has carried the Damascene’s name for twelve hundred years."],
    ["Manuel Chrysaphes, <span class=\"latin\">lampadarios</span> of the imperial clergy", "The lesson dates his book on the art of chanting to 1458 and places him among the imperial clergy, not in a Judaean monastery. Return to the eighth-century entry in the list."]
  ]},
  { q: "What does the lesson say of the relation of the plagal tones to their authentics?", a: 1, o: [
    ["They stand a fifth above their authentics, and are the brighter of the two", "You have the direction reversed and the interval enlarged besides. The lesson describes the plagals as darker relatives of the same tone; ask which way a darker relative would be likely to lie."],
    ["They stand a fourth below their authentics, and are darker relatives of the same tone", "The characters run in pairs on that account. Grave and open, sweet, virile, festal — these belong to the authentics, with the plagals shadowing them."],
    ["They use different pitches altogether from their authentics", "Nothing in the lesson separates them that way; it calls them relatives of the same tone. Ask what work the word ‘relative’ was doing in that sentence."],
    ["They are the four tones added later, once the first four were in use", "The lesson gives no such order of composition, and the account it reports has all eight gathered at once. It describes a standing relation between the two sets, not a sequence in which they were made."]
  ]},
  { q: "Which of the eight is not called plagal at all, and what is it called instead?", a: 3, o: [
    ["The second plagal, called ‘sweet’", "Sweetness is one of the characters singers give to a tone, and a character is not a name standing in place of ‘plagal’. Ask which of the four plagals the lesson singles out as irregular."],
    ["The first plagal, which is called simply ‘the fifth tone’", "The lesson offers no such alternative name for any of the eight, and the irregularity it does point to falls further along the plagal series. Count the plagals in order."],
    ["The fourth plagal, called festal", "Festal is the character the lesson gives to the fourth authentic. That is a remark about how a tone sounds to singers, not a substitute for its place-name in the system."],
    ["The third plagal, called <span class=\"latin\">barys</span>, ‘grave’", "The one irregularity in an otherwise perfect system — and singers will tell you the tone has a character to match the name it was given."]
  ]},
  { q: "The lesson sets two limits at the outset. One is that only what is premodern in each tradition is treated. What is the other?", a: 2, o: [
    ["That the modern scholarly account is preferred wherever it conflicts with a tradition’s own", "The lesson declines to rank the two at all: it says outright that it does not undertake to settle such questions, being a course in harmonics. Re-read what it promises to say first and what it promises to say after."],
    ["That only traditions possessing a written theory of music are considered", "One of the three treated here produced no theory to speak of and wrote no music down at all, so such a limit would empty the chapter. Look again at the sentence about whose account comes first."],
    ["That each tradition’s own account of itself is given first, in its own terms, before any note of where modern scholars have raised questions", "The reason given is modest: this is a course in harmonics, not in the history of liturgy. Nothing in it turns on how those questions come out."],
    ["That no tradition’s account of its own origins is reported at all", "The chapter reports those accounts at length and puts them first, before anything else. The limit concerns the order in which things are said and what the course declines to do, not a silence."]
  ]},
  { q: "On what grounds have some scholars questioned whether St John composed the system?", a: 0, o: [
    ["That the eight-fold ordering appears in books of the Jerusalem rite they date before his lifetime, that the weekday layer they take to be ninth-century and Constantinopolitan, and that no notation existed in his century in which melodies could be fixed", "The earliest witnesses they cite are not Greek but Georgian and Armenian translations of a collection called the <span class=\"latin\">Ancient Iadgari</span>. On that reading he belongs to the circle at Jerusalem that shaped the book."],
    ["That the ascription first appears in modern times, no medieval source naming him", "The lesson says the reverse about the ascription’s age: the fullest medieval Greek treatise on the modes opens by naming him. Look for grounds that do not depend on the ascription being late."],
    ["That Severus of Antioch is now known to have composed an Octoechos in the sixth century, which the lesson reports as the settled view and as the reason the later ascription fails", "The lesson mentions that older claim only to say it is now generally set aside, and offers it as nobody’s evidence. The grounds you want are drawn from datable books and from what notation existed."],
    ["That the Greek and Slavic service books do not in fact carry his name", "They do carry it, and the lesson says they still say so. Ask what kind of evidence could raise a question about authorship while the books themselves go on making the ascription."]
  ]},
  { q: "What does the lesson say the <span class=\"latin\">Hagiopolites</span> is?", a: 3, o: [
    ["A collection of hymns of the Jerusalem rite, surviving in Georgian and Armenian translation", "You have described the collection the lesson calls the <span class=\"latin\">Ancient Iadgari</span>, and the witnesses cited for it. The work in question is a piece of writing about music, not a book of hymns."],
    ["The longest Byzantine treatise on speculative harmonics", "That description belongs to a work of about 1300 which runs on Ptolemy and divides tetrachords as you have done. The book asked about concerns the modes of the chant instead."],
    ["The service book containing the chants of the eight-week cycle", "That book is named for what it contains, and the lesson says so plainly. The work asked about is a treatise about the modes rather than the repertory itself."],
    ["The fullest medieval Greek treatise on the modes, which opens by naming St John", "Which is why the lesson calls the ascription itself ancient, whatever the modern discussion makes of it. Paris gr. 360 is the manuscript given in the sources line."]
  ]},
  { q: "What does the lesson say about the anonymous <span class=\"latin\">Quadrivium</span> of 1008?", a: 1, o: [
    ["It is the earliest book to set out the eight tones in order", "The lesson is emphatic that none of the Byzantine harmonic literature mentions the eight tones anywhere. Ask what the four subjects of a quadrivium are, and where a chant repertory would sit among them."],
    ["It treats harmonics as one of the four mathematical sciences, exactly as Boethius did in the West", "The same architecture, then, on both sides of the divide — though in Byzantium the material was Ptolemy, Nicomachus and Aristoxenus read in Greek rather than a Latin reduction of them."],
    ["It is Manuel Bryennios’s <span class=\"latin\">Harmonika</span> under an earlier title", "Bryennios wrote about 1300, three centuries later, and the lesson lists the two as separate works by separate hands. Compare the dates it gives for each of them."],
    ["It is a Slavonic manual, made after the baptism of Rus’", "The lesson says there is no Rus’ writing about music of any kind before the singing-alphabets of the fifteenth century. This book belongs to the Greek side of the chapter."]
  ]},
  { q: "Which of these does the lesson say of Manuel Bryennios?", a: 2, o: [
    ["He gave harmonics a hundred pages and died about 1310", "Those are the lesson’s words for another Byzantine writer on the science, named just before him in the same paragraph. Compare the two entries and see which is credited with the longest treatment."],
    ["He described the schools of Constantinople and their masters", "That was done by a writer of the twelfth century whom the lesson cites for the institutional point, that the two subjects had separate masters. The man asked about wrote harmonics himself."],
    ["Writing about 1300, he produced the longest Byzantine <span class=\"latin\">Harmonika</span> there is, and the Latin West later read him with respect", "Like the rest of that literature his book never mentions the eight tones. He was dividing Ptolemaic tetrachords in the same city where Koukouzeles was composing."],
    ["He composed the most elaborate chant Byzantium ever produced", "That is the other half of the lesson’s pairing, and the whole point of the pairing is that these are two men who never refer to one another. Sort the composer from the theorist."]
  ]},
  { q: "In the lesson’s summary of the four settlements, what did the Slavs receive?", a: 0, o: [
    ["The practice and the eight-fold framework, and almost no theory", "The lesson puts a hard edge on ‘almost’: there is no Rus’ writing about music of any kind before the singing-alphabets of the fifteenth century."],
    ["The science in a Latin handbook, taught in the quadrivium", "That is the lesson’s account of the West, whose handbook was Boethius and whose practice grew away into a grammar of its own. Ask what a tradition receiving the Byzantine rite in Slavonic would have carried with it."],
    ["Both the science and the practice, kept in separate schools", "That describes the settlement the lesson credits to the Greeks, who had masters for each and kept them apart. The Slavic entry is notable for what is missing rather than for what is doubled."],
    ["The practice with no notation at all, the repertory carried in the memory of cantors", "That is said of a tradition further south, which wrote no music down until the twentieth century. The Slavs did write, and the lesson dates their earliest writing exactly."]
  ]},
  { q: "The lesson’s list of dates gives 1814. What does it mark?", a: 3, o: [
    ["Mezenets’s commission in Moscow", "The list dates that to 1669, paired with the Stoglav of 1551, and places it in Russia rather than in the Greek world. Read the last entries of the list over again."],
    ["Muʿallim Takla’s standardizing of the Coptic hymns", "The list gives 1859 for that, paired with a later date for the man who transcribed the hymns afterwards. The entry asked about belongs to another city and another tradition."],
    ["Ibn Kabar’s account of Coptic chant at Old Cairo", "The list dates his death to 1324 and calls his the fullest medieval Coptic account of chant. You are five centuries early, and in the wrong tradition besides."],
    ["The New Method of the Three Teachers at Constantinople", "The last Greek entry in the list, and the latest turning-point it records on that side. The list is a chronology of the traditions themselves, not of the questions scholars have raised about them."]
  ]}
],

"east-2": [
  { q: "The cantor opens with an <span class=\"latin\">ēchēma</span> before a word of the text is heard. Which syllables belong to the third tone?", a: 1, o: [
    ["<span class=\"latin\">Neanes</span>", "That vocalise belongs to the tone immediately before the one you were asked for. Run the four in their order and count where you have stopped."],
    ["<span class=\"latin\">Nana</span>", "A short vocalise on syllables that mean nothing at all. It establishes the tone and gives the choir its ground before the text begins."],
    ["<span class=\"latin\">Hagia</span>", "You have gone one tone too far along the series. The word looks as though it ought to mean something holy, but the lesson insists these syllables mean nothing whatever."],
    ["<span class=\"latin\">Ananes</span>", "That one opens the series rather than standing third in it. Say the four vocalises in order and see which falls in the place you were asked about."]
  ]},
  { q: "What does the lesson report of Aurelian of Réôme?", a: 2, o: [
    ["That he carried the eight tones from Byzantium into Francia in the ninth century", "The lesson makes no claim here about how anything was transmitted; it reports only that he knows the cognate formulas, and what he says about them. Ask what he says, not how he came by them."],
    ["That he took the syllables for a corrupted Greek text whose sense had been lost", "He says the opposite about their sense. Look at the two things he asserts of the syllables — what they mean, and what they are an expression of."],
    ["That, writing in Francia in the ninth century, he knows the cognate <span class=\"latin\">noeane</span> formulas and says outright that the syllables mean nothing and are an expression of joy", "So the custom is not only Greek. A Frankish witness confirms both the practice and the reading of it that the Greek side gives."],
    ["That he catalogued the melodic formulas of each tone in a book of his own", "Catalogues of formulas belong to the Slavic half of this lesson and to a much later age. The Frankish witness is cited for a remark about syllables, not for a repertory-book."]
  ]},
  { q: "A melody turns aside into another tone or another genus. What marks the change?", a: 0, o: [
    ["A <span class=\"latin\">phthora</span>, a ‘corrupter’", "The vocabulary is a singer’s vocabulary throughout: things bear witness, things corrupt, things are grave. Nothing in it is the language of a mathematician."],
    ["A <span class=\"latin\">martyria</span>, a ‘witness’", "Those testify at the head where the tone begins and along the way where the voice has arrived — they report the state of things rather than mark a departure from it. Ask which sign names a change."],
    ["A <span class=\"latin\">fita</span>", "That belongs to the Russian notation described further down the page, and it names an extended melisma rather than any change of tone. Keep the two vocabularies apart."],
    ["A second <span class=\"latin\">ēchēma</span>, sung in the middle of the piece", "The vocalise stands before the chant and gives the choir its ground; the lesson does not have it interrupting the text once begun. Look for a sign written into the melody itself."]
  ]},
  { q: "In the old Russian sources, what are <span class=\"latin\">kokizy</span>?", a: 3, o: [
    ["The books in which the formulas of the eight tones are catalogued", "You have named the volume rather than the thing it holds, and the lesson gives a separate word for such a book. Ask what is listed inside one of them."],
    ["Extended melismas which the manuscript names but does not write out", "That is a different device of the same notation, and the lesson names it from a letter of the alphabet. The word asked about covers the ordinary stock rather than the great flourish."],
    ["Signs warning that a group of ordinary signs is not to be read plainly", "That is the cipher described a little further down the page, which has a name of its own meaning ‘face’. The word asked about is the older name for something more basic."],
    ["The melodic formulas themselves, called <span class=\"latin\">popevki</span> in modern usage", "With characteristic openings, medial turns and cadences. Brazhnikov’s catalogues run to several hundred across the eight tones, and a chant is assembled from that stock as a sentence from a vocabulary."]
  ]},
  { q: "What is a <span class=\"latin\">fita</span>, and what is a <span class=\"latin\">fitnik</span> for?", a: 2, o: [
    ["An ordinary formula of the tone; the book in which such formulas are catalogued", "You have described the plain stock of a tone and its catalogue, which the lesson treats a paragraph earlier. The thing asked about is singled out as something beyond an ordinary formula."],
    ["A group of ordinary signs to be read as a longer phrase; the key that decodes them", "That is the cipher the lesson calls a ‘face’, whose plain reading is not the intended reading. The item asked about is named from a letter and is not written out at all."],
    ["An extended melisma which the manuscript merely names rather than writing out; the book that spells it out for a singer who does not know it", "Named from the letter Ѳ that marks it. The notation withholds on purpose and trusts the memory of a trained man — Brazhnikov’s <span class=\"latin\">tainozamknennost’</span>, ‘secret-closedness’."],
    ["A sign marking that the melody has passed into another tone; the book listing such changes", "A change of tone is marked by a sign the lesson calls a ‘corrupter’, and that belongs to the Greek half of the page. The Russian item asked about is a stretch of melody."]
  ]},
  { q: "What is a <span class=\"latin\">litso</span>?", a: 1, o: [
    ["The cadence that closes a chant in a given tone", "Cadences are among the marks of the ordinary stock of a tone, and there is nothing hidden about them. The thing asked about is defined by the gap between what stands written and what is sung."],
    ["A group of ordinary signs whose plain reading is not the intended reading — a cipher standing for a longer phrase", "A ‘face’: the signs look like themselves and mean something else. It and the great melisma are the two devices behind Brazhnikov’s word for the principle, ‘secret-closedness’."],
    ["A melisma written out in full at the foot of the page", "Nothing in these manuscripts is written out in full for the singer’s convenience; they withhold on purpose. Ask what the plain reading of a sign has to do with its intended reading."],
    ["The character or affect assigned to each of the eight tones", "Affects appear on this page only in the remark about what certain Copto-Arabic writers describe. The Russian word asked about names something visible on the page of a manuscript."]
  ]},
  { q: "What is a <span class=\"latin\">laḥn</span>, and how does it stand to the Greek <span class=\"latin\">ēchos</span>?", a: 0, o: [
    ["A named, recognizable melody to which suitable texts are set — not a mode at all, since Coptic chant is not organized by mode", "Ibn Kabar named some twenty-six of them before 1324, and most are still known by name and occasion in Cairo today: <span class=\"latin\">laḥn al-ḥuzn</span>, ‘of grief’; <span class=\"latin\">laḥn al-faraḥ</span>, ‘of joy’."],
    ["The Coptic name for a mode, one of eight as in the Greek system", "Here the comparison breaks, and instructively: the lesson says Coptic chant is not organized by mode at all. Ask what its unit actually is, and what governs which one a given text receives."],
    ["A season of the Coptic year, governing which tune a text receives", "You have named the ordering rather than the thing ordered. Six such categories are listed on the page; ask what it is that they distribute among the days."],
    ["A book of tunes for the month of Advent", "One season of the year does have its own book, and that is a fact about that season rather than a definition of the word. Ask what the unit of the repertory itself is called."]
  ]},
  { q: "Among the six categories that govern which tune a text receives, which is <span class=\"latin\">al-shaʿānīnī</span>?", a: 2, o: [
    ["The sorrowful — Holy Week, and the burial of the dead", "The lesson gives that category a name of its own and a separate place in the list. The one asked about is marked out as belonging to neither of the two obvious kinds."],
    ["The annual — the ordinary tune, through the year", "That is the everyday category, used where no season claims the text at all. The one asked about is tied to a single day."],
    ["Palm Sunday, which has a tune of its own, neither festal nor sorrowful", "A whole category for one day, defined by what it is not. Beneath this ordering by the year runs a second by the week, in the Adam and Watos hymns."],
    ["The fasting tunes, above all for the Great Fast", "Those cover a long season, and the lesson lists them under a name of their own. The category asked about is far narrower, and covers one day of the year."]
  ]},
  { q: "Three Copto-Arabic writers describe a scheme of four authentic and four plagal modes. On what grounds do some scholars read those passages as they do?", a: 3, o: [
    ["That the manuscripts containing them are forgeries of a later date", "No question of authenticity is raised on the page; the passages are taken as genuinely written by Ibn al-ʿAssāl, Ibn Sibāʿ and Ibn Kabar. The grounds concern what the passages are about."],
    ["That the Greek names in them are misspelt and so misunderstood", "Nothing in the reported argument turns on the spelling of the names. Ask instead what those scholars say about the kind of literature in which descriptions of modes and their effects belong."],
    ["That the eight modes described there are the six categories of the Coptic year under other names", "The lesson keeps the two schemes apart and never equates them: the categories are seasons, and one scheme has eight members where the other has six. Re-read what the scholars are said to claim."],
    ["That no eight-mode system appears in the repertory and no cantor is known to have worked from them, so that the passages belong to a wider Greek and Arabic literature on the moral effects of music", "Ilona Borsai put the question directly in a paper of 1974, asking whether there is an Octoechos in the Coptic system. The lesson reports the reading and leaves it there."]
  ]},
  { q: "Razumovsky and Voznesensky analysed the <span class=\"latin\">glasy</span> with the Western apparatus of final, dominant and ambitus. What has been urged against that, and by whom?", a: 1, o: [
    ["Johann von Gardner held the apparatus too crude to catch the formulas, and Brazhnikov afterwards refined it", "The objection reported is not one of coarseness, and no refinement of that apparatus is described anywhere on the page. Ask what becomes of an ambitus when a melody will not stay inside an octave."],
    ["Johann von Gardner and others held that it yields contradictions, since <span class=\"latin\">znamenny</span> melodies range across the whole pitch space rather than sitting within an octave-species", "Analysis by formula, after Brazhnikov, is now the more usual approach. The lesson reports the shift without pronouncing the older apparatus refuted."],
    ["Later scholars showed the two had invented their categories, having no manuscripts to work from", "Nothing of the kind is said, and the categories they used were the ordinary Western ones. The difficulty reported concerns how the melodies behave, not what the two men had before them."],
    ["Brazhnikov held that the tones are not eight at all, but a much larger number", "His contribution on this page is a body of catalogues and a method of analysis by formula. The objection reported is about the fit between a Western apparatus and the way the melodies move."]
  ]},
  { q: "Among which kind of principles does the lesson place these systems?", a: 2, o: [
    ["Among the principles that derive, since a formula can in the end be traced back to a ratio", "The lesson denies exactly this: a Russian singer cannot derive a formula from a ratio, and was never asked to. Ask instead what he can do with the eight tones, and what he can judge."],
    ["Among neither kind, the eight tones being a matter of custom and not of principle", "The lesson is more generous than that. It calls the achievement real knowledge and grants the singer a definite competence; look at the two kinds of principle it names, and ask which fits that competence."],
    ["Among the principles that restrict rather than those that derive", "Give a Russian singer the eight tones and he can tell you whether a melody is well formed, and can make a new one that is. It is a grammar, as the rules of organum were a grammar."],
    ["Among the principles that derive, as the divisions of a tetrachord are derived", "Tetrachord-division belongs to the science of the earlier chapters, and the lesson’s whole point is that these systems do something else. Ask what a singer trained in them is able to judge."]
  ]}
],

"east-3": [
  { q: "Among the Byzantine interval signs, what does the <span class=\"latin\">ison</span> tell the singer to do?", a: 2, o: [
    ["Hold one note beneath the melody while the rest sing above it", "You have taken the word for a sustained sound under a chant. Here it is one of the interval signs, and every one of those states only how this note differs from the note immediately before."],
    ["Return to the pitch on which the piece began", "No sign in this system can refer back to the beginning, because none of them names a pitch at all. Each states a difference from the note immediately before, and nothing further."],
    ["Sing the same again: its interval value is nought", "The signs combine additively, so that a compound sign is a sum, and this one adds nothing. There is no staff, no clef, and nowhere in the system an absolute pitch."],
    ["Sing up one step", "That value belongs to another of the ascending signs. Run through the list the lesson gives and find which sign it sets at nought."]
  ]},
  { q: "Which sign carries the value ‘up four’?", a: 0, o: [
    ["<span class=\"latin\">Hypsēlē</span>", "And the <span class=\"latin\">elaphron</span> is down two against it. Since the signs are summed, a scribe’s slip in any single one of them shifts everything that follows after."],
    ["<span class=\"latin\">Kentēmata</span>", "That sign is worth exactly half of the value you were asked for. Set the ascending signs beside one another and compare what the lesson assigns to each."],
    ["<span class=\"latin\">Oligon</span>", "The smallest ascending step in the list, not the largest one. Read the ascending signs over again in order of size, and count the steps each is worth."],
    ["<span class=\"latin\">Apostrophos</span>", "You have chosen a descending sign, and the smallest of those besides. Settle the direction before you settle the size."]
  ]},
  { q: "What does the lesson say of the Chartres and Coislin families of the tenth to twelfth centuries?", a: 3, o: [
    ["They were the first to fix an absolute pitch for the chant", "No layer of this notation fixes an absolute pitch at any date, early or late; the system has no place for one. Ask what these families do record, and what they leave uncounted."],
    ["They abandoned the interval signs in favour of a staff", "There is no staff anywhere in the Byzantine system. The development the lesson traces is a development in precision within one apparatus, not the exchange of one apparatus for another."],
    ["They consist of a single theta meaning ‘a figure goes here’", "That is the earliest layer of all, which the lesson names before it comes to these two. The families asked about do more than mark the place where a figure falls."],
    ["They record contour without counting steps", "Notation that specifies the number of steps appears only in the last quarter of the twelfth century — which is why the earliest chant that can be read from the page dates from about 1175."]
  ]},
  { q: "Why are the <span class=\"latin\">megala sēmadia</span> also called <span class=\"latin\">aphōna</span>, ‘voiceless’?", a: 1, o: [
    ["Because they are sung on syllables that have no meaning", "Meaningless syllables belong to the vocalise that opens a chant, which is another matter altogether. These are signs standing on the page, and their name reports what they do not carry."],
    ["Because they carry no interval value", "Some thirty of them, often written in red ink beside the black. They are among the most beautiful things in medieval manuscript culture and among the least understood."],
    ["Because they occur only in books never meant to be sung from", "The lesson says nothing of the kind, and places them beside the interval signs in the same manuscripts. Ask what an interval sign carries that these do not."],
    ["Because scholars have never agreed what they mean, and so they remain mute", "Their obscurity is real — the lesson sets out three competing readings of them, and says scholars have argued for all three. But the name states a plainer fact than that about their value."]
  ]},
  { q: "What does a <span class=\"latin\">znamenny</span> hook give the singer, and what does it withhold?", a: 2, o: [
    ["Absolute pitch, but nothing of rhythm", "You have it inverted on both counts. Rhythm is among the things the lesson says a single hook holds, and pitch is precisely what this notation does not give."],
    ["The size of the interval from the note before, but no pitch", "Interval size is what the Greek signs of the first half of this lesson state. The Russian hooks are said to give neither that nor a pitch, and what they do give is of another kind."],
    ["A syllable and a gesture — direction, contour, one note or several, with rhythm and manner of attack — but no absolute pitch and no interval size", "The notation takes its name from <span class=\"latin\">znamya</span>, a sign; the signs themselves are the <span class=\"latin\">kriuki</span>, the hooks."],
    ["The name of the tone and the season, but nothing of the melody", "A hook is a sign for singing, not a rubric standing over the text. Ask what the lesson lists as held within a single one of them."]
  ]},
  { q: "What is Ivan Shaidur credited with, and about when?", a: 3, o: [
    ["The <span class=\"latin\">priznaki</span>, strokes added to the sign itself, about 1670", "Those strokes came after the invention he is credited with, and for a reason belonging to the press rather than to singing. Ask what came first, and what the strokes were brought in to replace."],
    ["A twelve-degree system and a classification of every sign, about 1600", "That was the work of a commission that sat in Moscow much later, and it is a whole system rather than a small practical mark. The Novgorod singer’s contribution was slighter and earlier."],
    ["The <span class=\"latin\">dvoeznamenniki</span>, which write a chant twice down the page, about 1600", "Those manuscripts set two whole notations side by side and solved a different problem for a different reader. The invention asked about is a mark placed beside a hook."],
    ["The <span class=\"latin\">kinovarnye pomety</span> — small letters in cinnabar red beside the hook, naming the degree — around 1600", "A Novgorod <span class=\"latin\">raspevshchik</span>, that is, a working singer. What opened this notation to reading was a series of practical inventions by such men and not by theorists."]
  ]},
  { q: "What did Alexander Mezenets and the commission of six <span class=\"latin\">didaskaloi</span> produce, and what became of it?", a: 1, o: [
    ["A staff notation for the Russian chant, printed and in use by 1671", "No staff came out of that room, and nothing at all came off a press. The commission worked on the hooks themselves, fixing degrees and sorting signs into classes."],
    ["The <span class=\"latin\">Izveshchenie o soglasneishikh pometakh</span>, which fixed a twelve-degree system and classified every sign; a type-font was cut for it by 1671, but the books were never printed", "The commission sat in Moscow from February 1669 to May 1670. Mezenets was a monk of the Savvino-Storozhevsky monastery."],
    ["Cinnabar letters beside the hooks, naming the degree of each", "Those are credited to a Novgorod singer some seventy years earlier, and it was their unprintability that set the later problem in the first place. The commission’s work was larger and of another kind."],
    ["A catalogue of the melodic formulas of the eight tones", "Catalogues of formulas are a matter for the previous lesson, and the great ones are modern. This commission fixed degrees and sorted signs."]
  ]},
  { q: "What are the <span class=\"latin\">dvoeznamenniki</span>, and why do they matter?", a: 0, o: [
    ["Manuscripts that write the same chant twice down the page, once in hooks and once in Kievan staff notation — they are the reason the older notation can be read at all", "Whoever made them was solving a practical problem for singers who knew one system and not the other, and left a key behind him without intending one."],
    ["Manuscripts that write a chant twice in hooks, one copy plain and one with red letters added", "Both of those would be the same notation twice over, and together they would decode nothing. Ask what a reader would need beside the hooks in order to learn what the hooks meant."],
    ["Printed books issued once the type-font was cut in 1671", "The lesson is explicit that the books of that commission were never printed. The manuscripts asked about belong to the practical side of the story, made by singers for singers."],
    ["Books giving two possible readings for each ambiguous sign", "Nothing on the page describes a table of alternatives. The manuscripts asked about set out whole chants from end to end, not lists of signs."]
  ]},
  { q: "What do the medieval Coptic liturgical books carry, in place of notation?", a: 2, o: [
    ["Dashes and dots above the text, showing the direction of the melody", "Those marks, the <span class=\"latin\">ḥazzāt</span>, are in use among cantors today, and the lesson says their history has not been traced back beyond modern practice. The medieval books carry something plainer."],
    ["Greek alphabetic notation, as in the hymn from Oxyrhynchus", "That one notated piece is in Greek and not Coptic, and the lesson says it has not been connected to the later repertory. No surviving Coptic book before the twentieth century carries notation of any kind."],
    ["Text, rubrics — <span class=\"latin\">bi-al-nāqūs</span>, ‘with cymbals’ — and the name of the tune", "The repertory rested on the professional cantorate, the <span class=\"latin\">muʿallimūn</span>, and it rested there very well. Of the melody itself nothing was written down."],
    ["The melody in outline, for the cantor to fill out as he sang", "No outline of a melody appears in them, at any level of detail whatever. Ask what a book can usefully give a singer who already holds the tune in memory."]
  ]},
  { q: "Whose singing did Ernest Newlandsmith set down, and at whose invitation did he come?", a: 3, o: [
    ["Muʿallim Takla’s, at the invitation of Pope Cyril IV", "That cantor was sent through Upper and Lower Egypt in the 1850s, and his book of 1859 is still the working book of the tradition — but the transcriptions in question were made long after his time."],
    ["Ragheb Moftah’s own, at the invitation of the Library of Congress", "Moftah is the man who issued the invitation and who spent seventy years documenting the chant; the collection went to that library much later. The voice taken down belonged to a cantor."],
    ["Margit Tóth’s, at the invitation of Bartók", "She came later still and transcribed the Liturgy again with the ornamentation written in, her doctoral work having been advised by Bartók. She is not the singer, and she summoned nobody."],
    ["Muʿallim Mikhāʾīl Jirjis al-Batanūnī’s, at the invitation of Ragheb Moftah", "He came out each winter from about 1926 for nine or ten years, worked from a houseboat on the Nile notating by ear from live performance, and filled sixteen folio volumes."]
  ]},
  { q: "What does the lesson report about the Oxyrhynchus hymn?", a: 0, o: [
    ["A Trinitarian doxology of the late third century in Greek alphabetic notation — in Greek and not Coptic, and not connected to the later repertory", "The one notated Christian music surviving from ancient Egypt, and it stands apart. The earliest Coptic melody that can be read from the page still dates from 1926."],
    ["The earliest Coptic notation, and the ancestor of the marks cantors use today", "It is not Coptic, and the lesson says nothing has been shown to link it with what came after. The marks used by cantors today are treated separately and have a history of their own."],
    ["One of the pieces Newlandsmith took down among his sixteen folio volumes", "Those volumes hold the Liturgy of St Basil and some twenty-five great seasonal hymns, taken down by ear from a living cantor. The piece asked about survives with a notation of its own."],
    ["That it shows the eight tones already in use in third-century Egypt", "The lesson draws no such conclusion and connects the piece to nothing later at all. Ask what language it is in, and what the remark says of its relation to the repertory."]
  ]}
]

});

/* ---- H ---- */
/* Study questions — Chapter IX, lessons east-4, east-5, east-6.

   Format:  "<lesson id>": [ { q, a, o: [ [option, response], ... ] }, ... ]
   where `a` is the index, in the ORIGINAL order, of the true option. */

window.MusicaArs = window.MusicaArs || {};
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"east-4": [
  { q: "Into how many parts does the modern Greek system divide the diapason, and how many of them fall to each genus’s fourth?", a: 0, o: [
    ["Seventy-two <span class=\"latin\">moria</span>, thirty of them to the fourth", "The division is of the whole span, and the genera differ only in how they parcel out the thirty. That figure is a revision: Chrysanthos himself had printed sixty-eight."],
    ["Sixty-eight <span class=\"latin\">moria</span>, thirty to the fourth", "That number did stand in the tradition, and it is the one Chrysanthos printed at Trieste. It was not left standing. Ask what a committee later in the century did to his figures."],
    ["Twenty-four, one for each quarter-tone", "You have imported a Western way of chopping the octave. The unit of this system is not a fraction of the Western semitone at all, and the page gives its number outright; go back to that sentence."],
    ["Twelve, as in the Western octave", "That is the keyboard’s division, and the whole force of the section is that this tradition’s unit is far finer than a semitone. Count again from the page rather than from the instrument."]
  ]},
  { q: "What did the Patriarchal Musical Committee do in 1881?", a: 2, o: [
    ["Printed Chrysanthos’s <span class=\"latin\">Theoretikon Mega</span> at Trieste", "That printing is a real event of this story, but it belongs to 1832 and to a press, not to a committee sitting two generations later. Set the two dates side by side."],
    ["Devised the New Method and transcribed the received repertory into it", "That labour was done by three named men, and long before. The committee inherited their work rather than performing it; look for what the page says was <em>changed</em>, not what was made."],
    ["Revised the numbers, moving from Chrysanthos’s sixty-eight parts to seventy-two", "And the revised figure is what a Greek cantor learns today. The New Method’s notation came first; its numbers were settled two generations afterward."],
    ["Abolished the chromatic genera as Ottoman importations", "Nothing of the sort is reported, and the four modern divisions the lesson gives include two chromatic ones. Read the labels on the table of divisions again."]
  ]},
  { q: "The lesson warns of a name-collision. What is it?", a: 1, o: [
    ["That <em>enharmonic</em> is spelled one way in Greek sources and another in Western ones", "Spelling is not the trouble; it is the same word in both places. The trouble stands behind the word. Ask whether the thing named in the one system has the same content as the thing named in the other."],
    ["That what the modern Byzantine system calls enharmonic is not the ancient enharmonic genus — the same word on two different objects", "The ancient genus is two quarter-tone <span class=\"latin\">dieses</span> and a ditone. Names outlive the things they were coined for, and this one has been given new employment."],
    ["That the ancient enharmonic genus was revived unchanged by the Three Teachers", "Had it been revived unchanged there would be no warning to give and the lesson would not have paused over it. The word is raised precisely because two different objects are wearing it; ask what each contains."],
    ["That the enharmonic is the one genus the Latin West has no use for", "You are thinking of the remark about a <em>chromatic</em> division, which is the one the lesson calls foreign to Western use. That is a claim about a different genus; re-read the sentence about the West."]
  ]},
  { q: "Which division of the fourth is the soft chromatic?", a: 3, o: [
    ["12 · 10 · 8 <span class=\"latin\">moria</span>", "Those steps descend evenly and give this system’s diatonic division. A chromatic division is recognised by a stretched middle step; nothing here is stretched, so look for that shape elsewhere in the table."],
    ["6 · 20 · 4 <span class=\"latin\">moria</span>", "Those steps do belong to a chromatic division — the one the lesson calls unmistakable and of no use to the Latin West. But it is the harder of the two. Compare the two chromatic rows and see which middle step is the wider."],
    ["12 · 12 · 6 <span class=\"latin\">moria</span>", "Two equal steps and a small one, which is the shape the modern system files under its enharmonic name. No middle step is stretched there at all; ask what marks a chromatic division out."],
    ["8 · 14 · 8 <span class=\"latin\">moria</span>", "A stretched middle step between two equal small ones. The soft and the hard chromatic are unmistakable once you have heard each twice, and they differ in how far that middle step is stretched."]
  ]},
  { q: "The modern system’s <em>enharmonic</em> division of the fourth runs:", a: 0, o: [
    ["12 · 12 · 6 <span class=\"latin\">moria</span>", "Two tone-like steps and a small one to close. It is worth sounding this against the ancient genus that shares its name, since the two have almost nothing in common but the word."],
    ["12 · 10 · 8 <span class=\"latin\">moria</span>", "That is this system’s diatonic, and it is easy to confuse because it opens with the very same figure. Check the second and third numbers, not the first."],
    ["Two quarter-tone <span class=\"latin\">dieses</span> and a ditone", "That is the ancient genus of the same name, and the lesson warns you against exactly this substitution. The modern system counts its steps in <span class=\"latin\">moria</span>; give the count."],
    ["6 · 20 · 4 <span class=\"latin\">moria</span>", "A very wide middle step with a narrow one on either side of it — the signature of a chromatic division rather than the one asked for. Find the row whose first two figures are equal."]
  ]},
  { q: "The two ancient divisions close on 498.04¢ and the four modern ones on 500¢. What follows from that?", a: 2, o: [
    ["That the modern divisions were simply measured less carefully", "These are not two estimates of one quantity but two different quantities, each exact within its own system. A codified division into seventy-two parts does not produce a two-cent slip of the hand."],
    ["That the two cents cannot be heard and so signify nothing", "Whether two cents can be heard is a question about ears; the page is making a claim about what the number is. Ask what a fourth of exactly 500¢ is, measured against the ratio you built for yourself in an earlier lesson."],
    ["That the modern fourth is already tempered before a note is sung", "A tradition that never passed through the Western argument over temperament arrived at a compromise of its own — by another route and for other reasons, but a compromise."],
    ["That the ancient divisions are Byzantine and the modern ones Western imports", "Both columns are given as the tradition’s own, one inherited and one codified in the nineteenth century. Nothing on the page makes the wider fourth an import; ask instead what the figure itself says about the interval."]
  ]},
  { q: "How is the <span class=\"latin\">obikhodnyi zvukoryad</span> built?", a: 1, o: [
    ["Twelve sounds in three tetrachords with a disjunctive tone", "You have arranged the twelve in the Greek manner, by fourths, which is exactly the arrangement the section says this system does not use. Count how many sounds the page puts in each group."],
    ["Twelve sounds in four whole-tone trichords, a semitone standing between one trichord and the next", "Built by threes rather than by fours. Nothing in it is a tetrachord, and that is why its consequences resemble nothing in the West or in Byzantium."],
    ["Twelve semitones, as on a keyboard", "The count is right and the steps are wrong. This is not a chromatic scale; the page describes its groups as whole-tone. Ask what interval lies <em>inside</em> a group and what lies between two of them."],
    ["Eight sounds, one for each of the eight tones", "The eight tones are a set of modes, not a tally of pitches, and there is no reason the two should agree. The page gives a number for the sounds themselves; find it."]
  ]},
  { q: "The seventeenth-century books name the four trichords. Which of these names means ‘dark’?", a: 3, o: [
    ["<span class=\"latin\">Prostoye</span>", "That is the plain or unqualified member of the set, and it carries no image of light or its absence at all. Look along the list for the word that stands opposite the bright ones."],
    ["<span class=\"latin\">Svetloye</span>", "You have chosen from the bright end of the list. The four names move from a plain condition to its opposite and then intensify the opposite; ask which end you are standing at."],
    ["<span class=\"latin\">Tresvetloye</span>", "The prefix on that name multiplies whatever the root means, and the root is not darkness. Take the four names in the order the page gives them and watch where the brightening begins."],
    ["<span class=\"latin\">Mrachnoye</span>", "And <span class=\"latin\">prostoye</span> is simple, <span class=\"latin\">svetloye</span> light, <span class=\"latin\">tresvetloye</span> thrice-light. The set runs from the plain through a darkening and then upward into light twice over."]
  ]},
  { q: "Two sounds an octave apart <em>by name</em> stand 1086¢ apart in fact. What does the lesson make of that?", a: 0, o: [
    ["It is the structural signature of a system built by threes, arising inside one system with no modulation anywhere", "A diminished octave with nothing to blame it on: no key change, no borrowed sound. The page says it has no parallel in the West or in Byzantium."],
    ["It shows the scale was tuned by ear and imprecisely", "The figure follows from how the degrees are laid out, not from any inaccuracy in the sounding of them. Ask what stacking four groups of the same shape must produce at the far end."],
    ["It is the trace of a modulation between two chant tones", "The page is careful to say that the two sounds stand inside one system with nothing shifting. If a modulation were needed to produce it, the interval would tell you nothing about how the scale is built."],
    ["It is the Pythagorean comma, which the Russian books measured", "That quantity is far smaller, and no Russian source measures anything — the remark on the page says so outright. Compare the size you have chosen with the size given."]
  ]},
  { q: "Which of these does the lesson report in its notes on the modern discussion?", a: 2, o: [
    ["That Gardner showed the cinnabar marks to give exact interval sizes", "He is reported as arguing the opposite: that the vocabulary of the marks is deliberately non-quantitative, and that sizes passed by apprenticeship rather than by definition. Re-read what the marks are said not to do."],
    ["That Pachymeres and Bryennios quantify the tones of the Church", "They do quantify tetrachords, and precisely — but in quadrivial treatises on ancient Greek harmonics, without reference to the Church’s tones at all. Mind what subject their numbers are about."],
    ["That the earliest quantified accounts of living Greek church intervals are Chalatzoglou’s (c. 1728) and Marmarinos’s (1747)", "They describe the modes by comparison with the Ottoman <span class=\"latin\">makamlar</span>. Whether that reflects continuity or a later formation is disputed, and the lesson leaves the dispute standing."],
    ["That Martha Roy published a measured tuning system for Coptic chant", "Her description is on the page and it is cautious: stepwise motion, a compass of about a fifth, numerous microtones a keyboard cannot reproduce. Measuring is precisely what the remark says has not been done."]
  ]},
  { q: "The Latin West had Boethius on the shelf, and Byzantium had Bryennios. What does the lesson say made the difference in the West?", a: 1, o: [
    ["The superiority of Latin theory over the Greek", "The page grants Byzantium a mathematical science of its own and names its author in the same breath. If merely having the science were what mattered, both sides had it; the difference must lie somewhere else."],
    ["An instrument of fixed pitch, which forced somebody to decide in numbers where to put the frets", "A contingent and rather humble thing. Having a mathematical science on the shelf does not by itself make a practice mathematical; something has to join the two, and here it was a piece of joinery."],
    ["The Church’s permission for instruments in worship", "Permission would settle who might play, not why anybody had to measure. Ask what obligation falls on a maker of instruments that never falls on a singer."],
    ["The invention of staff notation, which fixed the pitches on the page", "Notation can fix which sound follows which without stating a single ratio, and the lesson says as much of organum and counterpoint: a grammar with no ratios in it. Ask what compels a number rather than a name."]
  ]}
],

"east-5": [
  { q: "What is required of the <span class=\"latin\">isokratai</span>, whose office is the held sound?", a: 2, o: [
    ["That they double the melody an octave below it", "That sets two moving lines against each other, which is the one thing the office is defined against. Ask what the held sound is required never to become."],
    ["That they hold a single pitch unaltered from the first note to the last, whatever the melody does", "Nearly, and the rigidity is the flaw. The page allows the held sound one kind of change, occasioned by the melody itself. Re-read the list of demands to the end."],
    ["That it be steady, unobtrusive, ready to follow the melody’s ground when the melody moves to a new one, and never a second melody", "Holding it well is reckoned an art of its own. These are singers with an office, not a mechanism running underneath the chant."],
    ["That they change pitch at every phrase to supply a bass", "Supplying a bass belongs to another kind of music altogether, and a sound changing that often is no longer held. The page does permit one sort of movement; find what occasions it."]
  ]},
  { q: "What is the traditional reading of the <span class=\"latin\">ison</span>, as the lesson gives it?", a: 0, o: [
    ["The held sound is the eternal and unchanging; the melody is the movement of time upon it", "Which is why the <span class=\"latin\">ison</span> is said to be sung and not played: only a voice can offer that. The lesson adds that this reading is found in modern devotional writing, and how much older it is has not been established."],
    ["The held sound is the tonic and the melody its harmonisation", "Those are terms borrowed from a later Western practice, and the page denies that anything is being combined into a chord here at all. The reading it reports is not a technical description."],
    ["The held sound stands for the congregation and the melody for the clergy", "No such division is reported anywhere on the page. What is offered there concerns time and what stands outside it, not the allotting of parts to ranks of people."],
    ["The held sound is a practical aid, keeping the cantor in tune across a long melody", "That may well be a real use of it, but it is not what the tradition is reported as saying. Look for the reading that is theological rather than practical, and notice what it implies about voices."]
  ]},
  { q: "Why does the lesson call <span class=\"latin\">ison</span> a homonym?", a: 3, o: [
    ["Because it means both the drone and the singers who hold it", "The singers have a name of their own on the page, formed from the same root, and no confusion is warned of there. The collision the lesson means is with something written in the manuscripts."],
    ["Because Greek and Slavonic use the word differently", "The page does not report the word in Slavonic use at all, and it says plainly that Russian practice has no drone. The collision it warns of lies inside the Greek sources themselves."],
    ["Because it names both the drone and the <span class=\"latin\">isokratēma</span>", "Those are two names for one thing, not one name for two, and a homonym requires that the objects differ. Ask what else in the manuscripts carries this word."],
    ["Because the neume of that name means ‘the same’ — repeat the preceding pitch — and is a different thing entirely", "The neume appears in every manuscript from the beginning. Finding the word in a medieval source is therefore not by itself evidence of the drone."]
  ]},
  { q: "What do scholars observe about the documentary trace of the drone?", a: 1, o: [
    ["That it is notated in the earliest surviving manuscripts", "Medieval Byzantine chant as notated is described on the page as monophonic. Ask what the books actually contain, and how late the held sound gets written into them."],
    ["That the earliest explicit description of drone-singing in Greek church practice is Martin Crusius’s <span class=\"latin\">Turcograecia</span> of 1584", "And the <span class=\"latin\">ison</span> is not written into the chant books until the nineteenth century. The lesson gives the other side too: an unwritten accompaniment leaves no trace of its own, and the long-held figures of the kalophonic style have been thought to invite one."],
    ["That Mezenets describes it in 1670", "He is cited on the page for the opposite: he does not mention it, and the tradition he writes for has no drone at all. Check whose practice his testimony belongs to."],
    ["That Chrysanthos introduced it with the New Method in 1814", "The lesson makes no such claim, and it is careful about what can and cannot be documented. Look for the date it gives for the earliest explicit <em>description</em>, not for a reform of notation."]
  ]},
  { q: "What does the lesson say of the drone in Russian and Coptic practice?", a: 2, o: [
    ["Russian practice uses one; Coptic does not", "You have divided the two, and the page does not. Ask how many traditions the sentence about the notations covers, and how many witnesses are offered for the point."],
    ["Both use one, but hold it in the lower octave", "The absence is stated twice over on the page — in what the notations provide for, and in what a seventeenth-century writer fails to mention. Re-read the short paragraph that closes the remark."],
    ["There is none in either: neither notation provides for one, and Mezenets does not mention it", "The held sound is therefore not a mark of Eastern chant as such. It belongs to one of these traditions and not to the others."],
    ["Both replaced it with percussion", "Percussion enters this lesson in one tradition only, and in a different section, where it is said to do something a held sound does not do. You are running two questions of texture together."]
  ]},
  { q: "In the three-voice <span class=\"latin\">troestrochie</span>, which voice carries the chant?", a: 0, o: [
    ["The <span class=\"latin\">put’</span>, the middle voice", "Bottom, way, top: <span class=\"latin\">niz</span>, <span class=\"latin\">put’</span> and <span class=\"latin\">verkh</span>. The chant sits in the middle and the others are built around it, which is not where a Western ear goes looking for a tune."],
    ["The <span class=\"latin\">verkh</span>, the top voice", "That is where a later Western habit puts the tune, and it is why the question is worth asking at all. The three names mean bottom, way and top; consider which of those sounds like a road being followed."],
    ["The <span class=\"latin\">niz</span>, the bottom voice", "You have chosen the part a Western ear might take for a bass. The chant of this texture is at neither edge; look at what stands between them, and at what its name means."],
    ["The <span class=\"latin\">demestvo</span>", "That voice leads a different texture — <span class=\"latin\">demestvennoye mnogogolosie</span>, in three or four parts, its name coming through Old Russian from the Greek <span class=\"latin\">domestikos</span>, the choirmaster. The texture in the question has three parts of its own, named otherwise."]
  ]},
  { q: "On what grounds is <span class=\"latin\">strochnoye penie</span> held to be indigenous rather than Western-derived?", a: 3, o: [
    ["Because the Russian Church forbade Western music", "No such prohibition is reported. The grounds offered concern what the music is made of and how it was written down, not what anyone was permitted to sing."],
    ["Because it is written in staff notation earlier than any Western example", "Staff notation is exactly what it is not written in, and that fact is itself one of the grounds. Ask what the Russians did write it in, and what that implies about its parentage."],
    ["Because its voice-leading follows the Western rules more strictly than Western music of the same date", "Following those rules more closely would strengthen the case for import, not weaken it. The page’s point is that this voice-leading breaks them; read again what it does with parallels and with dissonance."],
    ["Because its material, its notation, its date and its voice-leading are all un-Western", "Its material is <span class=\"latin\">znamenny</span>; it is written in the native hooks; it is attested before significant Western contact reaches Muscovy; and it moves in parallel seconds, fourths and fifths, with unprepared dissonance and nothing that could be called functional harmony."]
  ]},
  { q: "What do the manuscripts themselves say of the two-voice settings of Ioannes Plousiadenos?", a: 1, o: [
    ["That they were sung in Hagia Sophia before 1453", "The page reports nothing of where they were sung. What it reports is a label written into the books; ask what that label says about where the manner came from."],
    ["They label them <span class=\"latin\">kata tous Latinous</span>, ‘according to the Latins’", "A Cretan of the later fifteenth century, and the one documented Byzantine departure from monophony. The Byzantines knew an import when they heard one and said so on the page."],
    ["That they are the earliest <span class=\"latin\">strochnoye penie</span>", "That texture is Russian, on Russian material and in the native hooks, and the lesson sets the two side by side precisely in order to keep them apart. Ask what nation the manuscripts name."],
    ["That they are the work of the <span class=\"latin\">demestvo</span> singers", "You have crossed to the Slavic side of the chapter. The man in question is a Cretan of the later fifteenth century, and what the manuscripts write beside his settings is a nationality rather than an office."]
  ]},
  { q: "Which instruments does Coptic worship admit, and when do they fall silent?", a: 2, o: [
    ["A frame drum and a sistrum, silent through Lent", "You have named instruments the page does not give and a season it does not name. Two instruments are admitted and no others; go back for which two, and for the occasions that take them away."],
    ["The cymbals and the triangle, silent only during the Nativity fast", "The instruments are right and the occasion is not. The page marks the times of silence by their character — the sorrowful ones — and it names two of them, not one."],
    ["The hand cymbals, <span class=\"latin\">nāqūs</span>, and a metal triangle — silent in Holy Week and at funerals", "There is no metal in the sorrowful tunes. They are used only with specified pieces, and the reason given within the tradition is that percussion does not sing: it regulates the rhythm and unites the congregation."],
    ["Cymbals, triangle and a small harp, as in Ethiopian practice", "Ethiopian practice is not what this page describes, and the Coptic rule is stated as two instruments and no others. A third breaks the very sentence that sets the rule."]
  ]},
  { q: "On what does the silence of instruments rest?", a: 0, o: [
    ["On continuous usage: it is a custom rather than a canon, and no canon of an ecumenical council forbids instruments", "Behind the custom stands a patristic commonplace — Clement of Alexandria’s word that our instrument is the Word of peace — together with the dissociation of the liturgy from theatre, hippodrome and pagan sacrifice."],
    ["On a canon of an ecumenical council", "The page is explicit that no such canon exists. A practice can be universal and unbroken without ever having been legislated; ask what the lesson says this one does rest on."],
    ["On Clement of Alexandria’s prohibition in the <span class=\"latin\">Paidagogos</span>", "Clement is quoted there for an image and not for a law, and an image standing behind a custom is not the ground of it. Ask what the page names as the ground itself."],
    ["On St. Thomas’s judgement at <span class=\"latin\">ST</span> II-II q.91", "Thomas is reported as landing near the Eastern instinct without knowing it, centuries later and in the Latin West. His is a judgement of prudence about the use of music, not the foundation of an Eastern practice."]
  ]},
  { q: "What does the lesson report of the organ in Byzantium?", a: 3, o: [
    ["That it was unknown there until the Latins brought it", "The page has organs in the palace and in the circus, described at length in an imperial ceremonial book. Ask what that court possessed before you ask what it lacked."],
    ["That it accompanied the liturgy in Hagia Sophia", "One stood in the outer precincts, for imperial processions. Precinct and rite are different places, and the distinction carries the whole paragraph; ask where exactly the instrument was made to stop."],
    ["That Constantine VII forbade it by decree", "No decree is reported, and that same emperor’s book describes his own organs with evident satisfaction. The instrument’s absence from the rite is traced on the page to no legislation whatever."],
    ["That it was central to imperial ceremonial and never used in the rite, and that in 757 the emperor sent one to Pepin the Short", "<span class=\"latin\">De ceremoniis</span> describes the golden organs of the Chrysotriklinos and the silver organs of the circus factions. The Latin West received its organ from the East, which never used one in the liturgy."]
  ]}
],

"east-6": [
  { q: "According to the Coptic account, why are the melodies of the Church older than the Church in Egypt?", a: 1, o: [
    ["Because the first Christians there composed new melodies on ancient models", "Composition upon a model is not what the account claims; it claims something simpler and stronger about the continuity of a practice. Ask what the singers are said to have done, or not done, at the moment of conversion."],
    ["Because when Egypt turned to Christ the singers did not stop singing, but turned to a new worship the music they already had", "The account follows from how the Copts describe themselves: the Egyptians, the word worn down through Greek <span class=\"latin\">Aigyptios</span> and Arabic <span class=\"latin\">qibṭ</span>, praying in Bohairic and counting their years from Diocletian, the Era of the Martyrs."],
    ["Because the melodies were carried into Egypt from Palestine before the Church was founded there", "The account concerns music that was already in Egypt, not music arriving in it. Nothing on the page traces the Coptic melodies to an import of any kind."],
    ["Because Coptic notation preserves pharaonic signs", "No notation is at issue here, and the page states elsewhere that none survives from ancient Egypt at all. Ask what the account rests on, if it rests on nothing written down."]
  ]},
  { q: "What does the lesson report is offered in support of the Coptic account?", a: 3, o: [
    ["A continuous series of transcriptions running back to the Roman period", "The page dates the first usable transcription of Coptic chant very late indeed, and says so in the course of reporting the objections. What is offered in support is not of that kind at all."],
    ["A treatise of the New Kingdom describing the melodies", "No theoretical treatise survives from ancient Egypt, as the page states plainly where it lists the grounds of the dispute. The support offered is not documentary."],
    ["Marian Robertson-Wilson’s finding about the recordings", "Her work examines the ninety years of recordings and transcriptions that do exist, and bears on the stability of the oral tradition across that span rather than on what lies behind it. Ask what is offered for the descent itself."],
    ["A set of resemblances: blind great cantors, the cantor’s hand-signs, and immense vocalises on a single vowel", "The great cantors named are Muʿallim Takla and Muʿallim al-Batanūnī; the hand-signs are set beside those carved on Old Kingdom tomb walls, the relief from the tomb of Nencheftka, of about 2700 BC, being the one usually shown."]
  ]},
  { q: "Who was Hans Hickmann, and what did he say of Coptic chant?", a: 0, o: [
    ["Trained in Berlin under Hornbostel and Curt Sachs, and for twenty years the leading student of ancient Egyptian instruments; he called the chant a living link between the past and the present", "He worked on the comparison of the cantor’s chironomy with the hand-signs of the tomb reliefs. The phrase is his and the page gives it as his."],
    ["A Western musician who heard the chant in Cairo in 1926 and lectured on it in 1931", "That describes the other Western figure the page names, who spoke at Oxford and at Cambridge and through whom the claim largely entered Western discussion. Two men and two roles; match them again."],
    ["A cantor of the Coptic Church, blind from birth", "The blind cantors named on the page are two, and neither of them is this man. The one in question is a scholar who worked on the comparison rather than a singer who embodies it."],
    ["A scholar who showed the Coptic melodies to be of Byzantine origin", "Nothing of the sort is reported of him. The page places him on the side of the comparison with ancient Egypt and quotes a phrase he used for the chant; find the phrase."]
  ]},
  { q: "On what grounds have some scholars disputed the descent of Coptic chant from ancient Egypt?", a: 2, o: [
    ["That the Copts adopted Arabic music after the conquest", "The page raises nothing of the kind. Read its list again and notice that every item on it is about evidence — what survives, what it covers, what could be compared with what."],
    ["That the blind cantors are a recent custom", "Nothing on the page dates that custom or disputes it. Take the list of objections as the lesson actually gives it rather than supplying one of your own."],
    ["That nothing survives from ancient Egypt with which the Coptic repertory could be compared", "No notation and no theoretical treatise. The other grounds given: that hand-signalling for directing unwritten music is found in many traditions, Byzantine, Jewish, Vedic and Balinese; that the seven-vowel reports describe Greco-Egyptian usage of the Roman period; and that no usable transcription exists before 1926."],
    ["That the Coptic melodies have been shown to derive from Byzantine chant", "No such derivation is reported anywhere on the page, and the objections listed there propose no alternative parentage at all. They are of a different kind; look at what each of them is about."]
  ]},
  { q: "According to the tradition, what happened to Romanos at Blachernae?", a: 1, o: [
    ["He was given a book of the eight tones by St John of Damascus", "That is another figure and another account, noted elsewhere in this chapter. What is described here is a night, a vision, and a single hymn sung the following morning."],
    ["He fell asleep on the eve of the Nativity; the Mother of God appeared holding a scroll and told him to eat it, and he woke and sang from the ambo", "A deacon from Syria in the reign of Anastasius, who had no gift for singing and was mocked for it. He sang: “Today the Virgin gives birth to Him who is above all being.” The Church keeps his feast on the first of October."],
    ["He was taken into the imperial choir for the beauty of his voice", "That belongs to another man in this same line, a boy from Dyrrachium several centuries later. The deacon in question is introduced as having no gift for singing whatever."],
    ["He copied out the scroll and set it to music over many years", "The account is of one night and one morning, and its whole force lies in the suddenness. Ask what he was told to do with the scroll."]
  ]},
  { q: "What does the lesson report of John Koukouzeles?", a: 3, o: [
    ["The deacon who received the scroll at Blachernae", "That account stands at the beginning of the line, in the reign of Anastasius, and concerns a man from Syria. The figure asked about here stands centuries further along it."],
    ["The compiler of the <span class=\"latin\">Octoechos</span> at Mar Saba", "The hymnographers of Mar Saba belong to the eighth century, and the page names them as a stage in the line rather than as this man’s work. Check which century the question’s subject belongs to."],
    ["The last <span class=\"latin\">protopsaltes</span> of Hagia Sophia before 1453", "The page names no such person, and the office it does describe continues past 1453 rather than ending there. The man in question is remembered for a style of singing and for the manner of his discovery."],
    ["A boy from Dyrrachium taken into the imperial choir, who fled to be a shepherd on Mount Athos and was found out by his singing", "He is the master of the fourteenth-century <span class=\"latin\">kalophonia</span>, ‘beautiful sound’. He is honoured as a saint, and the manuscripts call him <span class=\"latin\">maïstōr</span>, the master."]
  ]},
  { q: "What have scholars observed about the melodies of Romanos?", a: 0, o: [
    ["That none survives which can be assigned to Romanos himself, the settings of his <span class=\"latin\">kontakia</span> in the later books being Constantinopolitan work of the twelfth century and after", "They add that the notation changed fundamentally in the late twelfth century and again in 1814, so that the received performing tradition can be documented in detail from the later seventeenth century."],
    ["That the melodies are demonstrably not his", "That is a stronger claim than the page reports, and of a different kind. What is observed there concerns what survives and what can be assigned to whom; notice how carefully the remark is worded."],
    ["That his <span class=\"latin\">kontakia</span> were composed in the fourteenth century", "The remark dates the surviving settings, not the texts, and it gives a different century for them. Separate the hymns from the music later written for them, and read the sentence again."],
    ["That the office of <span class=\"latin\">protopsaltes</span> was interrupted by the Ottoman conquest", "The page reports the opposite there, and says the office has in fact been filled continuously to the present day. The observation you were asked for concerns melodies, not offices."]
  ]},
  { q: "According to the Primary Chronicle, what did Vladimir’s envoys report of the worship in the Great Church?", a: 2, o: [
    ["That the singing was in a language they could understand", "They could not have understood it. The rite came afterwards in Slavonic translation, by way of Bulgaria and the work of Cyril and Methodius before that. What the envoys report is not comprehension."],
    ["That the eight tones were sung more correctly there than elsewhere", "The report the chronicle gives is not a technical judgement, and the ten wise men are nowhere described as musicians. Ask what they said they were unable to do — describe it, or forget it."],
    ["That they knew not whether they were in heaven or on earth, and that God dwells there among men", "“For on earth there is no such splendour or such beauty, and we are at a loss how to describe it.” Vladimir was baptized, and Rus’ with him, in 988."],
    ["That the Greeks had promised to send singers", "Singers do come, in the chronicles’ account, but that is what followed rather than what the envoys said. The words quoted on the page are about what they saw and could not account for."]
  ]},
  { q: "What did the Stoglav Council of 1551 order?", a: 1, o: [
    ["That the old books and the old singing be corrected", "That is the work of a later patriarch and a later council, and it is what produced the <span class=\"latin\">raskol</span>. Mind the two dates: one century sets up schools, another divides a church."],
    ["That schools be set up in the houses of the clergy, in Moscow and in every town, to teach letters and church singing", "The Russian schools of singing are a matter of record in the same century: at Novgorod Savva Rogov taught, and his pupils were Fyodor Krestyanin, Ivan Nos and Stefan Golysh."],
    ["That the eight tones be taught by Greek singers", "Greek singers belong to the account of 988 and to the metropolitan’s arrival, not to a Muscovite council five centuries later. Read what this council is said to have established, and where."],
    ["That Krestyanin’s Evangelist stichera be sung in every church", "His cycle of eleven stichera survives and can be read, but the page attaches it to a summons from Ivan the Terrible to the Aleksandrovskaya sloboda, not to any conciliar order. Separate the man from the council."]
  ]},
  { q: "What does the lesson say the Old Believers have done since the <span class=\"latin\">raskol</span>?", a: 3, o: [
    ["Adopted staff notation while keeping the old melodies", "The notation is a great part of what they refused to give up. Ask what the page says they have gone on copying by hand for three centuries together."],
    ["Accepted the new books but kept the old singing", "Had they accepted the new books there would have been no division to record. The page describes people who would not accept them, and what refusing them cost."],
    ["Preserved the chant as it stood before the Muscovite redaction", "The remark is careful on exactly this point, and it dates what they carry — to the middle of the seventeenth century, and not to anything earlier. Read the last sentence of that remark again."],
    ["Gone into the forests of the north and over the Urals rather than give up the old rite, and kept the hooks ever since", "They copy the books by hand and are singing from them still, which is why anyone alive has heard <span class=\"latin\">znamenny</span> chant at all."]
  ]},
  { q: "What does the course itself draw from these three traditions?", a: 0, o: [
    ["That possessing a thing through its causes and possessing it by habit are two different possessions", "The cantors had the art of chant in the most complete practical form men have ever had it, and could not have told you why 3:2 is a concord. Boethius could have told you, and could not have sung a <span class=\"latin\">sticheron</span>."],
    ["That the liberal art is the higher of the two possessions", "The page denies this in as many words, and the denial is deliberate. It says the liberal art is a <em>different</em> possession, not a higher one; re-read the last paragraph."],
    ["That the cantors’ art was defective for want of theory", "Nothing on the page calls it defective. It calls it the most complete practical form men have ever had of the art, sufficient to carry tens of thousands of melodies across a thousand years."],
    ["That knowing the ratios makes a man sing better", "The course says outright that this is not the reason for having the second possession. Ask what reason it does give, and notice that the reason is not about performance at all."]
  ]}
]

});

/* ---- I ---- */
/* Study questions — set I.
   Lessons: end-1, end-2, end-3.
   Format:  "<lesson id>": [ { q, a, o: [ [option, response], ... ] }, ... ]
   where `a` is the index, in the ORIGINAL order, of the true option. */

window.MusicaArs = window.MusicaArs || {};
MusicaArs.STUDY = Object.assign(MusicaArs.STUDY || {}, {

"end-1": [
  { q: "The lesson gives three answers to the question what this study is for. Which of them does it credit to St. Thomas?", a: 1, o: [
    ["That it is for the truth about numbered sound, and needs no other justification", "That is the first of the three, and the lesson refers it back to what an art ordered to knowing means rather than to any citation. Sort the three answers by whose each one is, then choose again."],
    ["That by it the mind is prepared for the other philosophical disciplines", "One road of the quadrivium, and the preparation is real: the mind trained on numbered sound is not the mind that came to the ratios cold. Note that the lesson says the three answers do not compete."],
    ["That it turns the soul from becoming to being", "That is the language of the dialogue in which Socrates chooses his studies, so you have taken the third answer and put another man’s name on it. Ask which of the three the lesson calls the demanding one."],
    ["That harmony restores the soul’s inward revolution to concord with itself", "A sentence from the Timaeus, quoted much later on the page, and the lesson is careful to call it a cosmological claim rather than a reason of the schools. It is not among the three answers at all."]
  ]},
  { q: "Socrates rejects two sorts of practitioner of harmonics. What is his complaint against the <em>first</em> sort?", a: 2, o: [
    ["That they seek number in the concords they happen to hear, and never rise to problems", "You have taken the second complaint and set it in the first place. The lesson keeps the two apart deliberately; notice that the second begins by calling its targets <em>better</em>. Read the two paragraphs one at a time."],
    ["That they refuse to touch a string at all, and reason only from definitions", "Nobody in the passage is charged with keeping his hands off the instrument; the men Socrates dismisses first are busy at the strings. You have supplied an opponent the dialogue does not."],
    ["That they put their ears before their minds, making the heard concord the measure, and so arrive at nothing", "They torture the strings and dispute whether a smaller interval remains, and the dispute never closes — an ear cannot settle what the ear itself is being asked to judge."],
    ["That they call harmonics the sister of astronomy", "That kinship is reported without any blame attached; it is how the study is introduced, not a charge against anyone. Re-read the sentence in which Socrates arrives at harmonics."]
  ]},
  { q: "Why does the lesson say the <em>second</em> of the two criticisms is the one that should trouble you?", a: 3, o: [
    ["Because it shows that Socrates thought harmonics no science at all", "He is choosing studies that turn the soul, and he keeps this one; pursued far enough he calls it useful for the search after the beautiful and the good. His complaint is about how far, not about whether."],
    ["Because it is aimed at men who trust their ears rather than their minds", "That charge falls on the other sort, and against them the second group is called better. You have merged two rejections which the lesson takes trouble to keep separate."],
    ["Because Socrates there declares the whole study labour lost", "He says that of the study pursued in one manner only, and offers a condition under which it is not. Re-read the close of that paragraph and see what turns on the word <em>otherwise</em>."],
    ["Because it is aimed at your own teachers — the Pythagoreans whose art this course has been teaching", "The men who found the ratios you have spent the course learning are the ones charged here. A course can hand you the whole art and still leave you standing inside the complaint."]
  ]},
  { q: "A student says the two criticisms come to one, since both sorts are too attached to what they hear. Where does he go wrong?", a: 0, o: [
    ["The second sort is charged not with attachment to hearing but with stopping short of problems — and Socrates grants they are the better of the two", "Two different failures, and only one of them is a failure about the ear. A man may have every ratio right and still stand under the second charge."],
    ["He does not go wrong; the lesson presents them as one complaint stated twice", "The lesson numbers them, calls one first and the other second, and says of the second that it is the one which should trouble you. That structure is not decoration."],
    ["He goes wrong because the second sort is charged with ignoring the heard concords altogether", "They do not ignore them; they work upon them, and their working is the whole trouble. Re-read what the second sort is said to seek, and where."],
    ["He goes wrong because Socrates rejects only one sort of practitioner, not two", "Two are rejected, by two different arguments, and the lesson gives each its own paragraph. Count the sorts before you weigh the charges."]
  ]},
  { q: "On what condition does Socrates allow that the study is useful for the search after the beautiful and the good?", a: 2, o: [
    ["That it be joined to gymnastic, as the earlier books of the Republic require", "The lesson says nothing of that pairing, and the condition it does give is drawn from the passage on harmonics itself. Do not import what the page has not put before you."],
    ["That the student be able to hear the concords accurately before he numbers them", "Accurate hearing is what the first sort of practitioner already possesses, and it does not save them. Ask what Socrates demands <em>beyond</em> what those men already have."],
    ["That it be pursued as far as the problems he names; pursued otherwise, he says, it is labour lost", "The whole weight falls on <em>that far</em>. The same ratios, held by two men, may be a liberal study in the one and labour lost in the other."],
    ["That it be pursued for the soul’s health, as the Timaeus recommends", "You have crossed from one dialogue to another. The Timaeus sentence is quoted further down and is treated as a cosmological claim, not as the condition set out in Republic VII."]
  ]},
  { q: "Where does the course decline to follow Plato, and with whom does it stand instead?", a: 1, o: [
    ["It declines the demand for ascent, holding with Aristotle that the heard instance is enough", "The demand for ascent is precisely what the lesson tells you to take from Plato. You have discarded the half the course keeps and kept the half it warns against."],
    ["It declines the suggestion that the sensible instance was only scaffolding; with Aristotle and St. Thomas, the sensible thing is really known", "A middle science does not despise its subject, it demonstrates about it. Knowing why this string sounds a fifth is not leaving the string behind but understanding it."],
    ["It declines the doctrine of the world-soul, holding with the Pythagoreans that the ratios are cosmic", "The world-soul is indeed refused later, but the Pythagoreans are not offered as the alternative and nothing on the page defends cosmic ratios. Two separate refusals have been run together."],
    ["It declines nothing; the lesson follows Plato the whole way", "The section opens with <em>Not all the way</em>, and says the difference matters to a reader of St. Thomas. Something is kept and something set aside; find which is which."]
  ]},
  { q: "What does the lesson tell you to take from Plato?", a: 3, o: [
    ["The doctrine that harmony is akin to the revolutions of the soul", "That comes from the Timaeus, and the lesson declines to take it over as a theorem of this art. Look instead at the section on how far to follow him, and at what it says to keep."],
    ["The rule that the sensible instance is to be climbed off once the ratio is in hand", "That is named as the tendency of Plato’s ladder and set aside in the very next breath. You have chosen the thing the lesson leaves behind."],
    ["The judgement that the practical musician is beneath notice", "No ranking of musicians is at issue here; that belongs to another part of the course. Re-read the two sentences beginning <em>So take from Plato</em>."],
    ["The demand for ascent: from the heard instance to the ratio, and from the isolated ratio to the order and kinship of the mathematical sciences", "That kinship is what he asks for at 531c. The demand survives the disagreement about ladders, which is why it can be kept while the rest is refused."]
  ]},
  { q: "The remark headed ‘The question put to you’ makes an admission about this course. What is it?", a: 0, o: [
    ["That the course has not answered Socrates’ question, and has been careful not to pretend to", "What it claims instead is to have put you where the question can be asked honestly — with the fact in your possession rather than on report. A smaller claim, and a real one."],
    ["That the ratios themselves answer the question once a student holds them", "Then it would be impossible to finish the course and still not have asked it, and the remark says plainly that it is possible. Holding a fact and having its reason are different acquisitions."],
    ["That the question is unanswerable, and a student does better to set it aside", "Unanswered and unanswerable are not the same, and the remark asserts only the first. Socrates himself thought the pursuit worth calling useful for the search after the beautiful and the good."],
    ["That the answer was given in an earlier chapter and needs no repeating", "No earlier chapter is cited for it, and the remark would have no force if one were. Read it again and ask what it says the course has been careful <em>not</em> to do."]
  ]},
  { q: "In the sentence quoted from the Timaeus, why was harmony given to men by the Muses?", a: 2, o: [
    ["To make the ratios of the world-soul audible to the senses", "That doctrine belongs to the dialogue at large, and the lesson names it as the thing St. Thomas does not take over. The sentence quoted here says something else about what harmony is <em>for</em>."],
    ["As an aid to irrational pleasure, which the dialogue treats as its proper use", "The sentence names that use only to deny it — <em>not</em> as an aid to irrational pleasure, as is now supposed. You have taken hold of the clause that is being refused."],
    ["As an ally to the soul’s inward revolution when it has lost its harmony, to help restore it to order and concord with itself", "A beautiful sentence, and a cosmological claim rather than a theorem of harmonics. The lesson quotes it whole and then tells you what to do with it."],
    ["To prepare the mind for the other philosophical disciplines", "That reason appears earlier in the lesson, and it is St. Thomas’s rather than Plato’s. Two answers to two different questions have been exchanged."]
  ]},
  { q: "How does the lesson tell you to handle the Timaeus passage?", a: 1, o: [
    ["Accept it whole: the ratios of the monochord are the ratios of the world-soul", "That is the doctrine the lesson says St. Thomas does not take over. Nothing in the section asks for wholesale acceptance; re-read what it says is enough for the string to be."],
    ["Grant what St. Thomas grants — that the soul’s powers are ordered, and that melody moves the passions by some hidden correspondence — and leave what he does not take over", "Do not make the string carry the cosmos. It is enough, and it is a great deal, that the string is intelligible."],
    ["Dismiss it, since a cosmological claim can have no bearing upon a liberal art", "The lesson does not dismiss it: it quotes the sentence at length and calls it beautiful. The section heading names an earlier lesson whose handling of a similar claim you are to imitate; go and see what that was."],
    ["Treat it as a theorem of harmonics, since Plato states it in a mathematical dialogue", "A sentence is not a theorem because of the company it keeps. The lesson says in so many words what kind of claim this one is, and it is not the kind that gets demonstrated from a string."]
  ]},
  { q: "Coming to harmonics in Republic VII, Socrates notes what the Pythagoreans call it. What is that?", a: 2, o: [
    ["The daughter of arithmetic", "Arithmetic belongs to the quadrivium and this course has leaned on it throughout, but the kinship named in that sentence is a sisterhood, and with another study. Re-read the sentence in which harmonics is introduced."],
    ["The handmaid of dialectic", "The lesson never puts that phrase in the Pythagoreans’ mouths. The kinship it does report holds between two of the mathematical studies themselves. Read the introducing sentence again."],
    ["Astronomy’s sister", "The kinship is the point: Socrates goes on to charge both studies with the same failing, and asks at 531c that the order and kinship of the mathematical sciences be seen."],
    ["The mother of grammar", "Nothing of the sort is said, and grammar does not enter this lesson at all. What is reported is a kinship between two studies of number and magnitude."]
  ]}
],

"end-2": [
  { q: "What does Augustine’s <span class=\"latin\">De musica</span> actually contain, and what did he intend?", a: 1, o: [
    ["Six books on melody, with six more on rhythm planned and never written", "You have the two subjects the wrong way about. Check which half of the work exists and which was only ever intended; the lesson settles it in its first sentence."],
    ["Six books on rhythm, with six more on melody intended and never written", "The treatise a student expects to be about melody is about the length of syllables. He told Memorius why: the power of number in every motion is most easily studied in sounds."],
    ["Twelve books, six on rhythm and six on melody", "He meant to write twelve and did not. The lesson is precise about this, and the gap is part of why the sixth book has to carry the whole ascent by itself."],
    ["A single book on melody, written for Memorius", "Memorius received a letter explaining the plan, not the treatise, and the work is not one book. Re-read the opening sentence of the lesson."]
  ]},
  { q: "In the letter to Memorius, why does Augustine say sounds are the place to study the power of number?", a: 3, o: [
    ["Because sound is the noblest of sensible things", "The lesson makes no such ranking, and Augustine’s own order of dignity puts the numbers in the sounding body at the very bottom. Do not supply a grander reason than the one he gives."],
    ["Because number is found in sound and nowhere else in the sensible world", "He says the power of number is in every motion, which is the opposite of confining it to one place. Read the clause about motion before the clause about sounds."],
    ["Because the ear is a more reliable judge than the eye", "No comparison of the senses is made in that letter as the lesson reports it. You have offered a fact about the ear where he gave a reason about study."],
    ["Because the power of number in every motion is most easily studied there, and that study offers a way of rising by paths as it were gradually ascending", "Easiest, not exclusive. The force of the plan is in <em>gradually</em>: a ladder whose rungs stand close enough together to be climbed."]
  ]},
  { q: "What purpose does Augustine state plainly in the sixth book?", a: 0, o: [
    ["<span class=\"latin\">A corporalibus ad incorporalia transeamus</span> — let us pass from bodily things to things not bodily", "The whole ascent announced in one clause. Notice that the passage is <em>from</em> the bodily and not away from it in contempt: he begins where the sounding body is."],
    ["To settle the rules of Latin metre once and for all", "The length of syllables is his material, not his purpose; the lesson says a treatise on syllables was for him a treatise about God. Material and end are not the same thing."],
    ["To refute those who make the ear the measure of concord", "That complaint belongs to another lesson and another author. The sixth book states its own purpose in a single Latin clause — find it."],
    ["To show that the numbers in the sounding body are the highest of the five kinds", "They are the lowest of the five in his order of dignity, and thinking otherwise is exactly the ordinary man’s mistake. Re-read the sentence that ranks them."]
  ]},
  { q: "In what order does Augustine set out the five kinds of number, and what is the direction of that order?", a: 2, o: [
    ["From the highest in dignity down to the lowest", "That order appears on the page too, and it is nearly the reverse of the one asked for. Two orderings are given; be sure which is which before you choose."],
    ["From the numbers in memory outward to the numbers in the sounding body", "Memory’s numbers stand at neither end of the sequence as he lays it out, nor are they the first found. Count the five in the order the lesson prints them."],
    ["From the sounding body inward — sound, sense, the soul’s act, memory, judgement: the order of discovery", "Outside inward, each step further from the body than the last. That this is not the order of worth is the hinge of the whole sixth book."],
    ["In no fixed order; the five are coordinate", "He orders them twice, and the two orderings differ — which would be impossible if the kinds were coordinate. The difference between the two is what the lesson is teaching."]
  ]},
  { q: "Which numbers does Augustine call <span class=\"latin\">occursores</span>?", a: 3, o: [
    ["Those in the sounding body itself", "Those have a name of their own among the five, and they are the only bodily ones. Re-read the list, attending to where each kind is located."],
    ["Those held in memory", "Memory’s numbers carry another name, and the lesson calls them traces and passive. Distinguish holding a measure afterwards from having it at the moment, then look at the five again."],
    ["Those by which we approve one measure and reject another", "Those are the judging numbers, highest of the five, and they are what the whole ascent aims at. The kind asked for stands nearer the beginning of the list than the end."],
    ["Those in the sense as it meets the sound", "The name is the meeting. Note that they are already not bodily: the sound is one thing and the sense receiving it another, which is the first step off the body."]
  ]},
  { q: "Which of the five kinds are the <span class=\"latin\">progressores</span>?", a: 0, o: [
    ["Those in the soul’s own act, as it produces a movement", "The soul is doing here, not undergoing, which is why they stand second in the order of dignity, above the numbers of sense. Producing outranks receiving."],
    ["Those in the sounding body, which proceeds outward from the instrument", "The sounding body has its own name in the list and is the only bodily kind. You have read the word as though it described sound travelling rather than a power at work."],
    ["Those by which the soul progresses from bodily things to incorporeal ones", "That is the programme of the whole book, not the definition of one member of a list. A name among five has to pick out one of them, not the aim of them all."],
    ["Those in memory, which run back through what was heard", "Memory’s numbers are named separately, and the lesson calls them traces and passive. The word <em>progressores</em> speaks of going forward: ask what in a man goes forward when a verse is spoken."]
  ]},
  { q: "You hear a rhythm you have never heard before, and judge at once that it is ill measured. Which kind of number are you using, on Augustine’s account?", a: 2, o: [
    ["The <span class=\"latin\">recordabiles</span>, since judging is comparing with what memory holds", "That is the account Augustine argues against: the measure was not given you by memory, since you can judge one you have never heard. Re-read the paragraph on where the measure does not come from."],
    ["The <span class=\"latin\">occursores</span>, since the sense meets this rhythm as it meets any other", "The sense does meet it, and those numbers are in play whenever anything is heard at all. But meeting is not approving, and the question turned on the approving."],
    ["The <span class=\"latin\">iudiciales</span>, the numbers by which we approve this measure and reject that", "And notice what the case establishes: a measure never heard cannot have been supplied by memory. That is one of the two exclusions on which the whole ascent rests."],
    ["The <span class=\"latin\">sonantes</span>, since the fault lies in the sounding body", "The fault may well lie there; the question was what in you detects it. Those are the only bodily kind of the five, and a body neither approves nor rejects."]
  ]},
  { q: "How does Augustine rank the five kinds in dignity?", a: 1, o: [
    ["The same as the order of discovery, from the sounding body upward", "The two orders are close to inverse, not identical, and the lesson says so directly. Were they the same, the ascent would have nothing to teach."],
    ["Judgement highest, then the soul’s act, then sense, then memory, and the sounding body lowest of all", "Nearly the reverse of the order of discovery, but not quite: memory falls below sense, being only traces and passive. And the lowest is what most men would have called the music."],
    ["Memory highest, since without it nothing measured could be held together", "Memory’s numbers are ranked below those of sense, on the ground that they are traces and passive. Holding is not doing, and it is not judging; check where the lesson puts them."],
    ["The sounding body highest, since the other four depend upon it", "That is the ranking of the man who thinks the music is the sound. The order of discovery does begin there — but discovery and dignity are two different orders on this page."]
  ]},
  { q: "Augustine argues that the numbers by which you judge are not numbers you made. What are his two grounds?", a: 3, o: [
    ["That they are innate, and that all men agree in them", "Neither is the argument on the page. Innateness is nowhere appealed to and universal agreement is nowhere claimed; his grounds are taken from what the measure does, not from where it came from."],
    ["That sound is fleeting, and that memory is fallible", "Fleetingness and fallibility are not the reasons given. He does not say that sound and memory are too weak to supply a measure; he says something stronger than weakness about each."],
    ["That they come from God, and that God is unchangeable", "That is his conclusion, not the ground he reaches it from. The argument has to stand on something a man can check in himself before any conclusion about the unchangeable can be drawn."],
    ["That the sound cannot have given it, since you use it to correct the sound; and memory cannot, since you can judge a measure never heard", "Two exclusions, and between them they leave the measure unaccounted for by anything you own. Participation in the unchangeable is what he then offers to account for it."]
  ]},
  { q: "Where does St. Thomas differ from Augustine on the light by which we judge?", a: 2, o: [
    ["He denies there is any such light, holding judgement to be habit and practice", "Nothing of the kind is said; the lesson has him affirm a light and dispute the account of it. Read again what he is said to withhold and what he is said to grant."],
    ["He agrees entirely, and is cited to confirm Augustine", "The remark opens by saying he does not take over the account of illumination whole. Agreement about a fact and disagreement about its explanation are being distinguished here."],
    ["For him the light is the agent intellect — a created light, a participation in the uncreated light, but truly ours and truly natural", "So the ascent is real and its explanation is disputed among the doctors. What neither disputes is the fact it starts from: in judging a proportion you use a measure you did not make."],
    ["He holds that we judge by the numbers in memory rather than by any light", "That would set him against the very argument the lesson says he does not dispute — that a measure never heard can still be judged. He is not being made a sceptic here."]
  ]},
  { q: "What does Augustine conclude in the tenth book of the Confessions about the singing of the Church?", a: 0, o: [
    ["He inclines to approve the custom, that weaker souls may rise to devotion through the delight of the ear — while confessing that he sins whenever the singing moves him more than the thing sung", "Fluctuating, as he says, between the danger of pleasure and the proof of profit, and not coming off well by his own reckoning."],
    ["He condemns it, and would have the psalms read as Athanasius had them read", "He remembers that practice and weighs it, but he also remembers weeping at the songs of the Church when newly converted, and how much good those tears did him. A man who fluctuates has not condemned."],
    ["He settles the question, and the liberal art can settle it after him", "He does not settle it, and the art cannot: it is a question of prudence and of charity. St. Thomas says only, and more drily, that song helps devotion and is abused when it aims at display or the tune swallows the words."],
    ["He decides that delight in proportion is itself disordered", "Delight in proportion is good on this page — sense being, as St. Thomas says, a certain kind of reason. His unease is narrower than a condemnation of pleasure. Re-read what he says he would rather not have heard, and when."]
  ]}
],

"end-3": [
  { q: "What does the last lesson announce that it will <em>not</em> argue?", a: 2, o: [
    ["That the art is beautiful, beauty being a matter of taste", "Beauty is nowhere set aside in this lesson; the first of its four things turns on beauty being intelligible and checkable. Look again at the sentence that says what would give the case away."],
    ["That the art is difficult, since difficulty is no recommendation", "Difficulty is not the disclaimer. One particular kind of justification is named and refused in the opening sentences; find the word that is refused."],
    ["That the art is useful — since arguing that would give away the case in the first sentence", "Every institution asks what a study is for and means what it gets you. This one has no answer, and the absence is the point; what stands in its place are four things now true of you."],
    ["That the art is true, truth being beyond so small a course", "Nothing here doubts the truth of the ratios, and the fourth of the four things depends on their being exact. You have chosen a modesty the page does not show."]
  ]},
  { q: "What is the ‘educated modern picture’ that the first of the four things is aimed at?", a: 1, o: [
    ["That quality is real and quantity a convenient fiction", "You have the picture inverted. As it is stated here, one of the two is granted a place out in the world and the other put inside us; read the sentence again and see which goes where."],
    ["That quantity is real and out in the world, while quality — beauty, fittingness, harmony — is in us and projected onto things", "And almost nobody arrives at it by argument: it is absorbed, and then presupposed. Which is what makes a cheap test with a string worth so much."],
    ["That music is a language, meaning whatever a culture agrees it means", "The lesson says nothing about meaning or convention. Its target is a claim about where beauty is located, not a claim about how sounds signify."],
    ["That the senses are unreliable and only measurement can be trusted", "That is not the picture described, and the test proposed here depends on the senses reporting honestly: you hear that some pairs please before you measure anything at all."]
  ]},
  { q: "What does the lesson claim the test with a string actually establishes against that picture?", a: 3, o: [
    ["That the picture is overthrown", "The lesson denies in so many words that one counterexample overthrows a picture of the world. It claims something more modest and more durable; read the paragraph that states the counterexample’s limits."],
    ["That beauty is nothing but simple ratio", "Beauty is never reduced to ratio here; what is said is that the delight tracks something the mind can state. Tracking and being identical with are different relations."],
    ["That pleasure in music is the same for all men in every age", "What is said to hold for everyone who tries is that altering the ratio alters the pleasure — a claim about a correspondence, not about uniformity of taste. Draw that distinction and choose again."],
    ["That in this one domain St. Thomas’s claim — beauty consists in due proportion, and sense is itself a kind of reason — is a verified result and not a pious formula", "One domain, tested cheaply, by anyone, in every century that has tried. And a man who has checked one case argues about the rest differently from a man who has checked none."]
  ]},
  { q: "What follows, on the lesson’s own account, from holding a single counterexample?", a: 0, o: [
    ["Not the overthrow of the picture, but the loss of any right to hold it innocently", "A modest conclusion, and deliberately so. What changes is the man’s standing to argue, not the state of the question."],
    ["That the picture must be abandoned by any honest man", "The lesson refuses that step explicitly. One case is one case, and the sentence conceding this is the same sentence that says what the case does accomplish."],
    ["That the picture may still be held, but only by men ignorant of harmonics", "That is nearly a boast, and the lesson makes none. It speaks of how a man argues afterwards, not of who is entitled to hold what opinion."],
    ["Nothing, since a single case proves nothing in philosophy", "Then the first of the four things would not be worth stating, and it is stated first. Something short of proof and considerably more than nothing is being claimed."]
  ]},
  { q: "How does the lesson use Aristotle’s remark that to be always seeking after the useful does not become free and exalted souls?", a: 2, o: [
    ["As proof that useless studies are worth more than useful ones", "No such ranking is drawn. The remark is about a disposition — <em>always</em> seeking — and not a scale on which uselessness scores higher."],
    ["As a rule for choosing a curriculum", "It is not offered as a rule for choosing anything. It is set against the question every institution puts to a student, and the interest here is in what the student has already done."],
    ["As the ground for saying that this study’s having no answer to ‘what is it for’ is the point rather than an embarrassment", "And the formation is in the doing, not in the agreeing: weeks spent getting 3:2 into the ear for no reward do something that no quantity of assent to Aristotle would have done."],
    ["As evidence that the ancients had no practical arts", "The claim is about what becomes a free soul, not about what the ancients happened to possess. You have turned a remark on disposition into a piece of history."]
  ]},
  { q: "In what capacity is Newman brought in?", a: 3, o: [
    ["As an authority of this art, standing beside Boethius", "The lesson says plainly that he is not an authority within the art, and sets him apart from its authorities by an explicit sentence. Read that sentence."],
    ["As the originator of the doctrine that knowledge is its own end", "He is defending a tradition, not founding one — defending it, the lesson says, in a modern university that had already begun to lose it. Putting him first in the line changes what his testimony is worth."],
    ["As a critic of the liberal arts whom the lesson answers", "He is quoted with approval, and at length. Read the quotation and ask whether it opposes the lesson’s case or states it."],
    ["As a modern witness that the case still had to be made, and could be", "Knowledge is capable of being its own end, and any kind of knowledge, if it be really such, is its own reward. A witness and not an authority: the lesson is careful about the difference."]
  ]},
  { q: "Boethius’s three classes are called permanently contemporary. Which position does the lesson say very few men occupy?", a: 1, o: [
    ["Those who make sound", "Some do stand there, and the lesson does not disparage them; but the class it calls rare is not the one that performs. Recall how the three were divided when you first met them."],
    ["Those who can say what has been done to them, and how", "The rarest of the three, and the one this course has been trying to put you in. Most men stand toward sound simply as those who are moved by it."],
    ["Those who are moved by sound", "That is where most men stand, which is precisely why it cannot be the rare class. Re-read the three and ask which of them requires an account rather than an experience."],
    ["Those who judge what others ought to listen to", "The lesson says it has said nothing about what anyone ought to listen to and will not begin now. That is no class of Boethius but a task belonging to prudence."]
  ]},
  { q: "The lesson says the free man is not the one who resists music’s working upon the passions. Who is he?", a: 2, o: [
    ["The one who has trained himself to feel nothing at the sound", "Resistance under another name, and it has just been refused. Nothing on this page treats being moved as a defect; the arranging is called often skilful and often good."],
    ["The one who listens only to what the art can justify", "The lesson names no repertory and says the remark concerns a position, not a repertory. You have made a rule of listening out of a description of a standing."],
    ["The one who can ask by what measure it works", "Not because asking spoils the pleasure: a pleasure a man can account for is his own, and a pleasure he cannot account for is something that is happening to him."],
    ["The one who knows the history of how such music came to be arranged", "History is not at issue, and the question meant here could be put to any age’s music, this one included. Ask what question the third of Boethius’s classes is able to put."]
  ]},
  { q: "What does the fourth of the four things say was traded, and for what?", a: 0, o: [
    ["Exactness — the equal semitone irrational, the keyboard third wide by about two thirds of a comma — in exchange for the freedom to move from key to key", "And it was a good trade, which the course does not grudge. What it minds is that hardly anyone sitting down at a piano knows a trade was made at all."],
    ["The concords themselves, which the modern keyboard has abandoned", "They are not abandoned but approximated, and the lesson gives the size of the error. An approximation that works well is not an absence."],
    ["Nothing was traded; the modern tuning is simply better", "Then there would be nothing to know when you meet an approximation, and the fourth thing would collapse. The lesson insists something was given up, and names it."],
    ["The freedom to move from key to key, surrendered for the sake of exact ratios", "You have the bargain the wrong way round: that freedom is what was bought, not what was sold. Which side of it does a modern keyboard actually enjoy?"]
  ]},
  { q: "Why does the lesson think holding one case of a known approximation is worth having?", a: 1, o: [
    ["Because it shows that modern instruments are badly made", "The trade is called a good one, made knowingly by men who understood the arithmetic. Nothing here is a complaint about workmanship."],
    ["Because we live among approximations that work so well we forget they approximate, and one case you can hear in ten seconds is a small education in a habit of mind", "Worth a great deal more than the case itself, the lesson says. The habit generalises even though the arithmetic does not."],
    ["Because it lets you correct the tuning of a piano", "No practical skill is promised anywhere in this lesson, which has already refused to argue that the art is useful. Ask what it says the case is a small education <em>in</em>."],
    ["Because approximations are always to be preferred to exact ratios in music", "The lesson takes no such side. It says a trade was made and was worth making, in one case and for a stated reason; preference in general is not on offer."]
  ]},
  { q: "Why does the closing section say the smallness of the art is the point?", a: 3, o: [
    ["Because a small art is finished quickly, leaving time for greater ones", "Economy of time is nowhere at issue. The reason given has to do with a kind of experience a student can have here and will rarely have elsewhere."],
    ["Because sound matters less than being, and so suits beginners", "The lesson denies exactly this — <em>not because sound matters more than being</em>, it says, and it does not assert the reverse either. The quadrivium’s reason concerned what a young man can accomplish, not the rank of the subject."],
    ["Because a small art has fewer objections to answer", "No objections are being counted. Re-read the closing section and notice what it says almost everything else a man studies is studied in."],
    ["Because a man can possess the whole of it through its causes at once — an experience he might otherwise never have", "One string, three concords, a step, and a scale. That is what a liberal education is trying to give: the discovery of what it is like to know something all the way down."]
  ]}
]

});
