<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <FmCheckbox v-model="checked">
      同意协议
    </FmCheckbox>
  </div>
</template>
