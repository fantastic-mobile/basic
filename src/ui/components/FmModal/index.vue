<script setup lang="ts">
import type { ModalEmits, ModalProps } from '.'
import { VisuallyHidden } from 'reka-ui'
import { cn } from '@/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog'

defineOptions({
  name: 'FmModal',
})

const props = withDefaults(
  defineProps<ModalProps>(),
  {
    modelValue: false,
    loading: false,
    closable: true,
    center: false,
    border: true,
    overlay: true,
    overlayBlur: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    confirmButtonDisabled: false,
    confirmButtonLoading: false,
    header: true,
    footer: true,
    closeOnClickOverlay: true,
    closeOnPressEscape: true,
    destroyOnClose: true,
  },
)

const emits = defineEmits<ModalEmits>()

const slots = defineSlots<{
  header?: () => VNode
  default?: () => VNode
  footer?: () => VNode
}>()

const dialogHeaderRef = ref()
const dialogAreaRef = useTemplateRef('dialogAreaRef')

defineExpose({
  areaRef: dialogAreaRef,
})

const modalId = useId()
const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

const hasOpened = ref(false)
const isClosed = ref(true)

watch(() => isOpen.value, (value) => {
  isClosed.value = false
  if (value && !hasOpened.value) {
    hasOpened.value = true
  }
}, {
  immediate: true,
})

const forceMount = computed(() => !props.destroyOnClose && hasOpened.value)

watch(isOpen, (val) => {
  emits('update:modelValue', val)
  if (val) {
    emits('open')
  }
  else {
    emits('close')
  }
})

async function updateOpen(value: boolean) {
  if (value) {
    isOpen.value = value
    emits('open')
  }
  else {
    if (props.beforeClose) {
      await props.beforeClose(
        'close',
        () => {
          isOpen.value = value
          emits('close')
        },
      )
    }
    else {
      isOpen.value = value
      emits('close')
    }
  }
}

const isConfirmButtonLoading = ref(false)

async function onConfirm() {
  if (props.beforeClose) {
    isConfirmButtonLoading.value = true
    await props.beforeClose(
      'confirm',
      () => {
        isOpen.value = false
        emits('confirm')
      },
    )
    isConfirmButtonLoading.value = false
  }
  else {
    isOpen.value = false
    emits('confirm')
  }
}

async function onCancel() {
  if (props.beforeClose) {
    await props.beforeClose(
      'cancel',
      () => {
        isOpen.value = false
        emits('cancel')
      },
    )
  }
  else {
    isOpen.value = false
    emits('cancel')
  }
}

function handleFocusOutside(e: Event) {
  e.preventDefault()
  e.stopPropagation()
}

function handleClickOutside(e: Event) {
  if (!props.closeOnClickOverlay || (e.target as HTMLElement).dataset.modalId !== modalId) {
    e.preventDefault()
    e.stopPropagation()
  }
}

function handleEscapeKeyDown(e: KeyboardEvent) {
  if (!props.closeOnPressEscape) {
    e.preventDefault()
    e.stopPropagation()
  }
}

function handleAnimationEnd() {
  if (isOpen.value) {
    emits('opened')
  }
  else {
    emits('closed')
    isClosed.value = true
  }
}
</script>

<template>
  <Dialog :modal="false" :open="isOpen" @update:open="updateOpen">
    <DialogContent
      :modal-id="modalId"
      :open="isOpen"
      :closable="props.closable"
      :overlay="props.overlay"
      :overlay-blur="props.overlayBlur"
      :force-mount="forceMount"
      :class="cn('left-0 right-0 top-1/2 flex flex-col p-0 gap-0 mx-auto h-[calc-size(auto,size)] w-[90vw] min-h-auto max-h-[90vh] translate-x-0 -translate-y-1/2', props.class, {
        hidden: isClosed,
      })"
      @open-auto-focus="handleFocusOutside"
      @close-auto-focus="handleFocusOutside"
      @focus-outside="handleFocusOutside"
      @pointer-down-outside="handleClickOutside"
      @interact-outside="handleClickOutside"
      @escape-key-down="handleEscapeKeyDown"
      @animation-end="handleAnimationEnd"
    >
      <DialogHeader
        v-if="header" ref="dialogHeaderRef" :class="cn('p-4', props.headerClass, {
          'border-b': props.border,
        })"
      >
        <VisuallyHidden v-if="!!slots.header">
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden>
        <slot name="header">
          <DialogTitle class="flex-center justify-start gap-x-2" :class="{ 'justify-center': props.center }">
            <FmIcon
              v-if="props.icon" :name="{
                info: 'i-ant-design:info-circle-filled',
                success: 'i-ant-design:check-circle-filled',
                warning: 'i-ant-design:exclamation-circle-filled',
                error: 'i-ant-design:close-circle-filled',
              }[props.icon]" class="size-6" :class="{
                'text-blue-600 dark:text-blue-400': props.icon === 'info',
                'text-green-600 dark:text-green-400': props.icon === 'success',
                'text-yellow-600 dark:text-yellow-400': props.icon === 'warning',
                'text-red-600 dark:text-red-400': props.icon === 'error',
              }"
            />
            {{ title }}
          </DialogTitle>
          <DialogDescription class="text-left empty:hidden" :class="{ 'text-center': props.center }">
            {{ description }}
          </DialogDescription>
        </slot>
      </DialogHeader>
      <FmScrollArea v-if="!!slots.default" ref="dialogAreaRef" class="flex-1">
        <div :class="cn('min-h-40 p-4', props.contentClass)">
          <slot />
        </div>
        <div v-show="props.loading" class="absolute inset-0 z-1000 size-full flex-center bg-popover/75">
          <FmIcon name="i-line-md:loading-twotone-loop" class="size-10" />
        </div>
      </FmScrollArea>
      <DialogFooter
        v-if="footer" :class="cn('p-2', props.footerClass, {
          'border-t': props.border,
        })"
      >
        <slot name="footer">
          <FmButton v-if="showCancelButton" variant="outline" class="w-full" @click="onCancel">
            {{ cancelButtonText }}
          </FmButton>
          <FmButton v-if="showConfirmButton" :disabled="confirmButtonDisabled" :loading="confirmButtonLoading || isConfirmButtonLoading" class="w-full" @click="onConfirm">
            {{ confirmButtonText }}
          </FmButton>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
