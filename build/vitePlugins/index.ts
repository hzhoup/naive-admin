import vue from '@vitejs/plugin-vue'

export function setupVitePlugins(env: ImportMetaEnv, isBuild: boolean) {
  return [vue()]
}
