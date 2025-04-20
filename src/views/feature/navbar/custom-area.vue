<script setup lang="ts">
import { showToast } from 'vant'

definePage({
  meta: {
    title: '自定义区域',
  },
})

const router = useRouter()

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
  <FmPageLayout navbar>
    <template #navbar-start>
      <FmSwitch v-model="checked" size="16px" />
    </template>
    <template #navbar-end>
      <FmButton size="sm" @click="show = true">
        操作按钮
      </FmButton>
      <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>
        Switch: {{ checked }}
      </div>
      <FmButton @click="router.back()">
        返回
      </FmButton>
    </div>
  </FmPageLayout>
</template>
