<script setup lang="ts">
definePage({
  meta: {
    title: '内建组件',
  },
})

const input = ref('')
const slideover = ref(false)
const tabList = ref(1)
const toggle = ref(false)
</script>

<template>
  <PageLayout navbar>
    <PageMain>
      PageMain 是最常用的页面组件，几乎所有页面都会使用到
    </PageMain>
    <PageMain title="Badge">
      <HBadge :value="true">
        <SvgIcon name="i-ri:notification-3-line" />
      </HBadge>
      <HBadge :value="99">
        <SvgIcon name="i-ri:notification-3-line" />
      </HBadge>
      <HBadge value="噢">
        <SvgIcon name="i-ri:notification-3-line" />
      </HBadge>
    </PageMain>
    <PageMain title="Button">
      <HButton>
        按钮
      </HButton>
      <HButton outline>
        按钮
      </HButton>
      <HButton disabled>
        按钮
      </HButton>
      <HButton disabled outline>
        按钮
      </HButton>
    </PageMain>
    <PageMain title="Input">
      <HInput v-model="input" />
    </PageMain>
    <PageMain title="Slideover">
      <HButton @click="slideover = true">
        打开
      </HButton>
      <HSlideover v-model="slideover" title="标题" :overlay="false">
        这里是 slideover 内容
      </HSlideover>
    </PageMain>
    <PageMain title="TabList">
      <HTabList
        v-model="tabList"
        :options="[
          { label: '标签1', value: 1 },
          { label: '标签2', value: 2 },
          { label: '标签3', value: 3 },
        ]"
      />
    </PageMain>
    <PageMain title="Toggle">
      <HToggle v-model="toggle" />
      <HToggle v-model="toggle" on-icon="ri:sun-line" off-icon="ri:moon-line" />
    </PageMain>
  </PageLayout>
</template>

<style lang="scss" scoped>
.page-main {
  :deep(.main-container) {
    --at-apply: flex items-center justify-center flex-1 gap-8;
  }
}
</style>
