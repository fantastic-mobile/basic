<script setup lang="ts">
import type { ScrollAreaRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
} from 'reka-ui'
import { cn } from '@/utils'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<ScrollAreaRootProps & {
  class?: HTMLAttributes['class']
  horizontal?: boolean
  scrollbar?: boolean
  mask?: boolean
  onScroll?: (event: Event) => void
  onWheel?: (event: WheelEvent) => void
}>()

const delegatedProps = reactiveOmit(props, 'class')

const viewportRef = useTemplateRef('viewportRef')

defineExpose({
  el: viewportRef,
})
</script>

<template>
  <ScrollAreaRoot
    data-slot="scroll-area"
    v-bind="delegatedProps"
    :class="cn('relative overflow-hidden', props.class)"
  >
    <ScrollAreaViewport
      ref="viewportRef"
      data-slot="scroll-area-viewport"
      class="scroll-area-viewport outline-none rounded-[inherit] size-full transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      :class="{
        'after:(opacity-0 pointer-events-none content-empty transition-opacity absolute z-10 from-transparent to-[var(--scroll-area-mask-gradient-color)]) before:(opacity-0 pointer-events-none content-empty transition-opacity absolute z-10 from-transparent to-[var(--scroll-area-mask-gradient-color)])': props.mask,
        'after:(h-full w-12 end-0 top-0 bg-gradient-to-r rtl:bg-gradient-to-l) before:(h-full w-12 start-0 bg-gradient-to-l rtl:bg-gradient-to-r)': props.mask && props.horizontal,
        'after:(h-12 w-full bottom-0 bg-gradient-to-b) before:(h-12 w-full top-0 bg-gradient-to-t)': props.mask && !props.horizontal,
      }"
      :style="{ scrollTimelineName: '--scroll-area-mask-timeline', scrollTimelineAxis: props.horizontal ? 'x' : 'y' }"
      @scroll="onScroll"
      @wheel="onWheel"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollBar :class="{ 'opacity-0 pointer-events-none': !props.scrollbar }" />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<style scoped>
@supports (animation-timeline: auto) {
  @keyframes scroll-area-mask-visible {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  :deep(.scroll-area-viewport::before) {
    animation: scroll-area-mask-visible linear forwards;
    animation-range: 0 40px;
    animation-timeline: --scroll-area-mask-timeline;
  }

  :deep(.scroll-area-viewport::after) {
    animation: scroll-area-mask-visible linear reverse backwards;
    animation-range: calc(100% - 40px) 100%;
    animation-timeline: --scroll-area-mask-timeline;
  }
}

:deep(.scroll-area-viewport > div) {
  height: 100%;
}
</style>
