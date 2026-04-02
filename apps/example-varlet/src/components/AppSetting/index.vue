<script setup lang="ts">
import { setSettings } from '@fantastic-mobile/settings'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import eventBus from '@/utils/eventBus'

defineOptions({
  name: 'AppSetting',
})

const appSettingsStore = useAppSettingsStore()
const settingsDefault = setSettings({})

const isShow = ref(false)

onMounted(() => {
  eventBus.on('global-app-setting-toggle', () => {
    isShow.value = !isShow.value
  })
})

const themeRadius = computed<number[]>({
  get() {
    return [appSettingsStore.settings.theme.radius]
  },
  set(value) {
    appSettingsStore.settings.theme.radius = value[0]
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
  copy(JSON.stringify(diffTwoObj(settingsDefault, appSettingsStore.settings), null, 2))
}

function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function diffTwoObj(originalObj: Record<string, any>, diffObj: Record<string, any>) {
  if (!isObject(originalObj) || !isObject(diffObj)) {
    return diffObj
  }
  const diff: Record<string, any> = {}
  for (const key in diffObj) {
    const originalValue = originalObj[key]
    const diffValue = diffObj[key]
    if (JSON.stringify(originalValue) !== JSON.stringify(diffValue)) {
      if (isObject(originalValue) && isObject(diffValue)) {
        const nestedDiff = diffTwoObj(originalValue, diffValue)
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff
        }
      }
      else {
        diff[key] = diffValue
      }
    }
  }
  return diff
}
</script>

<template>
  <FmModal v-model="isShow" title="应用配置" description="在生产环境中应关闭该模块" :footer="isSupported" :destroy-on-close="false" content-class="bg-[var(--g-bg)] transition-background-color">
    <div>
      <FmPageMain title="主题" class="m-0 mb-4 break-inside-avoid light:border-none" title-class="pb-0 border-none font-bold text-base" main-class="space-y-4">
        <div class="setting-item">
          <div class="label">
            颜色方案
          </div>
          <FmButtonGroup>
            <FmButton
              v-for="(item, index) in [
                { icon: 'i-ri:sun-line', value: 'light' },
                { icon: 'i-ri:moon-line', value: 'dark' },
                { icon: 'i-codicon:color-mode', value: '' },
              ]" :key="index" :variant="appSettingsStore.settings.theme.colorScheme === item.value ? 'default' : 'outline'" size="sm" :class="{ 'z-1': appSettingsStore.settings.theme.colorScheme === item.value }" @click="appSettingsStore.settings.theme.colorScheme = (item.value as any)"
            >
              <FmIcon :name="item.icon" />
            </FmButton>
          </FmButtonGroup>
        </div>
        <div class="setting-item">
          <div class="label">
            圆角
          </div>
          <FmSlider v-model="themeRadius" :min="0" :max="1" :step="0.25" class="w-1/2" />
        </div>
        <div class="setting-item">
          <div class="label">
            色弱模式
          </div>
          <FmSwitch v-model="appSettingsStore.settings.theme.colorAmblyopia" />
        </div>
      </FmPageMain>
      <FmPageMain title="页面" class="m-0 mb-4 break-inside-avoid light:border-none" title-class="pb-0 border-none font-bold text-base" main-class="space-y-4">
        <div class="setting-item">
          <div class="label">
            进度条
          </div>
          <FmSwitch v-model="appSettingsStore.settings.page.progress" />
        </div>
        <div class="setting-item">
          <div class="label">
            返回顶部
          </div>
          <FmSwitch v-model="appSettingsStore.settings.page.backTop" />
        </div>
      </FmPageMain>
      <FmPageMain title="版权" class="m-0 mb-4 break-inside-avoid light:border-none" title-class="pb-0 border-none font-bold text-base" main-class="space-y-4">
        <div class="setting-item">
          <div class="label">
            启用
          </div>
          <FmSwitch v-model="appSettingsStore.settings.copyright.enable" />
        </div>
        <div class="setting-item">
          <div class="label">
            日期
          </div>
          <FmInput v-model="appSettingsStore.settings.copyright.dates" :disabled="!appSettingsStore.settings.copyright.enable" />
        </div>
        <div class="setting-item">
          <div class="label">
            公司
          </div>
          <FmInput v-model="appSettingsStore.settings.copyright.company" :disabled="!appSettingsStore.settings.copyright.enable" />
        </div>
        <div class="setting-item">
          <div class="label">
            网址
          </div>
          <FmInput v-model="appSettingsStore.settings.copyright.website" :disabled="!appSettingsStore.settings.copyright.enable" />
        </div>
      </FmPageMain>
      <FmPageMain title="应用" class="m-0 mb-4 break-inside-avoid light:border-none" title-class="pb-0 border-none font-bold text-base" main-class="space-y-4">
        <div class="setting-item">
          <div class="label">
            启用权限
          </div>
          <FmSwitch v-model="appSettingsStore.settings.app.auth" />
        </div>
        <div class="setting-item">
          <div class="label">
            动态标题
          </div>
          <FmSwitch v-model="appSettingsStore.settings.app.dynamicTitle" />
        </div>
        <div class="setting-item">
          <div class="label">
            哀悼模式
          </div>
          <FmSwitch v-model="appSettingsStore.settings.app.rip" />
        </div>
      </FmPageMain>
    </div>
    <template #footer>
      <div class="w-full">
        <div class="text-sm/6 c-rose mb-2 px-4 py-2 text-center rounded-lg bg-rose/20">
          在此处调整配置只是临时生效，要想真正应用于项目，请点击「 复制配置 」按钮，并粘贴到 <code class="text-sm font-mono font-semibold px-[0.3rem] py-[0.2rem] rounded bg-muted relative">src/settings/index.ts</code> 文件中。
        </div>
        <FmButton class="w-full" @click="handleCopy">
          <FmIcon :name="copied ? 'i-tabler:clipboard-check' : 'i-tabler:clipboard'" class="size-5" />
          复制配置
        </FmButton>
      </div>
    </template>
  </FmModal>
</template>

<style scoped>
.setting-item {
  --uno: flex items-center justify-between gap-4;

  .label {
    --uno: flex items-center flex-shrink-0 gap-2 text-sm;
  }
}
</style>
