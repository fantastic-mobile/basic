<script setup lang="ts">
definePage({
  meta: {
    title: '内容块',
  },
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        PageMain 是最常用的页面组件，几乎所有页面都会使用到
      </FmPageMain>
      <FmPageMain title="你可以设置一个自定义的标题">
        这里放页面内容
      </FmPageMain>
      <FmPageMain>
        <template #title>
          <div class="flex items-center justify-between">
            通过 slot 设置标题
            <FmButton size="sm" variant="outline">
              自定义按钮
            </FmButton>
          </div>
        </template>
        这里放页面内容
      </FmPageMain>
      <FmPageMain title="带展开/收起功能" collaspe height="20vh">
        <h1 class="text-2xl font-bold">
          Fantastic-mobile
        </h1>
        <img src="@/assets/images/logo.png" class="w-40">
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
