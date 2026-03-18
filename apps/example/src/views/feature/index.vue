<script setup lang="ts">
import type { RouteNamedMap } from 'vue-router/auto-routes'

defineOptions({
  name: 'Feature',
})

definePage({
  meta: {
    title: '特色',
    keepAlive: true,
  },
})

const data: {
  title: string
  icon?: string
  routes: {
    path: keyof RouteNamedMap
    title: string
    icon?: string
  }[]
}[] = [
  {
    title: '导航栏',
    icon: 'i-fluent:document-header-16-regular',
    routes: [
      { path: '/feature/navbar/default', title: '默认导航栏' },
      { path: '/feature/navbar/none', title: '无导航栏' },
      { path: '/feature/navbar/custom-area', title: '自定义区域' },
      { path: '/feature/navbar/custom-navbar', title: '自定义导航栏' },
    ],
  },
  {
    title: '标签栏',
    icon: 'i-fluent:document-footer-16-regular',
    routes: [
      { path: '/feature/tabbar/default', title: '默认标签栏' },
      { path: '/feature/tabbar/custom-area', title: '自定义区域' },
    ],
  },
  {
    title: '功能',
    icon: 'i-ri:function-add-line',
    routes: [
      { path: '/feature/function/unocss', title: 'UnoCSS', icon: 'i-logos:unocss' },
      { path: '/feature/function/icon', title: '图标', icon: 'i-ri:remixicon-line' },
      { path: '/feature/function/keepAlive', title: '页面缓存', icon: 'i-cil:window-restore' },
    ],
  },
  {
    title: '权限验证',
    icon: 'i-ri:shield-keyhole-line',
    routes: [
      { path: '/feature/permission/', title: '权限验证' },
    ],
  },
  {
    title: '基础组件',
    icon: 'i-bx:bxs-component',
    routes: [
      { path: '/feature/component/basic', title: '基础组件' },
      { path: '/feature/component/composite', title: '复合组件' },
    ],
  },
  {
    title: '内建组件',
    icon: 'i-bx:bxs-component',
    routes: [
      { path: '/feature/component/built_in/avatar/', title: '头像' },
      { path: '/feature/component/built_in/badge/', title: '徽章' },
      { path: '/feature/component/built_in/button/', title: '按钮' },
      { path: '/feature/component/built_in/card/', title: '卡片' },
      { path: '/feature/component/built_in/checkbox/', title: '复选框' },
      { path: '/feature/component/built_in/divider/', title: '分割线' },
      { path: '/feature/component/built_in/drawer/', title: '抽屉' },
      { path: '/feature/component/built_in/input/', title: '输入框' },
      { path: '/feature/component/built_in/loading/', title: '加载遮罩' },
      { path: '/feature/component/built_in/modal/', title: '弹窗' },
      { path: '/feature/component/built_in/page_main/', title: '内容块' },
      { path: '/feature/component/built_in/scroll_area/', title: '滚动区域' },
      { path: '/feature/component/built_in/select/', title: '选择器' },
      { path: '/feature/component/built_in/slider/', title: '滑块' },
      { path: '/feature/component/built_in/switch/', title: '开关' },
      { path: '/feature/component/built_in/tabs/', title: '标签页' },
      { path: '/feature/component/built_in/toast/', title: '轻提示' },
      { path: '/feature/component/built_in/trend/', title: '趋势符号' },
    ],
  },
  {
    title: '插件',
    icon: 'i-clarity:plugin-outline-alerted',
    routes: [
      { path: '/feature/plugin/esign', title: '电子签名', icon: 'i-mdi:draw' },
      { path: '/feature/plugin/animation', title: '过渡动画', icon: 'i-clarity:animation-line' },
      { path: '/feature/plugin/swiper', title: '轮播动画', icon: 'i-carbon:carousel-horizontal' },
      { path: '/feature/plugin/echarts', title: 'ECharts', icon: 'i-ri:bar-chart-2-line' },
      { path: '/feature/plugin/vchart', title: 'VChart', icon: 'i-ri:bar-chart-2-line' },
    ],
  },
  {
    title: '页面',
    icon: 'i-ri:pages-line',
    routes: [
      { path: '/feature/page/loadmore', title: '加载更多' },
    ],
  },
]
</script>

<template>
  <AppPageLayout :navbar="false" tabbar saved-position>
    <div class="p-4">
      <div v-for="(item, index) in data" :key="index" class="mb-4">
        <div class="text-gray-7 dark-text-gray-3 inline-flex gap-2 items-center">
          <FmIcon v-if="item.icon" :name="item.icon" class="text-6" />
          <div class="after:dark-bg-yellow-9 text-2xl font-bold inline-block relative z-0 after:(bg-yellow h-2 w-full content-[''] bottom-0 left-0 absolute -z-1)">
            {{ item.title }}
          </div>
        </div>
        <div class="mt-4 gap-3 grid grid-cols-2">
          <router-link v-for="route in item.routes" :key="route.path" :to="route.path" class="text-sm text-card-foreground/80 border rounded-lg bg-card flex shadow-sm relative of-hidden">
            <div v-if="route.icon" class="px-3 py-2 pe-2 border-r flex-center z-1">
              <FmIcon :name="route.icon" />
            </div>
            <div class="px-3 py-2 flex-1 truncate z-1" :class="{ 'ps-2': route.icon }">
              {{ route.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </AppPageLayout>
</template>
