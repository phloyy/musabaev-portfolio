import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved as Lang) || 'ru';
  });

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
