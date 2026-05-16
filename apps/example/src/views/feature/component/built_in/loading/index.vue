<script setup lang="ts">
import Demo1 from './_demo1.vue'

definePage({
  meta: {
    title: '加载遮罩',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <FmPageMain>
      <Demo1 />
    </FmPageMain>
  </AppPageLayout>
</template>
