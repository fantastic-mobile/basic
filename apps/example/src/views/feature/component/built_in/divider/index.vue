<script setup lang="ts">
definePage({
  meta: {
    title: '分割线',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <FmDivider>center</FmDivider>
      <FmDivider position="start">
        left
      </FmDivider>
      <FmDivider position="end">
        right
      </FmDivider>
    </FmPageMain>
  </AppPageLayout>
</template>
