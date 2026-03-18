<script setup lang="ts">
definePage({
  meta: {
    title: 'UnoCSS',
  },
})
</script>

<template>
  <AppPageLayout navbar>
    <div text-center flex flex-1 flex-col select-none all:transition-400>
      <div ma>
        <div text-5xl fw100 animate-bounce-alt animate-duration-1s animate-count-infinite>
          UnoCSS
        </div>
      </div>
    </div>
  </AppPageLayout>
</template>
