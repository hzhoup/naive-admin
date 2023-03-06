import { loadLocales } from '@/locales/helpers'
import { i18n } from '@/locales/index'
import { LocaleType } from '@/setting/locale'
import { useLocalStoreWithOut } from '@/store/modules/locale'
import { NDateLocale, NLocale } from 'naive-ui'
import { computed, unref } from 'vue'

export function useLocale() {
  const localeStore = useLocalStoreWithOut()
  const getLocale = computed(() => localeStore.locale ?? 'zh_CN')

  const getNaiveLocale = computed((): NLocale => {
    return (i18n.global.getLocaleMessage(unref(getLocale)) as Recordable)?.naiveLocale ?? {}
  })
  const getNaiveDateLocale = computed((): NDateLocale => {
    return (i18n.global.getLocaleMessage(unref(getLocale)) as Recordable)?.naiveDateLocale ?? {}
  })

  async function changeLocale(locale: LocaleType) {
    const globalI18n = i18n.global
    const currentLocale = unref(globalI18n.locale)
    if (currentLocale === locale) return locale

    if (loadLocales.includes(locale)) {
      setI18nLanguage(locale)
      return locale
    }

    const module = ((await import(`./lang/${locale}.ts`)) as any).default
    if (!module) return currentLocale
    const { message } = module
    globalI18n.setLocaleMessage(locale, message)
    loadLocales.push(locale)
    setI18nLanguage(locale)
    return locale
  }

  return { getNaiveLocale, getNaiveDateLocale, changeLocale }
}

function setI18nLanguage(locale: LocaleType) {
  const localeStore = useLocalStoreWithOut()

  if (i18n.mode === 'legacy') i18n.global.locale = locale
  else i18n.global.locale.value = locale

  localeStore.setLocaleInfo(locale)
}
