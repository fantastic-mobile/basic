<script setup lang="ts">
definePage({
  meta: {
    title: '复选框',
  },
})

const checked = ref(false)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex gap-4">
        <FmCheckbox v-model="checked">
          复选框
        </FmCheckbox>
        {{ checked }}
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
