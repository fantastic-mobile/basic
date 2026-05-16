<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'

definePage({
  meta: {
    title: '弹窗',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain title="弹窗">
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="对话框">
        <Demo2 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
