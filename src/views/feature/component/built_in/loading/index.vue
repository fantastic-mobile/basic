<script setup lang="ts">
import { loadingHide, loadingShow } from '@/ui/components/FmLoading'

definePage({
  meta: {
    title: '加载遮罩',
  },
})

const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref(50)
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  loadingShow({
    type: type.value,
    size: size.value,
    text: text.value,
  })
  setTimeout(() => {
    loadingHide()
  }, 2000)
}
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <VanForm>
        <VanCellGroup>
          <VanFieldPicker
            v-model="type"
            label="类型"
            :columns="[
              { text: 'Plane', value: 'plane' },
              { text: 'Chase', value: 'chase' },
              { text: 'Bounce', value: 'bounce' },
              { text: 'Wave', value: 'wave' },
              { text: 'Pulse', value: 'pulse' },
              { text: 'Flow', value: 'flow' },
              { text: 'Swing', value: 'swing' },
              { text: 'Circle', value: 'circle' },
              { text: 'Circle Fade', value: 'circle-fade' },
              { text: 'Grid', value: 'grid' },
              { text: 'Fold', value: 'fold' },
              { text: 'Wander', value: 'wander' },
            ]"
          />
          <VanField label="尺寸">
            <template #input>
              <VanSlider v-model="size" :min="20" :max="200" :step="10" />
            </template>
          </VanField>
          <VanField v-model="text" label="提示文字" />
        </VanCellGroup>
      </VanForm>
      <FmButton @click="loading">
        加载 Loading（演示控制在 2 秒后关闭）
      </FmButton>
    </FmPageMain>
  </FmPageLayout>
</template>
