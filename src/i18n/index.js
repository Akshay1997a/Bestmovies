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

// const data = useSelector((state) => state);

// console.log('data i get from redux hereeeee', data);

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    resources: {
      en: en,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;

export const runTimeTranslations = (runTimeData, lng = 'en') => {
  // console.log('data gets from api heree', runTimeData);
  i18next.addResourceBundle(lng, 'translation', runTimeData, true, true);
  i18next.changeLanguage(lng);
};
