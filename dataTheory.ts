import { TheoryLesson, TopicId, SubtopicId } from './types';
import { theoryPart1 } from './dataTheoryPart1';
import { theoryPart2, communicationScenarios } from './dataTheoryPart2';
import { theoryPart3 } from './dataTheoryPart3';

export const allTheoryLessons: TheoryLesson[] = [
  ...theoryPart1,
  ...theoryPart2,
  ...theoryPart3,
];

export { communicationScenarios };

export interface TopicInfo {
  id: TopicId;
  titleEs: string;
  titleHy: string;
  shortDescEs: string;
  shortDescHy: string;
  badgeCount: number;
}

export const topicList: TopicInfo[] = [
  {
    id: 'funciones',
    titleEs: 'Tema 1: Funciones del lenguaje',
    titleHy: 'Թեմա 1. Լեզվի գործառույթները',
    shortDescEs: 'Referencial, expresiva, apelativa, fática, metalingüística y poética.',
    shortDescHy: 'Ռեֆերենտիվ, էքսպրեսիվ, ապելյատիվ, ֆատիկ, մետալեզվական և պոետիկ։',
    badgeCount: 6,
  },
  {
    id: 'modalidades',
    titleEs: 'Tema 2: Modalidades oracionales',
    titleHy: 'Թեմա 2. Նախադասության եղանակավորումները (մոդալությունները)',
    shortDescEs: 'Enunciativas, interrogativas, exclamativas, exhortativas, desiderativas y dubitativas.',
    shortDescHy: 'Պատմողական, հարցական, բացականչական, հորդորական, ըղձական և երկբայական։',
    badgeCount: 6,
  },
  {
    id: 'comunicacion',
    titleEs: 'Tema 3: Elementos de la comunicación',
    titleHy: 'Թեմա 3. Հաղորդակցման տարրերը',
    shortDescEs: 'Emisor, receptor, mensaje, código, canal, contexto, ruido y retroalimentación.',
    shortDescHy: 'Խոսող, լսող, հաղորդագրություն, կոդ, կապուղի, համատեքստ, աղմուկ և հետադարձ կապ։',
    badgeCount: 8,
  },
  {
    id: 'categorias',
    titleEs: 'Tema 4: Categorías gramaticales',
    titleHy: 'Թեմա 4. Քերականական կարգերը (խոսքի մասերը)',
    shortDescEs: 'Sustantivos, adjetivos, determinantes, pronombres, verbos, adverbios y enlaces.',
    shortDescHy: 'Գոյականներ, ածականներ, որոշիչներ, դերանուններ, բայեր, մակբայներ և կապեր։',
    badgeCount: 6,
  },
  {
    id: 'sintaxis',
    titleEs: 'Tema 5: Análisis sintáctico y oraciones',
    titleHy: 'Թեմա 5. Շարահյուսական վերլուծություն և նախադասություններ',
    shortDescEs: 'Sujeto, predicado verbal y nominal, CD, CI, CC, Atributo y concordancia.',
    shortDescHy: 'Ենթակա, բայական և անվանական ստորոգյալ, CD, CI, CC, Atributo և համաձայնություն։',
    badgeCount: 4,
  },
];

export interface ComparativeTableRow {
  conceptEs: string;
  conceptHy: string;
  targetEs: string;
  targetHy: string;
  signalsEs: string;
  signalsHy: string;
  exampleEs: string;
  exampleHy: string;
}

export const comparativeFunctionsTable: ComparativeTableRow[] = [
  {
    conceptEs: 'Función Referencial',
    conceptHy: 'Ռեֆերենտիվ գործառույթ',
    targetEs: 'Contexto / Hechos reales',
    targetHy: 'Համատեքստ / Իրական փաստեր',
    signalsEs: 'Modo indicativo, datos objetivos, 3.ª persona',
    signalsHy: 'Սահմանական եղանակ, օբյեկտիվ տվյալներ, 3-րդ դեմք',
    exampleEs: 'La Tierra gira alrededor del Sol.',
    exampleHy: 'Երկիրը պտտվում է Արեգակի շուրջ։',
  },
  {
    conceptEs: 'Función Expresiva',
    conceptHy: 'Էքսպրեսիվ գործառույթ',
    targetEs: 'Emisor / Sentimientos',
    targetHy: 'Խոսող / Զգացմունքներ',
    signalsEs: '¡...!, 1.ª persona, adjetivos subjetivos, interjecciones',
    signalsHy: '¡...!, 1-ին դեմք, սուբյեկտիվ ածականներ, ձայնարկություններ',
    exampleEs: '¡Qué alegría verte hoy aquí!',
    exampleHy: 'Ի՜նչ ուրախություն է քեզ այսօր այստեղ տեսնել։',
  },
  {
    conceptEs: 'Función Apelativa',
    conceptHy: 'Ապելյատիվ գործառույթ',
    targetEs: 'Receptor / Conducta',
    targetHy: 'Լսող / Վարքագիծ',
    signalsEs: 'Imperativos, vocativos, preguntas, órdenes y ruegos',
    signalsHy: 'Հրամայական, կոչականներ, հարցեր, հրամաններ և խնդրանքներ',
    exampleEs: 'Cierra la ventana, por favor.',
    exampleHy: 'Խնդրում եմ, փակի՛ր պատուհանը։',
  },
  {
    conceptEs: 'Función Fática',
    conceptHy: 'Ֆատիկ գործառույթ',
    targetEs: 'Canal de comunicación',
    targetHy: 'Կապուղի',
    signalsEs: 'Saludos, despedidas, ¿me oyes?, ¿dígame?',
    signalsHy: 'Ողջույններ, հրաժեշտներ, լսո՞ւմ ես, ալո՞',
    exampleEs: '¿Hola? ¿Dígame? ¿Quién habla?',
    exampleHy: 'Ալո՞, լսո՞ւմ եմ, ո՞վ է խոսում։',
  },
  {
    conceptEs: 'Función Metalingüística',
    conceptHy: 'Մետալեզվական գործառույթ',
    targetEs: 'Código / La lengua',
    targetHy: 'Կոդ / Լեզուն ինքը',
    signalsEs: 'Gramática, ortografía, significados de palabras',
    signalsHy: 'Քերականություն, ուղղագրություն, բառերի իմաստներ',
    exampleEs: 'La palabra "árbol" es un sustantivo.',
    exampleHy: '«Árbol» (ծառ) բառը գոյական է։',
  },
  {
    conceptEs: 'Función Poética',
    conceptHy: 'Պոետիկ գործառույթ',
    targetEs: 'Mensaje / Belleza y forma',
    targetHy: 'Հաղորդագրություն / Գեղեցկություն և ձև',
    signalsEs: 'Rima, metáforas, versos, ritmo, refranes',
    signalsHy: 'Հանգ, փոխաբերություններ, տողեր, ռիթմ, առածներ',
    exampleEs: 'Tus ojos son dos estrellas brillantes.',
    exampleHy: 'Քո աչքերը երկու փայլուն աստղեր են։',
  },
];
