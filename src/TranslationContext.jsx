import { createContext, useContext, useState } from 'react';
import en from './locales/en.json';
import es from './locales/es.json';
import cat from './locales/cat.json';

const translations = {
  en,
  es,
  cat,
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translate = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ translate, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
