import unocss from '@unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueMacros from 'unplugin-vue-macros'
import { PluginOption } from 'vite'
import { configUnPlugins } from './unplugin'

export function setupVitePlugins(env: ImportMetaEnv, isBuild: boolean) {
  console.log(env, isBuild)
  const plugins: PluginOption[] = [vue(), vueJsx(), unocss(), vueMacros.vite()]

  plugins.push(configUnPlugins())

  return plugins
}
