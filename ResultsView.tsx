import React, { useState, useEffect } from 'react';
import { ExamResultSummary, TopicId } from './types';
import { topicList } from './dataTheory';
import {
  Trophy,
  BarChart3,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  Trash2,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface ResultsViewProps {
  onStartExam?: () => void;
  onGoToPractice?: () => void;
  onGoToMistakes?: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  onStartExam,
  onGoToPractice,
  onGoToMistakes,
}) => {
  const [history, setHistory] = useState<ExamResultSummary[]>([]);
  const [selectedResult, setSelectedResult] = useState<ExamResultSummary | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lengua_exam_history');
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch {
      setHistory([]);
    }
  }, []);

  const clearHistory = () => {
    if (
      window.confirm(
        '¿Deseas borrar todo el historial de exámenes? / Ցանկանո՞ւմ եք ջնջել քննությունների ամբողջ պատմությունը:'
      )
    ) {
      localStorage.removeItem('lengua_exam_history');
      setHistory([]);
      setSelectedResult(null);
    }
  };

  const getSpanishGradeLabel = (s10: number) => {
    if (s10 >= 9.0)
      return {
        label: 'Sobresaliente (SB)',
        labelHy: 'Գերազանց',
        color: 'text-emerald-700 bg-emerald-100 border-emerald-300',
      };
    if (s10 >= 7.0)
      return {
        label: 'Notable (NT)',
        labelHy: 'Լավ / Շատ լավ',
        color: 'text-blue-700 bg-blue-100 border-blue-300',
      };
    if (s10 >= 6.0)
      return {
        label: 'Bien (BI)',
        labelHy: 'Բավարարից բարձր',
        color: 'text-amber-800 bg-amber-100 border-amber-300',
      };
    if (s10 >= 5.0)
      return {
        label: 'Suficiente (SU)',
        labelHy: 'Բավարար (Անցողիկ)',
        color: 'text-yellow-800 bg-yellow-100 border-yellow-300',
      };
    return {
      label: 'Insuficiente (IN)',
      labelHy: 'Անբավարար (Չհանձնված)',
      color: 'text-rose-800 bg-rose-100 border-rose-300',
    };
  };

  // Aggregated Stats
  const totalExams = history.length;
  const avgScore10 =
    totalExams > 0
      ? (history.reduce((acc, h) => acc + h.score10, 0) / totalExams).toFixed(1)
      : '0.0';
  const bestScore10 =
    totalExams > 0 ? Math.max(...history.map((h) => h.score10)).toFixed(1) : '0.0';
  const passedExams = history.filter((h) => h.score10 >= 5.0).length;

  // Topic mastery aggregation
  const topicStats: Record<TopicId, { total: number; correct: number }> = {
    funciones: { total: 0, correct: 0 },
    modalidades: { total: 0, correct: 0 },
    comunicacion: { total: 0, correct: 0 },
    categorias: { total: 0, correct: 0 },
    sintaxis: { total: 0, correct: 0 },
  };

  history.forEach((h) => {
    if (h.topicBreakdown) {
      Object.entries(h.topicBreakdown).forEach(([tid, val]) => {
        const topicKey = tid as TopicId;
        if (topicStats[topicKey]) {
          topicStats[topicKey].total += val.total;
          topicStats[topicKey].correct += val.correct;
        }
      });
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Trophy className="w-3.5 h-3.5" />
            <span>Progreso y Calificaciones Oficiales 1.º ESO</span>
          </div>

          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950 text-rose-300 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 hover:border-rose-800 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpiar historial / Մաքրել</span>
            </button>
          )}
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Expediente de Calificaciones
          </h1>
          <p className="text-amber-200 text-sm font-armenian">
            Քննությունների արդյունքներ և առաջադիմություն — գնահատում իսպանական դպրոցական 10 բալանոց համակարգով։
          </p>
        </div>

        {/* Global Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-stone-800/70 border border-stone-700/80 rounded-xl p-3.5 space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Nota Media / Միջին
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                {avgScore10}
              </span>
              <span className="text-xs text-stone-400">/ 10</span>
            </div>
            <span className="text-[10px] text-stone-400 font-armenian">
              {getSpanishGradeLabel(parseFloat(avgScore10)).labelHy}
            </span>
          </div>

          <div className="bg-stone-800/70 border border-stone-700/80 rounded-xl p-3.5 space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Mejor Nota / Լավագույն
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {bestScore10}
              </span>
              <span className="text-xs text-stone-400">/ 10</span>
            </div>
            <span className="text-[10px] text-stone-400 font-armenian">
              {getSpanishGradeLabel(parseFloat(bestScore10)).label}
            </span>
          </div>

          <div className="bg-stone-800/70 border border-stone-700/80 rounded-xl p-3.5 space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Exámenes Realizados
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {totalExams}
              </span>
              <span className="text-xs text-stone-400">sesiones</span>
            </div>
            <span className="text-[10px] text-stone-400 font-armenian">Քննությունների քանակ</span>
          </div>

          <div className="bg-stone-800/70 border border-stone-700/80 rounded-xl p-3.5 space-y-1">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
              Aprobados / Հանձնված
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0}%
              </span>
              <span className="text-xs text-stone-400">
                ({passedExams}/{totalExams})
              </span>
            </div>
            <span className="text-[10px] text-stone-400 font-armenian">Անցողիկ շեմը հաղթահարած</span>
          </div>
        </div>
      </div>

      {/* TOPIC MASTERY BARS */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">
                Dominio por Temas en Exámenes
              </h2>
              <p className="text-xs text-stone-500 font-armenian">
                Թեմաների յուրացման աստիճանը՝ ըստ քննությունների պատասխանների
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {topicList.map((t) => {
            const stats = topicStats[t.id];
            const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

            let barColor = 'bg-rose-500';
            if (pct >= 80) barColor = 'bg-emerald-500';
            else if (pct >= 60) barColor = 'bg-blue-500';
            else if (pct >= 50) barColor = 'bg-amber-500';

            return (
              <div key={t.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs">
                  <div className="space-x-2">
                    <span className="font-bold text-stone-800">{t.titleEs}</span>
                    <span className="text-stone-400 font-armenian">({t.titleHy})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{pct}%</span>
                    <span className="text-stone-400 text-[11px]">
                      ({stats.correct}/{stats.total} respuestas)
                    </span>
                  </div>
                </div>

                <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                    style={{ width: `${stats.total > 0 ? pct : 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXAM HISTORY LIST */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-stone-100 text-stone-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">
                Historial de Exámenes Realizados
              </h2>
              <p className="text-xs text-stone-500 font-armenian">
                Բոլոր հանձնած քննությունների ամբողջական ցուցակը
              </p>
            </div>
          </div>

          {onStartExam && (
            <button
              onClick={onStartExam}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Nuevo examen / Նոր քննություն</span>
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Award className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="text-base font-bold text-stone-700">
              Aún no has realizado ningún examen
            </h3>
            <p className="text-xs text-stone-500 font-armenian max-w-md mx-auto">
              Դուք դեռ չեք հանձնել քննության որևէ սիմուլյատոր։ Գնացեք «Simulador de Examen» բաժին և ստուգեք ձեր գիտելիքները 100, 50 կամ 20 հարցերով։
            </p>
            {onStartExam && (
              <button
                onClick={onStartExam}
                className="mt-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
              >
                Comenzar Simulador / Սկսել քննությունը
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {history.map((item) => {
              const grade = getSpanishGradeLabel(item.score10);
              const isSelected = selectedResult?.id === item.id;

              return (
                <div key={item.id} className="py-4 space-y-3">
                  <div
                    onClick={() => setSelectedResult(isSelected ? null : item)}
                    className="flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 p-2.5 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl font-extrabold flex flex-col items-center justify-center border ${grade.color}`}
                      >
                        <span className="text-base leading-none">{item.score10.toFixed(1)}</span>
                        <span className="text-[9px] uppercase font-bold mt-0.5">/ 10</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-stone-900">
                            Modo: {item.mode.toUpperCase()} ({item.totalQuestions} preguntas)
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${grade.color}`}
                          >
                            {grade.label}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 flex items-center gap-2 mt-0.5">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>
                            {item.correctCount} / {item.totalQuestions} correctas ({item.scorePercentage}%)
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                      <span>{isSelected ? 'Ocultar desglose' : 'Ver desglose'}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Expanded Breakdown */}
                  {isSelected && (
                    <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-3 animate-fadeIn">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        Rendimiento por temas en este examen / Թեմաների արդյունքներ
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {topicList.map((t) => {
                          const topicData = item.topicBreakdown?.[t.id] || { total: 0, correct: 0 };
                          if (topicData.total === 0) return null;
                          const tPct = Math.round((topicData.correct / topicData.total) * 100);

                          return (
                            <div
                              key={t.id}
                              className="p-3 bg-white rounded-lg border border-stone-200 text-xs space-y-1"
                            >
                              <div className="flex justify-between font-bold text-stone-800">
                                <span>{t.titleEs}</span>
                                <span>{tPct}%</span>
                              </div>
                              <p className="text-[11px] text-stone-500 font-armenian">
                                {topicData.correct} de {topicData.total} ճիշտ
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
