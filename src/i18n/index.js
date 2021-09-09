import i18next from 'i18next';
import en from './en.json';
import fr from './fr.json';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: en,
      fr: fr,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
