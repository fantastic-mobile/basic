<script setup lang="ts">
import Demo1 from './demo1.vue'

definePage({
  meta: {
    title: '分割线',
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
