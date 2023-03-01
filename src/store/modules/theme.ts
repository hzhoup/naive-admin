import { themeSetting } from '@/setting/theme'
import { createLocalStorage } from '@/utils/cache'
import { addColorAlpha, getColorPalette } from '@/utils/common/colors'
import { isProdMode } from '@/utils/common/env'
import { cloneDeep } from 'lodash-es'
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'

const ls = createLocalStorage()

export const useThemeStore = defineStore('theme-store', () => {
  const state = reactive(initThemeSettings())

  const naiveTheme = computed(() => {
    return state.darkMode ? darkTheme : undefined
  })

  const naiveThemeOverrides = computed(() => {
    return getNaiveThemeOverrides({ primary: state.themeColor, ...state.otherColor })
  })

  return { ...toRefs(state), naiveTheme, naiveThemeOverrides }
})

export function initThemeSettings() {
  const isProd = isProdMode()
  const storageThemeSettings = ls.get('THEME')
  if (isProd && storageThemeSettings) return storageThemeSettings

  const themeColor = ls.get('THEME_COLOR') || themeSetting.themeColor
  const info = themeSetting.isCustomizeInfoColor ? themeSetting.otherColor.info : getColorPalette(themeColor, 7)
  const otherColor = { ...themeSetting.otherColor, info }
  return cloneDeep({ ...themeSetting, themeColor, otherColor })
}

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active'
type ColorKey = `${ColorType}Color${ColorScene}`
type ThemeColor = Partial<Record<ColorKey, string>>

interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

/** 获取主题颜色的各种场景对应的颜色 */
function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '', handler: color => color },
    { scene: 'Suppl', handler: color => color },
    { scene: 'Hover', handler: color => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: color => getColorPalette(color, 7) },
    { scene: 'Active', handler: color => addColorAlpha(color, 0.1) }
  ]

  const themeColor: ThemeColor = {}

  colors.forEach(color => {
    colorActions.forEach(action => {
      const [colorType, colorValue] = color
      const colorKey: ColorKey = `${colorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })

  return themeColor
}

/** 获取naive的主题颜色 */
export function getNaiveThemeOverrides(colors: Record<ColorType, string>): GlobalThemeOverrides {
  const { primary, success, warning, error } = colors

  const info = themeSetting.isCustomizeInfoColor ? colors.info : getColorPalette(primary, 7)

  const themeColors = getThemeColors([
    ['primary', primary],
    ['info', info],
    ['success', success],
    ['warning', warning],
    ['error', error]
  ])

  const colorLoading = primary

  return {
    common: {
      ...themeColors
    },
    LoadingBar: {
      colorLoading
    }
  }
}
