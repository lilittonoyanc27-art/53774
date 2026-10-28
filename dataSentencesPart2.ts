import { AnalyzedSentence } from './types';

export const sentencesPart2: AnalyzedSentence[] = [
  // NIVEL 4: Oraciones con múltiples complementos circunstanciales
  {
    id: 's-11',
    difficulty: 4,
    difficultyLabel: 'Nivel 4: Múltiples circunstanciales (Lugar, Tiempo, Modo)',
    sentenceEs: 'Ayer mi hermana compró un regalo para su amiga en la tienda.',
    sentenceHy: 'Երեկ իմ քույրը խանութում նվեր գնեց իր ընկերուհու համար։',
    sujeto: {
      text: 'mi hermana',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'hermana',
      explanationEs: 'Concuerda en 3.ª persona singular con "compró".',
      explanationHy: 'Համաձայնում է 3-րդ դեմքի եզակի թվով «compró»-ի հետ։'
    },
    predicado: {
      text: 'Ayer compró un regalo para su amiga en la tienda',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal con varios complementos',
      typeLabelHy: 'Բայական ստորոգյալ մի քանի լրացումներով',
      nucleo: 'compró',
      explanationEs: 'Núcleo verbal rodeado de CCT (Ayer), CD (un regalo), CI/Destinatario (para su amiga) y CCL (en la tienda).',
      explanationHy: 'Բայական միջուկ՝ CCT (Ayer), CD (un regalo), CI/հասցեատեր (para su amiga) և CCL (en la tienda) լրացումներով։'
    },
    complements: [
      {
        type: 'CCTiempo',
        typeHy: 'Ժամանակի պարագա (CCT)',
        text: 'Ayer',
        explanationEs: 'Indica el momento de la compra.',
        explanationHy: 'Ցույց է տալիս գնման պահը։'
      },
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'un regalo',
        explanationEs: 'Se sustituye por "lo": "Ayer mi hermana lo compró".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «Ayer mi hermana lo compró»։'
      },
      {
        type: 'Complemento Indirecto (CI)',
        typeHy: 'Հանգման խնդիր (CI)',
        text: 'para su amiga',
        explanationEs: 'Destinatario del regalo.',
        explanationHy: 'Նվերի հասցեատերը։'
      },
      {
        type: 'CCLugar',
        typeHy: 'Տեղի պարագա (CCL)',
        text: 'en la tienda',
        explanationEs: 'Indica el lugar donde ocurrió la acción.',
        explanationHy: 'Ցույց է տալիս գործողության վայրը։'
      }
    ],
    words: [
      {
        word: 'Ayer',
        wordHy: 'երեկ',
        categoryEs: 'Adverbio de tiempo',
        categoryHy: 'Ժամանակի մակբայ',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'CC de Tiempo (CCT)',
        syntacticFunctionHy: 'Ժամանակի պարագա',
        whyThisFunctionEs: 'Responde a ¿cuándo compró?',
        whyThisFunctionHy: 'Պատասխանում է «ե՞րբ գնեց» հարցին։'
      },
      {
        word: 'mi',
        wordHy: 'իմ',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a hermana.',
        whyThisFunctionHy: 'Ուղեկցում է hermana-ին։'
      },
      {
        word: 'hermana',
        wordHy: 'քույր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Quien realiza la acción de comprar.',
        whyThisFunctionHy: 'Գնող անձը։'
      },
      {
        word: 'compró',
        wordHy: 'գնեց',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Pretérito perfecto simple 3.ª sing.',
        categoryDetailHy: 'Անցյալ կատարյալ 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo principal de la oración.',
        whyThisFunctionHy: 'Նախադասության գլխավոր բայ։'
      },
      {
        word: 'un',
        wordHy: 'մի (անորոշ)',
        categoryEs: 'Artículo indeterminado',
        categoryHy: 'Անորոշ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante del CD',
        syntacticFunctionHy: 'CD-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña a regalo.',
        whyThisFunctionHy: 'Ուղեկցում է regalo-ին։'
      },
      {
        word: 'regalo',
        wordHy: 'նվեր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Objeto comprado.',
        whyThisFunctionHy: 'Գնված առարկան։'
      },
      {
        word: 'para',
        wordHy: 'համար',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CI',
        syntacticFunctionHy: 'CI-ի կապող օղակ (Enlace)',
        whyThisFunctionEs: 'Introduce el destinatario.',
        whyThisFunctionHy: 'Ներմուծում է հասցեատիրոջը։'
      },
      {
        word: 'su',
        wordHy: 'իր',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Singular',
        categoryDetailHy: 'Եզակի թիվ',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a amiga.',
        whyThisFunctionHy: 'Ուղեկցում է amiga-ին։'
      },
      {
        word: 'amiga',
        wordHy: 'ընկերուհի',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término del CI',
        syntacticFunctionHy: 'CI-ի անդամի միջուկ',
        whyThisFunctionEs: 'Persona que recibe el regalo.',
        whyThisFunctionHy: 'Նվերը ստացող անձը։'
      },
      {
        word: 'en',
        wordHy: 'մեջ',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CCL',
        syntacticFunctionHy: 'CCL-ի կապող օղակ (Enlace)',
        whyThisFunctionEs: 'Introduce el lugar.',
        whyThisFunctionHy: 'Ներմուծում է տեղը։'
      },
      {
        word: 'la',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante del CCL',
        syntacticFunctionHy: 'CCL-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña a tienda.',
        whyThisFunctionHy: 'Ուղեկցում է tienda-ին։'
      },
      {
        word: 'tienda',
        wordHy: 'խանութ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término del CCL',
        syntacticFunctionHy: 'CCL-ի անդամի միջուկ',
        whyThisFunctionEs: 'Lugar donde se compró.',
        whyThisFunctionHy: 'Գնման վայրը։'
      }
    ]
  },

  // NIVEL 5: Sujeto omitido / elíptico
  {
    id: 's-12',
    difficulty: 5,
    difficultyLabel: 'Nivel 5: Sujeto omitido o elíptico',
    sentenceEs: 'Compramos entradas para el cine.',
    sentenceHy: 'Կինոյի տոմսեր գնեցինք։',
    sujeto: {
      text: '[Nosotros / Nosotras]',
      type: 'omitido',
      typeLabelEs: 'Sujeto omitido o elíptico [Nosotros]',
      typeLabelHy: 'Զեղչված ենթակա [Nosotros / Մենք]',
      nucleo: '[Nosotros]',
      explanationEs: 'No aparece escrito, pero la desinencia "-mos" de "compramos" señala claramente a la 1.ª persona del plural.',
      explanationHy: 'Գրված չէ, բայց «compramos» բայի «-mos» վերջավորությունը հստակ ցույց է տալիս հոգնակի 1-ին դեմքը (մենք)։'
    },
    predicado: {
      text: 'Compramos entradas para el cine',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'Compramos',
      explanationEs: 'Toda la oración escrita forma el sintagma verbal predicado.',
      explanationHy: 'Ամբողջ գրված նախադասությունը կազմում է բայական ստորոգյալը։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'entradas',
        explanationEs: 'Se sustituye por "las": "Las compramos".',
        explanationHy: 'Փոխարինվում է «las»-ով՝ «Las compramos» (Դրանք գնեցինք)։'
      },
      {
        type: 'CCFinalidad / Destino',
        typeHy: 'Նպատակի պարագա (CCFinalidad)',
        text: 'para el cine',
        explanationEs: 'Indica el destino de las entradas.',
        explanationHy: 'Ցույց է տալիս տոմսերի նպատակը/նշանակությունը։'
      }
    ],
    words: [
      {
        word: 'Compramos',
        wordHy: 'գնեցինք',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: '1.ª pers. plural pretérito perfecto simple',
        categoryDetailHy: '1-ին դեմք հոգնակի անցյալ կատարյալ',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo conjugado que contiene la persona del sujeto omitido.',
        whyThisFunctionHy: 'Դիմավոր բայ, որը պարունակում է զեղչված ենթակայի դեմքը։'
      },
      {
        word: 'entradas',
        wordHy: 'տոմսեր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. plural',
        categoryDetailHy: 'Իգական հոգնակի',
        syntacticFunctionEs: 'Complemento Directo (CD)',
        syntacticFunctionHy: 'Ուղիղ խնդիր (CD)',
        whyThisFunctionEs: 'Es el objeto comprado ("las compramos").',
        whyThisFunctionHy: 'Գնված առարկան է («las compramos»)։'
      },
      {
        word: 'para',
        wordHy: 'համար',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace',
        syntacticFunctionHy: 'Կապող օղակ (Enlace)',
        whyThisFunctionEs: 'Introduce el sintagma preposicional.',
        whyThisFunctionHy: 'Ներմուծում է նախդիրային կապակցությունը։'
      },
      {
        word: 'el',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a cine.',
        whyThisFunctionHy: 'Ուղեկցում է cine-ին։'
      },
      {
        word: 'cine',
        wordHy: 'կինոթատրոն',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Término',
        syntacticFunctionHy: 'Անդամի միջուկ',
        whyThisFunctionEs: 'Término de la preposición para.',
        whyThisFunctionHy: 'Para նախդիրի անդամը։'
      }
    ]
  },

  // NIVEL 6: Estructuras con verbos copulativos y pronombres
  {
    id: 's-13',
    difficulty: 6,
    difficultyLabel: 'Nivel 6: Verbo copulativo y predicado nominal',
    sentenceEs: 'Aquel cuadro antiguo parecía una obra maestra.',
    sentenceHy: 'Այդ հին նկարը գլուխգործոց էր թվում։',
    sujeto: {
      text: 'Aquel cuadro antiguo',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'cuadro',
      explanationEs: 'SN Sujeto con determinante demostrativo "aquel" y adjetivo "antiguo".',
      explanationHy: 'Ենթակա՝ «aquel» ցուցական որոշիչով և «antiguo» ածականով։'
    },
    predicado: {
      text: 'parecía una obra maestra',
      type: 'nominal',
      typeLabelEs: 'Predicado nominal',
      typeLabelHy: 'Անվանական ստորոգյալ',
      nucleo: 'parecía',
      explanationEs: 'Verbo copulativo "parecer" + Atributo "una obra maestra".',
      explanationHy: '«Parecer» կապակցող բայ + «una obra maestra» (Atributo)։'
    },
    complements: [
      {
        type: 'Atributo (Atr)',
        typeHy: 'Ստորոգելիական հատկանիշ (Atributo)',
        text: 'una obra maestra',
        explanationEs: 'Sustituible por "lo": "Aquel cuadro antiguo lo parecía".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «Aquel cuadro antiguo lo parecía»։'
      }
    ],
    words: [
      {
        word: 'Aquel',
        wordHy: 'այն (հեռու)',
        categoryEs: 'Determinante demostrativo',
        categoryHy: 'Ցուցական որոշիչ',
        categoryDetailEs: 'Lejanía, masc. sing.',
        categoryDetailHy: 'Հեռու տարածություն, արական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a cuadro.',
        whyThisFunctionHy: 'Ուղեկցում է cuadro-ին։'
      },
      {
        word: 'cuadro',
        wordHy: 'նկար',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Elemento que concuerda con parecía.',
        whyThisFunctionHy: 'Տարր, որը համաձայնում է parecía-ի հետ։'
      },
      {
        word: 'antiguo',
        wordHy: 'հին',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Califica a cuadro.',
        whyThisFunctionHy: 'Բնութագրում է cuadro-ին։'
      },
      {
        word: 'parecía',
        wordHy: 'թվում էր',
        categoryEs: 'Verbo copulativo',
        categoryHy: 'Կապակցող բայ (parecer)',
        categoryDetailEs: 'Pretérito imperfecto indicativo 3.ª sing.',
        categoryDetailHy: 'Անկատար անցյալ 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado (Cópula)',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo copulativo que une sujeto y atributo.',
        whyThisFunctionHy: 'Կապակցող բայ, որը միացնում է ենթական և ատրիբուտը։'
      },
      {
        word: 'una',
        wordHy: 'մի (անորոշ)',
        categoryEs: 'Artículo indeterminado',
        categoryHy: 'Անորոշ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante del Atributo',
        syntacticFunctionHy: 'Atributo-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña a obra.',
        whyThisFunctionHy: 'Ուղեկցում է obra-ին։'
      },
      {
        word: 'obra',
        wordHy: 'գործ / աշխատանք',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Atributo',
        syntacticFunctionHy: 'Atributo-ի միջուկ',
        whyThisFunctionEs: 'Núcleo del sintagma que atribuye la cualidad.',
        whyThisFunctionHy: 'Հատկանիշը վերագրող կապակցության միջուկը։'
      },
      {
        word: 'maestra',
        wordHy: 'վարպետական / գլխավոր',
        categoryEs: 'Adjetivo / Sustantivo en aposición',
        categoryHy: 'Ածական / Բացահայտիչ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Especifica la palabra obra.',
        whyThisFunctionHy: 'Հստակեցնում է obra բառը։'
      }
    ]
  },

  // NIVEL 7: Oración trampa de examen (verbo gustar con sujeto pospuesto)
  {
    id: 's-14',
    difficulty: 7,
    difficultyLabel: 'Nivel 7: Trampa de examen (Verbo gustar y sujeto pospuesto)',
    sentenceEs: 'A mi hermano le gustan las matemáticas.',
    sentenceHy: 'Իմ եղբորը դուր է գալիս մաթեմատիկան։',
    sujeto: {
      text: 'las matemáticas',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso pospuesto',
      typeLabelHy: 'Հետադաս բացահայտ ենթակա',
      nucleo: 'matemáticas',
      explanationEs: '¡TRAMPA TÍPICA! El sujeto es "las matemáticas" porque concuerda en plural con "gustan". "A mi hermano" empieza por preposición "a", por lo que NUNCA puede ser sujeto; es el Complemento Indirecto.',
      explanationHy: 'ԴԱՍԱԿԱՆ ԹԱԿԱՐԴ։ Ենթական «las matemáticas»-ն է, քանի որ հոգնակի թվով համաձայնում է «gustan»-ի հետ։ «A mi hermano»-ն սկսվում է «a» նախդիրով, ուստի ԵՐԲԵՔ չի կարող ենթակա լինել. այն Հանգման խնդիրն է (CI)։'
    },
    predicado: {
      text: 'A mi hermano le gustan',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'gustan',
      explanationEs: 'Verbo predicativo en plural con CI duplicado ("a mi hermano" y "le").',
      explanationHy: 'Բայական ստորոգյալ հոգնակի թվով և կրկնապատկված CI-ով («a mi hermano» և «le»)։'
    },
    complements: [
      {
        type: 'Complemento Indirecto (CI duplicado)',
        typeHy: 'Հանգման խնդիր (CI կրկնապատկված)',
        text: 'A mi hermano ... le',
        explanationEs: 'En español es obligatorio redoblar el CI con el pronombre "le" cuando va antepuesto.',
        explanationHy: 'Իսպաներենում պարտադիր է կրկնել CI-ն «le» դերանունով, երբ այն նախադաս է։'
      }
    ],
    words: [
      {
        word: 'A',
        wordHy: 'դեպի / -ին (նախդիր)',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CI',
        syntacticFunctionHy: 'CI-ի կապող օղակ (Enlace)',
        whyThisFunctionEs: 'Marca el complemento indirecto de persona.',
        whyThisFunctionHy: 'Նշում է անձի հանգման խնդիրը։'
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
        syntacticFunctionEs: 'Núcleo del Término del CI',
        syntacticFunctionHy: 'CI-ի անդամի միջուկ',
        whyThisFunctionEs: 'Persona a quien le gustan las matemáticas.',
        whyThisFunctionHy: 'Այն անձը, ում դուր է գալիս մաթեմատիկան։'
      },
      {
        word: 'le',
        wordHy: 'նրան',
        categoryEs: 'Pronombre personal átono',
        categoryHy: 'Անշեշտ անձնական դերանուն',
        categoryDetailEs: '3.ª persona singular',
        categoryDetailHy: '3-րդ դեմք եզակի',
        syntacticFunctionEs: 'Complemento Indirecto (CI)',
        syntacticFunctionHy: 'Հանգման խնդիր (CI)',
        whyThisFunctionEs: 'Reduplica al complemento indirecto a mi hermano.',
        whyThisFunctionHy: 'Կրկնում է «a mi hermano» հանգման խնդիրը։'
      },
      {
        word: 'gustan',
        wordHy: 'դուր են գալիս',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. plural',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք հոգնակի',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Concuerda en plural con el sujeto las matemáticas.',
        whyThisFunctionHy: 'Համաձայնում է հոգնակի թվով las matemáticas ենթակայի հետ։'
      },
      {
        word: 'las',
        wordHy: 'այն (հոգնակի)',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Fem. plural',
        categoryDetailHy: 'Իգական հոգնակի',
        syntacticFunctionEs: 'Determinante del Sujeto',
        syntacticFunctionHy: 'Ենթակայի որոշիչ',
        whyThisFunctionEs: 'Acompaña a matemáticas.',
        whyThisFunctionHy: 'Ուղեկցում է matemáticas-ին։'
      },
      {
        word: 'matemáticas',
        wordHy: 'մաթեմատիկա',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. plural',
        categoryDetailHy: 'Իգական հոգնակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Es el sujeto real que concuerda con gustan.',
        whyThisFunctionHy: 'Իրական ենթական է, որը համաձայնում է gustan-ի հետ։'
      }
    ]
  }
];
