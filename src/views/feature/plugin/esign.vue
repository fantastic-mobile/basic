<script setup lang="ts">
import { showNotify } from 'vant'
import VueEsign from 'vue-esign'

definePage({
  meta: {
    title: '电子签名',
  },
})

const show = ref(false)

const esignRef = useTemplateRef<any>('esignRef')
const options = ref({
  lineWidth: 6,
  lineColor: '#000000',
  bgColor: '#f0f0f0',
  isCrop: false,
})
const result = ref('')

function handleReset() {
  esignRef.value.reset()
  nextTick(() => {
    options.value.bgColor = '#f0f0f0'
  })
}
function handleGenerate() {
  esignRef.value.generate().then((res: string) => {
    result.value = res
  }).catch(() => {
    showNotify({ message: '画板为空，无法生成图片' })
  })
}
function handleDownload() {
  esignRef.value.generate().then((res: string) => {
    const image = new Image()
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = () => {
      const a = document.createElement('a')
      const event = new MouseEvent('click')
      a.download = Date.parse(new Date().toString()).toString()
      a.href = image.src
      a.dispatchEvent(event)
    }
    image.src = res
  })
}
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <template #navbar-end>
      <div class="h-full flex-center px-1" @click="show = true">
        <FmIcon name="i-mdi:information" class="text-4" />
      </div>
      <van-action-sheet v-model:show="show" teleport="body">
        <div class="whitespace-break-spaces p-4 space-y-2">
          <div>
            「插件」栏目下均为第三方插件的演示页面，框架默认并不包含这些插件。如需使用，请先安装对应插件。
          </div>
          <div>安装命令：</div>
          <div class="space-x-2">
            <van-tag type="primary" plain>
              pnpm add vue-esign
            </van-tag>
          </div>
        </div>
      </van-action-sheet>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <FmPageMain class="m-0">
        <VueEsign ref="esignRef" v-model:bg-color="options.bgColor" :width="800" :height="400" :is-crop="options.isCrop" :line-width="options.lineWidth" :line-color="options.lineColor" />
        <div class="mt-2 space-x-2">
          <FmButton @click="handleReset">
            清空画板
          </FmButton>
          <FmButton @click="handleGenerate">
            生成图片
          </FmButton>
          <FmButton @click="handleDownload">
            下载图片
          </FmButton>
        </div>
      </FmPageMain>
      <FmPageMain v-if="result" class="m-0">
        <img :src="result" class="aspect-ratio-[800/400] w-full">
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
