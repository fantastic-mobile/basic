<script setup lang="ts">
definePage({
  meta: {
    title: 'UnoCSS',
  },
})
</script>

<template>
  <PageLayout navbar>
    <div flex flex-1 flex-col select-none text-center all:transition-400>
      <div ma>
        <div animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl fw100>
          UnoCSS
        </div>
      </div>
    </div>
  </PageLayout>
</template>
