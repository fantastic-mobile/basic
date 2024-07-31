<script setup lang="ts">
definePage({
  meta: {
    title: '复合组件',
  },
})

const fieldPickerValue = ref('')
const fieldPickerColumns = ref([
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
])
</script>

<template>
  <PageLayout navbar navbar-start-side="back">
    <PageMain>
      Vant 提供的组件大多数比较原子化，在实际业务开发中，往往一个功能需要通过多个组件结合使用才能实现。本框架则将一些常用的功能封装成复合组件，方便开发者使用。
    </PageMain>
    <PageMain title="VanFieldPicker">
      <van-field-picker v-model="fieldPickerValue" placeholder="请选择" :border="false" :columns="fieldPickerColumns" />
      <van-divider />
      选中值: {{ fieldPickerValue }}
    </PageMain>
  </PageLayout>
</template>
