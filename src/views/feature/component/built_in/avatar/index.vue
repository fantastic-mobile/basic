<script setup lang="ts">
definePage({
  meta: {
    title: '头像',
  },
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex gap-4">
        <FmAvatar src="https://fantastic-mobile.hurui.me/logo.png" />
        <FmAvatar src="https://fantastic-mobile.hurui.me/logo.png" shape="square" />
        <FmAvatar src="" fallback="Hooray" />
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
