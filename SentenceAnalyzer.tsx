import React, { useState } from 'react';
import { allAnalyzedSentences } from './dataSentences';
import { AnalyzedSentence, WordAnalysis } from './types';
import { SentenceTranslation } from './SentenceTranslation';
import {
  Search,
  Filter,
  Info,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface SentenceAnalyzerProps {
  onGoToLab?: (sentenceId: string) => void;
}

export const SentenceAnalyzer: React.FC<SentenceAnalyzerProps> = ({ onGoToLab }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState<WordAnalysis | null>(null);

  // Filter sentences
  const filteredSentences = allAnalyzedSentences.filter((s) => {
    const matchesDiff = selectedDifficulty === 'all' || s.difficulty === selectedDifficulty;
    const matchesSearch =
      s.sentenceEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.sentenceHy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiff && matchesSearch;
  });

  const currentSentence: AnalyzedSentence =
    filteredSentences[currentSentenceIndex] || allAnalyzedSentences[0];

  const handleSelectSentence = (idx: number) => {
    setCurrentSentenceIndex(idx);
    setSelectedWord(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Analizador Sintáctico Interactivo</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Analiza las oraciones paso a paso
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed">
            Explora más de 60 oraciones graduadas por dificultad. Haz clic en cada palabra para ver su
            categoría gramatical exacta, su función sintáctica y su explicación en armenio.
          </p>
        </div>
      </div>

      {/* Controls Bar: Difficulty Filters & Search */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Difficulty pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs font-bold text-stone-500 uppercase mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Nivel:</span>
          </span>
          {[
            { id: 'all', label: 'Todos (60+)' },
            { id: 1, label: '1 (Cortas)' },
            { id: 2, label: '2 (Simples)' },
            { id: 3, label: '3 (Adjetivos)' },
            { id: 4, label: '4 (Circunstanciales)' },
            { id: 5, label: '5 (Sujeto omitido)' },
            { id: 6, label: '6 (Copulativas)' },
            { id: 7, label: '7 (Trampa examen)' },
          ].map((lvl) => {
            const active = selectedDifficulty === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => {
                  setSelectedDifficulty(lvl.id as number | 'all');
                  setCurrentSentenceIndex(0);
                  setSelectedWord(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar oración o palabra..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentSentenceIndex(0);
            }}
            className="w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Main Analysis Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Sentences List (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 shadow-sm p-4 space-y-3 max-h-[700px] flex flex-col">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Oraciones disponibles ({filteredSentences.length})
            </h3>
            <span className="text-[11px] text-amber-700 font-semibold">
              {currentSentenceIndex + 1} de {filteredSentences.length}
            </span>
          </div>

          <div className="overflow-y-auto space-y-2 flex-1 pr-1 scrollbar-thin">
            {filteredSentences.map((s, idx) => {
              const active = idx === currentSentenceIndex;
              return (
                <div
                  key={s.id}
                  onClick={() => handleSelectSentence(idx)}
                  className={`p-3 rounded-xl border cursor-pointer text-left transition-all ${
                    active
                      ? 'bg-amber-50 border-amber-400 ring-1 ring-amber-400 shadow-xs'
                      : 'bg-stone-50/70 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200">
                      Nivel {s.difficulty}
                    </span>
                    {s.sujeto.type === 'omitido' && (
                      <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded">
                        Suj. Omitido
                      </span>
                    )}
                    {s.sujeto.type === 'impersonal' && (
                      <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded">
                        Impersonal
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-stone-900 line-clamp-1">
                    {s.sentenceEs}
                  </p>
                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {s.sentenceHy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Visual Breakdown & Word Inspector (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {currentSentence && (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-6 animate-fadeIn">
              {/* Sentence Title & Translation */}
              <div className="space-y-2 border-b border-stone-100 pb-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    <Layers className="w-3.5 h-3.5 text-amber-700" />
                    <span>{currentSentence.difficultyLabel}</span>
                  </span>
                  {onGoToLab && (
                    <button
                      type="button"
                      onClick={() => onGoToLab(currentSentence.id)}
                      className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
                    >
                      <span>Abrir en Laboratorio guiado</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="pt-2">
                  <SentenceTranslation
                    es={currentSentence.sentenceEs}
                    hy={currentSentence.sentenceHy}
                    size="xl"
                  />
                </div>
              </div>

              {/* Visual Syntactic Schema: Sujeto vs Predicado */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Esquema sintáctico general
                  </h4>
                  <span className="text-xs text-stone-400">
                    Sujeto (SN) + Predicado (SV)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Sujeto Box */}
                  <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-50/50 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-200 text-cyan-900">
                        Sujeto (SN)
                      </span>
                      <span className="text-xs font-medium text-cyan-800">
                        {currentSentence.sujeto.typeLabelEs}
                      </span>
                    </div>
                    <div className="text-base font-bold text-stone-900">
                      «{currentSentence.sujeto.text}»
                    </div>
                    <div className="text-xs text-stone-600 bg-white/80 rounded-lg p-2.5 border border-cyan-200">
                      <p className="font-semibold text-cyan-950 mb-0.5">
                        Núcleo del Sujeto: <span className="underline decoration-cyan-500 font-bold">{currentSentence.sujeto.nucleo}</span>
                      </p>
                      <p className="text-stone-600">{currentSentence.sujeto.explanationEs}</p>
                      <p className="text-cyan-900 mt-1 text-[11px] font-normal">[Հայերեն] {currentSentence.sujeto.explanationHy}</p>
                    </div>
                  </div>

                  {/* Predicado Box */}
                  <div className="rounded-2xl border-2 border-amber-400 bg-amber-50/50 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                        Predicado ({currentSentence.predicado.type === 'nominal' ? 'PN' : 'PV'})
                      </span>
                      <span className="text-xs font-medium text-amber-800">
                        {currentSentence.predicado.typeLabelEs}
                      </span>
                    </div>
                    <div className="text-base font-bold text-stone-900">
                      «{currentSentence.predicado.text}»
                    </div>
                    <div className="text-xs text-stone-600 bg-white/80 rounded-lg p-2.5 border border-amber-200">
                      <p className="font-semibold text-amber-950 mb-0.5">
                        Núcleo del Predicado: <span className="underline decoration-amber-500 font-bold">{currentSentence.predicado.nucleo}</span>
                      </p>
                      <p className="text-stone-600">{currentSentence.predicado.explanationEs}</p>
                      <p className="text-amber-900 mt-1 text-[11px] font-normal">[Հայերեն] {currentSentence.predicado.explanationHy}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complements Badges (if any) */}
              {currentSentence.complements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Complementos del verbo identificados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSentence.complements.map((c, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs space-y-0.5"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-amber-900">
                          <span className="px-1.5 py-0.2 rounded bg-amber-200 text-[10px]">
                            {c.type}
                          </span>
                          <span>«{c.text}»</span>
                        </div>
                        <p className="text-stone-600 text-[11px]">{c.explanationEs}</p>
                        <p className="text-stone-500 text-[10px]">[ՀԱՅ] {c.explanationHy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Word-by-word Inspector */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Análisis palabra por palabra (Haz clic en cualquier palabra)</span>
                  </h4>
                  <span className="text-[11px] text-stone-400">
                    Categoría vs Función sintáctica
                  </span>
                </div>

                {/* Clickable Words Row */}
                <div className="flex flex-wrap gap-2 p-4 bg-stone-50/80 rounded-2xl border border-stone-200">
                  {currentSentence.words.map((w, idx) => {
                    const isSelected = selectedWord?.word === w.word;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedWord(w)}
                        className={`group px-3 py-2 rounded-xl text-sm font-semibold transition-all border ${
                          isSelected
                            ? 'bg-amber-600 text-white border-amber-500 shadow-md scale-105 ring-2 ring-amber-400/50'
                            : 'bg-white text-stone-900 border-stone-300 hover:border-amber-400 hover:bg-amber-50/40'
                        }`}
                      >
                        <span className="block">{w.word}</span>
                        <span
                          className={`block text-[10px] font-normal uppercase tracking-wider mt-0.5 ${
                            isSelected ? 'text-amber-200' : 'text-stone-500'
                          }`}
                        >
                          {w.syntacticFunctionEs.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Word Inspector Card (shown when a word is selected) */}
                {selectedWord ? (
                  <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 space-y-4 animate-fadeIn border border-stone-800 shadow-lg">
                    <div className="flex items-start justify-between border-b border-stone-800 pb-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Palabra analizada
                        </div>
                        <div className="text-2xl font-extrabold text-white flex items-center gap-2">
                          <span>«{selectedWord.word}»</span>
                          <span className="text-sm font-normal text-stone-400">
                            ({selectedWord.wordHy})
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedWord(null)}
                        className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded bg-stone-800"
                      >
                        Cerrar ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Categoría Gramatical (Morfología) */}
                      <div className="bg-stone-850 p-4 rounded-xl border border-stone-750 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block">
                          1. Categoría gramatical (Morfología)
                        </span>
                        <p className="text-sm font-bold text-white">
                          {selectedWord.categoryEs}
                        </p>
                        <p className="text-xs text-stone-300">
                          {selectedWord.categoryDetailEs}
                        </p>
                        <div className="text-xs text-amber-300/90 pt-1 border-t border-stone-750">
                          [ՀԱՅ] {selectedWord.categoryHy} — {selectedWord.categoryDetailHy}
                        </div>
                      </div>

                      {/* Función Sintáctica en la oración */}
                      <div className="bg-stone-850 p-4 rounded-xl border border-stone-750 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                          2. Función sintáctica en esta oración
                        </span>
                        <p className="text-sm font-bold text-white">
                          {selectedWord.syntacticFunctionEs}
                        </p>
                        <div className="text-xs text-cyan-200/90 pt-1 border-t border-stone-750">
                          [ՀԱՅ] {selectedWord.syntacticFunctionHy}
                        </div>
                      </div>
                    </div>

                    {/* Rationale: Why does it have this function? */}
                    <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700/60 space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                        ¿Por qué tiene esta función en la oración?
                      </span>
                      <p className="text-xs text-stone-200 leading-relaxed">
                        {selectedWord.whyThisFunctionEs}
                      </p>
                      <p className="text-xs text-amber-300 pt-1">
                        [Բացատրություն] {selectedWord.whyThisFunctionHy}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 bg-stone-50 rounded-xl border border-dashed border-stone-200 text-stone-500 text-xs">
                    👆 Haz clic en cualquier palabra arriba para inspeccionar su categoría morfológica y su función sintáctica.
                  </div>
                )}
              </div>

              {/* Legend of Abbreviations */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-3 text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700">Leyenda:</span>
                <span className="bg-cyan-50 text-cyan-900 border border-cyan-200 px-2 py-0.5 rounded font-medium">SN = Sintagma Nominal</span>
                <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-medium">SV = Sintagma Verbal</span>
                <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-medium">N = Núcleo</span>
                <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-medium">CD = Compl. Directo</span>
                <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-medium">CI = Compl. Indirecto</span>
                <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-medium">CC = Compl. Circunstancial</span>
                <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded font-medium">Atr = Atributo</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
