<script setup lang="ts">
definePage({
  meta: {
    title: '图标',
  },
})

const webImage = ref('https://picsum.photos/50')
function change() {
  webImage.value = ''
  webImage.value = `https://picsum.photos/50?random=${Math.random()}`
}

const fm = new URL('@/assets/images/logo.png', import.meta.url).href

const active = ref(false)
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain title="SVG Icon">
        <div class="space-y-4">
          <div>
            <p class="text-sm text-muted-foreground font-medium mb-3">
              单色
            </p>
            <div class="flex gap-4">
              <div v-for="name in ['example-emotion-line', 'example-emotion-laugh-line', 'example-emotion-unhappy-line']" :key="name" class="p-3 flex flex-col gap-1.5 w-20 items-center">
                <FmIcon :name="name" class="size-10" />
                <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
              </div>
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground font-medium mb-3">
              彩色
            </p>
            <div class="flex gap-4">
              <div v-for="name in ['example-crown', 'example-star', 'example-vip']" :key="name" class="p-3 flex flex-col gap-1.5 w-20 items-center">
                <FmIcon :name="name" class="size-10" />
                <span class="text-xs text-muted-foreground text-center w-full truncate">{{ name.replace('example-', '') }}</span>
              </div>
            </div>
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="Iconify Icon">
        <div>
          <FmIcon name="i-carbon:4k" class="size-12" />
          <FmIcon name="i-carbon:play-filled-alt" class="size-12" />
          <FmIcon name="i-carbon:pause-filled" class="size-12" />
        </div>
      </FmPageMain>
      <FmPageMain title="Image Icon">
        <div class="flex gap-2">
          <div class="p-4 flex flex-col gap-3 items-center">
            <span class="text-xs text-muted-foreground font-medium">网络图片</span>
            <FmIcon :name="webImage" class="size-12" />
            <div class="flex gap-2">
              <FmButton size="sm" @click="change">
                更换图片
              </FmButton>
              <FmButton size="sm" variant="outline" @click="webImage = 'https://xxx/'">
                触发错误
              </FmButton>
            </div>
          </div>
          <div class="p-4 flex flex-col gap-3 items-center">
            <span class="text-xs text-muted-foreground font-medium">本地图片</span>
            <FmIcon :name="fm" class="size-12" />
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="Icon Transition">
        <div class="flex gap-2 items-end">
          <div class="px-6 py-4 flex flex-col gap-3 items-center">
            <span class="text-xs text-muted-foreground font-medium">无动画</span>
            <FmIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="size-8" />
          </div>
          <div class="px-6 py-4 flex flex-col gap-3 items-center">
            <span class="text-xs text-muted-foreground font-medium">有动画</span>
            <FmIcon :name="active ? 'i-lucide:heart' : 'i-lucide:star'" class="size-8" transition />
          </div>
          <FmButton @click="active = !active">
            切换图标
          </FmButton>
        </div>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
