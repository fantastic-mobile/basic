<script setup lang="ts">
definePage({
  meta: {
    title: '自定义区域',
  },
})

const checked = ref(false)
</script>

<template>
  <PageLayout :navbar="false" tabbar>
    <template #tabbar>
      <div class="flex-center flex-1">
        <SvgIcon name="https://fantastic-admin.github.io/logo.png" class="text-8" />
      </div>
      <div v-show="checked" class="flex-center flex-1">
        <SvgIcon name="https://fantastic-mobile.github.io/logo.png" class="text-8" />
      </div>
      <div class="flex-center flex-1">
        <SvgIcon name="https://one-step-admin.github.io/logo.png" class="text-8" />
      </div>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>可以根据业务逻辑做更精细化的处理，比如动态切换显示内容。</div>
      <div>
        <van-switch v-model="checked" size="16px" />
      </div>
      <van-button @click="$router.back()">
        返回
      </van-button>
    </div>
  </PageLayout>
</template>
