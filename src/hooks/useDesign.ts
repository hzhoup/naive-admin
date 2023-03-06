export function useDesign(prefix: string) {
  return {
    prefixCls: `${import.meta.env.APP_SHORT_NAME}-${prefix}`,
    prefixVar: `${import.meta.env.APP_SHORT_NAME}`
  }
}
