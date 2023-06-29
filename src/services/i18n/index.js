import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import I18NextHttpBackend from "i18next-http-backend";

const i18config = i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        lng: "ru",
        fallbackLng:  "ru",
        saveMissing: true,
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'lang',
        },
        react: {
            useSuspense: false,
            wait: true
        },
        backend: {
            loadPath: `http://localhost/site/translations/{{lng}}/react`,
            addPath: `http://localhost/site/translations`,
        },
    })

export default i18config;