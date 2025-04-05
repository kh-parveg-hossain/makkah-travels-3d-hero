
import { en } from './en';
import { bn } from './bn';
import { hi } from './hi';
import { ur } from './ur';
import { ar } from './ar';
import { Language } from '../contexts/LanguageContext';

const translations = {
  en,
  bn,
  hi,
  ur,
  ar
};

export const useTranslation = (language: Language) => {
  return translations[language] || translations.en;
};
