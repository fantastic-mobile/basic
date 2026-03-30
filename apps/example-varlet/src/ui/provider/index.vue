<script setup lang="ts">
import { Locale, StyleProvider, Themes } from '@varlet/ui'

const appSettingsStore = useAppSettingsStore()

watch(() => appSettingsStore.currentColorScheme, (val) => {
  if (val === 'light') {
    StyleProvider(null)
  }
  else {
    StyleProvider(Themes.dark)
  }
})
</script>

<template>
  <VarLocaleProvider locale="zh-CN" :messages="Locale.zhCN" class="min-h-vh supports-[(min-height:100dvh)]:min-h-dvh">
    <slot />
  </VarLocaleProvider>
</template>
