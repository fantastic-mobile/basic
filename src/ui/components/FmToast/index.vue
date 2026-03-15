<script setup lang="ts">
import { Toaster } from './sonner'
import 'vue-sonner/style.css'

defineOptions({
  name: 'FmToast',
})

const appSettingsStore = useAppSettingsStore()
</script>

<template>
  <Toaster position="top-center" :theme="appSettingsStore.currentColorScheme" />
</template>
