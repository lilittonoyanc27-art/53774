import React, { useState } from 'react';
import { allAnalyzedSentences } from './dataSentences';
import { AnalyzedSentence } from './types';
import { SentenceTranslation } from './SentenceTranslation';
import {
  FlaskConical,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Layers,
} from 'lucide-react';

interface SentenceLabProps {
  initialSentenceId?: string;
}

export const SentenceLab: React.FC<SentenceLabProps> = ({ initialSentenceId }) => {
  const [selectedSentenceId, setSelectedSentenceId] = useState<string>(
    initialSentenceId || allAnalyzedSentences[0].id
  );
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [stepFeedback, setStepFeedback] = useState<{ isCorrect: boolean; messageEs: string; messageHy: string } | null>(null);

  const sentence =
    allAnalyzedSentences.find((s) => s.id === selectedSentenceId) || allAnalyzedSentences[0];

  const handleSelectSentence = (id: string) => {
    setSelectedSentenceId(id);
    setCurrentStep(1);
    setSelectedOption(null);
    setStepFeedback(null);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setSelectedOption(null);
    setStepFeedback(null);
  };

  // Step questions generator
  const getStepData = () => {
    switch (currentStep) {
      case 1: {
        // Step 1: Encuentra el verbo
        const verbWord = sentence.predicado.nucleo;
        const fakeWords = sentence.words
          .filter((w) => w.word !== verbWord)
          .map((w) => w.word)
          .slice(0, 3);
        const options = [verbWord, ...fakeWords].sort();
        const correctIndex = options.indexOf(verbWord);

        return {
          titleEs: 'Paso 1: Localiza el verbo conjugado',
          titleHy: 'Քայլ 1. Գտի՛ր դիմավոր բայը',
          instructionEs: '¿Cuál es el verbo principal que actúa como motor de la oración?',
          instructionHy: 'Ո՞րն է գլխավոր բայը, որը գործում է որպես նախադասության շարժիչ։',
          options,
          correctIndex,
          correctExpEs: `¡Correcto! "${verbWord}" es el verbo principal conjugado de la oración.`,
          correctExpHy: `Ճի՛շտ է։ «${verbWord}»-ը նախադասության դիմավոր գլխավոր բայն է։`,
          wrongExpEs: `Incorrecto. El verbo de esta oración es "${verbWord}". Recuerda que expresa acción, proceso o estado.`,
          wrongExpHy: `Սխալ է։ Այս նախադասության բայը «${verbWord}»-ն է։ Հիշիր, որ բայն արտահայտում է գործողություն կամ վիճակ։`,
        };
      }
      case 2: {
        // Step 2: Sujeto
        const isImpersonal = sentence.sujeto.type === 'impersonal';
        const isOmitido = sentence.sujeto.type === 'omitido';
        const options = [
          isImpersonal ? 'Oración impersonal (sin sujeto)' : isOmitido ? `Sujeto omitido: ${sentence.sujeto.text}` : sentence.sujeto.text,
          'Sujeto omitido: [Ellos]',
          'Sujeto: ' + sentence.words[0].word,
          'No tiene verbo',
        ];
        // Ensure options are distinct
        const uniqueOptions = Array.from(new Set(options));
        const correctIndex = 0;

        return {
          titleEs: 'Paso 2: Identifica el Sujeto',
          titleHy: 'Քայլ 2. Որոշի՛ր ենթական (Sujeto)',
          instructionEs: '¿Quién o qué concuerda en número y persona con el verbo?',
          instructionHy: 'Ո՞վ կամ ի՞նչն է թվով և դեմքով համաձայնում բայի հետ։',
          options: uniqueOptions,
          correctIndex,
          correctExpEs: `¡Excelente! El sujeto es "${uniqueOptions[0]}". ${sentence.sujeto.explanationEs}`,
          correctExpHy: `Հիանալի՛ է։ Ենթական է «${uniqueOptions[0]}»։ ${sentence.sujeto.explanationHy}`,
          wrongExpEs: `Vuelve a probar. El sujeto correcto es "${uniqueOptions[0]}". Recuerda aplicar la prueba de la concordancia.`,
          wrongExpHy: `Կրկին փորձի՛ր։ Ճիշտ ենթական է «${uniqueOptions[0]}»։ Հիշիր համաձայնության ստուգումը։`,
        };
      }
      case 3: {
        // Step 3: Predicado
        const isNominal = sentence.predicado.type === 'nominal';
        const options = [
          isNominal ? 'Predicado Nominal (con verbo copulativo ser/estar/parecer)' : 'Predicado Verbal (con verbo predicativo de acción)',
          isNominal ? 'Predicado Verbal' : 'Predicado Nominal',
          'Oración sin predicado',
          'Sujeto compuesto',
        ];
        return {
          titleEs: 'Paso 3: Identifica el tipo de Predicado',
          titleHy: 'Քայլ 3. Որոշի՛ր ստորոգյալի տեսակը (Predicado)',
          instructionEs: '¿Qué tipo de predicado tiene esta oración?',
          instructionHy: 'Ի՞նչ տեսակի ստորոգյալ ունի այս նախադասությունը։',
          options,
          correctIndex: 0,
          correctExpEs: `¡Exacto! Es un ${options[0]}. El núcleo verbal es "${sentence.predicado.nucleo}".`,
          correctExpHy: `Ճիշտ է։ Սա ${options[0]} է։ Բայական միջուկն է «${sentence.predicado.nucleo}»։`,
          wrongExpEs: `No es correcto. El predicado es ${options[0]}. Revisa si el verbo es ser/estar/parecer.`,
          wrongExpHy: `Ճիշտ չէ։ Ստորոգյալը ${options[0]} է։ Ստուգիր՝ արդյոք բայը ser, estar կամ parecer է։`,
        };
      }
      case 4: {
        // Step 4: Núcleo del sujeto
        return {
          titleEs: 'Paso 4: Encuentra el Núcleo del Sujeto',
          titleHy: 'Քայլ 4. Գտի՛ր ենթակայի միջուկը',
          instructionEs: '¿Cuál es la palabra principal (sustantivo o pronombre) del sujeto?',
          instructionHy: 'Ո՞րն է ենթակայի գլխավոր բառը (գոյականը կամ դերանունը)։',
          options: [sentence.sujeto.nucleo, ...sentence.words.slice(0, 3).map((w) => w.word)].filter(
            (v, i, a) => a.indexOf(v) === i
          ),
          correctIndex: 0,
          correctExpEs: `¡Muy bien! El núcleo del sujeto es "${sentence.sujeto.nucleo}".`,
          correctExpHy: `Շատ լավ է։ Ենթակայի միջուկն է «${sentence.sujeto.nucleo}»։`,
          wrongExpEs: `Incorrecto. El núcleo del sujeto es "${sentence.sujeto.nucleo}".`,
          wrongExpHy: `Սխալ է։ Ենթակայի միջուկն է «${sentence.sujeto.nucleo}»։`,
        };
      }
      default:
        return null;
    }
  };

  const stepData = getStepData();

  const handleCheckAnswer = (optIndex: number) => {
    setSelectedOption(optIndex);
    if (!stepData) return;

    const isCorrect = optIndex === stepData.correctIndex;
    setStepFeedback({
      isCorrect,
      messageEs: isCorrect ? stepData.correctExpEs : stepData.wrongExpEs,
      messageHy: isCorrect ? stepData.correctExpHy : stepData.wrongExpHy,
    });
  };

  const handleNextStep = () => {
    setSelectedOption(null);
    setStepFeedback(null);
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Laboratorio Guiado Paso a Paso</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Laboratorio de oraciones
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            Aprende a analizar cualquier oración con el método paso a paso: encuentra el verbo,
            localiza el sujeto por concordancia, determina el predicado y analiza sus complementos.
          </p>
        </div>
      </div>

      {/* Sentence Selector Carousel */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Elige una oración para el laboratorio
          </span>
          <span className="text-xs text-amber-700 font-semibold">
            {allAnalyzedSentences.length} disponibles
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {allAnalyzedSentences.slice(0, 15).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelectSentence(s.id)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all text-left max-w-xs truncate ${
                selectedSentenceId === s.id
                  ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                  : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <div className="font-bold line-clamp-1">{s.sentenceEs}</div>
              <div className="text-[10px] text-stone-400 line-clamp-1">{s.difficultyLabel}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Target Sentence Display */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Oración en análisis
          </span>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar análisis</span>
          </button>
        </div>

        <SentenceTranslation
          es={sentence.sentenceEs}
          hy={sentence.sentenceHy}
          size="xl"
          variant="card"
        />

        {/* Step Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-2">
            <span>Paso {currentStep} de 5</span>
            <span className="text-amber-700">
              {currentStep === 5 ? '¡Análisis completo!' : 'En progreso...'}
            </span>
          </div>
          <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Interactive Step Workspace */}
      {stepData && currentStep < 5 && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-xl font-bold text-stone-900">{stepData.titleEs}</h2>
            <p className="text-xs text-amber-900 font-medium">{stepData.titleHy}</p>
            <p className="text-sm text-stone-600 mt-2 font-medium">
              {stepData.instructionEs}
            </p>
            <p className="text-xs text-stone-400">[ՀԱՅ] {stepData.instructionHy}</p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stepData.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleCheckAnswer(idx)}
                  className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all ${
                    isSelected
                      ? stepFeedback?.isCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-400'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {isSelected && (
                      <span>
                        {stepFeedback?.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Feedback Box */}
          {stepFeedback && (
            <div
              className={`p-4 rounded-xl border space-y-2 animate-fadeIn ${
                stepFeedback.isCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {stepFeedback.isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600" />
                )}
                <span>{stepFeedback.isCorrect ? '¡Excelente respuesta!' : 'Revisa el razonamiento:'}</span>
              </div>
              <p className="text-xs leading-relaxed">{stepFeedback.messageEs}</p>
              <p className="text-xs pt-1 border-t border-current/20 opacity-90">
                [Հայերեն] {stepFeedback.messageHy}
              </p>

              {stepFeedback.isCorrect && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    <span>Siguiente paso</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Final Step 5: Full Diagram & Synthesis */}
      {currentStep >= 5 && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div className="flex items-center gap-3 text-emerald-700">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                ¡Enhorabuena! Has completado el análisis paso a paso
              </h2>
              <p className="text-xs text-stone-500">
                Revisa a continuación el esquema sintáctico completo de la oración.
              </p>
            </div>
          </div>

          {/* Full Scheme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-cyan-400 bg-cyan-50/50 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 bg-cyan-200 px-2 py-0.5 rounded">
                Sujeto (SN)
              </span>
              <p className="text-base font-extrabold text-stone-900">«{sentence.sujeto.text}»</p>
              <p className="text-xs text-stone-600">
                Núcleo: <span className="font-bold">{sentence.sujeto.nucleo}</span>
              </p>
              <p className="text-xs text-stone-600">{sentence.sujeto.explanationEs}</p>
              <p className="text-[11px] text-cyan-950">[ՀԱՅ] {sentence.sujeto.explanationHy}</p>
            </div>

            <div className="border-2 border-amber-400 bg-amber-50/50 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200 px-2 py-0.5 rounded">
                Predicado ({sentence.predicado.type === 'nominal' ? 'PN' : 'PV'})
              </span>
              <p className="text-base font-extrabold text-stone-900">«{sentence.predicado.text}»</p>
              <p className="text-xs text-stone-600">
                Núcleo verbal: <span className="font-bold">{sentence.predicado.nucleo}</span>
              </p>
              <p className="text-xs text-stone-600">{sentence.predicado.explanationEs}</p>
              <p className="text-[11px] text-amber-950">[ՀԱՅ] {sentence.predicado.explanationHy}</p>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Analizar otra oración</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
