<script setup lang="ts">
import { Locale } from 'vant'
import zhCN from 'vant/es/locale/lang/zh-CN'

const appSettingsStore = useAppSettingsStore()

Locale.use('zh-CN', zhCN)
</script>

<template>
  <VanConfigProvider :theme="appSettingsStore.currentColorScheme" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </VanConfigProvider>
</template>
