import storage from '@moeui/storage'
import { createI18n } from 'vue-i18n'

import enUS from './en_US.json'
import zhCN from './zh_CN.json'

const messages = {
    en_US: enUS,
    zh_CN: zhCN
}

export const getLocale = () => {
    let language = storage.get('language')
    if (!language) {
        // if (navigator.appName === 'Netscape') {
        //     language = navigator.language
        // } else {
        //     language = (navigator as any).userLanguage
        // }
        // const sec = language.split('-')
        // sec[1] = sec[1].toUpperCase()
        // storage.set('language', `${sec[0]}_${sec[1]}`)
        language = 'en_US'
        storage.set('language', `en_US`)
    }
    return 'zh_CN'
}

const i18n = createI18n({
    locale: getLocale(),
    messages: messages
})

export default i18n
