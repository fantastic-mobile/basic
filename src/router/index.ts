import type { RouteRecordRaw } from 'vue-router/auto'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import setupGuards from './guards'

// 删除路由中间层级对应的组件
function deleteMiddleRouteComponent(routes: RouteRecordRaw[]) {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    if (route.children) {
      delete route.component
      route.children = deleteMiddleRouteComponent(route.children)
    }
    res.push(route)
  })
  return res
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: deleteMiddleRouteComponent(routes),
})

setupGuards(router)

export default router
