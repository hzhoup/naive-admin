import unocss from '@unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export function setupVitePlugins(env: ImportMetaEnv, isBuild: boolean) {
  console.log(env, isBuild)
  return [vue(), vueJsx(), unocss()]
}
