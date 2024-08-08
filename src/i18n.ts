import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "../locales/de/translation.json";
import en from "../locales/en/translation.json";

const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
