<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import useSettingsStore from '@/store/modules/settings'
import { cn } from '@/utils'
import { useElementSize, useScroll } from '@vueuse/core'

defineOptions({
  name: 'FmPageLayout',
})

withDefaults(
  defineProps<{
    /** 导航栏中标题是否居中 */
    titleCenter?: boolean
    /** 是否启用导航栏，默认使用应用配置 `navbar.enable` */
    navbar?: boolean
    /** 导航栏是否启用边框 */
    navbarBorder?: boolean
    /** 导航栏样式 */
    navbarClass?: HTMLAttributes['class']
    /** 是否启用标签栏，默认使用应用配置 `tabbar.enable` */
    tabbar?: boolean
    /** 标签栏是否启用边框 */
    tabbarBorder?: boolean
    /** 标签栏样式 */
    tabbarClass?: HTMLAttributes['class']
    /** 是否展示底部版权信息，默认使用应用配置 `copyright.enable` */
    copyright?: boolean
    /** 是否启用返回顶部按钮，默认使用应用配置 `app.enableBackTop` */
    backTop?: boolean
  }>(),
  {
    titleCenter: true,
    navbar: undefined,
    navbarBorder: true,
    tabbar: undefined,
    tabbarBorder: true,
    copyright: undefined,
    backTop: undefined,
  },
)

const emits = defineEmits<{
  scroll: [Event]
  reachTop: []
  reachBottom: []
}>()

const route = useRoute()
const settingsStore = useSettingsStore()

const layoutRef = useTemplateRef('layoutRef')
const { y, arrivedState } = useScroll(layoutRef)
watch(toRef(arrivedState), (val) => {
  if (val.top) {
    emits('reachTop')
  }
  if (val.bottom) {
    emits('reachBottom')
  }
}, {
  deep: true,
})

defineExpose({
  ref: layoutRef,
})
function handleMainScroll(e: Event) {
  emits('scroll', e)
}

// Navbar
// 计算出左右两侧的最大宽度，让左右两侧的宽度保持一致
const startSideRef = useTemplateRef('startSideRef')
const endSideRef = useTemplateRef('endSideRef')
const sideWidth = ref(0)
onMounted(() => {
  const { width: startWidth } = useElementSize(startSideRef, undefined, { box: 'border-box' })
  const { width: endWidth } = useElementSize(endSideRef, undefined, { box: 'border-box' })
  watch([startWidth, endWidth], (val) => {
    sideWidth.value = Math.max(...val)
  }, {
    immediate: true,
  })
})
// 处理 sticky 模式下的滚动隐藏
const navbarRef = useTemplateRef('navbarRef')
const { height: navbarHeight } = useElementSize(navbarRef, undefined, { box: 'border-box' })

// Tabbar
const tabbarList = computed(() => {
  if (settingsStore.settings.tabbar.list.length > 0) {
    return settingsStore.settings.tabbar.list
  }
  return []
})
const tabbarRef = useTemplateRef('tabbarRef')
const { height: tabbarHeight } = useElementSize(tabbarRef, undefined, { box: 'border-box' })
// 处理图标显示
function getIcon(item: any) {
  if (route.fullPath === item.path) {
    return item.activeIcon ?? item.icon ?? undefined
  }
  else {
    return item.icon ?? undefined
  }
}

// 返回顶部
function handleBackTopClick() {
  layoutRef.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    ref="layoutRef" class="relative h-vh flex flex-col overflow-auto overscroll-none supports-[(height:100dvh)]:h-dvh" :style="{
      '--g-navbar-height': `max(${navbarHeight}px, var(--g-navbar-min-height))`,
      '--g-tabbar-height': `max(${tabbarHeight}px, var(--g-tabbar-min-height))`,
    }" @scroll="handleMainScroll($event)"
  >
    <!-- Navbar -->
    <header
      v-show="navbar ?? settingsStore.settings.navbar.enable"
      ref="navbarRef"
      :class="cn('navbar relative w-full flex-col-center bg-[var(--g-navbar-bg)] text-[var(--g-navbar-color)] transition-all pt-safe min-h+safe-t-[var(--g-navbar-min-height)]', {
        // 边框
        'shadow-[0_1px_0_0_hsl(var(--border))]': navbarBorder,
      }, navbarClass)"
    >
      <div class="min-h-[var(--g-navbar-min-height)] w-full flex-center">
        <div
          class="h-full flex items-center justify-start" :style="{
            ...(titleCenter && sideWidth && { width: `round(up, ${sideWidth}px, 1px)` }),
          }"
        >
          <div ref="startSideRef" class="h-full flex-center whitespace-nowrap">
            <div class="h-full flex-center whitespace-nowrap px-2 empty:hidden">
              <slot name="navbar-start" />
            </div>
          </div>
        </div>
        <div
          class="min-w-0 flex-1 text-sm" :class="{
            'text-center': titleCenter,
          }"
        >
          <div class="truncate">
            <slot name="navbar">
              {{ settingsStore.title }}
            </slot>
          </div>
        </div>
        <div
          class="h-full flex items-center justify-end" :style="{
            ...(titleCenter && sideWidth && { width: `round(up, ${sideWidth}px, 1px)` }),
          }"
        >
          <div ref="endSideRef" class="h-full flex-center whitespace-nowrap">
            <div class="h-full flex-center whitespace-nowrap px-2 empty:hidden">
              <slot name="navbar-end" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      :class="cn('relative flex flex-1 flex-col transition-margin', {
        ...((navbar ?? settingsStore.settings.navbar.enable) && {
          'mt+safe-[var(--g-navbar-height)]': true,
        }),
        ...((tabbar ?? settingsStore.settings.tabbar.enable) && {
          'mb+safe-[var(--g-tabbar-height)]': true,
        }),
      })"
    >
      <slot />
      <!-- 版权信息 -->
      <Transition
        v-bind="{
          enterActiveClass: 'ease-out',
          enterFromClass: 'opacity-0',
          enterToClass: 'opacity-100',
          leaveActiveClass: 'ease-in',
          leaveFromClass: 'opacity-100',
          leaveToClass: 'opacity-0',
        }"
      >
        <div v-if="copyright ?? settingsStore.settings.copyright.enable" class="copyright relative flex flex-wrap items-center justify-center p-4 text-sm text-primary/50">
          <span class="px-1">Copyright</span>
          <FmIcon name="i-ri:copyright-line" class="text-lg" />
          <span v-if="settingsStore.settings.copyright.dates" class="px-1">{{ settingsStore.settings.copyright.dates }}</span>
          <template v-if="settingsStore.settings.copyright.company">
            <a v-if="settingsStore.settings.copyright.website" :href="settingsStore.settings.copyright.website" target="_blank" rel="noopener" class="px-1 text-center no-underline">{{ settingsStore.settings.copyright.company }}</a>
            <span v-else class="px-1">{{ settingsStore.settings.copyright.company }}</span>
          </template>
          <a v-if="settingsStore.settings.copyright.beian" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="px-1 text-center no-underline">{{ settingsStore.settings.copyright.beian }}</a>
        </div>
      </Transition>
    </div>
    <!-- Tabbar -->
    <footer
      v-show="tabbar ?? settingsStore.settings.tabbar.enable"
      ref="tabbarRef"
      :class="cn('tabbar flex-col-center bg-[var(--g-tabbar-bg)] transition-all pb-safe min-h+safe-b-[calc(var(--g-tabbar-min-height))]', {
        // 边框
        'shadow-[0_-1px_0_0_hsl(var(--border))]': tabbarBorder,
      }, tabbarClass)"
    >
      <div class="min-h-[var(--g-tabbar-min-height)] w-full flex-center px-4">
        <slot name="tabbar">
          <template v-for="item in tabbarList" :key="JSON.stringify(item)">
            <RouterLink
              class="flex flex-1 flex-col items-center text-[var(--g-tabbar-color)] no-underline transition-all" :class="{
                'text-[var(--g-tabbar-active-color)]!': route.fullPath === item.path,
              }" :to="item.path" replace
            >
              <FmIcon v-if="getIcon(item)" :name="getIcon(item) ?? ''" :class="item.text ? 'text-6' : 'text-8'" />
              <div v-if="item.text" class="text-xs">
                {{ item.text }}
              </div>
            </RouterLink>
          </template>
        </slot>
      </div>
    </footer>
    <!-- 返回顶部 -->
    <Transition
      v-bind="{
        enterActiveClass: 'ease-out duration-300',
        enterFromClass: 'opacity-0 translate-y-4',
        enterToClass: 'opacity-100 translate-y-0',
        leaveActiveClass: 'ease-in duration-200',
        leaveFromClass: 'opacity-100 scale-100',
        leaveToClass: 'opacity-0 scale-50',
      }"
    >
      <div
        v-if="(backTop ?? settingsStore.settings.app.enableBackTop) && y >= 200"
        class="back-top size-12 flex-center cursor-pointer border rounded-full bg-background shadow-lg transition-all active:bg-border"
        :class="{
          ...((tabbar ?? settingsStore.settings.tabbar.enable) && {
            'bottom+safe-[calc(var(--g-tabbar-height)+16px)]!': true,
          }),
        }"
        @click="handleBackTopClick"
      >
        <FmIcon name="i-icon-park-outline:to-top-one" class="text-6" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/**
 * https://github.com/wswmsword/postcss-mobile-forever#%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E8%8C%83%E4%BE%8B%E5%92%8C%E5%8E%9F%E7%90%86
 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.back-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
}
</style>
