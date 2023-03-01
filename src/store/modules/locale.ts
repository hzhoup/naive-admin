import { localeSetting } from '@/setting/locale'
import { pinia } from '@/store'
import { createLocalStorage } from '@/utils/cache'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

const ls = createLocalStorage()
const lsSetting = ls.get('LOCALE') || localeSetting

export const useLocalStore = defineStore('local-store', () => {
  const state = reactive<typeof localeSetting>(lsSetting)

  return { ...toRefs(state), state }
})

export function useLocalStoreWithOut() {
  return useLocalStore(pinia)
}
