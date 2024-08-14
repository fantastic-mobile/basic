<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <PageLayout :navbar="false">
    <div class="flex flex-col gap-4 p-4">
      <van-button @click="router.back()">
        返回
      </van-button>
    </div>
  </PageLayout>
</template>
