import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const i18n = createI18n({
  globalInjection: true,
  locale: localStorage.getItem('language') || 'zh', //默认中文
  message: {
    zh,
    en
  }
})

export default i18n
