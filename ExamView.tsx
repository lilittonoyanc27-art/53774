import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  allQuestions,
  getRandomQuestions,
  getQuestionsByTopic,
  prepareShuffledQuestion,
  ShuffledQuestionResult,
  shuffleArray,
} from './dataQuestions';
import {
  ExamSessionConfig,
  ExamResultSummary,
  TopicId,
  SavedMistake,
} from './types';
import { topicList } from './dataTheory';
import { SentenceTranslation } from './SentenceTranslation';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  BarChart3,
  BookOpen,
} from 'lucide-react';

interface ExamViewProps {
  onExamCompleted?: () => void;
  onGoToMistakes?: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({ onExamCompleted, onGoToMistakes }) => {
  // Session states
  const [config, setConfig] = useState<ExamSessionConfig>({
    mode: 'completo',
    questionCount: 100,
    useTimer: true,
    timerMinutes: 90,
  });

  const [isExamActive, setIsExamActive] = useState(false);
  const [isExamFinished, setIsExamFinished] = useState(false);

  // Active exam questions (shuffled once at exam start)
  const [examItems, setExamItems] = useState<ShuffledQuestionResult[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [currentIdx, setCurrentIdx] = useState(0);

  // Timer states
  const [secondsRemaining, setSecondsRemaining] = useState(90 * 60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Finish confirmation modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Result summary
  const [examResult, setExamResult] = useState<ExamResultSummary | null>(null);

  // Timer tick
  useEffect(() => {
    if (isExamActive && config.useTimer && !isExamFinished) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExamActive, config.useTimer, isExamFinished]);

  const handleStartExam = () => {
    let pool = allQuestions;

    if (config.mode === 'por_tema' && config.selectedTopicId) {
      pool = getQuestionsByTopic(config.selectedTopicId);
    } else if (config.mode === 'errores') {
      try {
        const stored = localStorage.getItem('lengua_saved_mistakes');
        const list: SavedMistake[] = stored ? JSON.parse(stored) : [];
        const mistakeQuestions = list.map((m) => m.question);
        if (mistakeQuestions.length > 0) pool = mistakeQuestions;
      } catch {
        // fallback
      }
    }

    const shuffledRaw = shuffleArray(pool).slice(0, Math.min(config.questionCount, pool.length));
    const prepared = shuffledRaw.map((q) => prepareShuffledQuestion(q));

    setExamItems(prepared);
    setUserAnswers({});
    setCurrentIdx(0);
    setSecondsRemaining(config.timerMinutes * 60);
    setIsExamActive(true);
    setIsExamFinished(false);
    setExamResult(null);
  };

  const handleSelectAnswer = (optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIdx,
    }));
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = examItems.length - answeredCount;

  const handleFinishExam = () => {
    setShowConfirmModal(false);
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    const topicBreakdown: Record<TopicId, { total: number; correct: number }> = {
      funciones: { total: 0, correct: 0 },
      modalidades: { total: 0, correct: 0 },
      comunicacion: { total: 0, correct: 0 },
      categorias: { total: 0, correct: 0 },
      sintaxis: { total: 0, correct: 0 },
    };

    const newMistakes: SavedMistake[] = [];

    examItems.forEach((item, index) => {
      const chosen = userAnswers[index];
      const isCorrect = chosen !== undefined && chosen === item.newCorrectIndex;
      if (isCorrect) {
        correctCount++;
      }

      const tId = item.question.topicId;
      if (topicBreakdown[tId]) {
        topicBreakdown[tId].total++;
        if (isCorrect) topicBreakdown[tId].correct++;
      }

      if (!isCorrect) {
        newMistakes.push({
          id: `mistake-${item.question.id}-${Date.now()}`,
          questionId: item.question.id,
          topicId: item.question.topicId,
          timestamp: Date.now(),
          chosenOptionIndex: chosen !== undefined ? chosen : -1,
          question: item.question,
          mastered: false,
        });
      }
    });

    const totalQ = examItems.length || 1;
    const score10 = Number(((correctCount / totalQ) * 10).toFixed(1));
    const scorePercentage = Math.round((correctCount / totalQ) * 100);

    const summary: ExamResultSummary = {
      id: `exam-${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      mode: config.mode,
      totalQuestions: totalQ,
      correctCount,
      score10,
      scorePercentage,
      topicBreakdown,
      answers: examItems.map((item, idx) => ({
        questionId: item.question.id,
        chosenOptionIndex: userAnswers[idx] ?? -1,
        isCorrect: userAnswers[idx] === item.newCorrectIndex,
      })),
    };

    setExamResult(summary);
    setIsExamFinished(true);

    // Save exam in history
    try {
      const historyStr = localStorage.getItem('lengua_exam_history');
      const history: ExamResultSummary[] = historyStr ? JSON.parse(historyStr) : [];
      history.unshift(summary);
      localStorage.setItem('lengua_exam_history', JSON.stringify(history.slice(0, 30)));

      // Save new mistakes
      const stored = localStorage.getItem('lengua_saved_mistakes');
      const existingList: SavedMistake[] = stored ? JSON.parse(stored) : [];
      newMistakes.forEach((nm) => {
        const found = existingList.find((m) => m.questionId === nm.questionId);
        if (!found) existingList.push(nm);
      });
      localStorage.setItem('lengua_saved_mistakes', JSON.stringify(existingList));
    } catch {
      // ignore
    }

    // Celebrate if passed
    if (score10 >= 5.0) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }

    if (onExamCompleted) onExamCompleted();
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getSpanishGradeLabel = (s10: number) => {
    if (s10 >= 9.0) return { label: 'Sobresaliente (SB)', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
    if (s10 >= 7.0) return { label: 'Notable (NT)', color: 'text-blue-700 bg-blue-100 border-blue-300' };
    if (s10 >= 6.0) return { label: 'Bien (BI)', color: 'text-amber-800 bg-amber-100 border-amber-300' };
    if (s10 >= 5.0) return { label: 'Suficiente (SU)', color: 'text-yellow-800 bg-yellow-100 border-yellow-300' };
    return { label: 'Insuficiente (IN)', color: 'text-rose-800 bg-rose-100 border-rose-300' };
  };

  // 1. SETUP SCREEN
  if (!isExamActive && !isExamFinished) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
        <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Simulador Oficial 1.º ESO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Examen Final de Lengua Castellana
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            Simula las condiciones reales del examen escolar en España. Sin pistas ni respuestas
            reveladas hasta que entregues. Con navegación libre entre preguntas y calificación
            sobre 10 puntos.
          </p>
        </div>

        {/* Configurations Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-lg font-bold text-stone-900">Configuración del examen</h2>

          {/* Mode Selector */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Modalidad de examen
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { mode: 'completo' as const, count: 100, time: 90, title: 'Examen completo (100)', desc: 'Todas las materias, 90 minutos' },
                { mode: 'medio' as const, count: 50, time: 45, title: 'Examen medio (50)', desc: 'Formato estándar, 45 minutos' },
                { mode: 'corto' as const, count: 20, time: 20, title: 'Examen rápido (20)', desc: 'Test exprés, 20 minutos' },
              ].map((m) => (
                <button
                  key={m.mode}
                  type="button"
                  onClick={() =>
                    setConfig({
                      ...config,
                      mode: m.mode,
                      questionCount: m.count,
                      timerMinutes: m.time,
                    })
                  }
                  className={`p-4 rounded-xl border text-left transition-all ${
                    config.mode === m.mode
                      ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-400 shadow-xs'
                      : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-bold text-sm text-stone-900">{m.title}</div>
                  <div className="text-xs text-stone-500 mt-1">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Timer toggle */}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
            <div>
              <div className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Límite de tiempo con cronómetro</span>
              </div>
              <p className="text-xs text-stone-500">
                {config.timerMinutes} minutos de cuenta atrás
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={config.useTimer}
                onChange={(e) => setConfig({ ...config, useTimer: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
            </label>
          </div>

          {/* Start Button */}
          <div className="pt-4 border-t border-stone-100 flex justify-end">
            <button
              type="button"
              onClick={handleStartExam}
              className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Comenzar el examen</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. ACTIVE EXAM SCREEN
  if (isExamActive && !isExamFinished) {
    const currentItem = examItems[currentIdx];
    const isAnsweredCurrent = userAnswers[currentIdx] !== undefined;

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fadeIn">
        {/* Sticky Exam Status Bar */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 shadow-md p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center">
              {currentIdx + 1}
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">
                Pregunta {currentIdx + 1} de {examItems.length}
              </span>
              <span className="text-[11px] text-stone-500">
                {answeredCount} respondidas, {unansweredCount} pendientes
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {config.useTimer && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                  secondsRemaining < 300
                    ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                    : 'bg-stone-100 text-stone-800 border-stone-200'
                }`}
              >
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors"
            >
              Finalizar y entregar
            </button>
          </div>
        </div>

        {/* Question + Question Navigator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Panel (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Tema: {currentItem.question.topicId}
              </span>
              <span className="text-xs text-stone-400">
                {isAnsweredCurrent ? '✓ Pregunta respondida' : '○ Sin responder aún'}
              </span>
            </div>

            {/* Question Text in ES & HY */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                {currentItem.question.questionEs}
              </h2>
              <div className="text-xs text-amber-950 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3">
                <span className="font-bold text-amber-900 mr-1.5 uppercase text-[10px] tracking-wider">
                  Հարցը հայերեն՝
                </span>
                {currentItem.question.questionHy}
              </div>
            </div>

            {/* Target sentence if applicable */}
            {currentItem.question.targetSentenceEs && (
              <SentenceTranslation
                es={currentItem.question.targetSentenceEs}
                hy={currentItem.question.targetSentenceHy || ''}
                variant="card"
                size="base"
              />
            )}

            {/* 4 Shuffled Options (no answer indicated during exam!) */}
            <div className="space-y-3 pt-2">
              {currentItem.shuffledOptions.map((opt, idx) => {
                const isSelected = userAnswers[currentIdx] === idx;
                const letter = ['A', 'B', 'C', 'D'][idx];

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-400 text-stone-900 shadow-xs'
                        : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-300 hover:bg-stone-100'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center border ${
                        isSelected
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white text-stone-700 border-stone-300'
                      }`}
                    >
                      {letter}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-stone-900">{opt.textEs}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{opt.textHy}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons: Prev / Next */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <button
                type="button"
                disabled={currentIdx === examItems.length - 1}
                onClick={() => setCurrentIdx((prev) => Math.min(examItems.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Grid Navigator (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 shadow-sm p-4 space-y-4 max-h-[600px] flex flex-col">
            <div className="border-b border-stone-100 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Matriz de preguntas ({examItems.length})
              </h3>
              <div className="flex items-center gap-3 text-[11px] text-stone-500 mt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
                  <span>Respondida</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-200 inline-block" />
                  <span>Pendiente</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-1.5 overflow-y-auto flex-1 pr-1 scrollbar-thin">
              {examItems.map((_, i) => {
                const isCurrent = i === currentIdx;
                const isAns = userAnswers[i] !== undefined;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIdx(i)}
                    className={`h-9 rounded-lg font-bold text-xs transition-all ${
                      isCurrent
                        ? 'ring-2 ring-stone-900 scale-105'
                        : ''
                    } ${
                      isAns
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-sm transition-colors text-center"
            >
              Entregar examen ahora
            </button>
          </div>
        </div>

        {/* Modal: Confirmation before final submission */}
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-stone-200">
              <div className="flex items-center gap-3 text-amber-700">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <h3 className="font-bold text-lg text-stone-900">
                  ¿Confirmas la entrega del examen?
                </h3>
              </div>

              {unansweredCount > 0 ? (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-900">
                  ⚠️ Atención: Tienes <span className="font-bold">{unansweredCount} preguntas sin responder</span>.
                  Si entregas ahora, contarán como errores.
                </div>
              ) : (
                <p className="text-xs text-stone-600">
                  Has respondido a todas las {examItems.length} preguntas. ¿Deseas ver tus resultados definitivos?
                </p>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700"
                >
                  Seguir revisando
                </button>
                <button
                  type="button"
                  onClick={handleFinishExam}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
                >
                  Entregar definitivamente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. FINAL RESULTS SCREEN
  if (isExamFinished && examResult) {
    const grade = getSpanishGradeLabel(examResult.score10);

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
        {/* Results Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Resultados Oficiales del Examen</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Calificación: {examResult.score10} / 10
              </h1>
              <p className="text-stone-300 text-xs mt-1">
                Completado el {examResult.date} • {examResult.correctCount} aciertos de {examResult.totalQuestions}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`inline-block px-4 py-2 rounded-xl font-extrabold text-sm border ${grade.color}`}
              >
                {grade.label}
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-stone-800">
            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">Porcentaje</span>
              <span className="text-xl font-black text-amber-400">{examResult.scorePercentage}%</span>
            </div>
            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">Aciertos</span>
              <span className="text-xl font-black text-emerald-400">{examResult.correctCount}</span>
            </div>
            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">Errores</span>
              <span className="text-xl font-black text-rose-400">
                {examResult.totalQuestions - examResult.correctCount}
              </span>
            </div>
            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">Preguntas</span>
              <span className="text-xl font-black text-white">{examResult.totalQuestions}</span>
            </div>
          </div>
        </div>

        {/* Breakdown by Topic */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4">
          <h2 className="text-base font-bold text-stone-900">
            Rendimiento por temas evaluados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(examResult.topicBreakdown).map(([tId, stat]) => {
              const topicMeta = topicList.find((t) => t.id === tId);
              const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              return (
                <div key={tId} className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                    <span>{topicMeta?.titleEs.split(':')[1] || tId}</span>
                    <span className={pct >= 60 ? 'text-emerald-700' : 'text-rose-700'}>{pct}%</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${pct >= 60 ? 'bg-emerald-600' : 'bg-rose-600'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {stat.correct} de {stat.total} aciertos
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              setIsExamActive(false);
              setIsExamFinished(false);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Configurar nuevo examen</span>
          </button>

          {onGoToMistakes && (
            <button
              type="button"
              onClick={onGoToMistakes}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Repasar mis errores ({examResult.totalQuestions - examResult.correctCount})</span>
            </button>
          )}
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-stone-900">
            Revisión completa de todas las preguntas
          </h2>

          <div className="space-y-4">
            {examItems.map((item, idx) => {
              const chosen = userAnswers[idx];
              const isItemCorrect = chosen === item.newCorrectIndex;

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isItemCorrect
                      ? 'bg-white border-stone-200'
                      : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="text-xs font-bold text-stone-700">
                      Pregunta {idx + 1} • {item.question.topicId}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isItemCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isItemCorrect ? '✓ Correcta' : '✕ Incorrecta'}
                    </span>
                  </div>

                  <SentenceTranslation
                    es={item.question.questionEs}
                    hy={item.question.questionHy}
                    size="base"
                  />

                  {item.question.targetSentenceEs && (
                    <SentenceTranslation
                      es={item.question.targetSentenceEs}
                      hy={item.question.targetSentenceHy || ''}
                      variant="quote"
                    />
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {item.shuffledOptions.map((opt, oIdx) => {
                      const isChosen = chosen === oIdx;
                      const isCorrectAnswer = oIdx === item.newCorrectIndex;

                      return (
                        <div
                          key={oIdx}
                          className={`p-3 rounded-xl border ${
                            isCorrectAnswer
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                              : isChosen
                              ? 'bg-rose-50 border-rose-400 text-rose-950 font-medium'
                              : 'bg-white border-stone-200 text-stone-500'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono">[{['A', 'B', 'C', 'D'][oIdx]}]</span>
                            <span>{opt.textEs}</span>
                            {isCorrectAnswer && <span className="ml-auto text-emerald-700">✓ Correcta</span>}
                            {isChosen && !isCorrectAnswer && <span className="ml-auto text-rose-700">Tu elección</span>}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            {opt.textHy}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="bg-stone-50 rounded-xl p-3 text-xs space-y-1 text-stone-700 border border-stone-200">
                    <span className="font-bold text-stone-900 block">Explicación:</span>
                    <p>{item.question.explanationEs}</p>
                    <p className="text-amber-900">[ՀԱՅ] {item.question.explanationHy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
