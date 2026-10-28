import React, { useState } from 'react';
import { Languages, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface SentenceTranslationProps {
  es: string;
  hy: string;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'quote' | 'plain' | 'card' | 'badge';
  interactive?: boolean;
}

export const SentenceTranslation: React.FC<SentenceTranslationProps> = ({
  es,
  hy,
  className = '',
  size = 'base',
  variant = 'plain',
  interactive = true,
}) => {
  const { alwaysShowArmenian } = useLanguage();
  const [isLocallyOpen, setIsLocallyOpen] = useState(false);

  const isVisible = alwaysShowArmenian || isLocallyOpen;

  const toggle = (e: React.MouseEvent) => {
    if (!interactive) return;
    e.stopPropagation();
    setIsLocallyOpen(!isLocallyOpen);
  };

  const sizeClasses = {
    sm: 'text-base',
    base: 'text-lg',
    lg: 'text-xl font-medium',
    xl: 'text-2xl font-bold',
  };

  if (variant === 'quote') {
    return (
      <div
        onClick={toggle}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setIsLocallyOpen(!isLocallyOpen);
          }
        }}
        className={`group relative border-l-4 border-amber-600 bg-amber-50/60 hover:bg-amber-100/70 dark:bg-amber-950/20 dark:hover:bg-amber-950/30 rounded-r-xl p-4 transition-all text-left cursor-pointer ${className}`}
      >
        <div className="flex items-start justify-between gap-3">
          <p className={`text-stone-900 font-medium ${sizeClasses[size]}`}>
            «{es}»
          </p>
          {interactive && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold bg-amber-200/80 text-amber-900 group-hover:bg-amber-300">
              <Languages className="w-3.5 h-3.5" />
              <span>Հայ</span>
              {isVisible ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </span>
          )}
        </div>
        {isVisible && (
          <div className="mt-2.5 pt-2.5 border-t border-amber-200/60 text-stone-800 font-normal text-base leading-relaxed font-armenian animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded mr-2 inline-block">
              Հայերեն
            </span>
            «{hy}»
          </div>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        onClick={toggle}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setIsLocallyOpen(!isLocallyOpen);
          }
        }}
        className={`group border border-stone-200 bg-white hover:border-amber-400 hover:shadow-sm rounded-xl p-4 sm:p-5 transition-all text-left cursor-pointer ${className}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className={`text-stone-900 leading-relaxed ${sizeClasses[size]}`}>{es}</div>
          {interactive && (
            <button
              type="button"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{isVisible ? 'Թաքցնել' : 'Թարգմանել'}</span>
            </button>
          )}
        </div>
        {isVisible && (
          <div className="mt-3 pt-2.5 border-t border-stone-100 text-stone-800 text-base leading-relaxed font-armenian animate-fadeIn">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded mr-2 inline-block">
              HY
            </span>
            {hy}
          </div>
        )}
      </div>
    );
  }

  // Default 'plain'
  return (
    <div
      onClick={toggle}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          setIsLocallyOpen(!isLocallyOpen);
        }
      }}
      className={`group inline-block transition-colors cursor-pointer rounded px-1 -mx-1 hover:bg-amber-100/70 ${className}`}
      title={interactive ? 'Սեղմիր հայերեն թարգմանության համար / Clic para ver traducción' : undefined}
    >
      <span className={`text-stone-900 ${sizeClasses[size]}`}>
        {es}
      </span>
      {interactive && !isVisible && (
        <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-amber-700 text-xs">
          <Languages className="w-3.5 h-3.5 inline align-text-bottom" />
        </span>
      )}
      {isVisible && (
        <div className="block mt-1.5 text-base font-normal text-amber-950 bg-amber-50/95 border border-amber-200/80 rounded-lg px-3 py-2 leading-relaxed shadow-xs font-armenian animate-fadeIn">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mr-2">
            [ՀԱՅ]
          </span>
          {hy}
        </div>
      )}
    </div>
  );
};
