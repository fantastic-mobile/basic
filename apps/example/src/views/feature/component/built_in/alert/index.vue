<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'
import Demo3 from './_demo3.vue'

definePage({
  meta: {
    title: '提示',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="不同样式">
        <Demo2 />
      </FmPageMain>
      <FmPageMain title="自定义描述">
        <Demo3 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
