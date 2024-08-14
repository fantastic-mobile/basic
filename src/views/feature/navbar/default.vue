<script setup lang="ts">
definePage({
  meta: {
    title: '默认导航栏',
  },
})

const router = useRouter()
</script>

<template>
  <PageLayout navbar>
    <div class="flex flex-col gap-4 p-4">
      <van-button @click="router.back()">
        返回
      </van-button>
    </div>
  </PageLayout>
</template>
