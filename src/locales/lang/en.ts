import { genMessage } from '@/locales/helpers'
import { dateEnUS, enUS } from 'naive-ui'

const modules = import.meta.glob('./en/**/*.ts')
export default {
  message: {
    ...(await genMessage(modules, 'en')),
    naiveLocale: enUS,
    naiveDateLocale: dateEnUS
  }
}
