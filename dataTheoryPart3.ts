import { TheoryLesson } from './types';

export const theoryPart3: TheoryLesson[] = [
  // TEMA 4: CATEGORÍAS GRAMATICALES
  {
    id: 'cat-sustantivo',
    topicId: 'categorias',
    titleEs: '1. El sustantivo o nombre',
    titleHy: '1. Գոյական անուն (El sustantivo)',
    shortSummaryEs: 'Palabra variable que nombra a personas, animales, cosas, lugares, ideas o sentimientos.',
    shortSummaryHy: 'Փոփոխական բառ, որն անվանում է մարդկանց, կենդանիներին, իրերը, վայրերը, գաղափարները կամ զգացմունքները։',
    simpleExplanationEs: 'Es la palabra que le da nombre a todo lo que existe en el mundo o en nuestra cabeza: perro, mesa, alegría, Madrid.',
    simpleExplanationHy: 'Այն բառն է, որով անվանում ենք աշխարհում կամ մեր մտքում գոյություն ունեցող ամեն ինչ՝ շուն, սեղան, ուրախություն, Մադրիդ։',
    fullDefinitionEs: 'El sustantivo es una categoría gramatical variable con morfemas de género (masculino/femenino) y número (singular/plural). Sintácticamente funciona como núcleo del sintagma nominal y del sujeto.',
    fullDefinitionHy: 'Գոյականը փոփոխական խոսքի մաս է՝ սեռի (արական/իգական) և թվի (եզակի/հոգնակի) ձևույթներով։ Շարահյուսորեն գործում է որպես գոյականական կապակցության և ենթակայի միջուկ։',
    communicativeGoalEs: 'Designar e identificar realidades del mundo real o imaginario.',
    communicativeGoalHy: 'Անվանել և նույնականացնել իրական կամ երևակայական աշխարհի իրողությունները։',
    signalsAndTricksEs: [
      'Puede llevar delante un artículo: el gato, la casa, los libros.',
      'Clases: Común (perro) / Propio (Toby, España); Concreto (árbol) / Abstracto (justicia); Contable (moneda) / Incontable (dinero); Individual (oveja) / Colectivo (rebaño).',
      'Concuerda con determinantes y adjetivos en género y número.'
    ],
    signalsAndTricksHy: [
      'Առջևում կարող է ունենալ հոդ (artículo)՝ el gato, la casa, los libros:',
      'Տեսակները՝ Հասարակ (perro) / Հատուկ (Toby, España), Թանձրացական (árbol) / Վերացական (justicia), Հաշվելի (moneda) / Անհաշվելի (dinero), Եզակի-անհատական (oveja) / Հավաքական (rebaño)։',
      'Սեռով և թվով համաձայնում է հոդերի և ածականների հետ։'
    ],
    examples: [
      {
        sentence: 'El perro de mi vecino corretea alegremente.',
        armenian: 'Իմ հարևանի շունն ուրախ վազվզում է։',
        explanationEs: '"Perro" y "vecino" son sustantivos comunes, masculinos y singulares.',
        explanationHy: '«Perro» (շուն) և «vecino» (հարևան) հասարակ, արական, եզակի գոյականներ են։'
      },
      {
        sentence: 'La amistad verdadera supera cualquier obstáculo.',
        armenian: 'Իսկական ընկերությունը հաղթահարում է ցանկացած խոչընդոտ։',
        explanationEs: '"Amistad" es un sustantivo común, abstracto y femenino singular.',
        explanationHy: '«Amistad»-ը (ընկերություն) հասարակ, վերացական, իգական եզակի գոյական է։'
      },
      {
        sentence: 'El enjambre de abejas zumbaba en el bosque.',
        armenian: 'Մեղուների պարսը բզզում էր անտառում։',
        explanationEs: '"Enjambre" es sustantivo colectivo (un grupo de abejas en singular).',
        explanationHy: '«Enjambre»-ը հավաքական գոյական է (մեղուների խումբը եզակի թվով)։'
      },
      {
        sentence: 'Lucas visitó París durante las vacaciones pasadas.',
        armenian: 'Լուկասն այցելեց Փարիզ անցած արձակուրդների ժամանակ։',
        explanationEs: '"Lucas" y "París" son sustantivos propios (empiezan con mayúscula).',
        explanationHy: '«Lucas» և «París» հատուկ գոյականներ են (մեծատառով)։'
      }
    ],
    commonMistakesEs: 'Confundir un sustantivo abstracto ("belleza") con un adjetivo ("bello"). Prueba el truco: si puedes poner "la" delante ("la belleza"), es un sustantivo.',
    commonMistakesHy: 'Վերացական գոյականը («belleza» - գեղեցկություն) ածականի հետ («bello» - գեղեցիկ) շփոթելը։ Ստուգիր հնարքով. եթե առջևում կարող ես դնել «la» («la belleza»), դա գոյական է։',
    examAdviceEs: 'Pregúntate: ¿puedo poner "el" o "la" delante? Si la respuesta es sí, es un sustantivo.',
    examAdviceHy: 'Հարցրու քեզ. կարո՞ղ եմ առաջ դնել «el» կամ «la»։ Եթե այո, ապա դա գոյական է։',
    simplifiedAlternativeEs: 'Palabras que nombran personas, cosas o animales que puedes ver o pensar.',
    simplifiedAlternativeHy: 'Բառեր, որոնք անվանում են մարդկանց, իրեր կամ կենդանիներ, որոնց կարող ես տեսնել կամ պատկերացնել։',
    simplifiedAlternativeExample: {
      es: 'La mesa de madera tiene cuatro patas.',
      hy: 'Փայտե սեղանն ունի չորս ոտք։'
    }
  },
  {
    id: 'cat-adjetivo',
    topicId: 'categorias',
    titleEs: '2. El adjetivo calificativo y sus grados',
    titleHy: '2. Որակական ածականը և նրա աստիճանները (El adjetivo)',
    shortSummaryEs: 'Acompaña al sustantivo para expresar sus cualidades o estados.',
    shortSummaryHy: 'Ուղեկցում է գոյականին՝ արտահայտելով նրա հատկանիշներն ու որակները։',
    simpleExplanationEs: 'Nos dice cómo es o cómo está una persona, un animal o una cosa: alto, simpático, cansado, rojo.',
    simpleExplanationHy: 'Մեզ ասում է, թե ինչպիսին է մարդը, կենդանին կամ իրը՝ բարձր, համակրելի, հոգնած, կարմիր։',
    fullDefinitionEs: 'El adjetivo es una palabra variable que complementa al sustantivo concordando con él en género y número. Admite grados de significación: positivo (alto), comparativo (más alto que, tan alto como, menos alto que) y superlativo (altísimo, muy alto).',
    fullDefinitionHy: 'Ածականը փոփոխական բառ է, որը լրացնում է գոյականին՝ նրա հետ համաձայնելով սեռով և թվով։ Ունի համեմատության աստիճաններ՝ դրական (alto), բաղդատական (más alto que, tan alto como) և գերադրական (altísimo, muy alto)։',
    communicativeGoalEs: 'Describir, calificar y matizar las características de los seres y objetos.',
    communicativeGoalHy: 'Նկարագրել, բնութագրել և ճշգրտել էակների և առարկաների հատկանիշները։',
    signalsAndTricksEs: [
      'Concuerda siempre con el sustantivo: gato negro / gatas negras.',
      'Grado positivo: cualidad simple (bueno, inteligente).',
      'Grado comparativo: superioridad (más... que), igualdad (tan... como), inferioridad (menos... que).',
      'Grado superlativo: absoluto (-ísimo, muy...) o relativo (el más... de).'
    ],
    signalsAndTricksHy: [
      'Միշտ համաձայնում է գոյականի հետ՝ gato negro / gatas negras:',
      'Դրական աստիճան՝ պարզ որակ (bueno, inteligente)։',
      'Բաղդատական աստիճան՝ առավելական (más... que), հավասարական (tan... como), նվազական (menos... que)։',
      'Գերադրական աստիճան՝ բացարձակ (-ísimo, muy...) կամ հարաբերական (el más... de)։'
    ],
    examples: [
      {
        sentence: 'El águila imperial vuela sobre las altas montañas.',
        armenian: 'Արքայական արծիվը սավառնում է բարձր լեռների վրայով։',
        explanationEs: '"Imperial" y "altas" son adjetivos calificativos en grado positivo.',
        explanationHy: '«Imperial» և «altas» որակական ածականներ են դրական աստիճանում։'
      },
      {
        sentence: 'Este ejercicio es más fácil que el anterior.',
        armenian: 'Այս վարժությունն ավելի հեշտ է, քան նախորդը։',
        explanationEs: '"Más fácil que" es comparativo de superioridad.',
        explanationHy: '«Más fácil que» առավելական բաղդատական աստիճան է։'
      },
      {
        sentence: 'Mi abuela cocina una sopa riquísima.',
        armenian: 'Իմ տատիկը չափազանց համեղ ապուր է եփում։',
        explanationEs: '"Riquísima" es un adjetivo superlativo absoluto con sufijo -ísima.',
        explanationHy: '«Riquísima» բացարձակ գերադրական ածական է -ísima վերջածանցով։'
      },
      {
        sentence: 'Mateo es tan alto como su primo mayor.',
        armenian: 'Մատեոն նույնքան բարձրահասակ է, որքան իր ավագ զարմիկը։',
        explanationEs: '"Tan alto como" es comparativo de igualdad.',
        explanationHy: '«Tan alto como» հավասարական բաղդատական աստիճան է։'
      }
    ],
    commonMistakesEs: 'Confundir un adjetivo con un adverbio. El adjetivo CAMBIA de género y número ("chico rápido / chica rápida"), mientras que el adverbio nunca cambia ("corre rápido / corren rápido").',
    commonMistakesHy: 'Ածականը մակբայի հետ շփոթելը։ Ածականը ՓՈԽՎՈՒՄ Է սեռով և թվով («chico rápido / chica rápida»), իսկ մակբայն անփոփոխ է («corre rápido / corren rápido»)։',
    examAdviceEs: 'Si la palabra cambia cuando pones el sustantivo en plural o femenino, es un adjetivo.',
    examAdviceHy: 'Եթե բառը փոխվում է, երբ գոյականը դնում ես հոգնակի կամ իգական, ուրեմն դա ածական է։',
    simplifiedAlternativeEs: 'Palabras que explican cómo es algo: grande, pequeño, divertido o azul.',
    simplifiedAlternativeHy: 'Բառեր, որոնք բացատրում են, թե ինչպիսին է մի բան՝ մեծ, փոքր, զվարճալի կամ կապույտ։',
    simplifiedAlternativeExample: {
      es: 'Compré una manzana roja y dulce.',
      hy: 'Ես գնեցի կարմիր ու քաղցր խնձոր։'
    }
  },
  {
    id: 'cat-determinante',
    topicId: 'categorias',
    titleEs: '3. Determinantes y artículos (vs pronombres)',
    titleHy: '3. Որոշիչներ/դետերմինատիվներ և հոդեր (ընդդեմ դերանունների)',
    shortSummaryEs: 'Acompañan al sustantivo para concretarlo y delimitarlo. El pronombre lo sustituye.',
    shortSummaryHy: 'Ուղեկցում են գոյականին՝ որոշյալ դարձնելով այն։ Դերանունը փոխարինում է նրան։',
    simpleExplanationEs: 'EL GRAN TRUCO: Si la palabra va DELANTE de un sustantivo ("mi libro"), es DETERMINANTE. Si va SOLA sustituyendo al nombre ("el mío"), es PRONOMBRE.',
    simpleExplanationHy: 'ՄԵԾ ՀՆԱՐՔԸ. Եթե բառը գրված է գոյականից ԱՌԱՋ («mi libro»), այն DETERMINANTE է։ Իսկ եթե այն ՄԵՆԱԿ Է՝ փոխարինելով գոյականին («el mío»), այն PRONOMBRE (դերանուն) է։',
    fullDefinitionEs: 'Los determinantes son palabras que preceden al sustantivo para actualizarlo y delimitar su extensión. Tipos: artículos (el, la, los, las / un, una), demostrativos (este, ese, aquel), posesivos (mi, tu, su, nuestro), numerales (uno, dos, primero), indefinidos (muchos, algunos) e interrogativos/exclamativos (¿qué?, ¡cuánta!).',
    fullDefinitionHy: 'Դետերմինատիվները բառեր են, որոնք նախորդում են գոյականին՝ ճշգրտելու նրա շրջանակը։ Տեսակներ՝ հոդեր (artículos), ցուցականներ (este, ese, aquel), ստացականներ (mi, tu, su), թվականներ (uno, dos), անորոշներ (muchos), հարցական/բացականչական (qué, cuánta)։',
    communicativeGoalEs: 'Identificar con precisión a qué objeto o persona exacta nos referimos.',
    communicativeGoalHy: 'Ճշգրիտ նշել, թե կոնկրետ որ առարկային կամ անձին նկատի ունենք։',
    signalsAndTricksEs: [
      'Determinante + Sustantivo: «ESTE chico es mi amigo». (Acompaña)',
      'Pronombre (va solo): «ESTE es mi amigo». (Sustituye)',
      'Artículos determinados: el, la, los, las (algo conocido).',
      'Artículos indeterminados: un, una, unos, unas (algo nuevo).'
    ],
    signalsAndTricksHy: [
      'Որոշիչ + Գոյական՝ «ESTE chico es mi amigo» (Ուղեկցում է)։',
      'Դերանուն (մենակ է)՝ «ESTE es mi amigo» (Փոխարինում է)։',
      'Որոշյալ հոդեր՝ el, la, los, las (հայտնի բան)։',
      'Անորոշ հոդեր՝ un, una, unos, unas (անծանոթ/նոր բան)։'
    ],
    examples: [
      {
        sentence: 'Mi hermano compró dos entradas para el concierto.',
        armenian: 'Իմ եղբայրը համերգի համար երկու տոմս գնեց։',
        explanationEs: '"Mi" (det. posesivo), "dos" (det. numeral) y "el" (artículo determinado).',
        explanationHy: '«Mi» (ստացական), «dos» (թվական) և «el» (որոշյալ հոդ) որոշիչներ են։'
      },
      {
        sentence: 'Ese reloj es muy bonito, pero prefiero este.',
        armenian: 'Այդ ժամացույցը շատ գեղեցիկ է, բայց ես նախընտրում եմ սա։',
        explanationEs: '"Ese" es determinante (acompaña a "reloj"). "Este" va solo al final, por lo que es PRONOMBRE.',
        explanationHy: '«Ese»-ն դետերմինատիվ է (ուղեկցում է «reloj»-ին)։ Իսկ «este»-ն մենակ է վերջում, ուստի ԴԵՐԱՆՈՒՆ է։'
      },
      {
        sentence: 'Algunos alumnos llegaron tarde al aula.',
        armenian: 'Որոշ աշակերտներ ուշացումով եկան դասարան։',
        explanationEs: '"Algunos" acompaña a "alumnos": determinante indefinido.',
        explanationHy: '«Algunos»-ը ուղեկցում է «alumnos»-ին՝ անորոշ որոշիչ։'
      },
      {
        sentence: '¿Cuántos libros has leído este mes?',
        armenian: 'Քանի՞ գիրք ես կարդացել այս ամիս։',
        explanationEs: '"Cuántos" (det. interrogativo) y "este" (det. demostrativo).',
        explanationHy: '«Cuántos» (հարցական որոշիչ) և «este» (ցուցական որոշիչ)։'
      }
    ],
    commonMistakesEs: 'Llamar pronombre a una palabra que lleva un sustantivo detrás. Si hay un sustantivo pegado, ¡NUNCA es un pronombre!',
    commonMistakesHy: 'Դերանուն անվանել այն բառը, որի կողքին գոյական կա։ Եթե կողքին գոյական կա, այն ԵՐԲԵՔ դերանուն չէ։',
    examAdviceEs: 'Comprueba siempre la palabra que viene inmediatamente después. Si es un sustantivo, es determinante.',
    examAdviceHy: 'Միշտ ստուգիր անմիջապես հաջորդող բառը։ Եթե այն գոյական է, ուրեմն դետերմինատիվ է։',
    simplifiedAlternativeEs: 'Palabritas que van pegadas antes de una cosa para decir de quién es o cuántas hay.',
    simplifiedAlternativeHy: 'Փոքրիկ բառեր, որոնք դրվում են իրից առաջ՝ ասելու ումն է կամ քանիսն են։',
    simplifiedAlternativeExample: {
      es: 'Nuestra casa tiene tres habitaciones.',
      hy: 'Մեր տունն ունի երեք սենյակ։'
    }
  },
  {
    id: 'cat-verbo',
    topicId: 'categorias',
    titleEs: '4. El verbo y el núcleo verbal',
    titleHy: '4. Բայը և բայական միջուկը (El verbo)',
    shortSummaryEs: 'Palabra que expresa acciones, procesos o estados. Es el núcleo indiscutible del predicado.',
    shortSummaryHy: 'Բառ, որն արտահայտում է գործողություններ, գործընթացներ կամ վիճակներ։ Ստորոգյալի անվիճելի միջուկն է։',
    simpleExplanationEs: 'Es el motor de la oración. Sin verbo casi nunca hay oración completa. Nos dice qué hace o qué le pasa a alguien.',
    simpleExplanationHy: 'Նախադասության շարժիչն է։ Առանց բայի գրեթե երբեք ամբողջական նախադասություն չի լինում։ Ասում է՝ ինչ է անում կամ ինչ է պատահում ինչ-որ մեկի հետ։',
    fullDefinitionEs: 'El verbo es la clase de palabra más variable: se compone de raíz (significado léxico) y desinencias (aportan persona, número, tiempo, modo y aspecto). Se divide en formas personales (conjugadas) y no personales (infinitivo -ar/-er/-ir, gerundio -ando/-iendo, participio -ado/-ido).',
    fullDefinitionHy: 'Բայը ամենափոփոխական խոսքի մասն է. կազմված է արմատից (բառային իմաստ) և վերջավորություններից (դեմք, թիվ, ժամանակ, եղանակ, կերպ)։ Բաժանվում է դիմավոր ձևերի և անդեմ ձևերի (ինֆինիտիվ՝ -ar/-er/-ir, գերունդիում՝ -ando/-iendo, դերբայ/պարտիցիպ՝ -ado/-ido)։',
    communicativeGoalEs: 'Situar acciones, procesos o estados en un tiempo concreto (pasado, presente o futuro).',
    communicativeGoalHy: 'Գործողությունները, գործընթացները կամ վիճակները տեղադրել կոնկրետ ժամանակում (անցյալ, ներկա կամ ապառնի)։',
    signalsAndTricksEs: [
      'Núcleo del predicado (N o NV).',
      'Formas no personales: Infinitivo (cantar), Gerundio (cantando), Participio (cantado).',
      'Tres conjugaciones: 1.ª (-ar: amar), 2.ª (-er: temer), 3.ª (-ir: partir).',
      'Copulativos (ser, estar, parecer) vs Predicativos (todos los demás).'
    ],
    signalsAndTricksHy: [
      'Ստորոգյալի միջուկն է (N կամ NV)։',
      'Անդեմ ձևեր՝ Ինֆինիտիվ (երգել), Գերունդիում (երգելով), Հարակատար դերբայ (երգած)։',
      'Երեք լծորդություններ՝ 1-ին (-ar), 2-րդ (-er), 3-րդ (-ir)։',
      'Կապակցող բայեր (ser, estar, parecer) ընդդեմ ստորոգիչ բայերի (մնացած բոլորը)։'
    ],
    examples: [
      {
        sentence: 'Nosotros escribimos una carta para el director.',
        armenian: 'Մենք նամակ գրեցինք տնօրենի համար։',
        explanationEs: '"Escribimos": 1.ª persona del plural, presente o pretérito perfecto simple de indicativo.',
        explanationHy: '«Escribimos»՝ հոգնակի 1-ին դեմք, սահմանական եղանակ։'
      },
      {
        sentence: 'El profesor parecía cansado después de la excursión.',
        armenian: 'Ուսուցիչը հոգնած էր թվում էքսկուրսիայից հետո։',
        explanationEs: '"Parecía" es un verbo copulativo en pretérito imperfecto.',
        explanationHy: '«Parecía» կապակցող (copulativo) բայ է անկատար անցյալում։'
      },
      {
        sentence: 'Los niños están jugando en el patio del colegio.',
        armenian: 'Երեխաները խաղում են դպրոցի բակում։',
        explanationEs: '"Están jugando" forma una perífrasis verbal continua que funciona como un único núcleo verbal.',
        explanationHy: '«Están jugando» կազմում է բայական հարակատար կառույց, որը գործում է որպես մեկ բայական միջուկ։'
      }
    ],
    commonMistakesEs: 'Pensar que las formas en infinitivo ("cantar") pueden ser el verbo principal conjugado de una oración independiente.',
    commonMistakesHy: 'Կարծել, թե ինֆինիտիվ ձևերը («cantar») կարող են լինել անկախ նախադասության հիմնական դիմավոր բայը։',
    examAdviceEs: 'Para encontrar el sujeto, localiza siempre primero el VERBO y cambia su número (de singular a plural). Lo que cambie obligatoriamente será el sujeto.',
    examAdviceHy: 'Ենթական գտնելու համար միշտ նախ գտիր ԲԱՅԸ և փոխիր նրա թիվը (եզակիից հոգնակի)։ Այն բառը, որը պարտադիր կփոխվի, կլինի ենթական։',
    simplifiedAlternativeEs: 'La palabra de acción: correr, saltar, pensar, comer, ser o estar.',
    simplifiedAlternativeHy: 'Գործողության բառը՝ վազել, ցատկել, մտածել, ուտել, լինել։',
    simplifiedAlternativeExample: {
      es: 'Marta baila flamenco con gran pasión.',
      hy: 'Մարթան մեծ կրքով ֆլամենկո է պարում։'
    }
  },
  {
    id: 'cat-adverbio',
    topicId: 'categorias',
    titleEs: '5. El adverbio',
    titleHy: '5. Մակբայ (El adverbio)',
    shortSummaryEs: 'Palabra invariable que complementa a un verbo, a un adjetivo o a otro adverbio.',
    shortSummaryHy: 'Անփոփոխ բառ, որը լրացնում է բային, ածականին կամ մեկ այլ մակբայի։',
    simpleExplanationEs: 'No tiene ni masculino ni femenino, ni singular ni plural. Dice dónde, cuándo, cómo o cuánto ocurre algo.',
    simpleExplanationHy: 'Չունի ո՛չ արական կամ իգական սեռ, ո՛չ եզակի կամ հոգնակի թիվ։ Ասում է՝ որտեղ, երբ, ինչպես կամ ինչքան է կատարվում մի բան։',
    fullDefinitionEs: 'El adverbio es una palabra invariable (carece de desinencias de género y número). Semánticamente indica circunstancias: lugar (aquí, allí), tiempo (hoy, mañana), modo (bien, mal, rápidamente), cantidad (mucho, poco), afirmación (sí, también), negación (no, jamás) o duda (quizás). Sintácticamente suele funcionar como Complemento Circunstancial (CC).',
    fullDefinitionHy: 'Մակբայն անփոփոխ խոսքի մաս է (չունի սեռի և թվի վերջավորություններ)։ Իմաստով ցույց է տալիս հանգամանքներ՝ տեղի (aquí), ժամանակի (hoy), ձևի (bien, rápidamente), չափի (mucho), հաստատման (sí), ժխտման (no) կամ երկբայության (quizás)։ Շարահյուսորեն գործում է որպես պարագա (CC)։',
    communicativeGoalEs: 'Precisar las circunstancias de tiempo, espacio, modo o grado de una acción o cualidad.',
    communicativeGoalHy: 'Ճշգրտել գործողության կամ հատկանիշի ժամանակի, տարածության, ձևի կամ չափի հանգամանքները։',
    signalsAndTricksEs: [
      'Invariable: jamás se le añade "-s" para hacer plural.',
      'Muchos terminan en el sufijo "-mente": rápidamente, lentamente, fácilmente.',
      'Modifica a: 1. Verbo («corre mucho»), 2. Adjetivo («muy alto»), 3. Adverbio («bastante cerca»).'
    ],
    signalsAndTricksHy: [
      'Անփոփոխ է. նրան երբեք չի ավելացվում «-s» հոգնակիի համար։',
      'Շատերը վերջանում են «-mente» վերջածանցով՝ rápidamente, lentamente։',
      'Լրացնում է. 1. Բային («corre mucho»), 2. Ածականին («muy alto»), 3. Մակբային («bastante cerca»)։'
    ],
    examples: [
      {
        sentence: 'El autobús llegó demasiado tarde a la parada.',
        armenian: 'Ավտոբուսը չափազանց ուշ հասավ կանգառին։',
        explanationEs: '"Demasiado" (adv. de cantidad) modifica a "tarde" (adv. de tiempo).',
        explanationHy: '«Demasiado» (քանակի մակբայ) լրացնում է «tarde» (ժամանակի մակբայ) բառին։'
      },
      {
        sentence: 'Ellos viven bastante cerca del instituto.',
        armenian: 'Նրանք դպրոցին բավականին մոտ են ապրում։',
        explanationEs: '"Bastante" (adv. cantidad) y "cerca" (adv. lugar).',
        explanationHy: '«Bastante» (քանակ) և «cerca» (տեղ) մակբայներ են։'
      },
      {
        sentence: 'La tortuga camina muy lentamente por la hierba.',
        armenian: 'Կրիան շատ դանդաղ է քայլում խոտերի վրայով։',
        explanationEs: '"Muy" (adv. cantidad) y "lentamente" (adv. de modo acabado en -mente).',
        explanationHy: '«Muy» (քանակ) և «lentamente» (ձևի մակբայ՝ -mente-ով)։'
      }
    ],
    commonMistakesEs: 'Confundir "mucho" como adjetivo con "mucho" como adverbio. "Comió muchas manzanas" (cambia = adjetivo determinante). "Trabajó mucho" (no cambia = adverbio).',
    commonMistakesHy: '«Mucho» ածականը շփոթել «mucho» մակբայի հետ։ «Comió muchas manzanas» (փոխվում է = որոշիչ/ածական)։ «Trabajó mucho» (չի փոխվում = մակբայ)։',
    examAdviceEs: 'Si intentas poner la palabra en plural y suena mal ("llegaron tardees"), es un adverbio invariable.',
    examAdviceHy: 'Եթե փորձես բառը դնել հոգնակի և այն տարօրինակ հնչի, ուրեմն դա անփոփոխ մակբայ է։',
    simplifiedAlternativeEs: 'Palabras fijas que explican cuándo, dónde, cómo o cuánto.',
    simplifiedAlternativeHy: 'Հաստատուն բառեր, որոնք բացատրում են՝ երբ, որտեղ, ինչպես կամ որքան։',
    simplifiedAlternativeExample: {
      es: 'Ayer comimos fuera de casa.',
      hy: 'Երեկ մենք տնից դուրս ճաշեցինք։'
    }
  },
  {
    id: 'cat-preposicion',
    topicId: 'categorias',
    titleEs: '6. Preposiciones y conjunciones',
    titleHy: '6. Նախդիրներ (նախադրություններ) և շաղկապներ',
    shortSummaryEs: 'Palabras invariables que unen y relacionan otras palabras o proposiciones.',
    shortSummaryHy: 'Անփոփոխ բառեր, որոնք կապում և հարաբերակցում են այլ բառեր կամ նախադասություններ։',
    simpleExplanationEs: 'Son los puentes del idioma. Sirven para enganchar unas palabras con otras para que la frase tenga sentido.',
    simpleExplanationHy: 'Լեզվի կամուրջներն են։ Ծառայում են բառերը միմյանց կապելու համար, որպեսզի նախադասությունն իմաստ ունենա։',
    fullDefinitionEs: 'Las preposiciones son una lista cerrada de palabras invariables que introducen un complemento (sintagma preposicional). La lista oficial de la RAE es: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus, vía. Las conjunciones enlazan palabras u oraciones: copulativas (y, e, ni), disyuntivas (o, u), adversativas (pero, sino), causales (porque), etc.',
    fullDefinitionHy: 'Նախդիրները անփոփոխ բառերի փակ ցանկ են, որոնք ներմուծում են լրացում (sintagma preposicional)։ Իսպաներենի պաշտոնական ցանկն է՝ a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras... Շաղկապները կապում են բառեր կամ նախադասություններ՝ համադասական (y, e, ni), տրոհական (o, u), ներհակական (pero, sino), պատճառական (porque) և այլն։',
    communicativeGoalEs: 'Establecer relaciones lógicas, temporales, espaciales y de causa entre ideas.',
    communicativeGoalHy: 'Ստեղծել տրամաբանական, ժամանակային, տարածական և պատճառական կապեր մտքերի միջև։',
    signalsAndTricksEs: [
      'Preposiciones típicas: a, con, de, en, para, por, sobre, sin.',
      'Conjunciones comunes: y, e, ni (unen sumando); o, u (eligen opción); pero, sino (oponen ideas); porque (indica motivo).',
      'Interjecciones: ¡ay!, ¡uf!, ¡hola!, ¡bravo! (expresan emociones vivas).'
    ],
    signalsAndTricksHy: [
      'Տիպիկ նախդիրներ՝ a (դեպի), con (հետ), de (-ից/մասին), en (մեջ), para (համար), por (պատճառով), sobre (վրա), sin (առանց)։',
      'Տարածված շաղկապներ՝ y/e (և), ni (ո՛չ), o/u (կամ), pero/sino (բայց), porque (որովհետև)։',
      'Ձայնարկություններ՝ ¡ay!, ¡uf!, ¡bravo! (արտահայտում են կենդանի հույզեր)։'
    ],
    examples: [
      {
        sentence: 'Viajamos desde Madrid hasta Sevilla en tren de alta velocidad.',
        armenian: 'Մենք Մադրիդից մինչև Սևիլիա ճամփորդեցինք արագընթաց գնացքով։',
        explanationEs: '"Desde", "hasta" y "en" son tres preposiciones.',
        explanationHy: '«Desde» (սկսած), «hasta» (մինչև) և «en» (մեջ/ով) երեք նախդիրներ են։'
      },
      {
        sentence: 'Estudió mucho pero no aprobó porque el examen era complicadísimo.',
        armenian: 'Նա շատ սովորեց, բայց չհանձնեց, որովհետև քննությունը չափազանց բարդ էր։',
        explanationEs: '"Pero" es conjunción adversativa y "porque" es conjunción causal.',
        explanationHy: '«Pero»-ն ներհակական շաղկապ է, իսկ «porque»-ն՝ պատճառական շաղկապ։'
      },
      {
        sentence: '¡Ay, qué daño me he hecho en el dedo con la grapadora!',
        armenian: 'Վա՜յ, ինչպիսի՜ ցավ պատճառեցի մատիս կարիչով։',
        explanationEs: '"¡Ay!" es una interjección propia que expresa dolor.',
        explanationHy: '«¡Ay!»-ը ցավ արտահայտող բուն ձայնարկություն է։'
      }
    ],
    commonMistakesEs: 'Confundir la preposición "para" con una forma del verbo parar ("él para el coche"). Fíjate en el sentido de la frase.',
    commonMistakesHy: '«Para» նախդիրը շփոթել «parar» (կանգնեցնել) բայի հետ («él para el coche»)։ Ուշադրություն դարձրու նախադասության իմաստին։',
    examAdviceEs: 'Apréndete de memoria las preposiciones más habituales: a, con, de, en, para, por, sobre.',
    examAdviceHy: 'Անգիր սովորիր առավել գործածական նախդիրները՝ a, con, de, en, para, por, sobre։',
    simplifiedAlternativeEs: 'Palabras cortitas que sirven para unir cosas como "en", "con", "y" o "pero".',
    simplifiedAlternativeHy: 'Կարճ բառեր, որոնք ծառայում են կապելու համար, ինչպես «en», «con», «y» կամ «pero»։',
    simplifiedAlternativeExample: {
      es: 'Café con leche y tostadas de pan.',
      hy: 'Սուրճ կաթով և հացի տոստեր։'
    }
  },
  // TEMA 5: ANÁLISIS SINTÁCTICO
  {
    id: 'sin-fundamentos',
    topicId: 'sintaxis',
    titleEs: '7. Fundamentos: ¿Qué es una oración y un sintagma?',
    titleHy: '7. Հիմունքներ. Ի՞նչ են նախադասությունը և կապակցությունը (Sintagma)',
    shortSummaryEs: 'La oración tiene sentido completo y al menos un verbo conjugado. Se divide en Sujeto y Predicado.',
    shortSummaryHy: 'Նախադասությունն ունի ամբողջական իմաստ և առնվազն մեկ դիմավոր բայ։ Բաժանվում է Ենթակայի և Ստորոգյալի։',
    simpleExplanationEs: 'Una frase suelta como "¡Buenos días!" no tiene verbo. Una oración como "El sol brilla" sí tiene verbo y dos partes clave: quién hace algo y qué hace.',
    simpleExplanationHy: 'Առանց բայի արտահայտությունը («¡Buenos días!») բառակապակցություն է։ Իսկ նախադասությունն ունի բայ և երկու գլխավոր մաս՝ ով է գործում (Sujeto) և ինչ է անում (Predicado)։',
    fullDefinitionEs: 'La oración es la unidad mínima de comunicación con sentido completo, entonación propia e independencia sintáctica. Está compuesta por dos constituyentes inmediatos obligatorios: el Sintagma Nominal Sujeto (SNS) y el Sintagma Verbal Predicado (SVP). Un sintagma es una palabra o conjunto de palabras articuladas en torno a un núcleo.',
    fullDefinitionHy: 'Նախադասությունը հաղորդակցման նվազագույն միավորն է՝ ամբողջական իմաստով, սեփական հնչերանգով և շարահյուսական անկախությամբ։ Կազմված է երկու պարտադիր բաղադրիչներից՝ Ենթակայական կապակցություն (Sujeto) և Բայական կապակցություն/Ստորոգյալ (Predicado)։ Կապակցությունը (sintagma) մեկ բառ կամ բառախումբ է՝ կառուցված միջուկի շուրջ։',
    communicativeGoalEs: 'Estructurar mensajes coherentes para transmitir pensamientos completos.',
    communicativeGoalHy: 'Կառուցել տրամաբանական հաղորդագրություններ՝ ամբողջական մտքեր փոխանցելու համար։',
    signalsAndTricksEs: [
      'Tipos de sintagmas: Nominal (SN, núcleo sustantivo), Verbal (SV, núcleo verbo), Adjetival (SAdj, núcleo adjetivo), Adverbial (SAdv, núcleo adverbio), Preposicional (SPrep, preposición + término).',
      'Cada sintagma tiene un NÚCLEO (palabra más importante).',
      'Oración = Sujeto (SN) + Predicado (SV).'
    ],
    signalsAndTricksHy: [
      'Կապակցությունների տեսակները՝ Գոյականական (SN, միջուկը՝ գոյական), Բայական (SV, միջուկը՝ բայ), Ածականական (SAdj), Մակբայական (SAdv), Նախդիրային (SPrep)։',
      'Յուրաքանչյուր կապակցություն ունի ՄԻՋՈՒԿ (núcleo)՝ ամենակարևոր բառը։',
      'Նախադասություն = Ենթակա (Sujeto) + Ստորոգյալ (Predicado)։'
    ],
    examples: [
      {
        sentence: 'Los árboles viejos dan sombra en verano.',
        armenian: 'Ծեր ծառերը ստվեր են տալիս ամռանը։',
        explanationEs: 'Sujeto: "Los árboles viejos" (núcleo: árboles). Predicado: "dan sombra en verano" (núcleo: dan).',
        explanationHy: 'Ենթակա՝ «Los árboles viejos» (միջուկը՝ árboles)։ Ստորոգյալ՝ «dan sombra en verano» (միջուկը՝ dan)։'
      },
      {
        sentence: 'Mi mejor amiga vive en Barcelona.',
        armenian: 'Իմ լավագույն ընկերուհին ապրում է Բարսելոնայում։',
        explanationEs: 'Sujeto: "Mi mejor amiga" (SN). Predicado: "vive en Barcelona" (SV).',
        explanationHy: 'Ենթակա՝ «Mi mejor amiga»։ Ստորոգյալ՝ «vive en Barcelona»։'
      }
    ],
    commonMistakesEs: 'Pensar que "sujeto" siempre es una persona. El sujeto puede ser una cosa, una idea o un animal: "El reloj suena", "La música alegra".',
    commonMistakesHy: 'Կարծել, թե «ենթական» միշտ մարդ է։ Ենթական կարող է լինել իր, գաղափար կամ կենդանի՝ «El reloj suena» (Ժամացույցը զնգում է)։',
    examAdviceEs: 'Busca el verbo primero. Pregúntale al verbo quién o qué realiza o experimenta la acción.',
    examAdviceHy: 'Նախ գտիր բայը։ Հարցրու բային՝ ով կամ ինչն է կատարում գործողությունը։',
    simplifiedAlternativeEs: 'Toda frase que tiene verbo y dice quién hace algo y qué hace.',
    simplifiedAlternativeHy: 'Յուրաքանչյուր նախադասություն, որն ունի բայ և ասում է, թե ով է անում և ինչ է անում։',
    simplifiedAlternativeExample: {
      es: 'El gato duerme plácidamente.',
      hy: 'Կատուն հանգիստ քնած է։'
    }
  },
  {
    id: 'sin-sujeto',
    topicId: 'sintaxis',
    titleEs: '8. El Sujeto: tipos y concordancia',
    titleHy: '8. Ենթական (El Sujeto). տեսակները և համաձայնությունը',
    shortSummaryEs: 'El sujeto es el elemento que concuerda en número y persona con el verbo de la oración.',
    shortSummaryHy: 'Ենթական այն անդամն է, որը թվով և դեմքով համաձայնում է նախադասության բայի հետ։',
    simpleExplanationEs: 'EL TRUCO MÁS IMPORTANTE DEL EXAMEN: Si cambias el verbo a plural, la palabra que OBLIGATORIAMENTE tiene que cambiar a plural es el Sujeto.',
    simpleExplanationHy: 'ՔՆՆՈՒԹՅԱՆ ԱՄԵՆԱԿԱՐԵՎՈՐ ՀՆԱՐՔԸ. Եթե բայը դնես հոգնակի, այն բառը, որը ՊԱՐՏԱԴԻՐ պետք է դառնա հոգնակի, Ենթական է (Sujeto)։',
    fullDefinitionEs: 'El Sujeto es la función sintáctica desempeñada por un sintagma nominal que concuerda en número y persona con el verbo. Tipos: Sujeto Expreso (aparece escrito en la frase: "Carlos lee"), Sujeto Omitido o Elíptico (no está escrito pero se deduce por la desinencia verbal: "[Él] Lee un libro"), y Oraciones Impersonales (no tienen sujeto ni puede tenerlo, e.g. "Llueve mucho", "Hay tres libros").',
    fullDefinitionHy: 'Ենթական շարահյուսական պաշտոն է, որն իրականացվում է գոյականական կապակցությամբ և թվով ու դեմքով համաձայնում է բայի հետ։ Տեսակներ՝ Բացահայտ ենթակա (Sujeto Expreso՝ գրված է նախադասության մեջ), Զեղչված ենթակա (Sujeto Omitido/Elíptico՝ գրված չէ, բայց հասկացվում է բայի վերջավորությունից), և Անդեմ նախադասություններ (Impersonales՝ ենթակա չունեն և չեն կարող ունենալ, օր. «Llueve mucho», «Hay tres libros»)։',
    communicativeGoalEs: 'Identificar el referente sobre el cual predica o informa el verbo.',
    communicativeGoalHy: 'Նույնականացնել այն միավորը, որի մասին տեղեկացնում է բայը։',
    signalsAndTricksEs: [
      'REGLA DE ORO DE LA CONCORDANCIA: Si el verbo está en singular ("gusta"), pásalo a plural ("gustan"). La parte que deba cambiar a plural es el sujeto: "Me gusta el libro" -> "Me gustan los libros" -> ¡El libro es el Sujeto! (NO es "yo" ni "me").',
      'El Sujeto NUNCA empieza por preposición (salvo excepciones raras con "entre" o "hasta"). Si empieza por "A" ("A Juan le gusta..."), "A Juan" NUNCA es sujeto.',
      'Sujeto omitido: se indica con pronombre entre corchetes: [Yo], [Tú], [Él/Ella], [Nosotros].',
      'Impersonales: Verbos meteorológicos (llover, nevar), Verbo "haber" en 3.ª persona ("Hay manzanas"), Verbo "hacer" temporal ("Hace frío").'
    ],
    signalsAndTricksHy: [
      'ՀԱՄԱՁԱՅՆՈՒԹՅԱՆ ՈՍԿԻ ԿԱՆՈՆԸ. Եթե բայը եզակի է («gusta»), դի՛ր այն հոգնակի («gustan»)։ Այն հատվածը, որը պարտադիր պետք է դառնա հոգնակի, ենթական է՝ «Me gusta el libro» -> «Me gustan los libros» -> «El libro»-ն է ենթական (և ոչ թե «yo» կամ «me»)։',
      'Ենթական ԵՐԲԵՔ չի սկսվում նախդիրով (օրինակ՝ «A Juan le gusta...» նախադասության մեջ «A Juan»-ը ԵՐԲԵՔ ենթակա չէ)։',
      'Զեղչված ենթակա՝ նշվում է քառակուսի փակագծերում՝ [Yo], [Tú], [Él]։',
      'Անդեմ բայեր (Impersonales)՝ եղանակային (llover, nevar), «haber» բայը («Hay manzanas»), «hacer» («Hace frío»)։'
    ],
    examples: [
      {
        sentence: 'A mi hermana pequeña le gustan las películas de animación.',
        armenian: 'Իմ փոքր քրոջը դուր են գալիս անիմացիոն ֆիլմերը։',
        explanationEs: 'Sujeto: "Las películas de animación" (concuerda con "gustan"). "A mi hermana pequeña" es CI.',
        explanationHy: 'Ենթական է «Las películas de animación» (համաձայնում է «gustan»-ի հետ)։ «A mi hermana»-ն CI է։'
      },
      {
        sentence: 'Ayer comimos paella en casa de los abuelos.',
        armenian: 'Երեկ պաելյա կերանք տատիկ-պապիկի տանը։',
        explanationEs: 'Sujeto omitido: [Nosotros]. Se deduce de la terminación verbal "-mos".',
        explanationHy: 'Զեղչված ենթակա՝ [Nosotros] (մենք)։ Հասկացվում է «-mos» վերջավորությունից։'
      },
      {
        sentence: 'En Galicia llueve con frecuencia durante el invierno.',
        armenian: 'Գալիսիայում ձմռանը հաճախակի անձրև է գալիս։',
        explanationEs: 'Oración impersonal meteorológica: NO tiene sujeto.',
        explanationHy: 'Եղանակային անդեմ նախադասություն. ենթակա ՉՈՒՆԻ։'
      },
      {
        sentence: 'Hay muchos alumnos en el patio del colegio.',
        armenian: 'Դպրոցի բակում շատ աշակերտներ կան։',
        explanationEs: 'Oración impersonal con "haber". "Muchos alumnos" es Complemento Directo, NO sujeto.',
        explanationHy: 'Անդեմ նախադասություն «haber» բայով։ «Muchos alumnos»-ը ուղիղ խնդիր է (CD), ՈՉ ԹԵ ենթակա։'
      }
    ],
    commonMistakesEs: 'Creer que en "Me gusta la pizza", el sujeto es "yo" o "a mí". ¡GRAVE ERROR! El sujeto es "la pizza" (comprueba: "Me gustan las pizzas").',
    commonMistakesHy: 'Կարծել, թե «Me gusta la pizza» նախադասության մեջ ենթական «yo»-ն է կամ «a mí»-ն։ ԿՈՊԻՏ ՍԽԱԼ։ Ենթական «la pizza»-ն է (ստուգիր՝ «Me gustan las pizzas»)։',
    examAdviceEs: 'Aplica siempre la prueba del plural al verbo. Lo que cambie obligatoriamente será tu sujeto.',
    examAdviceHy: 'Միշտ բայի նկատմամբ կիրառիր հոգնակի թվի ստուգումը։ Այն բառը, որը պարտադիր կփոխվի, կլինի քո ենթական։',
    simplifiedAlternativeEs: 'La persona o cosa que concuerda en singular o plural con el verbo.',
    simplifiedAlternativeHy: 'Այն անձը կամ իրը, որը եզակի կամ հոգնակի թվով համաձայնում է բայի հետ։',
    simplifiedAlternativeExample: {
      es: 'Los pájaros cantan al amanecer.',
      hy: 'Թռչունները երգում են լուսաբացին։'
    }
  },
  {
    id: 'sin-predicado',
    topicId: 'sintaxis',
    titleEs: '9. El Predicado: Nominal y Verbal',
    titleHy: '9. Ստորոգյալը (El Predicado). անվանական և բայական',
    shortSummaryEs: 'El predicado dice lo que se afirma del sujeto. Puede ser Nominal (con Atributo) o Verbal.',
    shortSummaryHy: 'Ստորոգյալն ասում է այն, ինչ հաղորդվում է ենթակայի մասին։ Լինում է Անվանական (Atributo-ով) կամ Բայական։',
    simpleExplanationEs: 'Predicado Nominal: usa SER, ESTAR o PARECER + una cualidad (Atributo). Predicado Verbal: usa cualquier otro verbo con acción real.',
    simpleExplanationHy: 'Անվանական ստորոգյալ (Predicado Nominal)՝ օգտագործում է SER, ESTAR կամ PARECER բայերը + հատկանիշ (Atributo)։ Բայական ստորոգյալ (Predicado Verbal)՝ մնացած բոլոր գործողության բայերը։',
    fullDefinitionEs: 'El Predicado es el sintagma verbal que expresa lo que se dice del sujeto. Se divide en: 1) Predicado Nominal (PN): formado por verbos copulativos (ser, estar, parecer) que carecen de significado léxico pleno y actúan de unión con un Atributo imprescindible; 2) Predicado Verbal (PV): formado por verbos predicativos con significado léxico pleno acompañados opcionalmente de complementos (CD, CI, CC, etc.).',
    fullDefinitionHy: 'Ստորոգյալը (Predicado) բայական կապակցություն է, որն արտահայտում է ենթակայի մասին ասվածը։ Բաժանվում է՝ 1) Անվանական ստորոգյալ (PN)՝ կազմված կապակցող բայերով (ser, estar, parecer), որոնք կապում են ենթական պարտադիր ստորոգելիական որակի (Atributo) հետ, 2) Բայական ստորոգյալ (PV)՝ կազմված լիիմաստ բայերով և լրացումներով (CD, CI, CC և այլն)։',
    communicativeGoalEs: 'Atribuir una cualidad, acción o circunstancia al sujeto.',
    communicativeGoalHy: 'Ենթակային վերագրել հատկանիշ, գործողություն կամ հանգամանք։',
    signalsAndTricksEs: [
      'Predicado Nominal (PN) = Verbo copulativo (SER, ESTAR, PARECER) + ATRIBUTO.',
      'Predicado Verbal (PV) = Verbo predicativo (correr, leer, comprar, estudiar, vivir...).',
      'El Atributo se puede sustituir siempre por el pronombre "LO": "Juan es alto" -> "Juan LO es".'
    ],
    signalsAndTricksHy: [
      'Անվանական ստորոգյալ (PN) = Կապակցող բայ (SER, ESTAR, PARECER) + ATRIBUTO։',
      'Բայական ստորոգյալ (PV) = Ստորոգիչ բայ (վազել, կարդալ, գնել, սովորել...)։',
      'Atributo-ն ՄԻՇՏ կարելի է փոխարինել «LO» դերանունով՝ «Juan es alto» -> «Juan LO es»։'
    ],
    examples: [
      {
        sentence: 'Mi hermano es médico en el hospital de la ciudad.',
        armenian: 'Իմ եղբայրը բժիշկ է քաղաքի հիվանդանոցում։',
        explanationEs: 'Predicado Nominal: verbo copulativo "es" + Atributo "médico".',
        explanationHy: 'Անվանական ստորոգյալ՝ «es» կապակցող բայ + «médico» (Atributo)։'
      },
      {
        sentence: 'Los alumnos preparan la obra de teatro escolar.',
        armenian: 'Աշակերտները պատրաստում են դպրոցական թատերական ներկայացումը։',
        explanationEs: 'Predicado Verbal: verbo predicativo de acción "preparan".',
        explanationHy: 'Բայական ստորոգյալ՝ «preparan» գործողության բայով։'
      },
      {
        sentence: 'El agua del lago parece tranquila hoy.',
        armenian: 'Լճի ջուրն այսօր հանգիստ է թվում։',
        explanationEs: 'Predicado Nominal: verbo copulativo "parece" + Atributo "tranquila".',
        explanationHy: 'Անվանական ստորոգյալ՝ «parece» + «tranquila» (Atributo)։'
      }
    ],
    commonMistakesEs: 'Pensar que si la frase tiene el verbo "estar", el lugar donde está es Atributo. "Juan está en Madrid": "en Madrid" no es Atributo, es CCLugar (porque indica ubicación).',
    commonMistakesHy: 'Կարծել, որ եթե նախադասությունն ունի «estar» բայը, ապա տեղը Atributo է։ «Juan está en Madrid»՝ «en Madrid»-ը Atributo չէ, այլ Տեղի պարագա (CCLugar)։',
    examAdviceEs: 'Busca el verbo: ¿es ser, estar o parecer? Si lo es, tienes un Predicado Nominal casi seguro.',
    examAdviceHy: 'Գտիր բայը՝ ser, estar կամ parecer է՞։ Եթե այո, ապա գրեթե վստահաբար ունես Անվանական ստորոգյալ (PN)։',
    simplifiedAlternativeEs: 'Todo lo que hace o cómo es el sujeto.',
    simplifiedAlternativeHy: 'Այն ամենը, ինչ անում է ենթական կամ ինչպիսին է նա։',
    simplifiedAlternativeExample: {
      es: 'La casa es muy acogedora.',
      hy: 'Տունը շատ հարմարավետ է։'
    }
  },
  {
    id: 'sin-cd',
    topicId: 'sintaxis',
    titleEs: '10. Complementos del verbo: CD, CI, CC y Atributo',
    titleHy: '10. Բայի լրացումները. Ուղիղ խնդիր (CD), Հանգման խնդիր (CI), Պարագաներ (CC) և Atributo',
    shortSummaryEs: 'Los complementos completan el significado del verbo en el predicado.',
    shortSummaryHy: 'Լրացումներն ամբողջացնում են բայի իմաստը ստորոգյալի մեջ։',
    simpleExplanationEs: 'CD: se sustituye por LO, LA, LOS, LAS. CI: se sustituye por LE o LES. CC: responde a ¿dónde?, ¿cuándo?, ¿cómo?, ¿cuánto? Atributo: va con ser/estar/parecer.',
    simpleExplanationHy: 'CD (ուղիղ խնդիր)՝ փոխարինվում է LO, LA, LOS, LAS-ով։ CI (հանգման խնդիր)՝ փոխարինվում է LE կամ LES-ով։ CC (պարագա)՝ պատասխանում է որտե՞ղ, ե՞րբ, ինչպե՞ս, որքա՞ն հարցերին։ Atributo՝ դրվում է ser/estar/parecer բայերի հետ։',
    fullDefinitionEs: 'En 1.º ESO se estudian los complementos fundamentales: 1) Complemento Directo (CD): objeto sobre el que recae directamente la acción verbal; se sustituye por lo/la/los/las y pasa a sujeto en la voz pasiva; 2) Complemento Indirecto (CI): destinatario o beneficiario de la acción; lleva preposición "a" y se sustituye por le/les; 3) Complementos Circunstanciales (CC): expresan circunstancias de lugar (CCL), tiempo (CCT), modo (CCM), cantidad (CCC), compañía (CCComp), instrumento (CCInst) o causa (CCCausa); 4) Atributo (Atr): cualidad del sujeto con verbos copulativos sustituible por "lo".',
    fullDefinitionHy: '1.º ESO-ում ուսումնասիրվում են հիմնարար լրացումները՝ 1) Ուղիղ խնդիր (CD)՝ ուղղակիորեն կրում է գործողությունը, փոխարինվում է lo/la/los/las-ով, 2) Հանգման խնդիր (CI)՝ գործողության հասցեատերն է, ունի «a» նախդիրը և փոխարինվում է le/les-ով, 3) Պարագաներ (CC)՝ տեղի (CCL), ժամանակի (CCT), ձևի (CCM), չափի (CCC), ընկերակցության (CCComp), գործիքի (CCInst), պատճառի (CCCausa), 4) Ստորոգելիական հատկանիշ (Atributo)՝ ենթակայի որակը կապակցող բայերի հետ, փոխարինվում է «lo»-ով։',
    communicativeGoalEs: 'Aportar todos los detalles necesarios sobre la acción del verbo.',
    communicativeGoalHy: 'Հաղորդել բոլոր անհրաժեշտ մանրամասները բայի գործողության մասին։',
    signalsAndTricksEs: [
      'PRUEBA DEL CD: Sustitúyelo por LO, LA, LOS, LAS. «Compré manzanas» -> «LAS compré». Si es persona lleva "a": «Vi a Laura» -> «LA vi».',
      'PRUEBA DE PASIVA DEL CD: El CD pasa a ser el sujeto en pasiva: «El policía detuvo al ladrón» -> «El ladrón fue detenido por el policía».',
      'PRUEBA DEL CI: Sustitúyelo por LE o LES. «Escribí a mi abuela» -> «LE escribí».',
      'PRUEBA DEL ATRIBUTO: Siempre con SER, ESTAR o PARECER. Se sustituye obligatoriamente por LO neutro: «María está cansada» -> «María LO está».',
      'CIRCUNSTANCIALES: ¿Dónde? = CCL; ¿Cuándo? = CCT; ¿Cómo? = CCM; ¿Cuánto? = CCC; ¿Con quién? = CC Compañía; ¿Con qué? = CC Instrumento; ¿Por qué? = CC Causa.'
    ],
    signalsAndTricksHy: [
      'ՈՒՂԻՂ ԽՆԴՐԻ (CD) ՍՏՈՒԳՈՒՄԸ. Փոխարինի՛ր LO, LA, LOS, LAS դերանուններով՝ «Compré manzanas» -> «LAS compré»։ Եթե անձ է, ունի «a» նախդիր՝ «Vi a Laura» -> «LA vi»։',
      'ԿՐԱՎՈՐԱԿԱՆԻ ՍՏՈՒԳՈՒՄ. CD-ն կրավորականում դառնում է ենթակա։',
      'ՀԱՆԳՄԱՆ ԽՆԴՐԻ (CI) ՍՏՈՒԳՈՒՄԸ. Փոխարինի՛ր LE կամ LES դերանուններով՝ «Escribí a mi abuela» -> «LE escribí»։',
      'ATRIBUTO-Ի ՍՏՈՒԳՈՒՄԸ. Միշտ SER, ESTAR կամ PARECER-ով։ Պարտադիր փոխարինվում է «LO»-ով՝ «María está cansada» -> «María LO está»։',
      'ՊԱՐԱԳԱՆԵՐԻ ՀԱՐՑԵՐԸ. Որտե՞ղ = CCL, Ե՞րբ = CCT, Ինչպե՞ս = CCM, Որքա՞ն = CCC, Ում հե՞տ = CC Compañía, Ինչո՞վ = CC Instrumento, Ինչո՞ւ = CC Causa:'
    ],
    examples: [
      {
        sentence: 'Carlos compró un ramo de flores para su madre ayer.',
        armenian: 'Կարլոսը երեկ իր մոր համար ծաղկեփունջ գնեց։',
        explanationEs: '"Un ramo de flores" = CD (lo compró). "Para su madre" = CI/Destinatario. "Ayer" = CCTiempo.',
        explanationHy: '«Un ramo de flores» = CD (ուղիղ խնդիր՝ lo compró)։ «Para su madre» = CI/Հասցեատեր։ «Ayer» = CCTiempo (ժամանակի պարագա)։'
      },
      {
        sentence: 'Los niños juegan alegremente en el parque con sus amigos.',
        armenian: 'Երեխաներն ուրախ խաղում են այգում իրենց ընկերների հետ։',
        explanationEs: '"Alegremente" = CCModo. "En el parque" = CCLugar. "Con sus amigos" = CCCompañía.',
        explanationHy: '«Alegremente» = CCModo (ձևի պարագա)։ «En el parque» = CCLugar (տեղի)։ «Con sus amigos» = CCCompañía (ընկերակցության)։'
      },
      {
        sentence: 'La profesora entregó las notas a los alumnos en el aula.',
        armenian: 'Ուսուցչուհին դասարանում գնահատականները հանձնեց աշակերտներին։',
        explanationEs: '"Las notas" = CD (las entregó). "A los alumnos" = CI (les entregó). "En el aula" = CCLugar.',
        explanationHy: '«Las notas» = CD (ուղիղ խնդիր)։ «A los alumnos» = CI (հանգման խնդիր)։ «En el aula» = CCLugar (տեղի պարագա)։'
      },
      {
        sentence: 'Aquella chica rubia parece muy simpática.',
        armenian: 'Այդ շիկահեր աղջիկը շատ համակրելի է թվում։',
        explanationEs: '"Muy simpática" es ATRIBUTO porque va con el verbo copulativo "parece" (lo parece).',
        explanationHy: '«Muy simpática»-ն ATRIBUTO է, քանի որ դրված է «parece» կապակցող բայի հետ (lo parece)։'
      }
    ],
    commonMistakesEs: 'Confundir el CD de persona ("Vi a mi tío") con un CI porque ambos llevan la preposición "a". TRUCO: Pásalo a pasiva: "Mi tío fue visto por mí" -> Como pasa a sujeto, ¡es CD! O usa pronombres: "LO vi" (CD), no "le vi".',
    commonMistakesHy: 'Անձ ցույց տվող ուղիղ խնդիրը («Vi a mi tío») հանգման խնդրի հետ շփոթելը, որովհետև երկուսն էլ «a» ունեն։ ՀՆԱՐՔ. Դարձրու կրավորական՝ «Mi tío fue visto por mí» -> Քանի որ դարձավ ենթակա, ուրեմն CD է։ Կամ դերանունով՝ «LO vi» (CD)։',
    examAdviceEs: 'Prueba siempre los pronombres: LO/LA/LOS/LAS para CD, y LE/LES para CI. Es infalible en 1.º ESO.',
    examAdviceHy: 'Միշտ ստուգիր դերանուններով՝ LO/LA/LOS/LAS-ը CD-ի համար, իսկ LE/LES-ը CI-ի համար։ Սա 1.º ESO-ում անվրեպ մեթոդ է։',
    simplifiedAlternativeEs: 'Las palabras que dicen a quién, qué, cómo, dónde o cuándo se hace la acción.',
    simplifiedAlternativeHy: 'Բառեր, որոնք ասում են՝ ում, ինչ, ինչպես, որտեղ կամ երբ է արվում գործողությունը։',
    simplifiedAlternativeExample: {
      es: 'Di una manzana a mi amigo en el recreo.',
      hy: 'Դասամիջոցին ես ընկերոջս խնձոր տվեցի։'
    }
  }
];
