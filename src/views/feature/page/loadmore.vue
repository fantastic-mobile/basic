<script setup lang="ts">
import api from '@/api'

definePage({
  meta: {
    title: '加载更多',
  },
})

const layoutRef = useTemplateRef('layoutRef')
const pageNumber = ref(0)
const pageSize = ref(10)
const pageTotal = ref(0)
const list = ref<any>([])

function loadMore() {
  api.get('page/loadmore', {
    baseURL: '/mock',
    params: {
      from: pageNumber.value * pageSize.value,
      limit: pageSize.value,
    },
  }).then((res) => {
    list.value.push(...res.data.list)
    pageNumber.value += 1
    pageTotal.value = res.data.total
    // 不满一屏且当前数据未达到总量时，自动加载下一页
    nextTick(() => {
      const clientHeight = layoutRef.value?.ref?.clientHeight ?? 0
      const scrollHeight = layoutRef.value?.ref?.scrollHeight ?? 0
      if (clientHeight === scrollHeight && list.value.length < pageTotal.value) {
        loadMore()
      }
    })
  })
}

function onReachBottom() {
  if (list.value.length < pageTotal.value) {
    loadMore()
  }
}

onMounted(() => {
  loadMore()
})
</script>

<template>
  <PageLayout ref="layoutRef" navbar navbar-start-side="back" @reach-bottom="onReachBottom">
    <div class="m-4 flex flex-col gap-4">
      <div v-for="(item, index) in list" :key="index" class="bg-[var(--g-container-bg)] p-4">
        {{ item }}
      </div>
      <div class="flex items-center justify-between gap-4 whitespace-nowrap text-sm text-stone-4 font-500 after:h-[1px] after:w-full before:h-[1px] before:w-full after:bg-stone-2 before:bg-stone-2 dark-text-stone-6 after:content-empty before:content-empty after:dark-bg-stone-6 before:dark-bg-stone-6">
        {{ list.length < pageTotal ? '加载更多' : '已经到底啦' }}
      </div>
    </div>
  </PageLayout>
</template>
