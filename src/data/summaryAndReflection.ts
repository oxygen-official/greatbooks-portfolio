import { SummaryConcept, ReflectionAnswer, StudentProfileData } from '../types/portfolio';

export const INITIAL_STUDENT_PROFILE: StudentProfileData = {
  fullName: 'Reynaldo Bertulfo Jr.',
  course: 'Bachelor of Secondary Education / Arts & Sciences',
  yearAndSection: '3rd Year · Section A',
  institution: 'Department of Humanities & Literature',
  instructorName: 'Professor of Great Books',
  submissionDate: 'Academic Term 2026',
  photoUrl: '', // Default avatar icon
  personalIntroduction: 'I am a passionate student of literature and the humanities, dedicated to understanding how ancient narratives continue to illuminate contemporary human dilemmas. Through the Great Books course, I have cultivated a disciplined habit of reading canonical texts not as static relics of the distant past, but as dynamic, living dialogues that challenge our assumptions about justice, honor, suffering, and duty.',
  readingInterestsAndExperiences: 'My literary journey began with classical mythology, Philippine folktales, and philosophical fiction. Over the years, I have gravitated toward monumental world epics, tragic drama, and introspective poetry. Reading across non-Western and Western canons has expanded my empathy and granted me the tools to deconstruct cultural narratives and recognize common threads of humanity across divergent historical eras.',
  expectationsAndLearningJourney: 'Entering Great Books, I initially expected a daunting survey of archaic texts requiring laborious translation and memorization. What I discovered instead was a transformative intellectual crucible. Great Books has challenged me to interrogate my own biases, apply diverse critical lenses, and articulate nuanced arguments about moral ambiguity. It has permanently altered how I view the world, society, and my own ethical responsibilities.'
};

export const LEARNING_SUMMARY_CONCEPTS: SummaryConcept[] = [
  {
    category: 'Historical Periods & Global Canons',
    title: 'Cross-Cultural Masterpieces Across Civilizations',
    description: 'A comprehensive immersion into canonical texts spanning ancient Mesopotamia and Hebrew wisdom, Classical Vedic and Sanskrit epics, Archaic Greek oral poetry, Western European feudal chivalry, and Heian Japanese aristocratic narratives.',
    keyTakeaways: [
      'Comparative Civilizational Horizons: Contrasting the martial timē of Achilles with the ethical dharma of Arjuna and the Christian-feudal vassality of Roland.',
      'Orality to Textuality: Tracing the evolution from oral bardic recitation (Homer, Vyasa, Turold) to introspective vernacular novelistic prose (Murasaki Shikibu).',
      'The Universal Core of Suffering: Discovering that Job’s anguish, Gilgamesh’s mortality, and Genji’s Mono no Aware address identical human vulnerabilities.',
      'Intercultural Respect: De-centering Eurocentric biases by analyzing Indian philosophy and East Asian court aesthetics alongside Greco-Roman foundations.'
    ]
  },
  {
    category: 'Critical Literary Frameworks',
    title: 'Knowledge & Application of Diverse Literary Lenses',
    description: 'Mastery of specialized theoretical frameworks that uncover latent ideologies, psychological undercurrents, structural craft, and moral architectures embedded in literature.',
    keyTakeaways: [
      'Theological & Existential Lens: Critiquing simple retribution theology in Job 38 to uncover the majesty of divine mystery beyond human legalism.',
      'Moralist & Didactic Lens: Extracting strategic statecraft (Niti) and social diplomacy from the animal allegories of the Panchatantra.',
      'Deconstructive & Ethical Lens: Exposing how Dharma in the Mahabharata collapses under conflicting filial and royal obligations.',
      'Archetypal & Mythological Lens: Mapping the Hero’s Journey, the Shadow, and the motif of Nostos in Homer’s Iliad and Odyssey.',
      'Historical-Feudal Lens: Analyzing codes of chivalry, religious crusade ideology, and the fatal hubris of desmesure in The Song of Roland.',
      'Feminist & Aesthetic Lens: Uncovering the psychological enclosure of Heian women and the philosophy of Mono no Aware in The Tale of Genji.'
    ]
  },
  {
    category: 'Societal & Human Mirror',
    title: 'Literature as a Living Reflection of Society',
    description: 'Recognizing that canonical literature is not isolated from reality; it functions as a critical mirror reflecting the power dynamics, religious convictions, economic structures, and social anxieties of its originating epoch.',
    keyTakeaways: [
      'Deconstruction of Heroic Vanity: Homer and the Roland poet both expose that the glory of individual chieftains often costs thousands of innocent foot soldiers their lives.',
      'The Struggle for Female Voice: Murasaki Shikibu reveals the private pain of women objectified as political currency beneath glittering court silks.',
      'The Inadequacy of Dogma: Job proves that neat religious platitudes crumble when brought to the sickbed of genuine human trauma.',
      'Pragmatism and Survival: The Panchatantra shows that the marginalized can survive predatory power only through solidarity and strategic wit.'
    ]
  },
  {
    category: 'Intellectual & Analytical Skills',
    title: 'Development of Critical Interpretation & Close Reading',
    description: 'Transformation of reading habits from passive comprehension into active interrogation, text-grounded argument construction, and synthesis of multifaceted perspectives.',
    keyTakeaways: [
      'Evidence-Based Textual Hermeneutics: Supporting analytical claims through direct quotation, contextual examination, and linguistic nuance.',
      'Comfort with Ambiguity: Embracing open-ended philosophical questions rather than demanding tidy, one-dimensional moral answers.',
      'Rhetorical & Compositional Rigor: Articulating complex philosophical ideas with clarity, academic tone, and logical flow.',
      'Self-Reflective Metacognition: Examining how personal cultural background and worldview shape one’s interpretation of historical texts.'
    ]
  }
];

export const PERSONAL_REFLECTION_ANSWERS: ReflectionAnswer[] = [
  {
    questionNumber: 1,
    question: 'How has your understanding and appreciation of literature changed throughout the course?',
    reflection: 'Before taking Great Books, I viewed literature primarily as entertainment or as an academic chore—stories to be summarized and plots to be memorized for exams. Throughout this course, my perspective underwent a profound Copernican revolution. I now recognize that great literature is humanity’s eternal conversation across millennia. When I read Homer or Job, I am not merely reading dead words on dusty parchment; I am encountering fellow human beings who wept over mortality, grappled with betrayal, and searched for justice just as we do today. Literature has transformed for me from a collection of isolated artifacts into an indispensable mirror for understanding my own soul and the complex world around me.',
    keyCoreValues: ['Historical Empathy', 'Transformative Humility', 'Active Hermeneutics']
  },
  {
    questionNumber: 2,
    question: 'What challenges did you encounter when reading and analyzing literary masterpieces, and how did you overcome them?',
    reflection: 'The greatest obstacle I faced was the sheer temporal, cultural, and linguistic distance separating modern life from ancient contexts. In works like The Mahabharata and The Song of Roland, the vast rosters of characters, unfamiliar cultural hierarchies, and archaic moral codes—such as Roland’s pride in refusing to sound his horn, or Yudhishthira wagering his family in a dice game—initially seemed alien and frustrating. I overcame this by adopting a disciplined methodology: researching the historical milieu before each reading, maintaining character genealogies and thematic reading journals, and consciously suspending modern knee-jerk judgment. By asking "What did honor, duty, or destiny mean to their community?", I was able to appreciate the internal logic and tragic gravity of their choices.',
    keyCoreValues: ['Hermeneutic Charity', 'Intellectual Discipline', 'Cultural Contextualization']
  },
  {
    questionNumber: 3,
    question: 'Which literary lens or approach influenced your interpretation of literature the most? Why?',
    reflection: 'The Deconstructive and Ethical lens applied to The Mahabharata was by far the most intellectually liberating framework. Growing up, I was accustomed to stories with distinct heroes and villains where virtue was neatly rewarded and wickedness punished. Applying this lens to the Kurukshetra war shattered that binary simplicity. Watching Yudhishthira—the king of truth—forced to speak a half-truth about an elephant named Ashwatthama to defeat his master Drona forced me to confront the painful reality of ethical compromise. It taught me that real life rarely presents choices between pure good and pure evil; rather, it often demands choosing between conflicting loyalties or navigating lesser evils with heavy conscience. This approach has permanently deepened my critical thinking.',
    keyCoreValues: ['Ethical Nuance', 'Deconstructive Rigor', 'Rejection of Simplism']
  },
  {
    questionNumber: 4,
    question: 'What important realizations about life, society, culture, or human nature have you gained?',
    reflection: 'My most vital realization is that while technological tools, political systems, and economic arrangements change rapidly, the core architecture of the human condition remains astonishingly constant. The grief that Priam experienced kissing Achilles’ hands is identical to the grief of any mother or father in a war zone today. Job’s bewilderment before unearned suffering echoes in modern hospital wards. Genji’s melancholic awareness that all earthly beauty fades mirrors our own bittersweet experience of time slipping away. Furthermore, I realized that every society constructs grand mythologies to justify its power structures—whether it was feudal crusade ideology in France or patriarchal enclosure in Heian Japan. Literature gives us the critical tools to unmask these myths and champion authentic human dignity.',
    keyCoreValues: ['Universal Human Dignity', 'Awareness of Mortality', 'Ideological Discernment']
  },
  {
    questionNumber: 5,
    question: 'How can you apply the lessons and values learned from Great Books in your personal, academic, or future professional life?',
    reflection: 'In my personal life, the concept of Mono no Aware from The Tale of Genji will keep me grounded, encouraging me to cultivate gratitude and present-moment mindfulness toward the fleeting stages of life. Academically, the rigorous close-reading skills and diverse literary lenses I practiced will serve as the bedrock of my critical writing and analytical research. Professionally, the Panchatantra’s wisdom on discerning true friends from toxic flatterers, combined with Krishna’s teaching in the Bhagavad Gita on Nishkama Karma—performing one’s duty with full dedication while relinquishing ego-driven fixation on rewards—will guide my leadership ethics. When faced with high-pressure decisions, I will strive to emulate Odysseus’ enduring patience and Oliver’s prudent wisdom rather than reckless bravado.',
    keyCoreValues: ['Equanimity in Duty', 'Mindful Compassion', 'Prudent Leadership']
  }
];
