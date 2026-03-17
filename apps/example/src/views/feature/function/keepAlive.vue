<script setup lang="ts">
defineOptions({
  name: 'FeatureStandardKeepAlive',
})

definePage({
  meta: {
    title: '页面缓存',
    keepAlive: true,
  },
})

const value = ref(1)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <van-stepper v-model="value" />
    </FmPageMain>
  </FmPageLayout>
</template>
