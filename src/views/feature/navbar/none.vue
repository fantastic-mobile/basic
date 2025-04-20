<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <FmPageLayout :navbar="false">
    <div class="flex flex-col gap-4 p-4">
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </FmPageLayout>
</template>
