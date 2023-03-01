import { setupI18n } from '@/locales'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  await setupI18n(app)

  app.mount('#app')
}

await bootstrap()
