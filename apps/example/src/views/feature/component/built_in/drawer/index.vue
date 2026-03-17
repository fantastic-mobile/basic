<script setup lang="ts">
definePage({
  meta: {
    title: '抽屉',
  },
})

const drawer = ref(false)

const drawerInfo = ref({
  side: 'right' as const,
  closable: true,
  header: true,
  footer: true,
  loading: false,
})
watch(() => drawerInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      drawerInfo.value.loading = false
    }, 3000)
  }
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <FmButton @click="drawer = true">
        打开
      </FmButton>
      <FmDrawer v-model="drawer" title="标题" description="这里是一段描述介绍" :side="drawerInfo.side" :closable="drawerInfo.closable" :header="drawerInfo.header" :footer="drawerInfo.footer" :loading="drawerInfo.loading">
        <div class="flex-start-center flex-wrap gap-2">
          <FmSelect
            v-model="drawerInfo.side" :options="[
              { label: '左侧', value: 'left' },
              { label: '右侧', value: 'right' },
              { label: '顶部', value: 'top' },
              { label: '底部', value: 'bottom' },
            ]" class="w-full"
          />
          <FmButton :variant="drawerInfo.closable ? 'default' : 'outline'" class="w-full" @click="drawerInfo.closable = !drawerInfo.closable">
            关闭按钮
          </FmButton>
          <FmButton :variant="drawerInfo.header ? 'default' : 'outline'" class="w-full" @click="drawerInfo.header = !drawerInfo.header">
            头部区域
          </FmButton>
          <FmButton :variant="drawerInfo.footer ? 'default' : 'outline'" class="w-full" @click="drawerInfo.footer = !drawerInfo.footer">
            尾部区域
          </FmButton>
          <FmButton variant="outline" class="w-full" @click="drawerInfo.loading = true">
            显示加载中
          </FmButton>
        </div>
      </FmDrawer>
    </FmPageMain>
  </FmPageLayout>
</template>
