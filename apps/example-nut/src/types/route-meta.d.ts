import type { RouteNamedMap } from 'vue-router/auto-routes'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    keepAlive?: boolean | keyof RouteNamedMap | (keyof RouteNamedMap)[]
    noKeepAlive?: keyof RouteNamedMap | (keyof RouteNamedMap)[]
    auth?: boolean | string | string[]
  }
}
