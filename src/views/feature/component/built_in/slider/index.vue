<script setup lang="ts">
definePage({
  meta: {
    title: '滑块',
  },
})

const value = ref<number[]>([0])
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <FmSlider v-model="value" />
      </FmPageMain>
      <FmPageMain>
        <FmSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-50" />
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
