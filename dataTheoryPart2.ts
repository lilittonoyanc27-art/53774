import { TheoryLesson, CommunicationScenario } from './types';

export const theoryPart2: TheoryLesson[] = [
  // TEMA 2: MODALIDADES ORACIONALES
  {
    id: 'mod-enunciativas',
    topicId: 'modalidades',
    titleEs: '1. Oraciones enunciativas (afirmativas y negativas)',
    titleHy: '1. Պատմողական նախադասություններ (հաստատական և ժխտական)',
    shortSummaryEs: 'Afirman o niegan un hecho de forma objetiva con entonación neutra.',
    shortSummaryHy: 'Օբյեկտիվորեն հաստատում կամ ժխտում են փաստը՝ չեզոք հնչերանգով։',
    simpleExplanationEs: 'Son las oraciones que usamos para contar lo que ocurre, sin preguntar, sin gritar y sin mandar.',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնցով պատմում ենք տեղի ունեցածի մասին՝ առանց հարցնելու, գոռալու կամ հրամայելու։',
    fullDefinitionEs: 'Las oraciones enunciativas (o aseverativas) manifiestan la conformidad o disconformidad del hablante con una realidad. Se dividen en afirmativas y negativas. Utilizan el modo indicativo y entonación descendente.',
    fullDefinitionHy: 'Պատմողական նախադասություններն արտահայտում են խոսողի համաձայնությունը կամ անհամաձայնությունը իրականության հետ։ Լինում են հաստատական և ժխտական։ Բայը դրվում է սահմանական եղանակով, հնչերանգն իջնող է։',
    communicativeGoalEs: 'Informar neutralmente de un acontecimiento o estado de cosas.',
    communicativeGoalHy: 'Չեզոք տեղեկացնել որևէ իրադարձության կամ իրավիճակի մասին։',
    signalsAndTricksEs: [
      'Punto final (.) al terminar.',
      'Verbos en modo indicativo.',
      'Palabras de negación en las negativas: no, nunca, jamás, nadie, nada, tampoco.',
      'Entonación enunciativa neutra descendente.'
    ],
    signalsAndTricksHy: [
      'Վերջակետ (.) ավարտին։',
      'Սահմանական եղանակի բայեր։',
      'Ժխտական բառեր ժխտականներում՝ no (ոչ/չ-), nunca (երբեք), jamás (բնավ), nadie (ոչ ոք), nada (ոչինչ), tampoco (նույնպես ոչ)։',
      'Չեզոք իջնող հնչերանգ։'
    ],
    examples: [
      {
        sentence: 'El tren de cercanías llegará en cinco minutos.',
        armenian: 'Մերձքաղաքային գնացքը կժամանի հինգ րոպեից։',
        explanationEs: 'Enunciativa afirmativa: expone un hecho cierto.',
        explanationHy: 'Հաստատական պատմողական՝ ներկայացնում է հստակ փաստ։'
      },
      {
        sentence: 'Hoy no tenemos examen de Ciencias Naturales.',
        armenian: 'Այսօր մենք բնագիտության քննություն չունենք։',
        explanationEs: 'Enunciativa negativa: niega la existencia de la prueba.',
        explanationHy: 'Ժխտական պատմողական՝ ժխտում է քննության առկայությունը։'
      },
      {
        sentence: 'Nadie ha venido a la reunión todavía.',
        armenian: 'Դեռ ոչ ոք չի եկել ժողովին։',
        explanationEs: 'Enunciativa negativa con el pronombre indefinido "nadie".',
        explanationHy: 'Ժխտական պատմողական՝ «nadie» (ոչ ոք) դերանունով։'
      },
      {
        sentence: 'Los alumnos de 1.º ESO leen una novela de misterio.',
        armenian: '1.º ESO-ի աշակերտները խորհրդավոր վեպ են կարդում։',
        explanationEs: 'Enunciativa afirmativa en presente de indicativo.',
        explanationHy: 'Հաստատական պատմողական՝ սահմանական ներկայով։'
      },
      {
        sentence: 'Nunca jamás olvidaré este viaje a los Pirineos.',
        armenian: 'Երբեք ու երբեք չեմ մոռանա այս ճամփորդությունը դեպի Պիրենեյներ։',
        explanationEs: 'Enunciativa negativa con refuerzo adverbial.',
        explanationHy: 'Ժխտական պատմողական՝ մակբայական ուժեղացմամբ։'
      },
      {
        sentence: 'Mi tía vive en un pueblo pequeño de Valencia.',
        armenian: 'Իմ մորաքույրն ապրում է Վալենսիայի մի փոքր գյուղում։',
        explanationEs: 'Enunciativa afirmativa sobre un estado permanente.',
        explanationHy: 'Հաստատական պատմողական՝ մշտական վիճակի մասին։'
      },
      {
        sentence: 'Tampoco yo he comprendido el segundo ejercicio.',
        armenian: 'Ես նույնպես չհասկացա երկրորդ վարժությունը։',
        explanationEs: 'Enunciativa negativa con "tampoco".',
        explanationHy: 'Ժխտական պատմողական՝ «tampoco» (նույնպես չ-) բառով։'
      },
      {
        sentence: 'El río Ebro desemboca en el mar Mediterráneo.',
        armenian: 'Էբրո գետը թափվում է Միջերկրական ծով։',
        explanationEs: 'Enunciativa afirmativa geográfica.',
        explanationHy: 'Աշխարհագրական հաստատական պատմողական։'
      },
      {
        sentence: 'No queda leche en la nevera de la cocina.',
        armenian: 'Խոհանոցի սառնարանում կաթ չի մնացել։',
        explanationEs: 'Enunciativa negativa cotidiana.',
        explanationHy: 'Առօրյա ժխտական պատմողական։'
      },
      {
        sentence: 'Las hojas de los árboles caen durante el otoño.',
        armenian: 'Աշնան ընթացքում ծառերի տերևները թափվում են։',
        explanationEs: 'Enunciativa afirmativa descriptiva.',
        explanationHy: 'Նկարագրական հաստատական պատմողական։'
      }
    ],
    commonMistakesEs: 'Pensar que las oraciones negativas son un tipo aparte de las enunciativas. "Enunciativa" incluye tanto afirmativas como negativas.',
    commonMistakesHy: 'Մտածել, թե ժխտական նախադասությունները պատմողականներից առանձին տեսակ են։ «Enunciativa»-ն ներառում է և՛ հաստատականները, և՛ ժխտականները։',
    examAdviceEs: 'Comprueba si la frase termina en punto normal y no lleva signos de interrogación ¿ ? ni de exclamación ¡ !.',
    examAdviceHy: 'Ստուգիր՝ արդյոք նախադասությունն ավարտվում է սովորական կետով և չունի հարցական ¿ ? կամ բացականչական ¡ ! նշաններ։',
    simplifiedAlternativeEs: 'Frases normales que cuentan cosas que pasan o que no pasan.',
    simplifiedAlternativeHy: 'Սովորական նախադասություններ, որոնք պատմում են այն մասին, թե ինչ է կատարվում կամ ինչ չի կատարվում։',
    simplifiedAlternativeExample: {
      es: 'El colegio abre a las ocho y media.',
      hy: 'Դպրոցը բացվում է ութն անց կեսին։'
    }
  },
  {
    id: 'mod-interrogativas',
    topicId: 'modalidades',
    titleEs: '2. Oraciones interrogativas (directas e indirectas)',
    titleHy: '2. Հարցական նախադասություններ (ուղղակի և անուղղակի)',
    shortSummaryEs: 'Formulan una pregunta para obtener información desconocida del receptor.',
    shortSummaryHy: 'Հարց են ուղղում՝ լսողից անհայտ տեղեկություն ստանալու նպատակով։',
    simpleExplanationEs: 'Son las oraciones que usamos cuando no sabemos algo y queremos que nos lo expliquen o contesten.',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնք օգտագործում ենք, երբ մի բան չգիտենք և ուզում ենք, որ մեզ բացատրեն կամ պատասխանեն։',
    fullDefinitionEs: 'Las oraciones interrogativas expresan una solicitud de información. Se clasifican en directas (llevan signos ¿ ?) e indirectas (dependen de un verbo como "preguntar" o "saber", sin signos ¿ ? pero con tilde en el pronombre o adverbio interrogativo). También pueden ser totales (respuesta sí/no) o parciales.',
    fullDefinitionHy: 'Հարցական նախադասություններն արտահայտում են տեղեկատվության հարցում։ Լինում են ուղղակի (դրվում են ¿ ? նշանները) և անուղղակի (կախված են «preguntar» կամ «saber» բայերից, առանց ¿ ? նշանների, բայց հարցական դերանվան վրա շեշտով)։ Կարող են լինել նաև լրիվ (այո/ոչ) կամ մասնակի։',
    communicativeGoalEs: 'Obtener información que el emisor desconoce.',
    communicativeGoalHy: 'Ստանալ տեղեկություն, որը խոսողը չգիտի։',
    signalsAndTricksEs: [
      'Directas: signos de interrogación ¿ ? obligatorios al principio y al final.',
      'Indirectas: verbos introductores (preguntó, quiero saber, dime) seguidos de pronombres o conjunciones con punto final.',
      'Palabras interrogativas siempre con tilde: qué, quién, cómo, cuándo, dónde, cuánto, por qué.'
    ],
    signalsAndTricksHy: [
      'Ուղղակի՝ հարցական նշաններ ¿ ? պարտադիր սկզբում և վերջում։',
      'Անուղղակի՝ ներմուծող բայեր (preguntó-հարցրեց, quiero saber-ուզում եմ իմանալ, dime-ասա ինձ)՝ առանց ¿ ? նշանների, վերջակետով։',
      'Հարցական բառերը ՄԻՇՏ կրում են շեշտ (tilde)՝ qué, quién, cómo, cuándo, dónde, cuánto, por qué:'
    ],
    examples: [
      {
        sentence: '¿A qué hora empieza la película en el cine?',
        armenian: 'Ո՞ր ժամին է սկսվում ֆիլմը կինոթատրոնում։',
        explanationEs: 'Interrogativa directa parcial (pregunta por la hora).',
        explanationHy: 'Ուղղակի մասնակի հարցական (հարցնում է ժամի մասին)։'
      },
      {
        sentence: 'Me gustaría saber cuánto cuesta esa mochila azul.',
        armenian: 'Կցանկանայի իմանալ, թե որքան արժե այդ կապույտ ուսապարկը։',
        explanationEs: 'Interrogativa indirecta: no lleva signos ¿ ?, pero "cuánto" lleva tilde.',
        explanationHy: 'Անուղղակի հարցական՝ չունի ¿ ? նշաններ, բայց «cuánto»-ն շեշտ ունի։'
      },
      {
        sentence: '¿Has traído el cuaderno de ejercicios a clase?',
        armenian: 'Դասին բերե՞լ ես վարժությունների տետրը։',
        explanationEs: 'Interrogativa directa total (se responde con sí o no).',
        explanationHy: 'Ուղղակի լրիվ հարցական (պատասխանը այո կամ ոչ է)։'
      },
      {
        sentence: 'El profesor nos preguntó quién había roto la tiza.',
        armenian: 'Ուսուցիչը մեզ հարցրեց, թե ով էր կոտրել կավիճը։',
        explanationEs: 'Interrogativa indirecta con "quién".',
        explanationHy: 'Անուղղակի հարցական «quién» (ով) բառով։'
      },
      {
        sentence: '¿Por qué no viniste ayer al entrenamiento de fútbol?',
        armenian: 'Ինչո՞ւ երեկ չեկար ֆուտբոլի մարզմանը։',
        explanationEs: 'Interrogativa directa sobre la causa.',
        explanationHy: 'Ուղղակի հարցական պատճառի մասին։'
      },
      {
        sentence: 'Dime dónde has escondido las llaves del coche.',
        armenian: 'Ասա՛ ինձ, թե որտեղ ես թաքցրել մեքենայի բանալիները։',
        explanationEs: 'Interrogativa indirecta encabezada por "dónde".',
        explanationHy: 'Անուղղակի հարցական «dónde» (որտեղ) բառով։'
      },
      {
        sentence: '¿Vendrás con nosotros a la piscina municipal esta tarde?',
        armenian: 'Այսօր կեսօրից հետո մեզ հետ կգա՞ս քաղաքային լողավազան։',
        explanationEs: 'Interrogativa directa total.',
        explanationHy: 'Ուղղակի լրիվ հարցական։'
      },
      {
        sentence: 'No sé cómo resolver este problema de fracciones.',
        armenian: 'Չգիտեմ, թե ինչպես լուծել կոտորակների այս խնդիրը։',
        explanationEs: 'Interrogativa indirecta con adverbio interrogativo "cómo".',
        explanationHy: 'Անուղղակի հարցական «cómo» (ինչպես) հարցական մակբայով։'
      },
      {
        sentence: '¿Cuál es el río más largo de la península ibérica?',
        armenian: 'Ո՞րն է Պիրենեյան թերակղզու ամենաերկար գետը։',
        explanationEs: 'Interrogativa directa parcial escolar.',
        explanationHy: 'Դպրոցական ուղղակի մասնակի հարցական։'
      },
      {
        sentence: 'Pregúntale a María si tiene un sacapuntas.',
        armenian: 'Հարցրու Մարիային, թե արդյոք նա ունի՞ սրիչ։',
        explanationEs: 'Interrogativa indirecta total con la conjunción "si".',
        explanationHy: 'Անուղղակի լրիվ հարցական «si» (արդյոք) շաղկապով։'
      }
    ],
    commonMistakesEs: 'No reconocer las interrogativas indirectas porque terminan en punto (.) y no en signo de interrogación. Recuerda: "Dime qué hora es." es interrogativa indirecta.',
    commonMistakesHy: 'Անուղղակի հարցականները չնկատելը, քանի որ դրանք ավարտվում են վերջակետով (.)։ Հիշիր՝ «Dime qué hora es.» նախադասությունը անուղղակի հարցական է։',
    examAdviceEs: 'Ojo con preguntas como "¿Puedes pasarme el cuaderno?". Gramaticalmente es interrogativa, pero su intención comunicativa es una petición (apelativa).',
    examAdviceHy: 'Ուշադի՛ր եղիր «¿Puedes pasarme el cuaderno?» կարգի հարցերի դեպքում։ Քերականորեն այն հարցական է, բայց հաղորդակցական նպատակով՝ խնդրանք (apelativa):',
    simplifiedAlternativeEs: 'Cuando haces una pregunta directamente con signos ¿ ? o a través de verbos como "no sé qué" o "pregúntale si".',
    simplifiedAlternativeHy: 'Երբ հարց ես տալիս ուղղակիորեն ¿ ? նշաններով, կամ անուղղակիորեն՝ «չգիտեմ ինչ» կամ «հարցրու նրան արդյոք» ձևով։',
    simplifiedAlternativeExample: {
      es: '¿Dónde está la biblioteca?',
      hy: 'Որտե՞ղ է գրադարանը։'
    }
  },
  {
    id: 'mod-exclamativas',
    topicId: 'modalidades',
    titleEs: '3. Oraciones exclamativas',
    titleHy: '3. Բացականչական նախադասություններ',
    shortSummaryEs: 'Expresan emociones intensas como sorpresa, alegría, dolor o enfado con signos ¡ !.',
    shortSummaryHy: 'Արտահայտում են բուռն հույզեր (զարմանք, ուրախություն, ցավ կամ զայրույթ)՝ ¡ ! նշաններով։',
    simpleExplanationEs: 'Son las frases con las que gritamos de alegría, nos quejamos o nos asombramos con mucha fuerza.',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնցով ուրախությունից բացականչում ենք, բողոքում կամ ուժեղ զարմանում։',
    fullDefinitionEs: 'Las oraciones exclamativas manifiestan un estado anímico intenso o una reacción afectiva del emisor. Fonéticamente se distinguen por una curva melódica amplia y en la escritura se encierran entre signos de admiración (¡ !).',
    fullDefinitionHy: 'Բացականչական նախադասություններն արտահայտում են խոսողի հուզական բարձր տրամադրություն կամ հուզական արձագանք։ Բնորոշվում են լայն մեղեդային կորով և գրավոր խոսքում դրվում են բացականչական նշանների մեջ (¡ !)։',
    communicativeGoalEs: 'Transmitir la intensidad emotiva del mensaje.',
    communicativeGoalHy: 'Փոխանցել հաղորդագրության հուզական սրությունը։',
    signalsAndTricksEs: [
      'Signos de exclamación al principio (¡) y al final (!).',
      'Determinantes o pronombres exclamativos con tilde: ¡Qué...!, ¡Cómo...!, ¡Cuánto...!',
      'Interjecciones: ¡Ay!, ¡Caramba!, ¡Bravo!'
    ],
    signalsAndTricksHy: [
      'Բացականչական նշաններ սկզբում (¡) և վերջում (!)։',
      'Բացականչական շեշտված բառեր՝ ¡Qué...!, ¡Cómo...!, ¡Cuánto...!:',
      'Ձայնարկություններ՝ ¡Ay!, ¡Caramba!, ¡Bravo!:'
    ],
    examples: [
      {
        sentence: '¡Qué golazo tan increíble acaba de marcar el delantero!',
        armenian: 'Ի՜նչ անհավանական գոլ խփեց հարձակվողը հենց նոր։',
        explanationEs: 'Asombro y entusiasmo ante una jugada deportiva.',
        explanationHy: 'Զարմանք և ոգևորություն սպորտային գործողության նկատմամբ։'
      },
      {
        sentence: '¡Cómo ha crecido tu hermano pequeño este verano!',
        armenian: 'Ինչպե՜ս է մեծացել քո փոքր եղբայրն այս ամառ։',
        explanationEs: 'Sorpresa evidente ante el cambio físico.',
        explanationHy: 'Ակնհայտ զարմանք արտաքին փոփոխության նկատմամբ։'
      },
      {
        sentence: '¡Cuánto tiempo sin vernos, qué alegría!',
        armenian: 'Որքա՜ն ժամանակ է չենք տեսնվել, ի՜նչ ուրախություն է։',
        explanationEs: 'Emoción de reencuentro afectivo.',
        explanationHy: 'Վերամիավորման հուզական ուրախություն։'
      },
      {
        sentence: '¡Cuidado con ese cable suelto en el suelo!',
        armenian: 'Զգո՜ւյշ հատակին ընկած այդ լարից։',
        explanationEs: 'Alerta vehemente con entonación exclamativa.',
        explanationHy: 'Զգուշացում բացականչական հնչերանգով։'
      },
      {
        sentence: '¡Qué frío hace en esta habitación!',
        armenian: 'Ի՜նչ ցուրտ է այս սենյակում։',
        explanationEs: 'Sensación física transmitida con énfasis.',
        explanationHy: 'Ֆիզիկական զգացողության շեշտադրված արտահայտում։'
      },
      {
        sentence: '¡Menuda sorpresa nos tenían preparada para el cumpleaños!',
        armenian: 'Ի՜նչ մեծ անակնկալ էին պատրաստել մեզ համար ծննդյան տոնին։',
        explanationEs: 'Expresión coloquial exclamativa de asombro.',
        explanationHy: 'Զարմանքի խոսակցական բացականչություն։'
      },
      {
        sentence: '¡Vaya día más maravilloso hemos pasado en la playa!',
        armenian: 'Ի՜նչ հրաշալի օր անցկացրինք լողափին։',
        explanationEs: 'Satisfacción y alegría intensa.',
        explanationHy: 'Բուռն գոհունակություն և ուրախություն։'
      },
      {
        sentence: '¡Bravo, lo has conseguido a la primera!',
        armenian: 'Բրա՛վո, դու առաջին իսկ փորձից հասար դրան։',
        explanationEs: 'Felicitación efusiva con interjección.',
        explanationHy: 'Բուռն շնորհավորանք ձայնարկությամբ։'
      },
      {
        sentence: '¡Qué susto me he llevado con ese trueno!',
        armenian: 'Ի՜նչ վախեցա այդ որոտից։',
        explanationEs: 'Miedo repentino expresado con exclamación.',
        explanationHy: 'Հանկարծակի վախ՝ արտահայտված բացականչությամբ։'
      },
      {
        sentence: '¡Ojalá ganemos el trofeo de baloncesto!',
        armenian: 'Երանի՜ հաղթենք բասկետբոլի գավաթը։',
        explanationEs: 'Deseo intenso con tono exclamativo.',
        explanationHy: 'Բուռն ցանկություն բացականչական տոնով։'
      }
    ],
    commonMistakesEs: 'Confundir modalidad exclamativa con función emotiva. La modalidad es la forma sintáctica de la frase (¡ !); la función es su papel en la comunicación.',
    commonMistakesHy: 'Բացականչական նախադասության տեսակը (modalidad) շփոթել էքսպրեսիվ գործառույթի (función) հետ։ Մոդալությունը նախադասության քերականական ձևն է (¡ !), իսկ գործառույթը՝ նրա դերը հաղորդակցության մեջ։',
    examAdviceEs: 'Se reconocen rápidamente por los signos de admiración ¡ ! y palabras como qué, cómo, cuánto con tilde.',
    examAdviceHy: 'Շատ արագ ճանաչվում են ¡ ! բացականչական նշաններով և շեշտված qué, cómo, cuánto բառերով։',
    simplifiedAlternativeEs: 'Frases que llevan signos de exclamación ¡ ! para mostrar que estamos sorprendidos o emocionados.',
    simplifiedAlternativeHy: 'Նախադասություններ, որոնք ունեն ¡ ! բացականչական նշաններ՝ ցույց տալու մեր զարմանքը կամ հուզմունքը։',
    simplifiedAlternativeExample: {
      es: '¡Qué rica está la tarta!',
      hy: 'Որքա՜ն համեղ է տորթը։'
    }
  },
  {
    id: 'mod-exhortativas',
    topicId: 'modalidades',
    titleEs: '4. Oraciones exhortativas o imperativas',
    titleHy: '4. Հորդորական կամ հրամայական նախադասություններ',
    shortSummaryEs: 'Expresan órdenes, mandatos, peticiones, consejos o prohibiciones dirigidas al receptor.',
    shortSummaryHy: 'Արտահայտում են լսողին ուղղված հրամաններ, խնդրանքներ, խորհուրդներ կամ արգելքներ։',
    simpleExplanationEs: 'Son las frases con las que pedimos favores, damos órdenes o prohibimos hacer algo.',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնցով խնդրանք ենք անում, հրամաններ տալիս կամ արգելում որևէ բան անել։',
    fullDefinitionEs: 'Las oraciones exhortativas (o imperativas) pretenden modificar la conducta del oyente. Utilizan el modo imperativo en órdenes afirmativas, o el subjuntivo cuando se trata de prohibiciones ("no hables") o fórmulas de cortesía ("hable usted").',
    fullDefinitionHy: 'Հորդորական (հրամայական) նախադասությունները նպատակ ունեն ազդել լսողի վարքագծի վրա։ Կիրառում են հրամայական եղանակը հաստատական հրամաններում, իսկ ըղձական եղանակը՝ արգելքներում («no hables» - մի՛ խոսիր) կամ քաղաքավարի դիմելաձևերում («hable usted»)։',
    communicativeGoalEs: 'Conseguir que el receptor ejecute una acción o deje de hacerla.',
    communicativeGoalHy: 'Հասնել նրան, որ լսողը կատարի գործողություն կամ դադարեցնի այն։',
    signalsAndTricksEs: [
      'Verbos en imperativo afirmativo: ven, come, escribe, haced.',
      'Verbos en subjuntivo para negaciones: no corras, no toquéis.',
      'Fórmulas de cortesía: por favor, haga el favor de.',
      'Perífrasis de obligación: tienes que estudiar, debes guardar silencio.'
    ],
    signalsAndTricksHy: [
      'Հաստատական հրամայական բայեր՝ ven (արի՛), come (կե՛ր), escribe (գրի՛ր)։',
      'Ըղձական եղանակ ժխտումներում՝ no corras (մի՛ վազիր), no toquéis (ձեռք մի՛ տվեք)։',
      'Քաղաքավարի արտահայտություններ՝ por favor (խնդրում եմ)։',
      'Պարտադրանքի կառույցներ՝ tienes que estudiar (պետք է սովորես)։'
    ],
    examples: [
      {
        sentence: 'Guarden silencio y entreguen los exámenes en mi mesa.',
        armenian: 'Պահպանե՛ք լռություն և քննական թերթիկները հանձնե՛ք իմ սեղանին։',
        explanationEs: 'Mandato formal del profesor a sus alumnos.',
        explanationHy: 'Ուսուցչի պաշտոնական հրամանն աշակերտներին։'
      },
      {
        sentence: 'Por favor, apaga la luz antes de salir de la habitación.',
        armenian: 'Խնդրում եմ, սենյակից դուրս գալուց առաջ անջատի՛ր լույսը։',
        explanationEs: 'Ruego cordial con fórmula de cortesía.',
        explanationHy: 'Ջերմ խնդրանք քաղաքավարության ձևով։'
      },
      {
        sentence: 'No abras la ventana todavía, hace mucho viento fuera.',
        armenian: 'Դեռ մի՛ բացիր պատուհանը, դրսում ուժեղ քամի է։',
        explanationEs: 'Prohibición con mandato negativo en subjuntivo ("abras").',
        explanationHy: 'Արգելք ժխտական հրամայականով։'
      },
      {
        sentence: 'Estudia todos los días media hora para aprobar sin problemas.',
        armenian: 'Ամեն օր կես ժամ սովորի՛ր՝ առանց խնդիրների հանձնելու համար։',
        explanationEs: 'Consejo o recomendación práctica.',
        explanationHy: 'Գործնական խորհուրդ կամ հանձնարարական։'
      },
      {
        sentence: '¡Ven inmediatamente aquí, Manuel!',
        armenian: 'Անմիջապես արի՛ այստեղ, Մանուե՛լ։',
        explanationEs: 'Orden tajante con vocativo y signos de exclamación.',
        explanationHy: 'Կոշտ հրաման կոչականով և բացականչական նշաններով։'
      },
      {
        sentence: 'Lávate las manos antes de sentarte a comer.',
        armenian: 'Լվացվի՛ր ձեռքերդ՝ ուտելու նստելուց առաջ։',
        explanationEs: 'Instrucción higiénica habitual.',
        explanationHy: 'Առօրյա հիգիենայի հրահանգ։'
      },
      {
        sentence: 'No olvidéis repasar los temas de ortografía esta tarde.',
        armenian: 'Մի՛ մոռացեք այսօր կեսօրից հետո կրկնել ուղղագրության թեմաները։',
        explanationEs: 'Recordatorio exhortativo a un grupo.',
        explanationHy: 'Հորդորական հիշեցում խմբին։'
      },
      {
        sentence: 'Préstame tu calculadora un momento, por favor.',
        armenian: 'Հաշվիչդ մի պահ ինձ տուր, խնդրում եմ։',
        explanationEs: 'Petición de objeto a un compañero.',
        explanationHy: 'Իր խնդրել դասընկերոջից։'
      },
      {
        sentence: 'Circule con precaución debido a las obras en la calzada.',
        armenian: 'Երթևեկե՛ք զգուշությամբ՝ ճանապարհի շինաշխատանքների պատճառով։',
        explanationEs: 'Aviso vial formal con valor exhortativo.',
        explanationHy: 'Ճանապարհային պաշտոնական հորդորական նախազգուշացում։'
      },
      {
        sentence: 'Abre el paraguas que está empezando a llover con fuerza.',
        armenian: 'Բա՛ց արա հովանոցը, ուժեղ անձրև է սկսվում։',
        explanationEs: 'Sugerencia inmediata de acción.',
        explanationHy: 'Գործողության անհապաղ առաջարկ։'
      }
    ],
    commonMistakesEs: 'Creer que si lleva signos de admiración ¡ ! deja de ser exhortativa. ¡Ven aquí! es una oración EXHORTATIVA con entonación exclamativa.',
    commonMistakesHy: 'Կարծել, որ եթե նախադասությունն ունի ¡ ! նշաններ, այն դադարում է exhortativa լինելուց։ «¡Ven aquí!» նախադասությունը ՀՈՐԴՈՐԱԿԱՆ (exhortativa) է բացականչական հնչերանգով։',
    examAdviceEs: 'Busca verbos en imperativo o frases que pidan, rueguen o manden hacer algo a la segunda persona (tú, vosotros, usted).',
    examAdviceHy: 'Փնտրիր հրամայական եղանակի բայեր կամ արտահայտություններ, որոնք 2-րդ դեմքին խնդրում կամ հրամայում են ինչ-որ բան անել։',
    simplifiedAlternativeEs: 'Frases que mandan, piden un favor o dicen "no hagas eso".',
    simplifiedAlternativeHy: 'Նախադասություններ, որոնք հրամայում են, խնդրանք են անում կամ ասում են «մի արա դա»։',
    simplifiedAlternativeExample: {
      es: 'Siéntate derecho y presta atención.',
      hy: 'Ուղի՛ղ նստիր և ուշադրություն դարձրո՛ւ։'
    }
  },
  {
    id: 'mod-desiderativas',
    topicId: 'modalidades',
    titleEs: '5. Oraciones desiderativas u optativas',
    titleHy: '5. Ըղձական (ցանկություն արտահայտող) նախադասություններ',
    shortSummaryEs: 'Expresan un deseo, anhelo o petición de que algo suceda o no suceda.',
    shortSummaryHy: 'Արտահայտում են ցանկություն, երազանք կամ ակնկալիք, որ որևէ բան տեղի ունենա կամ չունենա։',
    simpleExplanationEs: 'Son las frases con las que pedimos un deseo, como cuando soplamos las velas de cumpleaños o decimos "ojalá apruebe".',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնցով ցանկություն ենք հայտնում (ինչպես ծննդյան տորթի մոմերը փչելիս կամ «երանի՜ հանձնեմ» ասելիս)։',
    fullDefinitionEs: 'Las oraciones desiderativas manifiestan el deseo de que se cumpla un hecho sin ordenar directamente a nadie que lo haga. Utilizan verbos en modo subjuntivo y van acompañadas habitualmente por adverbios o expresiones de deseo.',
    fullDefinitionHy: 'Ըղձական նախադասություններն արտահայտում են որևէ իրադարձության իրականացման ցանկություն՝ առանց որևէ մեկին ուղղակիորեն հրամայելու։ Բայը դրվում է ըղձական եղանակով (subjuntivo) և սովորաբար ուղեկցվում է ցանկության մակբայներով կամ արտահայտություններով։',
    communicativeGoalEs: 'Manifestar un anhelo íntimo del emisor.',
    communicativeGoalHy: 'Արտահայտել խոսողի սրտի փափագը կամ ցանկությունը։',
    signalsAndTricksEs: [
      'Palabras clave: Ojalá, así, que, si, desearía, quién.',
      'Verbos en modo subjuntivo: tenga, llueva, apruebes, fuera.',
      'Estructuras típicas: «¡Ojalá apruebe!», «¡Que te mejores!», «¡Así te parta un rayo!».'
    ],
    signalsAndTricksHy: [
      'Բանալի բառեր՝ Ojalá (երանի՜, տա Աստված), así, que, desearía (կցանկանայի)։',
      'Ըղձական եղանակի բայեր (subjuntivo)՝ tenga, llueva, apruebes։',
      'Տիպիկ կառույցներ՝ «¡Ojalá apruebe!» (Երանի՜ հանձնեմ), «¡Que te mejores!» (Շուտափույթ ապաքինում)։'
    ],
    examples: [
      {
        sentence: '¡Ojalá apruebe el examen de Lengua con un diez!',
        armenian: 'Տա Աստված՝ լեզվի քննությունը տասով հանձնեմ։',
        explanationEs: 'Deseo explícito introducido por el adverbio "ojalá".',
        explanationHy: 'Բացահայտ ցանկություն «ojalá» (երանի, տա Աստված) բառով։'
      },
      {
        sentence: '¡Que tengas un día maravilloso de cumpleaños!',
        armenian: 'Թող որ հրաշալի ծննդյան օր ունենաս։',
        explanationEs: 'Felicitación y buen deseo con "que" + subjuntivo.',
        explanationHy: 'Բարեմաղթանք «que» + subjuntivo կառույցով։'
      },
      {
        sentence: 'Ojalá no llueva durante la excursión escolar del viernes.',
        armenian: 'Երանի՜ ուրբաթ օրվա դպրոցական էքսկուրսիայի ժամանակ անձրև չգա։',
        explanationEs: 'Deseo de que un hecho desagradable no ocurra.',
        explanationHy: 'Ցանկություն, որ տհաճ իրադարձություն տեղի չունենա։'
      },
      {
        sentence: '¡Que te mejores pronto de ese resfriado!',
        armenian: 'Շուտափույթ ապաքինում եմ մաղթում այդ մրսածությունից։',
        explanationEs: 'Deseo de salud dirigido a un amigo.',
        explanationHy: 'Առողջության մաղթանք ընկերոջը։'
      },
      {
        sentence: '¡Así gane nuestro equipo la final del campeonato!',
        armenian: 'Թող որ մեր թիմը հաղթի առաջնության եզրափակչում։',
        explanationEs: 'Deseo enfático con la partícula "así".',
        explanationHy: 'Շեշտված ցանկություն «así» մասնիկով։'
      },
      {
        sentence: 'Quién pudiera viajar a las estrellas en una nave espacial.',
        armenian: 'Երանի՜ կարողանայի տիեզերանավով ճամփորդել դեպի աստղերը։',
        explanationEs: 'Deseo de realización difícil con "quién pudiera".',
        explanationHy: 'Դժվար իրականանալի ցանկություն «quién pudiera» կառույցով։'
      },
      {
        sentence: '¡Que tengáis unas felices fiestas en familia!',
        armenian: 'Ուրախ տոներ եմ մաղթում ընտանիքի հետ։',
        explanationEs: 'Deseo festivo cordial.',
        explanationHy: 'Տոնական ջերմ մաղթանք։'
      },
      {
        sentence: 'Ojalá encontremos pronto a nuestro perrito perdido.',
        armenian: 'Երանի՜ շուտով գտնենք մեր կորած շնիկին։',
        explanationEs: 'Anhelo esperanzador de recuperación.',
        explanationHy: 'Հույսով լի ցանկություն։'
      },
      {
        sentence: '¡Que todo salga perfecto en tu operación!',
        armenian: 'Թող որ ամեն ինչ կատարյալ անցնի քո վիրահատության ժամանակ։',
        explanationEs: 'Voto de buena suerte.',
        explanationHy: 'Հաջողության բարեմաղթանք։'
      },
      {
        sentence: 'Si tuviera superpoderes para ayudar a todo el mundo...',
        armenian: 'Եթե գերբնական ուժ ունենայի ամբողջ աշխարհին օգնելու համար...',
        explanationEs: 'Estructura condicional con valor desiderativo.',
        explanationHy: 'Պայմանական կառույց ըղձական իմաստով։'
      }
    ],
    commonMistakesEs: 'Confundirlas con exclamativas simples solo por los signos ¡ !. Una desiderativa expresa siempre un DESEO con verbo en subjuntivo.',
    commonMistakesHy: 'Դրանք պարզ բացականչականների հետ շփոթելը միայն ¡ ! նշանների պատճառով։ Ըղձական նախադասությունը ՄԻՇՏ արտահայտում է ՑԱՆԿՈՒԹՅՈՒՆ subjuntivo բայով։',
    examAdviceEs: 'Busca la palabra mágica "Ojalá" o frases que empiecen por "Que + subjuntivo" («Que tengas suerte»).',
    examAdviceHy: 'Փնտրիր կախարդական «Ojalá» բառը կամ «Que + subjuntivo»-ով սկսվող նախադասությունները («Que tengas suerte»)։',
    simplifiedAlternativeEs: 'Frases con las que pides un deseo con "ojalá" o "que te vaya bien".',
    simplifiedAlternativeHy: 'Նախադասություններ, որոնցով ցանկություն ես հայտնում «ojalá» կամ «que te vaya bien» բառերով։',
    simplifiedAlternativeExample: {
      es: '¡Ojalá toque la lotería!',
      hy: 'Տա Աստված՝ շահենք վիճակախաղով։'
    }
  },
  {
    id: 'mod-dubitativas',
    topicId: 'modalidades',
    titleEs: '6. Oraciones dubitativas o de posibilidad',
    titleHy: '6. Երկբայական (կասկածի կամ հավանականության) նախադասություններ',
    shortSummaryEs: 'Expresan duda, incertidumbre, probabilidad o suposición del hablante.',
    shortSummaryHy: 'Արտահայտում են խոսողի կասկածը, անորոշությունը, հավանականությունը կամ ենթադրությունը։',
    simpleExplanationEs: 'Son las frases con las que decimos "a lo mejor", "quizás" o "tal vez" porque no estamos seguros de algo.',
    simpleExplanationHy: 'Այն նախադասություններն են, որոնցով ասում ենք «գուցե», «հավանաբար» կամ «թերևս», որովհետև վստահ չենք։',
    fullDefinitionEs: 'Las oraciones dubitativas manifiestan que el hablante no considera un hecho como completamente seguro, sino como probable, dudoso o posible. Suelen apoyarse en adverbios y locuciones de duda, o en el futuro y condicional de probabilidad.',
    fullDefinitionHy: 'Երկբայական նախադասություններն արտահայտում են, որ խոսողը փաստը լիովին վստահելի չի համարում, այլ հավանական, կասկածելի կամ հնարավոր։ Հիմնվում են կասկածի մակբայների վրա կամ հավանականության ապառնիի/պայմանականի վրա։',
    communicativeGoalEs: 'Transmitir inseguridad, hipótesis o probabilidad sobre una realidad.',
    communicativeGoalHy: 'Փոխանցել անվստահություն, վարկած կամ հավանականություն իրականության վերաբերյալ։',
    signalsAndTricksEs: [
      'Adverbios y locuciones de duda: Quizás / Quizá, Tal vez, Acaso, Probablemente, Posiblemente, Seguramente, A lo mejor.',
      'Verbos en subjuntivo («quizá venga») o indicativo («a lo mejor viene»).',
      'Futuro o condicional de probabilidad: «Serán las tres» (probablemente son las tres), «Tendría unos doce años».'
    ],
    signalsAndTricksHy: [
      'Կասկածի մակբայներ և արտահայտություններ՝ Quizás/Quizá (գուցե), Tal vez (թերևս), Probablemente (հավանաբար), Posiblemente (հնարավոր է), A lo mejor (երևի)։',
      'Ըղձական կամ սահմանական եղանակի բայեր։',
      'Հավանականության ապառնի կամ պայմանական՝ «Serán las tres» (հավանաբար ժամը երեքն է), «Tendría unos doce años» (մոտ տասներկու տարեկան կլիներ)։'
    ],
    examples: [
      {
        sentence: 'Quizás llueva esta tarde según el pronóstico del tiempo.',
        armenian: 'Գուցե անձրև գա այսօր կեսօրից հետո՝ եղանակի տեսության համաձայն։',
        explanationEs: 'Duda introducida por el adverbio "quizás" con verbo en subjuntivo.',
        explanationHy: 'Կասկած՝ ներմուծված «quizás» մակբայով և subjuntivo բայով։'
      },
      {
        sentence: 'Tal vez vayamos al cine el próximo fin de semana.',
        armenian: 'Թերևս հաջորդ հանգստյան օրերին կինո գնանք։',
        explanationEs: 'Incertidumbre o plan no confirmado con "tal vez".',
        explanationHy: 'Անորոշություն կամ չհաստատված ծրագիր «tal vez»-ով։'
      },
      {
        sentence: 'A lo mejor nos dan las notas del examen mañana por la mañana.',
        armenian: 'Երևի վաղն առավոտյան մեզ տան քննության գնահատականները։',
        explanationEs: 'Probabilidad con la locución "a lo mejor".',
        explanationHy: 'Հավանականություն «a lo mejor» արտահայտությամբ։'
      },
      {
        sentence: 'Probablemente el museo esté cerrado a estas horas.',
        armenian: 'Հավանաբար թանգարանը փակ է այս ժամին։',
        explanationEs: 'Hipótesis basada en una sospecha lógica.',
        explanationHy: 'Տրամաբանական կասկածի վրա հիմնված վարկած։'
      },
      {
        sentence: 'Posiblemente compremos una nueva bicicleta en primavera.',
        armenian: 'Հնարավոր է՝ գարնանը նոր հեծանիվ գնենք։',
        explanationEs: 'Posibilidad futura no asegurada.',
        explanationHy: 'Ապագա չերաշխավորված հնարավորություն։'
      },
      {
        sentence: 'Serán las cinco de la tarde más o menos.',
        armenian: 'Հավանաբար կեսօրվա ժամը հինգը կլինի մոտավորապես։',
        explanationEs: 'Futuro de indicativo utilizado para expresar probabilidad.',
        explanationHy: 'Սահմանական ապառնի՝ գործածված հավանականություն արտահայտելու համար։'
      },
      {
        sentence: 'Acaso no tenga suficiente tiempo para terminar la redacción.',
        armenian: 'Միգուցե նա բավարար ժամանակ չունենա շարադրությունն ավարտելու։',
        explanationEs: 'Duda con el adverbio "acaso".',
        explanationHy: 'Կասկած «acaso» մակբայով։'
      },
      {
        sentence: 'Seguramente Carlos ya ha llegado a su casa.',
        armenian: 'Հավանաբար Կարլոսն արդեն հասել է իր տուն։',
        explanationEs: 'Suposición verosímil con "seguramente".',
        explanationHy: 'Հավանական ենթադրություն «seguramente»-ով։'
      },
      {
        sentence: 'Tendría unos quince años cuando aprendió a tocar el piano.',
        armenian: 'Մոտ տասնհինգ տարեկան կլիներ, երբ սովորեց դաշնամուր նվագել։',
        explanationEs: 'Condicional de probabilidad en el pasado.',
        explanationHy: 'Հավանականության պայմանական անցյալում։'
      },
      {
        sentence: 'Puede que el profesor llegue unos minutos tarde.',
        armenian: 'Կարող է պատահել՝ ուսուցիչը մի քանի րոպե ուշանա։',
        explanationEs: 'Construcción dubitativa con "puede que".',
        explanationHy: 'Երկբայական կառույց «puede que»-ով։'
      }
    ],
    commonMistakesEs: 'Pensar que "seguramente" significa 100% seguro. En español, "seguramente" expresa una SUPOSICIÓN o probabilidad, por lo que es dubitativa.',
    commonMistakesHy: 'Մտածել, թե «seguramente» նշանակում է 100% վստահ։ Իսպաներենում «seguramente»-ն արտահայտում է ԵՆԹԱԴՐՈՒԹՅՈՒՆ կամ հավանականություն, ուստի dubitativa է։',
    examAdviceEs: 'Busca palabras como quizás, tal vez, a lo mejor, posiblemente, probablemente o verbos de probabilidad en futuro.',
    examAdviceHy: 'Փնտրիր quizás, tal vez, a lo mejor, posiblemente, probablemente բառերը կամ հավանականություն ցույց տվող ապառնի բայերը։',
    simplifiedAlternativeEs: 'Frases en las que no sabemos seguro lo que pasa y usamos palabras como "quizás" o "a lo mejor".',
    simplifiedAlternativeHy: 'Նախադասություններ, որտեղ հաստատ չգիտենք, թե ինչ է կատարվում, և օգտագործում ենք «quizás» կամ «a lo mejor»։',
    simplifiedAlternativeExample: {
      es: 'Tal vez mañana vayamos al parque.',
      hy: 'Թերևս վաղը այգի գնանք։'
    }
  }
];

export const communicationScenarios: CommunicationScenario[] = [
  {
    id: 'esc-profesor',
    titleEs: '1. El profesor explica las reglas en clase',
    titleHy: '1. Ուսուցիչը դասարանում կանոններն է բացատրում',
    descriptionEs: 'Durante la clase de Lengua Castellana, el profesor explica en la pizarra las normas ortográficas a los alumnos de 1.º ESO.',
    descriptionHy: 'Իսպաներենի դասի ժամանակ ուսուցիչը գրատախտակի մոտ 1.º ESO-ի աշակերտներին բացատրում է ուղղագրական կանոնները։',
    emisor: { es: 'El profesor de Lengua', hy: 'Իսպաներենի ուսուցիչը' },
    receptor: { es: 'Los alumnos de 1.º ESO en el aula', hy: '1.º ESO-ի աշակերտները դասարանում' },
    mensaje: { es: 'Las normas de acentuación gráfica', hy: 'Գրաֆիկական շեշտադրության կանոնները' },
    codigo: { es: 'La lengua española hablada y escrita', hy: 'Իսպաներեն բանավոր և գրավոր լեզուն' },
    canal: { es: 'El aire (ondas sonoras) y la pizarra (canal visual)', hy: 'Օդը (ձայնային ալիքներ) և գրատախտակը (տեսողական կապուղի)' },
    contexto: { es: 'El aula del instituto durante el horario de clase', hy: 'Դպրոցի դասարանը դասի ժամին' },
    ruido: { es: 'El murmullo de los coches en la calle o un alumno hablando', hy: 'Փողոցի մեքենաների աղմուկը կամ խոսող աշակերտը' },
    retroalimentacion: { es: 'Los alumnos asienten con la cabeza o levantan la mano para preguntar', hy: 'Աշակերտները գլխով են անում կամ ձեռք են բարձրացնում հարցնելու համար' }
  },
  {
    id: 'esc-madre',
    titleEs: '2. Mensaje de WhatsApp de mamá',
    titleHy: '2. Մայրիկի WhatsApp հաղորդագրությունը',
    descriptionEs: 'Una madre envía un mensaje de texto por el móvil a su hijo recordándole que compre pan al volver del colegio.',
    descriptionHy: 'Մայրը բջջայինով հաղորդագրություն է ուղարկում որդուն՝ հիշեցնելով դպրոցից գալիս հաց գնել։',
    emisor: { es: 'La madre', hy: 'Մայրը' },
    receptor: { es: 'El hijo', hy: 'Որդին' },
    mensaje: { es: '«Acuérdate de comprar una barra de pan antes de subir»', hy: '«Չմոռանաս տուն բարձրանալուց առաջ հաց գնել»' },
    codigo: { es: 'El idioma español escrito con emoticonos', hy: 'Իսպաներեն գրավոր լեզուն՝ էմոջիներով' },
    canal: { es: 'La red telefónica móvil e Internet (pantalla del móvil)', hy: 'Բջջային ցանցը և համացանցը (հեռախոսի էկրանը)' },
    contexto: { es: 'La rutina diaria familiar de la tarde', hy: 'Ընտանեկան կեսօրվա առօրյան' },
    ruido: { es: 'Falta de cobertura de datos o batería baja', hy: 'Կապի բացակայությունը կամ մարտկոցի նստելը' },
    retroalimentacion: { es: 'El hijo contesta con un pulgar arriba 👍 «Vale, mamá»', hy: 'Որդին պատասխանում է բթամատով 👍 «Լավ, մամ»' }
  },
  {
    id: 'esc-telefono',
    titleEs: '3. Dos amigos hablando por teléfono',
    titleHy: '3. Երկու ընկեր խոսում են հեռախոսով',
    descriptionEs: 'Carlos llama a David para organizar el partido de fútbol del sábado.',
    descriptionHy: 'Կարլոսը զանգահարում է Դավիթին՝ շաբաթ օրվա ֆուտբոլային խաղը կազմակերպելու համար։',
    emisor: { es: 'Carlos (cuando habla)', hy: 'Կարլոսը (երբ խոսում է)' },
    receptor: { es: 'David (cuando escucha)', hy: 'Դավիթը (երբ լսում է)' },
    mensaje: { es: 'Quedar a las diez en el polideportivo para jugar', hy: 'Հանդիպել ժամը տասին մարզադաշտում՝ խաղալու համար' },
    codigo: { es: 'La lengua española oral coloquial', hy: 'Իսպաներեն խոսակցական բանավոր լեզուն' },
    canal: { es: 'La línea telefónica y los altavoces de los teléfonos', hy: 'Հեռախոսային գիծը և հեռախոսների բարձրախոսները' },
    contexto: { es: 'La tarde libre en sus respectivas casas', hy: 'Ազատ կեսօրը իրենց տներում' }
  },
  {
    id: 'esc-senales',
    titleEs: '4. Conductor ante una señal de STOP',
    titleHy: '4. Վարորդը STOP ճանապարհային նշանի առջև',
    descriptionEs: 'Un conductor llega a un cruce y ve una señal octogonal roja que pone "STOP".',
    descriptionHy: 'Վարորդը հասնում է խաչմերուկ և տեսնում է կարմիր ութանկյուն նշան՝ «STOP» գրությամբ։',
    emisor: { es: 'La Dirección General de Tráfico (DGT)', hy: 'Ճանապարհային ոստիկանությունը / Երթևեկության վարչությունը' },
    receptor: { es: 'El conductor del vehículo', hy: 'Մեքենայի վարորդը' },
    mensaje: { es: 'Obligación absoluta de detener el vehículo por completo', hy: 'Մեքենան ամբողջությամբ կանգնեցնելու պարտադիր պահանջը' },
    codigo: { es: 'Código de señales de tráfico visuales (forma, color rojo, letras)', hy: 'Ճանապարհային տեսողական նշանների կոդը (ձև, կարմիր գույն, տառեր)' },
    canal: { es: 'Canal visual (la placa metálica y la luz ambiental)', hy: 'Տեսողական կապուղի (մետաղական վահանակ և լույս)' },
    contexto: { es: 'El cruce de dos calles en una ciudad', hy: 'Քաղաքի երկու փողոցների խաչմերուկը' }
  },
  {
    id: 'esc-arbitro',
    titleEs: '5. El árbitro pita y saca tarjeta roja',
    titleHy: '5. Մրցավարը սուլում է և կարմիր քարտ ցույց տալիս',
    descriptionEs: 'El árbitro detiene el partido con un pitido sonoro y levanta la tarjeta roja hacia un jugador tras una falta grave.',
    descriptionHy: 'Մրցավարը բարձր սուլիչով դադարեցնում է խաղը և կոպիտ խախտումից հետո կարմիր քարտ ցույց տալիս ֆուտբոլիստին։',
    emisor: { es: 'El árbitro del partido', hy: 'Խաղի մրցավարը' },
    receptor: { es: 'El jugador infractor (y todo el estadio)', hy: 'Կանոնները խախտած խաղացողը (և ողջ մարզադաշտը)' },
    mensaje: { es: 'Estás expulsado del terreno de juego inmediatamente', hy: 'Դու անմիջապես հեռացված ես խաղադաշտից' },
    codigo: { es: 'El código deportivo no verbal (sonido del silbato + color de la tarjeta)', hy: 'Սպորտային ոչ խոսքային կոդը (սուլիչի ձայն + քարտի գույն)' },
    canal: { es: 'Canal acústico (silbato) y visual (tarjeta levantada)', hy: 'Ձայնային (սուլիչ) և տեսողական (բարձրացված քարտ) կապուղի' },
    contexto: { es: 'Un partido oficial en un campo de fútbol', hy: 'Պաշտոնական խաղ ֆուտբոլի դաշտում' }
  },
  {
    id: 'esc-libro',
    titleEs: '6. Una persona leyendo una novela en la biblioteca',
    titleHy: '6. Մարդը վեպ է կարդում գրադարանում',
    descriptionEs: 'Una estudiante lee un capítulo de "Don Quijote de la Mancha" de Miguel de Cervantes.',
    descriptionHy: 'Ուսանողուհին կարդում է Միգել դե Սերվանտեսի «Դոն Կիխոտ» գրքի մի գլուխը։',
    emisor: { es: 'Miguel de Cervantes (el autor)', hy: 'Միգել դե Սերվանտեսը (հեղինակը)' },
    receptor: { es: 'La estudiante lectora', hy: 'Կարդացող աշակերտուհին' },
    mensaje: { es: 'Las aventuras y reflexiones del hidalgo Don Quijote', hy: 'Դոն Կիխոտի արկածներն ու մտորումները' },
    codigo: { es: 'La lengua española escrita del siglo XVII', hy: '17-րդ դարի իսպաներեն գրավոր լեզուն' },
    canal: { es: 'El papel impreso del libro físico', hy: 'Գրքի տպագիր թուղթը' },
    contexto: { es: 'La sala de lectura de la biblioteca escolar', hy: 'Դպրոցական գրադարանի ընթերցասրահը' }
  },
  {
    id: 'esc-megafonia',
    titleEs: '7. Anuncio por la megafonía del instituto',
    titleHy: '7. Հայտարարություն դպրոցի բարձրախոսով',
    descriptionEs: 'La jefa de estudios anuncia por los altavoces del colegio que se suspenden las actividades extraescolares.',
    descriptionHy: 'Ուսումնական մասի վարիչը դպրոցի բարձրախոսներով հայտարարում է, որ արտադասարանական պարապմունքները չեղարկվում են։',
    emisor: { es: 'La jefa de estudios del centro', hy: 'Դպրոցի ուսումնական մասի վարիչը' },
    receptor: { es: 'Todos los profesores y alumnos del centro', hy: 'Դպրոցի բոլոր ուսուցիչներն ու աշակերտները' },
    mensaje: { es: 'Suspensión de las actividades extraescolares de hoy', hy: 'Այսօրվա արտադասարանական պարապմունքների չեղարկումը' },
    codigo: { es: 'La lengua española oral estándar', hy: 'Իսպաներեն գրական բանավոր լեզուն' },
    canal: { es: 'El sistema electrónico de megafonía y ondas sonoras', hy: 'Բարձրախոսների էլեկտրոնային համակարգը և ձայնային ալիքները' },
    contexto: { es: 'El recreo en el edificio del instituto', hy: 'Դասամիջոցը դպրոցի շենքում' }
  },
  {
    id: 'esc-sordos',
    titleEs: '8. Dos amigos comunicándose con lengua de signos',
    titleHy: '8. Երկու ընկեր շփվում են ժեստերի լեզվով',
    descriptionEs: 'Dos personas sordomudas conversan en el parque utilizando movimientos de manos y expresiones faciales.',
    descriptionHy: 'Երկու խուլուհամր անձինք զրուցում են այգում՝ օգտագործելով ձեռքերի շարժումներ և դիմախաղ։',
    emisor: { es: 'La persona que signa en ese instante', hy: 'Այդ պահին ժեստեր անող անձը' },
    receptor: { es: 'La persona que observa los signos', hy: 'Ժեստերին հետևող անձը' },
    mensaje: { es: 'La conversación compartida sobre sus vacaciones', hy: 'Իրենց արձակուրդների մասին զրույցը' },
    codigo: { es: 'La Lengua de Signos Española (LSE)', hy: 'Իսպաներեն ժեստերի լեզուն (LSE)' },
    canal: { es: 'Canal visual (la luz y el espacio entre ambos)', hy: 'Տեսողական կապուղի (լույսը և նրանց միջև տարածությունը)' },
    contexto: { es: 'Un banco en un parque público soleado', hy: 'Նստարան արևոտ հանրային այգում' }
  }
];
