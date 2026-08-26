window.MusicaArs = window.MusicaArs || {};
MusicaArs.CHAPTERS = [
  { id: "beg", title: "Beginning" },
  { id: "I",   num: "I",    title: "I · What this art is" },
  { id: "II",  num: "II",   title: "II · Sound" },
  { id: "III", num: "III",  title: "III · The monochord" },
  { id: "IV",  num: "IV",   title: "IV · The three concords" },
  { id: "V",   num: "V",    title: "V · Tone and scale" },
  { id: "sys", num: "VI",   title: "VI · The Greek system" },
  { id: "VI",  num: "VII",  title: "VII · The musician" },
  { id: "ex",  title: "Exercises · the palaestra" },
  { id: "VII", num: "VIII", title: "VIII · What came after" },
  { id: "east", num: "IX",  title: "IX · The other branches" },
  { id: "end", num: "X",    title: "X · The end of the art" },
  { id: "app", title: "Appendix" },
  { id: "lab", title: "Workshop" }
];

MusicaArs.LESSONS = [
{
  id: "welcome",
  ch: "beg",
  title: "How to use this course",
  html: `
<p>This is a course in the <em>liberal art of music</em>, as that art was understood from Pythagoras through Boethius and received by St. Thomas Aquinas. It is not a course in concert-going, in reading a modern score, or in playing an instrument. You need no staff, no piano, and no names of notes. You need a quiet room and a way to hear two sounds.</p>
<p>Each lesson is short. Most of them ask you to <em>hear</em> something: one sound, then another, then both together. The pictures are not decoration. They are to the ear what a Euclidean diagram is to the eye. Move the little bridge on the string. Listen. Then read why the sound is as it is.</p>
<p>Two practical notes. First, click <strong>Enable sound</strong> when asked, or press any Play button; the browser will stay silent until you do. Second, this course uses the old intonation of the art — whole-number ratios of a single string — not the slightly adjusted pitches of a modern piano. If a piano is nearby, it will be close, but it will not be exact. That difference is part of what you are here to learn. The <strong>String</strong> button at the top is a free monochord; return to it whenever you want to hear a ratio again.</p>
<div class="remark">
  <h4>What you will possess</h4>
  <p>By the end you should be able to say, from first principles, what this art is; what an interval is; why the first concords are 2:1, 3:2, and 4:3; what a tone is; how a scale is built from these; and who, in this tradition, counts as a musician. You will not yet be a composer, a cantor, or a historian of later European music. Those are other studies.</p>
</div>
`,
  check: {
    q: "What is this course trying to teach you first?",
    options: [
      "How to read a treble clef and play piano pieces from the 1700s.",
      "The liberal art of music: the science of numbered sound, from hearing and from ratio.",
      "How to compose songs, and which modes are morally safe."
    ],
    answer: 1,
    why: "The art we are after is a mathematical science of sound. Composition and moral training are real studies of music, but they are not this art, and they are not first."
  }
},

{
  id: "i-1",
  ch: "I",
  title: "Three studies of music — and this one",
  html: `
<p>The word <em>music</em> is used in several ways, and if we mix them we will never find the art. St. Thomas does not write a treatise <span class="latin">De musica</span>, but he receives the older division and places the art among the mathematical sciences. A clear statement of the three intellectual studies — used in the music tutorial at Thomas Aquinas College, and drawn from Aristotle, Plato, and Boethius — is this.</p>
<p><strong>First, music as a fine art.</strong> Here one studies melody, rhythm, and composition with a view to making something beautiful to hear. The end is a work that delights. Fine art is nearer the liberal arts than shoemaking is, because it belongs to leisure and aims at the beautiful. It is still not a liberal art. Liberal study aims at <em>truth as such</em>. Delight is good when it is measured by truth; it is not the same as truth.</p>
<p><strong>Second, music as part of ethics and politics.</strong> Aristotle in the <em>Politics</em> and Boethius in the prologue of <em>De institutione musica</em> both say that different melodies move the soul in different ways. St. Thomas repeats this when he asks whether God should be praised with song: “the human soul is moved in various ways according to various melodies of sound.” Parents who watch what is sung in the house, and lawgivers who watch what is sung in the city, are not doing mathematics. They are forming character. That is training, and it can be a part of moral science. It is not the liberal art.</p>
<p><strong>Third, music as a liberal art</strong> — which the Greeks, when they were being careful, called <em>harmonics</em>. Its work, its <span class="latin">opus</span>, is not a song but a <em>scale</em>: an ordered system of pitches generated from the first numerical ratios. One considers this scale as a nature, for the sake of the truth about numbered sound, not for the sake of a concert and not for the sake of making citizens of a certain stamp.</p>
<div class="remark">
  <h4>A name</h4>
  <p>When Socrates turns to this study in <em>Republic</em> VII he does not say “music” in the poet’s sense. He says harmonics. The gift of the Muses is song. The liberal art is the science of the ratios from which song is possible. We will keep the English word <em>music</em>, because the tradition does; but we will mean harmonics unless we say otherwise.</p>
</div>
<p>This course is the third study. The other two are real. They are not first, and they are not what the quadrivium names <em>musica</em>.</p>
`,
  sources: "Aristotle, Politics VIII; Plato, Republic VII; Boethius, De inst. mus. I.1; Aquinas, ST II-II q.91 a.2; Super Boethium De Trinitate q.5 a.1 ad 3. The three-fold division of musical study follows the TAC junior music tutorial and Hattrup’s 2019 lecture, which themselves rest on those texts.",
  check: {
    q: "Which of these is the liberal art of music?",
    options: [
      "Learning to sing well, so as to please a hearer.",
      "Choosing songs that form a good character in the young.",
      "Knowing, from number, why certain pitches belong together as a scale."
    ],
    answer: 2,
    why: "The liberal art aims at truth about numbered sound. Singing well is a fine art (or a craft). Choosing songs for character is ethical or political. Both matter. Neither is this science."
  }
},

{
  id: "lib-1",
  ch: "I",
  title: "Why this art is called liberal",
  html: `
<p>You have been told which of the three studies this course is. You have not been told why the tradition calls it a <em>liberal</em> art, or what makes any art liberal. The question is not decoration. A man who does not know it will not know what he is doing when he stops a string, and will not know what he has when he is finished.</p>
<p>Three things make this art liberal: its <strong>end</strong>, its <strong>work</strong>, and its <strong>effect</strong>.</p>

<h4 class="sec">First: its end. It is ordered to knowing.</h4>
<p>Aristotle, at the opening of the <em>Metaphysics</em>, is explaining why the highest science is sought for its own sake. <span class="latin">As we call a man free who exists for his own sake and not for another’s, so we call this alone of the sciences free; for it alone exists for its own sake.</span> St. Thomas, commenting, puts it in a sentence worth memorising: <span class="latin">Ille homo proprie dicitur liber, qui non est alterius causa, sed est causa suiipsius</span> — that man is properly called free who is not for another’s sake but is his own cause. And immediately after, the distinction the whole tradition runs on:</p>
<blockquote class="note"><p><span class="latin">Illae solae artes liberales dicuntur, quae ad sciendum ordinantur; illae vero quae ordinantur ad aliquam utilitatem per actionem habendam, dicuntur mechanicae sive serviles.</span></p>
<p>Those arts alone are called liberal which are ordered to knowing; those which are ordered to some usefulness to be had through action are called mechanical, or servile.</p></blockquote>
<p>So <em>liberal</em> does not mean difficult, or refined, or suitable to gentlemen. It means: <strong>ordered to knowing</strong>. An art is servile when it exists for the sake of something it produces. It is liberal when it exists for the sake of the truth it holds. Aristotle draws the practical consequence in the <em>Politics</em>: the free man should learn useful things, but not all of them, and not as an artisan learns them — <span class="latin">to be always seeking after the useful does not become free and exalted souls</span>.</p>

<h4 class="sec">Second: its work. The <span class="latin">opus</span> stays in the one who makes it.</h4>
<p>An objection presses at once. If the thing is ordered to knowing, why call it an <em>art</em> at all? An art is right reason about things to be made; a science is knowledge of causes. Which is this?</p>
<p>St. Thomas answers directly, in the very passage this course has already leaned on. The seven are called arts among the sciences <span class="latin">quia non solum habent cognitionem, sed opus aliquod, quod est immediate ipsius rationis</span> — because they have not only knowledge, but a certain work, which is immediately of reason itself. And he lists the works: to construct a syllogism; to form a speech; to number; to measure; <span class="latin">melodias formare</span>, to form melodies; to compute the courses of the stars.</p>
<p>Notice what kind of work that is. A cobbler’s work ends in a shoe — something outside him, which stays on the bench when he has forgotten how it was made. The work of a liberal art ends <em>in the one who does it</em>. When you have found the diapason on the string and know why it is 2:1, the work you have made is a possession of your reason, and there is nothing left over on the bench.</p>
<div class="remark">
  <h4>On <span class="latin">melodias formare</span></h4>
  <p>Thomas’s phrase for the work of <span class="latin">musica</span> is “to form melodies,” and a hasty reader will take that to mean composition after all. It does not. The whole point of his list is that each work named is performed by reason <em>immediately</em>, without passing into outward matter. A melody formed by reason is an ordered set of pitches known in their proportions — which is what this course has been calling the scale. That is why <span class="xref" data-to="v-2"></span> can say that the filled diapason is the <span class="latin">opus</span> of the art, and why a man who writes a beautiful song without knowing a ratio has not performed it.</p>
</div>

<h4 class="sec">Third: its effect. It makes a judge, and a judge is a free man.</h4>
<p>Boethius, closing his first book, divides those concerned with music into three: those who play instruments, those who invent songs, and those who judge. Only the third, he says, are truly <span class="latin">musici</span>, for the whole of it is placed in reason. Seneca had already given the general form: <span class="latin">Quare liberalia studia dicta sint vides: quia homine libero digna sunt. Ceterum unum studium vere liberale est quod liberum facit</span> — one study is truly liberal, the one that makes free.</p>
<p>Boethius’s judge is free in exactly Aristotle’s sense. He is not an instrument of the art; he is its master. Anyone at all can be moved by a sound. Only the man who knows the measure can say what has been done to him, and by what.</p>

<h4 class="sec">Two objections you will meet</h4>
<p><strong>“But music is useful — in the liturgy, in the forming of the young. Does that not make it servile?”</strong> No. An art is not made servile by being usable; it is servile when it is <em>ordered to</em> use. Medicine is a noble art and is ordered to health, and that ordering is precisely what makes it not liberal. Harmonics may be used — St. Thomas himself treats the use of song at <span class="latin">ST</span> II-II q.91 — and remains ordered to knowing. The difference lies in the end, not in whether anyone ever profits.</p>
<p><strong>“But it needs the body. You have to listen.”</strong> So must the astronomer look, and the geometer draw. The sense supplies the subject; it is not the work. A middle science does not become servile because what it is about can be heard, any more than geometry becomes servile because a figure is drawn with a hand. What would make it servile is if the knowing were for the sake of the doing.</p>
<div class="remark">
  <h4>Thomas’s deeper reason</h4>
  <p>At <span class="latin">ST</span> I-II q.57 a.3 ad 3 he gives a second rationale, and it is the better one. Even in speculative matters, he says, there is something after the manner of a work — the construction of a syllogism, the forming of a fitting speech, the work of numbering or measuring. Such things are called arts by a certain likeness, <em>but liberal</em>, as distinguished from those arts ordered to works carried out through the body, which are in a manner servile, <span class="latin">inquantum corpus serviliter subditur animae, et homo secundum animam est liber</span> — inasmuch as the body is servilely subject to the soul, and man according to the soul is free. The freedom in question is first the soul’s freedom over the body. That is why these arts are the ones that befit a man precisely as man.</p>
</div>
`,
  sources: "Aristotle, Metaphysics I.2 (982b25–28); Politics VIII.2 (1337b4–15) and VIII.3 (1338b2–4); Aquinas, Sententia libri Metaphysicae I lect. 3 (the liberal/servile sentence is here, not in the Summa); ST I-II q.57 a.3 ad 3; Super Boethium De Trinitate q.5 a.1 ad 3 (melodias formare); Boethius, De inst. mus. I.34; Seneca, Ep. 88.2.",
  check: {
    q: "What makes an art liberal?",
    options: [
      "That it is hard, and studied by educated men.",
      "That it is ordered to knowing, its work remains in the knower, and it makes the one who has it a judge rather than an instrument.",
      "That it has no use whatever, and could not be put to any."
    ],
    answer: 1,
    why: "Ordered to knowing — that is the end. The opus is immediately of reason — that is the work. And it makes a musicus, one who judges — that is the effect. Usability is not the test: what matters is what the art is ordered to."
  }
},

{
  id: "lib-2",
  ch: "I",
  title: "What the art does to the one who has it",
  html: `
<p>Grant that the art is liberal. What follows for you? What is different in a man who has stopped a string at two thirds and knows why, from a man who has not?</p>
<p>Four things. They are not four sentiments.</p>

<h4 class="sec">1. He knows, by demonstration, that the beautiful is intelligible.</h4>
<p>This is the great one, and everything else in the list is smaller.</p>
<p>St. Thomas holds that the beautiful and the good are the same in the thing and differ in notion: the good is what all desire; <span class="latin">pulchra dicuntur quae visa placent</span> — things are called beautiful which please when seen. And he gives the reason: <em>beauty consists in due proportion, for the senses delight in things duly proportioned, as in what is after their own kind — because even sense is a certain reason</em>. <span class="latin">Sensus ratio quaedam est.</span></p>
<p>That is a large claim, and in most matters you must take it on the word of a wise man. Here you need not. You will hear that some pairs of sounds please and some do not. You will measure them, and find that the pleasing ones are the simple ratios. You will alter the ratio, and the pleasure will alter with it. The delight is <em>tracking</em> something the mind can state.</p>
<p>Do that once, honestly, on a string in a quiet room, and the modern conviction that beauty is nothing but private preference has not been argued against. It has been refuted, in your own hearing, by you.</p>
<p>This is why the art is worth more than its size. It is small: one string, three ratios, a scale. But it is a <em>verified instance</em> of the claim that the sensible world is intelligible, and that our delight in it is not arbitrary. <span class="latin">Omnia in mensura et numero et pondere disposuisti</span> — Thou hast ordered all things in measure and number and weight. Harmonics is one place where a man can check.</p>

<h4 class="sec">2. He learns to let sense and reason correct one another.</h4>
<p>Ptolemy’s rule is that neither criterion may despise the other; St. Thomas’s is that all our knowledge begins in the senses and is completed in the intellect. The Pythagorean who will not listen and the empiric who will not demonstrate are both crippled, and both are common in every age including this one.</p>
<p>Practising this art is practice in that habit. Take what is heard seriously without stopping there; take demonstration seriously without contempt for what is heard. <span class="xref" data-to="v-3"></span> argues the point. The exercises are where you acquire it, because a habit is not acquired by reading about it.</p>

<h4 class="sec">3. He becomes a judge.</h4>
<p>Boethius again: not the player, not the maker of songs, but the one who judges. All liberal education has this shape. It does not chiefly make you able to do more things; it makes you able to say what is the case, and why. In this art the difference is unusually sharp, because the art is small enough to be possessed entire. You will not half-know it. Either 3:2 is in your ear and in your reason, or it is not.</p>

<h4 class="sec">4. It is a road, and the road goes up.</h4>
<p>The quadrivium is not four hobbies attached to arithmetic. St. Thomas, quoting Hugh of St. Victor, says that by these, <span class="latin">as by certain roads, the living mind enters into the secrets of philosophy</span>, and adds in his own voice that by these as by certain roads the mind is <em>prepared</em> for the other philosophical disciplines.</p>
<p>Plato is sharper, and his sharpness is a warning to anyone taking this course. In <em>Republic</em> VII Socrates dismisses two sorts of student. The first put their ears before their minds and measure heard concords against one another, torturing strings and learning nothing. The second — and these are the Pythagoreans, the very school this art descends from — do seek numbers, but only the numbers found in the concords they happen to hear, and <em>they do not ascend to problems</em>: they never ask which numbers are concordant of themselves, and why. Pursued that second way, Socrates says, the study is useful for the search after the beautiful and the good. Pursued otherwise, useless.</p>
<p>Augustine says the same thing as a plan of work. He tells Memorius that he wrote <span class="latin">De musica</span> because the power of number in all motion is most easily studied in sounds, and because that study offers a way of rising to the higher secrets of truth <span class="latin">by paths as it were gradually ascending</span>. In the sixth book he names the kinds of number the soul passes through: the <span class="latin">sonantes</span> in the sounding body; the <span class="latin">occursores</span> in the sense that meets them; the <span class="latin">progressores</span> in the soul’s own act; the <span class="latin">recordabiles</span> in memory; and the <span class="latin">iudiciales</span>, the numbers by which we judge, which we did not make and cannot alter. The ascent runs from the first to the last, and past the last. <span class="xref" data-to="end-2"></span> takes this up when you have the art in hand.</p>
<div class="remark">
  <h4>What it does not do</h4>
  <p>It will not make you a performer, or a composer, or a connoisseur of concerts. It will not by itself make you good: Aristotle and St. Thomas both hold that music has much to do with the forming of character, but that is the second study of music <span class="xref" data-to="i-1"></span>, and this course does not undertake it. And it will not make you happy. It is one small true thing, thoroughly known. A liberal education is built of such things. It is not built of enthusiasm about them.</p>
</div>
`,
  sources: "Aquinas, ST I q.5 a.4 ad 1 and I q.39 a.8; ST I q.84 a.6; Super Boethium De Trinitate q.5 a.1 ad 3, quoting Hugh of St. Victor, Didascalicon III.3; Wisdom 11:21 with ST I q.5 a.5; Ptolemy, Harmonics I.1–2; Boethius, De inst. mus. I.34; Plato, Republic VII 530d–531c; Augustine, De musica VI and Epistle 101 (to Memorius).",
  check: {
    q: "What is the chief thing this art does for the one who possesses it?",
    options: [
      "It refines his taste, so that he prefers better music.",
      "It lets him verify, in his own hearing, that what pleases the sense does so by a proportion the mind can know — that the beautiful is intelligible.",
      "It gives him a skill he can use, which is the point of any study."
    ],
    answer: 1,
    why: "Taste is the fine art’s business, and use is the servile arts’. The liberal art’s gift is a demonstration you can perform yourself: the delight tracks the ratio. Everything else on the list follows from that."
  }
},

{
  id: "i-2",
  ch: "I",
  title: "Where the art sits: a middle science",
  html: `
<p>The seven liberal arts are two roads. The <em>trivium</em> (grammar, logic, rhetoric) concerns speech. The <em>quadrivium</em> (arithmetic, geometry, music, astronomy) concerns quantity. St. Thomas, commenting on Boethius’s <span class="latin">De Trinitate</span>, says that after logic one should learn mathematics, “which the quadrivium concerns,” and that these are “like paths leading the mind to the other philosophical disciplines.”</p>
<p>Quantity itself is of two kinds, as Aristotle shows in the <em>Categories</em>. Of a heap of wheat we ask <em>how much</em> — continuous quantity, magnitude. Of the potatoes in a sack we ask <em>how many</em> — discrete quantity, number. Geometry is the science of magnitude. Arithmetic is the science of number. Those two are first, because they treat quantity in itself, abstracted from the movable bodies in which we first meet it.</p>
<p>Why then add music and astronomy? Because arithmetic and geometry, taken alone, do not yet touch the world we hear and see. St. Thomas, following Aristotle’s <em>Physics</em> II, calls optics, harmonics, and astronomy <em>middle sciences</em> (<span class="latin">scientiae mediae</span>). A middle science has a <em>physical subject</em> and demonstrates through <em>mathematical middle terms</em>. The string that sounds, the path of a planet, the ray of light — these are natural things. The proof that this string at this length sounds the concord of the fifth is an arithmetic proof.</p>
<div class="dl">
  <dt>Optics</dt><dd>takes its middle terms from geometry.</dd>
  <dt>Harmonics</dt><dd>takes its middle terms from arithmetic.</dd>
  <dt>Astronomy</dt><dd>takes its middle terms from both.</dd>
</div>
<p>So music, as a liberal art, is not “math about nothing in particular,” and it is not physics. It is arithmetic applied to sound. Geometry is prior to astronomy in the same way; arithmetic is prior to music. If you do not yet know what a ratio of whole numbers is, you cannot possess this art — any more than you can possess astronomy without the circle.</p>
<div class="remark">
  <h4>Why these two complete the quadrivium</h4>
  <p>Joseph Hattrup, writing in the tradition of the College that publishes <em>The Aquinas Review</em>, puts the point this way: music and astronomy are mathematics applied to periodic motion, one for the ear and one for the eye. They begin to penetrate the natural world without yet being natural philosophy. That is why they belong in a liberal education ordered to wisdom, and why they are not hobbies added to arithmetic. We will use this as a pedagogical order, because it matches St. Thomas’s account of the middle sciences. We will not pretend that “periodic motion” is Thomas’s own phrase for the subject. His phrase is the more exact one: harmonics considers a natural thing (sound) through the numbers of arithmetic.</p>
</div>
`,
  sources: "Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3; In Phys. II lect. 3; Aristotle, Physics II.2, Categories 6; Boethius, De inst. arith. / De inst. mus. I.1–2. Hattrup, “The Order of Astronomy and Music to Wisdom” (TAC, 2019).",
  check: {
    q: "As a liberal art, music is",
    options: [
      "a part of natural philosophy, because sound is a natural thing.",
      "pure arithmetic, because it is about number.",
      "a middle science: its subject is sound, its middle terms are numbers."
    ],
    answer: 2,
    why: "Thomas’s name is scientia media. The subject is physical (sounding bodies); the demonstration is mathematical (ratios). It is neither physics nor bare arithmetic."
  }
},

{
  id: "arith-1",
  ch: "I",
  title: "Numbers compared: the kinds of ratio",
  html: `
<p>The last lesson ended with a warning: if you do not know what a ratio of whole numbers is, you cannot possess this art. Here is what the art means by it. Boethius wrote his <span class="latin">De institutione arithmetica</span> before his <span class="latin">De institutione musica</span>, and the second presupposes the first throughout. This is that first book, in one page.</p>
<p>Between any two numbers there is either <strong>equality</strong> or <strong>inequality</strong>. Equality is one and simple, and there is nothing to divide in it; its sounding image is the unison. Boethius holds that all inequality proceeds from equality, as all number proceeds from unity — which is why the art treats the unison before it treats any interval.</p>
<p>Inequality has kinds, and the kinds are what the rest of this course means when it says a word like <em>first</em>.</p>
<div class="dl">
  <dt>Multiplex</dt><dd>the greater contains the less a whole number of times, with nothing over. <span class="latin">Duplus</span> 2:1, <span class="latin">triplus</span> 3:1, <span class="latin">quadruplus</span> 4:1.</dd>
  <dt>Superparticularis</dt><dd>the greater contains the less once, and one aliquot part of it besides. <span class="latin">Sesquialter</span> 3:2 (once and a half), <span class="latin">sesquitertius</span> 4:3 (once and a third), <span class="latin">sesquiquartus</span> 5:4, <span class="latin">sesquioctavus</span> 9:8.</dd>
  <dt>Superpartiens</dt><dd>once, and <em>more than one</em> such part. <span class="latin">Superbipartiens tertias</span> 5:3 (once and two thirds), <span class="latin">supertripartiens quartas</span> 7:4.</dd>
  <dt>Multiplex superparticularis</dt><dd>several times, and one part besides. <span class="latin">Duplex sesquiquartus</span> 9:4.</dd>
  <dt>Multiplex superpartiens</dt><dd>several times, and more than one part. 8:3 is <span class="latin">duplex superbipartiens tertias</span>.</dd>
</div>
<p>Each of the five has a lesser counterpart, formed with <span class="latin">sub-</span>: 2:3 is <span class="latin">subsesquialter</span>. The art usually speaks of the greater and lets the lesser be understood.</p>
<p>The Latin is not ornament. <span class="latin">Sesqui-alter</span> says “a half again”; <span class="latin">sesqui-tertius</span>, “a third again.” The name states the ratio. A man who has the names has the arithmetic in his mouth, and will not have to stop and think what 4:3 <em>is</em>.</p>

<h4 class="sec">What this buys you</h4>
<p>Now the central claim of the art can be stated exactly, and not merely asserted. When <span class="xref" data-to="iv-1"></span> says that 2:1, 3:2 and 4:3 are the <em>first</em> concords, it says: the first multiple, and the first two superparticulars. That is a claim about the order of number, not about history, not about taste, and not about what a voice can manage.</p>
<p>And now you can see the seam in the tradition, which will open later. The ratio 5:4 is a superparticular, and it stands <em>before</em> 9:8 in the order — it is the third of them, and 9:8 is only the eighth. So the Pythagorean refusal of 5:4 cannot rest on the kind of ratio. It rests on a <strong>bound</strong>: the tetractys stops at four, and no concord may use a number beyond it. The tone 9:8 is admitted not as a concord but as a step, and it enters by a different door — as the leftover when the fifth and the fourth are compared.</p>
<div class="remark">
  <h4>Where the bound falls</h4>
  <p>Keep this in mind, because it settles what the later dispute is actually about. The question is never whether ratios govern concord. It is <em>where the bound stands</em>. The Pythagoreans put it at four. In 1558 Zarlino put it at six — the <span class="latin">senario</span> — and the thirds and sixths came in with it. That is a development inside the art, argued with the art’s own instruments, and <span class="xref" data-to="vii-3"></span> tells the story. It is not the ear overthrowing number.</p>
</div>
`,
  sources: "Boethius, De institutione arithmetica I.21–32 (the species of inequality; that all inequality proceeds from equality) and De institutione musica II.7; Nicomachus, Introduction to Arithmetic I.17–23. The bound at four: Nicomachus, Manual of Harmonics 5–6; Boethius, De inst. mus. I.7.",
  check: {
    q: "What kind of ratio is 9:8, and why is it not among the first concords?",
    options: [
      "It is a superpartient, and superpartients are never concordant.",
      "It is a superparticular — the eighth of them — and the Pythagorean bound at four admits no concord that needs a number beyond 1, 2, 3, 4.",
      "It is a multiple, and multiples other than 2:1 are discords."
    ],
    answer: 1,
    why: "9:8 is sesquioctavus, a superparticular, and perfectly lawful. It is not a concord because the bound is the tetractys. The whole later dispute is about whether that bound belongs at four or at six."
  }
},

{
  id: "i-3",
  ch: "I",
  title: "A definition: the science of measuring well",
  html: `
<p>Augustine opens <span class="latin">De musica</span> with a definition the Middle Ages did not discard: <span class="latin">Musica est scientia bene modulandi</span> — music is the science of measuring well. <em>Modulari</em> is a difficult word. It does not mean “to write a melody” in the modern sense. It means to measure a motion so that it is well measured — in sound, and (in Augustine’s own books) also in the numbering of time, as in the feet of verse.</p>
<p>Two words in the definition must not be rushed.</p>
<p><strong>Science, not skill.</strong> Augustine’s first concern is to distinguish the one who possesses the art from the one who merely does the thing. A nightingale sings well; it does not have <em>scientia</em>. A player may strike the right string by custom or by ear and still not know why that length is the right length. Boethius will say the same at the end of his first book: the true <span class="latin">musicus</span> is the one who judges by reason. St. Thomas would not quarrel with this. Science is in the intellect. An art, as he says of the liberal arts, involves a work that is a product of reason itself. The work of harmonics is the known scale, not the performed song.</p>
<p><strong>Measuring well.</strong> What is measured? Sounding motion. We will spend the next chapters making this definite: high and low, the comparison of two sounds, the lengths of a string. Augustine’s own treatise then turns, for five books, to meter. That is the numbering of time, and it belongs to the art in a wide sense. This course follows the quadrivium’s center of gravity, which is Boethius: the numbering of <em>pitch</em>. We will not pretend that Augustine wrote a book about the monochord. We also will not pretend that “measuring well” is a metaphor. The art really measures.</p>
<div class="remark">
  <h4>What we will not do</h4>
  <p>We will not begin from a treble clef, from the names C-D-E, or from “major” and “minor.” Those are later labels for things we must first know in themselves. We will not treat equal temperament (the piano’s slightly fudged fifths) as the nature of the intervals. And we will not treat Pythagoras, Plato, Aristotle, Augustine, and Boethius as if they said the same thing. Where they dispute, we will follow St. Thomas when he has spoken, and we will leave the rest open rather than invent a school.</p>
</div>
`,
  sources: "Augustine, De musica I.2; Boethius, De inst. mus. I.34; Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3.",
  check: {
    q: "Why does Augustine call music a science?",
    options: [
      "Because only scientists in laboratories can understand it.",
      "Because the one who possesses it knows the measure, and does not merely sing as a bird sings.",
      "Because it has nothing to do with the ear."
    ],
    answer: 1,
    why: "Scientia is intellectual knowledge of causes. The nightingale and the untaught singer may hit the pitch; they do not have the art. The ear is where we begin, not where we refuse to begin."
  }
},

{
  id: "ii-1",
  ch: "II",
  title: "Sound",
  html: `
<p>Before there is a ratio, there is a sound. St. Thomas, reading Aristotle’s <em>De anima</em>, treats sound as the proper object of hearing. Color is what sight is of; sound is what hearing is of. We do not first have a theory and then go looking for a noise. We hear.</p>
<p>Sound is caused. A sounding body is struck, or otherwise moved with a certain violence, and the medium — air, usually — is affected so as to be audible. A stone at rest in a field is silent. The same stone, struck, sounds. Not every body sounds equally; a taut string sounds in a way a heap of wool does not. You need no physics textbook for this. You need to notice what you already know.</p>
<p>Among sounds, some last and have a definite height: the sound of a plucked string, a bell, a sung vowel. Others do not: a scrape, a cough, a wave on gravel. The art of harmonics is about the first kind. A pitch is a sound as high or low — as <em>acute</em> or <em>grave</em>, in the old vocabulary. “High” and “low” here are not places in a room. They are differences <em>of the sound itself</em>, as red and blue are differences of color.</p>
<div class="widget" data-kind="listen" data-len="1" data-label="Hear a standing sound"></div>
<p>What you just heard is one pitched sound. It was made by a vibrating body whose motion repeats. The tradition names the motion; a later physics names the rate of repetition a <em>frequency</em> and counts it in cycles per second. We may use that count as a measure. We will not begin by saying that pitch <em>is</em> a number of hertz. Pitch is what you hear. The number measures the motion that is the sound.</p>
<div class="remark">
  <h4>Why this order</h4>
  <p>A middle science starts from a natural thing and demonstrates through mathematics. If we started from numbers, we would be doing arithmetic and then looking around for a noise that fitted them. That is not how the art is learned, and it is not how St. Thomas thinks knowledge of nature begins. All our knowledge begins in the senses. The ear gives us sound; reason, using arithmetic, knows why these sounds stand to one another as they do.</p>
</div>
`,
  sources: "Aristotle, De anima II.8; Aquinas, In De anima II; ST I q.84 a.6 (knowledge begins from the senses). The caution about frequency follows the order of a middle science, not a quarrel with acoustics.",
  check: {
    q: "In this art, a pitch is first of all",
    options: [
      "a written note on a staff.",
      "a sound as high or low, heard before it is counted.",
      "a frequency in hertz, which the ear then copies."
    ],
    answer: 1,
    why: "The staff is a later mark. Hertz is a later measure of the same motion. The thing itself is a heard sound as acute or grave."
  }
},

{
  id: "ii-2",
  ch: "II",
  title: "Two sounds compared",
  html: `
<p>One sound is high or low only by comparison, as one rod is long or short only by comparison. Play a sound, then another. Either they are the same in height, or they are not.</p>
<p>If they are the same, we call that <em>unison</em> — one sound. If they are not, the difference is an <em>interval</em>. That word means a gap, a standing-apart. It does not yet mean a distance on a keyboard or a number of “semitones.” It means: these two pitches, as compared.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="1" data-name="Unison — the same pitch twice"></div>
<p>Unison is the equality of pitches. It is not yet a concord in the sense the art cares about most, because there are not yet two different sounds to blend. It is the measure against which difference is heard.</p>
<p>Now hear two sounds that are not the same. First one, then the other; then both at once. Do they seem to belong together, or to grind?</p>
<div class="widget" data-kind="interval" data-a="1" data-b="8/9" data-name="A small difference — not yet named"></div>
<p>You need no vocabulary yet. Notice only this: some pairs blend when they sound together, so that you can almost take them for a single richer sound; some pairs remain two, and restless. The art will call the first kind <em>concords</em> (consonances) and the second <em>discords</em> (dissonances). The names can wait. The hearing cannot.</p>
<div class="remark">
  <h4>Together and in succession</h4>
  <p>A pair of pitches may be heard one after the other (as in a melody) or at once (as in a chord). The liberal art knows both. The blending that first reveals a concord is often clearer when the two sound together. Melody will come when we have a scale to walk on.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.3–8; Nicomachus, Manual of Harmonics 2, 6, 12.",
  check: {
    q: "An interval, at this stage, is",
    options: [
      "the comparison of two pitches: same, or different by so much.",
      "a named distance on a piano, such as ‘a major third.’",
      "any sound that lasts a long time."
    ],
    answer: 0,
    why: "We have not yet named thirds or pianos. An interval is two pitches compared. Duration is another measure (Augustine’s), not this one."
  }
},

{
  id: "iii-1",
  ch: "III",
  title: "One string",
  html: `
<p>How shall we measure high and low, instead of merely noticing them? The instrument of this art is the <em>monochord</em>: one string, stretched over a board, which can be stopped at a chosen length. The whole string sounds one pitch. Stop it halfway, and the half that remains free sounds another. Same string, same tension, same thickness; only the sounding length has changed.</p>
<p>The rule, which you can hear for yourself, is this: <strong>the shorter the sounding length, the higher the pitch.</strong> Twice as short, and the pitch is a definite interval we will name in the next lesson. Three-halves as short, another. The length is a magnitude; the comparison of two lengths is a ratio; the ratio will turn out to be the same as the comparison of the pitches, taken the other way around.</p>
<div class="widget" data-kind="monochord" data-start="2/3"></div>
<p>Drag the bridge. Hear the open string, then the stopped string, then both. You are not “playing a song.” You are changing one quantity and hearing another quantity change with it. That is the whole method of the art.</p>
<div class="remark">
  <h4>The story of the hammers</h4>
  <p>Nicomachus and Boethius tell how Pythagoras, passing a smithy, heard hammers of different weights sounding concords, and so discovered the ratios. The story is the traditional <em>inventio</em> of the science. As a piece of metallurgy it is doubtful: hammer-weight does not behave as the story needs. As a piece of pedagogy it is useful, because it says the right thing: the concords are not arbitrary tastes; they track number. What actually shows the number, cleanly, is the string. We will trust the string.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.10–11; Nicomachus, Manual 6; Kalkavage, On the Measurement of Tones (the monochord as the student’s first instrument).",
  check: {
    q: "On a monochord, if you shorten the sounding length and keep everything else the same, the pitch",
    options: [
      "gets lower, because there is less string.",
      "gets higher.",
      "stays the same, because it is the same string."
    ],
    answer: 1,
    why: "Shorter sounding length, higher pitch. The ‘same string’ still has a different quantity of itself sounding."
  }
},

{
  id: "iii-2",
  ch: "III",
  title: "Halving the string: the first concord",
  html: `
<p>Stop the string at its midpoint. The free half is to the whole as 1 is to 2. Hear the whole, then the half, then both together.</p>
<div class="widget" data-kind="monochord" data-lock="1/2"></div>
<p>What you hear is the first and simplest concord. The two sounds are not the same pitch — the half is higher — and yet they blend so completely that the higher seems to be the lower, raised; or the lower, the higher deepened. Singers who have never heard the word still find this interval when they try to sing “the same tune higher.”</p>
<p>The Greeks called it the <span class="latin">diapason</span>, “through all.” Later Latin, counting the eight steps of the filled scale, called it the <em>octave</em> (the eighth). We will use both names, but we will not let the counting of eight get ahead of the thing itself. The interval is the ratio <strong>2:1</strong> of lengths (whole to half), which is the ratio <strong>2:1</strong> of pitches the other way (half to whole). You do not need eight notes to hear it. You need two lengths, one the double of the other.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="1/2" data-name="Diapason — 2:1"></div>
<p>Why is this the first concord? Because 2:1 is the first ratio after equality. Among the kinds of ratio the arithmeticians name, the <em>multiple</em> (a number of times) is the simplest, and the first multiple is the double. The art will find its other first concords nearby, in the first <em>superparticular</em> ratios, where the greater exceeds the less by an aliquot part of the less: 3:2 (the sesquialter), 4:3 (the sesquitertian). We will hear those next. For now, sit with 2:1 until “the same, higher” is something you can recognize without a name.</p>
<div class="remark">
  <h4>A warning about the word “octave”</h4>
  <p>If you already sing, you may think of an octave as “eight notes up the scale.” That description <em>presupposes</em> a scale of eight. The interval 2:1 does not. It is prior. The scale is a way of filling this interval; this interval is not a count of scale-steps. That is why the old name <em>diapason</em> is healthier at the beginning.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.7–8, I.16; Nicomachus, Manual 3, 5; Euclid, Sectio canonis (the diapason as duple).",
  check: {
    q: "The diapason (octave) is, first of all,",
    options: [
      "eight named notes, C through C.",
      "the concord of a string with its half: the ratio 2:1.",
      "any two notes that sound far apart."
    ],
    answer: 1,
    why: "Eight notes come later, when the interval is filled. Far apart is vague. The thing is 2:1, heard as ‘the same, higher.’"
  }
},

{
  id: "iv-1",
  ch: "IV",
  title: "The fifth and the fourth",
  html: `
<p>After the double comes the next simplest inequality of whole numbers: 3 to 2. Stop the string so that the sounding length is two-thirds of the open string. The lengths are 3:2 (open to stopped). The pitches, inverted, are 3:2 the other way (stopped to open). This concord is the <span class="latin">diapente</span>, the fifth.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="2/3" data-name="Diapente — 3:2"></div>
<p>It blends, but not as the diapason blends. You hear two, and you hear that they belong. Many people who cannot yet match a 2:1 will still find a 3:2 with the voice, because it is the other great standing-apart in song.</p>
<p>Next: 4 to 3. Stop the string at three-quarters. This is the <span class="latin">diatessaron</span>, the fourth.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="3/4" data-name="Diatessaron — 4:3"></div>
<p>The fourth is a concord, and it is tighter, less open, than the fifth. Hear all three against the same open string: the half (diapason), the two-thirds (fifth), the three-quarters (fourth).</p>
<div class="widget" data-kind="monochord" data-start="2/3"></div>
<p>These three — 2:1, 3:2, 4:3 — are the first concords of the art. They are not chosen because a committee of composers liked them. They are the first multiple and the first two superparticulars, and they are the concords the ear most readily grants. Later writers, Ptolemy among them, will argue about whether still other ratios (5:4, for instance) should be counted as concords. That is a real dispute. It is not first. First are the three that the numbers 1, 2, 3, and 4 already contain.</p>
`,
  sources: "Boethius, De inst. mus. I.7–8, I.16–18; Nicomachus, Manual 5–6; Ptolemy, Harmonics I (for the later, open question of further concords).",
  check: {
    q: "The fifth and the fourth, as this art first knows them, are",
    options: [
      "the next keys to the right on a piano.",
      "the concords 3:2 and 4:3 of a single string.",
      "two names for the octave."
    ],
    answer: 1,
    why: "A piano key is a later, tempered stand-in. The fifth is 3:2, the fourth 4:3, the diapason 2:1. Three different ratios."
  }
},

{
  id: "iv-2",
  ch: "IV",
  title: "How the three fit: the tetractys",
  html: `
<p>The three first concords are not three separate facts. They compose.</p>
<p>Take a fifth and then a fourth above it. In ratios, that is multiplying: <strong>(3:2) × (4:3) = 12:6 = 2:1</strong>. A fifth plus a fourth is a diapason. Hear it. The open string to two-thirds is a fifth; two-thirds to half is a fourth (because (2/3) : (1/2) = 4:3); open to half is the diapason.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="2/3" data-name="Open to 2/3 — a fifth"></div>
<div class="widget" data-kind="interval" data-a="2/3" data-b="1/2" data-name="2/3 to 1/2 — a fourth"></div>
<div class="widget" data-kind="interval" data-a="1" data-b="1/2" data-name="Open to 1/2 — a diapason, the two compounded"></div>
<p>The Pythagoreans pointed to the <em>tetractys</em>: the triangular heap of the first four numbers.</p>
<div class="widget" data-kind="tetractys"></div>
<p>From 1, 2, 3, 4 you can form 2:1, 3:2, 4:3, and also 4:1 (the double diapason) and 3:1 (the diapason-plus-fifth). You cannot form every later interval from these four without further work. You can form the first concords. That is the claim. It is not a mysticism about the number ten; it is an observation about which ratios are first.</p>
<div class="remark">
  <h4>A small exactness</h4>
  <p>Compounding ratios is not adding string-lengths. It is multiplying. If you add the leftover bits of string, you will get the wrong pitch. The art measures by <em>ratio</em>, not by leftover inches. This is one reason it belongs to arithmetic rather than to a merely geometric cutting of a rod.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.16–18, II; Nicomachus, Manual 6–8; Euclid, Sectio canonis.",
  check: {
    q: "A fifth compounded with a fourth is",
    options: [
      "a tone.",
      "a diapason (2:1), because (3:2)×(4:3)=2:1.",
      "a bigger fifth."
    ],
    answer: 1,
    why: "This is the first great arithmetic of the art. Fifth plus fourth = diapason. The remainder, fifth minus fourth, will be the tone."
  }
},

{
  id: "v-1",
  ch: "V",
  title: "The tone",
  html: `
<p>If a fifth plus a fourth makes a diapason, then a fifth <em>minus</em> a fourth is the leftover that distinguishes them. In ratios, division: <strong>(3:2) ÷ (4:3) = (3:2)×(3:4) = 9:8</strong>.</p>
<p>This leftover is the <em>tone</em> (Greek <span class="latin">tonos</span>, Latin <span class="latin">tonus</span>). It is not a concord. Play it. The two sounds do not blend as 2:1, 3:2, and 4:3 blend. They step. The tone is the ordinary step by which the art will fill the fourth and the diapason.</p>
<div class="widget" data-kind="interval" data-a="1" data-b="8/9" data-name="The tone — 9:8"></div>
<p>On the string: the open string to 8/9 of itself is a tone upward (because the lengths are 9:8). You can also hear a tone as the interval between the fourth and the fifth, both measured from the same open string: 3/4 and 2/3. Check: (3/4) : (2/3) = 9:8.</p>
<div class="widget" data-kind="interval" data-a="3/4" data-b="2/3" data-name="Fourth to fifth, same open string — also 9:8"></div>
<p>Two tones compounded are a <em>ditone</em>: (9:8)×(9:8)=81:64. That is a larger step than the later “major third” of 5:4, which Ptolemy and others admitted by combining sense and a different arithmetic. The Pythagorean art, which is the first layer of the liberal art, takes 81:64 as what two tones really are. Whether the ear’s favorite “third” is that ditone or the gentler 5:4 is a dispute we will name, not settle. St. Thomas does not settle it. The first principles do not require it.</p>
<div class="remark">
  <h4>What a tone is not</h4>
  <p>In modern English, “tone” can mean a sound, a color of voice, or a whole-step on a piano. Here it means one interval, 9:8. A piano’s whole-step is a tempered stand-in for this, slightly off, as its fifth is slightly off from 3:2. Close enough to sing with; not the thing itself.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.16–18, II.28–31; Euclid, Sectio canonis; Ptolemy, Harmonics I.7, I.15 (the 5:4 as a later, open question).",
  check: {
    q: "The tone, in this art, is",
    options: [
      "any pleasant sound.",
      "the interval 9:8, which is a fifth diminished by a fourth.",
      "the same as an octave."
    ],
    answer: 1,
    why: "(3:2)÷(4:3)=9:8. It is a step, not a concord, and not the diapason."
  }
},

{
  id: "means-1",
  ch: "V",
  title: "The three means, and the musical proportion",
  html: `
<p>Between two numbers a third may be set in more than one way. The tradition names ten kinds of mean; three are needed here, and they are the three the art was built on.</p>
<div class="dl">
  <dt>Arithmetic</dt><dd>equal <em>differences</em>. The mean exceeds the less by what the greater exceeds it. Between 6 and 12: <strong>9</strong>, since 9−6 = 3 = 12−9.</dd>
  <dt>Geometric</dt><dd>equal <em>ratios</em>. The mean stands to the less as the greater to the mean. Between 6 and 12: a number whose square is 72 — and there is none in whole numbers.</dd>
  <dt>Harmonic</dt><dd>equal <em>parts</em>. The mean exceeds the less, and is exceeded by the greater, by the same part of each. Between 6 and 12: <strong>8</strong>, since 8−6 = 2, a third of 6; and 12−8 = 4, a third of 12. Equivalently, the differences 2 and 4 stand as the extremes 6 and 12.</dd>
</div>
<p>Now write the two extremes with both means between them:</p>
<div class="widget" data-kind="tetrad"></div>
<p>Sound the four, and then each pair. Everything the art has taught you is in these numbers, and nothing has been chosen:</p>
<div class="dl">
  <dt>6 : 12</dt><dd>the diapason, 2:1</dd>
  <dt>6 : 9 and 8 : 12</dt><dd>the diapente, 3:2 — twice over</dd>
  <dt>6 : 8 and 9 : 12</dt><dd>the diatessaron, 4:3 — twice over</dd>
  <dt>8 : 9</dt><dd>the tone, 9:8 — the distance between the two means</dd>
</div>
<p>Nicomachus calls this the most perfect proportion, and reports that Pythagoras brought it out of Babylon. Whatever the history, notice the thing itself. The tone, which <span class="xref" data-to="v-1"></span> derived by taking a fourth away from a fifth, turns out to be simply the interval between the harmonic and the arithmetic mean of the diapason. Two roads, one place.</p>

<h4 class="sec">A theorem you are owed</h4>
<p>The next lesson will say that the leimma is not half a tone, and that the halving of 9:8 is not something this art can take as a principle. That has been an assertion. Here is the proof, and it is short.</p>
<p>Suppose the tone 9:8 could be divided into two equal intervals. Then there would be a number <em>x</em> standing to 8 as 9 stands to <em>x</em> — a geometric mean. Then <em>x</em>² = 72. But 72 is no square. There is no such number.</p>
<p>And this is not a peculiarity of 9 and 8. <strong>Archytas proved that no superparticular ratio, in its least terms, admits a mean proportional at all.</strong> Boethius reports the demonstration, having already argued the point against Aristoxenus earlier in the same book; the same theorem stands in the <span class="latin">Sectio canonis</span> attributed to Euclid. Every concord and every step of this art except the diapason and its compounds is superparticular. <em>None of them can be halved in ratio.</em></p>
<p>So <em>semitone</em> is a name and not a measure. The leimma 256:243 is what is <strong>left</strong>, not what is <strong>half</strong>. Two leimmata fall short of a tone; and the whole difficulty that later Europe met when it tried to build instruments of fixed pitch <span class="xref" data-to="vii-4"></span> begins in this one arithmetical fact.</p>
<div class="remark">
  <h4>Why a course in sounding number stops for the doctrine of means</h4>
  <p>Because this is the point at which the scale stops looking like a choice and starts looking like a consequence. The two inner numbers of 6:8:9:12 were not picked because they sounded well. They are what the arithmetic yields when you ask for the means of 6 and 12 — and the sound follows after. If you want to know what it feels like to possess a middle science rather than to have heard about one, it feels like this.</p>
</div>
`,
  sources: "Boethius, De institutione arithmetica II.40–54 (the means; the maxima et perfecta harmonia) and De institutione musica II.12–17; Nicomachus, Introduction to Arithmetic II.29 (the musical proportion, reported as Babylonian); Boethius, De inst. mus. III.1 (against Aristoxenus) and III.11 (Archytas’s demonstration, which Boethius also criticises as loosely stated); Euclid, Sectio canonis prop. 3.",
  check: {
    q: "Why can the tone 9:8 not be divided into two equal intervals?",
    options: [
      "Because the ear cannot distinguish anything so small.",
      "Because a superparticular ratio in least terms admits no mean proportional in whole numbers — here, because 72 is not a square.",
      "Because Boethius forbade it, following the Pythagoreans."
    ],
    answer: 1,
    why: "It is a theorem of arithmetic, proved by Archytas and reported by Boethius. Nothing about ears or authority enters. This is why the remnant of the fourth is a leimma and not a half."
  }
},

{
  id: "v-2",
  ch: "V",
  title: "Filling the diapason",
  html: `
<p>The work of harmonics, as a liberal art, is the scale. A scale is not a ladder drawn on paper. It is the diapason, filled with concords and with the tone, so that one can go from a sound to its double through a known path.</p>
<p>The old way of filling is the <em>tetrachord</em>: a fourth, divided. In the diatonic genus — the ordinary one, the one the Middle Ages taught first — the fourth is filled by two tones and a leftover. Two tones are 81:64. The fourth is 4:3. The leftover is (4:3)÷(81:64)=256:243. This leftover is the <em>leimma</em>, the remnant. It is smaller than a tone. It is not “half a tone”: half of 9:8 would be a mean the Pythagorean art does not take as a first principle, and 256:243 is not that mean.</p>
<p>Two such tetrachords, separated by a tone, fill the diapason. That is why the filled diapason has eight standing sounds (hence “octave”), and why the eight are not eight equal steps. They are: tone, tone, leimma, tone, tone, tone, leimma — or a permutation of that pattern, depending where you set the tetrachords.</p>
<div class="widget" data-kind="scale"></div>
<p>Play the eight, low to high. You are hearing the diatonic filling of 2:1, built only from 3:2, 4:3, and their difference 9:8. No piano key, no clef, no “C major.” If later you meet those names, they are labels stuck on this, or on a slightly adjusted version of this.</p>
<div class="remark">
  <h4>Other genera, left open</h4>
  <p>The Greeks also divided the tetrachord chromatically and enharmonically, with smaller intervals. Boethius reports them. They are part of the full art. They are not first. First is the diatonic path through the diapason. Likewise the Guidonian names <em>ut re mi fa sol la</em> are a medieval help for singers, a hexachord laid upon this system. Useful later; not the origin of the intervals.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.21–27, II; Nicomachus, Manual 7–9; the leimma 256:243 is the standard Pythagorean remainder. Hattrup: the opus of harmonics is the scale generated from 2:1, 3:2, 4:3.",
  check: {
    q: "Why does the filled diapason have eight pitches?",
    options: [
      "Because there are eight planets.",
      "Because two tetrachords (each a fourth) plus the tone that joins them fill 2:1, and that path has eight standing sounds.",
      "Because modern sheet music uses eight lines."
    ],
    answer: 1,
    why: "The eight is a consequence of how 2:1 is filled by 4:3 + 9:8 + 4:3. It is not a mysticism of the number eight, and not a fact about paper."
  }
},

{
  id: "v-3",
  ch: "V",
  title: "Consonance, the ear, and reason",
  html: `
<p>Why do 2:1, 3:2, and 4:3 please, and 9:8 not, when both are ratios of whole numbers? The tradition gives more than one answer, and they are not all the same.</p>
<p>The Pythagoreans say: because these are the first ratios, from the first numbers. Aristoxenus says: because the ear judges, and the interval is a continuum, not a ratio. Ptolemy says: reason and sense must both be heard; neither may despise the other. Boethius, teaching the Latin West, sides with number as the cause, while still beginning from what is heard.</p>
<p>What would St. Thomas say? He does not write a harmonics. He does write the principles by which a harmonics must be judged.</p>
<p>All knowledge of nature begins in the senses. A middle science has a physical subject: here, sounding bodies as heard. So Aristoxenus is right that the ear is not optional. He is wrong if he means that the art stops at the ear, or that ratio is a fiction.</p>
<p>Science is of the cause, and the cause here is numerical proportion in the sounding motion. So the Pythagoreans are right that the concord is a ratio, and that the first concords are the first ratios. They overreach if they treat the ear as a nuisance, or if they insist that every later pleasure of the ear (5:4, for instance) is a moral failure of sense.</p>
<p>Ptolemy’s method — sense and reason together — is, as a <em>method</em>, the nearest of the three to a middle science. That does not automatically make every ratio Ptolemy admits a first principle. First principles are few.</p>
<div class="remark">
  <h4>Beauty as proportion</h4>
  <p>St. Thomas, at <em>Summa</em> I q.5 a.4, says that beauty and goodness are the same in the thing and differ in notion: goodness is what all desire; beauty is what pleases in being seen (or, analogously, heard). “Beauty consists in due proportion; for the senses delight in things duly proportioned, as in what is after their own kind — because even sense is a sort of reason.” And at I q.39 a.8 he names three conditions of beauty: integrity, due proportion or <em>consonantia</em>, and clarity. The pleasure of a concord is not a private taste tacked onto a ratio. The ratio is why the sense, which is a kind of reason, is pleased.</p>
</div>
<p>So: we listen first; we measure; we find the first concords to be the first ratios; we do not scold the ear, and we do not replace demonstration with the ear. On whether 5:4 is a concord in the strict sense, the authorities of the art disagree, and Thomas has not closed the question. A first-principles course may leave it open.</p>
`,
  sources: "Boethius, De inst. mus. I.1, I.9, V (on Ptolemy); Ptolemy, Harmonics I.1–2; Aquinas, ST I q.5 a.4 ad 1; I q.39 a.8; In Phys. II lect. 3; ST I q.84 a.6.",
  check: {
    q: "On Thomas’s principles, the ear and the ratio in this art are related how?",
    options: [
      "The ear is the whole of the science; number is a later diagram.",
      "Number is the whole of the science; the ear is untrustworthy.",
      "The ear gives the subject (sound as concordant or not); reason, by arithmetic, knows the cause. Neither is dismissed."
    ],
    answer: 2,
    why: "That is what a middle science is. Sense without reason is not scientia; reason without the sounding thing is not this science."
  }
},

{
  id: "sys-1",
  ch: "sys",
  title: "The Greater Perfect System",
  html: `
<p>The tetrachord is not a whole. It is a limb, and the Greeks had a body to attach it to. Until you have seen the body, you have been shown a bone and told it is a skeleton.</p>
<p>Take the diatonic tetrachord — a fourth filled, ascending, by leimma, tone, tone. Two of them may be joined in two ways. <em>Conjunct</em>: the highest sound of the one is the lowest of the next, and the pair spans 16:9, a tone short of the diapason. <em>Disjunct</em>: a whole tone stands between them, and the pair spans exactly 2:1. The Greeks used both, and built a system out of the combination.</p>
<p>The <strong>Greater Perfect System</strong> runs: a sound added below, the <span class="latin">proslambanomenos</span> — “the one taken in addition”; then the tetrachord <span class="latin">hypaton</span>, of the lowest; then the tetrachord <span class="latin">meson</span>, of the middle, conjunct with it; then the tone of disjunction; then the tetrachord <span class="latin">diezeugmenon</span>, of the disjunct; then the tetrachord <span class="latin">hyperbolaion</span>, of the highest, conjunct with that. Fifteen sounds.</p>
<div class="widget" data-kind="gps"></div>
<p>Check the arithmetic yourself: a tone, four fourths, and a tone. (9:8) × (4:3)⁴ × (9:8) = (81:64) × (256:81) = <strong>4:1</strong>. Two diapasons exactly. Nothing has been fitted by hand.</p>

<h4 class="sec">Reading the names</h4>
<p>The names describe the strings of a lyre, not pitches. <span class="latin">Hypate</span> is the highest-placed and most honoured string, and it sounds the <em>lowest</em>; <span class="latin">nete</span> is the last, and sounds the highest; <span class="latin">lichanos</span> is the one the forefinger takes; <span class="latin">mese</span> is the middle. Once you know that hypate means the lowest sound, the whole vocabulary becomes legible, and stays legible for a thousand years of treatises.</p>

<h4 class="sec">The mese rules</h4>
<p>The Peripatetic <span class="latin">Problems</span> observes that if the mese is put out of tune, the whole instrument sounds wrong — because all good melodies use the mese often, and having left it soon return; the mese is likened to a conjunction among words, the thing by which the rest hangs together. Elsewhere in the same book the other sounds are said to take their order in relation to it. The <span class="latin">Problems</span> are a Peripatetic compilation and not securely Aristotle’s. Take the observation, which is a good one, and not the authority.</p>

<h4 class="sec">Standing and moving</h4>
<p>This is the architectural point, and the reason the system is worth learning. The <em>outer</em> sounds of every tetrachord are fixed — the <span class="latin">hestotes</span>: proslambanomenos, hypate hypaton, hypate meson, mese, paramese, nete diezeugmenon, nete hyperbolaion. The two <em>inner</em> sounds of every tetrachord move. They are the <span class="latin">kinoumenoi</span>, and what moves them is the genus, which is the next lesson.</p>
<p>So: the fourths are the bones and they never shift. Everything variable in Greek music happens inside a frame that the arithmetic has already fixed. Hold that distinction — between what the art <em>demonstrates</em> and what it <em>permits</em> — and much of what follows in the history will make sense.</p>
<div class="remark">
  <h4>The Lesser system, and a warning about the modes</h4>
  <p>Beside the Greater there is a <strong>Lesser Perfect System</strong>: instead of the disjunction, a fourth tetrachord <span class="latin">synemmenon</span> — conjunct — branches upward from the mese, giving eleven sounds spanning 8:3. The two together were called the Immutable System.</p>
  <p>The Greeks also spoke of <span class="latin">tonoi</span> and <span class="latin">harmoniai</span> bearing the names Dorian, Phrygian, Lydian and the rest, and the Latin Middle Ages took those names for its church tones. <strong>They are not the same thing.</strong> Boethius’s transmission of the Greek names is one of the places where the tradition itself became tangled, and the Appendix lists the question among those this course leaves open. Do not let a modern book persuade you that “Dorian” meant one thing to Ptolemy and to a tenth-century cantor.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.20–27 and IV.3–12; Ptolemy, Harmonics II; Cleonides, Introduction to Harmonics; pseudo-Aristotle, Problems XIX.20 (the mese used often by all good melodies, likened to a conjunction) and XIX.36 (the other sounds ordered in relation to it).",
  check: {
    q: "In the Greek system, which sounds move when the genus changes?",
    options: [
      "All fifteen, since a genus retunes the whole instrument.",
      "The two inner sounds of each tetrachord; the outer sounds of every tetrachord stand fixed.",
      "Only the mese, which is why it rules the others."
    ],
    answer: 1,
    why: "The fourths are demonstrated by ratio and do not move. What a genus varies is how each fixed fourth is filled — which is exactly the line between what the art proves and what it permits."
  }
},

{
  id: "sys-2",
  ch: "sys",
  title: "The three genera",
  html: `
<p>A <em>genus</em> is a way of dividing the standing fourth. The outer sounds never move; the two inner ones do; and where they are placed changes the character of one and the same fourth.</p>
<div class="widget" data-kind="genera"></div>
<p><strong>Diatonic</strong> — “through the tones.” Ascending from the fixed lower sound: leimma, tone, tone; that is 256:243, then 9:8, then 9:8. This is the genus you already possess, and the one the Middle Ages taught first.</p>
<p><strong>Chromatic</strong> — “coloured.” Leimma, apotome, trihemitone: 256:243, then 2187:2048, then 32:27. The first two together make one whole tone, so the two lower steps crowd against each other at the bottom while the top step — three semitones — yawns. The character is entirely different, and nothing about the fourth itself has changed.</p>
<p><strong>Enharmonic</strong> — “well-fitted.” Two very small steps, called <span class="latin">dieses</span>, and then a ditone of 81:64. The two dieses together must make up the leimma; each is half of it.</p>

<h4 class="sec">Where the art runs out</h4>
<p>And here the enharmonic collides with the theorem of <span class="xref" data-to="means-1"></span>. The leimma is a superpartient, and in any case cannot be halved in ratio; so the diesis has no whole-number ratio at all. Boethius says so, and gives it none. When in his fourth book he sets out actual string-lengths for a monochord, the numbers he supplies for the chromatic and the enharmonic are approximations, and do not agree with the exact ratios of his first book.</p>
<p>That is not carelessness, and it should not be hidden. It is the honest report of a genus which the art could <em>name</em> and could not <em>measure</em> — which is very likely why the ancients reckoned the enharmonic the most refined of the three, the hardest to sing, and why it was the first to fall out of use. An art that knows where its own instruments stop is in better condition than one that does not.</p>
<div class="remark">
  <h4>On the character of the genera</h4>
  <p>The ancients ascribed different characters to the genera as to the modes, and Aristotle in <em>Politics</em> VIII takes such ascriptions seriously enough to legislate about them. That belongs to the second study of music <span class="xref" data-to="i-1"></span> and not to this one. We report that the ascription was made. We do not build on it, and neither does anything demonstrated in this course.</p>
</div>
<p>The structural lesson governs everything in <span class="xref" data-ch="VII"></span>. The concords are fixed by number and do not move. The <em>filling</em> is a choice within limits. When later Europe fills the diapason differently again — with a third at 5:4, and then with twelve equal steps — it is doing what the Greeks were doing, on a larger scale and for a different reason.</p>
`,
  sources: "Boethius, De inst. mus. I.21–23 (the genera and their ratios) and IV.6–12 (the monochord divisions, whose numbers for the chromatic and enharmonic are approximations); II.29 (that 256:243 is not half a tone); III.1 and III.11 (that a superparticular admits no equal division); Ptolemy, Harmonics I.12–16; Aristotle, Politics VIII.",
  check: {
    q: "Why could Boethius give no whole-number ratio for the enharmonic diesis?",
    options: [
      "Because the interval is too small for any instrument to produce.",
      "Because the diesis is half of the leimma, and no superparticular or superpartient ratio of this kind can be exactly halved in whole numbers.",
      "Because the enharmonic genus was invented after his time."
    ],
    answer: 1,
    why: "The same theorem that forbids halving the tone forbids the exact halving here. Boethius reports the genus, gives approximations in his monochord divisions, and does not pretend to a ratio he cannot supply."
  }
},

{
  id: "vi-1",
  ch: "VI",
  title: "Three kinds of music",
  html: `
<p>Boethius, at the beginning of his treatise, divides music into three: <span class="latin">mundana</span>, <span class="latin">humana</span>, <span class="latin">instrumentalis</span> — of the world, of the human being, and of instruments (including the voice). This division is part of the tradition. It must be read with St. Thomas, not against him and not as if Thomas had written it.</p>
<p><strong>Instrumental music</strong> is sounding music: string, wind, voice. It is the proper subject of the liberal art we have been learning. Everything you have heard on the monochord belongs here.</p>
<p><strong>Human music</strong> is the proportion of soul to body, and of the parts of the soul to one another. Boethius means a real analogy: the same kind of order that makes two strings concordant is the kind of order that makes a living human being one. Ethics and <em>De anima</em> treat this more properly than harmonics does. We should not force the 3:2 of a string to become a proof in psychology. We should also not call the analogy empty. St. Thomas holds that the soul’s powers are ordered, and that music moves the passions by a “hidden correspondence” of melody to affection (he quotes Augustine to this effect in ST II-II q.91 a.2 ad 5). That is enough for a first-principles course to admit, and not to inflate.</p>
<p><strong>World music</strong> is the one that needs a distinction. Pythagoras and Boethius speak of the harmony of the heavens, as if the spheres sounded. Aristotle, in <em>De caelo</em> II, denies that the heavenly bodies produce sound: they do not strike a medium as a string strikes the air. St. Thomas, in his commentary (II, lect. 14), follows Aristotle. There is no concert in the sky. So if <span class="latin">musica mundana</span> means audible chords from the planets, it is not so.</p>
<p>If it means that the cosmos is ordered in number, measure, and weight — Wisdom 11:21, which Thomas reads at ST I q.5 a.5 — then it is so, and astronomy is the middle science that shows the order to the eye as harmonics shows order to the ear. Plato’s <em>Timaeus</em> even uses the musical ratios to mark the world-soul. That is a cosmological claim, not a harmonics class. What harmonics can say without trespassing is modest: the same first ratios that please in sound are among the first ratios by which ordered motion is intelligible. Music and astronomy are, in that limited sense, companions. They are not two performances of one symphony.</p>
<div class="remark">
  <h4>Not doctrinaire</h4>
  <p>We do not mock Boethius for the spheres. We distinguish a true doctrine of cosmic order from a physical claim Thomas rejects. We do not turn every tetrachord into a map of the soul. Analogy is not demonstration. The art you can now practice on a string does not become more liberal by being inflated into a worldview. It becomes more liberal by being known as far as its principles go, and by knowing where they stop.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.2; Aristotle, De caelo II.9; Aquinas, In De caelo II lect. 14; ST I q.5 a.5; ST II-II q.91 a.2; Wisdom 11:21. The measured companionship of music and astronomy: Physics II.2 and Hattrup, tested against In De caelo.",
  check: {
    q: "What should we say, with Thomas, about the ‘music of the spheres’?",
    options: [
      "The planets emit audible concords, which we fail to notice by habit.",
      "The heavens make no sound; the true analog is cosmic order by number, which astronomy treats. Harmonics treats sounding bodies.",
      "Boethius is to be discarded, because Aristotle disagrees."
    ],
    answer: 1,
    why: "Thomas follows Aristotle against audible celestial sound, without discarding order, number, or Boethius’s other teaching. Discarding a saint and teacher because one physical claim fails is not his method."
  }
},

{
  id: "vi-2",
  ch: "VI",
  title: "The true musician, and what remains",
  html: `
<p>Boethius divides those who have to do with music into three: those who play instruments, those who invent songs, and those who judge. Only the last, he says, are truly <span class="latin">musici</span>, because they possess the science. The others have skill or gift. St. Thomas’s account of the liberal arts agrees in substance: the art is a work of reason. A flawless performer can still lack the science; a judge of ratios who cannot perform can still have it. In practice, of course, the ear that has never sung is a poor judge. The definition does not require contempt for singers. It requires that we not confuse the habit of the hands or the throat with the habit of the intellect.</p>
<p>What then of song in church, or of the delight of hearing? Those belong to the <em>use</em> of music, which Thomas treats in ST II-II q.91. Song is a salutary help to devotion because melody moves the soul. It is abused when it aims at display, or when the tune swallows the words. Instruments that move to pleasure more than to a good disposition he treats with caution. None of this is the liberal art, and none of it is cancelled by the liberal art. The science tells you what a concord is; prudence tells you when to sing.</p>
<p>You now have the first principles:</p>
<div class="dl">
  <dt>Subject</dt><dd>sounding pitch, as heard</dd>
  <dt>Cause</dt><dd>ratio of the sounding quantities</dd>
  <dt>First concords</dt><dd>2:1, 3:2, 4:3</dd>
  <dt>Step</dt><dd>the tone, 9:8</dd>
  <dt>Work</dt><dd>the diatonic filling of the diapason</dd>
  <dt>Kind of science</dt><dd>middle: arithmetic applied to sound</dd>
</div>
<p>What remains, and is not first: the chromatic and enharmonic genera; the Greater Perfect System of the Greeks; the church modes and the Guidonian hexachord; Ptolemy’s complete tables; Augustine’s metrics; composition; the ethics of melody in full. You could spend a year on any of these. You would spend it well only if 2:1, 3:2, 4:3, and 9:8 were already in your ear and in your reason — as they now can be.</p>
<p>One of those roads is walked in this course, because a student who knows the art and nothing of what became of it is easy prey for the claim that the art was refuted. <span class="xref" data-ch="VII"></span> follows the passage from this intonation to the tempered instruments of later Europe, and asks at the end which of the six lines above still stand. It is not first. Do not read it before the string is in your ear.</p>
<p>Go back to the monochord. Halt the string at 1, at 3/4, at 2/3, at 1/2. Hear them apart and together. If you can do that and say what you are hearing, you have begun the art.</p>
<div class="widget" data-kind="monochord" data-start="3/4"></div>
`,
  sources: "Boethius, De inst. mus. I.34; Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3; ST II-II q.91 a.2.",
  check: {
    q: "On Boethius’s and Thomas’s showing, a true musician in the liberal sense is",
    options: [
      "whoever can perform without error.",
      "whoever judges sounding number by reason, having learned the art.",
      "whoever feels music most strongly."
    ],
    answer: 1,
    why: "Performance is a skill; feeling is a passion. The liberal art is a science. The best case is a judge whose ear is trained — but the habit that makes him a musicus is the intellectual one."
  }
},

{
  id: "ex-0",
  ch: "ex",
  n: "E",
  title: "How to use the palaestra",
  html: `
<p>What you have read so far is the art set out in order. What follows is the art <em>practised</em>. They are not the same thing, and reading the first will not give you the second.</p>
<p>St. Thomas holds that an art is a habit — <span class="latin">habitus</span> — and a habit is got by acts, not by assent. You may agree with every sentence in <span class="xref" data-ch="IV"></span> and still be unable to say, with a string sounding in front of you, whether that is a fourth or a fifth. Agreement is not possession. These nine blocks exist so that you may actually possess what you have been shown.</p>

<h4 class="sec">How they work</h4>
<p>Each block draws a fresh set of items every time you begin it, and shuffles the answers. There is no order to learn and no page to memorise. What can be got by repetition is the skill itself, and nothing else.</p>
<p>A block is marked as <strong>possessed</strong> only when a whole fresh draw is answered rightly — not most of it, all of it. This is deliberate, and it is not severity for its own sake. A man who can name the fourth eight times in ten cannot name the fourth; he can guess well. The art is small enough to be had entire, and there is no reason to settle for less. There is no penalty for a poor draw, no timer, and no limit on attempts. The counter in the corner shows how many blocks stand possessed.</p>
<p>Where a question asks for a ratio, type it as <code>4:3</code> or <code>4/3</code>; it will be reduced before it is compared, so <code>8:6</code> is accepted too. Where it asks for a number, type the number.</p>

<h4 class="sec">The order to take them in</h4>
<div class="era">
  <b>E1 · E2</b><span>the ear — hearing the concords, and judging concord from discord</span>
  <b>E3 · E4</b><span>the hand and the reckoning — length against pitch, and the arithmetic of intervals</span>
  <b>E5 · E6</b><span>the arithmetic beneath — kinds of ratio, and the means</span>
  <b>E7</b><span>the work itself — building the diapason</span>
  <b>E8</b><span>the judgement — telling one science from another</span>
  <b>E9</b><span>the examination — a mixed draw from all of them</span>
  <b>E10 · E11</b><span>the ear again, further out: the tetrachord divided six ways, and a line heard against a held sound. These belong to <span class="xref" data-ch="east"></span> and should wait until you have read it.</span>
</div>
<p>Take them in that order the first time. Afterwards, return to whichever has gone cold. A habit that is not used is not kept, and this is as true of harmonics as of Latin.</p>
<div class="why-block">
  <h4>Why any of this is worth doing</h4>
  <p>Because the liberal art is <em>ordered to knowing</em> <span class="xref" data-to="lib-1"></span>, and knowing is a state of a man, not a state of a book. Boethius’s <span class="latin">musicus</span> is the one who <em>judges</em>; judging is an act; and no one performs an act well who has not performed it often. The exercises are not a test of whether you read carefully. They are the means by which reading becomes possession.</p>
</div>
`,
  sources: "Aquinas, ST I-II q.49–55 (habitus, and that habits are generated by acts); Boethius, De inst. mus. I.34."
},

{
  id: "ex-ear",
  ch: "ex",
  n: "E1",
  title: "E1 · Hearing the concords",
  drill: "ear",
  html: `
<p>Two sounds are given. Say which interval they make: the unison, the diapason, the diapente, the diatessaron, or the tone. Sound them together and in succession as often as you like before answering.</p>
<p>If you are beginning, expect the diapason to be easy, the tone to be easy, and the fifth against the fourth to be hard. That is the right order of difficulty, and the fifth against the fourth is the discrimination this whole block exists to give you. Go back to the <strong>String</strong> at the top of the page whenever you want to hear a ratio you are sure of.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because a middle science takes its <em>subject</em> from the senses. Aristotle states the principle without softening it: if a sense is lacking, some knowledge must be lacking too. The subject of harmonics is sounding pitch <em>as heard</em>, and a man whose ear cannot tell a fourth from a fifth does not have the subject of this science in front of him. He has a page about it.</p>
  <p>Boethius rules that the true <span class="latin">musicus</span> is the one who judges. Judgement here is not a feeling about music; it is the act of saying <em>what this is</em>. This block is where that act is trained. It does not make the ear the master — the ratio remains the cause, and reason remains the judge. It makes the ear a fit instrument, so that when reason judges, it has something to judge.</p>
</div>
`,
  sources: "Aristotle, Posterior Analytics I.18 (81a38); Aquinas, ST I q.84 a.6; Ptolemy, Harmonics I.1–2; Boethius, De inst. mus. I.9, I.34."
},

{
  id: "ex-judge",
  ch: "ex",
  n: "E2",
  title: "E2 · Concord and discord",
  drill: "judge",
  html: `
<p>Two sounds are given together. Do they blend into one richer sound, or do they remain two and stand apart? Judge <em>before</em> the ratio is shown to you. That order is the whole point of the exercise.</p>
<p>The concords of this art are the multiple and the first two superparticular ratios and what is compounded of them: 2:1, 3:2, 4:3, and also 4:1 and 3:1. The rest of what you will hear here — the tone, the leimma, the ditone, the semiditone — are lawful intervals of the art and necessary steps in the scale, and not concords.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because concord and discord is the <em>first</em> distinction of the art, and because Augustine defines music as <span class="latin">scientia bene modulandi</span> — the science of measuring well. To measure well you must first be able to notice that a measure has been well or ill taken. That noticing comes before every ratio in this course.</p>
  <p>Judging before the number is shown is not a game. It keeps the two criteria genuinely independent, so that their agreement means something. If you look at the ratio first and then decide what you hear, you have proved nothing, and you have taught yourself a bad habit that will follow you out of this subject. Ptolemy’s rule is that sense and reason must correct one another; two witnesses who have conferred beforehand are one witness.</p>
</div>
<div class="remark">
  <h4>The hard cases, which are not scored</h4>
  <p>Two intervals in this art are genuinely disputed, and it would be dishonest to grade you on them. The ditone 81:64 and the just third 5:4 both sound tolerably well to a modern ear trained on later music; the Pythagoreans admitted neither as a concord, and Zarlino admitted both. Hear them again here, and notice that your own ear is not a neutral instrument — it has been formed by four centuries of music the Greeks never heard. That is worth knowing about yourself before you appeal to it.</p>
  <div class="widget" data-kind="compare" data-title="The disputed third" data-one="81:64" data-one-name="Ditone, 81:64 — Pythagorean" data-two="5:4" data-two-name="Just major third, 5:4 — admitted by Zarlino"></div>
</div>
`,
  sources: "Augustine, De musica I.2; Boethius, De inst. mus. I.7–8, I.16; Ptolemy, Harmonics I.1–2; Zarlino, Le istitutioni harmoniche (1558)."
},

{
  id: "ex-length",
  ch: "ex",
  n: "E3",
  title: "E3 · Length and pitch",
  drill: "length",
  html: `
<p>These questions run in both directions. Given a stopping-place on the string, name the interval; given an interval, find the stopping-place. Some ask for a ratio, some are a choice.</p>
<p>The rule under all of them is one sentence: <strong>the ratio of the pitches is the ratio of the lengths, inverted.</strong> Shorter length, higher pitch. If you find yourself computing it each time rather than seeing it, you have not finished this block.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because this reciprocal is the hinge on which the whole art turns, and it is the single place where a beginner most often goes wrong. Harmonics is a <em>middle</em> science: a physical subject with mathematical middle terms <span class="xref" data-to="i-2"></span>. The physical subject is a length of sounding body; the mathematical middle term is a ratio; and the passage between them is this inversion. A man who has to stop and work it out every time has the two halves of the science lying side by side. A man in whom it is automatic has the science.</p>
  <p>There is a second reason. Working in lengths keeps you honest about what compounding is. Two fifths are not “two thirds and then another two thirds of what is left”; they are two thirds <em>of</em> two thirds. Ratios multiply. Inches do not.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.10–11, IV.5; Nicomachus, Manual of Harmonics 6; Euclid, Sectio canonis."
},

{
  id: "ex-arith",
  ch: "ex",
  n: "E4",
  title: "E4 · The arithmetic of intervals",
  drill: "arith",
  html: `
<p>Compound the intervals named, or take one away from another, and give the ratio that results. Type it as <code>4:3</code> or <code>4/3</code>. You may work it on paper; you should, at first.</p>
<p>Compounding is multiplying. Taking away is dividing — which is multiplying by the ratio inverted. There is nothing else in this block, and there is nothing else in the arithmetic of this art.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because this is the <span class="latin">opus</span>. St. Thomas says the liberal arts are called arts because they have a work which is <em>immediately of reason itself</em> — to construct a syllogism, to number, to measure, to form melodies <span class="xref" data-to="lib-1"></span>. Here is that work, in the only form the art has. When you compute that a fifth less a fourth leaves 9:8, you are not preparing to do the art later. You are doing it.</p>
  <p>And this is where the art’s claim to be a <em>science</em> rather than a collection of observations stands or falls. That a fifth and a fourth make a diapason is not something anyone noticed and wrote down. It is <em>demonstrated</em>: (3:2) × (4:3) = 2:1, and it could not have been otherwise. Until you can produce such a demonstration yourself, without help, you are taking the art on authority — which is a fine way to begin and a poor place to stop.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.16–18, II; Euclid, Sectio canonis; Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3."
},

{
  id: "ex-kinds",
  ch: "ex",
  n: "E5",
  title: "E5 · The kinds of ratio",
  drill: "kinds",
  html: `
<p>Classify each ratio by its kind, and where asked give its proper Latin name. The five kinds and their names are set out in <span class="xref" data-to="arith-1"></span>; keep that lesson open beside you the first time through, and closed the second.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because without it, the central claim of the art is a phrase and not a demonstration. “The first concords are 2:1, 3:2 and 4:3” means: <em>the first multiple, and the first two superparticulars</em>. If you do not have the classification, you cannot say what <em>first</em> means, and you are simply repeating what Boethius told you.</p>
  <p>Boethius wrote the <span class="latin">De institutione arithmetica</span> before the <span class="latin">De institutione musica</span> and presupposed it throughout, and St. Thomas keeps the same order: arithmetic is prior to music as geometry is prior to astronomy. This block is where that priority stops being a diagram of the curriculum and becomes something in you.</p>
  <p>The Latin is part of the exercise, not decoration. <span class="latin">Sesquialter</span> says “a half again”; the name states the ratio. A man who has the names has the arithmetic in his mouth, and reads the tradition’s own books without a glossary.</p>
</div>
`,
  sources: "Boethius, De institutione arithmetica I.21–32; De inst. mus. II.7; Nicomachus, Introduction to Arithmetic I.17–23; Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3."
},

{
  id: "ex-means",
  ch: "ex",
  n: "E6",
  title: "E6 · The means, and the musical proportion",
  drill: "means",
  html: `
<p>Compute the means asked for, and name the intervals standing between the terms of 6 : 8 : 9 : 12. Where the answer is a number, type the number; where it is an interval, type the ratio.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because the musical proportion is the art in one figure, and because possessing it changes what the scale looks like to you. Four numbers; the two inner ones are the harmonic and the arithmetic mean of the two outer; and out of them come the diapason, both fifths, both fourths, and the tone. Nothing was chosen for its sound. The sound came after.</p>
  <p>That is the difference between an art that <em>demonstrates</em> and a collection of preferences, and it is exactly what a liberal art is supposed to give you: not the fact, but the fact <em>through its cause</em>. When Plato complains in the <em>Republic</em> that the Pythagoreans seek numbers only in the concords they happen to hear and never ascend to problems <span class="xref" data-to="lib-2"></span>, this is the sort of ascent he means — from “these sound well” to “these are the means of the extremes, and therefore they sound well.”</p>
  <p>The block also contains a proof you will need twice more: that no superparticular ratio can be halved. It is why the leimma is a remnant and not a half, and why every European instrument of fixed pitch has been a compromise for five hundred years.</p>
</div>
`,
  sources: "Boethius, De inst. arith. II.40–54; De inst. mus. II.12–17, III.1, III.11; Nicomachus, Introduction to Arithmetic II.29; Plato, Republic VII 531c."
},

{
  id: "ex-scale",
  ch: "ex",
  n: "E7",
  title: "E7 · Building the diapason",
  drill: "scale",
  html: `
<p>Construct the scale rather than recall it. Compute the remnant; verify that the parts fill the whole; say why the eight sounds are eight.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because the scale is the <span class="latin">opus</span> of this art, and because we know a thing best when we can produce it from its causes. Everything before this block has been preparation for one act: taking 2:1, 3:2, 4:3 and their difference, and building out of them, with nothing else, an ordered path from a sound to its double.</p>
  <p>When you have done that — not read that it can be done, but done it — you have made the thing the quadrivium means by <span class="latin">musica</span>. It is a work of reason, it remains in you, and no one can take it away or wear it out. That is what <span class="xref" data-to="lib-1"></span> was describing in the abstract.</p>
  <p>One warning, which is really an invitation. Having built the diatonic filling, you will be tempted to think the scale <em>is</em> the diatonic. It is not: it is one genus among three <span class="xref" data-to="sys-2"></span>, and one filling among many that later ages tried. What is fixed is the fourth and the diapason. What is chosen is the filling. Knowing which is which is most of the wisdom this art has to give.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.21–27, II; Aristotle, Posterior Analytics I.2 (we know a thing when we know it through its cause)."
},

{
  id: "ex-science",
  ch: "ex",
  n: "E8",
  title: "E8 · Which science is this?",
  drill: "science",
  html: `
<p>A statement is given. Say which study it belongs to: the liberal art of music, arithmetic, natural philosophy, moral and political science, the fine art of music, or sacred doctrine.</p>
<p>Some are easy. Several are not, and the ones that are not are the ones worth the trouble.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because this is the distinctively <em>liberal</em> skill, and the one that will still be doing you good long after you have forgotten what a leimma is.</p>
  <p>To possess a science is to know its subject, its principles, and its <strong>boundaries</strong>. Aristotle makes the mark of an educated man the ability to look for that degree of precision in each kind of subject which the nature of the subject admits, and no more; and almost every confusion about music, ancient or modern, is a confusion of sciences. A man says “music is mathematical” when he means harmonics, and someone answers “no, music is emotional” meaning the fine art, and the two of them argue for an hour about nothing. A man reads that the heavens make music and cannot tell whether he has been given physics, poetry, or theology.</p>
  <p>St. Thomas is the master of this discipline, and this course has been practising it in front of you the whole way: harmonics is a middle science <span class="xref" data-to="i-2"></span>; the ordering of song to devotion is moral <span class="xref" data-to="vi-1"></span>; the silence of the spheres is settled in natural philosophy; the transcendental beauty of due proportion is settled higher up. Learning to make those cuts quickly and without heat is what a liberal education is chiefly for. This block is a small gymnasium for it.</p>
</div>
`,
  sources: "Aristotle, Nicomachean Ethics I.3 and De partibus animalium I.1 (the educated man and the precision proper to each subject); Aquinas, Super Boethium De Trinitate q.5–6; In Phys. II lect. 3; ST I q.5 a.4, I q.39 a.8, II-II q.91."
},

{
  id: "ex-exam",
  ch: "ex",
  n: "E9",
  title: "E9 · The examination",
  drill: "exam",
  html: `
<p>Fourteen items, drawn from every block, in no announced order. Ear, reckoning, arithmetic, construction, and judgement together.</p>
<p>Do not attempt this until each of the eight stands possessed. Then attempt it, and expect to fail it once or twice: the skills are easy enough one at a time and harder when you do not know which is coming. That is not a trick. It is the condition under which you will actually use them.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because an art is one habit and not eight. Boethius’s <span class="latin">musicus</span> is not a man with a good ear who also happens to do arithmetic; he is a man in whom the ear and the reckoning are a single competence, so that hearing a fifth and knowing it to be 3:2 are one act and not two.</p>
  <p>When you can pass a mixed draw of these, you may say without exaggeration that you possess the liberal art of music as the quadrivium understood it: its subject, its causes, its first concords, its step, its work, and its place among the sciences. It is a small art. It will have taken you some weeks. It is the real thing, entire, and there are not many things of which you can say that.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.34; Aquinas, ST I-II q.49–55."
},

{
  id: "ex-eastgen",
  ch: "ex",
  n: "E10",
  title: "E10 · The tetrachord divided",
  drill: "eastgen",
  html: `
<p>Four sounds are given, filling one fourth. Say how the fourth is divided. The six divisions are set out in <span class="xref" data-to="east-4"></span> and <span class="xref" data-to="sys-2"></span>; keep them open the first time through.</p>
<p>The two chromatics are the easiest once you have heard them twice. The hard part is telling the Pythagorean diatonic from the Byzantine enharmonic, since both are a small step and two large ones — and differ only in <em>where the small step falls</em>. That discrimination is the reason this block exists.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because the diatonic filling you built in <span class="xref" data-to="v-2"></span> is one division among many, and a man who has heard only one does not know that it was a choice. <span class="xref" data-to="sys-2"></span> made the argument; this makes it a fact in your ear. What is fixed is the fourth, which the arithmetic gives. What varies is the filling, which it does not.</p>
  <p>There is a second and sharper reason. Two of these six divisions are ancient and close on 498.04¢, the true 4:3 you proved for yourself. Four of them are modern and close on 500¢ — a fourth already two cents wide before anyone sings. If you can hear which is which, you have caught a tempered interval in a tradition that never went through <span class="xref" data-to="vii-5"></span> at all. A measure is not the same thing as a name.</p>
</div>
`,
  sources: "Boethius, De inst. mus. I.21–23 for the ancient genera; the Patriarchal Musical Committee of 1881 for the four modern Byzantine divisions, as revised from Chrysanthos, Theoretikon Mega (1832)."
},

{
  id: "ex-ison",
  ch: "ex",
  n: "E11",
  title: "E11 · The held sound",
  drill: "ison",
  html: `
<p>A line moves above a sound that is held. Say where the line comes to rest against it — on it, a tone above, a fourth above, a fifth above — and, when asked, whether the held sound itself moved.</p>
<p>The lines are generated for the exercise and are not chant. What is not invented is the relation you are being asked to hear.</p>
<div class="why-block">
  <h4>Why this block, and what it is for</h4>
  <p>Because every interval you have learned so far, you have heard <em>as a pair</em>, sounded deliberately for you to judge. That is the laboratory case. Here the interval has to be picked out of a moving line, against a sound that has been going on so long you have stopped noticing it. That is the ordinary case, and it is much harder.</p>
  <p>It is also the nearest this course comes to what the tradition itself does. A drone is not harmony and it is not accompaniment; it is a <em>measure</em>, sounded. Against a fixed pitch every degree of a melody declares its relation continuously, and a singer who has that in his ear is doing, by habit and without arithmetic, something close to what you have been doing with a monochord and a ratio. Boethius would not have called him a <span class="latin">musicus</span> <span class="xref" data-to="vi-2"></span>, and Boethius would have been right. But the two of them are measuring the same thing.</p>
</div>
`,
  sources: "On the isokratema and its documentation: Martin Crusius, Turcograecia (1584); Dimitri Conomos; Alexander Lingas. The exercise itself is a demonstration of texture, not a transcription."
},

{
  id: "vii-1",
  ch: "VII",
  title: "Two musics: the science and the practice",
  html: `
<p>You now possess the art as Boethius handed it on. What follows is not a new set of principles. It is a road: the road by which Europe went from this art to the thing we now call <em>classical music</em>. We walk it for three reasons. To see what later ages added. To see what they gave up, and why. And to see, at the end, which of your six lines still stand.</p>
<div class="era">
  <b>c. 1030</b><span>Guido of Arezzo: pitch is written down</span>
  <b>c. 900–1330</b><span>many voices at once, and time measured</span>
  <b>1300–1558</b><span>the third admitted; the bound of concord widened</span>
  <b>1523–1850</b><span>temperament: the ratios deliberately bent</span>
  <b>1636–1737</b><span>the chord, and a new cause for concord</span>
  <b>1547–1830</b><span>key, and an architecture in time</span>
</div>
<p>Begin with the split. By the year 1000, <span class="latin">musica</span> in the schools meant Boethius: the quadrivial science you have just learned. But the men who actually sang had a different difficulty. The chant of the Latin Church had grown into an enormous repertory, and it was carried in the memory. How do you teach it, correct it, or send it four hundred miles without error?</p>
<p>Around 1030 Guido of Arezzo answered. He gave the singers lines of fixed pitch — a staff, with letters to fix where the semitone falls — and the syllables <em>ut re mi fa sol la</em>, taken from a hymn to St. John whose lines happen to begin one step higher each time. He did not invent notation out of nothing; heighted neumes were already in use, and he presents himself as improving what he found. The hexachord system that later theorists built on his syllables, with its mutations and its famous hand, is their elaboration, not his.</p>
<p>Still, the hinge is here. Once pitch is written, sung music has a <em>record</em>. A record can be copied, compared, criticized, and studied. Everything in this chapter depends on it.</p>
<p>The medieval schools soon named the two things they now had. <span class="latin">Musica speculativa</span> is the science — Boethius, ratio, the monochord, the quadrivium. <span class="latin">Musica practica</span> is the singer’s art. Boethius had already ruled that the <span class="latin">musicus</span> is the one who judges, not the one who performs, and the medievals kept the honour with the judge. But they gave the work to the singer. Over the next four hundred years the two drifted apart.</p>
<div class="remark">
  <h4>Why this is not yet a decline</h4>
  <p>The science was not refuted. It stopped being asked the questions that interested the men doing the work. A middle science answers what its principles can reach; the first ratios can tell you what a fifth is, and cannot tell you how two independent voices should move against one another, or how long this syllable should be held. Silence is not error. But a discipline that is silent for four centuries while its subject matter flourishes will eventually find that someone else has taken the subject matter.</p>
</div>
`,
  sources: "Guido of Arezzo, Prologus in antiphonarium and Epistola de ignoto cantu (c. 1028–1032); Boethius, De inst. mus. I.34. The speculativa / practica division as a medieval commonplace. Rens Bod, World of Patterns, ch. 4.4, for the rapidity of change after 900.",
  check: {
    q: "What did Guido’s staff change?",
    options: [
      "It proved that Boethius had the ratios wrong.",
      "It gave sung music a written record, so that a practice could be transmitted, compared, and reasoned about.",
      "It replaced the monochord as the instrument of the liberal art."
    ],
    answer: 1,
    why: "Notation is a technology of memory, not a refutation of harmonics. But it is what makes a written, criticizable practice possible — and so it is what makes the rest of this chapter possible."
  }
},

{
  id: "vii-2",
  ch: "VII",
  title: "Many voices, and measured time",
  html: `
<p>Near the end of the ninth century an anonymous treatise appears, the <span class="latin">Musica enchiriadis</span> — once ascribed to Hucbald, now to no one in particular. It is the first surviving text that gives <em>rules</em> for singing two lines together. A given chant is doubled at the fifth or the fourth throughout (parallel <span class="latin">organum</span>); or the added voice begins in unison, opens out, and bends back, so as to avoid the harsh interval that strict parallel motion would produce.</p>
<p>Notice what has happened to the art’s object. Classical harmonics considered <em>an</em> interval, and then a scale. Here the object is a <em>succession of simultaneities</em>: not what a fifth is, but how a whole line of them may lawfully move. And notice what kind of rules these are. They are not demonstrations from ratio. They are a grammar — a system saying which combinations are admissible, as a grammarian’s rules say which strings of words are Latin. Given a chant and these rules, you can generate every organum of that style; you cannot derive from them why 3:2 is a concord. That was already known, and assumed.</p>
<div class="remark">
  <h4>Two kinds of principle</h4>
  <p>It is worth having the distinction clearly. Some principles <em>derive</em> their patterns: from 2:1, 3:2, 4:3 and the operations of arithmetic, the diatonic scale follows necessarily. Other principles only <em>restrict</em>: they say which things are possible or admissible, without generating any particular one. The first ratios are of the first kind. The rules of counterpoint are of the second. Most of what has been called music theory since the tenth century is of the second kind. This is not a criticism of it. It is a statement of what sort of knowledge it is.</p>
</div>
<p>Then the voices multiply — Leoninus and Perotinus at Notre Dame, roughly 1160 to 1230 — and a second difficulty becomes unavoidable. If three men are singing different lines at once, the length of every note must be written, not merely its height. Franco of Cologne’s <span class="latin">Ars cantus mensurabilis</span>, about 1280, codifies the answer: the <em>shape</em> of a note carries its duration. The system is still ternary and still context-dependent, and Franco is gathering up practices already in motion rather than inventing them alone. But time is now on the page.</p>
<p>This deserves a moment. Augustine’s <span class="latin">De musica</span> spent five of its six books on the numbering of time, and we set them aside in <span class="xref" data-to="i-3"></span> as belonging to the art in a wide sense. Here that half of the art at last receives an instrument. The <span class="latin">ars nova</span> of the 1320s — texts circulated under Philippe de Vitry’s name, and more securely the work of Johannes de Muris — admits duple as well as triple division, and the aged Jacobus of Liège writes his <span class="latin">Speculum musicae</span> in defence of the ancients against the moderns. The complaint is not that the new music is out of tune. It is that it is restless, and that the old proportions of time have been broken.</p>
<p><strong>What was gained:</strong> a real extension of the art into measured time, and a written polyphony that no other civilisation developed to this degree. <strong>What it cost:</strong> from here forward the working rules of music are the grammar of a practice — historical, revisable, and different in 1400 from 1300. The first concords are not like that.</p>
`,
  sources: "Musica enchiriadis (anon., c. 850–900); Johannes Cotto, De musica (c. 1100); Franco of Cologne, Ars cantus mensurabilis (c. 1280); Johannes de Muris, Notitia artis musicae (1321); Jacobus of Liège, Speculum musicae (c. 1330s). On the Vitry attribution, Sarah Fuller, “A Phantom Treatise of the Fourteenth Century?” (1985–86). The contrast of deriving and restricting principles follows Bod, World of Patterns, ch. 3.6 and 4.4.",
  check: {
    q: "The rules of organum stand to the ratio 3:2 as",
    options: [
      "a demonstration stands to its conclusion — the rules prove why the fifth is a concord.",
      "a grammar stands to a language: they say which combinations are admissible, taking the concords as already given.",
      "a refutation stands to what it refutes."
    ],
    answer: 1,
    why: "Both are real knowledge, and they are not the same sort. The ratios generate their patterns; the rules of counterpoint restrict what may be written. Confusing the two is how a later reader comes to think a harmony textbook is a science of nature."
  }
},

{
  id: "vii-3",
  ch: "VII",
  title: "The third comes in",
  html: `
<p><span class="xref" data-to="v-1"></span> left a question standing: two tones compounded give the ditone 81:64, but the interval singers seem to want is the gentler 5:4. We said the dispute was real, that Thomas had not closed it, and that a first-principles course could leave it open. The tradition itself did not leave it open. It took about two hundred years to answer, and the answer came from practice first.</p>
<p>Around 1300 the English monk Walter Odington observes, in his <span class="latin">Summa de speculatione musicae</span>, that the ditone 81:64 and the semiditone 32:27 are close neighbours to 5:4 and 6:5 — and that singers, by the subtlety of the voice, draw them into a sweet blend. That is: the ratio on the monochord and the interval in the choir are not the same, and the choir is doing something the theory has not accounted for.</p>
<div class="widget" data-kind="compare" data-title="The third, two ways" data-one="81:64" data-one-name="Pythagorean ditone (two tones, 81:64)" data-two="5:4" data-two-name="Just major third (5:4)"></div>
<p>Hear them against the same low sound. The ditone is not <em>wrong</em>; it is the exact compound of two tones, and it is bright and hard. The 5:4 settles. They stand about a tenth of a tone apart — the next lesson gives that gap its name — and every European ear from the fifteenth century onward has preferred the second.</p>
<p>Practice moves first. In 1441 Martin le Franc praises a <span class="latin">contenance angloise</span> and names John Dunstaple as its source, saying that Du Fay and Binchois took up his manner. Le Franc does not say what he meant; the reading that he meant a full, sweet, third-and-sixth sonority is the received one, supplied by later scholars, and it fits the music.</p>
<p>Theory follows. Bartolomeo Ramis de Pareia, teaching at Bologna, publishes his <span class="latin">Musica practica</span> in 1482 with a monochord division that yields the thirds as 5:4 and 6:5 outright — breaking the Boethian restriction to the first four numbers. Nicolaus Burtius attacks him in print in 1487, Franchino Gaffurio joins the assault, and Ramis’s pupil Spataro carries the quarrel on for another thirty years.</p>
<p>Then Gioseffo Zarlino, chapel master of St. Mark’s in Venice, settles it for his century. In <span class="latin">Le istitutioni harmoniche</span> (1558) he sets the bound of consonance at the <em>senario</em>, the first six numbers — six being the first perfect number, since 1+2+3 is both its sum of parts and its product. Within the senario the thirds and the major sixth are concords by right. And Zarlino does not present this as an innovation: he identifies the resulting tuning with the syntonic diatonic of <em>Ptolemy</em>, the second authority the art always had.</p>
<div class="remark">
  <h4>How the question closed</h4>
  <p>This is worth seeing clearly, because it is a vindication of the method <span class="xref" data-to="v-3"></span> recommended and not of either party to the old quarrel. Reason was not overruled by the ear. The ear was heard, and then a <em>different arithmetic</em> was given for what it heard — a bound at six rather than at four, argued from the nature of number. That is Ptolemy’s method: sense and reason correcting one another, neither despising the other. And the strain shows honestly: the senario is awkward about the minor sixth, 8:5, which needs an eight; and by 1571, in the <span class="latin">Dimostrationi</span>, Zarlino himself recommends a tempered tuning for actual keyboards rather than his own theoretical one. Why he had to is the next lesson.</p>
</div>
`,
  sources: "Walter Odington, Summa de speculatione musicae (c. 1300); Martin le Franc, Le champion des dames (1441–42); Ramis de Pareia, Musica practica (1482); Burtius, Musices opusculum (1487); Gaffurio, Practica musicae (1496); Zarlino, Le istitutioni harmoniche (1558) and Dimostrationi harmoniche (1571); Ptolemy, Harmonics I.15 (the syntonic diatonic).",
  check: {
    q: "How was the question of the third settled?",
    options: [
      "The ear simply overruled the arithmetic, and the art gave up demonstrating.",
      "In practice first, and then by a new arithmetic: the bound of concord was argued from four to six, following Ptolemy’s method of sense and reason together.",
      "It was never settled; the ditone and the just third remain equally standard."
    ],
    answer: 1,
    why: "Zarlino does not abandon number. He proposes a different and defensible bound — the senario — for what singers had been doing for two centuries. That is what it looks like when a mathematical art is corrected rather than abandoned."
  }
},

{
  id: "vii-4",
  ch: "VII",
  title: "The comma: why no fixed instrument can be pure",
  html: `
<p>Before temperament can make sense, you need one piece of arithmetic. It belongs wholly to the old art. It uses nothing but 2:1 and 3:2, and it is a <em>theorem</em>, not a discovery of later Europe.</p>
<p>Stack twelve pure fifths. Compounding is multiplying, as <span class="xref" data-to="iv-2"></span> showed, so this is (3:2) raised to the twelfth. Now stack seven diapasons: 2 raised to the seventh. On a keyboard these two journeys are supposed to arrive at the same sound. They do not.</p>
<div class="widget" data-kind="comma" data-which="pythagorean"></div>
<p>The twelve fifths overshoot by 531441:524288 — the <em>Pythagorean comma</em>, about a ninth of a tone. Walk it, fifth by fifth, and hear where you land. Then hear the two arrivals together: that grinding is the comma.</p>
<p>Now the second one, which the last lesson made urgent. Four pure fifths, folded back into one diapason, give the ditone 81:64. The just third the singers want is 5:4, which is 80:64. They differ by 81:80 — the <em>syntonic comma</em>, about a tenth of a tone.</p>
<div class="widget" data-kind="comma" data-which="syntonic"></div>
<p>So: a fixed instrument cannot have all its fifths pure and still close its circle; and it cannot have pure fifths and pure thirds at once. Both facts, and they are facts, follow from the first two ratios of the art.</p>
<div class="remark">
  <h4>This is not a defeat for the liberal art</h4>
  <p>It is a result of it, and a clean one. The reason is that 2 and 3 are prime: no power of 3 is ever a power of 2, so no number of pure fifths will ever exactly equal some number of diapasons. Arithmetic — the art’s own middle term — establishes the impossibility. Everything the next three centuries do about tuning is a response to something Pythagorean arithmetic itself proves.</p>
  <p>Notice also who has the difficulty. A singer does not: he takes each interval as it comes and adjusts. Nor does a violinist, whose fingers are free. The difficulty belongs to instruments whose pitches must be <em>fixed in advance</em> — organ, harpsichord, fretted lute, and eventually the piano. The history of temperament is the history of what men did to keyboards, not what they did to the truth.</p>
</div>
`,
  sources: "Boethius, De inst. mus. III (the tone is not divisible into equal halves in ratio; the comma); Euclid, Sectio canonis. Syntonic comma 81:80 ≈ 21.5 cents; Pythagorean comma 531441:524288 ≈ 23.46 cents. The cent is a later logarithmic measure, used here only for comparison.",
  check: {
    q: "Why can no keyboard of twelve fixed sounds have every fifth pure?",
    options: [
      "Because the ear is not accurate enough to judge a pure fifth.",
      "Because twelve pure fifths exceed seven diapasons by the Pythagorean comma — no power of 3 is a power of 2.",
      "Because the fifth is not really 3:2, as Vincenzo Galilei showed."
    ],
    answer: 1,
    why: "The impossibility is arithmetic, and it is proved from the art’s own first ratios. It is a limit on instruments with fixed pitches, not a defect in the ratios or in the ear."
  }
},

{
  id: "vii-5",
  ch: "VII",
  title: "Temperament, and what Bach’s title means",
  html: `
<p>The response to the comma is <em>temperament</em>: deliberately mistuning certain intervals so that the unavoidable error is shared out and the instrument closes.</p>
<p>Pietro Aaron’s <span class="latin">Toscanello in musica</span> (1523) gives the first clear practical instruction — tune the major third pure and let the fifths sit a little flat. He offers no arithmetic; he describes the thing by ear, and our name for his procedure, <em>quarter-comma meantone</em>, is a later reading of it. Francisco de Salinas supplies the mathematics in 1577 and distinguishes the varieties. In quarter-comma meantone each of four fifths is narrowed by a quarter of the syntonic comma, so that four of them, less two diapasons, land exactly on the pure 5:4. The thirds are beautiful. The chain still cannot close, and one fifth is left grotesquely wide — the <em>wolf</em>. Eight good major thirds, four unusable ones. You may play in some keys and not in others.</p>
<p>Vincenzo Galilei — lutenist, controversialist, and father of Galileo — argued instead for dividing the diapason into twelve equal parts on fretted instruments, giving the 18:17 rule for placing frets. That rule is a practical approximation to an equal semitone, not a derivation of one; equal fretting was already common among lutenists. His contribution is to state it and defend it.</p>
<p>Then, so that <em>all</em> keys may be used, the <em>well temperaments</em>: Andreas Werckmeister’s <span class="latin">Musicalische Temperatur</span> (1691), and after him Neidhardt and Sorge. These are irregular. The circle closes; every key is playable; and no two keys sound quite alike, because the error is distributed unevenly.</p>
<div class="remark">
  <h4>What Bach’s title actually says</h4>
  <p>Bach’s <span class="latin">Das wohltemperirte Clavier</span> (1722) is commonly said to celebrate equal temperament. It does not. <em>Wohltemperirt</em> names a circulating but <strong>unequal</strong> tuning, in which all twenty-four keys are usable while each keeps its own colour — which is precisely what makes a journey through all twenty-four worth composing, rather than twenty-four identical exercises. Which particular temperament Bach wanted is unknown and much conjectured; the negative claim is secure. Equal temperament — every semitone the twelfth root of two — spread on the Continent from the later eighteenth century, and became the English norm only in the 1840s and 1850s, a century after Bach died. Meantone, well temperament, and equal temperament are three answers to one arithmetic problem, and Bach’s title names the second.</p>
</div>
<div class="widget" data-kind="temper"></div>
<p>Hear the three, and measure them against the two commas you now know. The Pythagorean fifth is pure and its third is hard — wide by a full syntonic comma, since it is the ditone. The meantone third is pure and its fifth is audibly narrow, by a quarter of that comma. The equal-tempered fifth is narrow by only about a twelfth of the Pythagorean comma, which almost nobody hears; its third is wide by roughly two-thirds of a syntonic comma, which is quite audible, and which you have been hearing all your life.</p>
<div class="remark">
  <h4>What is being traded</h4>
  <p>What temperament buys is <em>modulation</em>: the freedom to treat any of the twelve sounds as a home, and so to build long forms out of motion from key to key. <span class="xref" data-to="vii-7"></span> is about what was built with it. What temperament sells is the whole-number ratio itself. The equal semitone is the twelfth root of two, and that quantity is <em>irrational</em> — it is not a ratio of numbers at all, and cannot be made into one. Boethius’s art measures sound by proportions of whole numbers. The tuning of a modern piano cannot, in principle, be so measured.</p>
  <p>That is the sharpest single break between the liberal art and modern practice, and it should be stated without either alarm or apology. It was made deliberately, by men who understood the arithmetic perfectly well, as the price of something they wanted more.</p>
</div>
`,
  sources: "Pietro Aaron, Toscanello in musica (1523); Gaffurio, Practica musicae (1496) on flattening the fifth; Francisco de Salinas, De musica libri septem (1577); Vincenzo Galilei, Fronimo (1568/1584) and Dialogo (1581); Zarlino, Dimostrationi harmoniche (1571); Werckmeister, Musicalische Temperatur (1691). On the dating of equal temperament’s adoption, A. J. Ellis’s appendices to Helmholtz; the chronology is a range, not a threshold.",
  check: {
    q: "“Well-tempered,” in Bach’s title, means",
    options: [
      "equal temperament: all twelve semitones the same size.",
      "an unequal but circulating tuning, in which every key is usable and each keeps its own character.",
      "Pythagorean tuning, with every fifth pure."
    ],
    answer: 1,
    why: "Equal temperament is a later norm — Continental from the late 1700s, English from the 1840s. The whole point of composing in all twenty-four keys is that, in a well temperament, they are not interchangeable."
  }
},

{
  id: "vii-6",
  ch: "VII",
  title: "From interval to chord: the ground moves",
  html: `
<p>Zarlino had already done something quietly novel. He distinguished the major third from the minor by the way the fifth is divided — harmonically for the one, arithmetically for the other — which is to treat a three-note sonority as a single thing with a nature. Around 1600 the practice becomes universal: the <span class="latin">basso continuo</span>, a bass line with figures above it, from which a player realises <em>chords</em>. The working unit of European music is no longer the interval.</p>
<p>Then the chord acquires a physical ground, and this is where the art changes kind.</p>
<p>Marin Mersenne, in the <span class="latin">Harmonie universelle</span> (1636), reports that in one low string he can hear faint higher sounds — the octave above, the twelfth, the fifteenth, the seventeenth. He cannot explain how one string sounds five things, and says so. Joseph Sauveur, in memoirs to the Paris Academy around 1700, names them <span class="latin">sons harmoniques</span>, locates the nodes of the divided string, measures absolute frequency by counting beats, and proposes that the new study be called <em>acoustique</em>.</p>
<p>Jean-Philippe Rameau’s <span class="latin">Traité de l’harmonie</span> (1722) makes the chord the unit outright: the inversions of a chord are one chord; beneath the written bass there stands a <span class="latin">basse fondamentale</span>, the real root, whose motion is what harmony consists in. In 1722 Rameau still argues in the old manner, from divisions of a string and from number. Only afterwards does he learn of Sauveur’s partials — and from the <span class="latin">Nouveau système</span> (1726) through the <span class="latin">Génération harmonique</span> (1737) his whole system is re-founded on the <span class="latin">corps sonore</span>, the resonating body. The major triad is now not a construction but a gift of nature: one sounding body already sounds it.</p>
<p>D’Alembert popularised the system in 1752. Leonhard Euler made the last great attempt to keep an arithmetic ground: his <span class="latin">Tentamen novae theoriae musicae</span> (1739) ranks intervals by a <span class="latin">gradus suavitatis</span> computed from the prime factors of the ratio. It is ingenious, and Euler himself allowed that it agreed poorly with what musicians did.</p>
<div class="dl">
  <dt>Boethius</dt><dd>subject: sounding pitch. Middle term: <strong>number</strong>. Therefore a middle science — arithmetic applied to sound.</dd>
  <dt>Rameau</dt><dd>subject: sounding pitch. Middle term: <strong>the resonance of natural bodies</strong>. Therefore a part of natural philosophy.</dd>
</div>
<div class="remark">
  <h4>Where the art went, on Thomas’s map</h4>
  <p>Not down. Sideways. <span class="xref" data-to="i-2"></span> defined a middle science as one whose subject is physical and whose middle terms are mathematical; that is why harmonics sat beside optics and astronomy in the quadrivium. Once the cause of concord is the <span class="latin">corps sonore</span>, the demonstration runs through the nature of a vibrating body — and a science that demonstrates through the natures of bodies is physics. Good physics, and in the nineteenth century very good physics. But it is no longer arithmetic applied to sound; it is sound explained by the natures of things that sound.</p>
  <p>The quadrivial <span class="latin">musica</span> was not refuted. Its middle term was replaced, and the classification went with the middle term. This is the transformation a modern reader is least likely to notice, because nothing in a harmony textbook announces it. The textbook simply begins with the overtone series, as though that had always been the beginning.</p>
</div>
`,
  sources: "Zarlino, Le istitutioni harmoniche (1558) on harmonic and arithmetic division; Mersenne, Harmonie universelle (1636); Sauveur, memoirs to the Académie des Sciences (1700–1701); Rameau, Traité de l’harmonie (1722), Nouveau système (1726), Génération harmonique (1737); d’Alembert, Élémens de musique (1752); Euler, Tentamen novae theoriae musicae (1739). On Rameau’s ignorance of Sauveur in 1722 and the later re-grounding, Thomas Christensen, Rameau and Musical Thought in the Enlightenment.",
  check: {
    q: "What changed when Rameau re-founded harmony on the corps sonore?",
    options: [
      "The subject: the art stopped being about sound.",
      "The middle term: number gave way to the resonance of natural bodies, so the demonstration became physical rather than arithmetical.",
      "Nothing of consequence: it was the same science with new vocabulary."
    ],
    answer: 1,
    why: "A middle science is defined by its middle terms. Change them from arithmetic to the natures of vibrating bodies and you have changed which science you are doing — even though the subject, sounding pitch, is the same as ever."
  }
},

{
  id: "vii-7",
  ch: "VII",
  title: "Key: an architecture in time",
  html: `
<p>One piece remains. Heinrich Glarean’s <span class="latin">Dodecachordon</span> (1547) added the Ionian and the Aeolian to the eight church modes, making twelve — and refused a thirteenth pair on B as unusable. He thought he was restoring an ancient system. Within a century and a half, his twelve had collapsed into two: what we call major and minor.</p>
<p>Now put the three developments together. Temperament makes each of the twelve sounds a possible home. Figured bass makes the chord the unit. The modes reduce to two. What comes out is what the nineteenth century named <em>tonality</em>: a key is not a scale but a <em>hierarchy</em> — a tonic; a dominant that demands the tonic; a subdominant that prepares it — in which chords have <em>functions</em>, which is to say that they point somewhere.</p>
<p>What this buys is form. If a listener can hear that we have left home and not yet returned, a composer can build a structure whose real subject is departure and return, and can sustain it for twenty minutes without a word of text. That is what sonata form is: a drama of keys, in which the second key is a genuine conflict and the return is a genuine resolution. The same principle carries a Haydn quartet, a Mozart concerto, a Beethoven symphony, a Schubert sonata. When people say <em>classical music</em>, this is very largely what they mean — the music of the period in which key was structural.</p>
<div class="remark">
  <h4>An achievement the ancients did not have</h4>
  <p>The Greeks and the medievals had melody, mode, measured time, and after 900 a written polyphony. They did not have an art of large-scale intelligible form in sound. This is a real addition to human making, and a liberal education has no reason to be grudging about it. Whoever tells you that everything after Boethius is decline has not accounted for the late Beethoven quartets.</p>
  <p>But be exact about what <em>kind</em> of knowledge the rules of this art are. Functional harmony is not demonstrated from 2:1, 3:2, and 4:3. It is the grammar of a style — a very great style, which lasted about two hundred years and then dissolved. The first concords are not a style. They were the same for Nicomachus and they are the same for you, and when this style dissolved they did not dissolve with it.</p>
</div>
`,
  sources: "Glarean, Dodecachordon (1547); Rameau, Traité de l’harmonie (1722) for the fundamental bass; the term “tonality” (tonalité) is Fétis’s, 1840s. Bod, World of Patterns, on style as a pattern describable by rules and locatable in time.",
  check: {
    q: "Tonality, as the eighteenth and nineteenth centuries practised it, rests on",
    options: [
      "a new discovery about the first concords, unknown to Boethius.",
      "temperament, the chord as unit, and the reduction of the modes to two — together giving a hierarchy in which motion away from a key and back can carry a long form.",
      "the abandonment of the diapason as the frame of the scale."
    ],
    answer: 1,
    why: "Nothing new was found out about 2:1 or 3:2. Three earlier changes were combined, and the combination made a new kind of large-scale form possible."
  }
},

{
  id: "vii-8",
  ch: "VII",
  title: "What was gained, what was lost, what still stands",
  html: `
<p>Take the six lines from <span class="xref" data-to="vi-2"></span> and put each of them to the road we have just walked.</p>
<div class="dl">
  <dt>Subject</dt><dd><strong>Unchanged.</strong> Sounding pitch, as heard. Odington, Zarlino, Vincenzo Galilei, Rameau — every one of them began where you began, at the ear.</dd>
  <dt>Cause</dt><dd><strong>Divided.</strong> Where there was one cause, ratio, there are now three candidates: the resonance of bodies, the response of the ear, and the conventions of a style. Three different sciences, and not one of them is a middle science.</dd>
  <dt>First concords</dt><dd><strong>Standing, and indispensable.</strong> Not one tuning in this whole story abandons 2:1, 3:2, 4:3. Temperament is <em>defined by its deviation from them</em>. You cannot state what a piano tuner is doing without 3:2 in hand.</dd>
  <dt>The step</dt><dd><strong>Replaced.</strong> The tone was 9:8. The keyboard’s whole step is the sixth root of two, and no ratio of whole numbers.</dd>
  <dt>The work</dt><dd><strong>Superseded.</strong> The <span class="latin">opus</span> of harmonics was the scale. The work of the modern art is the composition.</dd>
  <dt>Kind of science</dt><dd><strong>Ended, and relocated.</strong> <span class="latin">Musica</span> kept its statutory place in the arts course into the seventeenth century, increasingly as a Boethian formality. The live mathematical work moved to the academies — Mersenne, Sauveur, Euler — and the nineteenth-century chair of music teaches history, criticism, and composition.</dd>
</div>
<p>Now be exact about what was <em>refuted</em>, because a tradition is not honoured by defending what is false. Three things go:</p>
<p><strong>The hammers in the smithy.</strong> Nicomachus’s story, which <span class="xref" data-to="iii-1"></span> already flagged as doubtful metallurgy. The pitch of a struck solid depends on its dimensions and its material, not on its weight in the way the tale requires.</p>
<p><strong>The claim that one set of proportions governs every quantity.</strong> The sources said Pythagoras found 2:1, 3:2, 4:3 in lengths <em>and</em> in hanging weights alike. Vincenzo Galilei hung the weights and found otherwise: to raise a string by a diapason you need four times the tension, not twice, because pitch varies as the square root of the tension. That is a genuine refutation of a claim the tradition transmitted — and Vincenzo, being a humanist, concluded that Pythagoras must have known the truth and been garbled in transmission.</p>
<p><strong>Audible music of the spheres</strong> — which Aristotle and St. Thomas had already denied, as <span class="xref" data-to="vi-1"></span> showed. Here the tradition corrected itself from within, long before.</p>
<p>Everything else on the list was not refuted. It was <em>left behind</em>, because the questions changed. That is a different thing, and the difference is the whole point of this chapter.</p>
<div class="remark">
  <h4>A debt the modern reader will not guess</h4>
  <p>The manner of proceeding that made modern natural science — state a principle, contrive an experiment, let the result correct the principle — was practised in the study of music before it was practised in the study of the heavens. Vincenzo Galilei filled a cellar in Pisa with lutes and strings of every length, material, and thickness, and hung weights on them to test a claim of Boethius. His son grew up in that cellar. Kepler learned the same habit from philology; Galileo learned it from his father’s monochords. If the liberal art of music wants a defence in the modern world, this is a better one than nostalgia: it was one of the parents.</p>
</div>
<p>We stop here, where key is still the ground of form. Past this point lie two developments that belong to another course, and it is honest to name them rather than pretend the road ends. In 1863 Hermann von Helmholtz explained consonance by the beating of upper partials — dissonance as a roughness in the ear — which did not abandon the ratios but explained why the simple ones sound smooth: their partials coincide instead of beating. And from Wagner onward the tonal centre loosens, until around 1908 Schoenberg stops treating dissonance as something requiring resolution at all. What that does to an art whose first distinction was concord and discord is a real question. It is not this one.</p>
<p>Go back to the string. Halt it at 1, at 3/4, at 2/3, at 1/2. Nothing between Guido and Beethoven has made 2:1 less true.</p>
<div class="widget" data-kind="monochord" data-start="2/3"></div>
`,
  sources: "Vincenzo Galilei, Discorso intorno all’opere di Messer Gioseffo Zarlino (1589) on the string and weight experiments; Aristotle, De caelo II.9 and Aquinas, In De caelo II lect. 14; Helmholtz, Die Lehre von den Tonempfindungen (1863); Schoenberg, Harmonielehre (1911). On music as a source of the experimental method, Rens Bod, World of Patterns, ch. 5.1 and 5.2.",
  check: {
    q: "Which of these did later music actually refute?",
    options: [
      "That the first concords are 2:1, 3:2, and 4:3.",
      "That the same whole-number proportions govern string lengths and hanging weights alike.",
      "That music is a study of sounding number."
    ],
    answer: 1,
    why: "Vincenzo Galilei’s weights settle that one: pitch goes as the square root of the tension. The first concords stand — temperament is measured by its departure from them — and the third claim was not refuted but relocated, from arithmetic to the physics of sounding bodies."
  }
},

{
  id: "east-1",
  ch: "east",
  title: "Four fates of one inheritance",
  html: `
<p><span class="xref" data-ch="VII"></span> followed the Latin road out of Boethius. Three other Christian traditions received the same late-antique inheritance and did something else with it: the Coptic Church of Egypt, the Greek Byzantine Church, and the Slavic Churches of Rus'.</p>
<p>Two limits, stated at the outset. We treat only what is <em>premodern</em> in each — nothing shaped by later Latin importation, and in particular no Western-style polyphony. And we give each tradition’s own account of itself first, in its own terms, before noting where modern scholars have raised questions. This course does not settle those questions. It is a course in harmonics, not in the history of liturgy.</p>

<h4 class="sec">The eight tones, and the man whose name they bear</h4>
<p>The frame of Eastern chant is the <span class="latin">Oktōēchos</span> — the eight tones. The account the tradition gives of it is this.</p>
<p>In the eighth century, at the monastery of Mar Saba, <strong>St. John of Damascus</strong> gathered the chants of the Church into eight tones and set them in a cycle of eight weeks, so that the year turns through them and comes round again. Beside him worked his adoptive brother, <strong>Kosmas of Maiouma</strong>, called the Melodist. The book is named for what it contains, the Octoechos, and the Greek and Slavic service books still name the Damascene as its author.</p>
<p>Each tone has its character, and singers speak of them as one speaks of people. The first is grave and open; the second sweet; the third virile; the fourth festal. The plagal tones, which stand a fourth below their authentics, are darker relatives of the same. The third plagal is not called plagal at all but <span class="latin">barys</span>, “grave.”</p>
<div class="remark">
  <h4>A question modern scholars have raised</h4>
  <p>Whether St. John composed the system has been questioned. The eight-fold ordering appears in books of the Jerusalem rite that some date before his lifetime; the earliest surviving witnesses are not Greek but Georgian and Armenian translations of a collection called the <em>Ancient Iadgari</em>; the assignment of tones to the days of the week is often taken as ninth-century and Constantinopolitan; and no musical notation existed in his century in which he could have fixed melodies. On this view he belongs to the circle at Jerusalem that shaped the Octoechos, rather than standing as its single author. The ascription itself is ancient: the <span class="latin">Hagiopolites</span>, the fullest medieval Greek treatise on the modes, opens by naming him. (An older claim that Severus of Antioch composed an Octoechos in the sixth century is now generally set aside.) Nothing in this course turns on the outcome.</p>
</div>

<h4 class="sec">Two sciences under one roof</h4>
<p><strong>Byzantium possessed a Greek harmonics, the same science this course has been teaching, and it ran alongside the chant for centuries without touching it.</strong></p>
<p>Michael Psellos wrote on it. An anonymous <span class="latin">Quadrivium</span> of 1008 treats it as one of the four mathematical sciences, exactly as Boethius did in the West. George Pachymeres (d. c. 1310) gave it a hundred pages. Manuel Bryennios, writing about 1300, produced the longest Byzantine <span class="latin">Harmonika</span> there is, and the Latin West later read him with respect. All of it runs on Ptolemy, Nicomachus, and Aristoxenus; all of it divides tetrachords and computes ratios as you have done. And none of it mentions the eight tones. Nikolaos Mesarites, describing the schools of Constantinople in the twelfth century, treats the two as separate subjects with separate masters.</p>
<p>So Bryennios was computing Ptolemaic tetrachords in the same city, and at the same time, that John Koukouzeles was composing kalophonic chant, and neither refers to the other. The picture is not one stem and three branches. It is <strong>four answers to one question</strong>: what has a sung practice to do with a mathematical science?</p>
<div class="dl">
  <dt>The Latin West</dt><dd>kept the <em>science</em> in Boethius, taught it in the quadrivium, and let the practice grow away from it as a grammar of its own <span class="xref" data-to="vii-2"></span>. The two met again only in the sixteenth century, and violently.</dd>
  <dt>Byzantium</dt><dd>kept <em>both</em> — a live Greek harmonics in the schools and a live chant in the churches — and kept them apart. It borrowed the old vocabulary for the chant (tetrachord, <span class="latin">systema</span>, the genera) and little of the method.</dd>
  <dt>The Slavs</dt><dd>received the <em>practice</em> and the eight-fold framework, and almost no theory. There is no Rus' writing about music of any kind before the singing-alphabets of the fifteenth century.</dd>
  <dt>The Copts</dt><dd>received the practice and did not write music down at all. The repertory was carried in the memory of professional cantors, and no one notated it until the twentieth century.</dd>
</div>

<h4 class="sec">Who and when</h4>
<div class="era">
  <b>c. 485–555</b><span>Romanos the Melodist, master of the <span class="latin">kontakion</span></span>
  <b>8th c.</b><span>St. John of Damascus and Kosmas of Maiouma at Mar Saba; the Octoechos</span>
  <b>988</b><span>the baptism of Rus'; the Byzantine rite arrives in Slavonic, by way of Bulgaria</span>
  <b>c. 1100–1300</b><span>the five Kondakars of Rus'; Byzantine round notation, from the late 12th century</span>
  <b>c. 1270–1341</b><span>John Koukouzeles, <span class="latin">maïstōr</span>, and the kalophonic style</span>
  <b>d. 1324</b><span>Ibn Kabar in Old Cairo writes the fullest medieval Coptic account of chant</span>
  <b>1458</b><span>Manuel Chrysaphes, <span class="latin">lampadarios</span> of the imperial clergy, on the art of chanting</span>
  <b>1551 · 1669</b><span>the Stoglav orders singing schools; Mezenets's commission in Moscow</span>
  <b>1814</b><span>the New Method of the Three Teachers at Constantinople</span>
  <b>1859 · 1926</b><span>Muʿallim Takla standardizes the Coptic hymns; Newlandsmith transcribes them</span>
</div>
`,
  sources: "Byzantine speculative harmonics: the anonymous Quadrivium of 1008; Pachymeres, Syntagma; Manuel Bryennios, Harmonika (ed. Jonker, 1970); Nikolaos Mesarites on the schools of Constantinople; L. G. Benakis on the institutional separation. On the Octoechos and its ascription: the Hagiopolites (Paris gr. 360); and, for the modern question, Aelred Cody, Peter Jeffery (2001) and Stig Frøyshov (2007), with Harald Buchinger’s more conservative response.",
  check: {
    q: "What was the relation, in Byzantium, between the Greek science of harmonics and the chant of the churches?",
    options: [
      "The chant was derived from the science, as its liturgical application.",
      "Both flourished, in different classrooms and different books: Bryennios was writing Ptolemaic harmonics at the time Koukouzeles was composing, and neither body of work refers to the other.",
      "Harmonics had been lost in the East, which is why the chant developed no theory of its own."
    ],
    answer: 1,
    why: "Byzantium held both and kept them apart. The mere presence of a mathematical science in a civilisation does not make its music mathematical — something has to join them, and in Byzantium nothing did."
  }
},

{
  id: "east-2",
  ch: "east",
  title: "The eight modes: a grammar, not a scale",
  html: `
<p>Ask a modern musician what a mode is and he will describe a scale: a set of pitches with a home note. That is not what an <span class="latin">ēchos</span> or a <span class="latin">glas</span> is.</p>

<h4 class="sec">Byzantium: the tone announced</h4>
<p>Eight <span class="latin">ēchoi</span>: four <span class="latin">kyrioi</span>, authentic — <span class="latin">prōtos, deuteros, tritos, tetartos</span> — and four <span class="latin">plagioi</span>, of which the third is <span class="latin">barys</span>.</p>
<p>The cantor first sings the <span class="latin">ēchēma</span>, a short vocalise on syllables that mean nothing: <span class="latin">ananes</span> for the first tone, <span class="latin">neanes</span> for the second, <span class="latin">nana</span> for the third, <span class="latin">hagia</span> for the fourth. It establishes the tone and gives the choir its ground before a word of the text is heard. The custom is not only Greek. Aurelian of Réôme, writing in Francia in the ninth century, knows the cognate <span class="latin">noeane</span> formulas and says the syllables mean nothing and are an expression of joy.</p>
<p>Through the piece stand the <span class="latin">martyriai</span>, “witnesses” — signs that mark at the head where the tone begins and along the way where the voice has arrived. Where the melody turns aside into another tone or another genus, a sign called a <span class="latin">phthora</span>, a “corrupter,” marks the change. The vocabulary is a singer’s throughout: things bear witness, things corrupt, things are grave.</p>

<h4 class="sec">Rus': the tone as a stock of formulas</h4>
<p>Eight <span class="latin">glasy</span>, numbered as the Greek. A <span class="latin">glas</span> consists in a stock of melodic formulas — <span class="latin">popevki</span>, called <span class="latin">kokizy</span> in the old sources — with characteristic openings, medial turns, and cadences. The manuscripts catalogue them in books called <span class="latin">kokizniki</span>; Brazhnikov’s modern catalogues run to several hundred across the eight tones. A chant is <em>assembled</em> from that stock, as a sentence is assembled from a vocabulary.</p>
<p>Beside the formulas stand two further devices. The <span class="latin">fita</span> — named from the letter Ѳ that marks it — is an extended melisma which the manuscript does not write out but merely <em>names</em>; the singer is expected to know it, and where he does not, a book called a <span class="latin">fitnik</span> will spell it out for him. The <span class="latin">litso</span>, a “face,” is a group of ordinary signs whose plain reading is not the intended reading: a cipher standing for a longer phrase. Brazhnikov’s word for the principle behind both is <span class="latin">tainozamknennost'</span> — “secret-closedness.” The notation withholds on purpose, and trusts the memory of a trained man.</p>

<h4 class="sec">Egypt: the tune of the season</h4>
<p>Coptic chant is not organized by mode at all. Its unit is the <span class="latin">laḥn</span> (pl. <span class="latin">alḥān</span>): a named, recognizable melody — <span class="latin">laḥn al-ḥuzn</span>, “of grief”; <span class="latin">laḥn al-faraḥ</span>, “of joy”; the <span class="latin">laḥn Idrībī</span> sung on Good Friday at the Sixth Hour — to which suitable texts are set. Ibn Kabar named some twenty-six of them before 1324, and most are still known by name and occasion in Cairo today.</p>
<p>What orders the repertory is the <strong>year</strong>. Six categories govern which tune a text receives:</p>
<div class="dl">
  <dt>al-sanawī</dt><dd>the annual — the ordinary tune, through the year</dd>
  <dt>al-farāʾiḥī</dt><dd>the joyful — feasts, and weddings and baptisms</dd>
  <dt>al-Kiyahkī</dt><dd>the tunes of Kiyahk, the month of Advent, with its own book and its own night vigils</dd>
  <dt>al-ṣiyāmī</dt><dd>the fasting tunes, above all for the Great Fast</dd>
  <dt>al-shaʿānīnī</dt><dd>Palm Sunday, which has a tune of its own, neither festal nor sorrowful</dd>
  <dt>al-ḥazāynī</dt><dd>the sorrowful — Holy Week, and the burial of the dead</dd>
</div>
<p>So the same words are sung to a different melody according to where the year stands. And there is a second ordering beneath it, by the week: hymns are <span class="latin">Adam</span> or <span class="latin">Watos</span>, named from the opening words of the Theotokia of Monday and of Thursday — Adam hymns from Sunday to Tuesday, Watos from Wednesday to Saturday and through Holy Week. A Coptic deacon knows what to sing by knowing what day it is.</p>

<div class="remark">
  <h4>Questions modern scholars have raised</h4>
  <p><em>On the eight modes in Coptic literature.</em> Three Copto-Arabic writers of the thirteenth and fourteenth centuries — Ibn al-ʿAssāl, Ibn Sibāʿ, and most fully Ibn Kabar — describe a scheme of four authentic and four plagal modes with Greek names and assigned affects (see <span class="xref" data-to="east-6"></span>). George Ghaly and Nicholas Ragheb read these passages as belonging to a wider Greek and Arabic literature on the moral effects of music, rather than as descriptions of Coptic singing: no eight-mode system appears in the repertory, and no cantor is known to have worked from them. Ilona Borsai asked the same question in a paper of 1974: whether there is an Octoechos in the Coptic system.</p>
  <p><em>On the Russian tones.</em> The nineteenth-century scholars Razumovsky and Voznesensky analysed the <span class="latin">glasy</span> with the Western apparatus of final, dominant, and ambitus. Johann von Gardner and others afterwards held that this yields contradictions, since znamenny melodies range across the whole pitch space rather than sitting within an octave-species. Analysis by formula, after Brazhnikov, is now the more usual approach.</p>
</div>

<h4 class="sec">Why this matters to the art</h4>
<p>In Russian chant, <strong>several different <span class="latin">glasy</span> draw on the same pitches.</strong> They are told apart not by which notes are available but by <em>which formulas belong to them</em>. A mode here is a vocabulary, not a scale.</p>
<p>These systems therefore belong among the principles that <em>restrict</em> rather than the principles that <em>derive</em> <span class="xref" data-to="vii-2"></span>. Give a Russian singer the eight tones and he can tell you whether a melody is well formed, and can make a new one that is. He cannot derive a formula from a ratio, and was never asked to. It is a grammar, as the rules of organum were a grammar.</p>
<p>That is real knowledge. It is a different kind of thing from the science of <span class="xref" data-ch="IV"></span>. The Byzantines could keep Bryennios in one room and the <span class="latin">protopsaltēs</span> in another without strain, because the two were not the same art.</p>
`,
  sources: "Byzantine: the Hagiopolites (ed. Raasted, 1983); Manuel Chrysaphes, On the Theory of the Art of Chanting (1458; ed. Conomos, 1985); Aurelian of Réôme on the noeane syllables. Slavic: Brazhnikov, Drevnerusskaya teoriya muzyki (1972); J. von Gardner, Russian Church Singing; Vladimir Morosan. Coptic: Martha Roy, “Music, Coptic,” in The Coptic Encyclopedia; Magdalena Kuhn on formula-clusters; George Ghaly, Coptica 12 (2013); Ilona Borsai (1974).",
  check: {
    q: "In Russian chant, what makes one <span class=\"latin\">glas</span> different from another?",
    options: [
      "A different scale, with its own final and its own ambitus.",
      "A different stock of melodic formulas — several glasy draw on the same pitches, and are told apart by which formulas belong to them.",
      "A different tuning of the same scale, with different interval sizes."
    ],
    answer: 1,
    why: "A mode here is a vocabulary rather than a scale. That is why the Western analysis — final, dominant, ambitus — asks a question the system does not answer."
  }
},

{
  id: "east-3",
  ch: "east",
  title: "Notation, and what it refuses to fix",
  html: `
<p><span class="xref" data-to="vii-1"></span> called Guido’s staff the hinge of everything that followed in the West, because once pitch is written a practice has a record. The East wrote too, and for a thousand years. It wrote something else.</p>

<h4 class="sec">Byzantium: intervals without pitches</h4>
<p>Byzantine neumes are <strong>relative interval signs</strong>. Each tells you by how much this note differs from <em>the note immediately before</em>. The <span class="latin">ison</span> is nought — sing the same again; the <span class="latin">oligon</span> is up one; <span class="latin">kentēmata</span> up two; <span class="latin">hypsēlē</span> up four; <span class="latin">apostrophos</span> down one; <span class="latin">elaphron</span> down two. They combine additively, so a compound sign is a sum. There is no staff, no clef, and nowhere in the system an absolute pitch.</p>
<p>Three consequences follow. One misread sign transposes everything after it, which is why the <span class="latin">martyriai</span> of the last lesson are load-bearing rather than decorative: they re-anchor the reading so that an error cannot run to the end of the piece. The notation is transposition-invariant by construction — there is no key, and the pitch was whatever the <span class="latin">protopsaltēs</span> gave. And the system develops: the earliest layer, a single <span class="latin">theta</span> meaning “a figure goes here,” and then the Chartres and Coislin families of the tenth to twelfth centuries, record contour without counting steps; notation that specifies the number of steps appears in the last quarter of the twelfth century.</p>
<p>Beside the interval signs stand some thirty <span class="latin">megala sēmadia</span>, the great signs, also called <span class="latin">aphōna</span> — “voiceless,” because they carry no interval value — often written in red ink beside the black. They have been read as ornaments and expressions, as records of the choirmaster’s hand, or as abbreviations each standing for a whole figure. Scholars have argued for all three.</p>

<h4 class="sec">Rus': the hooks</h4>
<p>Znamenny notation takes its name from <span class="latin">znamya</span>, a sign; the signs themselves are the <span class="latin">kriuki</span>, the hooks. Each takes a syllable and holds a gesture — direction, contour, one note or several, with rhythm and manner of attack. It gives no absolute pitch and no interval size.</p>
<p>What opened it to reading was a series of practical inventions by working singers, not by theorists. Around 1600 a Novgorod <span class="latin">raspevshchik</span>, <strong>Ivan Shaidur</strong>, is credited with the <span class="latin">kinovarnye pomety</span> — small letters in cinnabar red beside the hook, naming the degree. Then the <span class="latin">priznaki</span>, strokes added to the sign itself, since red letters cannot be printed in a single pass. Then <strong>Alexander Mezenets</strong>, monk of the Savvino-Storozhevsky monastery, and the commission of six <span class="latin">didaskaloi</span> that sat in Moscow from February 1669 to May 1670, whose <span class="latin">Izveshchenie o soglasneishikh pometakh</span> fixed a twelve-degree system and classified every sign. A type-font was cut for it by 1671. The books were never printed.</p>
<p>Finally the <span class="latin">dvoeznamenniki</span> — manuscripts that write the same chant twice down the page, once in hooks and once in Kievan staff notation. Whoever made them was solving a practical problem for singers who knew one system and not the other. They are the reason the older notation can be read at all.</p>

<h4 class="sec">Egypt: the memory of the cantors</h4>
<p>No surviving Coptic liturgical manuscript carries musical notation of any kind before the twentieth century. What the medieval books carry is text, rubrics — <span class="latin">bi-al-nāqūs</span>, “with cymbals” — and the <em>name</em> of the tune. The repertory rested on the professional cantorate, the <span class="latin">muʿallimūn</span>.</p>
<p>Two cantors stand at the head of the modern record. Both were blind. <strong>Muʿallim Takla</strong> was sent by Pope Cyril IV in the 1850s through Upper and Lower Egypt to gather and settle the hymns as they were sung; his <span class="latin">Khidmat al-Shammās</span>, “The Service of the Deacon,” of 1859 is still the working book of the tradition. He sang before the Ottoman court and was made <span class="latin">bey</span> by the Khedive. Through his seven students the line ran to <strong>Muʿallim Mikhāʾīl Jirjis al-Batanūnī</strong> (1873–1957), archdeacon at nineteen, who taught at the Saint Didymus Institute for the blind — where he devised a Braille for the Arabic and Coptic alphabets — and died Great Cantor of St. Mark’s.</p>
<p>It was al-Batanūnī’s singing that a British violinist named <strong>Ernest Newlandsmith</strong> set down. Invited by <strong>Ragheb Moftah</strong>, who had studied music at Bonn and Munich and spent seventy years documenting the chant, Newlandsmith came each winter from about 1926 for nine or ten years and notated by ear from live performance. He filled sixteen folio volumes: the whole Liturgy of St. Basil and some twenty-five great seasonal hymns. In 1931 he lectured on the work at Oxford and at Cambridge. Moftah went on recording until 2001 and gave the collection to the Library of Congress. The Hungarian ethnomusicologist <strong>Margit Tóth</strong>, working in Bartók’s method, later transcribed the Liturgy again with the ornamentation written in.</p>

<div class="remark">
  <h4>Notes on the modern discussion</h4>
  <p>The early transcriptions are read in different ways. Newlandsmith worked to the half-step and set the melodies in bar lines, and he described his aim as recovering an older stratum beneath what he called Arabic ornamentation. Tóth wrote that ornamentation down instead. Marian Robertson-Wilson, who edited the collection, hears the same surface motion as a continuous inflection rather than as separate notes. The disagreement bears on what a Coptic melody is taken to be.</p>
  <p>The marks called <span class="latin">ḥazzāt</span>, dashes and dots above the text showing melodic direction, are in use among cantors today; they are not standardized between them, and their history has not been traced back beyond modern practice. The one notated Christian music surviving from ancient Egypt — the Oxyrhynchus hymn of the late third century, a Trinitarian doxology in Greek alphabetic notation — is in Greek, not Coptic, and has not been connected to the later repertory.</p>
</div>
<p>So: three notations, and none of them a recording. All three are aids to a memory that already holds the melody; the Latin staff is the odd one out. The dates are plain. The earliest chant melodies that can be read from the page are Byzantine, from about 1175; Russian, from about 1600; and Coptic, from 1926. Anything earlier is sung today by reconstruction.</p>
`,
  sources: "Byzantine notation: Christian Troelsgård, Byzantine Neumes (MMB Subsidia IX, 2011); Constantin Floros, Universale Neumenkunde (1970); Maria Alexandru; Alexander Lingas. Slavic: Pravoslavnaya entsiklopediya, s.vv. Знаменная нотация and Пометы; Mezenets, Izveshchenie (1670), publ. Smolensky 1888; Brazhnikov. Coptic: Library of Congress, Coptic Orthodox Liturgical Chant and Hymnody (essays on the cantors and on notation); Moftah, ed., The Coptic Orthodox Liturgy of St Basil, transcr. Margit Tóth (AUC Press, 1998).",
  check: {
    q: "What do Byzantine neumes actually specify?",
    options: [
      "The pitch of each note, on a scale fixed in advance.",
      "The interval from the note immediately before — so that a misread sign transposes everything after it, and the martyriai must re-anchor the reading.",
      "Only the rhythm, the pitches being supplied from memory."
    ],
    answer: 1,
    why: "They are relative interval signs and combine additively. There is no staff, no clef, and no absolute pitch anywhere in the system — which is why the notation is transposition-invariant by construction."
  }
},

{
  id: "east-4",
  ch: "east",
  title: "Intervals, and the measuring of them",
  html: `
<p>You have spent this course measuring. What did these traditions measure?</p>

<h4 class="sec">The Greek answer: seventy-two parts</h4>
<p>Modern Byzantine chant is taught with an apparatus as precise as anything in this course. The diapason is divided into <strong>seventy-two</strong> <span class="latin">moria</span>, and each genus divides the fourth into thirty of them.</p>
<p>In 1814, at Constantinople, three men — <strong>Chrysanthos of Madytos</strong>, <strong>Gregorios the Protopsaltes</strong>, and <strong>Chourmouzios the Archivist</strong>, known since as the Three Teachers — devised what is called the New Method: a reformed and analytical notation, together with a theory that named and numbered the intervals. They then transcribed the received repertory into it, hymn by hymn, so that what had been carried by the great signs and by memory could be set down in full. Chrysanthos’s <span class="latin">Theoretikon Mega</span> was printed at Trieste in 1832. A Patriarchal Musical Committee revised the numbers in 1881, moving from his sixty-eight parts to seventy-two, and that is what a Greek cantor learns today.</p>
<div class="widget" data-kind="byzgenera"></div>
<p>Sound them against each other. The soft and hard chromatic are unmistakable once heard twice. The hard chromatic has no place in Latin practice. Note the name-collision before it trips you: what this system calls <em>enharmonic</em> is not the ancient enharmonic genus of <span class="xref" data-to="sys-2"></span>, which is two quarter-tone <span class="latin">dieses</span> and a ditone. Same word, different object.</p>
<p>And notice the last column. The two ancient divisions close on 498.04¢, the true 4:3 you built for yourself in <span class="xref" data-to="v-2"></span>. The four modern ones close on 500¢. Their fourth is <em>already tempered</em> — by a different route and for different reasons than the West’s, but tempered. A tradition that never passed through <span class="xref" data-to="vii-5"></span> arrived at a compromise of its own.</p>

<h4 class="sec">The Russian answer: four trichords</h4>
<p>Russian chant has its own pitch space, and it is not built out of fourths at all. The <span class="latin">obikhodnyi zvukoryad</span> is twelve sounds in four whole-tone <em>trichords</em>, each a tone and a tone, with a semitone between one and the next. Their names are given in the seventeenth-century books: <span class="latin">prostoye</span>, simple; <span class="latin">mrachnoye</span>, dark; <span class="latin">svetloye</span>, light; <span class="latin">tresvetloye</span>, thrice-light.</p>
<div class="widget" data-kind="obikhod"></div>
<p>Play all twelve, then the diminished octave. Two sounds an octave apart <em>by name</em> stand 1086¢ apart in fact, inside one system, with no modulation anywhere. Build by threes instead of by fours and that is what you get. Neither the West nor Byzantium builds this way.</p>

<div class="remark">
  <h4>Notes on the modern discussion</h4>
  <p>How far these systems describe the earlier centuries is an open question. On the Greek side: no medieval Byzantine source gives interval sizes for the modes — not the <span class="latin">Hagiopolites</span>, not the <span class="latin">Papadikai</span>, not Manuel Chrysaphes in 1458. The earliest quantified accounts of living Greek church intervals are those of Chalatzoglou (c. 1728) and Marmarinos (1747), who describe the modes by comparison with the Ottoman <span class="latin">makamlar</span>. Whether that reflects continuity or a later formation is disputed. Pachymeres and Bryennios <em>do</em> quantify tetrachords precisely — but in quadrivial treatises on ancient Greek harmonics, without reference to the tones of the Church.</p>
  <p>On the Russian side, the twelve-degree scale is a codification of the cinnabar marks, of the late sixteenth and seventeenth centuries. Gardner argued that the vocabulary of the marks is deliberately non-quantitative, and that the interval sizes were transmitted by apprenticeship rather than by definition. The tuning of the Obikhod scale is therefore not given by any source; this course sounds it in its own Pythagorean sizes, which is a choice made for consistency and not a finding.</p>
  <p>Of Coptic intervals the published descriptions are cautious. Martha Roy's is the standard one: the melodies move stepwise, usually within about a fifth, with numerous microtones, so that many of the intervals cannot be reproduced on a keyboard. No measured tuning system has been published.</p>
</div>

<h4 class="sec">Where these stand on Thomas’s map</h4>
<p>Recall <span class="xref" data-to="i-2"></span>: a middle science has a physical subject and demonstrates through mathematical middle terms. On that test these are not middle sciences, and none of them claims to be. Their theory, where they have it, is <em>descriptive</em> — catalogues of signs, catalogues of formulas, counsel on right performance, and in the Greek case a measured account arrived at very late and for a practical purpose.</p>
<p>Two things follow. First, this is no peculiarity of the East: the Latin West’s practice stood in the same condition from the ninth century to the fifteenth, organum and counterpoint being a grammar with no ratios in them <span class="xref" data-to="vii-2"></span>. Second, the West <em>also</em> had Boethius on the shelf — and so did Byzantium, which had Bryennios. The presence of a mathematical science does not by itself make a practice mathematical. Something must join them. In the Latin West what joined them was a contingent and rather humble thing: an instrument of fixed pitch, which forced somebody to decide in numbers exactly where to put the frets.</p>
`,
  sources: "Chrysanthos of Madytos, Theoretikon Mega tes Mousikes (Trieste, 1832; trans. Katy Romanou); the Patriarchal Musical Committee, 1881–1888, for the 72-morion division; Panagiotes Chalatzoglou (c. 1728) and Kyrillos Marmarinos (1747); Manuel Chrysaphes (1458). Slavic: J. von Gardner on the “church scale”; Mezenets (1670). Coptic: Martha Roy in The Coptic Encyclopedia.",
  check: {
    q: "What did the Three Teachers accomplish at Constantinople in 1814?",
    options: [
      "They recovered the interval measurements of the medieval Byzantine theorists.",
      "They devised the New Method — a reformed analytical notation with a numbered theory of the intervals — and transcribed the received repertory into it.",
      "They introduced Western staff notation into the Greek Church."
    ],
    answer: 1,
    why: "Chrysanthos, Gregorios and Chourmouzios made a new notation and then wrote the repertory out in it. Chrysanthos’s theory divided the diapason into sixty-eight parts; the Committee of 1881 revised the figure to seventy-two."
  }
},

{
  id: "east-5",
  ch: "east",
  title: "One voice, the held sound, and the silence of instruments",
  html: `
<p>Three questions of texture.</p>

<h4 class="sec">The held sound</h4>
<p>Byzantine chant is sung over an <span class="latin">isokratēma</span>: a sustained pitch held beneath the melody by singers whose office it is, the <span class="latin">isokratai</span>. Holding it well is reckoned an art of its own. The ison must be steady, must not draw attention, must follow the melody’s ground when the melody moves to a new one, and must never become a second melody.</p>
<div class="widget" data-kind="ison"></div>
<p>Hear the line alone, then over the held sound. What the drone does is not harmony; nothing is being combined into a chord. It is a <em>measure</em>: against a fixed sound, every degree of the line takes on a character it does not have alone, and the ear is told at every moment where it stands. The traditional reading of it is that the held sound is the eternal and unchanging, and the melody the movement of time upon it — which is why the ison is said to be sung and not played, since only a voice can offer that.</p>
<div class="remark">
  <h4>Notes on the modern discussion</h4>
  <p>First, a homonym. The <em>neume</em> called <span class="latin">ison</span> means “the same” — repeat the preceding pitch — and appears in every manuscript from the beginning. The <em>drone</em> called ison is a different thing, and finding the word in a medieval source is not by itself evidence of the drone.</p>
  <p>How far back the drone can be traced is an open question. Medieval Byzantine chant as notated is monophonic. The earliest explicit description of drone-singing in Greek church practice is Martin Crusius’s <span class="latin">Turcograecia</span> of 1584, and the ison is not written into the chant books until the nineteenth century. On the other side, an unwritten accompaniment leaves no documentary trace of its own, and the long-held figures of the kalophonic style have been thought to invite one. The theological reading given above is found in modern devotional and catechetical writing; how much older it is has not been established.</p>
  <p>In Russian and Coptic practice there is no drone. Neither notation provides for one, and Mezenets does not mention it.</p>
</div>

<h4 class="sec">Polyphony that owes nothing to the West</h4>
<p>This chapter excludes Latin-influenced polyphony. One tradition is an exception, because its polyphony is its own.</p>
<p><strong><span class="latin">Strochnoye penie</span></strong>, “line singing,” appears in Russian sources from the middle of the sixteenth century and flourishes through the seventeenth. In its three-voice form, <span class="latin">troestrochie</span>, the parts are named <span class="latin">niz</span>, <span class="latin">put'</span> and <span class="latin">verkh</span> — bottom, way, top — and it is the middle voice, the <span class="latin">put'</span>, that carries the chant. Beside it stands <span class="latin">demestvennoye mnogogolosie</span>, in three or four parts, named from its leading <span class="latin">demestvo</span> voice, whose own name comes through Old Russian from the Greek <span class="latin">domestikos</span>, the choirmaster.</p>
<p>Russian and Western scholarship alike hold this to be indigenous. The grounds: its material is znamenny; it is written in the native hooks rather than in staff notation; it is attested before significant Western contact reaches Muscovy; and its voice-leading follows no Western rule — parallel seconds, fourths and fifths, unprepared dissonance, cadences on unison, octave or fifth, and nothing that could be called functional harmony. Set beside it the one documented Byzantine departure from monophony: the two-voice settings of <strong>Ioannes Plousiadenos</strong>, a Cretan of the later fifteenth century, which the manuscripts themselves label <span class="latin">kata tous Latinous</span>, “according to the Latins.” The Byzantine manuscripts name those settings as Latin. The Russian sources do not.</p>

<h4 class="sec">The instruments</h4>
<p>Byzantine and Slavic worship is unaccompanied without exception. Coptic worship admits two percussion instruments and no others: the hand cymbals, <span class="latin">nāqūs</span>, and a metal triangle. They are used only with specified pieces, and they fall silent in Holy Week and at funerals — there is no metal in the sorrowful tunes. The reason given within the tradition is that percussion does not sing: it regulates the rhythm and unites the congregation, and does not carry the melody.</p>
<p>The custom rests on a patristic commonplace: that the Church has one instrument only. Clement of Alexandria’s word is that our instrument is the Word of peace. It rests also on the dissociation of the liturgy from theatre, hippodrome, and pagan sacrifice. It is a custom rather than a canon; no canon of an ecumenical council forbids instruments, and the practice rests on continuous usage.</p>
<div class="remark">
  <h4>The organ</h4>
  <p>Byzantium was not hostile to instruments as such. The organ was central to imperial ceremonial: Constantine VII’s <span class="latin">De ceremoniis</span> describes the golden organs of the Chrysotriklinos and the silver organs of the circus factions, and an organ stood in the outer precincts of Hagia Sophia for imperial processions. The instrument reached the building and stopped at the rite. In 757 the emperor sent one as a diplomatic gift to Pepin the Short — the seed from which the Western church organ grew. The Latin West received its organ from the East, which never used one in the liturgy.</p>
</div>
<p>St. Thomas treats the question at <span class="latin">ST</span> II-II q.91 and comes near the same place: song is a salutary help to devotion because melody moves the soul, and instruments that move to pleasure more than to a good disposition are to be treated with caution. That is a judgement of prudence about the <em>use</em> of music <span class="xref" data-to="vi-2"></span>, and not a conclusion of this science.</p>
`,
  sources: "Ison: Dimitri Conomos; Martin Crusius, Turcograecia (Basel, 1584); Alexander Lingas. Polyphony: N. D. Uspensky, Brazhnikov, Pozhidaeva, Gardner, Morosan on strochnoye penie; Dimitri Conomos, “Experimental polyphony, ‘according to the … Latins,’ in late Byzantine psalmody,” Early Music History 2 (1982). Instruments: Clement of Alexandria, Paidagogos II.4; Constantine VII, De ceremoniis; Martha Roy on the nāqūs and the triangle; Aquinas, ST II-II q.91 a.2.",
  check: {
    q: "What does an ison do to the melody above it?",
    options: [
      "It supplies a harmony, as a bass line does in Western music.",
      "It acts as a measure: against a fixed sound every degree of the melody declares its relation continuously, and the ear is told where it stands.",
      "It doubles the melody at the fifth, in the manner of parallel organum."
    ],
    answer: 1,
    why: "Nothing is combined into a chord. The drone is a sounding reference — which is close, in effect though not in method, to what you have been doing with a monochord and a ratio."
  }
},

{
  id: "east-6",
  ch: "east",
  title: "Three accounts of an origin",
  html: `
<p>Each of these traditions gives an account of where its singing came from. The accounts are old, and they are told by the people who do the singing. Hear them in their own terms.</p>

<h4 class="sec">Egypt: older than the Church</h4>
<p>The Copts are the Egyptians; the word is the same word, worn down through Greek <span class="latin">Aigyptios</span> and Arabic <span class="latin">qibṭ</span>. They pray in Bohairic Coptic, and they count their years from Diocletian, the Era of the Martyrs. Their account of their chant follows from that: that when Egypt turned to Christ, the singers turned the music they already had to a new worship. The melodies of the Church, on this telling, are older than the Church in Egypt.</p>
<p>What is offered in support is a set of resemblances. The great cantors have been blind — Muʿallim Takla, Muʿallim al-Batanūnī — as the singers depicted in the tombs are blind. The cantor cups his ear and extends his arm to shape the line for the choir, and hand-signs of that kind are carved on Old Kingdom tomb walls: the relief from the tomb of Nencheftka, of about 2700 BC, is the one usually shown. <strong>Hans Hickmann</strong>, who studied ancient Egyptian instruments, worked on that comparison and called the Coptic chant a living link between the past and the present. The long vocalises on a single vowel are set beside the reports of late antiquity that the priests of Egypt hymned the gods “through the seven vowels in direct succession.”</p>
<p>Ernest Newlandsmith, hearing the chant in Cairo in 1926, wrote that it seemed impossible to doubt but that this was ancient Egyptian, and called it grand, pathetic, and noble. He said so at Oxford and at Cambridge in 1931, and it is largely through him that the claim entered Western discussion.</p>
<div class="remark">
  <h4>A question modern scholars have raised</h4>
  <p>The descent has been disputed. No notation and no theoretical treatise survives from ancient Egypt, so there is no repertory with which the Coptic one could be compared. Hand-signalling for directing unwritten music is found in many traditions, including Byzantine, Jewish, Vedic, and Balinese practice. The reports of the seven vowels describe Greco-Egyptian usage of the Roman period. And no transcription of Coptic chant in usable form exists before 1926. Marian Robertson-Wilson, examining the ninety years of recordings and transcriptions that do exist, has found the oral transmission over that span to be substantially stable.</p>
</div>

<h4 class="sec">Byzantium: the scroll given to Romanos</h4>
<p>The tradition names a beginning: a night in Constantinople in the reign of Anastasius. Romanos, a deacon from Syria, had no gift for singing and was mocked for it. On the eve of the Nativity he fell asleep in the church of the Theotokos at Blachernae. The Mother of God appeared to him holding a scroll, and told him to eat it. He woke, mounted the ambo, and sang: <em>Today the Virgin gives birth to Him who is above all being.</em> He is Romanos the Melodist, and the Church keeps his feast on the first of October.</p>
<p>From him the line runs on: the hymnographers of Mar Saba in the eighth century and the Octoechos <span class="xref" data-to="east-1"></span>; the Stoudite monks of the ninth; and in the fourteenth the style called <span class="latin">kalophonia</span>, “beautiful sound,” whose master was <strong>John Koukouzeles</strong>. Taken as a boy from Dyrrachium into the imperial choir, he left the palace for Mount Athos. He is honoured as a saint, and the manuscripts call him <span class="latin">maïstōr</span>, the master.</p>
<p>After 1453 the cantors of the Ecumenical Patriarchate carried the chant of the Great Church through the Ottoman centuries in a succession of <span class="latin">protopsaltai</span>, teaching by ear as they had always taught, until the Three Teachers wrote it down in the New Method in 1814 <span class="xref" data-to="east-4"></span>. That the singing of the Phanar is the singing of Hagia Sophia is the tradition’s own claim, and the office of protopsaltes has in fact been filled continuously to the present day.</p>
<div class="remark">
  <h4>A question modern scholars have raised</h4>
  <p>Besides the question about the Damascene noted in <span class="xref" data-to="east-1"></span>: no melody survives that can be assigned to Romanos himself — the settings of his kontakia in the later books are Constantinopolitan work of the twelfth century and after — and the notation changed fundamentally in the late twelfth century and again in 1814. The received performing tradition can be documented in detail from the later seventeenth century.</p>
</div>

<h4 class="sec">Rus': the envoys at the Great Church</h4>
<p>The <em>Primary Chronicle</em> tells that Prince Vladimir, weighing which faith to take, sent ten wise men to see the worship of each. They came to Constantinople and were brought into the Great Church, and they reported to him:</p>
<blockquote class="note"><p>“We knew not whether we were in heaven or on earth. For on earth there is no such splendour or such beauty, and we are at a loss how to describe it. We know only that God dwells there among men, and their service is fairer than the ceremonies of other nations. For we cannot forget that beauty.”</p></blockquote>
<p>Vladimir was baptized, and Rus' with him, in 988. What came was the whole rite in Slavonic translation, by way of Bulgaria and the work of Cyril and Methodius before that; and the singing came with it — three Greek <span class="latin">demestvenniki</span> arriving with the metropolitan, the chronicles say, to teach the eight tones on Slavonic soil.</p>
<p>The line then runs through the Russian schools. At Novgorod in the sixteenth century <strong>Savva Rogov</strong> taught, and his pupils were <strong>Fyodor Krestyanin</strong>, <strong>Ivan Nos</strong> and <strong>Stefan Golysh</strong>; Ivan the Terrible summoned Krestyanin and Nos to the Aleksandrovskaya sloboda, and Krestyanin's cycle of eleven Evangelist stichera survives and can be read. The Stoglav Council of 1551 ordered schools set up in the houses of the clergy, in Moscow and in every town, to teach letters and church singing.</p>
<p>Then the reform of Patriarch Nikon, the Great Council of 1666–67, and the <span class="latin">raskol</span>. Those who would not accept the new books went into the forests of the north and over the Urals rather than give up the old rite and the old singing. The Old Believers have kept the hooks ever since, copying the books by hand, and they are singing from them still.</p>
<div class="remark">
  <h4>A question modern scholars have raised</h4>
  <p>The account of the three Greek singers appears first in chronicles compiled in the sixteenth century. Church Slavonic differs from Greek in syllable-count and accent, so that melodies taken over had to be adapted, and how far they were adapted is disputed — Velimirović’s comparison of the twelfth-century Slavonic Heirmologion with its Greek models found substantial correspondence in the neumes. The repertory the Old Believers preserve is the Muscovite redaction as it stood in the middle of the seventeenth century.</p>
</div>

<h4 class="sec">What the three accounts have in common</h4>
<p>Each says that the singing was <em>received</em> and not invented. Each traces a line of living teachers rather than a line of books — Takla to al-Batanūnī, Romanos to the protopsaltai of the Phanar, the Greeks of 988 to Savva Rogov to the Old Believers in the forest. And each holds that what is sung now is the same thing that was sung then, which is a claim about fidelity rather than about notation.</p>
<p>These traditions show what <span class="xref" data-to="lib-2"></span> claimed about the liberal art: possessing a thing <em>through its causes</em> and possessing it <em>by habit</em> are two different possessions. The cantors of Cairo, Novgorod, and Constantinople held the chant in memory and transmitted it by voice, enough to carry a large repertory for many centuries. They could not have told you why 3:2 is a concord, and no one asked them to. Boethius could have told you, and could not have sung a sticheron.</p>
<p>The liberal art is not the higher of these two. It is a different one. What the quadrivium claimed is that a man ought to have both, and that the reason for having the second is not that it makes him sing better. It is that it makes him know.</p>
`,
  sources: "Coptic: Hans Hickmann on chironomy; John Gillespie, “The Egyptian Copts and Their Music”; Ernest Newlandsmith’s lectures of 1931; Marian Robertson-Wilson on the reliability of the oral tradition. Byzantine: the Life of St Romanos; the Akathist and kontakia traditions; Dimitri Conomos and Edward Williams on Koukouzeles. Slavic: the Russian Primary Chronicle (Cross and Sherbowitz-Wetzor trans.); the Stoglav (1551); M. V. Brazhnikov’s edition of Krestyanin’s Evangelist stichera (1974); Miloš Velimirović, Byzantine Elements in Early Slavic Chant (1960).",
  check: {
    q: "What do the three traditions’ accounts of their own chant have in common?",
    options: [
      "Each traces the singing to a written source that has been preserved intact.",
      "Each holds that the singing was received rather than invented, and traces a line of living teachers rather than a line of books.",
      "Each dates its chant to the age of the Apostles."
    ],
    answer: 1,
    why: "The common shape is a succession of masters and a claim of fidelity — Takla to al-Batanūnī, Romanos to the protopsaltai, the Greeks of 988 to the Old Believers. None of the three rests its claim on a document."
  }
},

{
  id: "end-1",
  ch: "end",
  title: "Plato’s ladder: what the study is for",
  html: `
<p>You have the art, and you have seen what became of it. One question is left, and it is the one you asked at the beginning: what is this study <em>for</em>?</p>
<p>The tradition gives three answers, and they do not compete. The first is that it is for the truth about numbered sound, and needs no other justification — that is what <span class="xref" data-to="lib-1"></span> meant by an art ordered to knowing. The second is that it is one road of the quadrivium, by which, as St. Thomas says, the mind is prepared for the other philosophical disciplines. The third is Plato’s, and it is the demanding one.</p>

<h4 class="sec">Two kinds of student Socrates will not have</h4>
<p>In <em>Republic</em> VII, choosing the studies that turn the soul from becoming to being, Socrates comes to harmonics — which the Pythagoreans call astronomy’s sister — and rejects two sorts of practitioner.</p>
<p>The first put their ears before their minds. They measure heard concords against one another, torture the strings, argue whether there is a smaller interval still. They make the ear the measure, and they never arrive at anything.</p>
<p>The second criticism is the one that should trouble you, because it is aimed at your own teachers. The Pythagoreans, Socrates says, are better — but they do the same thing the astronomers do. <em>They seek the numbers in these heard concords, and do not ascend to problems.</em> They never ask which numbers are concordant of themselves, and which are not, and <strong>why</strong>. Pursued that far, he says, the study is useful for the search after the beautiful and the good. Pursued otherwise, it is labour lost.</p>
<div class="remark">
  <h4>The question put to you</h4>
  <p>It is entirely possible to finish this course, hold every ratio, pass every exercise, and never once have asked Socrates’ question. Why <em>these</em> numbers? Why should simplicity of ratio have anything to do with pleasing a sense? Why is the world such that the first numbers and the first concords are the same first? This course has not answered that, and has been careful not to pretend to. It has put you in the one position from which the question can be asked honestly — which is with the fact in your possession rather than on report.</p>
</div>

<h4 class="sec">How far to follow Plato</h4>
<p>Not all the way, and the difference matters to a reader of St. Thomas.</p>
<p>Plato’s ladder tends to treat the sensible instance as scaffolding — something to be climbed off. Aristotle and St. Thomas do not. All our knowledge begins in the senses, and the sensible thing is <em>really known</em>, not merely used and discarded. A middle science does not despise its subject; it demonstrates about it. When you know that this string, stopped here, sounds a fifth because the lengths stand as 3:2, you have not left the string behind. You have understood it.</p>
<p>So take from Plato the demand for ascent — from the heard instance to the ratio, and from the isolated ratio to the order and kinship of the mathematical sciences, which is exactly what he asks for at 531c. Leave behind the suggestion that the string was only a ladder. In this the art itself is on Aristotle’s side: it never stopped putting its ear to a sounding body.</p>

<h4 class="sec">The <em>Timaeus</em>, handled as <span class="xref" data-to="vi-1"></span> handled the spheres</h4>
<p>Plato says in the <span class="latin">Timaeus</span> that harmony, whose motions are akin to the revolutions of the soul, was given by the Muses not as an aid to irrational pleasure, as is now supposed, but as an ally to the soul’s inward revolution when it has lost its harmony, to help restore it to order and concord with itself.</p>
<p>That is a beautiful sentence and a cosmological claim, not a theorem of harmonics. Treat it as this course treated the music of the spheres: distinguish. That the soul’s powers are ordered, and that melody moves the passions by some hidden correspondence, St. Thomas grants and states soberly. That the ratios of a monochord are the ratios of the world-soul is a doctrine of the <span class="latin">Timaeus</span> which he does not take over. Do not make the string carry the cosmos. It is enough — and it is a great deal — that the string is intelligible.</p>
`,
  sources: "Plato, Republic VII 530d–531c (two criticisms: the empirics, then the Pythagoreans who do not ascend to problems) and 531c–d (the kinship of the studies); Timaeus 47c–e; Aquinas, Super Boethium De Trinitate q.5 a.1 ad 3; ST I q.84 a.6; ST II-II q.91 a.2 ad 5; and, for the caution about the Timaeus, In De caelo II lect. 14.",
  check: {
    q: "What is Socrates’ complaint against the Pythagoreans in Republic VII?",
    options: [
      "That they use numbers at all, instead of trusting the trained ear.",
      "That they seek numbers only in the concords they happen to hear, and never ascend to the question which numbers are concordant of themselves, and why.",
      "That they refuse to admit 5:4 as a concord."
    ],
    answer: 1,
    why: "He makes two distinct criticisms: the empirics put ears before minds, and the Pythagoreans stop at the numbers found in heard concords. The second is the one aimed at this course’s own tradition — and at you."
  }
},

{
  id: "end-2",
  ch: "end",
  title: "Augustine’s ascent, and the numbers that judge",
  html: `
<p>Augustine wrote six books <span class="latin">De musica</span> on rhythm, meant to write six more on melody, and never did. He explains the plan in a letter to Memorius: the power of number in every motion is most easily studied in sounds, and that study offers a way of rising to the higher secrets of truth <span class="latin">by paths as it were gradually ascending</span>. In the sixth book he states the purpose plainly — <span class="latin">a corporalibus ad incorporalia transeamus</span>, let us pass from bodily things to things not bodily.</p>
<p>The sixth book is where he does it, and it is the deepest answer this tradition gives to the question you asked. He distinguishes the kinds of number a single line of verse involves.</p>
<div class="dl">
  <dt>Sonantes</dt><dd>the numbers in the sounding body itself — the only ones that are bodily.</dd>
  <dt>Occursores</dt><dd>the numbers in the sense as it meets the sound.</dd>
  <dt>Progressores</dt><dd>the numbers in the soul’s own act, as it produces a movement.</dd>
  <dt>Recordabiles</dt><dd>the numbers held in memory.</dd>
  <dt>Iudiciales</dt><dd>the numbers by which we <em>judge</em> — approving this measure, rejecting that.</dd>
</div>
<p>Those are the order of discovery, from outside inward. Augustine’s order of <em>dignity</em> is nearly the reverse, and not quite what a modern reader expects: the judging numbers are highest; then the numbers of the soul’s act; then those of sense; then those of memory, which are only traces and passive; and lowest of all the numbers in the sounding body, which is the only thing most men would have called the music.</p>

<h4 class="sec">The point of the whole ascent</h4>
<p>It is this. <strong>The numbers by which you judge are not numbers you made.</strong> When you hear that a foot has been ill measured, or that this pair of sounds grinds and that pair blends, you are judging by a measure you did not invent, cannot alter, and did not agree to. It was not given you by the sound, for you use it to correct the sound. It was not given you by memory, for you can judge a measure you have never heard before.</p>
<p>Augustine’s answer is the one his whole philosophy turns on: the judging numbers are a participation in numbers that are unchangeable, and the unchangeable is in God. That is why he thought a treatise on the length of syllables was a treatise about God, and why he could tell a bishop that it was a path of ascent and not a grammarian’s hobby.</p>
<div class="remark">
  <h4>Where St. Thomas differs, and where he does not</h4>
  <p>He does not take over Augustine’s account of illumination whole. For St. Thomas the light by which we judge is the agent intellect — a created light, a participation in the uncreated light, but truly ours and truly natural. So the ascent is real, and its explanation is disputed among the doctors.</p>
  <p>What is not disputed, by either of them, is the fact that the ascent starts from: in judging a proportion you use a measure you did not make. Whether you go on from there with Augustine or with Thomas, you cannot go on by pretending the measure is your own invention. And that is precisely what a man who has actually done this art can no longer pretend, because he has watched the measure refuse to be argued with.</p>
</div>

<h4 class="sec">The honest ending: <em>Confessions</em> X</h4>
<p>Augustine did not leave the matter in the clear air. In the tenth book of the <span class="latin">Confessions</span> he turns the same measure on himself, and does not come off well.</p>
<p>He fluctuates, he says, between the danger of pleasure and the proof of profit. He remembers that Athanasius had the psalms read with so slight an inflection of the voice that it was nearer to speaking than to singing. He also remembers weeping at the songs of the Church when he was newly converted, and how much good those tears did him. So he inclines to approve the custom of singing, that weaker souls may rise to devotion through the delight of the ear. But whenever the singing moves him more than the thing sung, he confesses that he sins, and would rather not have heard the singer.</p>
<p>That is the mature form of the question this whole art has been circling. Delight in proportion is good — it is the sense being, as St. Thomas says, a certain kind of reason. Delight standing <em>in place of</em> the thing proportioned is disordered. St. Thomas says the same more drily at <span class="latin">ST</span> II-II q.91: song is a salutary help to devotion, and is abused when it aims at display or when the tune swallows the words.</p>
<p>The liberal art does not settle that question, and cannot; it is a question of prudence and of charity. What the art gives is the one case where the measure can be written down, heard, and verified — so that you know from the inside what it is for a delight to be <em>measured</em>, and can recognise the difference when the measure is not written down.</p>
`,
  sources: "Augustine, Epistle 101 (to Memorius); De musica VI.ii.2 and VI.iv–ix (the five kinds of number and their order of dignity); Confessions X.xxxiii.49–50; Aquinas, ST I q.79 a.4 and q.84 a.5 (the agent intellect as a created participation in the divine light); ST I q.5 a.4 ad 1; ST II-II q.91 a.2.",
  check: {
    q: "What are Augustine’s <span class=\"latin\">numeri iudiciales</span>, and why do they matter?",
    options: [
      "The numbers in the sounding body, which are the only ones that can be measured.",
      "The numbers by which we judge a measure well or ill taken — a measure we did not make, cannot alter, and use to correct what we hear.",
      "The numbers held in memory, by which we recognise a tune we have heard before."
    ],
    answer: 1,
    why: "They are highest in Augustine’s order of dignity precisely because they are not ours. Everything in Book VI is arranged to bring the reader to that fact, and then past it."
  }
},

{
  id: "end-3",
  ch: "end",
  title: "The freedom of the judge",
  html: `
<p>A last lesson, on why a man alive now should have spent these weeks on one string.</p>
<p>Nothing here will be an argument that the art is <em>useful</em>. That would give away the case in the first sentence. These are four things that are true of you now and were not before.</p>

<h4 class="sec">1. You hold a counterexample.</h4>
<p>The educated modern picture is roughly this: quantity is real and out in the world; quality — beauty, fittingness, harmony — is in us, and is projected onto things. Almost nobody arrives at that picture by argument. It is absorbed, and then it is presupposed.</p>
<p>Harmonics is a place where it can be tested cheaply, by anyone, with a string. You hear that some pairs please. You measure, and the pleasing ones are the simple ratios. You alter the ratio and the pleasure alters with it, and it does this for everyone who tries, in every century that has tried. The delight is <em>tracking</em> something the mind can state. St. Thomas’s claim that beauty consists in due proportion, and that sense is itself a kind of reason, is in this one domain not a pious formula but a verified result.</p>
<p>One counterexample does not overthrow a picture of the world. It does mean you can no longer hold that picture innocently — and a man who has checked one case himself argues about the rest differently from a man who has checked none.</p>

<h4 class="sec">2. You have practised something useless, on purpose.</h4>
<p>Aristotle: <em>to be always seeking after the useful does not become free and exalted souls.</em> Every institution a student now passes through will ask what a study is <em>for</em>, and will mean: what does it get you. This one has no answer, and the absence is the point.</p>
<p>Newman, defending the same tradition in a modern university that had already begun to lose it, put it as well as it can be put: <em>“Knowledge is capable of being its own end. Such is the constitution of the human mind, that any kind of knowledge, if it be really such, is its own reward.”</em> He is a modern witness and not an authority of this art; but he is evidence that the case still had to be made, and could be.</p>
<p>The formation is in the doing, not in the agreeing. A man who has spent weeks getting 3:2 into his ear for no reward whatever has done something to himself that no quantity of assent to Aristotle would have done.</p>

<h4 class="sec">3. You can ask: by what measure?</h4>
<p>Boethius’s three classes are permanently contemporary. Most men stand toward sound as those who are moved by it. Some stand as those who make it. Very few stand as those who can say what has been done to them, and how.</p>
<p>This course has said nothing about what anyone ought to listen to, and will not begin now; that is the second study of music and belongs to prudence <span class="xref" data-to="i-1"></span>. The remark is about a <em>position</em>, not a repertory. Sound is arranged, now as in every age, so as to work upon the passions, and the arranging is often skilful and often good. The free man is not the one who resists it. He is the one who can ask by what measure it works — not because asking spoils the pleasure, but because a pleasure a man can account for is his own, and a pleasure he cannot account for is something that is happening to him.</p>

<h4 class="sec">4. You know an approximation when you meet one.</h4>
<p><span class="xref" data-ch="VII"></span> laid the trade out exactly. The equal semitone is irrational; the third on a modern keyboard is wide by about two thirds of a comma; and the whole arrangement was adopted knowingly, by men who understood the arithmetic, in exchange for the freedom to move from key to key. It was a good trade, and this course does not grudge it.</p>
<p>But it was a trade, and hardly anyone who sits down at a piano knows one was made. We live among approximations that work so well that we forget they approximate, and forget that something was given up to get them. To hold one case in which you know precisely what was given up, and can hear it in ten seconds, is a small education in a habit of mind that is worth a great deal more than the case.</p>

<h4 class="sec">And the smallness of it is the point</h4>
<p>One string. Three concords, a step, and a scale. You can hold the whole of it in your mind at once.</p>
<p>Almost everything else a man studies he studies in fragments — a period of a history, a corner of a science, one author out of a literature — and he may go his whole life without once having the experience of possessing a <em>whole thing through its causes</em>. That experience is what a liberal education is trying to give him, and it is far easier to give with a small art than a large one. The quadrivium put <span class="latin">musica</span> where it did partly for that reason. Not because sound matters more than being, but because here, early, and with a piece of wire, a young man can find out what it is actually like to know something all the way down.</p>
<p>Go back to the string. Halt it at 1, at 3/4, at 2/3, at 1/2. It is the same string it was in <span class="xref" data-to="iii-1"></span>, and the ratios are what they have always been. You are not what you were.</p>
<div class="widget" data-kind="monochord" data-start="2/3"></div>
`,
  sources: "Aristotle, Politics VIII.3 (1338b2–4); Boethius, De inst. mus. I.34; Aquinas, ST I q.5 a.4 ad 1; Super Boethium De Trinitate q.5 a.1 ad 3; J. H. Newman, The Idea of a University, Discourse V (“Knowledge Its Own End”), cited as a modern witness to the tradition and not as an authority within the art.",
  check: {
    q: "What does this art chiefly give a man living now?",
    options: [
      "A defensible taste in music, and grounds for preferring older music to newer.",
      "A verified case in which the beautiful is shown to be intelligible, a habit of asking by what measure, and the experience of possessing one whole thing through its causes.",
      "A skill that can be turned to use, since no study is worth having otherwise."
    ],
    answer: 1,
    why: "The first is not this art’s business and this course has refused it throughout. The third would make the art servile. What is left is what a liberal art is: knowledge that changes the knower, and is its own reward."
  }
},

{
  id: "sources",
  ch: "app",
  n: "A",
  title: "Sources, and where we left things open",
  html: `
<p>This course is not a new theory of music. It is a first-principles walk through a received art. The spine is Boethius, <em>De institutione musica</em>, itself dependent on Nicomachus and, behind him, the Pythagorean teaching about the monochord. Ptolemy is heard where the tradition itself heard him, as a second authority, not as a replacement for the first ratios. Augustine’s definition and his distinction of science from mere doing are kept; his books on meter are not taught here, because they are another part of the art. Kalkavage’s <em>On the Measurement of Tones</em> is used as a pedagogical order (the string, then the ratio), not as a master of doctrine.</p>
<p>St. Thomas is the judge of disputed points, not because he wrote a harmonics — he did not — but because he wrote the philosophy of the sciences in which harmonics must sit, and because he wrote enough about sound, beauty, the heavens, and the use of song to close some questions and to forbid closing others.</p>
<p><strong>Closed, with Thomas.</strong> Music as liberal art is a middle science: physical subject, arithmetic middle terms. Knowledge of it begins in the senses and is perfected in the intellect. Beauty in sound is due proportion, which pleases because sense is a kind of reason. The heavens do not make audible music. Song may serve devotion; the art is not the same as that service. The performer is not as such the <span class="latin">musicus</span>.</p>
<p><strong>Left open, because Thomas (and often the art) left them open.</strong> Whether 5:4 is a concord in the strict sense — left open in Chapters I–VII, where it is not first; <span class="xref" data-ch="VII"></span> reports how the art itself closed it, by widening the bound of concord from four to six with Zarlino, which is a development within the method and not a departure from it. How far <span class="latin">musica humana</span> can be more than analogy. How the Greek modes map onto later church tones. Whether every detail of Boethius’s transmission of the Greek names is historically exact. Equal temperament as a practical compromise (it is not the nature of the intervals; how far one may use it in performance is prudence, not this science).</p>
<p><strong>What was added to the received art, and on whose authority.</strong> Four lessons carry doctrine that Boethius and Nicomachus take for granted rather than teach, and that a modern reader will not have: the five kinds of ratio with their Latin names <span class="xref" data-to="arith-1"></span>, from the <span class="latin">De institutione arithmetica</span>, which Boethius wrote first and presupposed throughout; the three means and the musical proportion 6:8:9:12 <span class="xref" data-to="means-1"></span>, with Archytas’s theorem that no superparticular ratio can be halved — which the course had until then only asserted; and the Greater Perfect System with the three genera <span class="xref" data-to="sys-1"></span>, without which the tetrachord is a bone presented as a skeleton. None of this is new. All of it is in Boethius, Nicomachus, Ptolemy, or the <span class="latin">Sectio canonis</span>. Where the ancient text gives no exact ratio — the enharmonic diesis — the course says so rather than supplying one.</p>
<p><strong>Why the art is liberal</strong> <span class="xref" data-to="lib-1"></span> rests on Aristotle’s <em>Metaphysics</em> I.2 and <em>Politics</em> VIII; on St. Thomas at <span class="latin">In Meta.</span> I lect. 3, where the liberal-and-servile sentence actually stands (it is commonly misattributed to the <span class="latin">Summa</span>), at <span class="latin">ST</span> I-II q.57 a.3 ad 3, and at <span class="latin">Super Boethium De Trinitate</span> q.5 a.1 ad 3; and on Boethius I.34. <span class="xref" data-ch="end"></span> follows Plato’s <em>Republic</em> VII and Augustine’s <span class="latin">De musica</span> VI together with his own statement of purpose in <em>Epistle</em> 101, and marks the place where St. Thomas parts from Augustine on the light by which we judge. Newman is quoted once and labelled a modern witness, not an authority within the art. No claim about what any man ought to listen to is made anywhere in this course.</p>
<p><strong><span class="xref" data-ch="east"></span> stands on the same footing as <span class="xref" data-ch="VII"></span>, and needs one warning more.</strong> It treats three living traditions of worship, and only so far as they are premodern; nothing in it concerns the present life of those churches, and no Western-influenced polyphony is described except to mark it as such. Each tradition’s account of itself is given first, in its own terms. A man who cannot state a claim as its holders state it is not yet in a position to judge it. Where modern scholars have disputed such an account, the dispute is reported in a marked remark, with the grounds on which it rests and nothing further. <strong>This course does not adjudicate those questions and should not be read as having done so.</strong> They belong to the history of liturgy and of the ancient world rather than to harmonics; what can be said on either side is set down, and the reader is left with it.</p>
<p>That chapter rests on the primary record (the <span class="latin">Hagiopolites</span>; Manuel Chrysaphes, 1458; Ibn Kabar, d. 1324; Mezenets, 1670) and on the specialist literature: Jeffery, Cody and Frøyshov on the Jerusalem origin of the eight modes; Troelsgård, Alexandru, Conomos and Lingas on Byzantine notation, transcription and the ison; Velimirović, Brazhnikov, Gardner and Morosan on Russian chant; Martha Roy, Magdalena Kuhn, Ilona Borsai, George Ghaly and Nicholas Ragheb on the Coptic repertory. Where the specialists disagree — whether the drone is older than 1584, whether kondakarian notation has been deciphered, whether the surface motion of a Coptic melody is a series of pitches or a single inflected one — the disagreement is reported and left open.</p>
<p><strong>The exercises</strong> teach no doctrine of their own: every item is answerable from the lessons. Each block is prefaced by a statement of what it is for and how it serves the end of a liberal art, because a drill without that statement is a servile exercise whatever its subject.</p>
<p>Modern interpreters were used as servants. The music tutorial and lectures of Thomas Aquinas College, and articles in <em>The Aquinas Review</em> on the order of learning, the mathematical arts, and beauty, were preferred to more distant reconstructions — and then measured against Aristotle, Boethius, and Thomas, not taken as a thirteenth text of the quadrivium. <em>The Thomist</em>’s long conversation about the sciences (and the older classification-work on which it draws, especially the division of the middle sciences) was used the same way: to keep harmonics in its place, not to supply a private harmonics of our own.</p>
<p><strong><span class="xref" data-ch="VII"></span> stands on a different footing, and should be read knowing it.</strong> Chapters I–VII expound an art from its principles; <span class="xref" data-ch="VII"></span> narrates a history, and history is not demonstrated. Its spine is the primary record — Guido, the <span class="latin">Musica enchiriadis</span>, Franco, Odington, Ramis, Zarlino, Aaron, Salinas, Vincenzo Galilei, Werckmeister, Mersenne, Sauveur, Rameau, Euler, Glarean — with Rens Bod’s <em>World of Patterns</em> (2022) used for the shape of the whole and for one substantive claim: that the cyclic correction of theory by experiment was practised in the study of music before it was practised in the study of nature, and reached Galileo through his father. Bod is a historian of knowledge, not an authority on the art, and where his account is contested (the attribution of Rameau’s system to Newton’s <em>Opticks</em>, for instance) it is not followed. Only Western music is treated, because the question asked is what became of <em>this</em> art.</p>
<p>The judgements in <span class="xref" data-ch="VII"></span> are meant to be even-handed and are stated as such: each development is credited with what it won and charged with what it cost. Two things are asserted flatly, because they are secure. Bach’s <span class="latin">wohltemperirt</span> does not mean equal temperament. And the equal semitone is irrational, so the tuning of a modern keyboard cannot in principle be stated in whole-number ratios. Which temperament Bach wanted, by contrast, is conjecture, and is not guessed at here.</p>
<p>If a claim in the lessons cannot be traced to the art, to Thomas, to the historical record, or to a pedagogical help clearly marked as such, it does not belong. If you find one, it is a mistake, not a school.</p>
`
},

{
  id: "lab",
  ch: "lab",
  n: "S",
  title: "The monochord, free to use",
  html: `
<p>This is not a new lesson. It is the string itself, with the first stopping-places marked. Drag the bridge, or tap a ratio, then hear the open string, the stopped string, and both together.</p>
<p>The open string is 1. Stopped at 3/4 is the fourth (4:3). Stopped at 2/3 is the fifth (3:2). Stopped at 1/2 is the diapason (2:1). Stopped at 8/9 is the tone (9:8). Shorter sounding length, higher pitch. The ratio of the pitches is the inverse of the ratio of the lengths.</p>
<div class="widget" data-kind="monochord" data-start="2/3"></div>
<div class="widget" data-kind="scale"></div>
<p>Return here whenever a lesson names a ratio you cannot yet hear. The art is not in the page. It is in the comparison you make, with the ear and with the number, on one string.</p>
`
}
];
