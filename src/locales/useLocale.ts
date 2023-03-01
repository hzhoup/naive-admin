import { i18n } from '@/locales/index'
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

  return { getNaiveLocale, getNaiveDateLocale }
}
