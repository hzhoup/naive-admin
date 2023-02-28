import { localeSetting } from '@/setting/locale'
import { pinia } from '@/store'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useLocalStore = defineStore('local-store', () => {
  const state = reactive(localeSetting)

  return { ...toRefs(state) }
})

export function useLocalStoreWithOut() {
  return useLocalStore(pinia)
}
