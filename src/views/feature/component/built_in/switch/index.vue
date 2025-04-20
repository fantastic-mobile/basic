<script setup lang="ts">
definePage({
  meta: {
    title: '开关',
  },
})

const switchVal = ref(false)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex gap-4">
        <FmSwitch v-model="switchVal" />
        <FmSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
