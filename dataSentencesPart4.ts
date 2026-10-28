import { AnalyzedSentence } from './types';

export const sentencesPart4: AnalyzedSentence[] = [
  {
    id: 's-19',
    difficulty: 3,
    difficultyLabel: 'Nivel 3: Con CD y CCM',
    sentenceEs: 'El sol de la mañana calienta suavemente la habitación.',
    sentenceHy: 'Առավոտյան արևը մեղմորեն տաքացնում է սենյակը։',
    sujeto: {
      text: 'El sol de la mañana',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso',
      typeLabelHy: 'Բացահայտ ենթակա',
      nucleo: 'sol',
      explanationEs: 'Concuerda con "calienta". "De la mañana" es CN.',
      explanationHy: 'Համաձայնում է «calienta»-ի հետ։ «De la mañana»-ն CN է։'
    },
    predicado: {
      text: 'calienta suavemente la habitación',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'calienta',
      explanationEs: 'Verbo con CCM ("suavemente") y CD ("la habitación").',
      explanationHy: 'Բայ CCM-ով («suavemente») և CD-ով («la habitación»)։'
    },
    complements: [
      {
        type: 'CCModo',
        typeHy: 'Ձևի պարագա (CCModo)',
        text: 'suavemente',
        explanationEs: 'Responde a ¿cómo calienta?',
        explanationHy: 'Պատասխանում է «ինչպե՞ս է տաքացնում» հարցին։'
      },
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'la habitación',
        explanationEs: 'Se sustituye por "la": "la calienta".',
        explanationHy: 'Փոխարինվում է «la»-ով՝ «la calienta»։'
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
        whyThisFunctionEs: 'Acompaña a sol.',
        whyThisFunctionHy: 'Ուղեկցում է sol-ին։'
      },
      {
        word: 'sol',
        wordHy: 'արև',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Centro del sujeto.',
        whyThisFunctionHy: 'Ենթակայի կենտրոնը։'
      },
      {
        word: 'de',
        wordHy: '-ի (նախդիր)',
        categoryEs: 'Preposición',
        categoryHy: 'Նախդիր',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Enlace del CN',
        syntacticFunctionHy: 'CN-ի կապող օղակ',
        whyThisFunctionEs: 'Introduce el complemento del nombre.',
        whyThisFunctionHy: 'Ներմուծում է գոյականի լրացումը։'
      },
      {
        word: 'la',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a mañana.',
        whyThisFunctionHy: 'Ուղեկցում է mañana-ին։'
      },
      {
        word: 'mañana',
        wordHy: 'առավոտ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Término del CN',
        syntacticFunctionHy: 'CN-ի անդամի միջուկ',
        whyThisFunctionEs: 'Especifica al sol.',
        whyThisFunctionHy: 'Հստակեցնում է sol-ը։'
      },
      {
        word: 'calienta',
        wordHy: 'տաքացնում է',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Acción que realiza el sol.',
        whyThisFunctionHy: 'Արևի գործողությունը։'
      },
      {
        word: 'suavemente',
        wordHy: 'մեղմորեն',
        categoryEs: 'Adverbio de modo',
        categoryHy: 'Ձևի մակբայ',
        categoryDetailEs: 'Terminado en -mente',
        categoryDetailHy: '-mente-ով ավարտվող',
        syntacticFunctionEs: 'CCModo',
        syntacticFunctionHy: 'Ձևի պարագա',
        whyThisFunctionEs: 'Indica la manera de calentar.',
        whyThisFunctionHy: 'Ցույց է տալիս տաքացնելու կերպը։'
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
        whyThisFunctionEs: 'Acompaña a habitación.',
        whyThisFunctionHy: 'Ուղեկցում է habitación-ին։'
      },
      {
        word: 'habitación',
        wordHy: 'սենյակ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Lugar calentado directamente.',
        whyThisFunctionHy: 'Ուղղակիորեն տաքացվող առարկան։'
      }
    ]
  },
  {
    id: 's-20',
    difficulty: 5,
    difficultyLabel: 'Nivel 5: Sujeto omitido con CD y CCL',
    sentenceEs: 'Vimos una película emocionante en el cine.',
    sentenceHy: 'Կինոթատրոնում հուզիչ ֆիլմ դիտեցինք։',
    sujeto: {
      text: '[Nosotros / Nosotras]',
      type: 'omitido',
      typeLabelEs: 'Sujeto omitido [Nosotros]',
      typeLabelHy: 'Զեղչված ենթակա [Մենք]',
      nucleo: '[Nosotros]',
      explanationEs: 'La desinencia "-mos" de "vimos" indica 1.ª persona plural.',
      explanationHy: '«Vimos» բայի «-mos» վերջավորությունը ցույց է տալիս 1-ին դեմք հոգնակի թիվը։'
    },
    predicado: {
      text: 'Vimos una película emocionante en el cine',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'Vimos',
      explanationEs: 'Predicado con CD ("una película emocionante") y CCL ("en el cine").',
      explanationHy: 'Ստորոգյալ CD-ով («una película emocionante») և CCL-ով («en el cine»)։'
    },
    complements: [
      {
        type: 'Complemento Directo (CD)',
        typeHy: 'Ուղիղ խնդիր (CD)',
        text: 'una película emocionante',
        explanationEs: 'Se sustituye por "la": "La vimos en el cine".',
        explanationHy: 'Փոխարինվում է «la»-ով՝ «La vimos en el cine»։'
      },
      {
        type: 'CCLugar',
        typeHy: 'Տեղի պարագա (CCL)',
        text: 'en el cine',
        explanationEs: 'Indica el lugar donde se vio la película.',
        explanationHy: 'Ցույց է տալիս ֆիլմը դիտելու վայրը։'
      }
    ],
    words: [
      {
        word: 'Vimos',
        wordHy: 'դիտեցինք / տեսանք',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Pretérito perfecto simple 1.ª pers. plural',
        categoryDetailHy: 'Անցյալ կատարյալ 1-ին դեմք հոգնակի',
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
        whyThisFunctionEs: 'Acompaña a película.',
        whyThisFunctionHy: 'Ուղեկցում է película-ին։'
      },
      {
        word: 'película',
        wordHy: 'ֆիլմ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del CD',
        syntacticFunctionHy: 'CD-ի միջուկ',
        whyThisFunctionEs: 'Objeto visto.',
        whyThisFunctionHy: 'Դիտված առարկան։'
      },
      {
        word: 'emocionante',
        wordHy: 'հուզիչ',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Singular',
        categoryDetailHy: 'Եզակի',
        syntacticFunctionEs: 'Complemento del Nombre (CN)',
        syntacticFunctionHy: 'Գոյականի լրացում (CN)',
        whyThisFunctionEs: 'Califica a película.',
        whyThisFunctionHy: 'Բնութագրում է película-ն։'
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
        word: 'el',
        wordHy: 'այն',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Determinante del CCL',
        syntacticFunctionHy: 'CCL-ի որոշիչ',
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
        whyThisFunctionEs: 'Lugar donde se vio.',
        whyThisFunctionHy: 'Դիտելու վայրը։'
      }
    ]
  },
  {
    id: 's-21',
    difficulty: 6,
    difficultyLabel: 'Nivel 6: Verbo parecer y Atributo complejo',
    sentenceEs: 'María parece muy cansada después del partido.',
    sentenceHy: 'Մարիան խաղից հետո շատ հոգնած է թվում։',
    sujeto: {
      text: 'María',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso propio',
      typeLabelHy: 'Հատուկ անունով բացահայտ ենթակա',
      nucleo: 'María',
      explanationEs: 'Concuerda con "parece".',
      explanationHy: 'Համաձայնում է «parece»-ի հետ։'
    },
    predicado: {
      text: 'parece muy cansada después del partido',
      type: 'nominal',
      typeLabelEs: 'Predicado nominal',
      typeLabelHy: 'Անվանական ստորոգյալ',
      nucleo: 'parece',
      explanationEs: 'Verbo copulativo "parece" + Atributo "muy cansada" + CCT "después del partido".',
      explanationHy: '«Parece» կապակցող բայ + «muy cansada» Atributo + «después del partido» CCT։'
    },
    complements: [
      {
        type: 'Atributo (Atr)',
        typeHy: 'Ստորոգելիական հատկանիշ (Atributo)',
        text: 'muy cansada',
        explanationEs: 'Sustituible por "lo": "María lo parece".',
        explanationHy: 'Փոխարինվում է «lo»-ով՝ «María lo parece»։'
      },
      {
        type: 'CCTiempo',
        typeHy: 'Ժամանակի պարագա (CCT)',
        text: 'después del partido',
        explanationEs: 'Indica cuándo parece cansada.',
        explanationHy: 'Ցույց է տալիս, թե երբ է նա հոգնած թվում։'
      }
    ],
    words: [
      {
        word: 'María',
        wordHy: 'Մարիա',
        categoryEs: 'Sustantivo propio',
        categoryHy: 'Հատուկ գոյական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Persona sobre la que se predica.',
        whyThisFunctionHy: 'Անձ, ում մասին ստորոգվում է։'
      },
      {
        word: 'parece',
        wordHy: 'թվում է',
        categoryEs: 'Verbo copulativo',
        categoryHy: 'Կապակցող բայ',
        categoryDetailEs: 'Presente indicativo 3.ª pers. sing.',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Cópula que une sujeto y atributo.',
        whyThisFunctionHy: 'Կապակցող օղակ ենթակայի և ատրիբուտի միջև։'
      },
      {
        word: 'muy',
        wordHy: 'շատ',
        categoryEs: 'Adverbio de cantidad',
        categoryHy: 'Քանակի մակբայ',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Modificador del Adjetivo',
        syntacticFunctionHy: 'Ածականի մոդիֆիկատոր',
        whyThisFunctionEs: 'Intensifica a cansada.',
        whyThisFunctionHy: 'Սաստկացնում է cansada-ն։'
      },
      {
        word: 'cansada',
        wordHy: 'հոգնած',
        categoryEs: 'Adjetivo calificativo',
        categoryHy: 'Որակական ածական',
        categoryDetailEs: 'Fem. sing.',
        categoryDetailHy: 'Իգական եզակի',
        syntacticFunctionEs: 'Núcleo del Atributo',
        syntacticFunctionHy: 'Atributo-ի միջուկ',
        whyThisFunctionEs: 'Atributo que concuerda con María.',
        whyThisFunctionHy: 'Atributo, որը համաձայնում է María-ի հետ։'
      },
      {
        word: 'después',
        wordHy: 'հետո',
        categoryEs: 'Adverbio de tiempo',
        categoryHy: 'Ժամանակի մակբայ',
        categoryDetailEs: 'Invariable',
        categoryDetailHy: 'Անփոփոխ',
        syntacticFunctionEs: 'Núcleo del CCT',
        syntacticFunctionHy: 'CCT-ի միջուկ',
        whyThisFunctionEs: 'Marca el momento temporal posterior.',
        whyThisFunctionHy: 'Նշում է հաջորդող ժամանակային պահը։'
      },
      {
        word: 'del',
        wordHy: 'խաղի (de + el)',
        categoryEs: 'Artículo contracto (de + el)',
        categoryHy: 'Ձուլված հոդ',
        categoryDetailEs: 'Preposición + determinante',
        categoryDetailHy: 'Նախդիր + որոշիչ',
        syntacticFunctionEs: 'Enlace + Det',
        syntacticFunctionHy: 'Կապող օղակ + Որոշիչ',
        whyThisFunctionEs: 'Une con partido.',
        whyThisFunctionHy: 'Կապում է partido-ի հետ։'
      },
      {
        word: 'partido',
        wordHy: 'խաղ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Masc. sing.',
        categoryDetailHy: 'Արական եզակի',
        syntacticFunctionEs: 'Término del CCT',
        syntacticFunctionHy: 'CCT-ի անդամ',
        whyThisFunctionEs: 'Acontecimiento temporal de referencia.',
        whyThisFunctionHy: 'Ելակետային ժամանակային իրադարձությունը։'
      }
    ]
  },
  {
    id: 's-22',
    difficulty: 7,
    difficultyLabel: 'Nivel 7: Trampa de examen con "a los alumnos"',
    sentenceEs: 'A los estudiantes les interesan las ciencias.',
    sentenceHy: 'Ուսանողներին հետաքրքրում են գիտությունները։',
    sujeto: {
      text: 'las ciencias',
      type: 'expreso',
      typeLabelEs: 'Sujeto expreso pospuesto',
      typeLabelHy: 'Հետադաս բացահայտ ենթակա',
      nucleo: 'ciencias',
      explanationEs: '¡TRAMPA! El sujeto es "las ciencias" (concuerda en plural con "interesan"). "A los estudiantes" es Complemento Indirecto.',
      explanationHy: 'ԹԱԿԱՐԴ։ Ենթական «las ciencias»-ն է (հոգնակի թվով համաձայնում է «interesan»-ի հետ)։ «A los estudiantes»-ը Հանգման խնդիրն է (CI)։'
    },
    predicado: {
      text: 'A los estudiantes les interesan',
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: 'interesan',
      explanationEs: 'Verbo con CI duplicado.',
      explanationHy: 'Բայ կրկնապատկված CI-ով։'
    },
    complements: [
      {
        type: 'Complemento Indirecto (CI duplicado)',
        typeHy: 'Հանգման խնդիր (CI կրկնապատկված)',
        text: 'A los estudiantes ... les',
        explanationEs: 'Complemento indirecto con preposición "a" y pronombre "les".',
        explanationHy: 'Հանգման խնդիր «a» նախդիրով և «les» դերանունով։'
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
        syntacticFunctionHy: 'CI-ի կապող օղակ',
        whyThisFunctionEs: 'Introduce el complemento indirecto.',
        whyThisFunctionHy: 'Ներմուծում է հանգման խնդիրը։'
      },
      {
        word: 'los',
        wordHy: 'այն (հոգնակի)',
        categoryEs: 'Artículo determinado',
        categoryHy: 'Որոշյալ հոդ',
        categoryDetailEs: 'Masc. plural',
        categoryDetailHy: 'Արական հոգնակի',
        syntacticFunctionEs: 'Determinante',
        syntacticFunctionHy: 'Որոշիչ',
        whyThisFunctionEs: 'Acompaña a estudiantes.',
        whyThisFunctionHy: 'Ուղեկցում է estudiantes-ին։'
      },
      {
        word: 'estudiantes',
        wordHy: 'ուսանողներ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Plural',
        categoryDetailHy: 'Հոգնակի',
        syntacticFunctionEs: 'Núcleo del Término del CI',
        syntacticFunctionHy: 'CI-ի անդամի միջուկ',
        whyThisFunctionEs: 'Personas interesadas (destinatario afectivo).',
        whyThisFunctionHy: 'Հետաքրքրված անձինք։'
      },
      {
        word: 'les',
        wordHy: 'նրանց',
        categoryEs: 'Pronombre personal átono',
        categoryHy: 'Անշեշտ անձնական դերանուն',
        categoryDetailEs: '3.ª persona plural',
        categoryDetailHy: '3-րդ դեմք հոգնակի',
        syntacticFunctionEs: 'Complemento Indirecto (CI)',
        syntacticFunctionHy: 'Հանգման խնդիր (CI)',
        whyThisFunctionEs: 'Reduplica a los estudiantes.',
        whyThisFunctionHy: 'Կրկնում է «a los estudiantes»-ը։'
      },
      {
        word: 'interesan',
        wordHy: 'հետաքրքրում են',
        categoryEs: 'Verbo',
        categoryHy: 'Բայ',
        categoryDetailEs: 'Presente indicativo 3.ª plural',
        categoryDetailHy: 'Սահմանական ներկա 3-րդ դեմք հոգնակի',
        syntacticFunctionEs: 'Núcleo del Predicado',
        syntacticFunctionHy: 'Ստորոգյալի միջուկ',
        whyThisFunctionEs: 'Concuerda con las ciencias.',
        whyThisFunctionHy: 'Համաձայնում է las ciencias-ի հետ։'
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
        whyThisFunctionEs: 'Acompaña a ciencias.',
        whyThisFunctionHy: 'Ուղեկցում է ciencias-ին։'
      },
      {
        word: 'ciencias',
        wordHy: 'գիտություններ',
        categoryEs: 'Sustantivo común',
        categoryHy: 'Հասարակ գոյական',
        categoryDetailEs: 'Fem. plural',
        categoryDetailHy: 'Իգական հոգնակի',
        syntacticFunctionEs: 'Núcleo del Sujeto',
        syntacticFunctionHy: 'Ենթակայի միջուկ',
        whyThisFunctionEs: 'Es el sujeto gramatical en plural.',
        whyThisFunctionHy: 'Հոգնակի թվով քերականական ենթական է։'
      }
    ]
  }
];
