import { router as GlobalRouter } from '@/router'
import { RouteLocationRaw } from 'vue-router'

export function usePage(inSetup = true) {
  const router = inSetup ? useRouter() : GlobalRouter

  function go(_route: RouteLocationRaw) {
    router.push(_route).catch((e: Error) => console.error(e))
  }

  function goHome() {
    go({ path: '/' })
  }

  function goBack() {
    router.back()
  }

  return { go, goHome, goBack }
}
