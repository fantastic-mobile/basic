export {}

declare global {
  const computed: typeof import('vue').computed
  const createVNode: typeof import('vue').createVNode
  const defineComponent: typeof import('vue').defineComponent
  const getCurrentInstance: typeof import('vue').getCurrentInstance
  const h: typeof import('vue').h
  const isVNode: typeof import('vue').isVNode
  const nextTick: typeof import('vue').nextTick
  const onBeforeRouteLeave: typeof import('vue-router').onBeforeRouteLeave
  const onMounted: typeof import('vue').onMounted
  const onUnmounted: typeof import('vue').onUnmounted
  const ref: typeof import('vue').ref
  const render: typeof import('vue').render
  const shallowRef: typeof import('vue').shallowRef
  const toRef: typeof import('vue').toRef
  const useAppSettingsStore: () => any
  const useId: typeof import('vue').useId
  const useRoute: typeof import('vue-router').useRoute
  const useSlots: typeof import('vue').useSlots
  const useTemplateRef: typeof import('vue').useTemplateRef
  const watch: typeof import('vue').watch
  const watchEffect: typeof import('vue').watchEffect
}

declare global {
  type Component = import('vue').Component
  type ComponentPublicInstance<T = any> = import('vue').ComponentPublicInstance<T>
  type Slot = import('vue').Slot
  type Slots = import('vue').Slots
  type VNode = import('vue').VNode
}
