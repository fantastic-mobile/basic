<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'
import Demo3 from './_demo3.vue'
import Demo4 from './_demo4.vue'

definePage({
  meta: {
    title: '内容块',
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
      <FmPageMain>
        <Demo3 />
      </FmPageMain>
      <FmPageMain>
        <Demo4 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
