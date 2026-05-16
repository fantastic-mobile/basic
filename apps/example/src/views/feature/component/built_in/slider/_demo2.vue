<script setup lang="ts">
const value = ref<number[]>([0])
</script>

<template>
  <FmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
</template>
