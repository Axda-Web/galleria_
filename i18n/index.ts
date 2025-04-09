import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en-US/translation.json";
import translationEs from "./locales/es-ES/translation.json";
import translationFr from "./locales/fr-FR/translation.json";

const resources = {
  "es-ES": { translation: translationEs },
  "en-US": { translation: translationEn },
  "fr-FR": { translation: translationFr },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageCode;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  } as InitOptions);
};

initI18n();

export default i18n;
