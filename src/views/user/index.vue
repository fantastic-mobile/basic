<script setup lang="ts">
import useUserStore from '@/store/modules/user'

definePage({
  meta: {
    title: '个人中心',
    auth: true,
  },
})

const userStore = useUserStore()

const avatarError = ref(false)
watch(() => userStore.avatar, () => {
  if (avatarError.value) {
    avatarError.value = false
  }
})
</script>

<template>
  <FmPageLayout :navbar="false" tabbar>
    <div class="flex flex-1 flex-col gap-8 p-4">
      <div class="flex flex-1 flex-col gap-4">
        <div class="flex items-center justify-end gap-4">
          <FmBadge :value="10">
            <FmIcon name="i-carbon:notification" class="text-6" />
          </FmBadge>
          <FmIcon name="i-carbon:settings" class="text-6" />
        </div>
        <div class="flex items-center gap-4">
          <img v-if="userStore.avatar && !avatarError" :src="userStore.avatar" :onerror="() => (avatarError = true)" class="h-20 w-20 rounded-full bg-dark p-2 dark-bg-light">
          <FmIcon v-else name="i-carbon:user-avatar-filled-alt" class="text-20 text-gray-400" />
          <div>
            <div class="text-8 font-bold">
              Hi, {{ userStore.account }}
            </div>
            <div class="mt-1 text-stone-5">
              这是个人中心示例页面噢~
            </div>
          </div>
        </div>
        <div class="mb-2 mt-4 flex items-center text-4 font-mono">
          <div class="flex flex-1 flex-col items-center gap-2">
            <FmIcon name="i-logos:vitejs" class="text-8" />
            Vite
          </div>
          <div class="flex flex-1 flex-col items-center gap-2">
            <FmIcon name="i-logos:vue" class="text-8" />
            Vue.js
          </div>
          <div class="flex flex-1 flex-col items-center gap-2">
            <FmIcon name="i-logos:unocss" class="text-8" />
            UnoCSS
          </div>
          <div class="flex flex-1 flex-col items-center gap-2">
            <FmIcon name="i-logos:pinia" class="text-8" />
            Pinia
          </div>
        </div>
        <div class="flex flex-col rounded-lg bg-card">
          <div class="flex items-center gap-2 border-b border-b-([var(--g-bg)] solid) p-4 last:border-b-none">
            <div class="flex-center inline-flex rounded-full bg-[#fae9eb] p-2">
              <FmIcon name="i-carbon:thumbs-up" class="text-4 text-[#53b7ad]" />
            </div>
            点赞
            <div class="ms-auto flex items-center gap-2 font-mono">
              9+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
          <div class="flex items-center gap-2 border-b border-b-([var(--g-bg)] solid) p-4 last:border-b-none">
            <div class="flex-center inline-flex rounded-full bg-[#fae9eb] p-2">
              <FmIcon name="i-carbon:favorite" class="text-4 text-[#6ecc84]" />
            </div>
            收藏
            <div class="ms-auto flex items-center gap-2 font-mono">
              99+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
          <div class="flex items-center gap-2 border-b border-b-([var(--g-bg)] solid) p-4 last:border-b-none">
            <div class="flex-center inline-flex rounded-full bg-[#fae9eb] p-2">
              <FmIcon name="i-carbon:share" class="text-4 text-[#4580dd]" />
            </div>
            分享
            <div class="ms-auto flex items-center gap-2 font-mono">
              999+
              <FmIcon name="i-carbon:chevron-right" />
            </div>
          </div>
        </div>
        <FmPageMain title="更多服务" class="rounded-lg m-0!">
          <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:ad" class="text-8" />
              <div class="text-xs text-stone-5">
                服务1
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:bitcoin" class="text-8" />
              <div class="text-xs text-stone-5">
                服务2
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:alarm-clock" class="text-8" />
              <div class="text-xs text-stone-5">
                服务3
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:calendar-dot" class="text-8" />
              <div class="text-xs text-stone-5">
                服务4
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:good-two" class="text-8" />
              <div class="text-xs text-stone-5">
                服务5
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:airplane" class="text-8" />
              <div class="text-xs text-stone-5">
                服务6
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:shopping" class="text-8" />
              <div class="text-xs text-stone-5">
                服务7
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <FmIcon name="i-icon-park:globe" class="text-8" />
              <div class="text-xs text-stone-5">
                服务8
              </div>
            </div>
          </div>
        </FmPageMain>
      </div>
      <FmButton block @click="userStore.logout()">
        登出
      </FmButton>
    </div>
  </FmPageLayout>
</template>
