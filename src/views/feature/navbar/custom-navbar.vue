<script setup lang="ts">
definePage({
  meta: {
    title: '自定义导航栏',
  },
})

const router = useRouter()

const scrollTop = ref(0)
function onScroll(e: Event) {
  scrollTop.value = (e.target as HTMLElement).scrollTop
}
</script>

<template>
  <FmPageLayout navbar @scroll="onScroll">
    <template #navbar>
      <div
        class="h-[80px] flex flex-center gap-2 bg-([url('https://picsum.photos/375/60')] cover center no-repeat) text-light text-shadow text-shadow-color-dark shadow transition-all transition-all-500" :class="{
          'h-[60px]!': scrollTop > 50,
        }"
      >
        头部导航
      </div>
    </template>
    <div class="h-full flex flex-col gap-4 p-4">
      使用自定义导航可以满足更复杂的业务场景，例如当前页面，你可以滚动页面试试。
      <FmButton @click="router.back()">
        返回
      </FmButton>
      <div v-for="i in 50" :key="i" class="text-center">
        {{ i }}
      </div>
    </div>
  </FmPageLayout>
</template>
