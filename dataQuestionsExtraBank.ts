import { PracticeQuestion, TopicId, QuestionOption } from './types';

// Helper to generate typed questions efficiently with full Armenian translation
interface QuestionDef {
  id: string;
  topic: TopicId;
  diff: 'facil' | 'medio' | 'dificil';
  qEs: string;
  qHy: string;
  sentenceEs?: string;
  sentenceHy?: string;
  opts: [string, string][]; // [ES, HY]
  correct: number;
  expEs: string;
  expHy: string;
  tipEs: string;
  tipHy: string;
}

const rawExtraBank: QuestionDef[] = [
  // --- MODALIDADES (22 more to reach 42) ---
  {
    id: 'q-m-21', topic: 'modalidades', diff: 'facil',
    qEs: '«Los árboles florecen en primavera». ¿Qué modalidad oracional es?',
    qHy: '«Ծառերը ծաղկում են գարնանը»։ Ի՞նչ եղանակավորում է։',
    opts: [['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Enunciativa negativa', 'Ժխտական պատմողական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Comunica un hecho positivo y real en modo indicativo.',
    expHy: 'Հաղորդում է իրական դրական փաստ սահմանական եղանակով։',
    tipEs: 'Afirmación objetiva = enunciativa afirmativa.', tipHy: 'Օբյեկտիվ հաստատում = հաստատական պատմողական։'
  },
  {
    id: 'q-m-22', topic: 'modalidades', diff: 'facil',
    qEs: '«Nunca volveré a cometer ese error». ¿Qué modalidad oracional es?',
    qHy: '«Երբեք այլևս այդ սխալը չեմ գործի»։ Ի՞նչ եղանակավորում է։',
    opts: [['Enunciativa negativa', 'Ժխտական պատմողական'], ['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Dubitativa', 'Երկբայական'], ['Exclamativa', 'Բացականչական']],
    correct: 0,
    expEs: 'Lleva el adverbio "nunca", que niega rotundamente la acción.',
    expHy: 'Ունի «nunca» (երբեք) մակբայը, որը կտրականապես ժխտում է գործողությունը։',
    tipEs: 'Nunca / Jamás = enunciativa negativa.', tipHy: 'Nunca / Jamás = ժխտական պատմողական։'
  },
  {
    id: 'q-m-23', topic: 'modalidades', diff: 'medio',
    qEs: '«Pregúntale a María si vendrá al cine con nosotros». ¿Qué modalidad presenta?',
    qHy: '«Հարցրու Մարիային, թե արդյոք նա կգա՞ մեզ հետ կինո»։ Ի՞նչ եղանակավորում է ներկայացնում հարցական մասը։',
    opts: [['Interrogativa indirecta total', 'Ընդհանուր անուղղակի հարցական'], ['Interrogativa directa', 'Ուղղակի հարցական'], ['Exclamativa', 'Բացականչական'], ['Desiderativa', 'Ըղձական']],
    correct: 0,
    expEs: 'Es una interrogativa indirecta total introducida por la conjunción "si" sin signos ¿ ?.',
    expHy: 'Սա ընդհանուր անուղղակի հարցական է՝ ներմուծված «si» (արդյոք) շաղկապով առանց ¿ ? նշանների։',
    tipEs: 'Preguntar si... = interrogativa indirecta total.', tipHy: 'Preguntar si... = ընդհանուր անուղղակի հարցական։'
  },
  {
    id: 'q-m-24', topic: 'modalidades', diff: 'facil',
    qEs: '«¡Qué paisaje tan hermoso se divisa desde aquí!». ¿Qué modalidad oracional es?',
    qHy: '«Ի՜նչ գեղեցիկ բնապատկեր է երևում այստեղից»։ Ի՞նչ եղանակավորում է։',
    opts: [['Exclamativa', 'Բացականչական'], ['Enunciativa', 'Պատմողական'], ['Desiderativa', 'Ըղձական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Muestra admiración y asombro con signos ¡ !.',
    expHy: 'Ցույց է տալիս հիացմունք և զարմանք ¡ ! նշաններով։',
    tipEs: '¡Qué hermoso! = exclamativa.', tipHy: '¡Qué hermoso! = բացականչական։'
  },
  {
    id: 'q-m-25', topic: 'modalidades', diff: 'medio',
    qEs: '«Probablemente lleguemos a casa antes del anochecer». ¿A qué modalidad corresponde?',
    qHy: '«Հավանաբար մենք տուն կհասնենք մինչև մթնելը»։ Ո՞ր եղանակավորմանն է համապատասխանում։',
    opts: [['Dubitativa', 'Երկբայական'], ['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Exhortativa', 'Հորդորական'], ['Desiderativa', 'Ըղձական']],
    correct: 0,
    expEs: 'El adverbio "probablemente" aporta un matiz de inseguridad y conjetura.',
    expHy: '«Probablemente» (հավանաբար) մակբայը հաղորդում է անվստահություն և ենթադրություն։',
    tipEs: 'Probablemente / Posiblemente = dubitativa.', tipHy: 'Probablemente (հավանաբար) = երկբայական։'
  },
  {
    id: 'q-m-26', topic: 'modalidades', diff: 'medio',
    qEs: '«¡Que tengas un feliz viaje a Roma!». ¿Qué modalidad oracional encierra?',
    qHy: '«Բարի՜ ճանապարհ դեպի Հռոմ»։ Ի՞նչ եղանակավորում է պարունակում։',
    opts: [['Desiderativa', 'Ըղձական'], ['Exclamativa pura', 'Զուտ բացականչական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Fórmula que expresa un buen deseo cordial con verbo en subjuntivo ("tengas").',
    expHy: 'Բարեմաղթանք արտահայտող բանաձև subjuntivo բայով («tengas»)։',
    tipEs: '¡Que tengas buen viaje! = desiderativa.', tipHy: '¡Que tengas buen viaje! = ըղձական։'
  },
  {
    id: 'q-m-27', topic: 'modalidades', diff: 'facil',
    qEs: '«No hagáis ruido en la sala de lectura». ¿Qué modalidad oracional es?',
    qHy: '«Ընթերցասրահում աղմուկ մի՛ արեք»։ Ի՞նչ եղանակավորում է։',
    opts: [['Exhortativa (prohibición)', 'Հորդորական (արգելք)'], ['Enunciativa negativa', 'Ժխտական պատմողական'], ['Dubitativa', 'Երկբայական'], ['Desiderativa', 'Ըղձական']],
    correct: 0,
    expEs: 'Mandato negativo dirigido a la 2.ª persona del plural (vosotros).',
    expHy: 'Ժխտական հրաման՝ ուղղված հոգնակի 2-րդ դեմքին (դուք)։',
    tipEs: 'No hagáis = prohibición = exhortativa.', tipHy: 'No hagáis (մի՛ արեք) = հորդորական։'
  },
  {
    id: 'q-m-28', topic: 'modalidades', diff: 'medio',
    qEs: '«¿Has terminado ya la tarea de Lengua Castellana?». ¿Qué tipo de interrogativa es?',
    qHy: '«Արդեն ավարտե՞լ ես իսպաներենի տնային աշխատանքը»։ Ինչպիսի՞ հարցական է։',
    opts: [['Interrogativa directa total', 'Ուղղակի լրիվ հարցական'], ['Interrogativa directa parcial', 'Ուղղակի մասնակի հարցական'], ['Interrogativa indirecta', 'Անուղղակի հարցական'], ['Enunciativa', 'Պատմողական']],
    correct: 0,
    expEs: 'Es directa (lleva signos ¿ ?) y total (la respuesta esperada es "sí" o "no").',
    expHy: 'Ուղղակի է (ունի ¿ ?) և լրիվ (սպասվող պատասխանը «այո» կամ «ոչ» է)։',
    tipEs: 'Se responde sí/no = total.', tipHy: 'Պատասխանը այո/ոչ է = լրիվ հարցական։'
  },
  {
    id: 'q-m-29', topic: 'modalidades', diff: 'medio',
    qEs: '«¿Dónde has dejado las llaves de casa?». ¿Qué tipo de interrogativa es?',
    qHy: '«Որտե՞ղ ես թողել տան բանալիները»։ Ինչպիսի՞ հարցական է։',
    opts: [['Interrogativa directa parcial', 'Ուղղակի մասնակի հարցական'], ['Interrogativa directa total', 'Ուղղակի լրիվ հարցական'], ['Interrogativa indirecta', 'Անուղղակի հարցական'], ['Exclamativa', 'Բացականչական']],
    correct: 0,
    expEs: 'Es parcial porque pregunta por una información concreta (el lugar, con "dónde") y no se responde con sí o no.',
    expHy: 'Մասնակի է, որովհետև հարցնում է կոնկրետ տեղեկություն (տեղը՝ «dónde») և չի պատասխանվում այո/ոչ-ով։',
    tipEs: 'Con pronombre interrogativo (dónde, cuándo, qué) = parcial.', tipHy: 'Հարցական դերանունով = մասնակի հարցական։'
  },
  {
    id: 'q-m-30', topic: 'modalidades', diff: 'facil',
    qEs: '«El profesor no ha corregido todavía los ejercicios». ¿Qué modalidad oracional es?',
    qHy: '«Ուսուցիչը դեռ չի ստուգել վարժությունները»։ Ի՞նչ եղանակավորում է։',
    opts: [['Enunciativa negativa', 'Ժխտական պատմողական'], ['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Niega un hecho con el adverbio "no".',
    expHy: '«No» մակբայով ժխտում է փաստը։',
    tipEs: 'No ha corregido = enunciativa negativa.', tipHy: 'No ha corregido = ժխտական պատմողական։'
  },
  {
    id: 'q-m-31', topic: 'modalidades', diff: 'medio',
    qEs: '«Acaso no tengamos clase de gimnasia mañana». ¿Qué modalidad oracional es?',
    qHy: '«Միգուցե վաղը մարմնամարզության դաս չունենանք»։ Ի՞նչ եղանակավորում է։',
    opts: [['Dubitativa', 'Երկբայական'], ['Enunciativa', 'Պատմողական'], ['Desiderativa', 'Ըղձական'], ['Exhortativa', 'Հորդորական']],
    correct: 0,
    expEs: 'El adverbio "acaso" expresa incertidumbre y duda sobre el futuro.',
    expHy: '«Acaso» (միգուցե) մակբայն արտահայտում է անորոշություն և կասկած։',
    tipEs: 'Acaso = dubitativa.', tipHy: 'Acaso = երկբայական։'
  },
  {
    id: 'q-m-32', topic: 'modalidades', diff: 'facil',
    qEs: '«Ven aquí inmediatamente». ¿Qué modalidad oracional se emplea?',
    qHy: '«Անմիջապես արի՛ այստեղ»։ Ի՞նչ եղանակավորում է կիրառվում։',
    opts: [['Exhortativa o imperativa', 'Հորդորական կամ հրամայական'], ['Desiderativa', 'Ըղձական'], ['Enunciativa', 'Պատմողական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Mandato rotundo con imperativo ("Ven").',
    expHy: 'Կոշտ հրաման հրամայականով («Ven»)։',
    tipEs: 'Ven = imperativo = exhortativa.', tipHy: 'Ven = հրամայական = հորդորական։'
  },
  {
    id: 'q-m-33', topic: 'modalidades', diff: 'medio',
    qEs: '«¡Ojalá no llueva durante la fiesta en el jardín!». ¿Qué modalidad oracional es?',
    qHy: '«Երանի՜ այգու երեկույթի ժամանակ անձրև չգա»։ Ի՞նչ եղանակավորում է։',
    opts: [['Desiderativa', 'Ըղձական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական'], ['Enunciativa', 'Պատմողական']],
    correct: 0,
    expEs: 'Deseo de que algo no ocurra introducido por "ojalá".',
    expHy: 'Ցանկություն «ojalá»-ով, որ ինչ-որ բան տեղի չունենա։',
    tipEs: 'Ojalá no llueva = desiderativa.', tipHy: 'Ojalá no llueva = ըղձական։'
  },
  {
    id: 'q-m-34', topic: 'modalidades', diff: 'facil',
    qEs: '«Madrid es la capital de España». ¿Qué modalidad oracional es?',
    qHy: '«Մադրիդը Իսպանիայի մայրաքաղաքն է»։ Ի՞նչ եղանակավորում է։',
    opts: [['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական'], ['Desiderativa', 'Ըղձական']],
    correct: 0,
    expEs: 'Afirmación de un hecho geográfico neutral.',
    expHy: 'Աշխարհագրական չեզոք փաստի հաստատում։',
    tipEs: 'Dato comprobable = enunciativa afirmativa.', tipHy: 'Ստուգելի տվյալ = հաստատական պատմողական։'
  },
  {
    id: 'q-m-35', topic: 'modalidades', diff: 'medio',
    qEs: '«No sé cuándo volverá el tren de cercanías». ¿Qué modalidad oracional contiene?',
    qHy: '«Չգիտեմ, թե երբ կվերադառնա մերձքաղաքային գնացքը»։ Ի՞նչ եղանակավորում է պարունակում։',
    opts: [['Interrogativa indirecta parcial', 'Մասնակի անուղղակի հարցական'], ['Interrogativa directa', 'Ուղղակի հարցական'], ['Exhortativa', 'Հորդորական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Pregunta indirecta por el momento ("cuándo" con tilde) subordinada al verbo "saber".',
    expHy: 'Ժամանակի մասին անուղղակի հարց («cuándo» շեշտով)՝ կախված «saber» բայից։',
    tipEs: 'No sé cuándo = interrogativa indirecta parcial.', tipHy: 'No sé cuándo = մասնակի անուղղակի հարցական։'
  },
  {
    id: 'q-m-36', topic: 'modalidades', diff: 'medio',
    qEs: '«¡Cuánto tiempo hemos esperado en esta cola!». ¿Qué modalidad oracional es?',
    qHy: '«Որքա՜ն ժամանակ ենք սպասել այս հերթում»։ Ի՞նչ եղանակավորում է։',
    opts: [['Exclamativa', 'Բացականչական'], ['Interrogativa', 'Հարցական'], ['Enunciativa', 'Պատմողական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Expresión ponderativa y enfática entre signos de admiración ¡ !.',
    expHy: 'Շեշտադրված բացականչություն ¡ ! նշանների միջև։',
    tipEs: '¡Cuánto tiempo! = exclamativa.', tipHy: '¡Cuánto tiempo! = բացականչական։'
  },
  {
    id: 'q-m-37', topic: 'modalidades', diff: 'facil',
    qEs: '«Pasa la sal, por favor». ¿Qué modalidad oracional es?',
    qHy: '«Աղը փոխանցի՛ր, խնդրում եմ»։ Ի՞նչ եղանակավորում է։',
    opts: [['Exhortativa', 'Հորդորական'], ['Enunciativa', 'Պատմողական'], ['Desiderativa', 'Ըղձական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'Petición cortés en imperativo.',
    expHy: 'Քաղաքավարի խնդրանք հրամայականով։',
    tipEs: 'Petición cotidiana = exhortativa.', tipHy: 'Առօրյա խնդրանք = հորդորական։'
  },
  {
    id: 'q-m-38', topic: 'modalidades', diff: 'medio',
    qEs: '«A lo mejor nos vemos esta tarde en la plaza». ¿Qué modalidad oracional es?',
    qHy: '«Երևի այսօր կեսօրից հետո հանդիպենք հրապարակում»։ Ի՞նչ եղանակավորում է։',
    opts: [['Dubitativa', 'Երկբայական'], ['Enunciativa', 'Պատմողական'], ['Exhortativa', 'Հորդորական'], ['Desiderativa', 'Ըղձական']],
    correct: 0,
    expEs: 'Locución de duda "a lo mejor".',
    expHy: 'Կասկածի «a lo mejor» (երևի) կապակցություն։',
    tipEs: 'A lo mejor = probabilidad = dubitativa.', tipHy: 'A lo mejor = երկբայական։'
  },
  {
    id: 'q-m-39', topic: 'modalidades', diff: 'medio',
    qEs: '«¡Así apruebes con un sobresaliente!». ¿Qué modalidad oracional encierra?',
    qHy: '«Թող որ գերազանցով հանձնես»։ Ի՞նչ եղանակավորում է պարունակում։',
    opts: [['Desiderativa', 'Ըղձական'], ['Exhortativa', 'Հորդորական'], ['Enunciativa', 'Պատմողական'], ['Dubitativa', 'Երկբայական']],
    correct: 0,
    expEs: 'La partícula "así" con subjuntivo ("apruebes") expresa un deseo vehemente.',
    expHy: '«Así» մասնիկը subjuntivo-ի հետ արտահայտում է բուռն ցանկություն։',
    tipEs: 'Así + subjuntivo = deseo = desiderativa.', tipHy: 'Así + subjuntivo = ըղձական։'
  },
  {
    id: 'q-m-40', topic: 'modalidades', diff: 'facil',
    qEs: '«Nunca he viajado en helicóptero». ¿Qué modalidad oracional es?',
    qHy: '«Երբեք ուղղաթիռով չեմ ճամփորդել»։ Ի՞նչ եղանակավորում է։',
    opts: [['Enunciativa negativa', 'Ժխտական պատմողական'], ['Enunciativa afirmativa', 'Հաստատական պատմողական'], ['Dubitativa', 'Երկբայական'], ['Exhortativa', 'Հորդորական']],
    correct: 0,
    expEs: 'Niega la experiencia con "nunca".',
    expHy: '«Nunca» (երբեք) բառով ժխտում է փորձը։',
    tipEs: 'Nunca = enunciativa negativa.', tipHy: 'Nunca = ժխտական պատմողական։'
  },
  {
    id: 'q-m-41', topic: 'modalidades', diff: 'dificil',
    qEs: '«Tendría unos doce años cuando aprendió a nadar». ¿Qué modalidad oracional expresa ese condicional?',
    qHy: '«Մոտ տասներկու տարեկան կլիներ, երբ սովորեց լողալ»։ Ի՞նչ եղանակավորում է արտահայտում այդ պայմանականը։',
    opts: [['Dubitativa o de probabilidad en el pasado', 'Երկբայական կամ հավանականության անցյալում'], ['Enunciativa afirmativa certera', 'Հաստատական պատմողական վստահ'], ['Desiderativa', 'Ըղձական'], ['Exhortativa', 'Հորդորական']],
    correct: 0,
    expEs: 'El condicional de probabilidad ("tendría") indica una conjetura aproximada en el pasado.',
    expHy: 'Հավանականության պայմանականը («tendría») ցույց է տալիս մոտավոր ենթադրություն անցյալում։',
    tipEs: 'Condicional de probabilidad = modalidad dubitativa.', tipHy: 'Հավանականության պայմանական = երկբայական։'
  },
  {
    id: 'q-m-42', topic: 'modalidades', diff: 'medio',
    qEs: '«¿Quién te ha dicho semejante disparate?». ¿Qué modalidad oracional es?',
    qHy: '«Ո՞վ է քեզ ասել նման անհեթեթություն»։ Ի՞նչ եղանակավորում է։',
    opts: [['Interrogativa directa parcial', 'Ուղղակի մասնակի հարցական'], ['Interrogativa indirecta', 'Անուղղակի հարցական'], ['Interrogativa total', 'Ընդհանուր հարցական'], ['Exclamativa', 'Բացականչական']],
    correct: 0,
    expEs: 'Lleva signos ¿ ? y el pronombre "quién", preguntando por la persona concreta.',
    expHy: 'Ունի ¿ ? նշաններ և «quién» դերանունը՝ հարցնելով կոնկրետ անձի մասին։',
    tipEs: 'Pregunta con ¿quién...? = directa parcial.', tipHy: '¿quién...? = ուղղակի մասնակի հարցական։'
  }
];

export const extraBankQuestions: PracticeQuestion[] = rawExtraBank.map((q) => ({
  id: q.id,
  topicId: q.topic,
  difficulty: q.diff,
  format: q.topic === 'modalidades' ? 'identify_modality' : 'multiple_choice',
  questionEs: q.qEs,
  questionHy: q.qHy,
  targetSentenceEs: q.sentenceEs,
  targetSentenceHy: q.sentenceHy,
  options: q.opts.map(([es, hy]) => ({ textEs: es, textHy: hy })),
  correctOptionIndex: q.correct,
  explanationEs: q.expEs,
  explanationHy: q.expHy,
  examTipEs: q.tipEs,
  examTipHy: q.tipHy,
}));
