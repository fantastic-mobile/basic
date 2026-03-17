import type { Router } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import '@/assets/styles/nprogress.css'

// 鉴权
function setupAuth(router: Router) {
  router.beforeEach(async (to) => {
    const appSettingsStore = useAppSettingsStore()
    const appAuthStore = useAppAuthStore()
    if (to.meta.auth) {
      if (appAuthStore.isLogin) {
        try {
          // 获取用户权限
          if (appSettingsStore.settings.app.auth) {
            !appAuthStore.isGetPermissions && await appAuthStore.getPermissions()
          }
        }
        catch {}
      }
      else {
        return {
          name: 'login',
          query: {
            redirect: to.fullPath,
          },
        }
      }
    }
  })
}

// 进度条
function setupProgress(router: Router) {
  const { isLoading } = useNProgress(null, {
    showSpinner: false,
    parent: '#app',
  })
  router.beforeEach(() => {
    const appSettingsStore = useAppSettingsStore()
    if (appSettingsStore.settings.page.progress) {
      isLoading.value = true
    }
  })
  router.afterEach(() => {
    const appSettingsStore = useAppSettingsStore()
    if (appSettingsStore.settings.page.progress) {
      isLoading.value = false
    }
  })
}

// 标题
function setupTitle(router: Router) {
  router.afterEach((to) => {
    const appSettingsStore = useAppSettingsStore()
    appSettingsStore.setTitle(to.meta.title ?? '')
  })
}

// 页面缓存
function setupKeepAlive(router: Router) {
  router.afterEach(async (to, from) => {
    const appKeepAliveStore = useAppKeepAliveStore()
    if (to.fullPath !== from.fullPath) {
      if (to.meta.cache) {
        const componentName = to.matched.at(-1)?.components?.default.name
        if (componentName) {
          // 缓存当前页面前，先判断是否需要进行清除缓存，判断依据：
          // 1. 如果 to.meta.cache 为 boolean 类型，并且不为 true，则需要清除缓存
          // 2. 如果 to.meta.cache 为 string 类型，并且与 from.name 不一致，则需要清除缓存
          // 3. 如果 to.meta.cache 为 array 类型，并且不包含 from.name，则需要清除缓存
          // 4. 如果 to.meta.noCache 为 string 类型，并且与 from.name 一致，则需要清除缓存
          // 5. 如果 to.meta.noCache 为 array 类型，并且包含 from.name，则需要清除缓存
          let shouldClearCache = false
          if (typeof to.meta.cache === 'boolean') {
            shouldClearCache = !to.meta.cache
          }
          else if (typeof to.meta.cache === 'string') {
            shouldClearCache = to.meta.cache !== from.name
          }
          else if (Array.isArray(to.meta.cache)) {
            shouldClearCache = !to.meta.cache.includes(from.name)
          }
          if (to.meta.noCache) {
            if (typeof to.meta.noCache === 'string') {
              shouldClearCache = to.meta.noCache === from.name
            }
            else if (Array.isArray(to.meta.noCache)) {
              shouldClearCache = to.meta.noCache.includes(from.name)
            }
          }
          if (shouldClearCache) {
            appKeepAliveStore.remove(componentName)
            await nextTick()
          }
          appKeepAliveStore.add(componentName)
        }
        else {
          // turbo-console-disable-next-line
          console.warn('[Fantastic-mobile] 该页面组件未设置组件名，会导致缓存失效，请检查')
        }
      }
    }
  })
}

// 其他
function setupOther(router: Router) {
  router.afterEach(() => {
    document.documentElement.scrollTop = 0
  })
}

export default function setupGuards(router: Router) {
  setupAuth(router)
  setupProgress(router)
  setupTitle(router)
  setupKeepAlive(router)
  setupOther(router)
}
