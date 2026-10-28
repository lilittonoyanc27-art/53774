import { PracticeQuestion, QuestionOption, TopicId } from './types';
import { questionsFunciones } from './dataQuestionsFunciones';
import { questionsModalidades } from './dataQuestionsModalidades';
import { questionsComunicacion } from './dataQuestionsComunicacion';
import { questionsCategorias } from './dataQuestionsCategorias';
import { questionsSintaxis } from './dataQuestionsSintaxis';
import { extraBankQuestions } from './dataQuestionsExtraBank';
import { extraBank2Questions } from './dataQuestionsExtraBank2';
import { extraBank3Questions } from './dataQuestionsExtraBank3';

// Additional dynamic, unique, verified curriculum question items to ensure >260 questions
const curriculumItems: {
  topic: TopicId;
  qEs: string;
  qHy: string;
  opts: [string, string][];
  corr: number;
  expEs: string;
  expHy: string;
  tipEs: string;
  tipHy: string;
}[] = [
  // Funciones additions
  {
    topic: 'funciones',
    qEs: '«¡Qué susto me has dado al entrar sin avisar!». ¿Qué función del lenguaje se ejerce?',
    qHy: '«Ի՜նչ վախեցրիր ինձ՝ առանց զգուշացնելու մտնելով»։ Ի՞նչ լեզվական գործառույթ է կիրառվում։',
    opts: [['Función expresiva o emotiva', 'Էքսպրեսիվ կամ հուզական գործառույթ'], ['Función referencial', 'Ռեֆերենտիվ'], ['Función apelativa', 'Ապելյատիվ'], ['Función poética', 'Պոետիկ']],
    corr: 0,
    expEs: 'Manifiesta la sorpresa y el sobresalto anímico del emisor.',
    expHy: 'Արտահայտում է խոսողի անակնկալ վախն ու հոգեվիճակը։',
    tipEs: '¡Qué susto! = expresiva.', tipHy: '¡Qué susto! = էքսպրեսիվ։'
  },
  {
    topic: 'funciones',
    qEs: '«Cuidado con el escalón resbaladizo al bajar». ¿Qué función predomina?',
    qHy: '«Զգուշացե՛ք սայթաքուն աստիճանից իջնելիս»։ Ի՞նչ գործառույթ է գերակշռում։',
    opts: [['Función apelativa (aviso al receptor)', 'Ապելյատիվ գործառույթ (նախազգուշացում ընդունողին)'], ['Función referencial', 'Ռեֆերենտիվ'], ['Función metalingüística', 'Մետալեզվական'], ['Función fática', 'Ֆատիկ']],
    corr: 0,
    expEs: 'Busca influir en la conducta del receptor para que tenga precaución.',
    expHy: 'Նպատակ ունի ազդել լսողի վարքի վրա՝ զգույշ լինելու համար։',
    tipEs: 'Advertencias de seguridad = función apelativa.', tipHy: 'Անվտանգության նախազգուշացումներ = ապելյատիվ գործառույթ։'
  },
  {
    topic: 'funciones',
    qEs: '«La palabra "reloj" es aguda y no lleva tilde porque termina en j». ¿Qué función es?',
    qHy: '«"Reloj" բառը aguda է և չի կրում շեշտ, որովհետև վերջանում է j-ով»։ Ի՞նչ գործառույթ է։',
    opts: [['Función metalingüística', 'Մետալեզվական գործառույթ'], ['Función expresiva', 'Էքսպրեսիվ'], ['Función poética', 'Պոետիկ'], ['Función apelativa', 'Ապելյատիվ']],
    corr: 0,
    expEs: 'Explica una regla de acentuación del español.',
    expHy: 'Բացատրում է իսպաներենի շեշտադրության կանոնը։',
    tipEs: 'Reglas de agudas y llanas = metalingüística.', tipHy: 'Agudas և llanas կանոններ = մետալեզվական։'
  },
  {
    topic: 'funciones',
    qEs: '«Blanca como la nieve era la sonrisa de la niña». ¿Qué función destaca?',
    qHy: '«Ձյան պես սպիտակ էր աղջկա ժպիտը»։ Ի՞նչ գործառույթ է առանձնանում։',
    opts: [['Función poética o estética', 'Պոետիկ կամ գեղագիտական գործառույթ'], ['Función referencial', 'Ռեֆերենտիվ'], ['Función apelativa', 'Ապելյատիվ'], ['Función fática', 'Ֆատիկ']],
    corr: 0,
    expEs: 'Utiliza una comparación poética tradicional para embellecer el lenguaje.',
    expHy: 'Կիրառում է բանաստեղծական համեմատություն՝ խոսքը գեղեցկացնելու համար։',
    tipEs: 'Comparaciones literarias = función poética.', tipHy: 'Գրական համեմատություններ = պոետիկ գործառույթ։'
  },
  // Modalidades additions
  {
    topic: 'modalidades',
    qEs: '«Siéntate derecho en la silla para no dañar tu espalda». ¿Qué modalidad oracional es?',
    qHy: '«Ուղի՛ղ նստիր աթոռին, որպեսզի չվնասես մեջքդ»։ Ի՞նչ եղանակավորում է։',
    opts: [['Exhortativa o imperativa', 'Հորդորական կամ հրամայական'], ['Enunciativa', 'Պատմողական'], ['Dubitativa', 'Երկբայական'], ['Desiderativa', 'Ըղձական']],
    corr: 0,
    expEs: 'Consejo o instrucción en modo imperativo ("Siéntate").',
    expHy: 'Խորհուրդ կամ հրահանգ հրամայական եղանակով («Siéntate»)։',
    tipEs: 'Consejos e instrucciones = modalidad exhortativa.', tipHy: 'Խորհուրդներ և հրահանգներ = հորդորական եղանակավորում։'
  },
  {
    topic: 'modalidades',
    qEs: '«Quizá nos encontremos con Carlos en el polideportivo». ¿Qué modalidad oracional es?',
    qHy: '«Գուցե Կարլոսին հանդիպենք մարզադաշտում»։ Ի՞նչ եղանակավորում է։',
    opts: [['Dubitativa', 'Երկբայական'], ['Enunciativa', 'Պատմողական'], ['Desiderativa', 'Ըղձական'], ['Exhortativa', 'Հորդորական']],
    corr: 0,
    expEs: 'Indica duda o posibilidad con el adverbio "quizá".',
    expHy: 'Ցույց է տալիս կասկած կամ հավանականություն «quizá» (գուցե) մակբայով։',
    tipEs: 'Quizá / Quizás = dubitativa.', tipHy: 'Quizá = երկբայական։'
  },
  {
    topic: 'modalidades',
    qEs: '«¡Que tengas unas vacaciones inolvidables junto al mar!». ¿Qué modalidad oracional es?',
    qHy: '«Անմոռանալի արձակուրդ եմ մաղթում ծովի ափին»։ Ի՞նչ եղանակավորում է։',
    opts: [['Desiderativa u optativa', 'Ըղձական (ցանկություն արտահայտող)'], ['Exclamativa pura', 'Զուտ բացականչական'], ['Exhortativa', 'Հորդորական'], ['Enunciativa', 'Պատմողական']],
    corr: 0,
    expEs: 'Expresa un buen deseo con "Que + subjuntivo".',
    expHy: 'Արտահայտում է բարեմաղթանք «Que + subjuntivo»-ով։',
    tipEs: 'Que tengas... = desiderativa.', tipHy: 'Que tengas... = ըղձական։'
  },
  // Comunicación additions
  {
    topic: 'comunicacion',
    qEs: 'Un semáforo en rojo para peatones tiene una figura humana inmóvil. ¿Cuál es el CÓDIGO?',
    qHy: 'Հետիոտնի կարմիր լուսացույցի վրա պատկերված է կանգնած մարդուկ։ Ո՞րն է ԿՈԴԸ (Código)։',
    opts: [['El código visual no verbal de señales luminosas', 'Լուսային նշանների ոչ խոսքային տեսողական կոդը'], ['La bombilla del semáforo', 'Լուսացույցի լամպը'], ['El peatón que espera', 'Սպասող հետիոտնը'], ['La calzada', 'Երթևեկելի մասը']],
    corr: 0,
    expEs: 'El código es el sistema convencional de símbolos luminosos y colores que todos comprenden.',
    expHy: 'Կոդը լուսային նշանների և գույների պայմանական համակարգն է։',
    tipEs: 'Símbolos gráficos y luces = código no verbal.', tipHy: 'Գրաֆիկական նշաններ և լույսեր = ոչ խոսքային կոդ։'
  },
  {
    topic: 'comunicacion',
    qEs: 'Un mensaje emitido por megafonía no se entiende porque hay eco en el pabellón. ¿Qué elemento representa el eco?',
    qHy: 'Բարձրախոսով տրված հայտարարությունը չի հասկացվում դահլիճում արձագանքի (արձագանքման) պատճառով։ Ի՞նչ տարր է արձագանքը։',
    opts: [['Ruido (interferencia en el canal)', 'Աղմուկ (ruido - խոտան կապուղում)'], ['El código', 'Կոդը'], ['El emisor', 'Հաղորդողը'], ['El mensaje', 'Հաղորդագրությունը']],
    corr: 0,
    expEs: 'El eco es una distorsión acústica física del canal que dificulta la comprensión.',
    expHy: 'Արձագանքը կապուղու ֆիզիկական աղավաղում է, որը դժվարացնում է ըմբռնումը։',
    tipEs: 'Eco, murmullos o estática = ruido.', tipHy: 'Արձագանք, շշուկներ = աղմուկ (ruido)։'
  },
  // Categorías additions
  {
    topic: 'categorias',
    qEs: 'En «El agua FRÍA calma la sed», ¿qué categoría tiene «FRÍA»?',
    qHy: '«ՍԱՌԸ (fría) ջուրը հագեցնում է ծարավը» նախադասության մեջ ի՞նչ խոսքի մաս է «FRÍA»-ն։',
    opts: [['Adjetivo calificativo femenino singular', 'Իգական եզակի որակական ածական'], ['Sustantivo común', 'Հասարակ գոյական'], ['Adverbio de modo', 'Ձևի մակբայ'], ['Verbo', 'Բայ']],
    corr: 0,
    expEs: 'Concuerda en femenino singular con el sustantivo agua (que es femenino).',
    expHy: 'Համաձայնում է իգական եզակի թվով agua (իգական) գոյականի հետ։',
    tipEs: 'Agua es sustantivo femenino -> fría es adjetivo femenino.', tipHy: 'Agua իգական գոյական է -> fría իգական ածական է։'
  },
  {
    topic: 'categorias',
    qEs: 'En «Compré TRES lápices de colores», ¿qué categoría gramatical es «TRES»?',
    qHy: '«Գունավոր ԵՐԵՔ (tres) մատիտ գնեցի» նախադասության մեջ ի՞նչ խոսքի մաս է «TRES»-ը։',
    opts: [['Determinante numeral cardinal', 'Քանակական թվական որոշիչ (numeral cardinal)'], ['Determinante numeral ordinal', 'Դասական թվական'], ['Pronombre personal', 'Անձնական դերանուն'], ['Sustantivo colectivo', 'Հավաքական գոյական']],
    corr: 0,
    expEs: 'Indica una cantidad exacta numérica acompañando al sustantivo lápices.',
    expHy: 'Ցույց է տալիս ճշգրիտ թվային քանակ՝ ուղեկցելով lápices գոյականին։',
    tipEs: 'Uno, dos, tres + sustantivo = numeral cardinal.', tipHy: 'Uno, dos, tres + գոյական = քանակական թվական (cardinal)։'
  },
  {
    topic: 'categorias',
    qEs: 'En «No tengo ningún libro, pero mi hermano tiene CINCO», ¿qué categoría es «CINCO»?',
    qHy: '«Ես ոչ մի գիրք չունեմ, բայց իմ եղբայրն ունի ՀԻՆԳԸ (cinco)»։ Ի՞նչ խոսքի մաս է «CINCO»-ն այստեղ։',
    opts: [['Pronombre numeral cardinal', 'Քանակական թվական դերանուն (pronombre)'], ['Determinante numeral cardinal', 'Թվական որոշիչ'], ['Adjetivo', 'Ածական'], ['Sustantivo', 'Գոյական']],
    corr: 0,
    expEs: 'Va solo al final de la frase sustituyendo al sustantivo libros.',
    expHy: 'Գրված է առանձին՝ փոխարինելով libros գոյականին։ Ուստի դերանուն է։',
    tipEs: 'Numeral sin sustantivo detrás = pronombre numeral.', tipHy: 'Թվականն առանց գոյականի = թվական դերանուն։'
  },
  // Sintaxis additions
  {
    topic: 'sintaxis',
    qEs: 'En «Los alumnos escuchan ATENTAMENTE las explicaciones», ¿qué complemento es «ATENTAMENTE»?',
    qHy: '«Աշակերտներն ՈՒՇԱԴԻՐ (atentamente) լսում են բացատրությունները»։ Ի՞նչ լրացում է «atentamente»-ն։',
    opts: [['Complemento Circunstancial de Modo (CCM)', 'Ձևի պարագա (CCM)'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo'], ['Complemento del Nombre', 'Գոյականի լրացում']],
    corr: 0,
    expEs: 'Responde a ¿cómo escuchan?: atentamente (modo).',
    expHy: 'Պատասխանում է «ինչպե՞ս են լսում» հարցին՝ atentamente (ձևի պարագա)։',
    tipEs: 'Adverbio en -mente = casi siempre CC de Modo.', tipHy: '-mente-ով մակբայ = գրեթե միշտ Ձևի պարագա (CCM)։'
  },
  {
    topic: 'sintaxis',
    qEs: 'En «El jardinero cortó el césped CON UN CORTACÉSPED», ¿qué función sintáctica es «CON UN CORTACÉSPED»?',
    qHy: '«Այգեպանը խոտը հնձեց ԽՈՏՀՆՁԻՉՈՎ (con un cortacésped)»։ Ի՞նչ պաշտոն է կատարում «con un cortacésped»-ը։',
    opts: [['Complemento Circunstancial de Instrumento (CCInst)', 'Գործիքի պարագա (CCInst)'], ['Complemento de Modo', 'Ձևի պարագա'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'Indica la máquina o herramienta empleada para cortar el césped.',
    expHy: 'Ցույց է տալիս խոտը հնձելու համար օգտագործված մեքենան կամ գործիքը։',
    tipEs: '¿Con qué aparato o útil? = CC Instrumento.', tipHy: 'Ինչո՞վ, ինչ գործիքո՞վ = Գործիքի պարագա (CCInst)։'
  },
  {
    topic: 'sintaxis',
    qEs: 'En «A los niños les fascina LA NATURALEZA», ¿cuál es la función de «LA NATURALEZA»?',
    qHy: '«Երեխաներին հիացնում է ԲՆՈՒԹՅՈՒՆԸ (la naturaleza)»։ Ի՞նչ պաշտոն ունի «la naturaleza»-ն։',
    opts: [['Sujeto expreso pospuesto', 'Հետադաս բացահայտ ենթակա (Sujeto)'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo'], ['Complemento de Causa', 'Պատճառի պարագա']],
    corr: 0,
    expEs: 'Concuerda en singular con el verbo "fascina". Si fuera en plural ("las plantas"), el verbo cambiaría a "fascinan". Por tanto, es el SUJETO.',
    expHy: 'Եզակի թվով համաձայնում է «fascina» բայի հետ։ Եթե լիներ հոգնակի, բայը կդառնար «fascinan»։ Ուստի ԵՆԹԱԿԱՆ է։',
    tipEs: 'Prueba del plural: "les fascinan las naturalezas" -> ¡Es el sujeto!',
    tipHy: 'Հոգնակիի ստուգումով պարզվում է, որ սա ենթական է։'
  }
];

const generatedCurriculumQuestions: PracticeQuestion[] = curriculumItems.map((item, idx) => ({
  id: `q-curr-${idx + 1}`,
  topicId: item.topic,
  difficulty: 'medio',
  format: 'multiple_choice',
  questionEs: item.qEs,
  questionHy: item.qHy,
  options: item.opts.map(([es, hy]) => ({ textEs: es, textHy: hy })),
  correctOptionIndex: item.corr,
  explanationEs: item.expEs,
  explanationHy: item.expHy,
  examTipEs: item.tipEs,
  examTipHy: item.tipHy,
}));

// Master compilation of all verified unique questions
export const allQuestions: PracticeQuestion[] = [
  ...questionsFunciones,
  ...questionsModalidades,
  ...questionsComunicacion,
  ...questionsCategorias,
  ...questionsSintaxis,
  ...extraBankQuestions,
  ...extraBank2Questions,
  ...extraBank3Questions,
  ...generatedCurriculumQuestions,
];

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface ShuffledQuestionResult {
  question: PracticeQuestion;
  shuffledOptions: QuestionOption[];
  newCorrectIndex: number;
}

// Randomizes options without corrupting the correct answer
export function prepareShuffledQuestion(question: PracticeQuestion): ShuffledQuestionResult {
  const correctOption = question.options[question.correctOptionIndex];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectIndex = shuffledOptions.findIndex(
    (opt) => opt.textEs === correctOption.textEs && opt.textHy === correctOption.textHy
  );

  return {
    question,
    shuffledOptions,
    newCorrectIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
  };
}

// Filter helpers by topic or difficulty
export function getQuestionsByTopic(topicId: TopicId): PracticeQuestion[] {
  return allQuestions.filter((q) => q.topicId === topicId);
}

export function getRandomQuestions(count: number, topicId?: TopicId): PracticeQuestion[] {
  const pool = topicId ? getQuestionsByTopic(topicId) : allQuestions;
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
