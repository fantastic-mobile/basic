<script setup lang="ts">
definePage({
  meta: {
    title: '个人中心',
    auth: true,
  },
})

const appAuthStore = useAppAuthStore()

const avatarError = ref(false)
watch(() => appAuthStore.avatar, () => {
  if (avatarError.value) {
    avatarError.value = false
  }
})
</script>

<template>
  <AppPageLayout :navbar="false" tabbar>
    <div class="p-4 flex flex-1 flex-col gap-8">
      <div class="flex flex-1 flex-col gap-4">
        <div class="flex gap-4 items-center justify-end">
          <FmBadge :value="10">
            <FmIcon name="i-carbon:notification" class="text-6" />
          </FmBadge>
          <FmIcon name="i-carbon:settings" class="text-6" />
        </div>
        <div class="flex gap-4 items-center">
          <img v-if="appAuthStore.avatar && !avatarError" :src="appAuthStore.avatar" :onerror="() => (avatarError = true)" class="p-2 rounded-full bg-dark h-20 w-20 dark-bg-light">
          <FmIcon v-else name="i-carbon:user-avatar-filled-alt" class="text-20 text-gray-400" />
          <div>
            <div class="text-8 font-bold">
              Hi, {{ appAuthStore.account }}
            </div>
            <div class="text-stone-5 mt-1">
              这是个人中心示例页面噢~
            </div>
          </div>
        </div>
        <div class="text-4 font-mono mb-2 mt-4 flex items-center">
          <div class="flex flex-1 flex-col gap-2 items-center">
            <FmIcon name="i-logos:vitejs" class="text-8" />
            Vite
          </div>
          <div class="flex flex-1 flex-col gap-2 items-center">
            <FmIcon name="i-logos:vue" class="text-8" />
            Vue.js
          </div>
          <div class="flex flex-1 flex-col gap-2 items-center">
            <FmIcon name="i-logos:unocss" class="text-8" />
            UnoCSS
          </div>
          <div class="flex flex-1 flex-col gap-2 items-center">
            <FmIcon name="i-logos:pinia" class="text-8" />
            Pinia
          </div>
        </div>
        <div class="rounded-lg bg-card flex flex-col">
          <div class="p-4 border-b border-b-([var(--g-bg)] solid) flex gap-2 items-center last:border-b-none">
            <div class="p-2 rounded-full bg-[#fae9eb] flex-center inline-flex">
              <FmIcon name="i-carbon:thumbs-up" class="text-4 text-[#53b7ad]" />
            </div>
            点赞
            <div class="font-mono ms-auto flex gap-2 items-center">
              9+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
          <div class="p-4 border-b border-b-([var(--g-bg)] solid) flex gap-2 items-center last:border-b-none">
            <div class="p-2 rounded-full bg-[#fae9eb] flex-center inline-flex">
              <FmIcon name="i-carbon:favorite" class="text-4 text-[#6ecc84]" />
            </div>
            收藏
            <div class="font-mono ms-auto flex gap-2 items-center">
              99+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
          <div class="p-4 border-b border-b-([var(--g-bg)] solid) flex gap-2 items-center last:border-b-none">
            <div class="p-2 rounded-full bg-[#fae9eb] flex-center inline-flex">
              <FmIcon name="i-carbon:share" class="text-4 text-[#4580dd]" />
            </div>
            分享
            <div class="font-mono ms-auto flex gap-2 items-center">
              999+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
        </div>
        <FmPageMain title="更多服务" class="rounded-lg m-0!">
          <div class="gap-4 grid grid-cols-4">
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:ad" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务1
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:bitcoin" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务2
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:alarm-clock" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务3
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:calendar-dot" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务4
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:good-two" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务5
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:airplane" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务6
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:shopping" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务7
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <FmIcon name="i-icon-park:globe" class="text-8" />
              <div class="text-stone-5 text-xs">
                服务8
              </div>
            </div>
          </div>
        </FmPageMain>
      </div>
      <FmButton block @click="appAuthStore.logout()">
        登出
      </FmButton>
    </div>
  </AppPageLayout>
</template>
