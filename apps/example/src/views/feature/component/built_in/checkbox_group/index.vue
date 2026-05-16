<script setup lang="ts">
import Demo1 from './_demo1.vue'
import Demo2 from './_demo2.vue'
import Demo3 from './_demo3.vue'
import Demo4 from './_demo4.vue'

definePage({
  meta: {
    title: '复选框组',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div>
      <FmPageMain>
        <Demo1 />
      </FmPageMain>
      <FmPageMain title="带描述和禁用态">
        <Demo2 />
      </FmPageMain>
      <FmPageMain title="自定义选项内容">
        <Demo3 />
      </FmPageMain>
      <FmPageMain title="最少 / 最多选择">
        <Demo4 />
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
