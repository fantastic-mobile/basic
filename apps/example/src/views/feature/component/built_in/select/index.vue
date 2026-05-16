<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'
import Demo3 from './_demo3.vue'
import Demo4 from './_demo4.vue'
import Demo5 from './_demo5.vue'

definePage({
  meta: {
    title: '选择器',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="组">
        <Demo2 />
      </FmPageMain>
      <FmPageMain title="多选">
        <Demo3 />
      </FmPageMain>
      <FmPageMain title="定位模式">
        <Demo4 />
      </FmPageMain>
      <FmPageMain title="在 FaModal 里展示">
        <Demo5 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
