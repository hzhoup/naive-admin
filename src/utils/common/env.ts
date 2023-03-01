import pkg from '../../../package.json'

export function getStoragePrefix() {
  return `__${import.meta.env.APP_SHORT_NAME}__${getEnv()}__${pkg.version}__`.toUpperCase()
}

export function getEnv(): string {
  return import.meta.env.MODE
}

export function isDevMode(): boolean {
  return import.meta.env.DEV
}

export function isProdMode(): boolean {
  return import.meta.env.PROD
}
