<script setup lang="ts">
definePage({
  meta: {
    title: '默认导航栏',
  },
})

const router = useRouter()
</script>

<template>
  <FmPageLayout navbar>
    <div class="flex flex-col gap-4 p-4">
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </FmPageLayout>
</template>
