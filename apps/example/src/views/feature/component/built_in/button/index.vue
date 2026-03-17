<script setup lang="ts">
definePage({
  meta: {
    title: '按钮',
  },
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex flex-wrap gap-4">
        <FmButton>
          按钮
        </FmButton>
        <FmButton variant="destructive">
          按钮
        </FmButton>
        <FmButton variant="outline">
          按钮
        </FmButton>
        <FmButton variant="secondary">
          按钮
        </FmButton>
        <FmButton variant="ghost">
          按钮
        </FmButton>
        <FmButton variant="link">
          按钮
        </FmButton>
        <FmButton disabled>
          按钮
        </FmButton>
        <FmButton loading>
          按钮
        </FmButton>
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
