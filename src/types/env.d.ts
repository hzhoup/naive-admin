/// <reference types="vite/client" />
import type { ComponentPublicInstance, FunctionalComponent } from 'vue'

interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_PROXY: string[string[]]
  readonly VITE_MOCK: boolean
  readonly APP_SHORT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>
}
