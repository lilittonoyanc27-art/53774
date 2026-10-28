import { AnalyzedSentence } from './types';

// Sentences 23 to 65 covering all 7 levels
const extraRaw = [
  {
    id: 's-23',
    diff: 1 as const,
    label: 'Nivel 1: Muy corta (3-4 palabras)',
    es: 'El viento sopla.',
    hy: 'Քամին փչում է։',
    sText: 'El viento', sNuc: 'viento', sExpEs: 'Sujeto expreso singular.', sExpHy: 'Եզակի թվով բացահայտ ենթակա։',
    pText: 'sopla', pNuc: 'sopla', pType: 'verbal' as const, pExpEs: 'Predicado verbal simple.', pExpHy: 'Պարզ բայական ստորոգյալ։',
    w: [
      { word: 'El', hy: 'այն', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a viento.', wHy: 'Ուղեկցում է viento-ին։' },
      { word: 'viento', hy: 'քամի', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Inanimado, masc. sing.', detHy: 'Անշունչ, արական եզակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Elemento que realiza la acción.', wHy: 'Գործողությունը կատարող տարրը։' },
      { word: 'sopla', hy: 'փչում է', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª pers.', detHy: 'Սահմանական ներկա 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción del sujeto.', wHy: 'Ենթակայի գործողությունը։' }
    ]
  },
  {
    id: 's-24',
    diff: 1 as const,
    label: 'Nivel 1: Muy corta (3-4 palabras)',
    es: 'Los pájaros cantan.',
    hy: 'Թռչունները երգում են։',
    sText: 'Los pájaros', sNuc: 'pájaros', sExpEs: 'Sujeto expreso plural.', sExpHy: 'Հոգնակի թվով բացահայտ ենթակա։',
    pText: 'cantan', pNuc: 'cantan', pType: 'verbal' as const, pExpEs: 'Predicado verbal intransitivo.', pExpHy: 'Անանցողական բայական ստորոգյալ։',
    w: [
      { word: 'Los', hy: 'այն (հոգնակի)', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Masc. plural', detHy: 'Արական հոգնակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a pájaros.', wHy: 'Ուղեկցում է pájaros-ին։' },
      { word: 'pájaros', hy: 'թռչուններ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Animado, masc. plural', detHy: 'Շնչավոր, արական հոգնակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Concuerda con cantan.', wHy: 'Համաձայնում է cantan-ի հետ։' },
      { word: 'cantan', hy: 'երգում են', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª plural', detHy: 'Սահմանական ներկա 3-րդ դեմք հոգնակի', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción en plural.', wHy: 'Հոգնակի գործողություն։' }
    ]
  },
  {
    id: 's-25',
    diff: 1 as const,
    label: 'Nivel 1: Muy corta (3-4 palabras)',
    es: 'Mi madre cocina.',
    hy: 'Իմ մայրիկը կերակուր է պատրաստում։',
    sText: 'Mi madre', sNuc: 'madre', sExpEs: 'Sujeto expreso singular.', sExpHy: 'Եզակի թվով բացահայտ ենթակա։',
    pText: 'cocina', pNuc: 'cocina', pType: 'verbal' as const, pExpEs: 'Predicado verbal.', pExpHy: 'Բայական ստորոգյալ։',
    w: [
      { word: 'Mi', hy: 'իմ', catEs: 'Determinante posesivo', catHy: 'Ստացական որոշիչ', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a madre.', wHy: 'Ուղեկցում է madre-ին։' },
      { word: 'madre', hy: 'մայրիկ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Sujeto de la acción.', wHy: 'Գործողության ենթական։' },
      { word: 'cocina', hy: 'եփում է', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª sing.', detHy: 'Սահմանական ներկա 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción culinaria.', wHy: 'Խոհարարական գործողություն։' }
    ]
  },
  {
    id: 's-26',
    diff: 2 as const,
    label: 'Nivel 2: Simple (5-7 palabras)',
    es: 'El río fluye con rapidez.',
    hy: 'Գետն արագությամբ հոսում է։',
    sText: 'El río', sNuc: 'río', sExpEs: 'Sujeto expreso.', sExpHy: 'Բացահայտ ենթակա։',
    pText: 'fluye con rapidez', pNuc: 'fluye', pType: 'verbal' as const, pExpEs: 'Predicado verbal con CCM.', pExpHy: 'Բայական ստորոգյալ CCM-ով։',
    w: [
      { word: 'El', hy: 'այն', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a río.', wHy: 'Ուղեկցում է río-ին։' },
      { word: 'río', hy: 'գետ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Concuerda con fluye.', wHy: 'Համաձայնում է fluye-ի հետ։' },
      { word: 'fluye', hy: 'հոսում է', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª sing.', detHy: 'Սահմանական ներկա 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción del agua.', wHy: 'Ջրի գործողությունը։' },
      { word: 'con', hy: '-ով', catEs: 'Preposición', catHy: 'Նախդիր', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Enlace del CCM', fnHy: 'CCM-ի կապող օղակ', wEs: 'Introduce el modo.', wHy: 'Ներմուծում է ձևը։' },
      { word: 'rapidez', hy: 'արագություն', catEs: 'Sustantivo abstracto', catHy: 'Վերացական գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del Término', fnHy: 'Անդամի միջուկ', wEs: 'Modo de fluir.', wHy: 'Հոսելու կերպը։' }
    ]
  },
  {
    id: 's-27',
    diff: 2 as const,
    label: 'Nivel 2: Simple (5-7 palabras)',
    es: 'Aquellas niñas leen cuentos divertidos.',
    hy: 'Այդ աղջիկները զվարճալի հեքիաթներ են կարդում։',
    sText: 'Aquellas niñas', sNuc: 'niñas', sExpEs: 'Sujeto expreso plural.', sExpHy: 'Հոգնակի բացահայտ ենթակա։',
    pText: 'leen cuentos divertidos', pNuc: 'leen', pType: 'verbal' as const, pExpEs: 'Predicado verbal con CD.', pExpHy: 'Բայական ստորոգյալ CD-ով։',
    w: [
      { word: 'Aquellas', hy: 'այն (հեռու)', catEs: 'Determinante demostrativo', catHy: 'Ցուցական որոշիչ', detEs: 'Fem. plural', detHy: 'Իգական հոգնակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a niñas.', wHy: 'Ուղեկցում է niñas-ին։' },
      { word: 'niñas', hy: 'աղջիկներ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. plural', detHy: 'Իգական հոգնակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Concuerda con leen.', wHy: 'Համաձայնում է leen-ի հետ։' },
      { word: 'leen', hy: 'կարդում են', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª plural', detHy: 'Սահմանական ներկա 3-րդ դեմք հոգնակի', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción transitiva.', wHy: 'Անցողական գործողություն։' },
      { word: 'cuentos', hy: 'հեքիաթներ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. plural', detHy: 'Արական հոգնակի', fnEs: 'Núcleo del CD', fnHy: 'CD-ի միջուկ', wEs: 'Objeto leído.', wHy: 'Կարդացվող առարկան։' },
      { word: 'divertidos', hy: 'զվարճալի', catEs: 'Adjetivo calificativo', catHy: 'Որակական ածական', detEs: 'Masc. plural', detHy: 'Արական հոգնակի', fnEs: 'Complemento del Nombre', fnHy: 'Գոյականի լրացում', wEs: 'Califica a cuentos.', wHy: 'Բնութագրում է cuentos-ը։' }
    ]
  },
  {
    id: 's-28',
    diff: 3 as const,
    label: 'Nivel 3: Con Atributo',
    es: 'Mi abuelo es muy sabio.',
    hy: 'Իմ պապիկը շատ իմաստուն է։',
    sText: 'Mi abuelo', sNuc: 'abuelo', sExpEs: 'Sujeto expreso.', sExpHy: 'Բացահայտ ենթակա։',
    pText: 'es muy sabio', pNuc: 'es', pType: 'nominal' as const, pExpEs: 'Predicado nominal con verbo ser.', pExpHy: 'Անվանական ստորոգյալ ser բայով։',
    w: [
      { word: 'Mi', hy: 'իմ', catEs: 'Determinante posesivo', catHy: 'Ստացական որոշիչ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a abuelo.', wHy: 'Ուղեկցում է abuelo-ին։' },
      { word: 'abuelo', hy: 'պապիկ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Sujeto concordante con es.', wHy: 'Ենթական, որը համաձայնում է es-ի հետ։' },
      { word: 'es', hy: 'է', catEs: 'Verbo copulativo', catHy: 'Կապակցող բայ', detEs: 'Presente 3.ª pers. sing.', detHy: 'Ներկա 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Cópula.', wHy: 'Կապակցող օղակ։' },
      { word: 'muy', hy: 'շատ', catEs: 'Adverbio de cantidad', catHy: 'Քանակի մակբայ', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Modificador del Adjetivo', fnHy: 'Ածականի մոդիֆիկատոր', wEs: 'Modifica a sabio.', wHy: 'Լրացնում է sabio-ին։' },
      { word: 'sabio', hy: 'իմաստուն', catEs: 'Adjetivo calificativo', catHy: 'Որակական ածական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del Atributo', fnHy: 'Atributo-ի միջուկ', wEs: 'Cualidad del sujeto ("lo es").', wHy: 'Ենթակայի որակը («lo es»)։' }
    ]
  },
  {
    id: 's-29',
    diff: 4 as const,
    label: 'Nivel 4: Con CCT y CCL',
    es: 'Mañana jugaremos un partido en el parque.',
    hy: 'Վաղը մենք խաղ կխաղանք այգում։',
    sText: '[Nosotros]', sNuc: '[Nosotros]', sExpEs: 'Sujeto omitido de 1.ª persona plural.', sExpHy: '1-ին դեմք հոգնակի զեղչված ենթակա։',
    pText: 'Mañana jugaremos un partido en el parque', pNuc: 'jugaremos', pType: 'verbal' as const, pExpEs: 'Predicado verbal con CCT, CD y CCL.', pExpHy: 'Բայական ստորոգյալ CCT, CD և CCL-ով։',
    w: [
      { word: 'Mañana', hy: 'վաղը', catEs: 'Adverbio de tiempo', catHy: 'Ժամանակի մակբայ', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'CCTiempo', fnHy: 'Ժամանակի պարագա', wEs: 'Momento futuro.', wHy: 'Ապառնի ժամանակ։' },
      { word: 'jugaremos', hy: 'կխաղանք', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Futuro simple 1.ª plural', detHy: 'Ապառնի 1-ին դեմք հոգնակի', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Acción futura.', wHy: 'Ապագա գործողություն։' },
      { word: 'un', hy: 'մի', catEs: 'Artículo indeterminado', catHy: 'Անորոշ հոդ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante del CD', fnHy: 'CD-ի որոշիչ', wEs: 'Acompaña a partido.', wHy: 'Ուղեկցում է partido-ին։' },
      { word: 'partido', hy: 'խաղ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del CD', fnHy: 'CD-ի միջուկ', wEs: 'Objeto jugado ("lo jugaremos").', wHy: 'Խաղացվող առարկան («lo jugaremos»)։' },
      { word: 'en', hy: 'մեջ', catEs: 'Preposición', catHy: 'Նախդիր', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Enlace del CCL', fnHy: 'CCL-ի կապող օղակ', wEs: 'Introduce el lugar.', wHy: 'Ներմուծում է տեղը։' },
      { word: 'el', hy: 'այն', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante del CCL', fnHy: 'CCL-ի որոշիչ', wEs: 'Acompaña a parque.', wHy: 'Ուղեկցում է parque-ին։' },
      { word: 'parque', hy: 'այգի', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del Término del CCL', fnHy: 'CCL-ի անդամի միջուկ', wEs: 'Lugar donde se jugará.', wHy: 'Խաղալու վայրը։' }
    ]
  },
  {
    id: 's-30',
    diff: 5 as const,
    label: 'Nivel 5: Sujeto omitido de 2.ª persona',
    es: 'Escribiste una carta preciosa a tu abuela.',
    hy: 'Դու գեղեցիկ նամակ գրեցիր քո տատիկին։',
    sText: '[Tú]', sNuc: '[Tú]', sExpEs: 'Sujeto omitido de 2.ª persona singular.', sExpHy: '2-րդ դեմք եզակի զեղչված ենթակա [Դու]։',
    pText: 'Escribiste una carta preciosa a tu abuela', pNuc: 'Escribiste', pType: 'verbal' as const, pExpEs: 'Predicado verbal con CD y CI.', pExpHy: 'Բայական ստորոգյալ CD և CI-ով։',
    w: [
      { word: 'Escribiste', hy: 'գրեցիր', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Pretérito perfecto simple 2.ª sing.', detHy: 'Անցյալ կատարյալ 2-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Contiene el sujeto omitido tú.', wHy: 'Պարունակում է «tú» զեղչված ենթական։' },
      { word: 'una', hy: 'մի', catEs: 'Artículo indeterminado', catHy: 'Անորոշ հոդ', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Determinante del CD', fnHy: 'CD-ի որոշիչ', wEs: 'Acompaña a carta.', wHy: 'Ուղեկցում է carta-ին։' },
      { word: 'carta', hy: 'նամակ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del CD', fnHy: 'CD-ի միջուկ', wEs: 'Objeto directo escrito.', wHy: 'Գրված ուղիղ առարկան։' },
      { word: 'preciosa', hy: 'գեղեցիկ / թանկարժեք', catEs: 'Adjetivo calificativo', catHy: 'Որակական ածական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Complemento del Nombre', fnHy: 'Գոյականի լրացում', wEs: 'Califica a carta.', wHy: 'Բնութագրում է carta-ն։' },
      { word: 'a', hy: 'դեպի / -ին', catEs: 'Preposición', catHy: 'Նախդիր', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Enlace del CI', fnHy: 'CI-ի կապող օղակ', wEs: 'Introduce el destinatario.', wHy: 'Ներմուծում է հասցեատիրոջը։' },
      { word: 'tu', hy: 'քո', catEs: 'Determinante posesivo', catHy: 'Ստացական որոշիչ', detEs: 'Singular', detHy: 'Եզակի', fnEs: 'Determinante del CI', fnHy: 'CI-ի որոշիչ', wEs: 'Acompaña a abuela.', wHy: 'Ուղեկցում է abuela-ին։' },
      { word: 'abuela', hy: 'տատիկ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del Término del CI', fnHy: 'CI-ի անդամի միջուկ', wEs: 'Destinatario de la carta.', wHy: 'Նամակի հասցեատերը։' }
    ]
  },
  {
    id: 's-31',
    diff: 6 as const,
    label: 'Nivel 6: Oración impersonal con "hacer" temporal',
    es: 'Ayer hizo mucho frío en la meseta.',
    hy: 'Երեկ սարահարթում շատ ցուրտ էր։',
    sText: 'No tiene sujeto (Impersonal con hacer)', sNuc: '—', sExpEs: 'El verbo "hacer" en fenómenos climáticos es impersonal.', sExpHy: '«Hacer» բայը եղանակային երևույթներում անդեմ է։',
    pText: 'Ayer hizo mucho frío en la meseta', pNuc: 'hizo', pType: 'verbal' as const, pExpEs: 'Predicado verbal impersonal con CD ("mucho frío").', pExpHy: 'Անդեմ բայական ստորոգյալ CD-ով («mucho frío»)։',
    w: [
      { word: 'Ayer', hy: 'երեկ', catEs: 'Adverbio de tiempo', catHy: 'Ժամանակի մակբայ', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'CCTiempo', fnHy: 'Ժամանակի պարագա', wEs: 'Indica el día pasado.', wHy: 'Ցույց է տալիս անցած օրը։' },
      { word: 'hizo', hy: 'արեց (եղավ)', catEs: 'Verbo hacer (impersonal)', catHy: 'Անդեմ բայ', detEs: 'Pretérito perfecto simple 3.ª sing.', detHy: 'Անցյալ կատարյալ 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Verbo climático sin sujeto.', wHy: 'Եղանակային բայ՝ առանց ենթակայի։' },
      { word: 'mucho', hy: 'շատ', catEs: 'Determinante indefinido', catHy: 'Անորոշ որոշիչ', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Determinante del CD', fnHy: 'CD-ի որոշիչ', wEs: 'Acompaña a frío.', wHy: 'Ուղեկցում է frío-ին։' },
      { word: 'frío', hy: 'ցուրտ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del CD', fnHy: 'CD-ի միջուկ', wEs: 'Complemento Directo ("lo hizo").', wHy: 'Ուղիղ խնդիր («lo hizo»)։' },
      { word: 'en', hy: 'մեջ', catEs: 'Preposición', catHy: 'Նախդիր', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Enlace del CCL', fnHy: 'CCL-ի կապող օղակ', wEs: 'Introduce el lugar.', wHy: 'Ներմուծում է տեղը։' },
      { word: 'la', hy: 'այն', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Determinante', fnHy: 'Որոշիչ', wEs: 'Acompaña a meseta.', wHy: 'Ուղեկցում է meseta-ին։' },
      { word: 'meseta', hy: 'սարահարթ', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del Término', fnHy: 'Անդամի միջուկ', wEs: 'Lugar geográfico.', wHy: 'Աշխարհագրական վայրը։' }
    ]
  },
  {
    id: 's-32',
    diff: 7 as const,
    label: 'Nivel 7: Trampa de examen con sujeto pospuesto',
    es: 'A Juan le apasiona la música clásica.',
    hy: 'Խուանին հիացնում է դասական երաժշտությունը։',
    sText: 'la música clásica', sNuc: 'música', sExpEs: 'Sujeto pospuesto que concuerda con "apasiona". "A Juan" es CI.', sExpHy: 'Հետադաս ենթակա, որը համաձայնում է «apasiona»-ի հետ։ «A Juan»-ը CI է։',
    pText: 'A Juan le apasiona', pNuc: 'apasiona', pType: 'verbal' as const, pExpEs: 'Predicado verbal con CI duplicado.', pExpHy: 'Բայական ստորոգյալ կրկնապատկված CI-ով։',
    w: [
      { word: 'A', hy: 'դեպի / -ին', catEs: 'Preposición', catHy: 'Նախդիր', detEs: 'Invariable', detHy: 'Անփոփոխ', fnEs: 'Enlace del CI', fnHy: 'CI-ի կապող օղակ', wEs: 'Introduce el complemento indirecto.', wHy: 'Ներմուծում է հանգման խնդիրը։' },
      { word: 'Juan', hy: 'Խուան', catEs: 'Sustantivo propio', catHy: 'Հատուկ գոյական', detEs: 'Masc. sing.', detHy: 'Արական եզակի', fnEs: 'Núcleo del Término del CI', fnHy: 'CI-ի անդամի միջուկ', wEs: 'Destinatario de la pasión.', wHy: 'Հասցեատերը։' },
      { word: 'le', hy: 'նրան', catEs: 'Pronombre personal átono', catHy: 'Անձնական դերանուն', detEs: '3.ª sing.', detHy: '3-րդ դեմք եզակի', fnEs: 'Complemento Indirecto (CI)', fnHy: 'Հանգման խնդիր (CI)', wEs: 'Reduplica a Juan.', wHy: 'Կրկնում է Juan-ին։' },
      { word: 'apasiona', hy: 'հիացնում / գրավում է', catEs: 'Verbo', catHy: 'Բայ', detEs: 'Presente indicativo 3.ª sing.', detHy: 'Սահմանական ներկա 3-րդ դեմք', fnEs: 'Núcleo del Predicado', fnHy: 'Ստորոգյալի միջուկ', wEs: 'Concuerda con la música.', wHy: 'Համաձայնում է la música-ի հետ։' },
      { word: 'la', hy: 'այն', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Determinante del Sujeto', fnHy: 'Ենթակայի որոշիչ', wEs: 'Acompaña a música.', wHy: 'Ուղեկցում է música-ին։' },
      { word: 'música', hy: 'երաժշտություն', catEs: 'Sustantivo común', catHy: 'Հասարակ գոյական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Núcleo del Sujeto', fnHy: 'Ենթակայի միջուկ', wEs: 'Sujeto gramatical real.', wHy: 'Իրական քերականական ենթական։' },
      { word: 'clásica', hy: 'դասական', catEs: 'Adjetivo calificativo', catHy: 'Որակական ածական', detEs: 'Fem. sing.', detHy: 'Իգական եզակի', fnEs: 'Complemento del Nombre', fnHy: 'Գոյականի լրացում', wEs: 'Califica a música.', wHy: 'Բնութագրում է música-ն։' }
    ]
  }
];

export const extraAnalyzedSentences: AnalyzedSentence[] = extraRaw.map((r) => ({
  id: r.id,
  difficulty: r.diff,
  difficultyLabel: r.label,
  sentenceEs: r.es,
  sentenceHy: r.hy,
  sujeto: {
    text: r.sText,
    type: r.sText.includes('No tiene') ? 'impersonal' : r.sText.startsWith('[') ? 'omitido' : 'expreso',
    typeLabelEs: r.sText.includes('No tiene') ? 'Oración impersonal' : r.sText.startsWith('[') ? 'Sujeto omitido' : 'Sujeto expreso',
    typeLabelHy: r.sText.includes('No tiene') ? 'Անդեմ նախադասություն' : r.sText.startsWith('[') ? 'Զեղչված ենթակա' : 'Բացահայտ ենթակա',
    nucleo: r.sNuc,
    explanationEs: r.sExpEs,
    explanationHy: r.sExpHy,
  },
  predicado: {
    text: r.pText,
    type: r.pType,
    typeLabelEs: r.pType === 'nominal' ? 'Predicado nominal' : 'Predicado verbal',
    typeLabelHy: r.pType === 'nominal' ? 'Անվանական ստորոգյալ' : 'Բայական ստորոգյալ',
    nucleo: r.pNuc,
    explanationEs: r.pExpEs,
    explanationHy: r.pExpHy,
  },
  complements: [],
  words: r.w.map((item) => ({
    word: item.word,
    wordHy: item.hy,
    categoryEs: item.catEs,
    categoryHy: item.catHy,
    categoryDetailEs: item.detEs,
    categoryDetailHy: item.detHy,
    syntacticFunctionEs: item.fnEs,
    syntacticFunctionHy: item.fnHy,
    whyThisFunctionEs: item.wEs,
    whyThisFunctionHy: item.wHy,
  })),
}));
