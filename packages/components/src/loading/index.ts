import type { App, VNode } from 'vue'
import type { LoadingProps } from './index.vue'
import { createVNode, render } from 'vue'
import FmLoading from './index.vue'

let instance: App<Element> | null = null
let mountNode: HTMLElement | null = null
let vnode: VNode | null = null

export function useFmLoading(options: LoadingProps) {
  const visible = ref(true)
  const currentInstance = getCurrentInstance()

  const close = () => {
    visible.value = false
  }

  const cleanup = () => {
    if (vnode) {
      render(null, mountNode!)
      vnode = null
    }
    if (mountNode && mountNode.parentNode) {
      mountNode.parentNode.removeChild(mountNode)
    }
    mountNode = null
    instance = null
  }

  // 如果已经有实例在运行，先关闭它
  if (instance && mountNode) {
    cleanup()
  }

  // 创建容器
  mountNode = document.createElement('div')

  // 创建 VNode
  vnode = createVNode(FmLoading, {
    ...options,
    'modelValue': visible.value,
    'onUpdate:modelValue': (val: boolean) => {
      visible.value = val
    },
    'onAfterLeave': cleanup,
  })

  // 继承主应用的上下文
  if (currentInstance && currentInstance.appContext) {
    vnode.appContext = currentInstance.appContext
  }

  // 渲染到容器
  render(vnode, mountNode)

  // 挂载到 body
  document.body.appendChild(mountNode)

  // 监听 visible 变化，自动重新渲染
  watch(visible, (newVal) => {
    if (vnode) {
      vnode.component!.props.modelValue = newVal
    }
  })

  // 监听组件卸载，自动清理
  if (currentInstance) {
    onUnmounted(() => {
      cleanup()
    })
  }

  return {
    close,
  }
}
