import { wrapperEnv } from '#/build/utils/env'
import { setupVitePlugins } from '#/build/vitePlugins'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

const resolvePath = (...paths: string[]) => resolve(__dirname, ...paths)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const isBuild = command === 'build'

  const env = loadEnv(mode, root, ['VITE_', 'APP_'])
  const viteEnv = wrapperEnv(env)
  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '#': resolvePath(),
        '@': resolvePath('src')
      }
    },
    esbuild: {
      pure: isBuild ? ['console.log', 'debugger'] : []
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      brotliSize: false,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2048,
      assetsInlineLimit: 2048
    },
    plugins: setupVitePlugins(viteEnv, isBuild),
  }
})
