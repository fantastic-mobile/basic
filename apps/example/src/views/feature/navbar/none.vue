<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <AppPageLayout :navbar="false">
    <div class="p-4 flex flex-col gap-4">
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </AppPageLayout>
</template>
