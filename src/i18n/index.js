import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko.json";
import jp from "./locales/jp.json";
import en from "./locales/en.json";

const resources = {
  ko: {translation: ko,},
  jp: {translation: jp,},
  en: {translation: en,},
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      fallbackLng: 'en',
      debug: true, // TODO: 배포 시 삭제
      defaultNS: "translation",
      ns: "translation",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

let language = localStorage.getItem("language");
if(language!==null) i18n.changeLanguage(language);

export default i18n;
