import { PracticeQuestion, TopicId } from './types';

interface QDef {
  id: string;
  topic: TopicId;
  diff: 'facil' | 'medio' | 'dificil';
  qEs: string;
  qHy: string;
  sentenceEs?: string;
  sentenceHy?: string;
  opts: [string, string][];
  corr: number;
  expEs: string;
  expHy: string;
  tipEs: string;
  tipHy: string;
}

const list: QDef[] = [
  // --- CATEGORÍAS GRAMATICALES (q-cat-36 to q-cat-64) ---
  {
    id: 'q-cat-36', topic: 'categorias', diff: 'facil',
    qEs: '¿Qué categoría gramatical tiene «aquel» en «Aquel niño juega al fútbol»?',
    qHy: 'Ի՞նչ խոսքի մաս է «aquel»-ը «Aquel niño juega al fútbol» նախադասության մեջ։',
    opts: [['Determinante demostrativo', 'Ցուցական որոշիչ (determinante)'], ['Pronombre demostrativo', 'Ցուցական դերանուն'], ['Adjetivo calificativo', 'Որակական ածական'], ['Sustantivo común', 'Հասարակ գոյական']],
    corr: 0,
    expEs: 'Acompaña al sustantivo "niño" indicando lejanía en el espacio.',
    expHy: 'Ուղեկցում է «niño» գոյականին՝ ցույց տալով տարածական հեռավորություն։',
    tipEs: 'Acompaña al nombre = determinante.', tipHy: 'Ուղեկցում է գոյականին = որոշիչ (determinante)։'
  },
  {
    id: 'q-cat-37', topic: 'categorias', diff: 'facil',
    qEs: '¿Qué categoría gramatical tiene «aquel» en «Ese coche es mío y aquel es de Pedro»?',
    qHy: 'Ի՞նչ խոսքի մաս է «aquel»-ը «Ese coche es mío y aquel es de Pedro» նախադասության մեջ։',
    opts: [['Pronombre demostrativo', 'Ցուցական դերանուն (pronombre)'], ['Determinante demostrativo', 'Ցուցական որոշիչ'], ['Adjetivo', 'Ածական'], ['Sustantivo', 'Գոյական']],
    corr: 0,
    expEs: 'Va solo sustituyendo al sustantivo coche.',
    expHy: 'Գրված է առանձին՝ փոխարինելով coche գոյականին։',
    tipEs: 'Va solo = pronombre.', tipHy: 'Գրված է առանձին = դերանուն (pronombre)։'
  },
  {
    id: 'q-cat-38', topic: 'categorias', diff: 'medio',
    qEs: 'En «El atleta corrió TAN RÁPIDO COMO su rival», ¿qué grado del adverbio se aprecia?',
    qHy: '«Մարզիկը վազեց ՆՈՒՅՆՔԱՆ ԱՐԱԳ, ՈՐՔԱՆ իր մրցակիցը»։ Ի՞նչ աստիճան է դրսևորվում։',
    opts: [['Grado comparativo de igualdad', 'Հավասարական բաղդատական աստիճան (igualdad)'], ['Comparativo de superioridad', 'Առավելական բաղդատական'], ['Superlativo absoluto', 'Բացարձակ գերադրական'], ['Grado positivo', 'Դրական աստիճան']],
    corr: 0,
    expEs: '«Tan... como» marca igualdad en la comparación.',
    expHy: '«Tan... como»-ն նշում է հավասարություն համեմատության մեջ։',
    tipEs: 'Tan... como = igualdad.', tipHy: 'Tan... como = հավասարական։'
  },
  {
    id: 'q-cat-39', topic: 'categorias', diff: 'facil',
    qEs: '«Ana come manzanas dulces». ¿Qué categoría gramatical es «dulces»?',
    qHy: '«Անան քաղցր խնձորներ է ուտում»։ Ի՞նչ խոսքի մաս է «dulces»-ը։',
    opts: [['Adjetivo calificativo en grado positivo', 'Դրական աստիճանի որակական ածական'], ['Sustantivo común', 'Հասարակ գոյական'], ['Adverbio de modo', 'Ձևի մակբայ'], ['Determinante indefinido', 'Անորոշ որոշիչ']],
    corr: 0,
    expEs: 'Expresa una cualidad de las manzanas concordando en plural.',
    expHy: 'Արտահայտում է խնձորների որակը՝ համաձայնելով հոգնակի թվով։',
    tipEs: 'Califica al sustantivo = adjetivo calificativo.', tipHy: 'Բնութագրում է գոյականը = որակական ածական։'
  },
  {
    id: 'q-cat-40', topic: 'categorias', diff: 'medio',
    qEs: '«El profesor HABÍA EXPLICADO la lección». ¿Qué tiempo verbal es «había explicado»?',
    qHy: '«Ուսուցիչը ԲԱՑԱՏՐԵԼ ԷՐ (había explicado) դասը»։ Ի՞նչ բայական ժամանակաձև է։',
    opts: [['Pretérito pluscuamperfecto de indicativo', 'Սահմանական եղանակի վաղակատար անցյալ (pluscuamperfecto)'], ['Pretérito perfecto compuesto', 'Անցյալ կատարյալ բաղադրյալ'], ['Pretérito imperfecto', 'Անկատար անցյալ'], ['Futuro compuesto', 'Ապառնի բաղադրյալ']],
    corr: 0,
    expEs: 'Verbo auxiliar "haber" en pretérito imperfecto (había) + participio (explicado).',
    expHy: '«Haber» օժանդակ բայը անկատար անցյալով (había) + պարտիցիպ (explicado)։',
    tipEs: 'Había + participio = pretérito pluscuamperfecto.', tipHy: 'Había + դերբայ = pluscuamperfecto (վաղակատար անցյալ)։'
  },
  {
    id: 'q-cat-41', topic: 'categorias', diff: 'facil',
    qEs: '«Hoy, ayer, mañana, anoche, tarde, temprano». ¿Qué clase de adverbios son?',
    qHy: '«Hoy (այսօր), ayer (երեկ), mañana (վաղը), tarde (ուշ)»։ Ինչպիսի՞ մակբայներ են։',
    opts: [['Adverbios de tiempo', 'Ժամանակի մակբայներ (tiempo)'], ['Adverbios de lugar', 'Տեղի մակբայներ'], ['Adverbios de modo', 'Ձևի մակբայներ'], ['Adverbios de cantidad', 'Քանակի մակբայներ']],
    corr: 0,
    expEs: 'Indican el momento temporal en que se produce la acción.',
    expHy: 'Ցույց են տալիս գործողության կատարման ժամանակային պահը։',
    tipEs: 'Responden a ¿cuándo? = adverbios de tiempo.', tipHy: 'Պատասխանում են «ե՞րբ» հարցին = ժամանակի մակբայներ։'
  },
  {
    id: 'q-cat-42', topic: 'categorias', diff: 'facil',
    qEs: '«Aquí, allí, cerca, lejos, dentro, fuera, arriba, abajo». ¿Qué clase de adverbios son?',
    qHy: '«Aquí (այստեղ), allí (այնտեղ), cerca (մոտ), lejos (հեռու)»։ Ինչպիսի՞ մակբայներ են։',
    opts: [['Adverbios de lugar', 'Տեղի մակբայներ (lugar)'], ['Adverbios de modo', 'Ձևի մակբայներ'], ['Adverbios de tiempo', 'Ժամանակի մակբայներ'], ['Adverbios de duda', 'Կասկածի մակբայներ']],
    corr: 0,
    expEs: 'Sitúan la acción en el espacio físico respondiendo a ¿dónde?.',
    expHy: 'Տեղադրում են գործողությունը տարածության մեջ՝ պատասխանելով «որտե՞ղ» հարցին։',
    tipEs: 'Responden a ¿dónde? = adverbios de lugar.', tipHy: 'Պատասխանում են «որտե՞ղ» հարցին = տեղի մակբայներ։'
  },
  {
    id: 'q-cat-43', topic: 'categorias', diff: 'medio',
    qEs: '«Viajaremos HASTA Sevilla SEGÚN el horario previsto». ¿Qué son «HASTA» y «SEGÚN»?',
    qHy: '«Ճամփորդելու ենք ՄԻՆՉԵՎ (hasta) Սևիլիա՝ ԸՍՏ (según) նախատեսված ժամանակացույցի»։ Ի՞նչ են «HASTA»-ն և «SEGÚN»-ը։',
    opts: [['Preposiciones', 'Նախդիրներ (preposiciones)'], ['Conjunciones coordinantes', 'Համադասական շաղկապներ'], ['Adverbios', 'Մակբայներ'], ['Adjetivos', 'Ածականներ']],
    corr: 0,
    expEs: 'Pertenecen a la lista oficial de preposiciones del español.',
    expHy: 'Պատկանում են իսպաներենի նախդիրների պաշտոնական ցանկին։',
    tipEs: 'Hasta, según, tras, sobre = preposiciones.', tipHy: 'Hasta, según, tras = նախդիրներ։'
  },
  {
    id: 'q-cat-44', topic: 'categorias', diff: 'facil',
    qEs: '«Ni Juan NI Pedro vinieron a la fiesta». ¿Qué categoría gramatical es «NI»?',
    qHy: '«Ո՛չ Խուանը, Ո՛Չ ԷԼ Պեդրոն եկան երեկույթին»։ Ի՞նչ խոսքի մաս է «NI»-ն։',
    opts: [['Conjunción copulativa negativa', 'Ժխտական համադասական շաղկապ (conjunción)'], ['Preposición', 'Նախդիր'], ['Adverbio de modo', 'Ձևի մակբայ'], ['Pronombre', 'Դերանուն']],
    corr: 0,
    expEs: 'Une elementos sumando negaciones.',
    expHy: 'Միավորում է անդամները՝ ժխտումներ գումարելով։',
    tipEs: 'Y, e, ni = conjunciones copulativas.', tipHy: 'Y, e, ni = համադասական շաղկապներ։'
  },
  {
    id: 'q-cat-45', topic: 'categorias', diff: 'medio',
    qEs: '«¿Quieres zumo O prefieres agua mineral?». ¿Qué categoría gramatical es «O»?',
    qHy: '«Հյո՞ւթ ես ուզում, ԹԵ՞ հանքային ջուր ես նախընտրում»։ Ի՞նչ խոսքի մաս է «O»-ն։',
    opts: [['Conjunción disyuntiva', 'Տրոհական շաղկապ (conjunción disyuntiva)'], ['Conjunción adversativa', 'Ներհակական շաղկապ'], ['Preposición', 'Նախդիր'], ['Interjección', 'Ձայնարկություն']],
    corr: 0,
    expEs: 'Plantea una alternativa o elección entre dos opciones.',
    expHy: 'Առաջարկում է ընտրություն երկու տարբերակների միջև։',
    tipEs: 'O, u = conjunciones disyuntivas.', tipHy: 'O, u = տրոհական շաղկապներ (disyuntivas)։'
  },

  // --- SINTAXIS Y COMPLEMENTOS (q-s-21 to q-s-55) ---
  {
    id: 'q-s-21', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «El alumno entregó los deberes AL PROFESOR», ¿qué función cumple «AL PROFESOR»?',
    qHy: '«Աշակերտը հանձնեց տնային աշխատանքը ՈՒՍՈՒՑՉԻՆ (al profesor)»։ Ի՞նչ պաշտոն ունի «al profesor»-ը։',
    opts: [['Complemento Indirecto (CI)', 'Հանգման խնդիր (CI)'], ['Complemento Directo (CD)', 'Ուղիղ խնդիր'], ['Sujeto expreso', 'Բացահայտ ենթակա'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'Se sustituye por "le": "El alumno LE entregó los deberes". Es el destinatario.',
    expHy: 'Փոխարինվում է «le»-ով՝ «El alumno LE entregó...»։ Հասցեատերն է։',
    tipEs: 'Destinatario con preposición "a" sustituible por LE = CI.', tipHy: 'LE-ով փոխարինվող հասցեատեր = CI։'
  },
  {
    id: 'q-s-22', topic: 'sintaxis', diff: 'medio',
    qEs: 'Si pasamos «El policía detuvo al ladrón» a voz pasiva, ¿qué sucede con «al ladrón»?',
    qHy: 'Եթե «Ոստիկանը ձերբակալեց գողին» նախադասությունը դարձնենք կրավորական, ի՞նչ է դառնում «al ladrón»-ը։',
    opts: [['Pasa a ser el SUJETO PACIENTE («El ladrón fue detenido por el policía»)', 'Դառնում է ԿՐԱՎՈՐԱԿԱՆ ԵՆԹԱԿԱ («El ladrón fue detenido...»)'], ['Pasa a ser Complemento Circunstancial', 'Դառնում է պարագա'], ['Desaparece de la oración', 'Անհետանում է նախադասությունից'], ['Pasa a ser Atributo', 'Դառնում է Atributo']],
    corr: 0,
    expEs: 'La regla de oro de la voz pasiva: el Complemento Directo activo se transforma en el Sujeto Paciente de la oración pasiva.',
    expHy: 'Կրավորականի ոսկե կանոնը. ներգործականի Ուղիղ խնդիրը (CD) կրավորականում դառնում է կրավորական ենթակա (Sujeto Paciente)։',
    tipEs: 'El CD activo siempre se convierte en Sujeto paciente en pasiva.',
    tipHy: 'Ակտիվ CD-ն կրավորականում դառնում է ենթակա։'
  },
  {
    id: 'q-s-23', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «El viento soplaba CON FUERZA», ¿qué complemento es «CON FUERZA»?',
    qHy: '«Քամին ՈՒԺԳՆՈՐԵՆ (con fuerza) փչում էր»։ Ի՞նչ լրացում է «con fuerza»-ն։',
    opts: [['Complemento Circunstancial de Modo (CCM)', 'Ձևի պարագա (CCM)'], ['Complemento Circunstancial de Tiempo', 'Ժամանակի պարագա'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'Responde a ¿cómo soplaba el viento? = con fuerza (de manera fuerte).',
    expHy: 'Պատասխանում է «ինչպե՞ս էր փչում քամին» հարցին՝ «con fuerza» (ուժգնորեն)։',
    tipEs: '¿Cómo? = CC de Modo.', tipHy: 'Ինչպե՞ս = Ձևի պարագա (CCM)։'
  },
  {
    id: 'q-s-24', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «Nosotros iremos de excursión PORQUE HACE BUEN TIEMPO», ¿qué complemento es la parte en mayúsculas?',
    qHy: '«Մենք էքսկուրսիա կգնանք, ՈՐՈՎՀԵՏԵՎ ԼԱՎ ԵՂԱՆԱԿ Է»։ Ի՞նչ լրացում է մեծատառերով հատվածը։',
    opts: [['Complemento Circunstancial de Causa (CCCausa)', 'Պատճառի պարագա (CCCausa)'], ['Complemento de Finalidad', 'Նպատակի պարագա'], ['Complemento de Modo', 'Ձևի պարագա'], ['Complemento Directo', 'Ուղիղ խնդիր']],
    corr: 0,
    expEs: 'Explica el motivo o razón por el que se realiza la excursión (¿por qué iremos?).',
    expHy: 'Բացատրում է էքսկուրսիա գնալու շարժառիթն ու պատճառը («ինչո՞ւ կգնանք»)։',
    tipEs: '¿Por qué motivo? = CC de Causa.', tipHy: 'Ինչո՞ւ, ինչ պատճառո՞վ = Պատճառի պարագա (CCCausa)։'
  },
  {
    id: 'q-s-25', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «Estudió mucho PARA EL EXAMEN», ¿qué complemento es «PARA EL EXAMEN»?',
    qHy: '«Նա շատ սովորեց ՔՆՆՈՒԹՅԱՆ ՀԱՄԱՐ»։ Ի՞նչ լրացում է «para el examen»-ը։',
    opts: [['Complemento Circunstancial de Finalidad (CCFin)', 'Նպատակի պարագա (CCFinalidad)'], ['Complemento de Causa', 'Պատճառի պարագա'], ['Complemento Indirecto', 'Հանգման խնդիր'], ['Complemento Directo', 'Ուղիղ խնդիր']],
    corr: 0,
    expEs: 'Responde a ¿para qué estudió?: con el objetivo o meta de la prueba.',
    expHy: 'Պատասխանում է «ինչի՞ համար սովորեց» հարցին՝ քննության նպատակով։',
    tipEs: '¿Para qué? = CC de Finalidad.', tipHy: 'Ինչի՞ համար, ինչ նպատակո՞վ = Նպատակի պարագա (CCFin)։'
  },
  {
    id: 'q-s-26', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «El atleta saltó DOS METROS», ¿qué complemento es «DOS METROS»?',
    qHy: '«Մարզիկը ցատկեց ԵՐԿՈՒ ՄԵՏՐ»։ Ի՞նչ լրացում է «dos metros»-ը։',
    opts: [['Complemento Circunstancial de Cantidad (CCCantidad)', 'Չափի պարագա (CCCantidad)'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo'], ['Complemento de Modo', 'Ձևի պարագա']],
    corr: 0,
    expEs: 'Responde a ¿cuánto saltó? = dos metros.',
    expHy: 'Պատասխանում է «որքա՞ն ցատկեց» հարցին՝ երկու մետր։',
    tipEs: '¿Cuánto? = CC de Cantidad.', tipHy: 'Որքա՞ն = Չափի պարագա (CCC)։'
  },
  {
    id: 'q-s-27', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «Los árboles dan SOMBRA», ¿qué función cumple «SOMBRA»?',
    qHy: '«Ծառերը ՍՏՎԵՐ են տալիս»։ Ի՞նչ պաշտոն ունի «sombra»-ն։',
    opts: [['Complemento Directo (CD)', 'Ուղիղ խնդիր (CD)'], ['Atributo', 'Atributo'], ['Sujeto', 'Ենթակա'], ['Complemento de Modo', 'Ձևի պարագա']],
    corr: 0,
    expEs: 'Se sustituye por "la": "Los árboles LA dan". En pasiva: "La sombra es dada por los árboles".',
    expHy: 'Փոխարինվում է «la»-ով՝ «Los árboles LA dan»։ Կրավորականում դառնում է ենթակա։ Ուստի CD է։',
    tipEs: 'Los árboles la dan = Complemento Directo.', tipHy: 'Փոխարինվում է LA-ով = Ուղիղ խնդիր (CD)։'
  },
  {
    id: 'q-s-28', topic: 'sintaxis', diff: 'medio',
    qEs: '¿Cuál de las siguientes oraciones contiene un PREDICADO NOMINAL?',
    qHy: 'Հետևյալ նախադասություններից ո՞րն է պարունակում ԱՆՎԱՆԱԿԱՆ ՍՏՈՐՈԳՅԱԼ (Predicado Nominal)։',
    opts: [['Mi primo parece muy contento con su regalo.', 'Իմ զարմիկը շատ գոհ է թվում իր նվերից։'], ['Mi primo compró un regalo para su hermana.', 'Իմ զարմիկը նվեր գնեց քրոջ համար։'], ['Mi primo corre diez kilómetros diarios.', 'Իմ զարմիկը օրական տասը կիլոմետր է վազում։'], ['Mi primo duerme en su habitación.', 'Իմ զարմիկը քնում է իր սենյակում։']],
    corr: 0,
    expEs: 'Lleva el verbo copulativo "parecer" y el atributo "muy contento".',
    expHy: 'Ունի «parecer» կապակցող բայը և «muy contento» Atributo-ն։',
    tipEs: 'Verbo parecer + cualidad = Predicado Nominal.', tipHy: 'Parecer բայ + որակ = Անվանական ստորոգյալ։'
  },
  {
    id: 'q-s-29', topic: 'sintaxis', diff: 'dificil',
    qEs: 'En «El cuadro fue pintado POR PICASSO», ¿qué función cumple «POR PICASSO»?',
    qHy: '«Նկարը նկարվել է ՊԻԿԱՍՈՅԻ ԿՈՂՄԻՑ (por Picasso)»։ Ի՞նչ պաշտոն ունի «por Picasso»-ն։',
    opts: [['Complemento Agente (CAg)', 'Ներգործող խնդիր (Complemento Agente - CAg)'], ['Complemento Circunstancial de Causa', 'Պատճառի պարագա'], ['Complemento Indirecto', 'Հանգման խնդիր'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'En las oraciones pasivas, el Sintagma Preposicional introducido por "por" que realiza la acción se llama Complemento Agente.',
    expHy: 'Կրավորական նախադասություններում գործողությունը կատարող «por» նախդիրով լրացումը կոչվում է Ներգործող խնդիր (Complemento Agente)։',
    tipEs: 'Oración pasiva + "por alguien" = Complemento Agente (CAg).',
    tipHy: 'Կրավորական նախադասություն + «por» = Ներգործող խնդիր (CAg)։'
  },
  {
    id: 'q-s-30', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «Mi tía compró una casa DE MADERA», ¿qué función cumple «DE MADERA»?',
    qHy: '«Իմ մորաքույրը ՓԱՅՏԵ (de madera) տուն գնեց»։ Ի՞նչ պաշտոն ունի «de madera»-ն։',
    opts: [['Complemento del Nombre (CN)', 'Գոյականի լրացում / Որոշիչ (Complemento del Nombre - CN)'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo'], ['Complemento Circunstancial de Materia', 'Նյութի պարագա']],
    corr: 0,
    expEs: 'Complementa y especifica directamente al sustantivo "casa" dentro del Sintagma Nominal.',
    expHy: 'Լրացնում և հստակեցնում է «casa» գոյականին գոյականական կապակցության մեջ։',
    tipEs: 'Preposición + sustantivo que modifica a otro sustantivo = CN.',
    tipHy: 'Գոյականին լրացնող նախդիրային կապակցություն = Գոյականի լրացում (CN)։'
  }
];

export const extraBank3Questions: PracticeQuestion[] = list.map((q) => ({
  id: q.id,
  topicId: q.topic,
  difficulty: q.diff,
  format: 'multiple_choice',
  questionEs: q.qEs,
  questionHy: q.qHy,
  targetSentenceEs: q.sentenceEs,
  targetSentenceHy: q.sentenceHy,
  options: q.opts.map(([es, hy]) => ({ textEs: es, textHy: hy })),
  correctOptionIndex: q.corr,
  explanationEs: q.expEs,
  explanationHy: q.expHy,
  examTipEs: q.tipEs,
  examTipHy: q.tipHy,
}));
