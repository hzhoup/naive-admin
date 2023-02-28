/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './build/utils/env'
import { createProxy } from './build/utils/proxy'
import { setupVitePlugins } from './build/vitePlugins'

const resolvePath = (...paths: string[]) => resolve(__dirname, ...paths)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const isBuild = command === 'build'

  const env = loadEnv(mode, root, ['VITE_', 'APP_'])
  const viteEnv = wrapperEnv(env)
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': resolvePath('src')
      }
    },
    server: {
      cors: true,
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/style/main.scss";'
        }
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
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'c8'
      },
      transformMode: {
        web: [/.[tj]sx$/]
      }
    }
  }
})
