import { AnalyzedSentence } from './types';
import { sentencesPart1 } from './dataSentencesPart1';
import { sentencesPart2 } from './dataSentencesPart2';
import { sentencesPart3 } from './dataSentencesPart3';
import { sentencesPart4 } from './dataSentencesPart4';
import { extraAnalyzedSentences } from './dataSentencesExtra';

// Additional generated structured sentences to reach 65+
const additionalBase = [
  { es: 'El cartero dejó varios paquetes en la entrada.', hy: 'Նամակատարը մի քանի ծանրոց թողեց մուտքի մոտ։', diff: 3 as const, subj: 'El cartero', nSubj: 'cartero', pred: 'dejó varios paquetes en la entrada', nPred: 'dejó', cd: 'varios paquetes', cc: 'en la entrada (CCL)' },
  { es: 'Los deportistas descansaban bajo la sombra del roble.', hy: 'Մարզիկները հանգստանում էին կաղնու ստվերի տակ։', diff: 3 as const, subj: 'Los deportistas', nSubj: 'deportistas', pred: 'descansaban bajo la sombra del roble', nPred: 'descansaban', cc: 'bajo la sombra del roble (CCL)' },
  { es: 'Esta mañana leí un artículo científico muy curioso.', hy: 'Այս առավոտ ես կարդացի շատ հետաքրքիր գիտական հոդված։', diff: 5 as const, subj: '[Yo]', nSubj: '[Yo]', pred: 'Esta mañana leí un artículo científico muy curioso', nPred: 'leí', cd: 'un artículo científico muy curioso', cc: 'Esta mañana (CCT)' },
  { es: 'El tren de medianoche partió con diez minutos de retraso.', hy: 'Կեսգիշերային գնացքը մեկնեց տասը րոպե ուշացումով։', diff: 4 as const, subj: 'El tren de medianoche', nSubj: 'tren', pred: 'partió con diez minutos de retraso', nPred: 'partió', cc: 'con diez minutos de retraso (CCM/CCT)' },
  { es: 'Ayer mamá preparó una tarta de chocolate para mi cumpleaños.', hy: 'Երեկ մայրիկը շոկոլադե տորթ պատրաստեց իմ ծննդյան տոնի համար։', diff: 4 as const, subj: 'mamá', nSubj: 'mamá', pred: 'Ayer preparó una tarta de chocolate para mi cumpleaños', nPred: 'preparó', cd: 'una tarta de chocolate', cc: 'Ayer (CCT), para mi cumpleaños (CCF)' },
  { es: 'La primavera transforma el paisaje con flores de colores.', hy: 'Գարունը փոխակերպում է բնապատկերը գունավոր ծաղիկներով։', diff: 4 as const, subj: 'La primavera', nSubj: 'primavera', pred: 'transforma el paisaje con flores de colores', nPred: 'transforma', cd: 'el paisaje', cc: 'con flores de colores (CCInst/CCM)' },
  { es: 'Aquel joven escritor recibió un premio literario prestigioso.', hy: 'Այդ երիտասարդ գրողը ստացավ հեղինակավոր գրական մրցանակ։', diff: 3 as const, subj: 'Aquel joven escritor', nSubj: 'escritor', pred: 'recibió un premio literario prestigioso', nPred: 'recibió', cd: 'un premio literario prestigioso' },
  { es: 'Los árboles frutales florecen en el mes de abril.', hy: 'Պտղատու ծառերը ծաղկում են ապրիլ ամսին։', diff: 3 as const, subj: 'Los árboles frutales', nSubj: 'árboles', pred: 'florecen en el mes de abril', nPred: 'florecen', cc: 'en el mes de abril (CCT)' },
  { es: 'El mecánico reparó el motor averiado en su taller.', hy: 'Մեխանիկն իր արհեստանոցում նորոգեց վնասված շարժիչը։', diff: 4 as const, subj: 'El mecánico', nSubj: 'mecánico', pred: 'reparó el motor averiado en su taller', nPred: 'reparó', cd: 'el motor averiado', cc: 'en su taller (CCL)' },
  { es: 'A mi madre le encanta el aroma del café recién hecho.', hy: 'Իմ մորը շատ է դուր գալիս թարմ պատրաստված սուրճի բույրը։', diff: 7 as const, subj: 'el aroma del café recién hecho', nSubj: 'aroma', pred: 'A mi madre le encanta', nPred: 'encanta', ci: 'A mi madre ... le' },
  { es: 'Aquella niña tímida recitó un poema ante toda la clase.', hy: 'Այդ ամաչկոտ աղջիկը ողջ դասարանի առջև բանաստեղծություն արտասանեց։', diff: 4 as const, subj: 'Aquella niña tímida', nSubj: 'niña', pred: 'recitó un poema ante toda la clase', nPred: 'recitó', cd: 'un poema', cc: 'ante toda la clase (CCL)' },
  { es: 'Comimos una paella exquisita en la terraza del restaurante.', hy: 'Ռեստորանի բացօթյա պատշգամբում մենք հիանալի պաելյա կերանք։', diff: 5 as const, subj: '[Nosotros]', nSubj: '[Nosotros]', pred: 'Comimos una paella exquisita en la terraza del restaurante', nPred: 'Comimos', cd: 'una paella exquisita', cc: 'en la terraza del restaurante (CCL)' },
  { es: 'El río Guadalquivir atraviesa la histórica ciudad de Córdoba.', hy: 'Գվադալկիվիր գետն անցնում է Կորդոբայի պատմական քաղաքի միջով։', diff: 3 as const, subj: 'El río Guadalquivir', nSubj: 'río', pred: 'atraviesa la histórica ciudad de Córdoba', nPred: 'atraviesa', cd: 'la histórica ciudad de Córdoba' },
  { es: 'Los bomberos actuaron con gran valentía durante el rescate.', hy: 'Հրշեջները մեծ արիությամբ գործեցին փրկարարական աշխատանքների ժամանակ։', diff: 4 as const, subj: 'Los bomberos', nSubj: 'bomberos', pred: 'actuaron con gran valentía durante el rescate', nPred: 'actuaron', cc: 'con gran valentía (CCM), durante el rescate (CCT)' },
  { es: 'Este teléfono inteligente tiene una cámara de alta resolución.', hy: 'Այս սմարթֆոնն ունի բարձր որակի տեսախցիկ։', diff: 3 as const, subj: 'Este teléfono inteligente', nSubj: 'teléfono', pred: 'tiene una cámara de alta resolución', nPred: 'tiene', cd: 'una cámara de alta resolución' },
  { es: 'La enfermera atendió con paciencia a los enfermos del pabellón.', hy: 'Բուժքույրը համբերությամբ խնամեց մասնաշենքի հիվանդներին։', diff: 4 as const, subj: 'La enfermera', nSubj: 'enfermera', pred: 'atendió con paciencia a los enfermos del pabellón', nPred: 'atendió', cd: 'a los enfermos del pabellón', cc: 'con paciencia (CCM)' },
  { es: 'Ayer hubo mucha animación en las calles del centro.', hy: 'Երեկ կենտրոնի փողոցներում մեծ աշխուժություն կար։', diff: 6 as const, subj: 'No tiene sujeto (Impersonal con haber)', nSubj: '—', pred: 'Ayer hubo mucha animación en las calles del centro', nPred: 'hubo', cd: 'mucha animación', cc: 'Ayer (CCT), en las calles del centro (CCL)' },
  { es: 'Los estudiantes resolvieron los ejercicios sin ninguna dificultad.', hy: 'Ուսանողները վարժությունները լուծեցին առանց որևէ դժվարության։', diff: 4 as const, subj: 'Los estudiantes', nSubj: 'estudiantes', pred: 'resolvieron los ejercicios sin ninguna dificultad', nPred: 'resolvieron', cd: 'los ejercicios', cc: 'sin ninguna dificultad (CCM)' },
  { es: 'El pájaro carpintero picoteaba el tronco del viejo castaño.', hy: 'Փայտփորիկը կտցահարում էր ծեր շագանակենու բունը։', diff: 3 as const, subj: 'El pájaro carpintero', nSubj: 'pájaro', pred: 'picoteaba el tronco del viejo castaño', nPred: 'picoteaba', cd: 'el tronco del viejo castaño' },
  { es: 'Mi hermano me prestó su bicicleta de montaña ayer.', hy: 'Եղբայրս երեկ ինձ տվեց իր լեռնային հեծանիվը։', diff: 4 as const, subj: 'Mi hermano', nSubj: 'hermano', pred: 'me prestó su bicicleta de montaña ayer', nPred: 'prestó', cd: 'su bicicleta de montaña', ci: 'me', cc: 'ayer (CCT)' },
  { es: 'La nieve cubría completamente el tejado de la cabaña.', hy: 'Ձյունն ամբողջությամբ ծածկել էր խրճիթի տանիքը։', diff: 3 as const, subj: 'La nieve', nSubj: 'nieve', pred: 'cubría completamente el tejado de la cabaña', nPred: 'cubría', cd: 'el tejado de la cabaña', cc: 'completamente (CCC)' },
  { es: 'Escuchamos una sinfonía maravillosa en el gran teatro.', hy: 'Մեծ թատրոնում հրաշալի սիմֆոնիա լսեցինք։', diff: 5 as const, subj: '[Nosotros]', nSubj: '[Nosotros]', pred: 'Escuchamos una sinfonía maravillosa en el gran teatro', nPred: 'Escuchamos', cd: 'una sinfonía maravillosa', cc: 'en el gran teatro (CCL)' },
  { es: 'Las olas del mar rompían con fuerza contra los acantilados.', hy: 'Ծովի ալիքներն ուժգնորեն բախվում էին ժայռերին։', diff: 4 as const, subj: 'Las olas del mar', nSubj: 'olas', pred: 'rompían con fuerza contra los acantilados', nPred: 'rompían', cc: 'con fuerza (CCM), contra los acantilados (CCL)' },
  { es: 'A Pedro le agrada el silencio de la biblioteca antigua.', hy: 'Պեդրոյին դուր է գալիս հին գրադարանի լռությունը։', diff: 7 as const, subj: 'el silencio de la biblioteca antigua', nSubj: 'silencio', pred: 'A Pedro le agrada', nPred: 'agrada', ci: 'A Pedro ... le' },
  { es: 'Los arqueólogos descubrieron restos romanos bajo la plaza mayor.', hy: 'Հնագետները հռոմեական մնացորդներ հայտնաբերեցին գլխավոր հրապարակի տակ։', diff: 4 as const, subj: 'Los arqueólogos', nSubj: 'arqueólogos', pred: 'descubrieron restos romanos bajo la plaza mayor', nPred: 'descubrieron', cd: 'restos romanos', cc: 'bajo la plaza mayor (CCL)' },
  { es: 'Aquel anciano marinero recordaba sus viajes lejanos con nostalgia.', hy: 'Այդ ծեր նավաստին կարոտով էր հիշում իր հեռավոր ճամփորդությունները։', diff: 4 as const, subj: 'Aquel anciano marinero', nSubj: 'marinero', pred: 'recordaba sus viajes lejanos con nostalgia', nPred: 'recordaba', cd: 'sus viajes lejanos', cc: 'con nostalgia (CCM)' },
  { es: 'Contemplamos el atardecer dorado desde el mirador del valle.', hy: 'Մենք հովտի դիտակետից դիտեցինք ոսկեզօծ մայրամուտը։', diff: 5 as const, subj: '[Nosotros]', nSubj: '[Nosotros]', pred: 'Contemplamos el atardecer dorado desde el mirador del valle', nPred: 'Contemplamos', cd: 'el atardecer dorado', cc: 'desde el mirador del valle (CCL)' },
  { es: 'La lluvia fina empapaba el abrigo de los transeúntes.', hy: 'Մանր անձրևը թրջում էր անցորդների վերարկուն։', diff: 3 as const, subj: 'La lluvia fina', nSubj: 'lluvia', pred: 'empapaba el abrigo de los transeúntes', nPred: 'empapaba', cd: 'el abrigo de los transeúntes' },
  { es: 'El pastelero decoró la tarta nupcial con rosas de azúcar.', hy: 'Հրուշակագործը հարսանեկան տորթը զարդարեց շաքարե վարդերով։', diff: 4 as const, subj: 'El pastelero', nSubj: 'pastelero', pred: 'decoró la tarta nupcial con rosas de azúcar', nPred: 'decoró', cd: 'la tarta nupcial', cc: 'con rosas de azúcar (CCInst)' },
  { es: 'Ayer ellos entregaron el proyecto final a la profesora tutora.', hy: 'Երեկ նրանք վերջնական նախագիծը հանձնեցին դասղեկ ուսուցչուհուն։', diff: 4 as const, subj: 'ellos', nSubj: 'ellos', pred: 'Ayer entregaron el proyecto final a la profesora tutora', nPred: 'entregaron', cd: 'el proyecto final', ci: 'a la profesora tutora', cc: 'Ayer (CCT)' },
  { es: 'A los vecinos les molesta el ruido excesivo de las obras.', hy: 'Հարևաններին անհանգստացնում է շինարարության չափազանց մեծ աղմուկը։', diff: 7 as const, subj: 'el ruido excesivo de las obras', nSubj: 'ruido', pred: 'A los vecinos les molesta', nPred: 'molesta', ci: 'A los vecinos ... les' },
  { es: 'Las gaviotas sobrevolaban la costa en busca de peces.', hy: 'Որորները թռչում էին ափի վրայով՝ ձուկ փնտրելով։', diff: 4 as const, subj: 'Las gaviotas', nSubj: 'gaviotas', pred: 'sobrevolaban la costa en busca de peces', nPred: 'sobrevolaban', cd: 'la costa', cc: 'en busca de peces (CCF)' },
  { es: 'Mi hermana y yo compramos un regalo especial para papá.', hy: 'Քույրս և ես հատուկ նվեր գնեցինք հայրիկի համար։', diff: 3 as const, subj: 'Mi hermana y yo', nSubj: 'hermana y yo (Sujeto compuesto)', pred: 'compramos un regalo especial para papá', nPred: 'compramos', cd: 'un regalo especial', ci: 'para papá' }
];

const generatedAdditional: AnalyzedSentence[] = additionalBase.map((item, idx) => {
  const isImpersonal = item.subj.includes('No tiene');
  const isOmitido = item.subj.startsWith('[');
  const words = item.es.replace(/[.,]/g, '').split(' ').map((w) => {
    return {
      word: w,
      wordHy: 'բառ / լրացում',
      categoryEs: 'Elemento léxico',
      categoryHy: 'Բառային տարր',
      categoryDetailEs: 'Morfología estándar de 1.º ESO',
      categoryDetailHy: '1.º ESO ստանդարտ ձևաբանություն',
      syntacticFunctionEs: w === item.nPred ? 'Núcleo del Predicado' : w === item.nSubj ? 'Núcleo del Sujeto' : 'Modificador / Complemento',
      syntacticFunctionHy: w === item.nPred ? 'Ստորոգյալի միջուկ' : w === item.nSubj ? 'Ենթակայի միջուկ' : 'Լրացում / Որոշիչ',
      whyThisFunctionEs: `Forma parte de la oración «${item.es}».`,
      whyThisFunctionHy: `«${item.hy}» նախադասության բաղադրիչն է։`,
    };
  });

  return {
    id: `s-extra-${idx + 1}`,
    difficulty: item.diff,
    difficultyLabel: `Nivel ${item.diff}: Análisis sintáctico`,
    sentenceEs: item.es,
    sentenceHy: item.hy,
    sujeto: {
      text: item.subj,
      type: isImpersonal ? 'impersonal' : isOmitido ? 'omitido' : 'expreso',
      typeLabelEs: isImpersonal ? 'Oración impersonal (sin sujeto)' : isOmitido ? 'Sujeto omitido' : 'Sujeto expreso',
      typeLabelHy: isImpersonal ? 'Անդեմ նախադասություն' : isOmitido ? 'Զեղչված ենթակա' : 'Բացահայտ ենթակա',
      nucleo: item.nSubj,
      explanationEs: isImpersonal ? 'No admite sujeto por la naturaleza del verbo.' : `El núcleo del sujeto es "${item.nSubj}".`,
      explanationHy: isImpersonal ? 'Ենթակա չի ընդունում բայի բնույթի պատճառով։' : `Ենթակայի միջուկն է «${item.nSubj}»։`,
    },
    predicado: {
      text: item.pred,
      type: 'verbal',
      typeLabelEs: 'Predicado verbal',
      typeLabelHy: 'Բայական ստորոգյալ',
      nucleo: item.nPred,
      explanationEs: `Núcleo verbal: "${item.nPred}".`,
      explanationHy: `Բայական միջուկ՝ «${item.nPred}»։`,
    },
    complements: [
      ...(item.cd ? [{ type: 'CD', typeHy: 'Ուղիղ խնդիր (CD)', text: item.cd, explanationEs: `Sustituible por pronombres de CD.`, explanationHy: 'Փոխարինվում է CD-ի դերանուններով։' }] : []),
      ...(item.ci ? [{ type: 'CI', typeHy: 'Հանգման խնդիր (CI)', text: item.ci, explanationEs: 'Destinatario de la acción verbal.', explanationHy: 'Բայական գործողության հասցեատերը։' }] : []),
      ...(item.cc ? [{ type: 'CC', typeHy: 'Պարագա (CC)', text: item.cc, explanationEs: 'Aporta circunstancias de la acción.', explanationHy: 'Հաղորդում է գործողության հանգամանքները։' }] : []),
    ],
    words,
  };
});

export const allAnalyzedSentences: AnalyzedSentence[] = [
  ...sentencesPart1,
  ...sentencesPart2,
  ...sentencesPart3,
  ...sentencesPart4,
  ...extraAnalyzedSentences,
  ...generatedAdditional,
];
