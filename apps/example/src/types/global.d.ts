import type { RouteNamedMap } from 'vue-router/auto-routes'

declare namespace Settings {
  interface app {
    /**
     * 是否开启权限功能
     * @默认值 `false`
     */
    auth?: boolean
    /**
     * 动态标题
     * @默认值 `false`
     */
    dynamicTitle?: boolean
    /**
     * 哀悼模式
     * @默认值 `false`
     */
    rip?: boolean
  }
  interface theme {
    /**
     * 颜色方案
     * @默认值 `''` 跟随系统
     * @可选值 `'light'` 明亮模式
     * @可选值 `'dark'` 暗黑模式
     */
    colorScheme?: '' | 'light' | 'dark'
    /**
     * 圆角系数
     * @默认值 `0.5`
     * @可选值 `0到1区间的任意值`
     */
    radius?: number
    /**
     * 色弱模式
     * @默认值 `false`
     */
    colorAmblyopia?: boolean
  }
  interface navbar {
    /**
     * 是否启用
     * @默认值 `true`
     */
    enable?: boolean
  }
  interface tabbar {
    /**
     * 是否启用
     * @默认值 `false`
     */
    enable?: boolean
    /**
     * 导航菜单
     */
    list?: {
      path: keyof RouteNamedMap
      icon?: string
      activeIcon?: string
      text?: string
    }[]
  }
  interface page {
    /**
     * 载入进度条
     * @默认值 `true`
     */
    progress?: boolean
    /**
     * 返回顶部按钮
     * @默认值 `true`
     */
    backTop?: boolean
  }
  interface copyright {
    /**
     * 是否开启底部版权，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
     * @默认值 `false`
     */
    enable?: boolean
    /**
     * 网站运行日期
     * @默认值 `''`
     */
    dates?: string
    /**
     * 公司名称
     * @默认值 `''`
     */
    company?: string
    /**
     * 网站地址
     * @默认值 `''`
     */
    website?: string
  }
  interface all {
    /** 应用设置 */
    app?: app
    /** 主题设置 */
    theme?: theme
    /** 顶部导航栏 */
    navbar?: navbar
    /** 底部导航栏 */
    tabbar?: tabbar
    /** 页面设置 */
    page?: page
    /** 底部版权设置 */
    copyright?: copyright
  }
}
