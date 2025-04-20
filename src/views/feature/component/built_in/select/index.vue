<script setup lang="ts">
definePage({
  meta: {
    title: '选择器',
  },
})

const select = ref('1')
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <FmSelect
        v-model="select"
        :options="[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2', disabled: true },
          { label: '选项3', value: '3' },
        ]"
      />
    </FmPageMain>
  </FmPageLayout>
</template>
