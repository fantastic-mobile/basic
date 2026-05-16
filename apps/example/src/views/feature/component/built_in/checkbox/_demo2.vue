<script setup lang="ts">
const checked = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <FmCheckbox v-model="checked">
    部分选中
  </FmCheckbox>
</template>
