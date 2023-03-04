import { Router } from 'vue-router'

export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
}

/**
 * 路由跳转顶部进度条
 * @param router
 */
function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    window.$loadingBar?.start()
  })
  router.afterEach(() => {
    window.$loadingBar?.finish()
  })
}
