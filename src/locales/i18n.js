import { createI18n } from 'vue-i18n'

const messages = {
    en: {
    },
    es: {
    }
}

const i18n = createI18n({
    locale:'es',
    fallbackLocale: 'en',
    messages,
})

export  default  i18n;