<script setup lang="ts">
import type { SelectLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SelectLabel } from 'reka-ui'
import { cn } from '@/utils'

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <SelectLabel :class="cn('py-1.5 pe-8 ps-2 text-sm font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
