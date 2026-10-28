import React, { useState, useEffect } from 'react';
import {
  allQuestions,
  getQuestionsByTopic,
  prepareShuffledQuestion,
  ShuffledQuestionResult,
  shuffleArray,
} from './dataQuestions';
import { TopicId, PracticeQuestion, SavedMistake } from './types';
import { SentenceTranslation } from './SentenceTranslation';
import { topicList } from './dataTheory';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Filter,
  BookmarkPlus,
} from 'lucide-react';

interface PracticeViewProps {
  initialTopicId?: TopicId;
  onMistakeAdded?: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  initialTopicId,
  onMistakeAdded,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>(initialTopicId || 'all');
  const [questionPool, setQuestionPool] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentShuffled, setCurrentShuffled] = useState<ShuffledQuestionResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Initialize questions pool on topic change
  useEffect(() => {
    const raw = selectedTopic === 'all' ? allQuestions : getQuestionsByTopic(selectedTopic);
    const shuffled = shuffleArray(raw);
    setQuestionPool(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore({ correct: 0, total: 0 });
    if (shuffled.length > 0) {
      setCurrentShuffled(prepareShuffledQuestion(shuffled[0]));
    }
  }, [selectedTopic]);

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered || !currentShuffled) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentShuffled.newCorrectIndex;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    // If incorrect, automatically save to localStorage mistakes
    if (!isCorrect) {
      try {
        const stored = localStorage.getItem('lengua_saved_mistakes');
        const list: SavedMistake[] = stored ? JSON.parse(stored) : [];
        const existingIdx = list.findIndex((m) => m.questionId === currentShuffled.question.id);
        const mistakeRecord: SavedMistake = {
          id: `mistake-${Date.now()}`,
          questionId: currentShuffled.question.id,
          topicId: currentShuffled.question.topicId,
          timestamp: Date.now(),
          chosenOptionIndex: optionIndex,
          question: currentShuffled.question,
          mastered: false,
        };
        if (existingIdx >= 0) {
          list[existingIdx] = mistakeRecord;
        } else {
          list.push(mistakeRecord);
        }
        localStorage.setItem('lengua_saved_mistakes', JSON.stringify(list));
        if (onMistakeAdded) onMistakeAdded();
      } catch {
        // ignore
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questionPool.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswered(false);
      setCurrentShuffled(prepareShuffledQuestion(questionPool[nextIdx]));
    } else {
      // Loop or restart
      const reshuffled = shuffleArray(questionPool);
      setQuestionPool(reshuffled);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setCurrentShuffled(prepareShuffledQuestion(reshuffled[0]));
    }
  };

  if (!currentShuffled) {
    return <div className="text-center py-12 text-stone-500">Cargando preguntas...</div>;
  }

  const { question, shuffledOptions, newCorrectIndex } = currentShuffled;
  const isCorrect = selectedOption === newCorrectIndex;
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white rounded-2xl p-6 shadow-xl border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Trena de Práctica Dinámica</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">Práctica interactiva</h1>
          <p className="text-xs text-stone-300">
            Preguntas y opciones en orden 100% aleatorio. Explicación inmediata en español y armenio.
          </p>
        </div>

        {/* Score Counter */}
        <div className="bg-stone-800/80 px-4 py-2.5 rounded-xl border border-stone-700/60 flex items-center gap-3">
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-stone-400">Aciertos</div>
            <div className="text-lg font-extrabold text-amber-400">
              {score.correct} / {score.total}
            </div>
          </div>
          <div className="text-xs font-semibold text-stone-300">
            {score.total > 0 ? `${Math.round((score.correct / score.total) * 100)}%` : '0%'}
          </div>
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          type="button"
          onClick={() => setSelectedTopic('all')}
          className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            selectedTopic === 'all'
              ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
          }`}
        >
          Todas las preguntas ({allQuestions.length})
        </button>
        {topicList.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedTopic(t.id)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              selectedTopic === t.id
                ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {t.titleEs.split(':')[1] || t.titleEs}
          </button>
        ))}
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Question Header & Meta */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Pregunta {currentIndex + 1} de {questionPool.length}
            </span>
            <span className="text-[11px] text-stone-400 font-medium">
              Dificultad: {question.difficulty}
            </span>
          </div>
          <span className="text-xs text-stone-400">
            Tema: {question.topicId}
          </span>
        </div>

        {/* Question Text in ES & HY */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
            {question.questionEs}
          </h2>
          <div className="text-xs font-normal text-amber-950 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3">
            <span className="font-bold text-amber-900 mr-1.5 uppercase text-[10px] tracking-wider">
              Հարցը հայերեն՝
            </span>
            {question.questionHy}
          </div>
        </div>

        {/* Target Sentence if present */}
        {question.targetSentenceEs && (
          <div className="pt-1">
            <SentenceTranslation
              es={question.targetSentenceEs}
              hy={question.targetSentenceHy || ''}
              variant="card"
              size="base"
            />
          </div>
        )}

        {/* 4 Shuffled Options (A, B, C, D) */}
        <div className="space-y-3 pt-2">
          {shuffledOptions.map((opt, idx) => {
            const isChosen = selectedOption === idx;
            const isTheCorrectOne = idx === newCorrectIndex;

            let btnStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400 hover:bg-amber-50/30';
            if (isAnswered) {
              if (isTheCorrectOne) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400';
              } else if (isChosen) {
                btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-400';
              } else {
                btnStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${btnStyle}`}
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center bg-stone-200/80 text-stone-800 border border-stone-300">
                  {optionLabels[idx]}
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-sm leading-snug text-stone-900">
                    {opt.textEs}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {opt.textHy}
                  </div>
                </div>
                {isAnswered && isTheCorrectOne && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                )}
                {isAnswered && isChosen && !isTheCorrectOne && (
                  <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Feedback & Explanation upon answering */}
        {isAnswered && (
          <div
            className={`p-6 rounded-2xl border space-y-4 animate-fadeIn ${
              isCorrect
                ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/90 border-rose-300 text-rose-950'
            }`}
          >
            {/* Verdict Header */}
            <div className="flex items-center justify-between border-b border-current/20 pb-3">
              <div className="flex items-center gap-2 font-bold text-base">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Respuesta correcta!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Respuesta incorrecta</span>
                  </>
                )}
              </div>
              {!isCorrect && (
                <span className="text-xs font-semibold bg-rose-200/70 text-rose-900 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <BookmarkPlus className="w-3.5 h-3.5" />
                  <span>Guardado en Mis errores</span>
                </span>
              )}
            </div>

            {/* Explanation text */}
            <div className="space-y-2">
              <div className="font-semibold text-xs uppercase tracking-wider">
                Explicación detallada del razonamiento:
              </div>
              <p className="text-sm leading-relaxed">{question.explanationEs}</p>
              <div className="bg-white/80 rounded-xl p-3 text-xs leading-relaxed border border-current/20">
                <span className="font-bold text-stone-700 block mb-0.5">
                  [Բացատրությունը հայերեն]
                </span>
                {question.explanationHy}
              </div>
            </div>

            {/* Exam Tip */}
            {question.examTipEs && (
              <div className="bg-amber-100/70 border border-amber-300/80 rounded-xl p-3 text-xs text-amber-950 space-y-0.5">
                <div className="font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider text-amber-900">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Truco para el examen</span>
                </div>
                <p>{question.examTipEs}</p>
                <p className="text-[11px] text-amber-800">[ՀԱՅ] {question.examTipHy}</p>
              </div>
            )}

            {/* Next Question Button */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold shadow-sm transition-colors"
              >
                <span>Siguiente pregunta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
