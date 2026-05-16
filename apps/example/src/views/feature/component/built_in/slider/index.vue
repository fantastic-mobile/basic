<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'

definePage({
  meta: {
    title: '滑块',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain>
        <Demo2 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
