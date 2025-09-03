import { createI18n } from 'vue-i18n'
import ar from './ar.json'
import en from './en.json'

type MessageSchema = typeof ar

const i18n = createI18n<[MessageSchema], 'en' | 'ar'>({
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'en',
  messages: {
    ar,
    en,
  },
})

export default i18n
