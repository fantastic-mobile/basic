<script setup lang="ts">
const switchVal = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <FmSwitch v-model="switchVal" />
    <FmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
