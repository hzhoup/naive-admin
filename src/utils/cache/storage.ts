import { isNil } from 'lodash-es'

export const createStore = ({ prefixKey = '', storage = sessionStorage, timeout = null }) => {
  const WebStorage = class WebStorage {
    private storage: Storage
    private prefixKey?: string

    constructor() {
      this.storage = storage
      this.prefixKey = prefixKey
    }

    set<T = unknown>(key: string, value: T, expire: number | null = timeout) {
      const dataStr = JSON.stringify({
        value,
        time: Date.now(),
        expire: isNil(expire) ? null : new Date().getTime() + expire * 1000
      })
      this.storage.setItem(this.getKey(key), dataStr)
    }

    get<T = unknown>(key: string, initValue: T | null = null) {
      const val = this.storage.getItem(this.getKey(key))
      if (!val) return initValue

      try {
        const data = JSON.parse(val)
        const { value, expire } = data
        if (isNil(expire) || expire >= new Date().getTime()) return value
        this.remove(key)
      } catch (e) {
        return initValue
      }
    }

    remove(key: string) {
      this.storage.removeItem(this.getKey(key))
    }

    clear(): void {
      this.storage.clear()
    }

    private getKey(key: string) {
      return `${this.prefixKey}${key}__`.toUpperCase()
    }
  }

  return new WebStorage()
}
