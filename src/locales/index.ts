import { useLocalStoreWithOut } from '@/store/modules/locale'
import { App } from 'vue'
import { createI18n, I18nOptions } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocalStoreWithOut()
  const locale = localeStore.locale
  const fallback = localeStore.fallback
  const defaultLocale = await import(`./lang/${locale}.ts`)
  const message = defaultLocale.default?.message ?? {}

  return {
    legacy: false,
    locale,
    fallbackLocale: fallback,
    messages: {
      [locale]: message
    },
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
