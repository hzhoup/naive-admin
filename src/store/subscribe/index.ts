import { subscribeLocale } from '@/store/subscribe/locale'
import { subscribeTheme } from '@/store/subscribe/theme'

export function subscribeStore() {
  subscribeTheme()
  subscribeLocale()
}
