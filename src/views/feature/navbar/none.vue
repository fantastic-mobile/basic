<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <FmPageLayout :navbar="false">
    <div class="p-4 flex flex-col gap-4">
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </FmPageLayout>
</template>
