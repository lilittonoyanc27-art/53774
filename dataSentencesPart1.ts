import { AnalyzedSentence } from './types';

export const sentencesPart1: AnalyzedSentence[] = [
  // NIVEL 1: Oraciones muy cortas (3-4 palabras)
  {
    id: 's-01',
    difficulty: 1,
    difficultyLabel: 'Nivel 1: Muy corta (3-4 palabras)',
    sentenceEs: 'El perro ladra.',
    sentenceHy: 'Շունը հաչում է։',
    sujeto: {
      text: 'El perro',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso simple',
      typeLabelHy: 'Բացահայտ պարզ ենթակա',
      nucleo: 'perro',
      explanationEs: 'Concuerda en 3.ª persona singular con "ladra". Si decimos "Los perros", el verbo cambia a "ladran".',
      explanationHy: 'Համաձայնում է 3-րդ դեմքի եզակի թվով «ladra»-ի հետ։ Եթե ասենք «Los perros», բայը կդառնա «ladran»։'
    },
    predicado: {
      text: 'ladra',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'ladra',
      explanationEs: 'Verbo predicativo intransitivo de acción.',
      explanationHy: 'Չեզոք գործողության բայական ստորոգիչ բայ։'
    },
    complements: [],
    words: [
      {
        word: 'El',
        wordHy: 'այն (որոշյալ հոդ)',
        categoryEs: 'Determinante artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masculino singular',
        categoryDetailHy: 'Արական սեռ, եզակի թիվ',
        syntacticFunctionEs: 'Actualizador / Determinante',
        syntacticFunctionHy: 'Որոշիչ (actualizador)',
        whyThisFunctionEs: 'Acompaña al sustantivo "perro" delimitándolo.',
        whyThisFunctionHy: 'Ուղեկցում է «perro» գոյականին՝ ճշգրտելով այն։'
      },
      {
        word: 'perro',
        wordHy: 'շուն',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Concreto, individual, contable, masc. sing.',
        categoryDetailHy: 'Թանձրացական, եզակի, հաշվելի, արական',
        syntacticFunctionEs: 'Núcleo del Sujeto (N)',
        syntacticFunctionHy: 'Ենթակայի միջուկ (N)',
        whyThisFunctionEs: 'Es la palabra principal del Sintagma Nominal Sujeto.',
        whyThisFunctionHy: 'Ենթակայական կապակցության գլխավոր բառն է։'
      },
      {
        word: 'ladra',
        wordHy: 'հաչում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente de indicativo, 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա, 3-րդ դեմք եզակի',
        syntacticFunctionEs: 'Núcleo del Predicado (NV)',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ (NV)',
        whyThisFunctionEs: 'Expresa la acción que realiza el sujeto.',
        whyThisFunctionHy: 'Արտահայտում է ենթակայի կատարած գործողությունը։'
      }
    ]
  },
  {
    id: 's-02',
    difficulty: 1,
    difficultyLabel: 'Nivel 1: Muy corta (3-4 palabras)',
    sentenceEs: 'Mi hermano duerme.',
    sentenceHy: 'Իմ եղբայրը քնած է։',
    sujeto: {
      text: 'Mi hermano',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'hermano',
      explanationEs: 'Sintagma nominal en 3.ª persona singular.',
      explanationHy: 'Գոյականական կապակցություն 3-րդ դեմքի եզակի թվով։'
    },
    predicado: {
      text: 'duerme',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'duerme',
      explanationEs: 'Núcleo verbal intransitivo.',
      explanationHy: 'Անանցողական բայական միջուկ։'
    },
    complements: [],
    words: [
      {
        word: 'Mi',
        wordHy: 'իմ',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Un solo poseedor, masc./fem. singular',
        categoryDetailHy: 'Մեկ պատկանող, եզակի թիվ',
        syntacticFunctionEs: 'Determinante del Sujeto',
        syntacticFunctionHy: 'Ենթակայի որոշիչ',
        whyThisFunctionEs: 'Precede al sustantivo indicando posesión.',
        whyThisFunctionHy: 'Նախորդում է գոյականին՝ ցույց տալով պատկանելություն։'
      },
      {
        word: 'hermano',
        wordHy: 'եղբայր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Concreto, masculino singular',
        categoryDetailHy: 'Թանձրացական, արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto (N)',
        syntacticFunctionHy: 'Ենթակայի միջուկ (N)',
        whyThisFunctionEs: 'Es el centro del sintagma nominal sujeto.',
        whyThisFunctionHy: 'Ենթակայական կապակցության կենտրոնն է։'
      },
      {
        word: 'duerme',
        wordHy: 'քնում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: '3.ª persona singular presente indicativo',
        categoryDetailHy: '3-րդ դեմք եզակի, սահմանական ներկա',
        syntacticFunctionEs: 'Núcleo del Predicado (NV)',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ (NV)',
        whyThisFunctionEs: 'Indica el estado del sujeto.',
        whyThisFunctionHy: 'Ցույց է տալիս ենթակայի վիճակը։'
      }
    ]
  },
  {
    id: 's-03',
    difficulty: 1,
    difficultyLabel: 'Nivel 1: Muy corta (3-4 palabras)',
    sentenceEs: 'Ana lee libros.',
    sentenceHy: 'Անան գրքեր է կարդում։',
    sujeto: {
      text: 'Ana',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso propio',
      typeLabelHy: 'Հատուկ անունով բացահայտ ենթակա',
      nucleo: 'Ana',
      explanationEs: 'Sustantivo propio que concuerda con "lee".',
      explanationHy: 'Հատուկ գոյական, որը համաձայնում է «lee»-ի հետ։'
    },
    predicado: {
      text: 'lee libros',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'lee',
      explanationEs: 'Verbo transitivo acompañado de su Complemento Directo.',
      explanationHy: 'Անցողական բայ՝ իր ուղիղ խնդրով (CD)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'libros',
        explanationEs: 'Se puede sustituir por "los": "Ana los lee".',
        explanationHy: 'Կարելի է փոխարինել «los»-ով՝ «Ana los lee» (Անան դրանք կարդում է)։'
      }
    ],
    words: [
      {
        word: 'Ana',
        wordHy: 'Անա',
        categoryEs: 'Sustantivo propio',
        categoryHy: 'Հատուկ գոյական',
        categoryDetailEs: 'Femenino singular, nombre de persona',
        categoryDetailHy: 'Իգական եզակի, անձնանուն',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Es quien realiza la acción verbal.',
        whyThisFunctionHy: 'Նա է, ով կատարում է բայական գործողությունը։'
      },
      {
        word: 'lee',
        wordHy: 'կարդում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo, 3.ª pers. sing. (leer)',
        categoryDetailHy: 'Սահմանական ներկա, 3-րդ դեմք եզակի',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo transitivo principal.',
        whyThisFunctionHy: 'Գլխավոր անցողական բայ։'
      },
      {
        word: 'libros',
        wordHy: 'գրքեր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masculino plural, contable',
        categoryDetailHy: 'Արական հոգնակի, հաշվելի',
        syntacticFunctionEs: 'Complemento Directo (CD)',
        syntacticFunctionHy: 'Ուղիղ խնդիր (CD)',
        whyThisFunctionEs: 'Recibe la acción de leer (Ana los lee).',
        whyThisFunctionHy: 'Կրում է կարդալու գործողությունը (Ana los lee)։'
      }
    ]
  },
  {
    id: 's-04',
    difficulty: 1,
    difficultyLabel: 'Nivel 1: Muy corta (3-4 palabras)',
    sentenceEs: 'El sol brilla.',
    sentenceHy: 'Արևը փայլում է։',
    sujeto: {
      text: 'El sol',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'sol',
      explanationEs: 'Sustantivo común en singular.',
      explanationHy: 'Եզակի թվով հասարակ գոյական։'
    },
    predicado: {
      text: 'brilla',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'brilla',
      explanationEs: 'Núcleo verbal de proceso natural.',
      explanationHy: 'Բնական երևույթի բայական միջուկ։'
    },
    complements: [],
    words: [
      {
        word: 'El',
        wordHy: 'այն (որոշիչ)',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masculino singular',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Actualiza al sustantivo sol.',
        whyThisFunctionHy: 'Ճշգրտում է sol գոյականը։'
      },
      {
        word: 'sol',
        wordHy: 'արև',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Concreto, masculino singular',
        categoryDetailHy: 'Թանձրացական, արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Sustantivo sobre el que recae el predicado.',
        whyThisFunctionHy: 'Գոյական, որի մասին ասվում է ստորոգյալը։'
      },
      {
        word: 'brilla',
        wordHy: 'փայլում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo, 3.ª persona',
        categoryDetailHy: 'Սահմանական ներկա, 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Acción que realiza el sujeto.',
        whyThisFunctionHy: 'Ենթակայի կատարած գործողությունը։'
      }
    ]
  },
  {
    id: 's-05',
    difficulty: 1,
    difficultyLabel: 'Nivel 1: Muy corta (3-4 palabras)',
    sentenceEs: 'Hoy llueve mucho.',
    sentenceHy: 'Այսօր շատ է անձրևում։',
    sujeto: {
      text: 'No tiene sujeto (Impersonal)',
      type: 'impersonal',
      typeLabelEs: 'Oración impersonal (sin sujeto)',
      typeLabelHy: 'Անդեմ նախադասություն (առանց ենթակայի)',
      nucleo: '—',
      explanationEs: 'Los verbos de fenómenos meteorológicos (llover, nevar) no admiten sujeto.',
      explanationHy: 'Եղանակային բնական երևույթների բայերը (անձրևել, ձյունել) ենթակա չեն ունենում։'
    },
    predicado: {
      text: 'Hoy llueve mucho',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal impersonal',
      typeLabelHy: 'Անդեմ բայական ստորոգյալ',
      nucleo: 'llueve',
      explanationEs: 'Verbo impersonal en 3.ª persona singular.',
      explanationHy: 'Անդեմ բայ 3-րդ դեմքի եզակի թվով։'
    },
    complements: [
      {
        type: 'Complemento Circunstancial de Tiempo (CCT)',
        typeHy: 'Ժամանակի պարագա (CCT)',
        text: 'Hoy',
        explanationEs: 'Responde a ¿cuándo llueve?',
        explanationHy: 'Պատասխանում է «ե՞րբ է անձրևում» հարցին։'
      },
      {
        type: 'Complemento Circunstancial de Cantidad (CCC)',
        typeHy: 'Չափի պարագա (CCC)',
        text: 'mucho',
        explanationEs: 'Responde a ¿cuánto llueve?',
        explanationHy: 'Պատասխանում է «որքա՞ն է անձրևում» հարցին։'
      }
    ],
    words: [
      {
        word: 'Hoy',
        wordHy: 'այսօր',
        categoryEs: 'Adverbio de tiempo',
        categoryHy: 'Ժամանակի մակբայ',
        categoryDetailEs: 'Palabra invariable',
        categoryDetailHy: 'Անփոփոխ բառ',
        syntacticFunctionEs: 'CC de Tiempo (CCT)',
        syntacticFunctionHy: 'Ժամանակի պարագա',
        whyThisFunctionEs: 'Sitúa la acción temporalmente.',
        whyThisFunctionHy: 'Գործողությունը տեղադրում է ժամանակի մեջ։'
      },
      {
        word: 'llueve',
        wordHy: 'անձրևում է',
        categoryEs: 'Verbo impersonal',
        categoryHy: 'Անդեմ բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք եզակի',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo principal de la oración impersonal.',
        whyThisFunctionHy: 'Անդեմ նախադասության գլխավոր բայ։'
      },
      {
        word: 'mucho',
        wordHy: 'շատ',
        categoryEs: 'Adverbio de cantidad',
        categoryHy: 'Չափ ու քանակի մակբայ',
        categoryDetailEs: 'Invariable (modifica al verbo llueve)',
        categoryDetailHy: 'Անփոփոխ (լրացնում է llueve բային)',
        syntacticFunctionEs: 'CC de Cantidad (CCC)',
        syntacticFunctionHy: 'Չափի պարագա',
        whyThisFunctionEs: 'Indica la intensidad de la lluvia.',
        whyThisFunctionHy: 'Ցույց է տալիս անձրևի ուժգնությունը։'
      }
    ]
  },

  // NIVEL 2: Oraciones simples (5-7 palabras)
  {
    id: 's-06',
    difficulty: 2,
    difficultyLabel: 'Nivel 2: Simple (5-7 palabras)',
    sentenceEs: 'El gato negro duerme plácidamente.',
    sentenceHy: 'Սև կատուն հանգիստ քնած է։',
    sujeto: {
      text: 'El gato negro',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso complejo',
      typeLabelHy: 'Բացահայտ բարդ ենթակա',
      nucleo: 'gato',
      explanationEs: 'Sustantivo acompañado de artículo y adjetivo.',
      explanationHy: 'Գոյական՝ ուղեկցված հոդով և ածականով։'
    },
    predicado: {
      text: 'duerme plácidamente',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'duerme',
      explanationEs: 'Verbo con complemento circunstancial de modo.',
      explanationHy: 'Բայ ձևի պարագայով։'
    },
    complements: [
      {
        type: 'Complemento Circunstancial de Modo (CCM)',
        typeHy: 'Ձևի պարագա (CCM)',
        text: 'plácidamente',
        explanationEs: 'Responde a ¿cómo duerme el gato?',
        explanationHy: 'Պատասխանում է «ինչպե՞ս է քնում կատուն» հարցին։'
      }
    ],
    words: [
      {
        word: 'El',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña al sustantivo gato.',
        whyThisFunctionHy: 'Ուղեկցում է gato գոյականին։'
      },
      {
        word: 'gato',
        wordHy: 'կատու',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Concreto, masc. sing.',
        categoryDetailHy: 'Թանձրացական, արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Centro del sujeto nominal.',
        whyThisFunctionHy: 'Ենթակայական կապակցության կենտրոնը։'
      },
      {
        word: 'negro',
        wordHy: 'սև',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Grado positivo, masc. sing.',
        categoryDetailHy: 'Դրական աստիճան, արական եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում / Որոշիչ (CN)',
        whyThisFunctionEs: 'Califica y concuerda con "gato".',
        whyThisFunctionHy: 'Բնութագրում է և համաձայնում «gato»-ի հետ։'
      },
      {
        word: 'duerme',
        wordHy: 'քնում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: '3.ª pers. sing. presente',
        categoryDetailHy: '3-րդ դեմք եզակի ներկա',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Acción del predicado.',
        whyThisFunctionHy: 'Ստորոգյալի գործողությունը։'
      },
      {
        word: 'plácidamente',
        wordHy: 'հանգիստ / խաղաղորեն',
        categoryEs: 'Adverbio de modo',
        categoryHy: 'Ձևի մակբայ',
        categoryDetailEs: 'Terminado en sufijo -mente',
        categoryDetailHy: '-mente վերջածանցով',
        syntacticFunctionEs: 'CC de Modo (CCM)',
        syntacticFunctionHy: 'Ձևի պարագա (CCM)',
        whyThisFunctionEs: 'Expresa la manera en que duerme.',
        whyThisFunctionHy: 'Արտահայտում է քնելու կերպը։'
      }
    ]
  },
  {
    id: 's-07',
    difficulty: 2,
    difficultyLabel: 'Nivel 2: Simple (5-7 palabras)',
    sentenceEs: 'Mi hermano pequeño come manzanas dulces.',
    sentenceHy: 'Իմ փոքր եղբայրը քաղցր խնձորներ է ուտում։',
    sujeto: {
      text: 'Mi hermano pequeño',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'hermano',
      explanationEs: 'Sintagma nominal con determinante "mi" y adjetivo "pequeño".',
      explanationHy: 'Գոյականական կապակցություն՝ «mi» որոշիչով և «pequeño» ածականով։'
    },
    predicado: {
      text: 'come manzanas dulces',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'come',
      explanationEs: 'Verbo transitivo con Complemento Directo "manzanas dulces".',
      explanationHy: 'Անցողական բայ՝ «manzanas dulces» ուղիղ խնդրով։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'manzanas dulces',
        explanationEs: 'Se sustituye por "las": "Mi hermano pequeño las come".',
        explanationHy: 'Փոխարինվում է «las»-ով՝ «Mi hermano pequeño las come»։'
      }
    ],
    words: [
      {
        word: 'Mi',
        wordHy: 'իմ',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a hermano.',
        whyThisFunctionHy: 'Ուղեկցում է hermano-ին։'
      },
      {
        word: 'hermano',
        wordHy: 'եղբայր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Palabra clave del sujeto.',
        whyThisFunctionHy: 'Ենթակայի բանալի բառը։'
      },
      {
        word: 'pequeño',
        wordHy: 'փոքր',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Modifica al sustantivo hermano.',
        whyThisFunctionHy: 'Լրացնում է hermano գոյականին։'
      },
      {
        word: 'come',
        wordHy: 'ուտում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Acción que realiza el hermano.',
        whyThisFunctionHy: 'Եղբոր կատարած գործողությունը։'
      },
      {
        word: 'manzanas',
        wordHy: 'խնձորներ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. plural',
        categoryDetailHy: 'Իգական հոգնակի',
        syntacticFunctionEs: 'Núcleo del Complemento Directo',
        syntacticFunctionHy: 'Ուղիղ խնդրի միջուկ',
        whyThisFunctionEs: 'Es el objeto comido.',
        whyThisFunctionHy: 'Կերված առարկան է։'
      },
      {
        word: 'dulces',
        wordHy: 'քաղցր',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Plural neutro/común',
        categoryDetailHy: 'Հոգնակի թիվ',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Describe a las manzanas.',
        whyThisFunctionHy: 'Նկարագրում է խնձորները։'
      }
    ]
  },
  {
    id: 's-08',
    difficulty: 2,
    difficultyLabel: 'Nivel 2: Simple (5-7 palabras)',
    sentenceEs: 'Los alumnos preparan el examen difícil.',
    sentenceHy: 'Աշակերտները պատրաստում են դժվար քննությունը։',
    sujeto: {
      text: 'Los alumnos',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'alumnos',
      explanationEs: 'Sustantivo plural masculino concordante con "preparan".',
      explanationHy: 'Արական հոգնակի գոյական, համաձայնեցված «preparan»-ի հետ։'
    },
    predicado: {
      text: 'preparan el examen difícil',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'preparan',
      explanationEs: 'Predicado con CD ("el examen difícil").',
      explanationHy: 'Ստորոգյալ CD-ով («el examen difícil»)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'el examen difícil',
        explanationEs: 'Se sustituye por "lo": "Los alumnos lo preparan". En pasiva: "El examen difícil es preparado por los alumnos".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «Los alumnos lo preparan»։ Կրավորականում՝ «El examen difícil es preparado...»։'
      }
    ],
    words: [
      {
        word: 'Los',
        wordHy: 'այն (հոգնակի)',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a alumnos.',
        whyThisFunctionHy: 'Ուղեկցում է alumnos-ին։'
      },
      {
        word: 'alumnos',
        wordHy: 'աշակերտներ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Concuerda con preparan.',
        whyThisFunctionHy: 'Համաձայնում է preparan-ի հետ։'
      },
      {
        word: 'preparan',
        wordHy: 'պատրաստում են',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: '3.ª persona plural presente',
        categoryDetailHy: '3-րդ դեմք հոգնակի ներկա',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo principal transitivo.',
        whyThisFunctionHy: 'Գլխավոր անցողական բայ։'
      },
      {
        word: 'el',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante del CD',
        syntacticFunctionHy: 'Ուղիղ խնդրի որոշիչ',
        whyThisFunctionEs: 'Acompaña a examen.',
        whyThisFunctionHy: 'Ուղեկցում է examen-ին։'
      },
      {
        word: 'examen',
        wordHy: 'քննություն',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'Ուղիղ խնդրի միջուկ',
        whyThisFunctionEs: 'Sustantivo central del complemento.',
        whyThisFunctionHy: 'Լրացման կենտրոնական գոյականը։'
      },
      {
        word: 'difícil',
        wordHy: 'դժվար',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Grado positivo',
        categoryDetailHy: 'Դրական աստիճան',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Modifica a examen.',
        whyThisFunctionHy: 'Լրացնում է examen-ին։'
      }
    ]
  },

  // NIVEL 3: Con adjetivos y complementos (CD, CI, Atributo)
  {
    id: 's-09',
    difficulty: 3,
    difficultyLabel: 'Nivel 3: Con Atributo y CD/CI',
    sentenceEs: 'El agua del río es cristalina.',
    sentenceHy: 'Գետի ջուրը բյուրեղյա մաքուր է։',
    sujeto: {
      text: 'El agua del río',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'agua',
      explanationEs: '"Agua" es sustantivo femenino que lleva "el" por empezar por a- tónica. "Del río" es CN.',
      explanationHy: '«Agua» իգական գոյական է, որը շեշտված a-ի պատճառով ստանում է «el»։ «Del río»-ն CN է։'
    },
    predicado: {
      text: 'es cristalina',
      type: 'nominal',
      typeLabelEs: 'Predicado nominal',
      typeLabelHy: 'Անվանական ստորոգյալ',
      nucleo: 'es',
      explanationEs: 'Verbo copulativo "es" con Atributo "cristalina".',
      explanationHy: '«Es» կապակցող բայ՝ «cristalina» (Atributo) հատկանիշով։'
    },
    complements: [
      {
        type: 'Atributo (Atr)',
        typeHy: 'Ստորոգելիական հատկանիշ (Atributo)',
        text: 'cristalina',
        explanationEs: 'Se sustituye por "lo": "El agua del río lo es".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «El agua del río lo es»։'
      }
    ],
    words: [
      {
        word: 'El',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Forma masculina ante a- tónica',
        categoryDetailHy: 'Արական ձև շեշտված a-ից առաջ',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a agua.',
        whyThisFunctionHy: 'Ուղեկցում է agua-ին։'
      },
      {
        word: 'agua',
        wordHy: 'ջուր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Femenino singular',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Palabra rectora del sujeto.',
        whyThisFunctionHy: 'Ենթակայի գլխավոր բառը։'
      },
      {
        word: 'del',
        wordHy: 'գետի (de + el)',
        categoryEs: 'Artículo contracto (de + el)',
        categoryHy: 'Ձուլված հոդ (նախդիր + հոդ)',
        categoryDetailEs: 'Preposición + determinante',
        categoryDetailHy: 'Նախդիր + որոշիչ',
        syntacticFunctionEs: 'Enlace (Prep) + Det',
        syntacticFunctionHy: 'Կապող օղակ + Որոշիչ',
        whyThisFunctionEs: 'Introduce el complemento del nombre río.',
        whyThisFunctionHy: 'Ներմուծում է río-ի լրացումը։'
      },
      {
        word: 'río',
        wordHy: 'գետ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Término del CN',
        syntacticFunctionHy: 'Գոյականի լրացման անդամ',
        whyThisFunctionEs: 'Especifica de qué es el agua.',
        whyThisFunctionHy: 'Հստակեցնում է, թե ինչի ջուրն է։'
      },
      {
        word: 'es',
        wordHy: 'է (լինել)',
        categoryEs: 'Verbo copulativo',
        categoryHy: 'Կապակցող բայ (ser)',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado (Cópula)',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Une el sujeto con el atributo.',
        whyThisFunctionHy: 'Ենթական կապում է Atributo-ի հետ։'
      },
      {
        word: 'cristalina',
        wordHy: 'բյուրեղյա մաքուր',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Fem. sing. (concuerda con agua)',
        categoryDetailHy: 'Իգական եզակի (համաձայնում է agua-ի հետ)',
        syntacticFunctionEs: 'Atributo (Atr)',
        syntacticFunctionHy: 'Ստորոգելիական հատկանիշ (Atributo)',
        whyThisFunctionEs: 'Expresa una cualidad del sujeto con verbo ser.',
        whyThisFunctionHy: 'Արտահայտում է ենթակայի որակը ser բայով։'
      }
    ]
  },
  {
    id: 's-10',
    difficulty: 3,
    difficultyLabel: 'Nivel 3: Con Atributo y CD/CI',
    sentenceEs: 'El cartero entregó una carta a mi abuelo.',
    sentenceHy: 'Նամակատարը նամակ հանձնեց իմ պապիկին։',
    sujeto: {
      text: 'El cartero',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'cartero',
      explanationEs: 'Sustantivo masculino singular que realiza la acción de entregar.',
      explanationHy: 'Արական եզակի գոյական, որը կատարում է հանձնելու գործողությունը։'
    },
    predicado: {
      text: 'entregó una carta a mi abuelo',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'entregó',
      explanationEs: 'Predicado con Complemento Directo (una carta) e Indirecto (a mi abuelo).',
      explanationHy: 'Ստորոգյալ ուղիղ խնդրով (una carta) և հանգման խնդրով (a mi abuelo)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'una carta',
        explanationEs: 'Se sustituye por "la": "El cartero la entregó a mi abuelo".',
        explanationHy: 'Փոխարինվում է «la»-ով՝ «El cartero la entregó a mi abuelo»։'
      },
      {
        type: 'Complemento Indirecto (CI)',
        typeHy: 'Հանգման խնդիր (CI)',
        text: 'a mi abuelo',
        explanationEs: 'Destinatario. Se sustituye por "le": "El cartero le entregó una carta".',
        explanationHy: 'Հասցեատեր։ Փոխարինվում է «le»-ով՝ «El cartero le entregó una carta»։'
      }
    ],
    words: [
      {
        word: 'El',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a cartero.',
        whyThisFunctionHy: 'Ուղեկցում է cartero-ին։'
      },
      {
        word: 'cartero',
        wordHy: 'նամակատար',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Quien ejecuta la acción.',
        whyThisFunctionHy: 'Գործողությունը կատարողը։'
      },
      {
        word: 'entregó',
        wordHy: 'հանձնեց',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Pretérito perfecto simple, 3.ª sing.',
        categoryDetailHy: 'Անցյալ կատարյալ, 3-րդ դեմք եզակի',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo transitivo principal.',
        whyThisFunctionHy: 'Գլխավոր անցողական բայ։'
      },
      {
        word: 'una',
        wordHy: 'մի (անորոշ)',
        categoryEs: 'Artículo indeterminado',
        categoryHy: 'Անորոշ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante del CD',
        syntacticFunctionHy: 'CD-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña a carta.',
        whyThisFunctionHy: 'Ուղեկցում է carta-ին։'
      },
      {
        word: 'carta',
        wordHy: 'նամակ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Objeto directo entregado.',
        whyThisFunctionHy: 'Հանձնված ուղիղ առարկան։'
      },
      {
        word: 'a',
        wordHy: 'դեպի / -ին (նախդիր)',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CI',
        syntacticFunctionHy: 'CI-ի կապող օղակ (Enlace)',
        whyThisFunctionEs: 'Introduce el complemento indirecto.',
        whyThisFunctionHy: 'Ներմուծում է հանգման խնդիրը։'
      },
      {
        word: 'mi',
        wordHy: 'իմ',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a abuelo.',
        whyThisFunctionHy: 'Ուղեկցում է abuelo-ին։'
      },
      {
        word: 'abuelo',
        wordHy: 'պապիկ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Término del CI',
        syntacticFunctionHy: 'CI-ի անդամի միջուկ',
        whyThisFunctionEs: 'Destinatario de la carta.',
        whyThisFunctionHy: 'Նամակի հասցեատերը։'
      }
    ]
  }
];
