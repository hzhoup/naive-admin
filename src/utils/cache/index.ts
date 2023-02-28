import { createStore as create } from '@/utils/cache/storage'
import { getStoragePrefix } from '@/utils/common/env'

const createOptions = (storage: Storage, options: Record<string, any> = {}) => {
  return {
    storage,
    prefixKey: getStoragePrefix(),
    ...options
  }
}

export const WebStorage = create(createOptions(sessionStorage))

export const createStorage = (storage: Storage = sessionStorage, options: Record<string, any> = {}) => {
  return create(createOptions(storage, options))
}

export const createSessionStorage = (options = {}) => {
  return createStorage(localStorage, { ...options, timeout: 1000 })
}

export const createLocalStorage = (options = {}) => {
  return createStorage(localStorage, { ...options, timeout: 1000 })
}

export default WebStorage
