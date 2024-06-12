import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import path from 'path-browserify'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import '@/assets/styles/nprogress.scss'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import useKeepAliveStore from '@/store/modules/keepAlive'

const { isLoading } = useNProgress(null, {
  showSpinner: false,
  parent: '#app',
})

function resolveRoutePath(basePath?: string, routePath?: string) {
  return basePath ? path.resolve(basePath, routePath ?? '') : routePath ?? ''
}

// 将多层嵌套路由处理成一级
function flatRoutesRecursive(routes: RouteRecordRaw[], baseUrl = '') {
  const result: RouteRecordRaw[] = []
  for (const route of routes) {
    if (route.children) {
      result.push(...flatRoutesRecursive(route.children, resolveRoutePath(baseUrl, route.path)))
    }
    else {
      result.push({
        ...route,
        path: resolveRoutePath(baseUrl, route.path),
      })
    }
  }
  return result
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: flatRoutesRecursive(routes),
})

router.beforeEach(async (to, from, next) => {
  const settingsStore = useSettingsStore()
  const userStore = useUserStore()
  settingsStore.settings.app.enableProgress && (isLoading.value = true)
  if (to.meta.auth) {
    if (userStore.isLogin) {
      // 获取用户权限
      if (settingsStore.settings.app.enablePermission) {
        !userStore.isGetPermissions && await userStore.getPermissions()
      }
      next()
    }
    else {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      })
    }
  }
  else {
    next()
  }
})

router.afterEach((to, from) => {
  const settingsStore = useSettingsStore()
  settingsStore.settings.app.enableProgress && (isLoading.value = false)
  settingsStore.setTitle(to.meta.title ?? '')
  const keepAliveStore = useKeepAliveStore()
  if (to.fullPath !== from.fullPath) {
    // 判断当前页面是否开启缓存，如果开启，则将当前页面的 name 信息存入 keep-alive 全局状态
    if (to.meta.cache) {
      const componentName = to.matched.at(-1)?.components?.default.name
      if (componentName) {
        keepAliveStore.add(componentName)
      }
      else {
        // turbo-console-disable-next-line
        console.warn('[Fantastic-mobile] 该页面组件未设置组件名，会导致缓存失效，请检查')
      }
    }
    // 判断离开页面是否开启缓存，如果开启，则根据缓存规则判断是否需要清空 keep-alive 全局状态里离开页面的 name 信息
    if (from.meta.cache) {
      const componentName = from.matched.at(-1)?.components?.default.name
      if (componentName) {
      // 通过 meta.cache 判断针对哪些页面进行缓存
        switch (typeof from.meta.cache) {
          case 'string':
            if (from.meta.cache !== to.name) {
              keepAliveStore.remove(componentName)
            }
            break
          case 'object':
            if (!from.meta.cache.includes(to.name)) {
              keepAliveStore.remove(componentName)
            }
            break
        }
        // 通过 meta.noCache 判断针对哪些页面不需要进行缓存
        if (from.meta.noCache) {
          switch (typeof from.meta.noCache) {
            case 'string':
              if (from.meta.noCache === to.name) {
                keepAliveStore.remove(componentName)
              }
              break
            case 'object':
              if (from.meta.noCache.includes(to.name)) {
                keepAliveStore.remove(componentName)
              }
              break
          }
        }
      }
    }
  }
  document.documentElement.scrollTop = 0
})

export default router
