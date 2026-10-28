import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  FlaskConical,
  GraduationCap,
  Award,
  AlertTriangle,
  BarChart3,
  Languages,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export type NavTab =
  | 'teoria'
  | 'analizador'
  | 'laboratorio'
  | 'practica'
  | 'examen'
  | 'errores'
  | 'resultados';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  mistakesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  mistakesCount,
}) => {
  const { alwaysShowArmenian, toggleAlwaysShowArmenian, fontSize, cycleFontSize } =
    useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: NavTab; labelEs: string; labelHy: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'teoria', labelEs: 'Teoría completa', labelHy: 'Ամբողջական տեսություն', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'analizador', labelEs: 'Analizador de oraciones', labelHy: 'Նախադասությունների վերլուծիչ', icon: <Search className="w-4 h-4" /> },
    { id: 'laboratorio', labelEs: 'Laboratorio paso a paso', labelHy: 'Քայլ առ քայլ լաբորատորիա', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'practica', labelEs: 'Práctica interactiva', labelHy: 'Ինտերակտիվ պրակտիկա', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'examen', labelEs: 'Examen final (100)', labelHy: 'Ավարտական քննություն', icon: <Award className="w-4 h-4" /> },
    { id: 'errores', labelEs: 'Mis errores', labelHy: 'Իմ սխալները', icon: <AlertTriangle className="w-4 h-4" />, badge: mistakesCount },
    { id: 'resultados', labelEs: 'Mis resultados', labelHy: 'Իմ արդյունքները', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Banner / Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabClick('teoria')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-700 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white">
                  Lengua Castellana
                </span>
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  1.º ESO
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block">
                Preparación para el examen con traducción al armenio (Հայերեն)
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Font size control button */}
            <button
              type="button"
              onClick={cycleFontSize}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-750 hover:text-white transition-all shadow-xs"
              title="Cambiar tamaño de texto / Փոխել տառաչափը (Normal -> Grande -> Max)"
            >
              <span className="font-serif font-black text-amber-300 text-sm leading-none">
                A<span className="text-xs">a</span>
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-amber-200/90 font-bold">
                {fontSize === 'normal' ? 'Normal' : fontSize === 'large' ? 'Grande' : 'Max+'}
              </span>
            </button>

            {/* Bilingual Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleAlwaysShowArmenian}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                alwaysShowArmenian
                  ? 'bg-amber-600/90 text-white border-amber-500 shadow-sm'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-750'
              }`}
              title="Միացնել կամ անջատել հայերենի ավտոմատ ցուցադրումը"
            >
              <Languages className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">
                {alwaysShowArmenian ? 'Հայերեն միացված է' : 'Español + Հայերեն'}
              </span>
              <span className="sm:hidden font-mono text-[11px]">
                {alwaysShowArmenian ? 'ՀԱՅ' : 'ES'}
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Tabs */}
      <div className="hidden lg:block bg-stone-950/60 border-t border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 py-1.5 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const active = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    active
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-300 hover:bg-stone-800/80 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.labelEs}</span>
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-600 text-white">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-t border-stone-800 px-4 pt-2 pb-4 space-y-1">
          {tabs.map((tab) => {
            const active = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'bg-amber-600 text-white' : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {tab.icon}
                  <span>{tab.labelEs}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 font-normal">
                    {tab.labelHy}
                  </span>
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white">
                      {tab.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
