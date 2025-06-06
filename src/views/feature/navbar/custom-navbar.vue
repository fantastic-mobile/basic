<script setup lang="ts">
definePage({
  meta: {
    title: '自定义导航栏',
  },
})

const router = useRouter()
</script>

<template>
  <FmPageLayout navbar :style="{ scrollTimelineName: '--navbar-timeline' }" class="pt+safe-[200px]" content-class="mt+safe!">
    <template #navbar>
      <div class="custom-navbar flex flex-center gap-2 bg-[url('https://picsum.photos/375/200')] bg-cover bg-center bg-no-repeat text-light text-shadow text-shadow-color-dark shadow transition-all-500">
        头部导航
      </div>
    </template>
    <div class="flex flex-col gap-4 p-4">
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

<style scoped>
@keyframes navbar-shrink {
  from {
    height: 200px;
    font-size: 48px;
  }

  to {
    height: 60px;
    font-size: 18px;
  }
}

.custom-navbar {
  animation: navbar-shrink linear forwards;
  animation-range: 0 140px;
  animation-timeline: --navbar-timeline;
}
</style>
