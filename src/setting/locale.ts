export type LocaleType = 'zh_CN' | 'en'

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en'
}

export const localeSetting = {
  locale: LOCALE.ZH_CN,
  fallback: LOCALE.ZH_CN
}

export const localeList = [
  { label: '中文', key: LOCALE.ZH_CN },
  { label: 'English', key: LOCALE.EN_US }
]
