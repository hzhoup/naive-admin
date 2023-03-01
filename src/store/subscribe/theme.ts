import { useThemeStore } from '@/store/modules/theme'
import { createLocalStorage } from '@/utils/cache'
import { kebabCase } from 'lodash-es'
import { GlobalThemeOverrides, useOsTheme } from 'naive-ui'
import { effectScope, onScopeDispose, watch } from 'vue'

const ls = createLocalStorage()

export function subscribeTheme() {
  const osTheme = useOsTheme()
  const theme = useThemeStore()
  const scope = effectScope()
  const { addDarkClass, removeDarkClass } = handleCssDarkMode()

  scope.run(() => {
    watch(
      () => theme.themeColor,
      newValue => {
        ls.set('THEME_COLOR', newValue)
      },
      { immediate: true }
    )

    watch(
      () => theme.naiveThemeOverrides,
      newValue => {
        if (newValue.common) addThemeCssVarsToHtml(newValue.common)
      },
      { immediate: true }
    )

    watch(
      () => theme.darkMode,
      newValue => {
        if (newValue) addDarkClass()
        else removeDarkClass()
      },
      { immediate: true }
    )

    watch(
      osTheme,
      newValue => {
        if (ls.get('DARK_MODE')) return
        const isDark = newValue === 'dark'
        theme.setDarkMode(isDark)
      },
      { immediate: true }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}

/** css 暗黑模式 */
function handleCssDarkMode() {
  const DARK_CLASS = 'dark'
  function addDarkClass() {
    document.documentElement.classList.add(DARK_CLASS)
  }
  function removeDarkClass() {
    document.documentElement.classList.remove(DARK_CLASS)
  }
  return {
    addDarkClass,
    removeDarkClass
  }
}

type ThemeVars = Exclude<GlobalThemeOverrides['common'], undefined>
type ThemeVarsKeys = keyof ThemeVars

/** 添加css vars至html */
function addThemeCssVarsToHtml(themeVars: ThemeVars) {
  const keys = Object.keys(themeVars) as ThemeVarsKeys[]
  const style: string[] = []
  keys.forEach(key => {
    style.push(`--${kebabCase(key)}: ${themeVars[key]}`)
  })
  const styleStr = style.join(';')
  document.documentElement.style.cssText += styleStr
}
