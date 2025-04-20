<script setup lang="ts">
import settingsDefault from '@/settings.default'
import useSettingsStore from '@/store/modules/settings'
import eventBus from '@/utils/eventBus'
import { diffTwoObj } from '@/utils/object'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'

defineOptions({
  name: 'FmAppSetting',
})

const settingsStore = useSettingsStore()

const isShow = ref(false)

onMounted(() => {
  eventBus.on('global-app-setting-toggle', () => {
    isShow.value = !isShow.value
  })
})

const appRadius = computed<number[]>({
  get() {
    return [settingsStore.settings.app.radius]
  },
  set(value) {
    settingsStore.settings.app.radius = value[0]
  },
})

const { copy, copied, isSupported } = useClipboard()

watch(copied, (val) => {
  if (val) {
    toast.success('复制成功，请粘贴到 src/settings.ts 文件中！', {
      position: 'top-center',
    })
  }
})

function handleCopy() {
  copy(JSON.stringify(diffTwoObj(settingsDefault, settingsStore.settings), null, 2))
}
</script>

<template>
  <FmDrawer v-model="isShow" title="应用配置" description="在生产环境中应关闭该模块" :footer="isSupported">
    <div class="rounded-2 bg-rose/20 px-4 py-2 text-sm/6 c-rose">
      应用配置可实时预览效果，但只是临时生效，要想真正应用于项目，可以点击下方的「复制配置」按钮，并将配置粘贴到 src/settings.ts 文件中。
    </div>
    <div>
      <FmDivider>颜色主题风格</FmDivider>
      <div class="flex items-center justify-center pb-4">
        <FmTabs
          v-model="settingsStore.settings.app.colorScheme"
          :list="[
            { icon: 'i-ri:sun-line', label: '明亮', value: 'light' },
            { icon: 'i-ri:moon-line', label: '暗黑', value: 'dark' },
            { icon: 'i-codicon:color-mode', label: '系统', value: '' },
          ]"
          class="w-60"
        />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          圆角系数
        </div>
        <FmSlider v-model="appRadius" :min="0" :max="1" :step="0.25" class="w-1/2" />
      </div>
    </div>
    <div>
      <FmDivider>底部版权</FmDivider>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          是否启用
        </div>
        <FmSwitch v-model="settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          日期
        </div>
        <FmInput v-model="settingsStore.settings.copyright.dates" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          公司
        </div>
        <FmInput v-model="settingsStore.settings.copyright.company" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          网址
        </div>
        <FmInput v-model="settingsStore.settings.copyright.website" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          备案
        </div>
        <FmInput v-model="settingsStore.settings.copyright.beian" :disabled="!settingsStore.settings.copyright.enable" />
      </div>
    </div>
    <div>
      <FmDivider>其它</FmDivider>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          是否启用权限
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enablePermission" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          载入进度条
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enableProgress" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          哀悼模式
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enableMournMode" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          色弱模式
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enableColorAmblyopiaMode" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          返回顶部
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enableBackTop" />
      </div>
      <div class="flex items-center justify-between gap-4 rounded-2 px-4 py-2">
        <div class="flex flex-shrink-0 items-center gap-2 text-sm">
          动态标题
        </div>
        <FmSwitch v-model="settingsStore.settings.app.enableDynamicTitle" />
      </div>
    </div>
    <template #footer>
      <FmButton class="w-full" @click="handleCopy">
        <FmIcon name="i-ep:document-copy" />
        复制配置
      </FmButton>
    </template>
  </FmDrawer>
</template>
