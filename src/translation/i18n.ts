import en from './en.json';
import ua from './ua.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Define the types for translation resources
type TranslationResources = {
  translation: Record<string, unknown>;
};

const resources: Record<string, TranslationResources> = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

// Retrieve the language from localStorage
const storedLanguage = localStorage.getItem('language');
const lng = storedLanguage ? JSON.parse(storedLanguage) : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'en',
  });

export default i18n;