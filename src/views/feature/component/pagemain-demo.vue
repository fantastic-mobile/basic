<script setup lang="ts">
definePage({
  meta: {
    title: 'PageMain',
  },
})
</script>

<template>
  <PageLayout navbar>
    <PageMain>
      PageMain 是最常用的页面组件，几乎所有页面都会使用到
    </PageMain>
    <PageMain title="你可以设置一个自定义的标题">
      这里放页面内容
    </PageMain>
    <PageMain>
      <template #title>
        <div class="flex items-center justify-between">
          通过 slot 设置标题
          <van-button size="mini">
            还可以放置自定义按钮
          </van-button>
        </div>
      </template>
      这里放页面内容
    </PageMain>
    <PageMain title="带展开功能" collaspe height="20vh">
      <h1 class="mt-0">
        Fantastic-mobile
      </h1>
      <img src="@/assets/images/logo.png">
    </PageMain>
  </PageLayout>
</template>
