import { setupI18n } from '@/locales'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupStore } from '@/store'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  await setupI18n(app)

  setupRouter(app)

  setupRouterGuard(router)

  app.mount('#app')
}

await bootstrap()
