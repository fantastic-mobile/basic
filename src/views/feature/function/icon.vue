<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.function.icon',
  },
})

const webImage = ref('https://picsum.photos/50')
function change() {
  webImage.value = ''
  webImage.value = `https://picsum.photos/50?random=${Math.random()}`
}

const fm = new URL('@/assets/images/logo.png', import.meta.url).href
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <p>单色 Icon</p>
      <div>
        <FmIcon name="example-emotion-line" class="size-12" />
        <FmIcon name="example-emotion-laugh-line" class="size-12" />
        <FmIcon name="example-emotion-unhappy-line" class="size-12" />
      </div>
      <p>彩色 Icon</p>
      <div>
        <FmIcon name="example-crown" class="size-12" />
        <FmIcon name="example-star" class="size-12" />
        <FmIcon name="example-vip" class="size-12" />
      </div>
      <p>Iconify Icon</p>
      <div>
        <FmIcon name="i-carbon:4k" class="size-12" />
        <FmIcon name="i-carbon:play-filled-alt" class="size-12" />
        <FmIcon name="i-carbon:pause-filled" class="size-12" />
      </div>
      <p>网络图片</p>
      <FmIcon :name="webImage" class="size-12" />
      <div class="space-x-2">
        <FmButton @click="change">
          更改图片
        </FmButton>
        <FmButton @click="webImage = ''">
          创建错误
        </FmButton>
      </div>
      <p>本地图片</p>
      <FmIcon :name="fm" class="size-12" />
    </FmPageMain>
  </FmPageLayout>
</template>
