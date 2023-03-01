import { genMessage } from '@/locales/helpers'
import { dateZhCN, zhCN } from 'naive-ui'

const modules = import.meta.glob('./zh-CN/**/*.ts')
export default {
  message: {
    ...(await genMessage(modules, 'zh-CN')),
    naiveLocale: zhCN,
    naiveDateLocale: dateZhCN
  }
}
