<script setup lang="ts">
const value = ref<number[]>([0])
</script>

<template>
  <FmSlider v-model="value" />
</template>
