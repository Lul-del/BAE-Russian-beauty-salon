import { createContext, useContext, useState } from 'react';
import { translations, type Lang, type T } from '../i18n/translations';

type CtxType = { lang: Lang; setLang: (l: Lang) => void; t: T };

const LanguageContext = createContext<CtxType>({ lang: 'en', setLang: () => {}, t: translations.en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang') as Lang;
    return stored && stored in translations ? stored : 'en';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
