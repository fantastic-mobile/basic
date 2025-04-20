<script setup lang="ts">
// 基于 SpinKit https://tobiasahlin.com/spinkit/
import 'spinkit/spinkit.min.css'

defineOptions({
  name: 'FmLoading',
})

withDefaults(
  defineProps<LoadingProps>(),
  {
    type: 'plane',
    size: 50,
  },
)

export interface LoadingProps {
  type?: 'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'
  size?: number
  text?: string
}
</script>

<template>
  <div class="fixed bottom-0 top-0 z-10010 w-full bg-black/50">
    <div class="absolute left-1/2 top-1/2 flex-col-center gap-4 -translate-x-1/2 -translate-y-1/2">
      <div class="flex-center" :style="{ '--sk-size': `${size}px`, '--sk-color': 'hsl(var(--primary))' }">
        <div v-if="type === 'plane'" class="sk-plane" />
        <div v-if="type === 'chase'" class="sk-chase">
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
        </div>
        <div v-if="type === 'bounce'" class="sk-bounce">
          <div class="sk-bounce-dot" />
          <div class="sk-bounce-dot" />
        </div>
        <div v-if="type === 'wave'" class="sk-wave">
          <div class="sk-wave-rect" />
          <div class="sk-wave-rect" />
          <div class="sk-wave-rect" />
          <div class="sk-wave-rect" />
          <div class="sk-wave-rect" />
        </div>
        <div v-if="type === 'pulse'" class="sk-pulse" />
        <div v-if="type === 'flow'" class="sk-flow">
          <div class="sk-flow-dot" />
          <div class="sk-flow-dot" />
          <div class="sk-flow-dot" />
        </div>
        <div v-if="type === 'swing'" class="sk-swing">
          <div class="sk-swing-dot" />
          <div class="sk-swing-dot" />
        </div>
        <div v-if="type === 'circle'" class="sk-circle">
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
          <div class="sk-circle-dot" />
        </div>
        <div v-if="type === 'circle-fade'" class="sk-circle-fade">
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
          <div class="sk-circle-fade-dot" />
        </div>
        <div v-if="type === 'grid'" class="sk-grid">
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
          <div class="sk-grid-cube" />
        </div>
        <div v-if="type === 'fold'" class="sk-fold">
          <div class="sk-fold-cube" />
          <div class="sk-fold-cube" />
          <div class="sk-fold-cube" />
          <div class="sk-fold-cube" />
        </div>
        <div v-if="type === 'wander'" class="sk-wander">
          <div class="sk-wander-cube" />
          <div class="sk-wander-cube" />
          <div class="sk-wander-cube" />
        </div>
      </div>
      <span v-if="text" class="text-sm text-primary">{{ text }}</span>
    </div>
  </div>
</template>
