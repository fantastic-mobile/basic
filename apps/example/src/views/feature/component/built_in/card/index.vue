<script setup lang="ts">
definePage({
  meta: {
    title: '卡片',
  },
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex flex-col gap-4">
        <FmCard v-for="i in 3" :key="i" title="卡片标题" description="卡片描述" class="w-full">
          卡片内容
          <template #footer>
            卡片底部
          </template>
        </FmCard>
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
