import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app: App) {
  app.use(router)
}
