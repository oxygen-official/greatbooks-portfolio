export type LiteraryLens =
  | 'Theological & Existential'
  | 'Moralist & Didactic'
  | 'Deconstructive & Ethical'
  | 'Archetypal & Historical'
  | 'Formalist & Mythological'
  | 'Historical-Cultural & Feudal'
  | 'Feminist & Aesthetic';

export interface LiteraryAnalysis {
  id: string;
  order: number;
  title: string;
  author: string;
  period: string;
  origin: string;
  lens: LiteraryLens;
  lensDefinition: string;
  lensJustification: string;
  summary: string;
  keyThemes: string[];
  keyCharacters: string[];
  literaryAnalysisText: {
    historicalContext: string;
    lensApplication: string;
    thematicExploration: string;
    characterDynamics: string;
    realLifeRelevance: string;
  };
  famousQuotes: {
    quote: string;
    context: string;
    significance: string;
  }[];
  philosophicalInsight: string;
  iconName: string;
}

export interface StudentProfileData {
  fullName: string;
  course: string;
  yearAndSection: string;
  institution: string;
  instructorName: string;
  submissionDate: string;
  photoUrl: string;
  personalIntroduction: string;
  readingInterestsAndExperiences: string;
  expectationsAndLearningJourney: string;
}

export interface FavoriteWorkData {
  title: string;
  author: string;
  period: string;
  overview: string;
  reasonsForChoice: string[];
  influentialThemesAndLessons: string[];
  personalConnections: string;
  transformativeQuote: string;
}

export interface SummaryConcept {
  category: string;
  title: string;
  description: string;
  keyTakeaways: string[];
}

export interface ReflectionAnswer {
  questionNumber: number;
  question: string;
  reflection: string;
  keyCoreValues: string[];
}
