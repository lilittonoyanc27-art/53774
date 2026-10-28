import { PracticeQuestion, TopicId } from './types';

interface SimpleQ {
  id: string;
  topic: TopicId;
  diff: 'facil' | 'medio' | 'dificil';
  qEs: string;
  qHy: string;
  opts: [string, string][];
  corr: number;
  expEs: string;
  expHy: string;
  tipEs: string;
  tipHy: string;
}

const items: SimpleQ[] = [
  // --- ELEMENTOS DE LA COMUNICACIÓN (26 items: q-c-11 to q-c-36) ---
  {
    id: 'q-c-11', topic: 'comunicacion', diff: 'facil',
    qEs: 'El timbre del instituto suena para avisar del cambio de clase. ¿Cuál es el CANAL?',
    qHy: 'Դպրոցի զանգը հնչում է՝ ազդարարելով դասափոխը։ Ո՞րն է ԿԱՊՈՒՂԻՆ (Canal)։',
    opts: [['El aire y las ondas sonoras', 'Օդը և ձայնային ալիքները'], ['El conserje', 'Դռնապանը'], ['El cambio de clase', 'Դասափոխը'], ['El reloj', 'Ժամացույցը']],
    corr: 0,
    expEs: 'El canal físico por donde se propaga el sonido del timbre es el aire.',
    expHy: 'Ֆիզիկական կապուղին, որով տարածվում է զանգի ձայնը, օդն է։',
    tipEs: 'Sonidos en directo = canal acústico (aire).', tipHy: 'Ուղիղ ձայներ = օդային ձայնային կապուղի։'
  },
  {
    id: 'q-c-12', topic: 'comunicacion', diff: 'facil',
    qEs: 'Un árbitro de fútbol saca tarjeta amarilla a un jugador. ¿Cuál es el MENSAJE?',
    qHy: 'Ֆուտբոլի մրցավարը դեղին քարտ է ցույց տալիս խաղացողին։ Ո՞րն է ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆԸ (Mensaje)։',
    opts: [['Amonestación oficial por una infracción', 'Պաշտոնական նախազգուշացում խախտման համար'], ['El árbitro', 'Մրցավարը'], ['La cartulina de plástico', 'Պլաստիկ քարտը'], ['El silbato', 'Սուլիչը']],
    corr: 0,
    expEs: 'El mensaje es el contenido que se transmite: la amonestación.',
    expHy: 'Հաղորդագրությունը փոխանցվող բովանդակությունն է՝ նախազգուշացումը։',
    tipEs: 'Mensaje = ¿qué se está comunicando?', tipHy: 'Mensaje = ի՞նչ է հաղորդվում։'
  },
  {
    id: 'q-c-13', topic: 'comunicacion', diff: 'medio',
    qEs: 'Una madre envía un mensaje de texto por WhatsApp a su hijo. ¿Quién es el EMISOR?',
    qHy: 'Մայրը WhatsApp-ով տեքստային հաղորդագրություն է ուղարկում որդուն։ Ո՞վ է ՀԱՂՈՐԴՈՂԸ (Emisor)։',
    opts: [['La madre', 'Մայրը'], ['El hijo', 'Որդին'], ['El teléfono móvil', 'Բջջային հեռախոսը'], ['La aplicación WhatsApp', 'WhatsApp հավելվածը']],
    corr: 0,
    expEs: 'La madre es quien concibe y redacta el mensaje.',
    expHy: 'Մայրն է նա, ով մտածում և գրում է հաղորդագրությունը։',
    tipEs: 'Emisor = persona que envía la comunicación.', tipHy: 'Emisor = հաղորդագրությունն ուղարկող անձը։'
  },
  {
    id: 'q-c-14', topic: 'comunicacion', diff: 'medio',
    qEs: 'En el mismo mensaje de WhatsApp («Hijo, compra pan»), ¿cuál es el CÓDIGO?',
    qHy: 'Նույն WhatsApp հաղորդագրության մեջ («Տղա՛ս, հաց գնիր»), ո՞րն է ԿՈԴԸ (Código)։',
    opts: [['El idioma español escrito', 'Իսպաներեն գրավոր լեզուն'], ['El teléfono', 'Հեռախոսը'], ['El pan', 'Հացը'], ['La panadería', 'Հացի փուռը']],
    corr: 0,
    expEs: 'El código es la lengua española escrita.',
    expHy: 'Կոդը գրավոր իսպաներեն լեզուն է։',
    tipEs: 'Código = el idioma empleado.', tipHy: 'Código = գործածված լեզուն։'
  },
  {
    id: 'q-c-15', topic: 'comunicacion', diff: 'medio',
    qEs: 'Dos amigos hablan en una discoteca con música atronadora y no logran entenderse. ¿Qué elemento dificulta la comunicación?',
    qHy: 'Երկու ընկեր խոսում են ակումբում շշմեցուցիչ բարձր երաժշտության տակ և չեն կարողանում հասկանալ միմյանց։ Ի՞նչ տարր է խոչընդոտում հաղորդակցությանը։',
    opts: [['El ruido acústico en el canal', 'Ձայնային աղմուկը (ruido) կապուղում'], ['El código lingüístico', 'Լեզվական կոդը'], ['El contexto temporal', 'Ժամանակային համատեքստը'], ['El emisor', 'Հաղորդողը']],
    corr: 0,
    expEs: 'El ruido es la interferencia física externa que distorsiona el canal acústico.',
    expHy: 'Աղմուկը (ruido) արտաքին ֆիզիկական խոտանն է, որը խաթարում է ձայնային կապուղին։',
    tipEs: 'Ruido = interferencia en el canal.', tipHy: 'Ruido = խոտան կապուղում։'
  },
  {
    id: 'q-c-16', topic: 'comunicacion', diff: 'facil',
    qEs: 'Una sirena de ambulancia suena en la calle. ¿Cuál es el RECEPTOR principal?',
    qHy: 'Փողոցում հնչում է շտապօգնության մեքենայի ազդանշանը։ Ո՞վ է գլխավոր ԸՆԴՈՒՆՈՂԸ (Receptor)։',
    opts: [['Los conductores y peatones que circulan por la vía', 'Ճանապարհով երթևեկող վարորդներն ու հետիոտները'], ['El paciente dentro de la ambulancia', 'Շտապօգնության մեջ գտնվող հիվանդը'], ['El hospital', 'Հիվանդանոցը'], ['La sirena de luces', 'Լուսային ազդանշանը']],
    corr: 0,
    expEs: 'Los conductores y transeúntes son quienes deben apartarse para ceder el paso.',
    expHy: 'Վարորդներն ու անցորդներն են, ովքեր պետք է մի կողմ քաշվեն՝ ճանապարհ տալու համար։',
    tipEs: 'Receptor = quien recibe el aviso para actuar.', tipHy: 'Receptor = ով ստանում է ազդանշանը՝ գործելու համար։'
  },
  {
    id: 'q-c-17', topic: 'comunicacion', diff: 'medio',
    qEs: 'La luz verde de un semáforo se enciende. ¿Qué MENSAJE transmite?',
    qHy: 'Միանում է լուսացույցի կանաչ լույսը։ Ի՞նչ ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ է փոխանցում։',
    opts: [['Permiso de paso y avance libre', 'Անցնելու և ազատ երթևեկության թույլտվություն'], ['Obligación de detenerse', 'Կանգնելու պարտադիր պահանջ'], ['Avería en la calzada', 'Ճանապարհի վթար'], ['Límite de velocidad', 'Արագության սահմանափակում']],
    corr: 0,
    expEs: 'La luz verde significa convencionalmente permiso para reanudar la marcha.',
    expHy: 'Կանաչ լույսը պայմանականորեն նշանակում է երթևեկությունը վերսկսելու թույլտվություն։',
    tipEs: 'Semáforo verde = mensaje: avance.', tipHy: 'Կանաչ լուսացույց = հաղորդագրություն՝ անցե՛ք։'
  },
  {
    id: 'q-c-18', topic: 'comunicacion', diff: 'facil',
    qEs: 'Un cartel dice: «PROHIBIDO FUMAR». ¿Cuál es el EMISOR institucional?',
    qHy: 'Ցուցանակի վրա գրված է՝ «ԾԽԵԼՆ ԱՐԳԵԼՎԱԾ Է»։ Ո՞վ է պաշտոնական ՀԱՂՈՐԴՈՂԸ (Emisor)։',
    opts: [['La dirección del establecimiento o autoridad competente', 'Հաստատության ղեկավարությունը կամ պատկան մարմինը'], ['El propio cartel de plástico', 'Պլաստիկե ցուցանակը'], ['La persona que fuma', 'Ծխող անձը'], ['El cenicero', 'Մոխրամանը']],
    corr: 0,
    expEs: 'El emisor es quien dicta la norma y manda colocar el cartel.',
    expHy: 'Հաղորդողն այն մարմինն է, որը սահմանում է կանոնը և տեղադրում ցուցանակը։',
    tipEs: 'En carteles oficiales, el emisor es la autoridad.', tipHy: 'Պաշտոնական ցուցանակներում հաղորդողը ղեկավարությունն է։'
  },
  {
    id: 'q-c-19', topic: 'comunicacion', diff: 'medio',
    qEs: 'Un náufrago mete una nota en una botella y la lanza al mar. ¿Cuál es el CANAL?',
    qHy: 'Նավաբեկյալը գրություն է դնում շշի մեջ և նետում ծովը։ Ո՞րն է ԿԱՊՈՒՂԻՆ (Canal)։',
    opts: [['El papel y la botella en el agua marina', 'Թուղթը և շիշը ծովի ջրում'], ['El náufrago', 'Նավաբեկյալը'], ['El barco rescatador', 'Փրկարար նավը'], ['El idioma del náufrago', 'Նավաբեկյալի լեզուն']],
    corr: 0,
    expEs: 'El soporte material que transporta físicamente el mensaje es la botella con el papel a través del agua.',
    expHy: 'Նյութական կրիչը, որը ֆիզիկապես տեղափոխում է գրությունը, շիշն ու թուղթն են ջրի միջոցով։',
    tipEs: 'Canal = soporte físico portador del mensaje.', tipHy: 'Canal = հաղորդագրությունը կրող ֆիզիկական միջոցը։'
  },
  {
    id: 'q-c-20', topic: 'comunicacion', diff: 'dificil',
    qEs: 'Si dos turistas intentan hablar, pero uno solo sabe armenio y el otro solo español, ¿qué elemento falla impidiendo la comunicación?',
    qHy: 'Եթե երկու զբոսաշրջիկ փորձում են խոսել, բայց մեկը միայն հայերեն գիտի, իսկ մյուսը՝ միայն իսպաներեն, ո՞ր տարրն է բացակայում՝ խոչընդոտելով հաղորդակցությանը։',
    opts: [['El código común compartido', 'Ընդհանուր համատեղ կոդը (código)'], ['El canal acústico', 'Ձայնային կապուղին'], ['El emisor', 'Հաղորդողը'], ['El contexto', 'Համատեքստը']],
    corr: 0,
    expEs: 'Para que exista comunicación eficaz, emisor y receptor deben compartir obligatoriamente el mismo CÓDIGO.',
    expHy: 'Արդյունավետ հաղորդակցման համար հաղորդողն ու ընդունողը ՊԱՐՏԱԴԻՐ պետք է կիսեն նույն ԿՈԴԸ (código)։',
    tipEs: 'Idiomas diferentes sin entendimiento = falta de código común.', tipHy: 'Տարբեր լեզուներ առանց հասկանալու = ընդհանուր կոդի բացակայություն։'
  },

  // --- CATEGORÍAS GRAMATICALES (additional: q-cat-11 to q-cat-35) ---
  {
    id: 'q-cat-11', topic: 'categorias', diff: 'facil',
    qEs: 'En «El atleta corrió RÁPIDAMENTE», ¿qué categoría gramatical es «RÁPIDAMENTE»?',
    qHy: '«Մարզիկը ԱՐԱԳՈՐԵՆ (rápidamente) վազեց» նախադասության մեջ ի՞նչ խոսքի մաս է «RÁPIDAMENTE»-ն։',
    opts: [['Adverbio de modo', 'Ձևի մակբայ'], ['Adjetivo calificativo', 'Որակական ածական'], ['Sustantivo común', 'Հասարակ գոյական'], ['Verbo', 'Բայ']],
    corr: 0,
    expEs: 'Termina en el sufijo adverbial "-mente" y modifica al verbo corrió explicando cómo lo hizo.',
    expHy: 'Վերջանում է «-mente» մակբայական վերջածանցով և լրացնում է corrió բային՝ ցույց տալով գործողության ձևը։',
    tipEs: 'Palabras terminadas en -mente = adverbios de modo.', tipHy: '-mente-ով վերջացող բառեր = ձևի մակբայներ։'
  },
  {
    id: 'q-cat-12', topic: 'categorias', diff: 'facil',
    qEs: '«MADRID y BARCELONA son dos ciudades de España». ¿Qué clase de sustantivos son «Madrid» y «Barcelona»?',
    qHy: '«Մադրիդն ու Բարսելոնան Իսպանիայի երկու քաղաքներ են»։ Ինչպիսի՞ գոյականներ են «Madrid»-ը և «Barcelona»-ն։',
    opts: [['Sustantivos propios', 'Հատուկ գոյականներ (sustantivos propios)'], ['Sustantivos comunes', 'Հասարակ գոյականներ'], ['Sustantivos abstractos', 'Վերացական գոյականներ'], ['Sustantivos colectivos', 'Հավաքական գոյականներ']],
    corr: 0,
    expEs: 'Nombran lugares geográficos individuales y se escriben con mayúscula inicial (sustantivos propios).',
    expHy: 'Անվանում են անհատական աշխարհագրական վայրեր և գրվում մեծատառով (հատուկ գոյականներ)։',
    tipEs: 'Nombres de ciudades, países o personas con mayúscula = sustantivos propios.', tipHy: 'Քաղաքների, երկրների կամ անձանց մեծատառ անունները = հատուկ գոյականներ։'
  },
  {
    id: 'q-cat-13', topic: 'categorias', diff: 'medio',
    qEs: 'En «Compré MUCHOS libros», ¿qué categoría gramatical es «MUCHOS»?',
    qHy: '«ՇԱՏ գրքեր գնեցի» նախադասության մեջ ի՞նչ խոսքի մաս է «MUCHOS»-ը։',
    opts: [['Determinante indefinido', 'Անորոշ որոշիչ (determinante indefinido)'], ['Pronombre indefinido', 'Անորոշ դերանուն'], ['Adverbio de cantidad', 'Քանակի մակբայ'], ['Adjetivo calificativo', 'Որակական ածական']],
    corr: 0,
    expEs: 'Acompaña al sustantivo plural "libros", concordando con él en masculino y plural. Al acompañar al nombre, es determinante.',
    expHy: 'Ուղեկցում է «libros» հոգնակի գոյականին՝ համաձայնելով նրա հետ արական հոգնակիով։ Քանի որ գոյականի հետ է, determinante է։',
    tipEs: 'Muchos + sustantivo = determinante indefinido.', tipHy: 'Muchos + գոյական = անորոշ որոշիչ (determinante)։'
  },
  {
    id: 'q-cat-14', topic: 'categorias', diff: 'medio',
    qEs: 'En «Trabajó MUCHO ayer», ¿qué categoría gramatical es «MUCHO»?',
    qHy: '«Երեկ նա ՇԱՏ աշխատեց» նախադասության մեջ ի՞նչ խոսքի մաս է «MUCHO»-ն։',
    opts: [['Adverbio de cantidad', 'Քանակի մակբայ (adverbio)'], ['Determinante indefinido', 'Անորոշ որոշիչ'], ['Pronombre', 'Դերանուն'], ['Sustantivo', 'Գոյական']],
    corr: 0,
    expEs: 'Modifica directamente al verbo "trabajó" y es invariable (no cambia de género ni número). Por eso es adverbio.',
    expHy: 'Լրացնում է «trabajó» բային և անփոփոխ է (չունի սեռ կամ թիվ)։ Ուստի մակբայ է։',
    tipEs: 'Verbo + mucho (invariable) = adverbio de cantidad.', tipHy: 'Բայ + mucho (անփոփոխ) = քանակի մակբայ։'
  },
  {
    id: 'q-cat-15', topic: 'categorias', diff: 'facil',
    qEs: '¿Cuáles son los tres verbos COPULATIVOS por excelencia en español?',
    qHy: 'Որո՞նք են իսպաներենի երեք գլխավոր ԿԱՊԱԿՑՈՂ (copulativos) բայերը։',
    opts: [['Ser, estar y parecer', 'Ser (լինել), estar (գտնվել/լինել) և parecer (թվալ)'], ['Hacer, tener y haber', 'Hacer, tener և haber'], ['Ir, venir y volver', 'Ir, venir և volver'], ['Cantar, comer y vivir', 'Cantar, comer և vivir']],
    corr: 0,
    expEs: 'Ser, estar y parecer son los tres verbos copulativos básicos que forman predicado nominal con Atributo.',
    expHy: 'Ser, estar և parecer բայերն են, որոնք կազմում են անվանական ստորոգյալ Atributo-ով։',
    tipEs: 'Verbos copulativos: SER, ESTAR, PARECER.', tipHy: 'Կապակցող բայեր՝ SER, ESTAR, PARECER։'
  },
  {
    id: 'q-cat-16', topic: 'categorias', diff: 'medio',
    qEs: 'En «El PRIMER clasificado recibió una medalla», ¿qué categoría tiene «PRIMER»?',
    qHy: '«ԱՌԱՋԻՆ դասակարգվածը մեդալ ստացավ» նախադասության մեջ ի՞նչ կարգ ունի «PRIMER»-ը։',
    opts: [['Determinante numeral ordinal', 'Դասական թվական (numeral ordinal)'], ['Determinante numeral cardinal', 'Քանակական թվական'], ['Pronombre personal', 'Անձնական դերանուն'], ['Adverbio de orden', 'Կարգի մակբայ']],
    corr: 0,
    expEs: 'Indica orden o posición en una serie (primero/primer, segundo, tercero...) acompañando a un nombre.',
    expHy: 'Ցույց է տալիս կարգ կամ դիրք շարքում (առաջին, երկրորդ, երրորդ...)՝ ուղեկցելով գոյականին։',
    tipEs: 'Primero, segundo, tercero = numerales ordinales.', tipHy: 'Primero, segundo = դասական թվականներ (ordinales)։'
  },
  {
    id: 'q-cat-17', topic: 'categorias', diff: 'facil',
    qEs: 'En «Nosotros iremos al museo», ¿qué categoría gramatical es «Nosotros»?',
    qHy: '«Մենք կգնանք թանգարան» նախադասության մեջ ի՞նչ խոսքի մաս է «Nosotros»-ը։',
    opts: [['Pronombre personal tónico de 1.ª persona plural', '1-ին դեմք հոգնակի շեշտված անձնական դերանուն'], ['Determinante posesivo', 'Ստացական որոշիչ'], ['Sustantivo común', 'Հասարակ գոյական'], ['Adjetivo demostrativo', 'Ցուցական ածական']],
    corr: 0,
    expEs: '«Nosotros» es un pronombre personal tónico de primera persona del plural.',
    expHy: '«Nosotros»-ը հոգնակի 1-ին դեմքի շեշտված անձնական դերանուն է։',
    tipEs: 'Yo, tú, él, nosotros, vosotros, ellos = pronombres personales.', tipHy: 'Yo, tú, él, nosotros = անձնական դերանուններ։'
  },

  // --- SINTAXIS Y COMPLEMENTOS (additional: q-s-11 to q-s-30) ---
  {
    id: 'q-s-11', topic: 'sintaxis', diff: 'medio',
    qEs: '¿Cómo se comprueba si un sintagma funciona como COMPLEMENTO DIRECTO (CD)?',
    qHy: 'Ինչպե՞ս է ստուգվում՝ արդյոք կապակցությունը գործում է որպես ՈՒՂԻՂ ԽՆԴԻՐ (CD)։',
    opts: [['Sustituyéndolo por lo, la, los, las o pasando la oración a voz pasiva', 'Փոխարինելով lo, la, los, las դերանուններով կամ նախադասությունը դարձնելով կրավորական'], ['Sustituyéndolo por le o les', 'Փոխարինելով le կամ les դերանուններով'], ['Preguntando ¿dónde? al verbo', 'Բային «որտե՞ղ» հարցը տալով'], ['Cambiando el verbo a plural', 'Բայը հոգնակի դնելով']],
    corr: 0,
    expEs: 'El CD se sustituye por lo/la/los/las y se convierte en sujeto paciente al transformar a pasiva.',
    expHy: 'CD-ն փոխարինվում է lo/la/los/las-ով և կրավորականի վերածելիս դառնում է կրավորական ենթակա։',
    tipEs: 'Prueba del CD: sustitución por LO/LA y paso a pasiva.', tipHy: 'CD-ի ստուգում. LO/LA փոխարինում և կրավորականի անցում։'
  },
  {
    id: 'q-s-12', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «Mi hermana pequeña duerme plácidamente», ¿cuál es el NÚCLEO DEL SUJETO?',
    qHy: '«Իմ փոքր քույրը հանգիստ քնած է» նախադասության մեջ ո՞րն է ԵՆԹԱԿԱՅԻ ՄԻՋՈՒԿԸ (Núcleo del Sujeto)։',
    opts: [['hermana', 'hermana (քույր)'], ['pequeña', 'pequeña'], ['Mi', 'Mi'], ['duerme', 'duerme']],
    corr: 0,
    expEs: '«Hermana» es el sustantivo central del sintagma nominal sujeto.',
    expHy: '«Hermana»-ն ենթակայական գոյականական կապակցության կենտրոնական գոյականն է։',
    tipEs: 'Núcleo del sujeto = el sustantivo o pronombre principal.', tipHy: 'Ենթակայի միջուկ = գլխավոր գոյականը կամ դերանունը։'
  },
  {
    id: 'q-s-13', topic: 'sintaxis', diff: 'facil',
    qEs: 'En la misma oración «Mi hermana pequeña duerme plácidamente», ¿cuál es el NÚCLEO DEL PREDICADO?',
    qHy: 'Նույն նախադասության մեջ ո՞րն է ՍՏՈՐՈԳՅԱԼԻ ՄԻՋՈՒԿԸ (Núcleo del Predicado)։',
    opts: [['duerme', 'duerme (քնում է)'], ['plácidamente', 'plácidamente'], ['hermana', 'hermana'], ['pequeña', 'pequeña']],
    corr: 0,
    expEs: 'El verbo conjugado "duerme" es el núcleo indispensable del predicado.',
    expHy: 'Դիմավոր «duerme» բայը ստորոգյալի անփոխարինելի միջուկն է։',
    tipEs: 'Núcleo del predicado = el verbo conjugado.', tipHy: 'Ստորոգյալի միջուկ = դիմավոր բայը։'
  },
  {
    id: 'q-s-14', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «El policía detuvo al sospechoso en la estación», ¿qué función cumple «al sospechoso»?',
    qHy: '«Ոստիկանը կայարանում կասկածյալին ձերբակալեց» նախադասության մեջ ի՞նչ պաշտոն է կատարում «al sospechoso»-ն։',
    opts: [['Complemento Directo de persona (CD)', 'Անձ ցույց տվող ուղիղ խնդիր (CD)'], ['Complemento Indirecto (CI)', 'Հանգման խնդիր (CI)'], ['Sujeto expreso', 'Բացահայտ ենթակա'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'Lleva "a" por ser persona, pero en pasiva pasa a sujeto: "El sospechoso fue detenido por el policía". Se sustituye por "lo": "El policía LO detuvo". Por tanto, es CD.',
    expHy: 'Ունի «a» նախդիրը, որովհետև անձ է, բայց կրավորականում դառնում է ենթակա («El sospechoso fue detenido...»)։ Փոխարինվում է «lo»-ով («El policía LO detuvo»)։ Ուստի CD է։',
    tipEs: 'CD de persona lleva "a", pero se sustituye por LO y pasa a sujeto en pasiva.',
    tipHy: 'Անձի CD-ն ունի «a», բայց փոխարինվում է LO-ով և կրավորականում դառնում է ենթակա։'
  },
  {
    id: 'q-s-15', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «Ayer fuimos al museo de ciencias», ¿qué complemento es «Ayer»?',
    qHy: '«Երեկ գնացինք գիտության թանգարան» նախադասության մեջ ի՞նչ լրացում է «Ayer»-ը։',
    opts: [['Complemento Circunstancial de Tiempo (CCT)', 'Ժամանակի պարագա (CCT)'], ['Complemento Circunstancial de Lugar (CCL)', 'Տեղի պարագա'], ['Complemento Directo (CD)', 'Ուղիղ խնդիր'], ['Atributo', 'Atributo']],
    corr: 0,
    expEs: 'Responde a la pregunta ¿cuándo fuimos al museo?: "Ayer" (CCT).',
    expHy: 'Պատասխանում է «ե՞րբ գնացինք» հարցին՝ «Ayer» (ժամանակի պարագա)։',
    tipEs: '¿Cuándo? = CCTiempo.', tipHy: 'Ե՞րբ = Ժամանակի պարագա (CCT)։'
  },
  {
    id: 'q-s-16', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «Mi tía vive en Valencia», ¿qué complemento es «en Valencia»?',
    qHy: '«Իմ մորաքույրն ապրում է Վալենսիայում» նախադասության մեջ ի՞նչ լրացում է «en Valencia»-ն։',
    opts: [['Complemento Circunstancial de Lugar (CCL)', 'Տեղի պարագա (CCL)'], ['Atributo', 'Atributo'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Complemento Indirecto', 'Հանգման խնդիր']],
    corr: 0,
    expEs: 'Responde a ¿dónde vive?: "en Valencia" (CCL).',
    expHy: 'Պատասխանում է «որտե՞ղ է ապրում» հարցին՝ «en Valencia» (տեղի պարագա)։',
    tipEs: '¿Dónde? = CCLugar.', tipHy: 'Որտե՞ղ = Տեղի պարագա (CCL)։'
  },
  {
    id: 'q-s-17', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «Los alumnos estaban entusiasmados con el proyecto», ¿qué función cumple «entusiasmados»?',
    qHy: '«Աշակերտները ոգևորված էին նախագծով» նախադասության մեջ ի՞նչ պաշտոն է կատարում «entusiasmados»-ը։',
    opts: [['Atributo (Atr)', 'Ստորոգելիական հատկանիշ (Atributo)'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Complemento Circunstancial de Modo', 'Ձևի պարագա'], ['Complemento del Nombre', 'Գոյականի լրացում']],
    corr: 0,
    expEs: 'Acompaña al verbo copulativo "estaban" y concuerda con el sujeto "los alumnos". Se sustituye por "lo": "Los alumnos LO estaban".',
    expHy: 'Գտնվում է «estaban» կապակցող բայի հետ և համաձայնում ենթակայի հետ։ Փոխարինվում է «lo»-ով՝ «Los alumnos LO estaban»։ Ուստի Atributo է։',
    tipEs: 'Estar + adjetivo sustituible por LO = Atributo.', tipHy: 'Estar + LO-ով փոխարինվող ածական = Atributo։'
  },
  {
    id: 'q-s-18', topic: 'sintaxis', diff: 'dificil',
    qEs: 'En «A los turistas les gustó mucho la visita guiada», ¿cuál es el SUJETO?',
    qHy: '«Զբոսաշրջիկներին շատ դուր եկավ գիդով էքսկուրսիան» նախադասության մեջ ո՞րն է ԵՆԹԱԿԱՆ։',
    opts: [['la visita guiada', 'la visita guiada (էքսկուրսիան)'], ['A los turistas', 'A los turistas'], ['les', 'les'], ['mucho', 'mucho']],
    corr: 0,
    expEs: '¡Atención! «La visita guiada» es el sujeto singular que concuerda con "gustó". Si fueran varias visitas, diríamos "les gustaron las visitas guiadas". «A los turistas» es el CI.',
    expHy: 'Ուշադրությո՛ւն։ «La visita guiada»-ն եզակի ենթական է, որը համաձայնում է «gustó»-ի հետ։ Եթե լինեին մի քանիսը, կլիներ «les gustaron las visitas...»։ «A los turistas»-ը CI-ն է։',
    tipEs: 'El sujeto del verbo gustar concuerda con el verbo y casi siempre va después.',
    tipHy: 'Gustar բայի ենթական համաձայնում է բայի հետ և գրեթե միշտ դրվում է հետո։'
  },
  {
    id: 'q-s-19', topic: 'sintaxis', diff: 'medio',
    qEs: 'En «El carpintero reparó la mesa con pegamento especial», ¿qué función cumple «con pegamento especial»?',
    qHy: '«Ատաղձագործը սեղանը նորոգեց հատուկ սոսնձով» նախադասության մեջ ի՞նչ պաշտոն ունի «con pegamento especial»-ը։',
    opts: [['Complemento Circunstancial de Instrumento (CCInst)', 'Գործիքի պարագա (CCInst)'], ['Complemento Circunstancial de Modo', 'Ձևի պարագա'], ['Complemento Directo', 'Ուղիղ խնդիր'], ['Complemento Indirecto', 'Հանգման խնդիր']],
    corr: 0,
    expEs: 'Indica el medio o instrumento con el que se realizó la reparación.',
    expHy: 'Ցույց է տալիս այն միջոցը կամ գործիքը, որով կատարվեց նորոգումը։',
    tipEs: '¿Con qué útil o material? = CC Instrumento.', tipHy: 'Ինչո՞վ = Գործիքի պարագա (CCInst)։'
  },
  {
    id: 'q-s-20', topic: 'sintaxis', diff: 'facil',
    qEs: 'En «Paseo todos los días con mi hermano», ¿qué complemento es «con mi hermano»?',
    qHy: '«Ամեն օր զբոսնում եմ եղբորս հետ» նախադասության մեջ ի՞նչ լրացում է «con mi hermano»-ն։',
    opts: [['Complemento Circunstancial de Compañía (CCCompañía)', 'Ընկերակցության պարագա (CCCompañía)'], ['Complemento de Instrumento', 'Գործիքի պարագա'], ['Complemento Indirecto', 'Հանգման խնդիր'], ['Complemento Directo', 'Ուղիղ խնդիր']],
    corr: 0,
    expEs: 'Responde a la pregunta ¿con quién paseo?: "con mi hermano" (CCCompañía).',
    expHy: 'Պատասխանում է «ո՞ւմ հետ եմ զբոսնում» հարցին՝ «con mi hermano» (ընկերակցության պարագա)։',
    tipEs: '¿Con quién? = CC de Compañía.', tipHy: 'Ո՞ւմ հետ = Ընկերակցության պարագա։'
  }
];

export const extraBank2Questions: PracticeQuestion[] = items.map((q) => ({
  id: q.id,
  topicId: q.topic,
  difficulty: q.diff,
  format: q.topic === 'sintaxis' ? 'identify_nucleus' : 'multiple_choice',
  questionEs: q.qEs,
  questionHy: q.qHy,
  options: q.opts.map(([es, hy]) => ({ textEs: es, textHy: hy })),
  correctOptionIndex: q.corr,
  explanationEs: q.expEs,
  explanationHy: q.expHy,
  examTipEs: q.tipEs,
  examTipHy: q.tipHy,
}));
