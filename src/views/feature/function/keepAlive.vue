<script setup lang="ts">
defineOptions({
  name: 'FeatureStandardKeepAlive',
})

definePage({
  meta: {
    title: '页面缓存',
    cache: true,
  },
})

const value = ref(1)
</script>

<template>
  <PageLayout navbar>
    <PageMain>
      <van-stepper v-model="value" />
    </PageMain>
  </PageLayout>
</template>
