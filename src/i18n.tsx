import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { siteConfig, type Lang, type Localized } from './data/config';
import { strings } from './data/strings';

const STORAGE_KEY = 'dallas-cafe-lang';

type LanguageContextValue = {
  lang: Lang;
  other: Lang;
  setLang: (lang: Lang) => void;
  // Fixed interface text for the current language
  s: (typeof strings)[Lang];
  // Picks the current language out of a bilingual config value
  t: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'am' ? 'am' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be blocked; the choice then lasts for this visit only
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      other: lang === 'en' ? 'am' : 'en',
      setLang,
      s: strings[lang],
      t: (v) => v[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

// Sets the browser tab title: the page name before the cafe name, or the full site title on the home page
export function usePageTitle(pageName?: string) {
  const { s, t } = useLang();
  const title = pageName ? `${pageName} | ${t(siteConfig.name)}` : s.meta.title;

  useEffect(() => {
    document.title = title;
  }, [title]);
}
