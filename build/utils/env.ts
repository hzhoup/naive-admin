export function wrapperEnv(envConf: Recordable): ImportMetaEnv {
  const result: any = {}

  for (const key of Object.keys(envConf)) {
    let value = envConf[key].replace(/\\n/g, '\n')
    value = value === 'true' ? true : value === 'false' ? false : value

    if (key === 'VITE_PORT') value = Number(value)

    if (key === 'VITE_PROXY' && value) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'))
      } catch {
        value = ''
      }
    }

    result[key] = value
  }

  return result
}
