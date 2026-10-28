import { TheoryLesson } from './types';

export const theoryPart1: TheoryLesson[] = [
  // TEMA 1: FUNCIONES DEL LENGUAJE
  {
    id: 'func-referencial',
    topicId: 'funciones',
    titleEs: '1. Función referencial o representativa',
    titleHy: '1. Ռեֆերենտիվ (ներկայացուցչական / տեղեկատվական) գործառույթ',
    shortSummaryEs: 'Transmite información objetiva sobre la realidad sin valoraciones personales.',
    shortSummaryHy: 'Փոխանցում է օբյեկտիվ տեղեկատվություն իրականության մասին՝ առանց անձնական կարծիքի։',
    simpleExplanationEs: 'Se usa cuando solo queremos dar un dato o contar lo que pasa de forma neutral, como en un telediario o un libro de ciencias. No decimos si nos gusta o nos parece mal.',
    simpleExplanationHy: 'Օգտագործվում է, երբ պարզապես ուզում ենք չեզոք փաստ կամ տեղեկություն հաղորդել (ինչպես լուրերում կամ դասագրքում)՝ առանց ասելու՝ դա մեզ դո՞ւր է գալիս, թե՞ ոչ։',
    fullDefinitionEs: 'La función referencial (o representativa) se centra en el referente o contexto. Su objetivo principal es informar objetivamente sobre hechos, conceptos o realidades del mundo exterior.',
    fullDefinitionHy: 'Ռեֆերենտիվ գործառույթը կենտրոնանում է իրադրության (համատեքստի) վրա։ Հիմնական նպատակն է օբյեկտիվորեն տեղեկացնել փաստերի կամ արտաքին աշխարհի իրողությունների մասին։',
    communicativeGoalEs: 'Transmitir conocimientos, datos y hechos objetivos comprobables.',
    communicativeGoalHy: 'Փոխանցել գիտելիքներ, տվյալներ և ստուգելի օբյեկտիվ փաստեր։',
    targetElement: { es: 'Contexto o referente', hy: 'Համատեքստ կամ հղում (իրականություն)' },
    signalsAndTricksEs: [
      'Verbos en modo indicativo (modo de la realidad).',
      'Oraciones enunciativas (afirmativas o negativas).',
      'Léxico denotativo y objetivo, sin adjetivos valorativos ni emociones.',
      'Tercera persona gramatical habitual (él, ella, ellos).'
    ],
    signalsAndTricksHy: [
      'Սահմանական եղանակի բայեր (իրականության եղանակ)։',
      'Պատմողական նախադասություններ (հաստատական կամ ժխտական)։',
      'Չեզոք բառապաշար՝ առանց գնահատողական ածականների կամ զգացմունքների։',
      'Սովորաբար 3-րդ դեմքով շարադրանք (նա, նրանք)։'
    ],
    examples: [
      {
        sentence: 'La capital de España es Madrid.',
        armenian: 'Իսպանիայի մայրաքաղաքը Մադրիդն է։',
        explanationEs: 'Es un dato geográfico objetivo y verificable.',
        explanationHy: 'Սա աշխարհագրական օբյեկտիվ և ստուգելի փաստ է։'
      },
      {
        sentence: 'El agua hierve a cien grados Celsius.',
        armenian: 'Ջուրը եռում է հարյուր աստիճան Ցելսիուսում։',
        explanationEs: 'Hecho científico universal sin ninguna emoción del hablante.',
        explanationHy: 'Համընդհանուր գիտական փաստ՝ առանց խոսողի որևէ հույզի։'
      },
      {
        sentence: 'El examen de Lengua empezará a las nueve de la mañana.',
        armenian: 'Լեզվի քննությունը կսկսվի առավոտյան ժամը իննին։',
        explanationEs: 'Informa sobre un horario preciso y neutral.',
        explanationHy: 'Տեղեկացնում է հստակ և չեզոք ժամանակացույցի մասին։'
      },
      {
        sentence: 'Mañana no habrá clase de Educación Física por lluvia.',
        armenian: 'Վաղը ֆիզկուլտուրայի դաս չի լինի անձրևի պատճառով։',
        explanationEs: 'Enunciativa negativa que comunica un hecho real.',
        explanationHy: 'Ժխտական պատմողական նախադասություն, որը հաղորդում է իրական փաստ։'
      },
      {
        sentence: 'La Luna gira alrededor de la Tierra.',
        armenian: 'Լուսինը պտտվում է Երկրի շուրջ։',
        explanationEs: 'Dato astronómico objetivo.',
        explanationHy: 'Աստղագիտական օբյեկտիվ տվյալ։'
      },
      {
        sentence: 'Cervantes escribió El Quijote en el siglo XVII.',
        armenian: 'Սերվանտեսը գրել է «Դոն Կիխոտը» 17-րդ դարում։',
        explanationEs: 'Información histórica comprobable.',
        explanationHy: 'Ստուգելի պատմական տեղեկություն։'
      },
      {
        sentence: 'El triángulo tiene tres lados.',
        armenian: 'Եռանկյունն ունի երեք կողմ։',
        explanationEs: 'Definición geométrica exacta.',
        explanationHy: 'Երկրաչափական ճշգրիտ սահմանում։'
      },
      {
        sentence: 'Hoy es martes veintiocho de octubre.',
        armenian: 'Այսօր երեքշաբթի է՝ հոկտեմբերի քսանութը։',
        explanationEs: 'Dato temporal del calendario.',
        explanationHy: 'Օրացուցային ժամանակային տվյալ։'
      },
      {
        sentence: 'Los mamíferos son animales vertebrados.',
        armenian: 'Կաթնասունները ողնաշարավոր կենդանիներ են։',
        explanationEs: 'Clasificación biológica objetiva.',
        explanationHy: 'Կենսաբանական օբյեկտիվ դասակարգում։'
      },
      {
        sentence: 'El autobús número 14 pasa cada quince minutos.',
        armenian: 'Թիվ 14 ավտոբուսն անցնում է յուրաքանչյուր տասնհինգ րոպեն մեկ։',
        explanationEs: 'Dato de servicio público sin opinión.',
        explanationHy: 'Հանրային տրանսպորտի տվյալ՝ առանց կարծիքի։'
      },
      {
        sentence: 'El termómetro marca quince grados.',
        armenian: 'Ջերմաչափը ցույց է տալիս տասնհինգ աստիճան։',
        explanationEs: 'Medición física neutral.',
        explanationHy: 'Ֆիզիկական չեզոք չափում։'
      },
      {
        sentence: 'Madrid y Barcelona son las dos ciudades más pobladas de España.',
        armenian: 'Մադրիդն ու Բարսելոնան Իսպանիայի երկու ամենաշատ բնակեցված քաղաքներն են։',
        explanationEs: 'Dato demográfico real.',
        explanationHy: 'Իրական ժողովրդագրական տվյալ։'
      }
    ],
    commonMistakesEs: 'Confundir un hecho objetivo con una opinión. Si decimos "El examen es muy difícil", ya no es función referencial, sino expresiva porque "difícil" es una valoración subjetiva.',
    commonMistakesHy: 'Օբյեկտիվ փաստը կարծիքի հետ շփոթելը։ Եթե ասենք «Քննությունը շատ դժվար է», դա այլևս ռեֆերենտիվ չէ, այլ արտահայտչական (expresiva), որովհետև «դժվար»-ը սուբյեկտիվ գնահատական է։',
    examAdviceEs: 'En el examen, busca verbos en indicativo y fíjate si la frase podría aparecer tal cual en una enciclopedia o noticia seria.',
    examAdviceHy: 'Քննության ժամանակ ուշադրություն դարձրու սահմանական եղանակի բայերին և մտածիր՝ արդյոք այս նախադասությունը կարո՞ղ էր գրված լինել հանրագիտարանում։',
    simplifiedAlternativeEs: 'Piensa en un robot o en una cámara de fotos: solo cuenta lo que ve o lo que mide, sin sentimientos.',
    simplifiedAlternativeHy: 'Պատկերացրու ռոբոտի կամ տեսախցիկի. նա միայն հաղորդում է այն, ինչ տեսնում կամ չափում է՝ առանց զգացմունքների։',
    simplifiedAlternativeExample: {
      es: 'Son las tres de la tarde.',
      hy: 'Կեսօրվա ժամը երեքն է։'
    }
  },
  {
    id: 'func-expresiva',
    topicId: 'funciones',
    titleEs: '2. Función expresiva o emotiva',
    titleHy: '2. Էքսպրեսիվ (արտահայտչական / զգացմունքային) գործառույթ',
    shortSummaryEs: 'Expresa los sentimientos, emociones, opiniones o estado de ánimo del emisor.',
    shortSummaryHy: 'Արտահայտում է խոսողի զգացմունքները, հույզերը, կարծիքը կամ տրամադրությունը։',
    simpleExplanationEs: 'Se usa cuando quien habla cuenta cómo se siente, si algo le alegra, le duele, le asusta o le parece estupendo.',
    simpleExplanationHy: 'Օգտագործվում է, երբ խոսողը պատմում է իր զգացմունքների մասին՝ ուրախանո՞ւմ է, ցավո՞ւմ է, վախենո՞ւմ է, թե՞ ինչ-որ բան հիանալի է համարում։',
    fullDefinitionEs: 'La función expresiva o emotiva está centrada en el emisor. Permite manifestar subjetividad: emociones, deseos, preferencias, opiniones y valoraciones personales.',
    fullDefinitionHy: 'Արտահայտչական գործառույթը կենտրոնացած է խոսողի (emisor) վրա։ Այն արտացոլում է սուբյեկտիվությունը՝ հույզեր, ցանկություններ, նախասիրություններ և անձնական գնահատականներ։',
    communicativeGoalEs: 'Manifestar el mundo interior y la actitud afectiva del hablante.',
    communicativeGoalHy: 'Արտահայտել խոսողի ներաշխարհն ու հուզական վերաբերմունքը։',
    targetElement: { es: 'Emisor', hy: 'Խոսող / Հաղորդող (Emisor)' },
    signalsAndTricksEs: [
      'Signos de exclamación (¡...!).',
      'Interjecciones: ¡Ay!, ¡Ojalá!, ¡Uf!, ¡Qué bien!',
      'Verbos en primera persona (yo, nosotros): siento, me gusta, prefiero.',
      'Adjetivos y adverbios valorativos: maravilloso, horrible, afortunadamente.'
    ],
    signalsAndTricksHy: [
      'Բացականչական նշաններ (¡...!)։',
      'Ձայնարկություններ՝ ¡Ay!, ¡Ojalá!, ¡Uf!, ¡Qué bien!։',
      '1-ին դեմքի բայեր (ես, մենք)՝ siento (զգում եմ), me gusta (ինձ դուր է գալիս)։',
      'Գնահատողական ածականներ և մակբայներ՝ հրաշալի, սարսափելի, բարեբախտաբար։'
    ],
    examples: [
      {
        sentence: '¡Qué alegría verte de nuevo por aquí!',
        armenian: 'Ի՜նչ ուրախություն է քեզ կրկին այստեղ տեսնել։',
        explanationEs: 'Manifiesta entusiasmo y alegría del emisor.',
        explanationHy: 'Արտահայտում է խոսողի ոգևորությունն ու ուրախությունը։'
      },
      {
        sentence: '¡Ay, me duele muchísimo la cabeza!',
        armenian: 'Վա՜յ, գլուխս սաստիկ ցավում է։',
        explanationEs: 'Expresión directa de dolor físico con interjección.',
        explanationHy: 'Ֆիզիկական ցավի անմիջական արտահայտում ձայնարկությամբ։'
      },
      {
        sentence: 'Ojalá haga buen tiempo este fin de semana.',
        armenian: 'Տա Աստված, որ այս հանգստյան օրերին լավ եղանակ լինի։',
        explanationEs: 'Manifiesta un deseo íntimo del hablante.',
        explanationHy: 'Արտահայտում է խոսողի սրտի ցանկությունը։'
      },
      {
        sentence: 'Me encanta esta canción de guitarra.',
        armenian: 'Ես պաշտում եմ կիթառի այս երգը։',
        explanationEs: 'Verbo de sentimiento y preferencia personal.',
        explanationHy: 'Զգացմունքի և անձնական նախասիրության բայ։'
      },
      {
        sentence: '¡Qué película más aburrida y pesada!',
        armenian: 'Ի՜նչ ձանձրալի ու ծանր ֆիլմ էր։',
        explanationEs: 'Juicio de valor negativo subjetivo.',
        explanationHy: 'Սուբյեկտիվ բացասական գնահատական։'
      },
      {
        sentence: '¡Uf, qué calor tan insoportable hace hoy!',
        armenian: 'Ու՜ֆ, ինչպիսի՜ անտանելի շոգ է այսօր։',
        explanationEs: 'Interjección y adjetivo valorativo ("insoportable").',
        explanationHy: 'Ձայնարկություն և գնահատողական ածական («անտանելի»)։'
      },
      {
        sentence: 'Lamentablemente no pude llegar a tiempo.',
        armenian: 'Ցավոք, ես չկարողացա ժամանակին հասնել։',
        explanationEs: 'El adverbio "lamentablemente" expresa el pesar del emisor.',
        explanationHy: '«Ցավոք» մակբայն արտահայտում է խոսողի ափսոսանքը։'
      },
      {
        sentence: '¡Bravo, habéis hecho un trabajo excelente!',
        armenian: 'Կեցցե՜ք, հիանալի աշխատանք եք կատարել։',
        explanationEs: 'Elogio entusiasta y valoración positiva.',
        explanationHy: 'Ոգևորված գովեստ և դրական գնահատական։'
      },
      {
        sentence: 'Tengo mucho miedo de perder el tren.',
        armenian: 'Շատ եմ վախենում գնացքից ուշանալուց։',
        explanationEs: 'Expresión directa de la emoción de temor.',
        explanationHy: 'Վախի զգացմունքի անմիջական արտահայտում։'
      },
      {
        sentence: '¡Por fin han llegado las vacaciones!',
        armenian: 'Վերջապե՜ս եկան արձակուրդները։',
        explanationEs: 'Alivio y alegría compartida.',
        explanationHy: 'Թեթևացում և ուրախություն։'
      },
      {
        sentence: 'Me parece una idea fantástica.',
        armenian: 'Ինձ դա ֆանտաստիկ գաղափար է թվում։',
        explanationEs: 'Opinión subjetiva favorable.',
        explanationHy: 'Սուբյեկտիվ դրական կարծիք։'
      },
      {
        sentence: '¡Qué susto me has dado!',
        armenian: 'Ինչպե՜ս վախեցրիր ինձ։',
        explanationEs: 'Reacción emocional inmediata.',
        explanationHy: 'Անմիջական հուզական արձագանք։'
      }
    ],
    commonMistakesEs: 'Creer que toda frase con "yo" es expresiva. "Yo tengo 13 años" es referencial (un dato). Para ser expresiva debe contener una valoración o sentimiento ("Tengo mucha ilusión").',
    commonMistakesHy: 'Կարծել, թե «ես» պարունակող ամեն նախադասություն expresiva է։ «Ես 13 տարեկան եմ» նախադասությունը ռեֆերենտիվ է (տվյալ)։ Էքսպրեսիվ լինելու համար այն պետք է պարունակի զգացմունք կամ գնահատական («Շատ ոգևորված եմ»)։',
    examAdviceEs: 'Fíjate en signos de exclamación ¡ !, interjecciones y adjetivos subjetivos (bueno, malo, feo, precioso).',
    examAdviceHy: 'Ուշադրություն դարձրու բացականչական նշաններին ¡ !, ձայնարկություններին և սուբյեկտիվ ածականներին (լավ, վատ, գեղեցիկ)։',
    simplifiedAlternativeEs: 'Cuando dices cómo te sientes por dentro: si estás alegre, triste, enfadado o sorprendido.',
    simplifiedAlternativeHy: 'Երբ ասում ես, թե ինչ ես զգում ներսում՝ ուրա՞խ ես, տխո՞ւր, զայրացա՞ծ, թե՞ զարմացած։',
    simplifiedAlternativeExample: {
      es: '¡Qué contento estoy hoy!',
      hy: 'Որքա՜ն ուրախ եմ ես այսօր։'
    }
  },
  {
    id: 'func-apelativa',
    topicId: 'funciones',
    titleEs: '3. Función apelativa o conativa',
    titleHy: '3. Ապելյատիվ (կոչական / ներգործական) գործառույթ',
    shortSummaryEs: 'Influye en el receptor para que haga algo, responda o cambie de actitud.',
    shortSummaryHy: 'Ազդում է լսողի վրա, որպեսզի նա ինչ-որ բան անի, պատասխանի կամ փոխի վարքագիծը։',
    simpleExplanationEs: 'Se usa cuando pides algo, das una orden, haces una pregunta o intentas convencer a la otra persona.',
    simpleExplanationHy: 'Օգտագործվում է, երբ ինչ-որ բան ես խնդրում, հրամայում, հարցնում կամ փորձում ես համոզել դիմացինին։',
    fullDefinitionEs: 'La función apelativa o conativa se orienta hacia el receptor. El emisor busca provocar una reacción en quien escucha o lee: una acción, una respuesta verbal o un cambio de comportamiento.',
    fullDefinitionHy: 'Ապելյատիվ գործառույթն ուղղված է լսողին/ընդունողին (receptor)։ Խոսողը նպատակ ունի արձագանք առաջացնել՝ գործողություն, պատասխան կամ վարքի փոփոխություն։',
    communicativeGoalEs: 'Mover al receptor a actuar, contestar o convencerle de algo.',
    communicativeGoalHy: 'Մղել լսողին գործելու, պատասխանելու կամ համոզել նրան։',
    targetElement: { es: 'Receptor', hy: 'Լսող / Ընդունող (Receptor)' },
    signalsAndTricksEs: [
      'Verbos en modo imperativo: ¡Escucha!, Haz, Cierra.',
      'Vocativos (llamar a alguien por su nombre): «Carlos, ven aquí».',
      'Oraciones interrogativas que esperan respuesta.',
      'Lenguaje persuasivo de la publicidad: «Compra ahora y ahorra».',
      'Fórmulas de cortesía: por favor, ¿te importaría...?'
    ],
    signalsAndTricksHy: [
      'Հրամայական եղանակի բայեր՝ ¡Escucha! (Լսի՛ր), Haz (Արա՛), Cierra (Փակի՛ր)։',
      'Կոչականներ (դիմել անունով)՝ «Carlos, ven aquí» (Կարլոս, արի այստեղ)։',
      'Հարցական նախադասություններ, որոնք պատասխան են ակնկալում։',
      'Գովազդային համոզիչ լեզու՝ «Գնի՛ր հիմա և խնայիր»։',
      'Քաղաքավարի արտահայտություններ՝ խնդրում եմ, դեմ չե՞ք լինի...'
    ],
    examples: [
      {
        sentence: 'Cierra la puerta con cuidado, por favor.',
        armenian: 'Խնդրում եմ, դուռը զգուշությամբ փակիր։',
        explanationEs: 'Petición directa para que el receptor realice una acción.',
        explanationHy: 'Ուղիղ խնդրանք, որպեսզի լսողը գործողություն կատարի։'
      },
      {
        sentence: '¡Silencio todos, abrid el libro en la página veinte!',
        armenian: 'Լռությո՛ւն բոլորդ, բացե՛ք գիրքը քսաներորդ էջի վրա։',
        explanationEs: 'Orden del profesor mediante imperativo.',
        explanationHy: 'Ուսուցչի հրաման հրամայական բայով։'
      },
      {
        sentence: '¿Has terminado ya los deberes de Matemáticas?',
        armenian: 'Արդեն ավարտե՞լ ես մաթեմատիկայի տնային աշխատանքը։',
        explanationEs: 'Pregunta dirigida al receptor buscando su respuesta.',
        explanationHy: 'Լսողին ուղղված հարց՝ պատասխան ստանալու նպատակով։'
      },
      {
        sentence: '¡Mira hacia los dos lados antes de cruzar!',
        armenian: 'Անցնելուց առաջ նայի՛ր երկու կողմերին։',
        explanationEs: 'Consejo o instrucción tajante en imperativo.',
        explanationHy: 'Խորհուրդ կամ հրահանգ հրամայականով։'
      },
      {
        sentence: 'Pásame la sal, David.',
        armenian: 'Աղն ինձ փոխանցիր, Դավի՛թ։',
        explanationEs: 'Petición con vocativo ("David").',
        explanationHy: 'Խնդրանք կոչականով («Դավիթ»)։'
      },
      {
        sentence: '¡Prueba este refresco y siente la energía!',
        armenian: 'Փորձի՛ր այս ըմպելիքը և զգա՛ էներգիան։',
        explanationEs: 'Eslogan publicitario que busca que compremos el producto.',
        explanationHy: 'Գովազդային կարգախոս, որը նպատակ ունի մեզ համոզել գնել։'
      },
      {
        sentence: '¿Podrías hablar más bajo? Hay gente estudiando.',
        armenian: 'Կարո՞ղ ես ավելի ցածր խոսել։ Մարդիկ կան, որ սովորում են։',
        explanationEs: 'Ruego formulado como pregunta cortés.',
        explanationHy: 'Խնդրանք՝ ձևակերպված որպես քաղաքավարի հարց։'
      },
      {
        sentence: '¡No toques esa estufa porque quema!',
        armenian: 'Ձեռք մի՛ տուր այդ վառարանին, որովհետև այրում է։',
        explanationEs: 'Prohibición con mandato negativo.',
        explanationHy: 'Արգելք ժխտական հրամայականով։'
      },
      {
        sentence: 'Escuchad con atención las instrucciones del árbitro.',
        armenian: 'Ուշադրությամբ լսե՛ք մրցավարի հրահանգները։',
        explanationEs: 'Mandato a un grupo de receptores.',
        explanationHy: 'Հրաման մի խումբ լսողների։'
      },
      {
        sentence: 'Ven a mi fiesta de cumpleaños este sábado.',
        armenian: 'Այս շաբաթ օրը արի՛ իմ ծննդյան երեկույթին։',
        explanationEs: 'Invitación directa.',
        explanationHy: 'Ուղիղ հրավեր։'
      },
      {
        sentence: 'Dime la verdad ahora mismo.',
        armenian: 'Ասա՛ ինձ ճշմարտությունը հենց հիմա։',
        explanationEs: 'Exigencia verbal de respuesta.',
        explanationHy: 'Պատասխանի բանավոր պահանջ։'
      },
      {
        sentence: 'Vota por nuestra propuesta para delegado de curso.',
        armenian: 'Քվեարկի՛ր մեր առաջարկի օգտին՝ դասարանի ավագի համար։',
        explanationEs: 'Intención persuasiva de convencer.',
        explanationHy: 'Համոզելու նպատակ։'
      }
    ],
    commonMistakesEs: 'Pensar que solo las órdenes militares son función apelativa. Un ruego dulce ("¿Me prestas tu boli?"), un cartel de "No pisar el césped" o un anuncio son apelativos.',
    commonMistakesHy: 'Մտածել, որ միայն կոշտ հրամաններն են apelativa: Քաղաքավարի խնդրանքը («Գրիչդ կտա՞ս»), արգելող նշանը կամ գովազդը նույնպես ապելյատիվ են։',
    examAdviceEs: 'Pregúntate: ¿El emisor quiere que el RECEPTOR haga algo? Si la respuesta es sí, es función apelativa.',
    examAdviceHy: 'Ինքդ քեզ հարցրու. Արդյո՞ք խոսողն ուզում է, որ ԼՍՈՂԸ ինչ-որ բան անի։ Եթե այո, ապա սա apelativa է։',
    simplifiedAlternativeEs: 'Es cuando le dices a alguien que haga, diga o compre algo.',
    simplifiedAlternativeHy: 'Սա այն դեպքն է, երբ ինչ-որ մեկին ասում ես ինչ-որ բան անել, ասել կամ գնել։',
    simplifiedAlternativeExample: {
      es: '¡Ven aquí ahora!',
      hy: 'Արի՛ այստեղ հիմա։'
    }
  },
  {
    id: 'func-fatica',
    topicId: 'funciones',
    titleEs: '4. Función fática o de contacto',
    titleHy: '4. Ֆատիկ (կոնտակտային / կապ հաստատող) գործառույթ',
    shortSummaryEs: 'Inicia, mantiene, comprueba o interrumpe la comunicación a través del canal.',
    shortSummaryHy: 'Սկսում է, պահպանում, ստուգում կամ ընդհատում է հաղորդակցությունը կապուղու միջոցով։',
    simpleExplanationEs: 'Se usa para saber si la otra persona nos oye bien, para saludar al descolgar el teléfono o para despedirnos.',
    simpleExplanationHy: 'Օգտագործվում է ստուգելու համար՝ արդյոք դիմացինը մեզ լսո՞ւմ է, հեռախոսը վերցնելիս ողջունելու կամ հրաժեշտ տալու համար։',
    fullDefinitionEs: 'La función fática o de contacto se centra en el canal comunicativo. Su finalidad no es transmitir información nueva, sino verificar que el canal físico está abierto, funciona y no hay interferencias.',
    fullDefinitionHy: 'Ֆատիկ գործառույթը կենտրոնացած է կապուղու (canal) վրա։ Նպատակը նոր տեղեկություն հաղորդելը չէ, այլ ստուգելը, որ կապի միջոցը բաց է, գործում է և խոչընդոտներ չկան։',
    communicativeGoalEs: 'Abrir, mantener, asegurar o cerrar el contacto comunicativo entre emisor y receptor.',
    communicativeGoalHy: 'Բացել, պահպանել, ապահովել կամ փակել հաղորդակցական կապը խոսողի և լսողի միջև։',
    targetElement: { es: 'Canal', hy: 'Կապուղի (Canal)' },
    signalsAndTricksEs: [
      'Saludos y despedidas: Hola, Buenos días, Adiós, Hasta luego.',
      'Fórmulas telefónicas: ¿Diga?, ¿Dígame?, ¿Sí?, ¿Aló?',
      'Muletillas de confirmación: ¿Sabes?, ¿Entiendes?, ¿Me sigues?, ¿Verdad?, Eh...',
      'Pruebas de micrófono: Un, dos, tres... probando sonido.'
    ],
    signalsAndTricksHy: [
      'Ողջույններ և հրաժեշտներ՝ Hola (Բարև), Buenos días (Բարի լույս), Adiós (Ցտեսություն)։',
      'Հեռախոսային արտահայտություններ՝ ¿Diga?, ¿Dígame? (Լսո՞ւմ եմ), ¿Sí? (Այո՞)։',
      'Հաստատող հարցումներ՝ ¿Entiendes? (Հասկանո՞ւմ ես), ¿Me sigues? (Լսո՞ւմ ես), ¿Verdad? (Ճի՞շտ է)։',
      'Միկրոֆոնի ստուգումներ՝ Մեկ, երկու, երեք... փորձարկում ենք ձայնը։'
    ],
    examples: [
      {
        sentence: '¿Dígame? ¿Quién habla?',
        armenian: 'Լսո՞ւմ եմ։ Ո՞վ է խոսում։',
        explanationEs: 'Apertura del canal telefónico.',
        explanationHy: 'Հեռախոսային կապուղու բացում։'
      },
      {
        sentence: '¿Me escuchas bien? Hay mucho ruido en la línea.',
        armenian: 'Ինձ լա՞վ ես լսում։ Գծի վրա շատ աղմուկ կա։',
        explanationEs: 'Comprobación técnica del canal de comunicación.',
        explanationHy: 'Հաղորդակցման կապուղու տեխնիկական ստուգում։'
      },
      {
        sentence: 'Hola, buenos días a todos.',
        armenian: 'Բարև ձեզ, բարի լույս բոլորին։',
        explanationEs: 'Fórmula de saludo para iniciar el contacto social.',
        explanationHy: 'Ողջույնի ձև սոցիալական կապ սկսելու համար։'
      },
      {
        sentence: 'Bueno, pues nos vemos mañana, adiós.',
        armenian: 'Դե լավ, կտեսնվենք վաղը, ցտեսություն։',
        explanationEs: 'Cierre del canal comunicativo.',
        explanationHy: 'Հաղորդակցման կապուղու փակում։'
      },
      {
        sentence: 'Sí, claro, ajá, te estoy escuchando.',
        armenian: 'Այո, իհարկե, ահա, ես քեզ լսում եմ։',
        explanationEs: 'Mantenimiento del contacto para que el otro siga hablando.',
        explanationHy: 'Կապի պահպանում, որպեսզի դիմացինը շարունակի խոսել։'
      },
      {
        sentence: 'Uno, dos, tres... probando el micrófono del aula.',
        armenian: 'Մեկ, երկու, երեք... ստուգում ենք դասարանի խոսափողը։',
        explanationEs: 'Prueba explícita del canal acústico.',
        explanationHy: 'Ձայնային կապուղու ակնհայտ ստուգում։'
      },
      {
        sentence: '¿Entendido, chicos?',
        armenian: 'Հասկանալի՞ է, երեխանե՛ր։',
        explanationEs: 'Comprobación de que el mensaje llega sin interferencias.',
        explanationHy: 'Ստուգում, որ հաղորդագրությունը հասնում է առանց խոտանի։'
      },
      {
        sentence: '¡Oye! ¡Eh, préstame atención un segundo!',
        armenian: 'Լսի՛ր։ Է՛յ, մեկ վայրկյան ինձ ուշադրություն դարձրու։',
        explanationEs: 'Llamada de atención para restablecer el canal.',
        explanationHy: 'Ուշադրության կոչ՝ կապը վերականգնելու համար։'
      },
      {
        sentence: '¿Me recibes, cambio?',
        armenian: 'Ինձ ընդունո՞ւմ ես, ավարտ։',
        explanationEs: 'Fórmula clásica de radiocomunicación sobre el canal.',
        explanationHy: 'Ռադիոկապի դասական ձև կապուղու վերաբերյալ։'
      },
      {
        sentence: 'Hasta la próxima semana, que descanses.',
        armenian: 'Մինչ հաջորդ շաբաթ, լավ հանգստացիր։',
        explanationEs: 'Despedida cordial que cierra el contacto.',
        explanationHy: 'Ջերմ հրաժեշտ, որը փակում է շփումը։'
      },
      {
        sentence: '¿Estás ahí todavía?',
        armenian: 'Դու դեռ այնտե՞ղ ես։',
        explanationEs: 'Comprobación de presencia física o virtual del interlocutor.',
        explanationHy: 'Զրուցակցի առկայության ստուգում։'
      },
      {
        sentence: 'Perdona que te interrumpa un momento.',
        armenian: 'Կներես, որ մի պահ ընդհատում եմ քեզ։',
        explanationEs: 'Gestión del turno de palabra sobre el canal.',
        explanationHy: 'Խոսքի հերթի կառավարում կապուղում։'
      }
    ],
    commonMistakesEs: 'Pensar que "Hola" transmite información. "Hola" no informa de nada; solo abre el canal entre dos personas.',
    commonMistakesHy: 'Կարծել, թե «Hola»-ն տեղեկություն է հաղորդում։ «Hola»-ն ոչինչ չի հաղորդում, այն պարզապես բացում է կապը երկու մարդու միջև։',
    examAdviceEs: 'Busca saludos, despedidas, "dígame", "probando sonido" y preguntas breves de confirmación ("¿verdad?", "¿me oyes?").',
    examAdviceHy: 'Փնտրիր ողջույններ, հրաժեշտներ, «dígame», ձայնի ստուգումներ և հաստատող կարճ հարցեր («ճի՞շտ է», «լսո՞ւմ ես»)։',
    simplifiedAlternativeEs: 'Es cuando dices cosas solo para comprobar que el teléfono o el micrófono funcionan, o para saludar y despedirte.',
    simplifiedAlternativeHy: 'Երբ բառեր ես ասում միայն ստուգելու համար՝ արդյոք հեռախոսը կամ միկրոֆոնն աշխատո՞ւմ են, կամ ողջունելու և հրաժեշտ տալու համար։',
    simplifiedAlternativeExample: {
      es: '¿Hola? ¿Me oyes bien?',
      hy: 'Ալո՞, ինձ լա՞վ ես լսում։'
    }
  },
  {
    id: 'func-metalinguistica',
    topicId: 'funciones',
    titleEs: '5. Función metalingüística',
    titleHy: '5. Մետալեզվական (մետալինգվիստիկ) գործառույթ',
    shortSummaryEs: 'Utiliza el propio idioma para hablar, reflexionar o explicar las reglas de la lengua.',
    shortSummaryHy: 'Օգտագործում է հենց լեզուն՝ լեզվի կանոնները բացատրելու կամ դրանց մասին խոսելու համար։',
    simpleExplanationEs: 'Se usa siempre que hablamos de palabras, ortografía, significados o gramática en clase de Lengua o en el diccionario.',
    simpleExplanationHy: 'Օգտագործվում է ամեն անգամ, երբ խոսում ենք բառերի, ուղղագրության, իմաստների կամ քերականության մասին լեզվի դասին կամ բառարանում։',
    fullDefinitionEs: 'La función metalingüística se centra en el código lingüístico (el idioma mismo). Aparece cuando empleamos la lengua para analizar, aclarar o definir elementos del propio lenguaje.',
    fullDefinitionHy: 'Մետալեզվական գործառույթը կենտրոնանում է լեզվական կոդի (հենց լեզվի) վրա։ Գործում է, երբ լեզուն գործածում ենք հենց լեզվի տարրերը վերլուծելու, պարզաբանելու կամ սահմանելու համար։',
    communicativeGoalEs: 'Aclarar significados de palabras, normas ortográficas y estructuras gramaticales.',
    communicativeGoalHy: 'Պարզաբանել բառերի իմաստները, ուղղագրական կանոնները և քերականական կառույցները։',
    targetElement: { es: 'Código', hy: 'Կոդ / Լեզվական համակարգ (Código)' },
    signalsAndTricksEs: [
      'Palabras entre comillas que se analizan: "perro", "hablar".',
      'Términos gramaticales: sustantivo, verbo, aguda, llana, sujeto, sinónimo.',
      'Definiciones de diccionario: "efímero significa que dura poco".',
      'Reglas de ortografía: "antes de p y b se escribe siempre m".'
    ],
    signalsAndTricksHy: [
      'Չակերտների մեջ առնված բառեր, որոնք վերլուծվում են՝ "perro", "hablar"։',
      'Քերականական տերմիններ՝ գոյական, բայ, շեշտ, ենթակա, հոմանիշ։',
      'Բառարանային սահմանումներ՝ «efímero նշանակում է կարճատև»։',
      'Ուղղագրական կանոններ՝ «p-ից և b-ից առաջ միշտ գրվում է m»։'
    ],
    examples: [
      {
        sentence: 'La palabra "casa" es un sustantivo femenino singular.',
        armenian: '«Casa» (տուն) բառը իգական սեռի եզակի թվով գոյական է։',
        explanationEs: 'Analiza la categoría gramatical de una palabra.',
        explanationHy: 'Վերլուծում է բառի քերականական կարգը։'
      },
      {
        sentence: 'Los verbos de la primera conjugación terminan en -ar.',
        armenian: 'Առաջին լծորդության բայերը վերջանում են -ar-ով։',
        explanationEs: 'Enuncia una regla de la morfología del idioma español.',
        explanationHy: 'Շարադրում է իսպաներենի ձևաբանական կանոն։'
      },
      {
        sentence: '"Ocaso" y "atardecer" son palabras sinónimas.',
        armenian: '«Ocaso» և «atardecer» բառերը հոմանիշներ են։',
        explanationEs: 'Explica la relación semántica entre dos vocablos.',
        explanationHy: 'Բացատրում է երկու բառերի միջև իմաստային կապը։'
      },
      {
        sentence: 'Las palabras agudas llevan tilde cuando terminan en vocal, -n o -s.',
        armenian: 'Agudas բառերը կրում են շեշտ (tilde), երբ վերջանում են ձայնավորով, -n-ով կամ -s-ով։',
        explanationEs: 'Regla de acentuación gráfica del español.',
        explanationHy: 'Իսպաներենի գրաֆիկական շեշտադրության կանոն։'
      },
      {
        sentence: '¿Qué significa la palabra "altruista"?',
        armenian: 'Ի՞նչ է նշանակում «altruista» (այլասեր) բառը։',
        explanationEs: 'Pregunta sobre el significado de un término del código.',
        explanationHy: 'Հարց լեզվական կոդի մի բառի իմաստի մասին։'
      },
      {
        sentence: 'El antónimo de "rápido" es "lento".',
        armenian: '«Rápido» (արագ) բառի հականիշն է «lento» (դանդաղ)։',
        explanationEs: 'Relación de oposición léxica.',
        explanationHy: 'Բառային հակադրության հարաբերություն։'
      },
      {
        sentence: 'La letra "h" es muda en español.',
        armenian: 'Իսպաներենում «h» տառը համր է։',
        explanationEs: 'Propiedad fonética del código escrito.',
        explanationHy: 'Գրավոր կոդի հնչյունական հատկություն։'
      },
      {
        sentence: 'El sujeto y el verbo deben concordar en número y persona.',
        armenian: 'Ենթական և բայը պետք է համաձայնեն թվով և դեմքով։',
        explanationEs: 'Regla sintáctica del idioma.',
        explanationHy: 'Լեզվի շարահյուսական կանոն։'
      },
      {
        sentence: '"Inolvidable" es una palabra derivada con el prefijo "in-".',
        armenian: '«Inolvidable»-ն ածանցավոր բառ է «in-» նախածանցով։',
        explanationEs: 'Análisis de la formación de palabras.',
        explanationHy: 'Բառակազմության վերլուծություն։'
      },
      {
        sentence: 'Los adjetivos concuerdan en género y número con el sustantivo.',
        armenian: 'Ածականները սեռով և թվով համաձայնում են գոյականի հետ։',
        explanationEs: 'Regla gramatical de concordancia nominal.',
        explanationHy: 'Գոյականական համաձայնության քերականական կանոն։'
      },
      {
        sentence: 'El diptongo es la unión de dos vocales en una misma sílaba.',
        armenian: 'Երկհնչյունը երկու ձայնավորների միացումն է մեկ վանկում։',
        explanationEs: 'Definición fonológica de la lengua.',
        explanationHy: 'Լեզվի հնչյունաբանական սահմանում։'
      },
      {
        sentence: 'En la oración «Pedro come», «Pedro» funciona como sujeto.',
        armenian: '«Pedro come» նախադասության մեջ «Pedro»-ն գործում է որպես ենթակա։',
        explanationEs: 'Análisis sintáctico explícito del idioma.',
        explanationHy: 'Լեզվի հստակ շարահյուսական վերլուծություն։'
      }
    ],
    commonMistakesEs: 'Pensar que si una frase habla de un libro o una historia es metalingüística. Para serlo debe hablar de GRAMÁTICA, ORTOGRAFÍA o SIGNIFICADO de palabras.',
    commonMistakesHy: 'Կարծել, թե եթե նախադասությունը գրքի կամ պատմության մասին է, այն metalingüística է։ Ո՛չ, այն պետք է խոսի հենց ՔԵՐԱԿԱՆՈՒԹՅԱՆ, ՈՒՂՂԱԳՐՈՒԹՅԱՆ կամ ԲԱՌԻ ԻՄԱՍՏԻ մասին։',
    examAdviceEs: 'Si ves palabras como "sustantivo", "verbo", "significa", "se escribe con b", o comillas definiendo un término, es 100% función metalingüística.',
    examAdviceHy: 'Եթե տեսնում ես այնպիսի բառեր, ինչպիսիք են «sustantivo», «verbo», «significa», «գրվում է b-ով» կամ բառի իմաստը բացատրող չակերտներ, դա 100% metalingüística է։',
    simplifiedAlternativeEs: 'Es cuando usamos las palabras para explicar cómo funcionan las propias palabras.',
    simplifiedAlternativeHy: 'Երբ բառերն օգտագործում ենք բացատրելու համար, թե ինչպես են աշխատում հենց իրենք՝ բառերը։',
    simplifiedAlternativeExample: {
      es: 'La palabra "árbol" lleva tilde porque es llana y no termina en n, s o vocal.',
      hy: '«Árbol» բառը շեշտ է կրում, որովհետև llana է և չի վերջանում n-ով, s-ով կամ ձայնավորով։'
    }
  },
  {
    id: 'func-poetica',
    topicId: 'funciones',
    titleEs: '6. Función poética o estética',
    titleHy: '6. Պոետիկ (բանաստեղծական / գեղագիտական) գործառույթ',
    shortSummaryEs: 'Busca embellecer el mensaje, llamando la atención sobre la forma y el ritmo de las palabras.',
    shortSummaryHy: 'Նպատակ ունի գեղեցկացնել հաղորդագրությունը՝ ուշադրություն հրավիրելով բառերի ձևի և ռիթմի վրա։',
    simpleExplanationEs: 'Se usa en poemas, canciones, refranes y adivinanzas para que el texto suene bonito, rime o cree imágenes hermosas.',
    simpleExplanationHy: 'Օգտագործվում է բանաստեղծություններում, երգերում, առածներում և հանելուկներում, որպեսզի տեքստը հնչի գեղեցիկ, հանգավորվի կամ գեղեցիկ պատկերներ ստեղծի։',
    fullDefinitionEs: 'La función poética o estética está centrada en el propio mensaje (en su forma, ritmo, musicalidad y recursos estilísticos). Importa no solo qué se dice, sino CÓMO se dice artísticamente.',
    fullDefinitionHy: 'Պոետիկ գործառույթը կենտրոնացած է հենց հաղորդագրության (mensaje) ձևի, ռիթմի, երաժշտականության և ոճական հնարքների վրա։ Կարևոր է ոչ միայն այն, թե ԻՆՉ է ասվում, այլ թե ԻՆՉՊԵՍ է գեղարվեստորեն ասվում։',
    communicativeGoalEs: 'Crear belleza verbal, despertar emociones estéticas y sorprender al receptor con el lenguaje.',
    communicativeGoalHy: 'Ստեղծել խոսքի գեղեցկություն, արթնացնել գեղագիտական զգացողություններ և հիացնել լեզվով։',
    targetElement: { es: 'Mensaje', hy: 'Հաղորդագրություն (Mensaje)' },
    signalsAndTricksEs: [
      'Rima y ritmo métrico.',
      'Figuras retóricas: metáforas, comparaciones, personificaciones, aliteraciones.',
      'Refranes populares con rima: «A quien madruga, Dios le ayuda».',
      'Juegos de palabras, trabalenguas y adivinanzas.',
      'Léxico sugerente, poético y connotativo.'
    ],
    signalsAndTricksHy: [
      'Հանգ և չափական ռիթմ։',
      'Ոճական պատկերավորման միջոցներ՝ փոխաբերություններ, համեմատություններ, անձնավորումներ։',
      'Ժողովրդական առածներ հանգով՝ «A quien madruga, Dios le ayuda» (Ով վաղ է արթնանում, Աստված նրան օգնում է)։',
      'Բառախաղեր, շուտասելուկներ և հանելուկներ։',
      'Պատկերավոր, բանաստեղծական բառապաշար։'
    ],
    examples: [
      {
        sentence: 'Tus ojos son dos luceros que iluminan mi sendero.',
        armenian: 'Քո աչքերը երկու լուսատուներ են, որոնք լուսավորում են իմ ճանապարհը։',
        explanationEs: 'Metáfora poética clásica que embellece el mensaje.',
        explanationHy: 'Դասական բանաստեղծական փոխաբերություն, որը գեղեցկացնում է խոսքը։'
      },
      {
        sentence: 'Tres tristes tigres comen trigo en un trigal.',
        armenian: 'Երեք տխուր վագր ցորեն են ուտում ցորենի դաշտում։',
        explanationEs: 'Trabalenguas basado en la aliteración del sonido "tr".',
        explanationHy: 'Շուտասելուկ՝ հիմնված «tr» հնչյունի կրկնության (ալիտերացիայի) վրա։'
      },
      {
        sentence: 'En abril, aguas mil.',
        armenian: 'Ապրիլին՝ հազարավոր ջրեր (հորդ անձրևներ)։',
        explanationEs: 'Refrán popular tradicional con rima asonante.',
        explanationHy: 'Հանգավոր ժողովրդական ավանդական ասացվածք։'
      },
      {
        sentence: 'El susurro del viento mecía las ramas dormidas.',
        armenian: 'Քամու շշուկը օրորում էր քնած ճյուղերը։',
        explanationEs: 'Personificación de la naturaleza con valor artístico.',
        explanationHy: 'Բնության անձնավորում՝ գեղարվեստական արժեքով։'
      },
      {
        sentence: 'Verde que te quiero verde. Verde viento. Verdes ramas.',
        armenian: 'Կանաչ, որքան եմ քեզ սիրում կանաչ։ Կանաչ քամի։ Կանաչ ճյուղեր։ (Լորկա)',
        explanationEs: 'Famosos versos de Federico García Lorca centrados en la música de las palabras.',
        explanationHy: 'Ֆեդերիկո Գարսիա Լորկայի հայտնի տողերը՝ կենտրոնացած բառերի երաժշտության վրա։'
      },
      {
        sentence: 'Oro parece, plata no es; quien no lo adivine, bien tonto es.',
        armenian: 'Ոսկի է թվում, արծաթ չէ. ով չգուշակի, միամիտ է (Բանան)։',
        explanationEs: 'Adivinanza en verso rimado.',
        explanationHy: 'Հանելուկ՝ հանգավորված տողերով։'
      },
      {
        sentence: 'Caminante, no hay camino, se hace camino al andar.',
        armenian: 'Ճամփորդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս։ (Մաչադո)',
        explanationEs: 'Pensamiento poético y rítmico de Antonio Machado.',
        explanationHy: 'Անտոնիո Մաչադոյի բանաստեղծական և ռիթմիկ խորհրդածությունը։'
      },
      {
        sentence: 'La noche estrellada vestía de plata el viejo tejado.',
        armenian: 'Աստղազարդ գիշերը արծաթով էր պատում հին տանիքը։',
        explanationEs: 'Imagen literaria estética.',
        explanationHy: 'Գրական գեղագիտական պատկեր։'
      },
      {
        sentence: 'Blanco es el lirio, blanca la nieve, pura la niña que amor no tiene.',
        armenian: 'Սպիտակ է շուշանը, սպիտակ՝ ձյունը, մաքուր՝ աղջիկը, որ դեռ սեր չունի։',
        explanationEs: 'Paralelismo y ritmo poético lírico.',
        explanationHy: 'Զուգահեռականություն և քնարական բանաստեղծական ռիթմ։'
      },
      {
        sentence: 'Del dicho al hecho hay un gran trecho.',
        armenian: 'Ասելուց մինչև անելը մեծ հեռավորություն կա։',
        explanationEs: 'Refrán con musicalidad rítmica.',
        explanationHy: 'Ասացվածք՝ ռիթմիկ երաժշտականությամբ։'
      },
      {
        sentence: 'El tiempo vuela como una flecha dorada.',
        armenian: 'Ժամանակը սլանում է ինչպես ոսկե նետը։',
        explanationEs: 'Comparación literaria evocadora.',
        explanationHy: 'Պատկերավոր գրական համեմատություն։'
      },
      {
        sentence: 'Las perlas de tu sonrisa iluminan la estancia.',
        armenian: 'Քո ժպիտի մարգարիտները լուսավորում են սենյակը։',
        explanationEs: 'Metáfora que asocia los dientes con perlas.',
        explanationHy: 'Փոխաբերություն, որն ատամները նմանեցնում է մարգարիտների։'
      }
    ],
    commonMistakesEs: 'Creer que la función poética solo aparece en libros de poesía antiguos. También está en la publicidad ("Red Bull te da alas"), trabalenguas, canciones de rap y refranes.',
    commonMistakesHy: 'Կարծել, թե պոետիկ գործառույթը միայն հին պոեզիայի գրքերում է։ Այն առկա է նաև գովազդներում, շուտասելուկներում, երգերում և առածներում։',
    examAdviceEs: 'Busca rima, versos, comparaciones ("como"), metáforas ("tus ojos son luceros") o refranes populares.',
    examAdviceHy: 'Փնտրիր հանգեր, բանաստեղծական տողեր, համեմատություններ («ինչպես»), փոխաբերություններ կամ առած-ասացվածքներ։',
    simplifiedAlternativeEs: 'Es cuando las palabras juegan a rimar o a sonar bonitas como una canción o un poema.',
    simplifiedAlternativeHy: 'Երբ բառերը հանգավորվում են կամ գեղեցիկ հնչում՝ ինչպես երգում կամ բանաստեղծության մեջ։',
    simplifiedAlternativeExample: {
      es: 'La primavera ha venido, nadie sabe cómo ha sido.',
      hy: 'Գարունը եկել է, ոչ ոք չգիտի, թե ինչպես է դա եղել։'
    }
  }
];
