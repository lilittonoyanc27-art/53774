export type TopicId =
  | 'funciones'
  | 'modalidades'
  | 'comunicacion'
  | 'categorias'
  | 'sintaxis';

export type SubtopicId =
  // Funciones
  | 'func-referencial'
  | 'func-expresiva'
  | 'func-apelativa'
  | 'func-fatica'
  | 'func-metalinguistica'
  | 'func-poetica'
  | 'func-comparativa'
  // Modalidades
  | 'mod-enunciativas'
  | 'mod-interrogativas'
  | 'mod-exclamativas'
  | 'mod-exhortativas'
  | 'mod-desiderativas'
  | 'mod-dubitativas'
  | 'mod-comparativa'
  // Comunicación
  | 'com-elementos'
  | 'com-situaciones'
  // Categorías
  | 'cat-sustantivo'
  | 'cat-pronombre'
  | 'cat-adjetivo'
  | 'cat-verbo'
  | 'cat-adverbio'
  | 'cat-determinante'
  | 'cat-preposicion'
  | 'cat-conjuncion'
  | 'cat-interjeccion'
  // Sintaxis
  | 'sin-fundamentos'
  | 'sin-sujeto'
  | 'sin-predicado'
  | 'sin-cd'
  | 'sin-ci'
  | 'sin-cc'
  | 'sin-atributo'
  | 'sin-otros-complementos';

export interface BilingualText {
  es: string;
  hy: string;
}

export interface ExampleItem {
  sentence: string;
  armenian: string;
  explanationEs: string;
  explanationHy: string;
  analysis?: string;
  analysisHy?: string;
}

export interface TheoryLesson {
  id: SubtopicId;
  topicId: TopicId;
  titleEs: string;
  titleHy: string;
  shortSummaryEs: string;
  shortSummaryHy: string;
  simpleExplanationEs: string; // Explicación para un niño de 7º (1.º ESO)
  simpleExplanationHy: string;
  fullDefinitionEs: string;
  fullDefinitionHy: string;
  communicativeGoalEs: string;
  communicativeGoalHy: string;
  targetElement?: BilingualText; // e.g. Receptor, Emisor, etc.
  signalsAndTricksEs: string[];
  signalsAndTricksHy: string[];
  examples: ExampleItem[];
  commonMistakesEs: string;
  commonMistakesHy: string;
  examAdviceEs: string;
  examAdviceHy: string;
  simplifiedAlternativeEs: string; // Para el botón "No lo entiendo"
  simplifiedAlternativeHy: string;
  simplifiedAlternativeExample: BilingualText;
  comparisonWithSimilar?: {
    concept: string;
    conceptHy: string;
    distinctionEs: string;
    distinctionHy: string;
    exampleEs: string;
    exampleHy: string;
  };
}

export interface CommunicationScenario {
  id: string;
  titleEs: string;
  titleHy: string;
  descriptionEs: string;
  descriptionHy: string;
  emisor: BilingualText;
  receptor: BilingualText;
  mensaje: BilingualText;
  codigo: BilingualText;
  canal: BilingualText;
  contexto: BilingualText;
  ruido?: BilingualText;
  retroalimentacion?: BilingualText;
}

export interface WordAnalysis {
  word: string;
  wordHy: string;
  categoryEs: string;
  categoryHy: string;
  categoryDetailEs: string;
  categoryDetailHy: string;
  syntacticFunctionEs: string;
  syntacticFunctionHy: string;
  whyThisFunctionEs: string;
  whyThisFunctionHy: string;
}

export interface SentenceComplement {
  type: string;
  typeHy: string;
  text: string;
  explanationEs: string;
  explanationHy: string;
}

export interface AnalyzedSentence {
  id: string;
  difficulty: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  difficultyLabel: string;
  sentenceEs: string;
  sentenceHy: string;
  sujeto: {
    text: string;
    type: 'expreso' | 'omitido' | 'impersonal';
    typeLabelEs: string;
    typeLabelHy: string;
    nucleo: string;
    explanationEs: string;
    explanationHy: string;
  };
  predicado: {
    text: string;
    type: 'verbal' | 'nominal';
    typeLabelEs: string;
    typeLabelHy: string;
    nucleo: string;
    explanationEs: string;
    explanationHy: string;
  };
  complements: SentenceComplement[];
  words: WordAnalysis[];
}

export type QuestionFormat =
  | 'multiple_choice'
  | 'identify_category'
  | 'find_subject'
  | 'find_predicate'
  | 'identify_nucleus'
  | 'true_false'
  | 'correct_error'
  | 'identify_function'
  | 'identify_modality'
  | 'complete_analysis';

export interface QuestionOption {
  textEs: string;
  textHy: string;
}

export interface PracticeQuestion {
  id: string;
  topicId: TopicId;
  subtopicId?: SubtopicId;
  difficulty: 'facil' | 'medio' | 'dificil';
  format: QuestionFormat;
  questionEs: string;
  questionHy: string;
  targetSentenceEs?: string;
  targetSentenceHy?: string;
  highlightedWord?: string;
  options: QuestionOption[];
  correctOptionIndex: number; // 0, 1, 2, or 3
  explanationEs: string;
  explanationHy: string;
  whyStudentWrongEs?: string;
  whyStudentWrongHy?: string;
  extraExampleEs?: string;
  extraExampleHy?: string;
  examTipEs: string;
  examTipHy: string;
}

export interface ExamSessionConfig {
  mode: 'corto' | 'medio' | 'completo' | 'por_tema' | 'errores';
  questionCount: number;
  selectedTopicId?: TopicId;
  useTimer: boolean;
  timerMinutes: number;
}

export interface ExamAnswerRecord {
  questionId: string;
  chosenOptionIndex: number;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export interface SavedMistake {
  id: string;
  questionId: string;
  topicId: TopicId;
  timestamp: number;
  chosenOptionIndex: number;
  question: PracticeQuestion;
  mastered: boolean;
}

export interface ExamResultSummary {
  id: string;
  date: string;
  mode: ExamSessionConfig['mode'];
  totalQuestions: number;
  correctCount: number;
  score10: number; // 0 - 10
  scorePercentage: number;
  topicBreakdown: Record<TopicId, { total: number; correct: number }>;
  answers: ExamAnswerRecord[];
}
