import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions>

export function createProxy(list: ProxyList = []) {
  const result: ProxyTargetList = {}

  for (const [prefix, target] of list) {
    result[prefix] = {
      target: target,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), '')
    }
  }
  return result
}
