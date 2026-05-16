<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'
import Demo3 from './_demo3.vue'
import Demo4 from './_demo4.vue'
import Demo5 from './_demo5.vue'

definePage({
  meta: {
    title: '按钮组',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="垂直">
        <Demo2 />
      </FmPageMain>
      <FmPageMain title="分割线">
        <Demo3 />
      </FmPageMain>
      <FmPageMain title="嵌套">
        <Demo4 />
      </FmPageMain>
      <FmPageMain title="与其他组件组合">
        <Demo5 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
