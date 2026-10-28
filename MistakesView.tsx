import React, { useState, useEffect } from 'react';
import { SavedMistake, TopicId } from './types';
import { SentenceTranslation } from './SentenceTranslation';
import { topicList } from './dataTheory';
import { prepareShuffledQuestion, ShuffledQuestionResult } from './dataQuestions';
import {
  AlertOctagon,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Trash2,
  BookOpen,
  Filter,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface MistakesViewProps {
  onGoToExam?: () => void;
  onGoToPractice?: () => void;
  onMistakesUpdated?: () => void;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  onGoToExam,
  onGoToPractice,
  onMistakesUpdated,
}) => {
  const [mistakes, setMistakes] = useState<SavedMistake[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>('all');
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState(true);
  
  // Interactive Retake Mode
  const [isRetakeActive, setIsRetakeActive] = useState(false);
  const [retakeIndex, setRetakeIndex] = useState(0);
  const [retakeShuffledList, setRetakeShuffledList] = useState<
    { mistakeId: string; shuffled: ShuffledQuestionResult }[]
  >([]);
  const [retakeSelectedOption, setRetakeSelectedOption] = useState<number | null>(null);
  const [isRetakeAnswered, setIsRetakeAnswered] = useState(false);
  const [retakeScore, setRetakeScore] = useState({ masteredCount: 0, total: 0 });

  // Expanded guides
  const [expandedGuide, setExpandedGuide] = useState<string | null>('func-vs-mod');

  // Load mistakes from localStorage
  const reloadMistakes = () => {
    try {
      const stored = localStorage.getItem('lengua_saved_mistakes');
      if (stored) {
        const parsed: SavedMistake[] = JSON.parse(stored);
        setMistakes(parsed);
      } else {
        setMistakes([]);
      }
    } catch {
      setMistakes([]);
    }
  };

  useEffect(() => {
    reloadMistakes();
  }, []);

  const saveMistakesToStorage = (updated: SavedMistake[]) => {
    setMistakes(updated);
    try {
      localStorage.setItem('lengua_saved_mistakes', JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (onMistakesUpdated) onMistakesUpdated();
  };

  const toggleMastered = (mistakeId: string) => {
    const updated = mistakes.map((m) =>
      m.id === mistakeId ? { ...m, mastered: !m.mastered } : m
    );
    saveMistakesToStorage(updated);
  };

  const deleteMistake = (mistakeId: string) => {
    const updated = mistakes.filter((m) => m.id !== mistakeId);
    saveMistakesToStorage(updated);
  };

  const clearMastered = () => {
    const updated = mistakes.filter((m) => !m.mastered);
    saveMistakesToStorage(updated);
  };

  const clearAllMistakes = () => {
    if (window.confirm('¿Seguro que deseas eliminar todos los errores guardados? / Վստա՞հ եք, որ ցանկանում եք ջնջել բոլոր պահպանված սխալները:')) {
      saveMistakesToStorage([]);
    }
  };

  // Filtered mistakes list
  const filteredMistakes = mistakes.filter((m) => {
    if (selectedTopic !== 'all' && m.topicId !== selectedTopic) return false;
    if (showOnlyUnmastered && m.mastered) return false;
    return true;
  });

  const unmasteredCount = mistakes.filter((m) => !m.mastered).length;
  const masteredCount = mistakes.filter((m) => m.mastered).length;

  // Start retake session with filtered unmastered mistakes
  const startRetake = () => {
    const toRetake = filteredMistakes.filter((m) => !m.mastered);
    if (toRetake.length === 0) return;

    const prepared = toRetake.map((m) => ({
      mistakeId: m.id,
      shuffled: prepareShuffledQuestion(m.question),
    }));

    setRetakeShuffledList(prepared);
    setRetakeIndex(0);
    setRetakeSelectedOption(null);
    setIsRetakeAnswered(false);
    setRetakeScore({ masteredCount: 0, total: prepared.length });
    setIsRetakeActive(true);
  };

  const handleRetakeOptionSelect = (optionIdx: number) => {
    if (isRetakeAnswered || !retakeShuffledList[retakeIndex]) return;
    setRetakeSelectedOption(optionIdx);
    setIsRetakeAnswered(true);

    const currentItem = retakeShuffledList[retakeIndex];
    const isCorrect = optionIdx === currentItem.shuffled.newCorrectIndex;

    if (isCorrect) {
      // Mark as mastered in localStorage
      const updated = mistakes.map((m) =>
        m.id === currentItem.mistakeId ? { ...m, mastered: true } : m
      );
      saveMistakesToStorage(updated);
      setRetakeScore((prev) => ({ ...prev, masteredCount: prev.masteredCount + 1 }));
    }
  };

  const handleNextRetakeQuestion = () => {
    if (retakeIndex + 1 < retakeShuffledList.length) {
      setRetakeIndex((prev) => prev + 1);
      setRetakeSelectedOption(null);
      setIsRetakeAnswered(false);
    } else {
      // Finish retake
      setIsRetakeActive(false);
    }
  };

  // RETAKE SESSION SCREEN
  if (isRetakeActive && retakeShuffledList.length > 0) {
    const currentItem = retakeShuffledList[retakeIndex];
    const q = currentItem.shuffled.question;
    const isCorrect = retakeSelectedOption === currentItem.shuffled.newCorrectIndex;

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
        {/* Retake Header */}
        <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">
                Repitiendo Error {retakeIndex + 1} de {retakeShuffledList.length}
              </h2>
              <p className="text-xs text-stone-500 font-armenian">
                Կրկնում ենք սխալը {retakeIndex + 1} / {retakeShuffledList.length} (Եթե ճիշտ պատասխանեք, այն կնշվի որպես յուրացված)
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsRetakeActive(false)}
            className="px-3.5 py-1.5 text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            Salir de la repetición / Ելք
          </button>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full inline-block">
              {q.topicId.toUpperCase()} • {q.difficulty.toUpperCase()}
            </div>

            <SentenceTranslation
              es={q.questionEs}
              hy={q.questionHy}
              variant="plain"
              className="text-lg sm:text-xl font-bold text-stone-900"
            />

            {q.targetSentenceEs && (
              <div className="p-4 bg-stone-50 border-l-4 border-amber-500 rounded-r-xl">
                <SentenceTranslation
                  es={q.targetSentenceEs}
                  hy={q.targetSentenceHy || ''}
                  variant="quote"
                  className="text-base font-semibold text-stone-800"
                />
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentItem.shuffled.shuffledOptions.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = retakeSelectedOption === idx;
              const isTargetCorrect = idx === currentItem.shuffled.newCorrectIndex;

              let btnStyle = 'border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 bg-stone-50/50';
              if (isRetakeAnswered) {
                if (isTargetCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-2 ring-emerald-500/20';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
                } else {
                  btnStyle = 'border-stone-200 opacity-60 bg-stone-50';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isRetakeAnswered}
                  onClick={() => handleRetakeOptionSelect(idx)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${btnStyle}`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 mt-0.5 ${
                      isRetakeAnswered && isTargetCorrect
                        ? 'bg-emerald-600 text-white'
                        : isRetakeAnswered && isSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {letter}
                  </span>
                  <div className="flex-1 space-y-0.5">
                    <SentenceTranslation
                      es={opt.textEs}
                      hy={opt.textHy}
                      variant="plain"
                      className="text-sm sm:text-base font-medium text-stone-800"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback & explanation */}
          {isRetakeAnswered && (
            <div className="space-y-4 pt-4 border-t border-stone-200 animate-fadeIn">
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}
              >
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-base">
                        ¡Bien corregido! Marcado como dominado.
                      </p>
                      <p className="text-xs text-emerald-800 font-armenian">
                        Ճիշտ է։ Այս սխալն այժմ նշված է որպես յուրացված (Mastered)։
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                    <div>
                      <p className="font-bold text-base">Aún necesitas reforzar este concepto.</p>
                      <p className="text-xs text-rose-800 font-armenian">
                        Դեռևս սխալ կա։ Կարդացեք ստորև բերված մանրամասն բացատրությունը։
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Detailed Explanation */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-3">
                <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Explicación detallada / Մանրամասն բացատրություն</span>
                </h4>
                <SentenceTranslation
                  es={q.explanationEs}
                  hy={q.explanationHy}
                  variant="card"
                  className="text-sm text-stone-700"
                />

                {q.whyStudentWrongEs && (
                  <div className="mt-2 pt-2 border-t border-amber-200/60">
                    <span className="text-xs font-bold text-rose-800 uppercase tracking-wide">
                      ¿Por qué es un error común? / Ինչո՞ւ են աշակերտները հաճախ սխալվում.
                    </span>
                    <SentenceTranslation
                      es={q.whyStudentWrongEs}
                      hy={q.whyStudentWrongHy || ''}
                      variant="card"
                      className="text-xs text-stone-700 mt-1"
                    />
                  </div>
                )}

                <div className="mt-2 p-3 bg-white rounded-lg border border-amber-200/80">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                    Truco para el examen / Քննության հնարք.
                  </span>
                  <SentenceTranslation
                    es={q.examTipEs}
                    hy={q.examTipHy}
                    variant="plain"
                    className="text-xs text-stone-800 mt-1 block"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNextRetakeQuestion}
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold flex items-center gap-2 shadow-md transition-all"
                >
                  <span>
                    {retakeIndex + 1 < retakeShuffledList.length
                      ? 'Siguiente error / Հաջորդ սխալը'
                      : 'Finalizar repaso / Ավարտել'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MAIN MISTAKES DASHBOARD
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Zona de Refuerzo y Repetición de Errores</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-lg bg-rose-500/30 text-rose-200 font-bold border border-rose-400/30">
              {unmasteredCount} pendientes / սպասող
            </span>
            <span className="text-xs px-3 py-1 rounded-lg bg-emerald-500/30 text-emerald-200 font-bold border border-emerald-400/30">
              {masteredCount} dominados / յուրացված
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Banco Personalizado de Errores
          </h1>
          <p className="text-rose-200 text-sm font-armenian">
            Սխալների կրկնության բաժին — այստեղ ավտոմատ պահվում են այն բոլոր հարցերը, որոնցում սխալ եք պատասխանել պրակտիկայում կամ քննություններում։
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {unmasteredCount > 0 && (
            <button
              onClick={startRetake}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Entrenar errores pendientes ({unmasteredCount}) / Կրկնել սխալները</span>
            </button>
          )}

          {masteredCount > 0 && (
            <button
              onClick={clearMastered}
              className="px-4 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-stone-200 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 transition-colors"
            >
              <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Limpiar dominados / Մաքրել յուրացվածները</span>
            </button>
          )}

          {mistakes.length > 0 && (
            <button
              onClick={clearAllMistakes}
              className="px-4 py-2.5 rounded-xl bg-stone-800/80 hover:bg-rose-950/60 text-rose-300 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 hover:border-rose-800 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Vaciar todo / Ջնջել բոլորը</span>
            </button>
          )}
        </div>
      </div>

      {/* CONCEPTUAL DIFFICULTIES GUIDE (DIFFERENCE ACCORDIONS) */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-stone-900">
              Guía de trampas y diferencias conceptuales del examen
            </h2>
            <p className="text-xs text-stone-500 font-armenian">
              Քննության ամենահաճախակի շփոթությունները և դրանք հեշտ տարբերելու կանոնները
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Card 1: Funciones vs Modalidades */}
          <div className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
            <button
              onClick={() => setExpandedGuide(expandedGuide === 'func-vs-mod' ? null : 'func-vs-mod')}
              className="w-full p-4 bg-stone-50 hover:bg-amber-50/50 text-left flex items-center justify-between transition-colors"
            >
              <span className="font-bold text-sm text-stone-900">
                1. ¿Función del lenguaje o Modalidad oracional?
              </span>
              {expandedGuide === 'func-vs-mod' ? (
                <ChevronUp className="w-4 h-4 text-stone-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-stone-500" />
              )}
            </button>
            {expandedGuide === 'func-vs-mod' && (
              <div className="p-4 text-xs space-y-2.5 bg-white border-t border-stone-200">
                <p className="text-stone-700 leading-relaxed">
                  <strong className="text-rose-700">La trampa típica:</strong> Confundir la forma gramatical con la intención comunicativa.
                </p>
                <div className="p-3 bg-amber-50 rounded-lg space-y-1">
                  <p className="font-bold text-amber-950">Ejemplo: «¿Puedes cerrar la ventana?»</p>
                  <p className="text-stone-800">
                    • <strong>Modalidad oracional:</strong> Interrogativa directa (lleva signos de interrogación ¿?).
                  </p>
                  <p className="text-stone-800">
                    • <strong>Función del lenguaje:</strong> Apelativa o conativa (el emisor no quiere saber si físicamente puedes, sino que pide que la cierres).
                  </p>
                </div>
                <p className="text-stone-600 font-armenian text-xs">
                  Հայերեն՝ Քերականական ձևը հարցական է (Interrogativa), բայց հաղորդակցական նպատակը խնդրանք է կամ հրաման (Función apelativa)։
                </p>
              </div>
            )}
          </div>

          {/* Card 2: Determinante vs Pronombre */}
          <div className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
            <button
              onClick={() => setExpandedGuide(expandedGuide === 'det-vs-pron' ? null : 'det-vs-pron')}
              className="w-full p-4 bg-stone-50 hover:bg-amber-50/50 text-left flex items-center justify-between transition-colors"
            >
              <span className="font-bold text-sm text-stone-900">
                2. Determinante vs Pronombre
              </span>
              {expandedGuide === 'det-vs-pron' ? (
                <ChevronUp className="w-4 h-4 text-stone-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-stone-500" />
              )}
            </button>
            {expandedGuide === 'det-vs-pron' && (
              <div className="p-4 text-xs space-y-2.5 bg-white border-t border-stone-200">
                <p className="text-stone-700 leading-relaxed">
                  <strong className="text-amber-800">Regla de oro:</strong> El determinante acompaña a un sustantivo. El pronombre va SOLO y lo sustituye.
                </p>
                <div className="p-3 bg-blue-50 rounded-lg space-y-1">
                  <p className="text-blue-950">
                    • <em>«<strong>Este</strong> libro es genial.»</em> → <strong>Determinante demostrativo</strong> (va pegado al sustantivo <em>libro</em>).
                  </p>
                  <p className="text-blue-950">
                    • <em>«<strong>Este</strong> es mi favorito.»</em> → <strong>Pronombre demostrativo</strong> (está solo, no hay sustantivo detrás).
                  </p>
                </div>
                <p className="text-stone-600 font-armenian text-xs">
                  Հայերեն՝ Եթե բառն ուղեկցում է գոյականին, այն Determinante է։ Եթե այն փոխարինում է գոյականին և մենակ է, այն Pronombre (դերանուն) է։
                </p>
              </div>
            )}
          </div>

          {/* Card 3: CD vs Atributo vs CI */}
          <div className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
            <button
              onClick={() => setExpandedGuide(expandedGuide === 'cd-atrib-ci' ? null : 'cd-atrib-ci')}
              className="w-full p-4 bg-stone-50 hover:bg-amber-50/50 text-left flex items-center justify-between transition-colors"
            >
              <span className="font-bold text-sm text-stone-900">
                3. CD (lo/la) vs Atributo (ser/estar) vs CI (le/les)
              </span>
              {expandedGuide === 'cd-atrib-ci' ? (
                <ChevronUp className="w-4 h-4 text-stone-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-stone-500" />
              )}
            </button>
            {expandedGuide === 'cd-atrib-ci' && (
              <div className="p-4 text-xs space-y-2.5 bg-white border-t border-stone-200">
                <div className="space-y-1.5 text-stone-700">
                  <p>
                    • <strong>CD:</strong> Se sustituye por <em>lo, la, los, las</em>. Solo con verbos predicativos (no copulativos). Pasa a sujeto en voz pasiva.
                  </p>
                  <p>
                    • <strong>Atributo:</strong> Va con verbos copulativos (<em>ser, estar, parecer</em>) y concuerda con el sujeto. Se sustituye SIEMPRE por <em>lo</em> invariable.
                  </p>
                  <p>
                    • <strong>CI:</strong> Responde a ¿A quién? y se sustituye por <em>le, les</em> (o <em>se</em> ante lo/la).
                  </p>
                </div>
                <p className="text-stone-600 font-armenian text-xs">
                  Հայերեն՝ Ուղիղ խնդիրը (CD) փոխարինվում է lo/la-ով, Atributo-ն միշտ լինում է ser/estar/parecer բայերի հետ, իսկ անուղղակին (CI)՝ le/les-ով։
                </p>
              </div>
            )}
          </div>

          {/* Card 4: Sujeto postpuesto con Gustar */}
          <div className="border border-stone-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors">
            <button
              onClick={() => setExpandedGuide(expandedGuide === 'sujeto-gustar' ? null : 'sujeto-gustar')}
              className="w-full p-4 bg-stone-50 hover:bg-amber-50/50 text-left flex items-center justify-between transition-colors"
            >
              <span className="font-bold text-sm text-stone-900">
                4. Sujeto con verbos tipo «gustar», «encantar»
              </span>
              {expandedGuide === 'sujeto-gustar' ? (
                <ChevronUp className="w-4 h-4 text-stone-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-stone-500" />
              )}
            </button>
            {expandedGuide === 'sujeto-gustar' && (
              <div className="p-4 text-xs space-y-2.5 bg-white border-t border-stone-200">
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
                  <p className="font-bold text-rose-950">
                    «A mis padres les gusta el cine.»
                  </p>
                  <p className="text-stone-800 mt-1">
                    ¡El sujeto NO es «A mis padres»! (El sujeto NUNCA empieza por preposición «A»).
                  </p>
                  <p className="text-emerald-800 font-semibold mt-1">
                    El sujeto es «el cine». Prueba de concordancia: «A mis padres les gustan LOS CINES». Al cambiar el verbo a plural, cambia «los cines».
                  </p>
                </div>
                <p className="text-stone-600 font-armenian text-xs">
                  Հայերեն՝ Ենթական ԵՐԲԵՔ չի սկսվում «A» նախդիրով։ «A mis padres»-ը CI է, իսկ ենթական «el cine»-ն է։
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* Topic filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Tema:
          </span>
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedTopic === 'all'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todos ({mistakes.length})
          </button>
          {topicList.map((t) => {
            const countForTopic = mistakes.filter((m) => m.topicId === t.id).length;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTopic === t.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t.titleEs} ({countForTopic})
              </button>
            );
          })}
        </div>

        {/* Mastered toggle */}
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showOnlyUnmastered}
            onChange={(e) => setShowOnlyUnmastered(e.target.checked)}
            className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300"
          />
          <span>Mostrar solo no dominados / Ցույց տալ միայն սպասողները</span>
        </label>
      </div>

      {/* MISTAKES LIST OR EMPTY STATE */}
      {filteredMistakes.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-sm space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <CheckCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900">
              {mistakes.length === 0
                ? '¡No tienes ningún error registrado!'
                : 'No hay errores en este filtro'}
            </h3>
            <p className="text-sm text-stone-500 font-armenian">
              {mistakes.length === 0
                ? 'Հիանալի է։ Դուք չունեք պահպանված սխալներ։ Շարունակեք պարապել կամ սկսեք քննությունը։'
                : 'Այս ընտրված թեմայում կամ զտիչում սխալներ չկան։'}
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-3">
            {onGoToPractice && (
              <button
                onClick={onGoToPractice}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors"
              >
                Ir a Práctica libre / Գնալ պրակտիկայի
              </button>
            )}
            {onGoToExam && (
              <button
                onClick={onGoToExam}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors"
              >
                Hacer Simulador de Examen / Քննության սիմուլյատոր
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
            <span>
              Mostrando {filteredMistakes.length} de {mistakes.length} errores guardados
            </span>
            <span className="font-armenian">
              Ցուցադրվում է {filteredMistakes.length} սխալ
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredMistakes.map((mistake, idx) => {
              const q = mistake.question;
              const dateStr = new Date(mistake.timestamp).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={mistake.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all shadow-sm ${
                    mistake.mastered
                      ? 'border-emerald-200 bg-emerald-50/20'
                      : 'border-rose-200 bg-white hover:border-rose-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          mistake.mastered
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {mistake.mastered ? 'Dominado / Յուրացված' : 'Pendiente / Սխալ'}
                      </span>
                      <span className="text-xs text-stone-400">• {dateStr}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleMastered(mistake.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                          mistake.mastered
                            ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                            : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>
                          {mistake.mastered
                            ? 'Desmarcar / Չեղարկել'
                            : 'Marcar Dominado / Նշել յուրացված'}
                        </span>
                      </button>
                      <button
                        onClick={() => deleteMistake(mistake.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Eliminar de la lista"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question content */}
                  <div className="space-y-3">
                    <SentenceTranslation
                      es={q.questionEs}
                      hy={q.questionHy}
                      variant="plain"
                      className="text-base font-bold text-stone-900"
                    />

                    {q.targetSentenceEs && (
                      <div className="p-3 bg-stone-50 border-l-4 border-amber-500 rounded-r-lg">
                        <SentenceTranslation
                          es={q.targetSentenceEs}
                          hy={q.targetSentenceHy || ''}
                          variant="quote"
                          className="text-sm font-semibold text-stone-800"
                        />
                      </div>
                    )}

                    {/* Options summary with correct highlight */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctOptionIndex;
                        const wasChosen = optIdx === mistake.chosenOptionIndex;

                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-xl text-xs border flex items-start gap-2 ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                                : wasChosen
                                ? 'bg-rose-50 border-rose-300 text-rose-950'
                                : 'bg-stone-50 border-stone-200 text-stone-600 opacity-70'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                                isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : wasChosen
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-stone-200 text-stone-700'
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <div className="space-y-0.5">
                              <SentenceTranslation
                                es={opt.textEs}
                                hy={opt.textHy}
                                variant="plain"
                                className="font-medium"
                              />
                              {isCorrect && (
                                <span className="text-[10px] text-emerald-700 font-bold block">
                                  ✓ Respuesta correcta / Ճիշտ պատասխան
                                </span>
                              )}
                              {wasChosen && !isCorrect && (
                                <span className="text-[10px] text-rose-700 font-bold block">
                                  ✗ Tu elección anterior / Քո նախորդ սխալ ընտրությունը
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-2 mt-3">
                      <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        <span>Por qué es correcto / Ինչու է այս տարբերակը ճիշտ</span>
                      </div>
                      <SentenceTranslation
                        es={q.explanationEs}
                        hy={q.explanationHy}
                        variant="card"
                        className="text-xs text-stone-700"
                      />
                      {q.examTipEs && (
                        <div className="pt-2 border-t border-amber-200/50">
                          <span className="text-[11px] font-bold text-amber-800">
                            Consejo para el examen:
                          </span>
                          <SentenceTranslation
                            es={q.examTipEs}
                            hy={q.examTipHy}
                            variant="plain"
                            className="text-xs text-stone-800 ml-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
