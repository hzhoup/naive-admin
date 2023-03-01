import { set } from 'lodash-es'

export async function genMessage(langs: any, prefix = 'lang') {
  const result: Recordable = {}

  for (const key of Object.keys(langs)) {
    const module = await langs[key]()
    const langFileModule = module.default
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')
    if (moduleName) {
      if (objKey) {
        set(result, moduleName, result[moduleName] || {})
        set(result[moduleName], objKey, langFileModule)
      } else {
        set(result, moduleName, langFileModule || {})
      }
    }
  }
  return result
}
