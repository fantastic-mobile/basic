<script setup lang="ts">
definePage({
  meta: {
    title: '默认标签栏',
  },
})

const router = useRouter()
</script>

<template>
  <FmPageLayout :navbar="false" tabbar>
    <div class="flex flex-col gap-4 p-4">
      <div>底部导航默认是全局关闭的，可以单独给指定路由设置开启底部导航。</div>
      <div>当然也可以设置为全局开启，指定路由设置关闭。</div>
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </FmPageLayout>
</template>
