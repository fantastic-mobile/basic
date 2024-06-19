<script setup lang="ts">
defineOptions({
  name: 'Feature',
})

definePage({
  meta: {
    title: '特色',
    cache: true,
  },
})

const data: {
  title: string
  icon?: string
  routes: {
    path: string
    title: string
    icon?: string
    pro?: boolean
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
      { path: '/feature/permission', title: '权限验证' },
    ],
  },
  {
    title: '基础组件',
    icon: 'i-bx:bxs-component',
    routes: [
      { path: '/feature/component/basic', title: '基础组件' },
    ],
  },
  {
    title: '内建组件',
    icon: 'i-bx:bxs-component',
    routes: [
      { path: '/feature/component/built-in', title: '内建组件' },
    ],
  },
  {
    title: '扩展组件',
    icon: 'i-bx:bxs-component',
    routes: [
      { path: '/feature/component/pagemain-demo', title: 'PageMain' },
      { path: '/feature/component/trend-demo', title: 'Trend' },
    ],
  },
  {
    title: '插件',
    icon: 'i-clarity:plugin-outline-alerted',
    routes: [
      { path: '/feature/plugin/qrcode', title: '二维码', icon: 'i-material-symbols:qr-code' },
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
  <PageLayout :navbar="false" tabbar saved-position>
    <div class="p-4">
      <div v-for="(item, index) in data" :key="index" class="mb-4">
        <div class="inline-flex items-center gap-2 text-gray-7 dark-text-gray-3">
          <SvgIcon v-if="item.icon" :name="item.icon" class="text-6" />
          <div class="relative z-0 inline-block text-2xl font-bold after:(absolute bottom-0 left-0 h-2 w-full bg-yellow content-[''] -z-1 dark-bg-yellow-9)">
            {{ item.title }}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-4 gap-3">
          <router-link
            v-for="route in item.routes" :key="route.path" :to="route.path" class="relative flex of-hidden rounded-lg bg-[var(--g-container-bg)] text-sm text-gray-6 shadow-sm dark-text-gray-4" :class="{
              'bg-gradient-to-r from-transparent to-[#ffd700] dark-to-[#ffd70030] b-(1 solid [#d4af37])': route.pro,
            }"
          >
            <SvgIcon v-if="route.pro" name="i-mdi:professional-hexagon" class="right-[-12px] top--3 z-0 rotate-30 bg-[#d4af37] text-6xl absolute! dark-bg-[#d4af3730]" />
            <div v-if="route.icon" class="z-1 flex-center b-r-(1 [var(--g-bg)] solid) px-3 py-2 pe-2">
              <SvgIcon :name="route.icon" />
            </div>
            <div class="z-1 flex-1 truncate px-3 py-2" :class="{ 'ps-2': route.icon }">
              {{ route.title }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
