/* Contemplative return layer.
   Doctrine, not skill. Nothing here is scored or gated.
   First encounter is the author's words, unglossed.
   Returns recast what the text was doing, then append.
   English of Boethius and Augustine is translated from the public-domain
   Latin (Friedlein 1867; PL 32). Plato is Jowett (1894). Aristotle is
   Ross's Nicomachean Ethics (public domain in the form used here as a
   short excerpt) and Jowett's Politics. Ptolemy is rendered from the
   Greek of Harmonics I.1–2. Bower and Kalkavage are not quoted. */
window.MusicaArs = window.MusicaArs || {};

(function () {
const DAY = 86400000;
/* Gaps between returns: first return one month after opening, then +90 days
   from when that return was taken, then +180 from the next. Cumulative span
   is still 30 / 120 / 300, but each stage waits on the previous taking. */
const INTERVALS = [30 * DAY, 90 * DAY, 180 * DAY];

function passageHTML(p) {
  const cite = p.cite ? `<p class="passage-cite">${p.cite}</p>` : "";
  const lat = p.latin
    ? `<blockquote class="note passage-latin"><p><span class="latin">${p.latin}</span></p></blockquote>`
    : "";
  const en = p.english ? `<blockquote class="note"><p>${p.english}</p></blockquote>` : "";
  return `<div class="passage">${cite}${lat}${en}</div>`;
}

MusicaArs.THEMES = {

"c-musician": {
  honesty: "Boethius wrote this as the close of his first book. The demonstration that you are such a judge, if you become one, is the rest of a liberal education — not this page, and not the palaestra alone.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.34",
    latin: "Tria genera sunt, quae circa artem musicam versantur. Unum genus, quod instrumentis agitur, aliud fingit carmina, tertium, quod instrumentorum opus carmenque diiudicat. Sed illud quidem, quod in instrumentis positum est ibique totam operam consumit, ut sunt citharoedi quique organo ceterisque musicae instrumentis artificium exhibent, a musicae scientiae intellectu seiuncti sunt, quoniam famuli, ut dictum est, sunt, nihil afferentes rationis, sed totius speculationis expertes. Secundum vero musicam agentium genus poetarum est, quod non potius speculatione ac ratione quam naturali quodam instinctu fertur ad carmen. Atque idcirco hoc quoque genus a musica segregandum est. Tertium est, quod iudicandi peritiam sumit, ut rhythmos, cantilenas eorumque carmen possit perpendere. Quod scilicet quoniam totum in ratione ac speculatione positum est, hoc proprie musicae deputabitur, isque est musicus, cui adest facultas secundum speculationem ac rationem idonea canendi de musicis modis ac rhythmis deque generibus cantilenarum ac de permixtionibus ac de omnibus, de quibus posterius explicandum est, ac de poetarum carminibus iudicandi.",
    english: "There are three kinds of those who have to do with the art of music. One kind works by instruments; another fashions songs; the third judges the work of the instruments and the song. Those who are placed among the instruments, and spend all their labour there — kitharists, organists, and the rest who exhibit skill on the instruments of music — are cut off from the understanding of the science, because they are servants, as has been said, bringing no reason, and empty of all speculation. The second kind of those who deal with music is that of the poets, who are carried to song not so much by speculation and reason as by a certain natural instinct. And therefore this kind too is to be set apart from music. The third is the one that takes the skill of judging, so that it can weigh rhythms, melodies, and their song. And because this is placed wholly in reason and speculation, it will be assigned to music properly; and he is the musician who has the faculty, according to speculation and reason, of judging concerning the musical modes and rhythms, and the genera of songs, and the mixings, and the rest of what is to be set out later, and concerning the songs of the poets."
  }]},
  returns: [
    {
      recast: "He was not ranking three jobs. He was ranking three relations of a soul to numbered sound: the hands, the instinct, and the judgement. Only the last possesses the cause. The first two have a work; they do not have the art.",
      passages: [{
        cite: "Aristotle, <em>Metaphysics</em> I.1",
        english: "Art arises when from many notions gained by experience one universal judgement about a class of objects is produced. \ldots We think that knowledge and understanding belong to art rather than to experience, and we suppose artists to be wiser than men of experience \ldots because the former know the cause, but the latter do not."
      }]
    },
    {
      recast: "The poet is set aside not because making is nothing, but because being carried by instinct is not speculation. Gift is not science. St. Thomas names the same distinction when he says what an art is: right reason of things to be made — reason, not a knack.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I–II q.57 a.3",
        english: "Art is nothing other than right reason about certain works to be made. And yet the habit of art is in the reason; the making that follows is the work of the other powers as they are moved by reason."
      }]
    },
    {
      recast: "You are not being asked to stop singing. You are being asked not to confuse the throat with the intellect. Song may serve devotion; prudence tells you when. The science tells you what a concord is. Boethius’s third kind is the one in whom that science exists.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> II–II q.91 a.2",
        english: "The human soul is moved in various ways according to various melodies of sound. \ldots Song is useful, that the minds of the faint-hearted may be roused to devotion. \ldots Yet if it be done for ostentation, or if the singing move more than the thing which is sung, it is to be blamed."
      }]
    }
  ]
},

"c-criteria": {
  honesty: "Ptolemy’s rule is the method of a middle science: the ear gives the subject, reason the cause. The full treatise is the <span class=\"latin\">Harmonics</span>. This page cannot replace it.",
  first: { passages: [{
    cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.1–2",
    english: "The criteria of harmonics are hearing and reason: hearing as matter, reason as form and cause. Hearing is close to the matter; it is affected with the sounds. Reason is close to the form; it discerns the cause. They must not despise one another. Hearing is like a servant; reason like a master. If hearing is trusted alone, it never arrives at the cause. If reason is trusted alone, it has nothing to be the cause of. The faculty of harmonics grasps the differences of sounds in respect of high and low, and it uses both."
  }]},
  returns: [
    {
      recast: "He was not choosing a side in a fight between the ear and number. He was assigning roles. Matter without form is not known; form without matter has nothing to be the form of. The same pair runs through Aristotle wherever a science has a physical subject.",
      passages: [{
        cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.2",
        english: "It is not necessary to attach the theoretical to the differences of the sounds as they are simply heard, nor to attach what is heard to the ratios as they are simply calculated, but to fit the two together as far as possible. The instrument of this kind of demonstration is called the harmonic canon, from common measurement, and from providing a criterion of the perceived against the truth."
      }]
    },
    {
      recast: "Servant and master is not contempt for the ear. A servant who is dismissed leaves the master with empty hands. Hearing finds what is near; reason finds what is exact. The kanon exists so that the two reports can be laid together.",
      passages: [{
        cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.1",
        english: "Hearing is by nature fitted to find what is approximate, reason to find what is exact. Hearing is not to be despised on that account, nor reason trusted as if it had a matter of its own. Each does the work the other cannot do."
      }]
    },
    {
      recast: "What the two criteria are doing, named as a science, is this: harmonics takes its subject from hearing and its middle terms from arithmetic. That is what St. Thomas means by a middle science. Ptolemy described the method. He did not have the name.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Super Boethium De Trinitate</span> q.5 a.3 ad 6",
        english: "The middle sciences apply mathematical principles to natural things: as music applies them to sound, and astronomy to the heavens. They have a natural subject, and they demonstrate through mathematical middle terms."
      }]
    }
  ]
},

"c-please": {
  honesty: "That simple ratios please is a fact you can hear on a string. Why the world is such that they please is not a theorem of this art. The question is asked honestly only after the fact is in your possession. Plato asks it in <em>Republic</em> VII; St. Thomas treats the beautiful as due proportion at <span class=\"latin\">ST</span> I q.5 a.4.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.8 and I.9",
    latin: "Consonantia est acuti soni gravisque mixtura suaviter uniformiterque auribus accidens. \ldots Non omne iudicium dandum esse sensibus, sed amplius rationi esse credendum, quae nisi iudex quodammodo praeesset erranti, omnis extra rectitudinem sensus praecipitaretur. Nam ipse sensus aeque ac ratio confusus est, nisi ei ratio quasi paedagogus quidam assistat.",
    english: "Concord is the mixture of a high sound and a low, falling on the ears sweetly and as one. \ldots Not every judgement is to be given to the senses, but more is to be trusted to reason; and unless reason stood over the erring sense as a kind of judge, the whole of sense would be carried outside what is right. For sense itself is confused, no less than reason would be, unless reason stood by it as a tutor."
  }]},
  returns: [
    {
      recast: "The definition already contains the fact. Concord is not a ratio that happens, afterwards, to please. It is a mixture that falls on the ears sweetly and as one. St. Thomas names the same thing among the conditions of beauty: due proportion, which he also calls <span class=\"latin\">consonantia</span>.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.39 a.8",
        english: "For beauty includes three conditions: integrity or perfection, since those things which are impaired are by the very fact ugly; due proportion or harmony (<span class=\"latin\">consonantia</span>); and lastly brightness, or clarity."
      }]
    },
    {
      recast: "Why the simple ratios are the ones that do this is not a second fact glued onto the first. St. Thomas’s account is that sense itself is a kind of reason, and so is pleased by what is after its own kind — due proportion. The tutor in Boethius and the ‘sort of reason’ in Thomas are the same claim.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.5 a.4",
        english: "Beauty and goodness in a thing are identical fundamentally, for they are based upon the same thing, namely the form. But they differ logically: goodness relates to the appetite, beauty to the cognitive faculty; for beautiful things are those which please when seen. Hence beauty consists in due proportion; for the senses delight in things duly proportioned, as in what is after their own kind — because even sense is a sort of reason."
      }]
    },
    {
      recast: "That the world is such that due proportion pleases is not a theorem of harmonics. The art can put the fact in your possession. The question why number and hearing agree is asked honestly only then, and it is asked in philosophy. Plato already refused to stop at the heard concords.",
      passages: [{
        cite: "Plato, <em>Republic</em> VII, 531c (tr. Jowett)",
        english: "They are like astronomers; they are in quest of the numbers which are to be found in these heard concords, but they never attain to the natural harmonies of number, or reflect why some numbers are harmonious and others not."
      }]
    }
  ]
},

"c-soul": {
  honesty: "Boethius states the joining; he does not prove what a soul is. That the soul is the form of the body is St. Thomas’s teaching, at <span class=\"latin\">ST</span> I q.76. Health as a tempered mixture belongs to natural philosophy and to medicine. This art can show you the image. It cannot establish the doctrine.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.2",
    latin: "Humanam vero musicam quisquis in sese ipsum descendit intellegit. Quid est enim quod illam incorpoream rationis vivacitatem corpori misceat, nisi quaedam coaptatio et veluti gravium leviumque vocum quasi unam consonantiam efficiens temperatio? Quid est autem aliud quod ipsius inter se partes animae coniungat, quae, ut Aristoteli placet, ex rationabili irrationabilique coniuncta est? Quid vero quod corporis elementa permisceat aut partes sibimet rata coaptatione contineat?",
    english: "Whoever descends into himself understands human music. For what is it that mixes that incorporeal liveliness of reason with the body, if not a certain fitting-together, a tempering that makes, as it were, one concord of low sounds and high? And what else is it that joins the parts of the soul to one another — the soul which, as Aristotle holds, is composed of the rational and the irrational? And what is it that mixes the elements of the body, or holds the parts together by a measured fitting?"
  }]},
  returns: [
    {
      recast: "Three questions, one analogia. Soul to body; the parts of the soul to one another; the elements of the body to one another. Each is a measured fitting, as low and high are fitted. He is not proving three sciences. He is showing you the same order in three places, so that you will recognise it when you leave the string.",
      passages: [{
        cite: "Aristotle, <em>De anima</em> II.1",
        english: "The soul is the first actuality of a natural body which has life potentially. \ldots It is not a body, but is something of a body; and for this reason it is in a body, and in a body of a definite kind."
      }]
    },
    {
      recast: "The joining is not the claim that the soul <em>is</em> a ratio. That claim Aristotle refuses. A harmony is a proportion of mixed parts; the soul is what causes the mixture, not the mixture itself. Boethius said ‘as it were.’ The ‘as it were’ is the whole of the analogy’s honesty.",
      passages: [{
        cite: "Aristotle, <em>De anima</em> I.4",
        english: "If the soul were a harmony, it would be a harmony of the parts of the body. But harmony is a certain proportion or composition of the things blended, and the soul cannot be either of these. \ldots Rather the soul is that which causes the mixture, as being the cause of the body."
      }]
    },
    {
      recast: "What St. Thomas adds is not a third music. He says what the joining <em>is</em>: the soul is the form of the body, not a sailor in a ship, not a tuning laid on afterwards. Health as a tempered mixture of the body belongs with this, as Boethius already joined it. The string made the image audible. The demonstration is in the <em>De anima</em> and in the <span class=\"latin\">Summa</span>.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.76 a.1",
        english: "The intellective soul is united to the body as its substantial form. \ldots For the soul is the principle by which we live, sense, and understand; and these are not in us as in a sailor in a ship, but as in a form in its matter."
      }]
    }
  ]
},

"c-virtue": {
  honesty: "That virtue is a mean, and that the soul has parts which can be in or out of tune, is not proved on a monochord. It is established in Aristotle’s <em>Nicomachean Ethics</em> II, and in St. Thomas at <span class=\"latin\">ST</span> I–II, especially q.55 and q.64. This course can make the image credible. It cannot give you the ethics.",
  first: { passages: [{
    cite: "Plato, <em>Republic</em> IV, 443c–e (tr. Jowett)",
    english: "But in reality justice was such as we were describing, being concerned however, not with the outward man, but with the inward, which is the true self and concernment of man: for the just man does not permit the several elements within him to interfere with one another, or any of them to do the work of others, — he sets in order his own inner life, and is his own master and his own law, and at peace with himself; and when he has bound together the three principles within him, which may be compared to the higher, lower, and middle notes of the scale, and the intermediate intervals — when he has bound all these together, and is no longer many, but has become one entirely temperate and perfectly adjusted nature, then he proceeds to act, if he has to act, whether in a matter of property, or in the treatment of the body, or in some affair of politics or private business; always thinking and calling that which preserves and co-operates with this harmonious condition, just and good action, and the knowledge which presides over it, wisdom, and that which at any time impairs this condition, he will call unjust action, and the opinion which presides over it ignorance."
  }]},
  returns: [
    {
      recast: "The passage was not comparing a just man to a musician as an ornament. It was saying that justice is an inner attunement: three principles bound as the notes of a scale are bound, so that a man is no longer many. The scale was the thing he already knew, used to name what the soul is when it is one.",
      passages: [{
        cite: "Aristotle, <em>Nicomachean Ethics</em> II.6",
        english: "Virtue, then, is a state of character concerned with choice, lying in a mean, i.e. the mean relative to us, this being determined by a rational principle, and by that principle by which the man of practical wisdom would determine it. Now it is a mean between two vices, that which depends on excess and that which depends on defect. \ldots Hence in respect of its substance and the definition which states its essence virtue is a mean, with regard to what is best and right an extreme."
      }]
    },
    {
      recast: "A mean here is not a mush between two errors, as if 3:2 were a blur between 2:1 and 4:3. It is a determinate standing, as a ratio is determinate. Excess and defect miss it on either side, as a string tuned too tight or too slack misses the concord. Aristotle is naming a proportion in the soul’s acts.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I–II q.64 a.1",
        english: "The good of a moral virtue consists in its attaining the rule of reason. Now it is evident that between excess and defect the mean is equality or conformity to rule. Therefore it is evident that moral virtue observes the mean. \ldots The mean of moral virtue is the mean of reason, not the mean of the thing."
      }]
    },
    {
      recast: "St. Thomas is not adding a third music. He is saying where the mean lives: in conformity to reason, not in an arithmetic halfway point in the thing done. The image you heard in Plato, and the definition you heard in Aristotle, are the same claim under two lights. The health of the body as a tempered mixture belongs with them, as Boethius already joined it to the soul’s fitting. None of this was shown on the string. The string made the image audible.",
      passages: [{
        cite: "Plato, <em>Republic</em> IV, 444d–e (tr. Jowett)",
        english: "Virtue is the health and beauty and well-being of the soul, and vice the disease and weakness and deformity of the same. And is not good habit also a true order, and bad habit a want of order, in the body? \ldots Then virtue is the order of the soul, as health is the order of the body."
      }]
    }
  ]
},

"c-ethos": {
  honesty: "That melody moves character is a claim of ethics and politics, not of harmonics. Aristotle treats it in <em>Politics</em> VIII; Plato in <em>Republic</em> III; St. Thomas when he asks whether God should be praised with song, at <span class=\"latin\">ST</span> II–II q.91. This course reports the claim. It does not legislate.",
  first: { passages: [{
    cite: "Aristotle, <em>Politics</em> VIII.5 (tr. Jowett)",
    english: "Even in mere melodies there is an imitation of character, for the musical modes differ essentially from one another, and those who hear them are differently affected by each. Some of them make men sad and grave, like the so-called Mixolydian, others enfeeble the mind, like the relaxed modes, another, again, produces a moderate and settled temper, which appears to be the peculiar effect of the Dorian; the Phrygian inspires enthusiasm. \ldots The whole of music is of the nature of an imitation, and the different kinds of melody and rhythm are clearly imitations of different kinds of character."
  }]},
  returns: [
    {
      recast: "He is not describing tastes. He is saying that a melody is already an imitation of character, and so it forms the hearer whether anyone meant it to or not. The modes are not flavours added to a tune. They are kinds.",
      passages: [{
        cite: "Plato, <em>Republic</em> III, 398d–399c (tr. Jowett)",
        english: "And which are the harmonies expressive of sorrow? The Mixolydian, he replied, and the tense Lydian. These then I said must be discarded. \ldots And which of the harmonies are the soft and convivial? The Ionian, he replied, and the Lydian, which are called relaxed. These also I said I would have none of. \ldots Then, I said, Dorian and Phrygian remain."
      }]
    },
    {
      recast: "Plato is legislating for a city. Aristotle is describing what the modes do, and then asking what a city should use. Neither is doing harmonics. The ratios of the Dorian tetrachord do not prove that Dorian settles the soul. That is a claim of ethics, tested in the hearing of men, judged by prudence.",
      passages: [{
        cite: "Aristotle, <em>Politics</em> VIII.7 (tr. Jowett)",
        english: "We accept the classification of melodies made by some philosophers into ethical, practical, and enthusiastic, each having a nature of its own. \ldots Those which are ethical are to be preferred for education; the others may be used for listening to when others perform."
      }]
    },
    {
      recast: "St. Thomas takes the same fact when he asks whether God should be praised with song. Melody moves the soul; therefore it may be used, and therefore it may be abused. Harmonics can tell you what you are hearing. It cannot tell you whether to sing.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> II–II q.91 a.2",
        english: "As Augustine says, the soul is moved in various ways according to the various affections of the heart, and it is by a certain hidden correspondence that a melody is likened to those affections. \ldots Hence the use of music in the divine praises is salutary. It is not the art of harmonics that decides the use. It is prudence, looking at the end."
      }]
    }
  ]
},

"c-ascent": {
  honesty: "Augustine’s sixth book is the place. Whether the light by which we judge is an illumination from without, or the agent intellect as a created participation in uncreated light, is disputed between him and St. Thomas (<span class=\"latin\">ST</span> I q.79 a.4; q.84 a.5). What is not disputed is the fact the ascent starts from: in judging a proportion you use a measure you did not make.",
  first: { passages: [{
    cite: "Augustine, <span class=\"latin\">De musica</span> VI.ii.2",
    latin: "Hos igitur numeros qui sunt in ipsa sonandi passione, sonantes vocemus. Rursus qui ab his fiunt in sensu audientis, occursorum nomine notemus. Qui autem sunt in ipso actu pronuntiantis, progressores; qui in memoria, recordabiles. Qui denique sunt in ipso naturali iudicio sentiendi, cum aliquid nos offendit aut delectat in motibus, iudiciales vocentur.",
    english: "Those numbers, then, which are in the passion of the sounding itself, let us call sounding numbers. Those which are made from these in the sense of the hearer, let us mark with the name of encountering numbers. Those which are in the very act of the one who utters, advancing numbers; those in memory, rememberable. Those, last, which are in the natural judgement of sensing, when something offends us or delights us in motions, let them be called judging numbers."
  }]},
  returns: [
    {
      recast: "He was not listing five psychological facts. He was ordering them by dignity. The sounding body, which most men would have called the music, is last. The numbers by which we judge are first. The whole book is arranged to bring you to that reversal.",
      passages: [{
        cite: "Augustine, <span class=\"latin\">De musica</span> VI.iv",
        latin: "Iudiciales igitur numeri \ldots nec in tempore sunt, nec in loco, nec in ullo corpore, nec in ulla passione corporis, nec in ulla memoria. \ldots His iudicamus de his quae in tempore sunt.",
        english: "The judging numbers, then, are not in time, nor in place, nor in any body, nor in any passion of the body, nor in any memory. \ldots By these we judge of the things that are in time."
      }]
    },
    {
      recast: "What the last passage was doing is this: it took the judging numbers out of every place you might have put them. Not in the sound. Not in the ear. Not in the act. Not in memory. You correct the sound by them; they are not given you by the sound. You can judge a measure you have never heard; they are not memory. They are the standard, and the standard is not yours.",
      passages: [{
        cite: "Augustine, <span class=\"latin\">De musica</span> VI.xii",
        latin: "Quapropter oportet fateamur, et in nobis esse iudiciales istos numeros, et extra nos esse, et supra nos esse. In nobis, quia iudicamus; extra nos, quia secundum eos iudicamus, nec eos facimus; supra nos, quia incommutabiles sunt, nos autem mutabiles.",
        english: "Wherefore we must confess that these judging numbers are in us, and outside us, and above us. In us, because we judge; outside us, because we judge according to them, and do not make them; above us, because they are unchangeable, and we are changeable."
      }]
    },
    {
      recast: "Augustine’s next step is the one his whole philosophy turns on: the unchangeable is in God. St. Thomas does not take the account of illumination whole. He grants the fact the ascent starts from, and names the light the agent intellect — created, ours, a participation. The two doctors part. Neither will let you pretend the measure is your invention. A man who has stopped a string at two thirds and heard it please has already met that refusal.",
      passages: [{
        cite: "Augustine, <em>Confessions</em> X.xxxiii.49–50",
        latin: "Ita fluctuo inter periculum voluptatis et experimentum salubritatis. \ldots Cum mihi accidit ut me amplius cantus quam res quae canitur moveat, poenaliter me peccare confiteor, et tunc mallem non audire cantantem.",
        english: "So I fluctuate between the danger of pleasure and the proof of profit. \ldots When it happens to me that the singing moves me more than the thing which is sung, I confess that I sin, and it would then be better not to have heard the singer."
      }]
    }
  ]
},

"c-intact": {
  honesty: "The ratios you can verify on a string. The metaphysics under which a ratio is a trace of intellect — form, not a brute regularity — is St. Thomas’s, and Aristotle’s before him. It is not proved here. It is shown here enough to be believed, and to be returned to in the books: the <em>Metaphysics</em>, the <em>De anima</em>, the <span class=\"latin\">Summa</span> I and I–II.",
  first: { passages: [{
    cite: "",
    english: "The liberal art of music did not fall because the world fell silent. A string stopped at half still sounds the diapason. Consonance still tracks the simple ratios. The sounding body still carries its upper partials. Those are not memories of a lost age. They are in the room."
  }, {
    cite: "",
    english: "What lapsed is not the ratios. What lapsed is the public holding of the metaphysics under which a ratio <em>signifies</em> — a trace of forming intellect, not a brute regularity. Nominalism did not un-tune the string. It un-taught the form. Equal temperament did trade away pure ratios, and the spheres do not sound: those are real losses, and they are losses in what is audible. The core took none of that damage."
  }, {
    cite: "",
    english: "Hylomorphism was not refuted. That the soul is the form of the body was not refuted. That virtue is a mean determined by reason was not refuted. St. Thomas still teaches these, and they remain demonstrable. What changed is their currency, not their standing. The art is intact. It is available. Recovery is attention, not archaeology. The doorway is this course. The house is the tradition."
  }]},
  returns: [
    {
      recast: "The first paragraph was not nostalgia. It was pointing at what is still sounding. A lost age is a story. A string stopped at half is not a story. The art’s first object did not go anywhere.",
      passages: [{
        cite: "Wisdom 11:21",
        latin: "Omnia in mensura, et numero, et pondere disposuisti.",
        english: "You have disposed all things in measure, and number, and weight."
      }]
    },
    {
      recast: "The second paragraph distinguished two kinds of loss. Equal temperament and the silence of the spheres are losses in what is audible. Nominalism is a loss in what is understood. The first kind can be heard. The second kind has to be named, or it will be mistaken for a refutation.",
      passages: [{
        cite: "Aristotle, <em>Metaphysics</em> VII.17",
        english: "What we seek is the cause, that is the form, by reason of which the matter is some definite thing. This is the substance of the thing. \ldots The syllable is not its letters, the flesh is not fire and earth; there is something besides, and that something is the cause of their being one."
      }]
    },
    {
      recast: "Recovery is not reconstructing a museum. The doorway is the string you can still stop. The house is the books in which the form is actually demonstrated. St. Thomas is still the teacher of those books. Attention is the whole of the method.",
      passages: [{
        cite: "Augustine, <span class=\"latin\">De vera religione</span> 39.72",
        latin: "Noli foras ire, in teipsum redi; in interiore homine habitat veritas; et si tuam naturam mutabilem inveneris, transcende et teipsum.",
        english: "Do not go outside, return into yourself; truth dwells in the inner man. And if you find your nature changeable, go beyond yourself as well."
      }]
    }
  ]
}

};

function recOf(id) {
  const all = (MusicaArs._contState && MusicaArs._contState()) || {};
  return all[id] || null;
}

function filledReturns(theme) {
  const rs = theme.returns || [];
  let n = 0;
  for (let i = 0; i < rs.length; i++) {
    if (rs[i] && rs[i].passages && rs[i].passages.length) n = i + 1;
    else break;
  }
  return n;
}

function availableStage(theme, rec) {
  if (!rec || !rec.first) return 0;
  const filled = filledReturns(theme);
  if (!filled) return 0;
  const taken = rec.taken || [];
  /* Returns already taken stay visible even if old data stamped them together. */
  let stage = Math.min(taken.length, filled);
  for (let i = stage; i < filled; i++) {
    const anchor = i === 0 ? rec.first : taken[i - 1];
    if (!anchor) break;
    if (Date.now() - anchor >= INTERVALS[i]) stage = i + 1;
    else break;
  }
  return stage;
}

MusicaArs.contemplateStage = function (id) {
  const theme = MusicaArs.THEMES[id];
  if (!theme) return 0;
  return availableStage(theme, recOf(id));
};

MusicaArs.contemplateDue = function () {
  const out = [];
  Object.keys(MusicaArs.THEMES).forEach(id => {
    const theme = MusicaArs.THEMES[id];
    const rec = recOf(id);
    const avail = availableStage(theme, rec);
    const seen = rec && rec.seen != null ? rec.seen : 0;
    if (avail > seen) {
      const lesson = (MusicaArs.LESSONS || []).find(l => l.contemplate === id);
      out.push({ id, title: lesson ? lesson.title : id, stage: avail });
    }
  });
  return out;
};

MusicaArs.touchContemplation = function (id) {
  const theme = MusicaArs.THEMES[id];
  if (!theme || !MusicaArs._contSave) return;
  const all = MusicaArs._contState() || {};
  const rec = all[id] || { first: 0, seen: 0, taken: [] };
  if (!rec.first) {
    rec.first = Date.now();
    if (!rec.taken) rec.taken = [];
    all[id] = rec;
    MusicaArs._contSave(all);
  }
};

MusicaArs.markContemplation = function (id) {
  const theme = MusicaArs.THEMES[id];
  if (!theme || !MusicaArs._contSave) return;
  const all = MusicaArs._contState() || {};
  const rec = all[id] || { first: 0, seen: 0, taken: [] };
  if (!rec.first) rec.first = Date.now();
  const avail = availableStage(theme, rec);
  if (avail > (rec.seen || 0)) rec.seen = avail;
  if (!rec.taken) rec.taken = [];
  while (rec.taken.length < avail) rec.taken.push(Date.now());
  all[id] = rec;
  MusicaArs._contSave(all);
};

function armReturnRead(root, id, stage) {
  const rec = recOf(id);
  const seen = rec && rec.seen != null ? rec.seen : 0;
  if (stage <= seen) return;
  const returns = root.querySelectorAll(".cont-return");
  const newest = returns[stage - 1];
  if (!newest) return;
  const target = newest.querySelector(".recast") || newest;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    MusicaArs.markContemplation(id);
    const btn = newest.querySelector(".cont-ack");
    if (btn) btn.remove();
    if (obs) obs.disconnect();
  };
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "cont-ack";
  btn.textContent = "I've read this return";
  newest.appendChild(btn);
  btn.addEventListener("click", finish);
  let obs = null;
  if (typeof IntersectionObserver === "function") {
    obs = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting && e.intersectionRatio >= 0.55) {
          finish();
          break;
        }
      }
    }, { threshold: [0.55] });
    obs.observe(target);
  }
}

MusicaArs.renderContemplation = function (el, id) {
  const theme = MusicaArs.THEMES[id];
  if (!theme || !el) return;
  MusicaArs.touchContemplation(id);
  const rec = recOf(id);
  const stage = availableStage(theme, rec);
  let html = `<div class="contemplation">`;
  (theme.first.passages || []).forEach(p => { html += passageHTML(p); });
  for (let i = 0; i < stage; i++) {
    const r = theme.returns[i];
    if (!r) continue;
    html += `<div class="cont-return">`;
    if (r.recast) html += `<div class="recast"><p>${r.recast}</p></div>`;
    (r.passages || []).forEach(p => { html += passageHTML(p); });
    html += `</div>`;
  }
  if (theme.honesty) {
    html += `<div class="honesty"><p>${theme.honesty}</p></div>`;
  }
  const filled = filledReturns(theme);
  if (stage < filled) {
    html += `<p class="cont-waiting">A further passage is waiting. It will be here when its time has come.</p>`;
  } else if (filled < 3) {
    html += `<p class="cont-waiting">This theme will unfold further. The later passages are not yet written.</p>`;
  }
  html += `</div>`;
  el.innerHTML = html;
  armReturnRead(el, id, stage);
};

})();
