<script setup lang="ts">
import { Locale } from '@nutui/nutui'
import zhCN from '@nutui/nutui/dist/packages/locale/lang/zh-CN'

const appSettingsStore = useAppSettingsStore()

Locale.use('zh-CN', zhCN)
</script>

<template>
  <NutConfigProvider :theme="appSettingsStore.currentColorScheme" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </NutConfigProvider>
</template>
