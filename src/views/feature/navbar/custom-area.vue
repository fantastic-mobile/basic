<script setup lang="ts">
import { showToast } from 'vant'

definePage({
  meta: {
    title: '自定义区域',
  },
})

const checked = ref(false)

const show = ref(false)
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
]
function onSelect(item: any) {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false
  showToast(item.name)
}
</script>

<template>
  <PageLayout navbar>
    <template #navbar-start>
      <van-switch v-model="checked" size="16px" />
    </template>
    <template #navbar-end>
      <van-button size="small" @click="show = true">
        操作按钮
      </van-button>
      <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>
        Switch: {{ checked }}
      </div>
      <van-button @click="$router.back()">
        返回
      </van-button>
    </div>
  </PageLayout>
</template>
