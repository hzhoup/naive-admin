import { useLocalStore } from '@/store/modules/locale'
import { createLocalStorage } from '@/utils/cache'
import { effectScope, onScopeDispose, watch } from 'vue'

const ls = createLocalStorage()

export function subscribeLocale() {
  const locale = useLocalStore()
  const scope = effectScope()

  scope.run(() => {
    watch(
      () => locale.state,
      newValue => {
        ls.set('LOCALE', newValue)
      },
      { immediate: true }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}
