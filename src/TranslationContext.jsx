import { createContext, useContext, useState } from 'react';
import en from './locales/en.json';
import es from './locales/es.json';
import cat from './locales/cat.json';
import de from './locales/de.json';
import it from './locales/it.json';
import fr from './locales/fr.json';
import pt from './locales/pt.json';

const translations = { en, es, cat, de, it, fr, pt };

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem('ace_language');
    return savedLanguage || 'es';
  });

  const setCurrentLanguage = (lang) => {
    setCurrentLanguageState(lang);
    localStorage.setItem('ace_language', lang);
  };

  const translate = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ translate, currentLanguage, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);