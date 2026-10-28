import { AnalyzedSentence } from './types';

export const sentencesPart3: AnalyzedSentence[] = [
  {
    id: 's-15',
    difficulty: 2,
    difficultyLabel: 'Nivel 2: Simple (5 palabras)',
    sentenceEs: 'La sopa está muy caliente.',
    sentenceHy: 'Ապուրը շատ տաք է։',
    sujeto: {
      text: 'La sopa',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'sopa',
      explanationEs: 'Concuerda con el verbo copulativo "está".',
      explanationHy: 'Համաձայնում է «está» կապակցող բայի հետ։'
    },
    predicado: {
      text: 'está muy caliente',
      type: 'nominal',
      typeLabelEs: 'Predicado nominal',
      typeLabelHy: 'Անվանական ստորոգյալ',
      nucleo: 'está',
      explanationEs: 'Verbo copulativo "estar" con Atributo "muy caliente".',
      explanationHy: '«Estar» կապակցող բայ՝ «muy caliente» Atributo-ով։'
    },
    complements: [
      {
        type: 'Atributo (Atr)',
        typeHy: 'Ստորոգելիական հատկանիշ (Atributo)',
        text: 'muy caliente',
        explanationEs: 'Sustituible por "lo": "La sopa lo está".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «La sopa lo está»։'
      }
    ],
    words: [
      {
        word: 'La',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a sopa.',
        whyThisFunctionHy: 'Ուղեկցում է sopa-ին։'
      },
      {
        word: 'sopa',
        wordHy: 'ապուր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Concuerda con está.',
        whyThisFunctionHy: 'Համաձայնում է está-ի հետ։'
      },
      {
        word: 'está',
        wordHy: 'է (գտնվում է վիճակում)',
        categoryEs: 'Verbo copulativo',
        categoryHy: 'Կապակցող բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado (Cópula)',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo copulativo que une sujeto y atributo.',
        whyThisFunctionHy: 'Կապակցող բայ, որը միացնում է ենթական և ատրիբուտը։'
      },
      {
        word: 'muy',
        wordHy: 'շատ',
        categoryEs: 'Adverbio de cantidad',
        categoryHy: 'Քանակի մակբայ',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Modificador del Adjetivo',
        syntacticFunctionHy: 'Ածականի լրացում/մոդիֆիկատոր',
        whyThisFunctionEs: 'Intensifica a caliente.',
        whyThisFunctionHy: 'Սաստկացնում է caliente-ն։'
      },
      {
        word: 'caliente',
        wordHy: 'տաք',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Singular neutro',
        categoryDetailHy: 'Եզակի թիվ',
        syntacticFunctionEs: 'Núcleo del Atributo',
        syntacticFunctionHy: 'Atributo-ի միջուկ',
        whyThisFunctionEs: 'Expresa el estado de la sopa.',
        whyThisFunctionHy: 'Արտահայտում է ապուրի վիճակը։'
      }
    ]
  },
  {
    id: 's-16',
    difficulty: 3,
    difficultyLabel: 'Nivel 3: Circunstancial de lugar y compañía',
    sentenceEs: 'Lucas pasea con su perro por la alameda.',
    sentenceHy: 'Լուկասը զբոսնում է իր շան հետ ծառուղում։',
    sujeto: {
      text: 'Lucas',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso propio',
      typeLabelHy: 'Հատուկ անունով բացահայտ ենթակա',
      nucleo: 'Lucas',
      explanationEs: 'Nombre propio en 3.ª persona singular.',
      explanationHy: 'Հատուկ անձնանուն 3-րդ դեմքի եզակի թվով։'
    },
    predicado: {
      text: 'pasea con su perro por la alameda',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'pasea',
      explanationEs: 'Verbo intransitivo con CCCompañía ("con su perro") y CCLugar ("por la alameda").',
      explanationHy: 'Բայ CCCompañía («con su perro») և CCLugar («por la alameda») պարագաներով։'
    },
    complements: [
      {
        type: 'CCCompañía',
        typeHy: 'Ընկերակցության պարագա (CCCompañía)',
        text: 'con su perro',
        explanationEs: 'Responde a ¿con quién pasea?',
        explanationHy: 'Պատասխանում է «ո՞ւմ հետ է զբոսնում» հարցին։'
      },
      {
        type: 'CCLugar',
        typeHy: 'Տեղի պարագա (CCL)',
        text: 'por la alameda',
        explanationEs: 'Responde a ¿por dónde pasea?',
        explanationHy: 'Պատասխանում է «որտեղո՞վ է զբոսնում» հարցին։'
      }
    ],
    words: [
      {
        word: 'Lucas',
        wordHy: 'Լուկաս',
        categoryEs: 'Sustantivo propio',
        categoryHy: 'Հատուկ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Concuerda con pasea.',
        whyThisFunctionHy: 'Համաձայնում է pasea-ի հետ։'
      },
      {
        word: 'pasea',
        wordHy: 'զբոսնում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Acción que realiza el sujeto.',
        whyThisFunctionHy: 'Ենթակայի գործողությունը։'
      },
      {
        word: 'con',
        wordHy: 'հետ',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CCCompañía',
        syntacticFunctionHy: 'Ընկերակցության պարագայի կապող օղակ',
        whyThisFunctionEs: 'Introduce la compañía.',
        whyThisFunctionHy: 'Ներմուծում է ընկերակցությունը։'
      },
      {
        word: 'su',
        wordHy: 'իր',
        categoryEs: 'Determinante posesivo',
        categoryHy: 'Ստացական որոշիչ',
        categoryDetailEs: 'Singular',
        categoryDetailHy: 'Եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a perro.',
        whyThisFunctionHy: 'Ուղեկցում է perro-ին։'
      },
      {
        word: 'perro',
        wordHy: 'շուն',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Término',
        syntacticFunctionHy: 'Անդամի միջուկ',
        whyThisFunctionEs: 'Acompañante de Lucas.',
        whyThisFunctionHy: 'Լուկասի ուղեկիցը։'
      },
      {
        word: 'por',
        wordHy: '-ով (նախդիր)',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CCL',
        syntacticFunctionHy: 'CCL-ի կապող օղակ',
        whyThisFunctionEs: 'Introduce el trayecto.',
        whyThisFunctionHy: 'Ներմուծում է ուղեգիծը։'
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
        whyThisFunctionEs: 'Acompaña a alameda.',
        whyThisFunctionHy: 'Ուղեկցում է alameda-ին։'
      },
      {
        word: 'alameda',
        wordHy: 'ծառուղի',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término del CCL',
        syntacticFunctionHy: 'CCL-ի անդամի միջուկ',
        whyThisFunctionEs: 'Lugar transitado.',
        whyThisFunctionHy: 'Զբոսնելու վայրը։'
      }
    ]
  },
  {
    id: 's-17',
    difficulty: 4,
    difficultyLabel: 'Nivel 4: Predicado con CCInstrumento',
    sentenceEs: 'El carpintero cortó la tabla con una sierra eléctrica.',
    sentenceHy: 'Ատաղձագործը տախտակը կտրեց էլեկտրական սղոցով։',
    sujeto: {
      text: 'El carpintero',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'carpintero',
      explanationEs: 'Concuerda en 3.ª persona singular con "cortó".',
      explanationHy: 'Համաձայնում է «cortó»-ի հետ 3-րդ դեմք եզակի թվով։'
    },
    predicado: {
      text: 'cortó la tabla con una sierra eléctrica',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'cortó',
      explanationEs: 'Verbo transitivo con CD ("la tabla") y CCInstrumento ("con una sierra eléctrica").',
      explanationHy: 'Անցողական բայ CD-ով («la tabla») և CCInstrumento-ով («con una sierra eléctrica»)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'la tabla',
        explanationEs: 'Sustituible por "la": "El carpintero la cortó".',
        explanationHy: 'Փոխարինվում է «la»-ով՝ «El carpintero la cortó»։'
      },
      {
        type: 'CCInstrumento',
        typeHy: 'Գործիքի պարագա (CCInstrumento)',
        text: 'con una sierra eléctrica',
        explanationEs: 'Responde a ¿con qué cortó la tabla?',
        explanationHy: 'Պատասխանում է «ինչո՞վ կտրեց տախտակը» հարցին։'
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
        whyThisFunctionEs: 'Acompaña a carpintero.',
        whyThisFunctionHy: 'Ուղեկցում է carpintero-ին։'
      },
      {
        word: 'carpintero',
        wordHy: 'ատաղձագործ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Quien ejecuta el corte.',
        whyThisFunctionHy: 'Կտրող անձը։'
      },
      {
        word: 'cortó',
        wordHy: 'կտրեց',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Pretérito perfecto simple 3.ª sing.',
        categoryDetailHy: 'Անցյալ կատարյալ 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo transitivo principal.',
        whyThisFunctionHy: 'Գլխավոր անցողական բայ։'
      },
      {
        word: 'la',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante del CD',
        syntacticFunctionHy: 'CD-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña a tabla.',
        whyThisFunctionHy: 'Ուղեկցում է tabla-ին։'
      },
      {
        word: 'tabla',
        wordHy: 'տախտակ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Objeto cortado.',
        whyThisFunctionHy: 'Կտրված առարկան։'
      },
      {
        word: 'con',
        wordHy: '-ով (նախդիր)',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CCInst',
        syntacticFunctionHy: 'Գործիքի պարագայի կապող օղակ',
        whyThisFunctionEs: 'Introduce el instrumento.',
        whyThisFunctionHy: 'Ներմուծում է գործիքը։'
      },
      {
        word: 'una',
        wordHy: 'մի (անորոշ)',
        categoryEs: 'Artículo indeterminado',
        categoryHy: 'Անորոշ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a sierra.',
        whyThisFunctionHy: 'Ուղեկցում է sierra-ին։'
      },
      {
        word: 'sierra',
        wordHy: 'սղոց',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término',
        syntacticFunctionHy: 'Անդամի միջուկ',
        whyThisFunctionEs: 'Herramienta utilizada.',
        whyThisFunctionHy: 'Օգտագործված գործիքը։'
      },
      {
        word: 'eléctrica',
        wordHy: 'էլեկտրական',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Califica a sierra.',
        whyThisFunctionHy: 'Բնութագրում է sierra-ն։'
      }
    ]
  },
  {
    id: 's-18',
    difficulty: 6,
    difficultyLabel: 'Nivel 6: Oración impersonal con "haber"',
    sentenceEs: 'Hay muchos libros nuevos en la biblioteca escolar.',
    sentenceHy: 'Դպրոցական գրադարանում շատ նոր գրքեր կան։',
    sujeto: {
      text: 'No tiene sujeto (Oración impersonal)',
      type: 'impersonal',
      typeLabelEs: 'Impersonal con "haber"',
      typeLabelHy: 'Անդեմ նախադասություն «haber» բայով',
      nucleo: '—',
      explanationEs: '¡OJO! El verbo "haber" cuando significa existencia solo se conjuga en 3.ª persona singular ("hay", "había", "hubo"). Lo que sigue NO es sujeto, sino Complemento Directo ("los hay").',
      explanationHy: 'ՈՒՇԱԴՐՈՒԹՅՈՒՆ։ «Haber» բայը գոյություն նշանակելիս խոնարհվում է ՄԻԱՅՆ 3-րդ դեմքի եզակի թվով («hay», «había», «hubo»)։ Հաջորդող անդամը ԵՆԹԱԿԱ ՉԷ, այլ Ուղիղ խնդիր («los hay»)։'
    },
    predicado: {
      text: 'Hay muchos libros nuevos en la biblioteca escolar',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal impersonal',
      typeLabelHy: 'Անդեմ բայական ստորոգյալ',
      nucleo: 'Hay',
      explanationEs: 'Verbo impersonal con CD ("muchos libros nuevos") y CCL ("en la biblioteca escolar").',
      explanationHy: 'Անդեմ բայ CD-ով («muchos libros nuevos») և CCL-ով («en la biblioteca escolar»)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'muchos libros nuevos',
        explanationEs: 'Se sustituye por "los": "Los hay". NUNCA es sujeto.',
        explanationHy: 'Փոխարինվում է «los»-ով՝ «Los hay»։ ԵՐԲԵՔ ենթակա չէ։'
      },
      {
        type: 'CCLugar',
        typeHy: 'Տեղի պարագա (CCL)',
        text: 'en la biblioteca escolar',
        explanationEs: 'Indica el lugar donde existen los libros.',
        explanationHy: 'Ցույց է տալիս գրքերի գտնվելու վայրը։'
      }
    ],
    words: [
      {
        word: 'Hay',
        wordHy: 'կա / կան',
        categoryEs: 'Verbo haber (impersonal)',
        categoryHy: 'Անդեմ բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Verbo de existencia sin sujeto gramatical.',
        whyThisFunctionHy: 'Գոյության անդեմ բայ՝ առանց քերականական ենթակայի։'
      },
      {
        word: 'muchos',
        wordHy: 'շատ',
        categoryEs: 'Determinante indefinido',
        categoryHy: 'Անորոշ որոշիչ',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Determinante del CD',
        syntacticFunctionHy: 'CD-ի որոշիչ',
        whyThisFunctionEs: 'Acompaña al sustantivo libros.',
        whyThisFunctionHy: 'Ուղեկցում է libros գոյականին։'
      },
      {
        word: 'libros',
        wordHy: 'գրքեր',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Objeto que existe (se sustituye por "los").',
        whyThisFunctionHy: 'Գոյություն ունեցող առարկան (փոխարինվում է «los»-ով)։'
      },
      {
        word: 'nuevos',
        wordHy: 'նոր',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Califica a libros.',
        whyThisFunctionHy: 'Բնութագրում է libros-ը։'
      },
      {
        word: 'en',
        wordHy: 'մեջ',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CCL',
        syntacticFunctionHy: 'CCL-ի կապող օղակ',
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
        whyThisFunctionEs: 'Acompaña a biblioteca.',
        whyThisFunctionHy: 'Ուղեկցում է biblioteca-ին։'
      },
      {
        word: 'biblioteca',
        wordHy: 'գրադարան',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término',
        syntacticFunctionHy: 'Անդամի միջուկ',
        whyThisFunctionEs: 'Lugar donde están los libros.',
        whyThisFunctionHy: 'Գրքերի գտնվելու վայրը։'
      },
      {
        word: 'escolar',
        wordHy: 'դպրոցական',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Singular',
        categoryDetailHy: 'Եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Especifica la biblioteca.',
        whyThisFunctionHy: 'Հստակեցնում է biblioteca-ն։'
      }
    ]
  }
];
