<script setup lang="ts">
definePage({
  meta: {
    title: '输入框',
  },
})

const value = ref('')
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <FmInput v-model="value" placeholder="请输入内容" />
    </FmPageMain>
  </FmPageLayout>
</template>
