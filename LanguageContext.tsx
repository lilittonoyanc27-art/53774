import React, { createContext, useContext, useState, useEffect } from 'react';

export type TextFontSize = 'normal' | 'large' | 'xlarge';

interface LanguageContextType {
  alwaysShowArmenian: boolean;
  toggleAlwaysShowArmenian: () => void;
  setAlwaysShowArmenian: (val: boolean) => void;
  fontSize: TextFontSize;
  setFontSize: (size: TextFontSize) => void;
  cycleFontSize: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  alwaysShowArmenian: false,
  toggleAlwaysShowArmenian: () => {},
  setAlwaysShowArmenian: () => {},
  fontSize: 'large',
  setFontSize: () => {},
  cycleFontSize: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alwaysShowArmenian, setAlwaysShowArmenianState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('lengua_show_armenian_global');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [fontSize, setFontSizeState] = useState<TextFontSize>(() => {
    try {
      const saved = localStorage.getItem('lengua_font_size');
      if (saved === 'normal' || saved === 'large' || saved === 'xlarge') {
        return saved;
      }
      return 'large'; // Default to 'large' as requested by user
    } catch {
      return 'large';
    }
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
      root.classList.add(`font-size-${fontSize}`);
    }
  }, [fontSize]);

  const setAlwaysShowArmenian = (val: boolean) => {
    setAlwaysShowArmenianState(val);
    try {
      localStorage.setItem('lengua_show_armenian_global', String(val));
    } catch {
      // ignore
    }
  };

  const toggleAlwaysShowArmenian = () => {
    setAlwaysShowArmenian(!alwaysShowArmenian);
  };

  const setFontSize = (size: TextFontSize) => {
    setFontSizeState(size);
    try {
      localStorage.setItem('lengua_font_size', size);
    } catch {
      // ignore
    }
  };

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <LanguageContext.Provider
      value={{
        alwaysShowArmenian,
        toggleAlwaysShowArmenian,
        setAlwaysShowArmenian,
        fontSize,
        setFontSize,
        cycleFontSize,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
