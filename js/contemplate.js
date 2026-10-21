/* Contemplative return layer.
   Doctrine, not skill. Nothing here is scored or gated.
   First encounter is the author's words, unglossed.
   Returns recast what the text was doing, then append.
   English of Boethius and Augustine is translated from the public-domain
   Latin (Friedlein 1867; PL 32). Plato in the returns is Jowett (1894).
   Republic IV, 424c is Shorey, and Laws III, 701a is Bury. Aristotle is
   Ross's Nicomachean Ethics and Metaphysics (public domain in the form
   used here as a short excerpt) and Jowett's Politics. The translators
   are named in the Sources lesson, not beside the quotation. Ptolemy is
   rendered from the Greek of Harmonics I.1–2. Bower and Kalkavage are
   not quoted. */
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
  honesty: "Boethius wrote this as the close of his first book. Whether a student becomes such a judge is shown by the rest of a liberal education, not by this passage, and not by the palaestra alone.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.34",
    latin: "Tria genera sunt, quae circa artem musicam versantur. Unum genus, quod instrumentis agitur, aliud fingit carmina, tertium, quod instrumentorum opus carmenque diiudicat. Sed illud quidem, quod in instrumentis positum est ibique totam operam consumit, ut sunt citharoedi quique organo ceterisque musicae instrumentis artificium exhibent, a musicae scientiae intellectu seiuncti sunt, quoniam famuli, ut dictum est, sunt, nihil afferentes rationis, sed totius speculationis expertes. Secundum vero musicam agentium genus poetarum est, quod non potius speculatione ac ratione quam naturali quodam instinctu fertur ad carmen. Atque idcirco hoc quoque genus a musica segregandum est. Tertium est, quod iudicandi peritiam sumit, ut rhythmos, cantilenas eorumque carmen possit perpendere. Quod scilicet quoniam totum in ratione ac speculatione positum est, hoc proprie musicae deputabitur, isque est musicus, cui adest facultas secundum speculationem ac rationem idonea canendi de musicis modis ac rhythmis deque generibus cantilenarum ac de permixtionibus ac de omnibus, de quibus posterius explicandum est, ac de poetarum carminibus iudicandi.",
    english: "There are three kinds of those who have to do with the art of music. One kind works by instruments; another fashions songs; the third judges the work of the instruments and the song. Those who are placed among the instruments, and spend all their labour there — kitharists, organists, and the rest who exhibit skill on the instruments of music — are cut off from the understanding of the science, because they are servants, as has been said, bringing no reason, and empty of all speculation. The second kind of those who deal with music is that of the poets, who are carried to song not so much by speculation and reason as by a certain natural instinct. And therefore this kind too is to be set apart from music. The third is the one that takes the skill of judging, so that it can weigh rhythms, melodies, and their song. And because this is placed wholly in reason and speculation, it will be assigned to music properly; and he is the musician who has the faculty, according to speculation and reason, of judging concerning the musical modes and rhythms, and the genera of songs, and the mixings, and the rest of what is to be set out later, and concerning the songs of the poets."
  }]},
  returns: [
    {
      recast: "Boethius divides by whether the cause is possessed. Those who play, and those carried to song by instinct, have a work; the third kind judges, and judging is placed in reason.",
      passages: [{
        cite: "Aristotle, <em>Metaphysics</em> I.1",
        english: "Art arises when from many notions gained by experience one universal judgement about a class of objects is produced. … We think that knowledge and understanding belong to art rather than to experience, and we suppose artists to be wiser than men of experience … because the former know the cause, but the latter do not."
      }]
    },
    {
      recast: "Instinct is not speculation; and St. Thomas’s definition of art (right reason of things to be made) puts the habit in the reason, even when the making is done by the hands.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I–II q.57 a.3",
        english: "Art is nothing else but ‘the right reason about certain works to be made.’ And yet the good of these things depends, not on man’s appetitive faculty being affected in this or that way, but on the goodness of the work done. … Art, therefore, properly speaking, is an operative habit."
      }]
    },
    {
      recast: "The liberal arts are those ordered to knowing, but playing and composing are ordered to a work produced; that is why Boethius assigns music properly to the one who judges. Boethius says nothing here of character, but Peter of Auvergne, completing St. Thomas’s commentary on the <em>Politics</em>, joins the two: to judge the ratios of the tones rightly, and to take delight in them rightly, is a kind of exercise toward virtue, so the judge Boethius describes is also being formed in his passions.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Super Boethium De Trinitate</span> q.5 a.1 ad 3",
        english: "Those arts alone are called liberal which are ordered to knowing; those which are ordered to some usefulness to be had through action are called mechanical, or servile."
      }]
    }
  ]
},

"c-criteria": {
  honesty: "Ptolemy’s rule is the method of a middle science: the ear gives the subject, reason the cause. The full account is in the <span class=\"latin\">Harmonics</span>, and this passage cannot replace it.",
  first: { passages: [{
    cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.1–2",
    english: "The criteria of harmonics are hearing and reason: hearing as matter, reason as form and cause. Hearing is close to the matter; it is affected with the sounds. Reason is close to the form; it discerns the cause. They must not despise one another. Hearing is like a servant; reason like a master. If hearing is trusted alone, it never arrives at the cause. If reason is trusted alone, it has nothing to be the cause of. The faculty of harmonics grasps the differences of sounds in respect of high and low, and it uses both."
  }]},
  returns: [
    {
      recast: "Hearing supplies the matter of the science, and reason supplies the form and the cause; the pairing is the same as in any science that has a physical subject.",
      passages: [{
        cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.2",
        english: "It is not necessary to attach the theoretical to the differences of the sounds as they are simply heard, nor to attach what is heard to the ratios as they are simply calculated, but to fit the two together as far as possible. The instrument of this kind of demonstration is called the harmonic canon, from common measurement, and from providing a criterion of the perceived against the truth."
      }]
    },
    {
      recast: "Hearing finds what is approximate, and reason what is exact; so the kanon (the measuring instrument) is the instrument on which the two reports are compared, so that neither is trusted alone.",
      passages: [{
        cite: "Ptolemy, <span class=\"latin\">Harmonics</span> I.1",
        english: "Hearing is by nature fitted to find what is approximate, reason to find what is exact. Hearing is not to be despised on that account, nor reason trusted as if it had a matter of its own. Each does the work the other cannot do."
      }]
    },
    {
      recast: "Stated as the marks of a science, the two criteria amount to a natural subject and mathematical middle terms, and St. Thomas calls such a science a middle science. Ptolemy described the method, but the name is later.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Super Boethium De Trinitate</span> q.5 a.3 ad 6",
        latin: "Quaedam vero sunt mediae, quae principia mathematica ad res naturales applicant, ut musica, astrologia et huiusmodi. … Sicut musica considerat sonos, non in quantum sunt soni, sed in quantum sunt secundum numeros proportionabiles, et similiter est in aliis. Et propter hoc demonstrant conclusiones suas circa res naturales, sed per media mathematica.",
        english: "But some are middle sciences, which apply mathematical principles to natural things, as music, astronomy, and the like. … So music considers sounds, not inasmuch as they are sounds, but inasmuch as they are proportionable according to numbers, and similarly in the others. And for this reason they demonstrate their conclusions about natural things, but through mathematical middle terms."
      }]
    }
  ]
},

"c-please": {
  honesty: "That simple ratios please is a fact we can hear on a string, but why the world is such that they please is not a theorem of this art; and the question is asked honestly only after we know the fact for ourselves. Plato asks it in <em>Republic</em> VII; St. Thomas treats the beautiful as due proportion at <span class=\"latin\">ST</span> I q.5 a.4.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.8 and I.9",
    latin: "Consonantia est acuti soni gravisque mixtura suaviter uniformiterque auribus accidens. … Non omne iudicium dandum esse sensibus, sed amplius rationi esse credendum, quae nisi iudex quodammodo praeesset erranti, omnis extra rectitudinem sensus praecipitaretur. Nam ipse sensus aeque ac ratio confusus est, nisi ei ratio quasi paedagogus quidam assistat.",
    english: "Concord is the mixture of a high sound and a low, falling on the ears sweetly and as one. … Not every judgement is to be given to the senses, but more is to be trusted to reason; and unless reason stood over the erring sense as a kind of judge, the whole of sense would be carried outside what is right. For sense itself is confused, no less than reason would be, unless reason stood by it as a tutor."
  }]},
  returns: [
    {
      recast: "Boethius’s definition already says the mixture falls on the ears as one. St. Thomas lists due proportion (which he also calls <span class=\"latin\">consonantia</span>) among the conditions of beauty.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.39 a.8",
        english: "For beauty includes three conditions, ‘integrity’ or ‘perfection,’ since those things which are impaired are by the very fact ugly; due ‘proportion’ or ‘harmony’; and lastly, ‘brightness’ or ‘clarity.’"
      }]
    },
    {
      recast: "Sense delights in what is after its own kind, and sense is a sort of reason. That is why the simple ratios please, and why Boethius sets reason beside the ear as a tutor. St. Thomas adds that this delight is proper to man, because the pleasure taken in a well-harmonized sound is for its becomingness and “has nothing to do with the preservation of nature” (<span class=\"latin\">ST</span> II–II q.141 a.4 ad 3); so it belongs with knowing, and reason can order it.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.5 a.4 ad 1",
        english: "Beauty and goodness in a thing are identical fundamentally; for they are based upon the same thing, namely, the form; and consequently goodness is praised as beauty. But they differ logically, for goodness properly relates to the appetite … On the other hand, beauty relates to the cognitive faculty; for beautiful things are those which please when seen. Hence beauty consists in due proportion; for the senses delight in things duly proportioned, as in what is after their own kind—because even sense is a sort of reason, just as is every cognitive faculty."
      }]
    },
    {
      recast: "Why the world is such that due proportion pleases is not demonstrated in this art. Plato refused to stop at the heard concords, and the question belongs with his ascent and with the treatment of the beautiful.",
      passages: [{
        cite: "Plato, <em>Republic</em> VII, 531c",
        english: "For they too are in error, like the astronomers; they investigate the numbers of the harmonies which are heard, but they never attain to problems—that is to say, they never reach the natural harmonies of number, or reflect why some numbers are harmonious and others not."
      }]
    }
  ]
},

"c-soul": {
  honesty: "Boethius states the union of soul and body; he does not prove what a soul is. That the soul is the form of the body is St. Thomas’s teaching, at <span class=\"latin\">ST</span> I q.76. Health as a tempered mixture belongs to natural philosophy and to medicine. Music states the image and does not establish the doctrine, because the demonstration belongs to those sciences.",
  first: { passages: [{
    cite: "Boethius, <span class=\"latin\">De institutione musica</span> I.2",
    latin: "Humanam vero musicam quisquis in sese ipsum descendit intellegit. Quid est enim quod illam incorpoream rationis vivacitatem corpori misceat, nisi quaedam coaptatio et veluti gravium leviumque vocum quasi unam consonantiam efficiens temperatio? Quid est autem aliud quod ipsius inter se partes animae coniungat, quae, ut Aristoteli placet, ex rationabili irrationabilique coniuncta est? Quid vero quod corporis elementa permisceat aut partes sibimet rata coaptatione contineat?",
    english: "Whoever descends into himself understands human music. For what is it that mixes that incorporeal liveliness of reason with the body, if not a certain fitting-together, a tempering that makes, as it were, one concord of low sounds and high? And what else is it that joins the parts of the soul to one another — the soul which, as Aristotle holds, is composed of the rational and the irrational? And what is it that mixes the elements of the body, or holds the parts together by a measured fitting?"
  }]},
  returns: [
    {
      recast: "Boethius asks the same question of soul and body, of the parts of the soul, and of the elements of the body. In each case the answer is a measured fitting, as of low and high.",
      passages: [{
        cite: "Aristotle, <em>De anima</em> II.1",
        english: "The soul is the first actuality of a natural body which has life potentially. … It is not a body, but is something of a body; and for this reason it is in a body, and in a body of a definite kind."
      }]
    },
    {
      recast: "Aristotle denies that the soul is itself a harmony, because a harmony is a proportion of mixed parts, while the soul is the cause of the mixture. Boethius’s ‘as it were’ keeps the analogy from becoming that claim. St. Thomas follows Aristotle, and so he corrects the analogy where it could mislead: the measured fitting of the parts that Boethius names is an effect of the soul, which is the form of the body, and it is not the soul itself.",
      passages: [{
        cite: "Aristotle, <em>De anima</em> I.4",
        english: "If the soul were a harmony, it would be a harmony of the parts of the body. But harmony is a certain proportion or composition of the things blended, and the soul cannot be either of these. … Rather the soul is that which causes the mixture, as being the cause of the body."
      }]
    },
    {
      recast: "St. Thomas states the union as one of substantial form: the principle by which we understand is the form of the body, and the same soul is the first principle of our nourishment, sensation, motion, and understanding. Health as a tempered mixture of the body belongs to natural philosophy. Neither is proved from the string; the demonstration is in the <em>De anima</em> and in the <span class=\"latin\">Summa</span>.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I q.76 a.1",
        english: "We must assert that the intellect which is the principle of intellectual operation is the form of the human body. … For the soul is the primary principle of our nourishment, sensation, and local movement; and likewise of our understanding. Therefore this principle by which we primarily understand, whether it be called the intellect or the intellectual soul, is the form of the body."
      }]
    }
  ]
},

"c-virtue": {
  honesty: "That virtue is a mean, and that the soul has parts which can be in or out of tune, is not proved on a monochord. It is established in Aristotle’s <em>Nicomachean Ethics</em> II, and in St. Thomas at <span class=\"latin\">ST</span> I–II, especially q.55 and q.64. Music states the image. The demonstration belongs to ethics.",
  first: { passages: [{
    cite: "Plato, <em>Republic</em> IV, 443c–e",
    english: "But in reality justice was such as we were describing, being concerned however, not with the outward man, but with the inward, which is the true self and concernment of man: for the just man does not permit the several elements within him to interfere with one another, or any of them to do the work of others,—he sets in order his own inner life, and is his own master and his own law, and at peace with himself; and when he has bound together the three principles within him, which may be compared to the higher, lower, and middle notes of the scale, and the intermediate intervals—when he has bound all these together, and is no longer many, but has become one entirely temperate and perfectly adjusted nature, then he proceeds to act, if he has to act, whether in a matter of property, or in the treatment of the body, or in some affair of politics or private business; always thinking and calling that which preserves and co-operates with this harmonious condition, just and good action, and the knowledge which presides over it, wisdom, and that which at any time impairs this condition, he will call unjust action, and the opinion which presides over it ignorance."
  }]},
  returns: [
    {
      recast: "Justice here is an inner attunement: three principles bound as the notes of a scale are bound, so that a man is no longer many; and the scale is used to name what the soul is when it is one. St. Thomas receives Plato’s ordered soul, but he states the order more exactly: reason rules the passions “by a politic power,” as free citizens are ruled, and not as a master rules a slave (<span class=\"latin\">ST</span> I q.81 a.3 ad 2). So the lower parts keep their own movements, and virtue brings those movements into the order of reason.",
      passages: [{
        cite: "Aristotle, <em>Nicomachean Ethics</em> II.6",
        english: "Virtue, then, is a state of character concerned with choice, lying in a mean, i.e. the mean relative to us, this being determined by a rational principle, and by that principle by which the man of practical wisdom would determine it. Now it is a mean between two vices, that which depends on excess and that which depends on defect. … Hence in respect of its substance and the definition which states its essence virtue is a mean, with regard to what is best and right an extreme."
      }]
    },
    {
      recast: "A mean is a determinate standing, as a ratio is, and excess and defect miss it on either side, as a string tuned too tight or too slack misses the concord. So Aristotle is naming a proportion in the soul’s acts.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> I–II q.64 a.1 and a.2",
        english: "Hence it is evident that the good of moral virtue consists in conformity with the rule of reason. Now it is clear that between excess and deficiency the mean is equality or conformity. Therefore it is evident that moral virtue observes the mean. … Secondly, the mean of reason may be considered as that which the reason puts into some particular matter. In this sense every mean of moral virtue is a rational mean."
      }]
    },
    {
      recast: "The mean of moral virtue, St. Thomas says, is the mean that reason puts into the matter. In justice it is also the mean of the thing, but in the passions it is taken in relation to us, and so it is not an arithmetic halfway point. Plato’s image and Aristotle’s definition are the same claim, and the ethics is treated in their books.",
      passages: [{
        cite: "Plato, <em>Republic</em> IV, 444d–e",
        english: "And the creation of health is the institution of a natural order and government of one by another in the parts of the body; and the creation of disease is the production of a state of things at variance with this natural order? … And is not the creation of justice the institution of a natural order and government of one by another in the parts of the soul, and the creation of injustice the production of a state of things at variance with the natural order? … Then virtue is the health and beauty and well-being of the soul, and vice the disease and weakness and deformity of the same?"
      }]
    }
  ]
},

"c-ethos": {
  lead: [
    "Music here can state what has been discovered for applications of music in other arts and sciences, but in those cases music theory itself is primarily stating the application, not proving that it is true, since the demonstrations belong properly to the other sciences. Just as in arithmetic we might state some of the science’s applications to geometry without proving them in detail, so too in music we might state some of the applications of music to ethics, politics, or even cosmology, but without proving them as conclusions.",
    "The application to character that this course states is St. Thomas’s, and the other authors in this section are read as pointing toward his teaching or as measured by it. He begins from a fact that Aristotle and Boethius had already observed, that “the human soul is moved in various ways according to various melodies of sound” (<span class=\"latin\">ST</span> II–II q.91 a.2). A movement of this kind is a passion, and a passion, he holds, is properly a movement of the sensitive appetite, which is accompanied by a change in the body (I–II q.22 a.3). But reason does not rule the sensitive appetite as the soul rules a hand. It rules it “by a politic power,” as a ruler governs free citizens, “because the sensitive appetite has something of its own, by virtue whereof it can resist the commands of reason” (I q.81 a.3 ad 2). So melody reaches the very power that reason governs as free citizens are governed, and not as a hand is moved.",
    "The passions are not evil in themselves. Considered as subject to reason and will, they are morally good or evil (I–II q.24 a.1), and St. Thomas teaches that “it belongs to the perfection of moral good, that man should be moved unto good, not only in respect of his will, but also in respect of his sensitive appetite” (q.24 a.3). Moral virtue therefore does not silence the passions but orders them: “Virtue overcomes inordinate passion; it produces ordinate passion” (q.59 a.5 ad 1). The measure of that order is the mean of virtue, which is conformity with the rule of reason, that is, the mean which reason puts into a given matter; and in the passions this mean is not a fixed point in the thing but is set “with due regard to us, who are moved in respect of the passions” (q.64 a.1–2). This is why the use of melody belongs to moral science. A melody can move the appetite toward the mean or away from it, but which it does depends on the hearer, the occasion, and the end, and those are judged by prudence.",
    "Delight in sound has a place of its own in this account. Other animals take pleasure in the senses only for their usefulness, but man takes pleasure in them also for the sake of knowing (I–II q.31 a.6); so when a man “is pleased at a well-harmonized sound, this pleasure has nothing to do with the preservation of nature” (II–II q.141 a.4 ad 3). Peter of Auvergne, the Paris master who completed St. Thomas’s commentary on the <em>Politics</em>, draws the consequence for Aristotle’s eighth book. Reason in the hearing judges the ratio of the tones; the delight of that judgment is proportioned to the delight a man takes in moral acts that stand in a like proportion; and therefore practice in judging and delighting rightly is a kind of exercise toward virtue.",
    "St. Thomas applies all of this when he asks whether God should be praised with song. Song is a salutary institution because it arouses devotion; but Jerome rightly blames those who sing “in order to show off, or to provoke pleasure” (II–II q.91 a.2 ad 2). Singing for pleasure draws the mind away from what is sung, while singing for devotion attends to it more closely (ad 5); and instruments that “move the soul to pleasure rather than create a good disposition within it” are not used in teaching, as Aristotle had said, nor in the Church’s praise (ad 4). Recreation outside worship is judged by the same rule, since there is a virtue about play that keeps it within the measure of reason (II–II q.168 a.2). Plato applies the same power of melody to the laws of a city. He names Damon of Athens, the fifth-century teacher of Pericles, as the authority for fitting the modes and the rhythms to character. Damon is known to us chiefly through Plato, and his own writings are lost. What the <em>Laws</em> then does with the songs, and how St. Thomas receives and corrects that step, is considered with the question of what the city may rightly ask, in <span class=\"xref\" data-to=\"c-city\"></span>.",
    "This account is stated here from moral philosophy and theology, and it is not demonstrated in this course. Music, St. Thomas says, considers sounds “not inasmuch as they are sounds, but inasmuch as they are proportionable according to numbers” (<span class=\"latin\">Super Boetium De Trinitate</span> q.5 a.3 ad 6), so the ratios of a string are not the premises from which the account is proved."
  ],
  honesty: "That melody moves character is an application of music to ethics and politics. Aristotle treats it in <em>Politics</em> VIII; Plato in <em>Republic</em> III; St. Thomas when he asks whether God should be praised with song, at <span class=\"latin\">ST</span> II–II q.91. Music states that application and does not prove it, because the demonstration belongs to ethics and politics.",
  first: { passages: [{
    cite: "Aristotle, <em>Politics</em> VIII.5",
    english: "Even in mere melodies there is an imitation of character, for the musical modes differ essentially from one another, and those who hear them are differently affected by each. Some of them make men sad and grave, like the so-called Mixolydian, others enfeeble the mind, like the relaxed modes, another, again, produces a moderate and settled temper, which appears to be the peculiar effect of the Dorian; the Phrygian inspires enthusiasm. … The whole of music is of the nature of an imitation, and the different kinds of melody and rhythm are clearly imitations of different kinds of character."
  }]},
  returns: [
    {
      recast: "A melody is already an imitation of character, and so it forms the hearer; and the modes differ in kind. Plato makes the choice of modes a matter of law. St. Thomas receives the fact on which Plato builds, but he measures the lawgiver’s choice by its end: a law is directed to the common good (<span class=\"latin\">ST</span> I–II q.90 a.2), and whether a mode serves that good in a given use is a judgment of prudence, which the ratios of the mode do not settle.",
      passages: [{
        cite: "Plato, <em>Republic</em> III, 398d–399c",
        english: "And which are the harmonies expressive of sorrow? You are musical, and can tell me. The harmonies which you mean are the mixed or tenor Lydian, and the full-toned or bass Lydian, and such like. These then, I said, must be banished; even to women who have a character to maintain they are of no use, and much less to men. … And which are the soft or drinking harmonies? The Ionian, he replied, and the Lydian; they are termed ‘relaxed.’ Well, and are these of any military use? Quite the reverse, he replied; and if so the Dorian and the Phrygian are the only ones which you have left."
      }]
    },
    {
      recast: "Plato is making laws for a city, and Aristotle is describing what the modes do and then asking what a city should use; neither demonstration belongs to harmonics. Music states the application. The ratios of the Dorian tetrachord do not prove that Dorian settles the soul, because that demonstration belongs to ethics, and it is tested in the hearing of men and judged by prudence. St. Thomas takes Aristotle’s rule against the aulos (a reed pipe) in education into his own reply on the Church’s praise (II–II q.91 a.2 ad 4), and he adds a reason of his own for the instruments of the Old Law: the people needed to be aroused by them, and the instruments were figures of something else.",
      passages: [{
        cite: "Aristotle, <em>Politics</em> VIII.7",
        english: "We accept the classification of melodies made by some philosophers into ethical, practical, and enthusiastic, each having a nature of its own. … Those which are ethical are to be preferred for education; the others may be used for listening to when others perform."
      }]
    },
    {
      recast: "St. Thomas takes the same fact when he asks whether God should be praised with song. Harmonics can say what is heard, but whether to sing is a question of prudence.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> II–II q.91 a.2 and ad 2",
        english: "Now it is evident that the human soul is moved in various ways according to various melodies of sound … Hence the use of music in the divine praises is a salutary institution, that the souls of the faint-hearted may be the more incited to devotion. … Jerome does not absolutely condemn singing, but reproves those who sing theatrically in church not in order to arouse devotion, but in order to show off, or to provoke pleasure."
      }]
    }
  ]
},

"c-city": {
  lead: [
    "This contemplation states the application of music to politics. As with its application to ethics, music states the application and does not prove it, because the demonstration belongs to political philosophy. The argument has three parts: what music offers the city, what the city may rightly ask of music, and how St. Thomas judges both.",
    "Music offers the city what it offers each citizen, namely a real power to dispose the passions, since “the human soul is moved in various ways according to various melodies of sound” (<span class=\"latin\">ST</span> II–II q.91 a.2). When many citizens hear the same songs, at worship, at feasts, at work, and in the schooling of the young, that power reaches common life. Plato’s account of that power begins from Damon of Athens, the fifth-century teacher of Pericles. Damon’s own writings are lost, and he is known to us chiefly through Plato. In the <em>Republic</em> Plato takes him as the authority for fitting the modes and the rhythms to character, and says that they will take counsel with Damon as to which feet suit illiberality, insolence, or madness, and which rhythms are to be kept for the opposite character (<em>Republic</em> III, 398c–400c). The modes are chosen by the character they imitate, and the rhythms are to be those of an orderly and brave life, with the rhythm fitted to the words rather than the words fitted to the rhythm. From that fitting Plato draws a consequence for law. A change to a new type of music is something to beware of, he says, as a hazard of all our fortunes, since “the modes of music are never disturbed without unsettling of the most fundamental political and social conventions, as Damon affirms” (<em>Republic</em> IV, 424c). The modes, that is, are never changed without a change in the chief laws of the city.",
    "The <em>Laws</em> takes up the same claim in the education of a people. Education, Plato says there, is the right training of pleasure and pain, so that children come to hate what ought to be hated before they can give a rational account, and the training is given by song and dance, since the training of the chorus takes in both, and the man who has been educated is the one fully trained in the chorus (<em>Laws</em> II, 653a–660a). The songs are not left to the pleasure of the crowd. Where the spectators award the prize, the poets write to please them, and the hearers are drawn away from what the law pronounces right. Plato then tells how the disorder grew. The kinds of song had been fixed, and it was forbidden to set one kind of words to another kind of tune; later the poets mixed every kind with every other and taught the crowd that the pleasure of the hearer is the standard. His name for the result is given in his own words, “in place of an aristocracy in music there sprang up a kind of base theatrocracy” (<em>Laws</em> III, 701a), a rule of the spectators in the theater, and from that conceit of wisdom and that contempt for law came the refusal to obey rulers, then parents, then the laws, and at last a loss of respect for oaths and for the gods (<em>Laws</em> III, 700a–701b). The remedy he proposes is the one he ascribes to Egypt. Tunes that are naturally right can be fixed by law and consecrated, and the lawgiver is to consecrate all dancing and all music, each hymn to its god, so that no one may sing or dance against those public songs any more than against any other law (<em>Laws</em> II, 657a; <em>Laws</em> VII, 799a–802e).",
    "Aristotle, in <em>Politics</em> VIII, asks the narrower question, which melodies and which instruments the young should learn; his words, and Plato’s words on the modes, are given in <span class=\"xref\" data-to=\"c-ethos\"></span>. Johannes de Grocheio, a Parisian music theorist of about 1300, is a later witness to the same use. In his <span class=\"latin\">Ars musice</span> he calls the music of ordinary life the music of the city, and he says that the epic song should be sung to the old and to working citizens while they rest, so that, hearing of the hardships of others, they bear their own more easily and return to their work more readily, which serves the preservation of the whole city. St. Thomas’s teaching grants the fact Grocheio reports, but it does not make usefulness to the city’s work the whole measure of a song, because recreation is governed by a virtue of its own, which orders play to the rest of the soul and keeps it within the rule of reason (II–II q.168 a.2).",
    "What, then, may the city rightly ask of music? St. Thomas answers through his account of law. A law is directed to the common good (I–II q.90 a.2), and laws were needed because “the perfection of virtue consists chiefly in withdrawing man from undue pleasures, to which above all man is inclined, and especially the young, who are more capable of being trained” (q.95 a.1). So a city may order the music it teaches and the music it admits, but only so far as that order serves the common good. Peter of Auvergne, the Paris master who completed St. Thomas’s commentary on the <em>Politics</em>, applies this rule to Aristotle’s eighth book. Everything that concerns the young is to be measured by what serves the end of the commonwealth, so music is to be taught only so far as it is useful to that end; and instruments that excite the passions beyond measure, such as the aulos (a reed pipe), are kept for other occasions, such as war, and are not used in education. The city may also ask music for refreshment. In the <span class=\"latin\">De regno</span> St. Thomas warns that a city should not abound in superfluous pleasures, because they dull the senses and corrupt the judgment of prudence; yet he holds that some pleasure is needed in human life, so that the minds of men may be refreshed (<span class=\"latin\">De regno</span> II.4). Elsewhere he teaches that a man who will not join in moderate mirth is burdensome to others, and that this lack is itself a vice (II–II q.168 a.4).",
    "How does St. Thomas judge both? Music offers a power to dispose the passions, not to compel them, because the passions have movements of their own, which reason governs without abolishing them (I q.81 a.3 ad 2); so no law about music makes citizens virtuous by the music alone, and the city’s care for music is one part of its care for virtue. He receives the claim, which Plato reports from Damon and which Aristotle also uses, that music shapes character and, through character, the city. He states it when he asks whether God should be praised with song (II–II q.91 a.2), and Peter of Auvergne states it in his commentary on the eighth book of the <em>Politics</em>, for the schooling of citizens. He does not receive Plato’s further step, by which the lawgiver fixes every song and consecrates it. Human law does not command every act of virtue or forbid every vice; more precisely, it does not prescribe concerning all the acts of every virtue, but only those that can be ordered to the common good, and it does not forbid all vices, but only the more grievous, chiefly those that hurt others (I–II q.96 a.2–3). So a city may order the music that bears on the common good, and it may not make a law of every song; and the judgment of what serves that good in a given time and place belongs to prudence and not to harmonics. Nor is the city the only end of the music. Praise with the lips is for our own sake, so that devotion is aroused and the affections are drawn toward God (II–II q.91 a.1), and song is taken into that praise because melody moves the soul and can incite the faint-hearted to devotion (a.2). The end is God’s praise and the right ordering of the soul, not the city alone. This judgment is stated from moral philosophy and theology, and it is not demonstrated from the ratios of a string. Two later writers tried to find the forms of the commonwealth in the musical ratios themselves, and the same measure applies to them. Jean Bodin, the French political philosopher, argued in <em>Les six livres de la République</em> (VI.6) that the best kingdom is governed by a harmonic justice, which mixes the geometrical proportion of distributive justice with the arithmetical proportion of exchange and has regard to all the circumstances of a case. Johannes Kepler, the astronomer, set out Bodin’s chapter in the political digression of <span class=\"latin\">Harmonices mundi</span> III, comparing the popular state to arithmetical proportion, aristocracy to geometrical, and kingship to harmonic, and he corrected Bodin’s mathematics, because Bodin’s “harmonic” numbers were for the most part mixtures of the other two proportions. The first point at which St. Thomas’s teaching meets the claim is the blend of those two proportions. Distributive justice follows geometrical proportion, and commutative justice the arithmetical mean (II–II q.61 a.2). Bodin’s harmonic proportion is a blend of those two, and St. Thomas names no third, harmonic justice beside them. What remains, the regard for the particular circumstances of a case, he assigns to equity (<span class=\"latin\">epikeia</span>), which sets aside the letter of a law where following it would injure the common good (II–II q.120 a.1). So the harmonic comparison points to something real in the government of a city, but what it points to is first the two justices he already distinguishes, and then the prudence of the ruler and the virtue of equity, and no ratio demonstrates either."
  ],
  honesty: "Music states these applications to politics and does not prove them, because their demonstration belongs to political philosophy. St. Thomas treats law at <span class=\"latin\">ST</span> I–II q.90–97, the praise of God with song at II–II q.91, justice and equity at II–II q.61 and q.120, and recreation at II–II q.168; the <span class=\"latin\">De regno</span> is cited in the part that is his own. His commentary on the <em>Politics</em> ends in the third book, so what is said here of Book VIII is Peter of Auvergne’s, and it is cited under his name.",
  first: { passages: [{
    cite: "St. Thomas Aquinas, <span class=\"latin\">De regno</span> II.4 (rendered from the Latin)",
    latin: "Verum quia nimia amoenitas superflue ad delicias homines allicit, quod civitati plurimum nocet, ideo oportet ea moderate uti. Primo namque homines vacantes deliciis, sensu hebetantur. Immergit enim earum suavitas sensibus animam, ita quod in rebus delectantibus liberum iudicium habere non possunt. Unde secundum Aristotelis sententiam, prudentia iudicis per delectationem corrumpitur. … Est igitur nocivum civitati, vel ex loci dispositione, vel ex quibuscumque aliis rebus, deliciis superfluis abundare. Opportunum est igitur in conversatione humana modicum delectationis quasi pro condimento habere, ut animi hominum recreentur.",
    english: "But because too much pleasantness entices men beyond measure to delights, which does the city the greatest harm, it must be used with moderation. For, first, men who give themselves up to delights are dulled in sense; for the sweetness of delights so immerses the soul in the senses that in things that delight they cannot keep a free judgment. Hence, according to the opinion of Aristotle, the prudence of a judge is corrupted by pleasure. … It is harmful to a city, then, to abound in superfluous delights, whether from the lie of the land or from anything else. It is fitting, then, in human life to have a little pleasure as a seasoning, so that the minds of men may be refreshed."
  }]},
  returns: [
    {
      recast: "St. Thomas sets one measure for every pleasure a city admits: some delight is needed for the refreshment of the mind, and too much corrupts the judgment by which a city is governed. Peter of Auvergne applies that measure to music in the education of citizens, in his completion of St. Thomas’s commentary on the <em>Politics</em>. He grants Aristotle’s three ends of music (rest, virtue, and the delight of the mind), but he subordinates all three, in the schooling of the young, to the end of the commonwealth.",
      passages: [{
        cite: "Peter of Auvergne, commentary on Aristotle’s <em>Politics</em> VIII, completing St. Thomas’s commentary (Parma ed., vol. 21, lect. 2; rendered from the Latin)",
        english: "For music is not to be shared in to any extent whatever, but so far as it is useful to the commonwealth; and we must consider with what melodies and with what rhythms it is to be shared, and further on what instruments the young are to be taught and exercised. … For all things that concern the young must be measured and determined according as they are useful to the end of the commonwealth, which is the perfect good according to the intellect."
      }]
    },
    {
      recast: "The refreshment a city asks of music is measured as all recreation is measured. St. Thomas gives play a virtue of its own, and he takes his first authority for it from Augustine’s <span class=\"latin\">De musica</span>; so the songs of rest belong to the moral life, and the rule of reason governs them as it governs work.",
      passages: [{
        cite: "St. Thomas Aquinas, <span class=\"latin\">Summa theologiae</span> II–II q.168 a.2",
        english: "Augustine says (Music. ii, 15): ‘I pray thee, spare thyself at times: for it becomes a wise man sometimes to relax the high pressure of his attention to work.’ Now this relaxation of the mind from work consists in playful words or deeds. Therefore it becomes a wise and virtuous man to have recourse to such things at times. … Now these things are directed according to the rule of reason: and a habit that operates according to reason is virtue. Therefore there can be a virtue about games."
      }]
    },
    {
      recast: "Bodin names a third justice after the third proportion and sets the law, equity, the execution of the law, and the office of the magistrate in the ratios 4, 6, 8, 12. His harmonic proportion is a blend of the geometrical proportion of distributive justice and the arithmetical proportion of commutative justice, the two proportions St. Thomas already distinguishes (II–II q.61 a.2), and St. Thomas names no third justice beside them. What remains, the regard for the circumstances of a particular case, he assigns to equity and to the prudence of the judge (II–II q.120 a.1). The musical comparison names an order that the two justices, and then equity and prudence, explain, and no ratio demonstrates it.",
      passages: [{
        cite: "Jean Bodin, <em>The Six Bookes of a Commonweale</em> VI.6, pp. 755 and 760",
        english: "…that is to say, by an Harmonicall mixture of Iustice, composed of Iustice Distributiue, or Geometricall; and Commutatiue, or Arithmeticall: which are proper vnto the estates Aristocratique, and Popular. … But if you shall transpose these numbers before set in Harmonicall proportion, and so make the Magistrat superiour vnto Equitie; and the Execution of the Law, to be aboue the Law it selfe; both the Harmonie of the Commonweale, and musicall consent thereof, shall perish."
      }]
    }
  ]
},

"c-ascent": {
  honesty: "Augustine’s sixth book is the proper place for this question. Whether the light by which we judge is an illumination from without, or the agent intellect as a created participation in uncreated light, is disputed between him and St. Thomas (<span class=\"latin\">ST</span> I q.79 a.4; q.84 a.5–6). What is not disputed is the fact the ascent starts from: in judging a proportion we use a measure we did not make.",
  first: { passages: [{
    cite: "Augustine, <span class=\"latin\">De musica</span> VI.ii.2",
    latin: "Hos igitur numeros qui sunt in ipsa sonandi passione, sonantes vocemus. Rursus qui ab his fiunt in sensu audientis, occursorum nomine notemus. Qui autem sunt in ipso actu pronuntiantis, progressores; qui in memoria, recordabiles. Qui denique sunt in ipso naturali iudicio sentiendi, cum aliquid nos offendit aut delectat in motibus, iudiciales vocentur.",
    english: "Those numbers, then, which are in the passion of the sounding itself, let us call sounding numbers. Those which are made from these in the sense of the hearer, let us mark with the name of encountering numbers. Those which are in the very act of the one who utters, advancing numbers; those in memory, rememberable. Those, last, which are in the natural judgement of sensing, when something offends us or delights us in motions, let them be called judging numbers."
  }]},
  returns: [
    {
      recast: "The five names are ordered by dignity: what most would have called the music, the sounding body, is last, and the numbers by which we judge are first.",
      passages: [{
        cite: "Augustine, <span class=\"latin\">De musica</span> VI.iv",
        latin: "Iudiciales igitur numeri … nec in tempore sunt, nec in loco, nec in ullo corpore, nec in ulla passione corporis, nec in ulla memoria. … His iudicamus de his quae in tempore sunt.",
        english: "The judging numbers, then, are not in time, nor in place, nor in any body, nor in any passion of the body, nor in any memory. … By these we judge of the things that are in time."
      }]
    },
    {
      recast: "Augustine removes the judging numbers from every place we might have put them: they are not in the sound, the ear, the act, or memory. We correct the sound by them, so they are not given by the sound; and we can judge a measure we have never heard. So the standard is not our own. St. Thomas grants that the standard is not given by the sound, but he explains our possession of it otherwise. Sense knowledge is not the total cause of what the intellect knows, but “in a way the material cause,” because the agent intellect makes what the senses receive actually intelligible by abstraction (<span class=\"latin\">ST</span> I q.84 a.6). On his account, then, we reach the measure through the heard sounds, and the light by which we judge it is the intellect’s own.",
      passages: [{
        cite: "Augustine, <span class=\"latin\">De musica</span> VI.xii",
        latin: "Quapropter oportet fateamur, et in nobis esse iudiciales istos numeros, et extra nos esse, et supra nos esse. In nobis, quia iudicamus; extra nos, quia secundum eos iudicamus, nec eos facimus; supra nos, quia incommutabiles sunt, nos autem mutabiles.",
        english: "Wherefore we must confess that these judging numbers are in us, and outside us, and above us. In us, because we judge; outside us, because we judge according to them, and do not make them; above us, because they are unchangeable, and we are changeable."
      }]
    },
    {
      recast: "Augustine’s next step is that the unchangeable is in God. St. Thomas does not take the account of illumination whole: he grants the fact the ascent starts from, and names the light the agent intellect, which is created and a participation. The two doctors differ here, but neither treats the measure as our invention. To stop a string at two thirds and hear it please is already to use a measure we did not make. St. Thomas quotes the confession below in his reply on singing in church (II–II q.91 a.2 ad 2), and so he reads Augustine’s fault as a disorder in the use of song, which prudence corrects, and not as a fault in song itself.",
      passages: [{
        cite: "Augustine, <em>Confessions</em> X.xxxiii.49–50",
        latin: "Ita fluctuo inter periculum voluptatis et experimentum salubritatis. … Cum mihi accidit ut me amplius cantus quam res quae canitur moveat, poenaliter me peccare confiteor, et tunc mallem non audire cantantem.",
        english: "So I fluctuate between the danger of pleasure and the proof of profit. … When it happens to me that the singing moves me more than the thing which is sung, I confess that I sin, and it would then be better not to have heard the singer."
      }]
    }
  ]
},

"c-intact": {
  honesty: "The ratios can be verified on a string, but the metaphysics under which a ratio is a trace of intellect (form, not a brute regularity) is St. Thomas’s, and Aristotle’s before him. It is not proved here; it is stated so that it can be returned to in the books: the <em>Metaphysics</em>, the <em>De anima</em>, the <span class=\"latin\">Summa</span> I and I–II.",
  first: { passages: [{
    cite: "",
    english: "The liberal art of music did not fall because sounding bodies went silent. A string stopped at half still sounds the diapason, consonance still corresponds to the simple ratios, and the sounding body still carries its upper partials."
  }, {
    cite: "",
    english: "What lapsed is not the ratios, but the public holding of the metaphysics under which a ratio is a trace of forming intellect rather than a brute regularity. Equal temperament traded away pure ratios, and the spheres do not sound: those are real losses in what is audible. They do not touch the standing of the doctrine."
  }, {
    cite: "",
    english: "That the soul is the form of the body was not refuted, nor that virtue is a mean determined by reason. St. Thomas still teaches these, and they remain demonstrable. What changed is how commonly they are held, not whether they are true. The art is intact, and the demonstration is in the books."
  }]},
  returns: [
    {
      recast: "The first paragraph points at what can still be heard, so the object of the art is not a memory.",
      passages: [{
        cite: "Wisdom 11:21",
        latin: "Omnia in mensura, et numero, et pondere disposuisti.",
        english: "You have disposed all things in measure, and number, and weight."
      }]
    },
    {
      recast: "Two kinds of loss are being distinguished. Equal temperament and the silence of the spheres can be heard, but the forgetting of form has to be named, or it will be mistaken for a refutation of the art.",
      passages: [{
        cite: "Aristotle, <em>Metaphysics</em> VII.17",
        english: "What we seek is the cause, that is the form, by reason of which the matter is some definite thing. This is the substance of the thing. … The syllable is not its letters, the flesh is not fire and earth; there is something besides, and that something is the cause of their being one."
      }]
    },
    {
      recast: "The art is still begun on the string, but form is actually demonstrated in the books, and St. Thomas is the teacher of those books.",
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
  /* The author's words come first. Where a theme has an account, it follows them. */
  (theme.first.passages || []).forEach(p => { html += passageHTML(p); });
  [].concat(theme.lead || []).forEach(p => { html += `<p class="cont-lead">${p}</p>`; });
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
