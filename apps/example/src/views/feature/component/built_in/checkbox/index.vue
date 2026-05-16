<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'

definePage({
  meta: {
    title: '复选框',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="半选状态">
        <Demo2 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
