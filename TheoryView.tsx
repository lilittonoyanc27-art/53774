import React, { useState } from 'react';
import {
  allTheoryLessons,
  topicList,
  communicationScenarios,
  comparativeFunctionsTable,
} from './dataTheory';
import { TopicId, SubtopicId } from './types';
import { SentenceTranslation } from './SentenceTranslation';
import {
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Table,
  Radio,
  Layers,
} from 'lucide-react';

interface TheoryViewProps {
  onStartPracticeTopic: (topicId: TopicId) => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onStartPracticeTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('funciones');
  const [activeSubtopic, setActiveSubtopic] = useState<SubtopicId>('func-referencial');
  const [simplifiedOpen, setSimplifiedOpen] = useState<Record<string, boolean>>({});
  const [activeScenarioId, setActiveScenarioId] = useState<string>('esc-profesor');
  const [selectedElementKey, setSelectedElementKey] = useState<string | null>(null);
  const [showCompareTable, setShowCompareTable] = useState(false);

  const lessonsForTopic = allTheoryLessons.filter((l) => l.topicId === selectedTopic);
  const currentLesson = lessonsForTopic.find((l) => l.id === activeSubtopic) || lessonsForTopic[0];

  const handleSelectTopic = (tid: TopicId) => {
    setSelectedTopic(tid);
    const first = allTheoryLessons.find((l) => l.topicId === tid);
    if (first) setActiveSubtopic(first.id);
  };

  const toggleSimplified = (id: string) => {
    setSimplifiedOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentScenario = communicationScenarios.find((s) => s.id === activeScenarioId) || communicationScenarios[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-stone-800">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guía oficial 1.º ESO con traducción al armenio</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Teoría completa de Lengua Castellana
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Aprende cada tema desde cero con explicaciones claras, trucos de examen y traducción de
            cada frase al armenio al hacer clic.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-400">
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700/60">
              💡 Haz clic en cualquier oración para ver su traducción
            </span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700/60">
              🎯 Botón «No lo entiendo» para explicaciones sencillas
            </span>
          </div>
        </div>
      </div>

      {/* Main Topic Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {topicList.map((t) => {
          const isSelected = selectedTopic === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => handleSelectTopic(t.id)}
              className={`p-4 rounded-xl text-left transition-all border ${
                isSelected
                  ? 'bg-amber-600 text-white border-amber-500 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-white text-stone-800 border-stone-200 hover:border-amber-400 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-200' : 'text-amber-700'}`}>
                  {t.id.toUpperCase()}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isSelected ? 'bg-amber-700 text-white' : 'bg-stone-100 text-stone-600'}`}>
                  {t.badgeCount} temas
                </span>
              </div>
              <h3 className="font-bold text-sm leading-snug line-clamp-1">{t.titleEs}</h3>
              <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-amber-100' : 'text-stone-500'}`}>
                {t.titleHy}
              </p>
            </button>
          );
        })}
      </div>

      {/* SPECIAL SECTION: Interactiv Communication Simulator (when selectedTopic === 'comunicacion') */}
      {selectedTopic === 'comunicacion' && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                <Radio className="w-4 h-4 text-amber-600" />
                <span>Simulador interactivo del circuito comunicativo</span>
              </div>
              <h2 className="text-xl font-extrabold text-stone-900">
                Elementos de la comunicación en situaciones reales
              </h2>
              <p className="text-xs text-stone-500">
                Selecciona una situación cotidiana y haz clic en cada elemento para ver su explicación en español y armenio.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartPracticeTopic('comunicacion')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Practicar Comunicación</span>
            </button>
          </div>

          {/* Scenario Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {communicationScenarios.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setSelectedElementKey(null);
                }}
                className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                  activeScenarioId === sc.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {sc.titleEs}
              </button>
            ))}
          </div>

          {/* Scenario Description */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              Situación: {currentScenario.titleEs}
            </h4>
            <SentenceTranslation
              es={currentScenario.descriptionEs}
              hy={currentScenario.descriptionHy}
              size="base"
            />
          </div>

          {/* Visual Interactive Communication Schema */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { key: 'emisor', label: '1. Emisor', icon: '🗣️', color: 'bg-rose-50 border-rose-200 text-rose-900', data: currentScenario.emisor },
              { key: 'receptor', label: '2. Receptor', icon: '👂', color: 'bg-blue-50 border-blue-200 text-blue-900', data: currentScenario.receptor },
              { key: 'mensaje', label: '3. Mensaje', icon: '✉️', color: 'bg-emerald-50 border-emerald-200 text-emerald-900', data: currentScenario.mensaje },
              { key: 'codigo', label: '4. Código', icon: '🔤', color: 'bg-purple-50 border-purple-200 text-purple-900', data: currentScenario.codigo },
              { key: 'canal', label: '5. Canal', icon: '📡', color: 'bg-amber-50 border-amber-200 text-amber-900', data: currentScenario.canal },
              { key: 'contexto', label: '6. Contexto', icon: '📍', color: 'bg-cyan-50 border-cyan-200 text-cyan-900', data: currentScenario.contexto },
            ].map((elem) => {
              const active = selectedElementKey === elem.key;
              return (
                <div
                  key={elem.key}
                  onClick={() => setSelectedElementKey(elem.key)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${elem.color} ${
                    active ? 'ring-2 ring-amber-500 shadow-md scale-[1.02]' : 'hover:shadow-xs'
                  }`}
                >
                  <div className="text-xl mb-1">{elem.icon}</div>
                  <div className="font-bold text-xs uppercase tracking-wider mb-1">{elem.label}</div>
                  <div className="text-xs font-medium line-clamp-2">{elem.data.es}</div>
                  <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{elem.data.hy}</div>
                </div>
              );
            })}
          </div>

          {/* Detail card of clicked element */}
          {selectedElementKey && (
            <div className="bg-stone-900 text-white rounded-xl p-4 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Detalle del elemento seleccionado: {selectedElementKey.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedElementKey(null)}
                  className="text-stone-400 hover:text-white text-xs"
                >
                  Cerrar ✕
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(currentScenario as any)[selectedElementKey]?.es}
                </p>
                <p className="text-xs text-amber-300">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  [Հայերեն] {(currentScenario as any)[selectedElementKey]?.hy}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Subtopic Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {lessonsForTopic.map((lesson) => {
          const isCurrent = currentLesson?.id === lesson.id;
          return (
            <button
              key={lesson.id}
              type="button"
              onClick={() => {
                setActiveSubtopic(lesson.id);
                setShowCompareTable(false);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isCurrent && !showCompareTable
                  ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {lesson.titleEs}
            </button>
          );
        })}
        {selectedTopic === 'funciones' && (
          <button
            type="button"
            onClick={() => setShowCompareTable(true)}
            className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              showCompareTable
                ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-amber-600" />
            <span>Tabla comparativa de las 6 funciones</span>
          </button>
        )}
      </div>

      {/* COMPARATIVE TABLE VIEW */}
      {showCompareTable && selectedTopic === 'funciones' && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-stone-900">
              Tabla comparativa de las 6 Funciones del Lenguaje
            </h2>
            <button
              type="button"
              onClick={() => setShowCompareTable(false)}
              className="text-xs text-stone-500 hover:text-stone-800"
            >
              Volver a la lección ✕
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-900 text-white">
                <tr>
                  <th className="p-3">Función</th>
                  <th className="p-3">Elemento clave</th>
                  <th className="p-3">Señales en la frase</th>
                  <th className="p-3">Ejemplo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {comparativeFunctionsTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-stone-50/50' : 'bg-white'}>
                    <td className="p-3 font-bold text-amber-900">
                      <div>{row.conceptEs}</div>
                      <div className="text-[11px] text-stone-500 font-normal">{row.conceptHy}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-medium text-stone-800">{row.targetEs}</div>
                      <div className="text-[11px] text-stone-500">{row.targetHy}</div>
                    </td>
                    <td className="p-3">
                      <div className="text-stone-700">{row.signalsEs}</div>
                      <div className="text-[11px] text-stone-500">{row.signalsHy}</div>
                    </td>
                    <td className="p-3">
                      <SentenceTranslation es={row.exampleEs} hy={row.exampleHy} size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ACTIVE LESSON VIEW */}
      {!showCompareTable && currentLesson && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-8 animate-fadeIn">
          {/* Header of Lesson */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Lección detallada</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {currentLesson.titleEs}
              </h2>
              <p className="text-base font-medium text-amber-900 mt-1">
                {currentLesson.titleHy}
              </p>
              <div className="mt-3">
                <SentenceTranslation
                  es={currentLesson.shortSummaryEs}
                  hy={currentLesson.shortSummaryHy}
                  size="base"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => onStartPracticeTopic(selectedTopic)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Practicar este tema</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Child-friendly explanation ("Para un niño de 7º") */}
          <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/60 border border-amber-200/80 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Explicación sencilla (para entenderlo a la primera)</span>
            </div>
            <SentenceTranslation
              es={currentLesson.simpleExplanationEs}
              hy={currentLesson.simpleExplanationHy}
              size="base"
            />
          </div>

          {/* Full Formal Definition */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Definición académica formal
            </h3>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <SentenceTranslation
                es={currentLesson.fullDefinitionEs}
                hy={currentLesson.fullDefinitionHy}
                size="base"
              />
            </div>
          </div>

          {/* Target Element & Communicative Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                🎯 Objetivo comunicativo
              </span>
              <SentenceTranslation
                es={currentLesson.communicativeGoalEs}
                hy={currentLesson.communicativeGoalHy}
                size="sm"
              />
            </div>
            {currentLesson.targetElement && (
              <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                  📍 Elemento de la comunicación relacionado
                </span>
                <SentenceTranslation
                  es={currentLesson.targetElement.es}
                  hy={currentLesson.targetElement.hy}
                  size="sm"
                />
              </div>
            )}
          </div>

          {/* Signals & Exam Tricks */}
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Cómo reconocerlo en el examen (Señales y trucos infalibles)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentLesson.signalsAndTricksEs.map((trickEs, idx) => {
                const trickHy = currentLesson.signalsAndTricksHy[idx] || '';
                return (
                  <div key={idx} className="bg-stone-800/80 rounded-xl p-3 border border-stone-700/60">
                    <p className="text-xs text-white font-medium">{trickEs}</p>
                    <p className="text-[11px] text-amber-300 mt-1 font-normal">[ՀԱՅ] {trickHy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Examples (12-15 examples with analysis) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Ejemplos comentados ({currentLesson.examples.length})
                </h3>
                <p className="text-xs text-stone-500">
                  Haz clic en cada frase para ver su traducción al armenio y el análisis de por qué cumple la regla.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentLesson.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50/70 border border-stone-200 hover:border-amber-300 rounded-xl p-4 space-y-2.5 transition-colors"
                >
                  <SentenceTranslation
                    es={ex.sentence}
                    hy={ex.armenian}
                    variant="quote"
                    size="base"
                  />
                  <div className="text-xs text-stone-600 bg-white border border-stone-100 rounded-lg p-2.5">
                    <div className="font-semibold text-stone-800 mb-0.5">
                      ¿Por qué? {ex.explanationEs}
                    </div>
                    <div className="text-amber-900 font-normal">
                      [Բացատրություն] {ex.explanationHy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes & Exam Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                <span>⚠️</span> Errores frecuentes de los alumnos
              </span>
              <SentenceTranslation
                es={currentLesson.commonMistakesEs}
                hy={currentLesson.commonMistakesHy}
                size="sm"
              />
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <span>🎯</span> Consejo clave para el examen
              </span>
              <SentenceTranslation
                es={currentLesson.examAdviceEs}
                hy={currentLesson.examAdviceHy}
                size="sm"
              />
            </div>
          </div>

          {/* "No lo entiendo" Button for Alternative Simplified View */}
          <div className="border-t border-stone-200 pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-100 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    ¿Te cuesta entender este concepto?
                  </h4>
                  <p className="text-xs text-stone-600">
                    Pulsa para ver una explicación todavía más fácil con una analogía simple.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleSimplified(currentLesson.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors flex-shrink-0"
              >
                {simplifiedOpen[currentLesson.id] ? 'Ocultar explicación fácil' : '«No lo entiendo» (Explicación ultra sencilla)'}
              </button>
            </div>

            {simplifiedOpen[currentLesson.id] && (
              <div className="mt-4 bg-amber-50 border border-amber-300 rounded-2xl p-5 space-y-3 animate-fadeIn">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  💡 Analogía sencilla para no olvidarlo nunca:
                </div>
                <SentenceTranslation
                  es={currentLesson.simplifiedAlternativeEs}
                  hy={currentLesson.simplifiedAlternativeHy}
                  size="base"
                />
                <div className="pt-2 border-t border-amber-200/80">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                    Ejemplo ultra claro:
                  </span>
                  <SentenceTranslation
                    es={currentLesson.simplifiedAlternativeExample.es}
                    hy={currentLesson.simplifiedAlternativeExample.hy}
                    variant="quote"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
