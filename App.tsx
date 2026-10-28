/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import { Header, NavTab } from './Header';
import { TheoryView } from './TheoryView';
import { SentenceAnalyzer } from './SentenceAnalyzer';
import { SentenceLab } from './SentenceLab';
import { PracticeView } from './PracticeView';
import { ExamView } from './ExamView';
import { MistakesView } from './MistakesView';
import { ResultsView } from './ResultsView';
import { TopicId, SavedMistake } from './types';
import { BookOpen, Sparkles, GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('teoria');
  const [practiceTopic, setPracticeTopic] = useState<TopicId | undefined>(undefined);
  const [labSentenceId, setLabSentenceId] = useState<string | undefined>(undefined);
  const [mistakesCount, setMistakesCount] = useState<number>(0);

  // Sync mistakes count from localStorage
  const updateMistakesCount = () => {
    try {
      const stored = localStorage.getItem('lengua_saved_mistakes');
      if (stored) {
        const list: SavedMistake[] = JSON.parse(stored);
        const unmastered = list.filter((m) => !m.mastered).length;
        setMistakesCount(unmastered);
      } else {
        setMistakesCount(0);
      }
    } catch {
      setMistakesCount(0);
    }
  };

  useEffect(() => {
    updateMistakesCount();
  }, []);

  const handleStartPracticeTopic = (topicId: TopicId) => {
    setPracticeTopic(topicId);
    setCurrentTab('practica');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLab = (sentenceId: string) => {
    setLabSentenceId(sentenceId);
    setCurrentTab('laboratorio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToMistakes = () => {
    setCurrentTab('errores');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartExam = () => {
    setCurrentTab('examen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
        {/* Main Sticky Header */}
        <Header
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          mistakesCount={mistakesCount}
        />

        {/* Content Area */}
        <main className="flex-1 pb-16">
          {currentTab === 'teoria' && (
            <TheoryView onStartPracticeTopic={handleStartPracticeTopic} />
          )}

          {currentTab === 'analizador' && (
            <SentenceAnalyzer onGoToLab={handleGoToLab} />
          )}

          {currentTab === 'laboratorio' && (
            <SentenceLab initialSentenceId={labSentenceId} />
          )}

          {currentTab === 'practica' && (
            <PracticeView
              initialTopicId={practiceTopic}
              onMistakeAdded={updateMistakesCount}
            />
          )}

          {currentTab === 'examen' && (
            <ExamView
              onExamCompleted={updateMistakesCount}
              onGoToMistakes={handleGoToMistakes}
            />
          )}

          {currentTab === 'errores' && (
            <MistakesView
              onGoToExam={handleStartExam}
              onGoToPractice={() => {
                setPracticeTopic(undefined);
                setCurrentTab('practica');
              }}
              onMistakesUpdated={updateMistakesCount}
            />
          )}

          {currentTab === 'resultados' && (
            <ResultsView
              onStartExam={handleStartExam}
              onGoToPractice={() => {
                setPracticeTopic(undefined);
                setCurrentTab('practica');
              }}
              onGoToMistakes={handleGoToMistakes}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">
                1º
              </div>
              <div>
                <p className="font-semibold text-white">
                  Lengua Castellana y Literatura — 1.º de la ESO
                </p>
                <p className="text-stone-400 font-armenian">
                  Իսպաներեն լեզվի քննության նախապատրաստական ծրագիր հայախոս աշակերտների համար
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-stone-400 text-center sm:text-right">
              <span>Todo el temario oficial del currículo español (LOMLOE)</span>
              <span>•</span>
              <span className="font-armenian">Բոլոր նախադասությունները թարգմանելի են սեղմումով</span>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}
