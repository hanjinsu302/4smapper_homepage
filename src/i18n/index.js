import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import header_en from './locales/en/header.json';
import footer_en from './locales/en/footer.json';
import contact_en from './locales/en/contact.json';
import about_en from './locales/en/about.json';
import main_en from './locales/en/main.json';
import platform_en from './locales/en/platform.json';
import solution_en from './locales/en/solution.json';
import products_en from './locales/en/products.json';
import header_ko from './locales/ko/header.json';
import footer_ko from './locales/ko/footer.json';
import contact_ko from './locales/ko/contact.json';
import about_ko from './locales/ko/about.json';
import main_ko from './locales/ko/main.json';
import platform_ko from './locales/ko/platform.json';
import solution_ko from './locales/ko/solution.json';
import products_ko from './locales/ko/products.json';
import daaspano_ko from './locales/ko/daaspano.json';
import daaspano_en from './locales/en/daaspano.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: header_en,
        footer: footer_en,
        main: main_en,
        platform:platform_en,
        solution:solution_en,
        products:products_en,
        about: about_en,
        contact: contact_en,
        daaspano: daaspano_en,
        
        about: about_en,

      },
      ko: {
        header: header_ko,
        footer: footer_ko,
        main: main_ko,
        platform:platform_ko,
        solution:solution_ko,
        products:products_ko,
        contact: contact_ko,
        about: about_ko,
        daaspano: daaspano_ko,
      }
    },
    fallbackLng: 'en',
    ns: ['header', 'footer','platform','solution','products','contact','daaspano','about','main'], // 사용할 네임스페이스들 선언
    defaultNS: 'header',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
