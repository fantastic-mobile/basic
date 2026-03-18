<script setup lang="ts">
import type { ModalEmits, ModalProps } from '.'
import { VisuallyHidden } from 'reka-ui'
import { cn } from '../../utils'
import FmButton from '../button/index.vue'
import FmIcon from '../icon/index.vue'
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
    zIndex: 2000,
    loading: false,
    closable: true,
    center: false,
    border: true,
    alignCenter: false,
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
    openAutoFocus: false,
  },
)

const emits = defineEmits<ModalEmits>()

const slots = defineSlots<{
  header?: () => VNode
  default?: () => VNode
  footer?: () => VNode
}>()

const dialogContentRef = useTemplateRef('dialogContentRef')
const dialogRef = ref()

const modalId = shallowRef(props.id ?? useId())
const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

const hasOpened = ref(false)
const isClosed = ref(true)

watch(isOpen, (val) => {
  emits('update:modelValue', val)
  if (val) {
    emits('open')
  }
  else {
    emits('close')
  }
  isClosed.value = false
  if (val && !hasOpened.value) {
    hasOpened.value = true
  }
}, {
  immediate: true,
})

const forceMount = computed(() => !props.destroyOnClose && hasOpened.value)

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      if (dialogContentRef.value) {
        dialogRef.value = dialogContentRef.value.el?.$el
      }
    })
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

function handleOpenAutoFocus(e: Event) {
  if (!props.openAutoFocus) {
    e.preventDefault()
    e.stopPropagation()
  }
}

function handleFocusOutside(e: Event) {
  e.preventDefault()
  e.stopPropagation()
}

function handleClickOutside(e: Event) {
  if (!props.closeOnClickOverlay || (e.target as HTMLElement).dataset.modalId !== modalId.value) {
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
  <Dialog :open="isOpen" @update:open="updateOpen">
    <DialogContent
      ref="dialogContentRef"
      :modal-id="modalId"
      :open="isOpen"
      :z-index="props.zIndex"
      :closable="props.closable"
      :overlay="props.overlay"
      :overlay-blur="props.overlayBlur"
      :force-mount="forceMount"
      :class="cn('z-2000 top-0 sm:top-[5vh] translate-y-0 flex flex-col p-0 gap-0 mx-auto overflow-hidden max-w-full h-[calc-size(auto,size)] min-h-full max-h-full sm:min-h-auto sm:max-h-[90vh]', props.class, {
        'top-1/2 -translate-y-1/2 min-h-auto sm:top-1/2 sm:-translate-y-1/2': props.alignCenter,
        'hidden': isClosed,
      })"
      @open-auto-focus="handleOpenAutoFocus"
      @close-auto-focus="handleFocusOutside"
      @focus-outside="handleFocusOutside"
      @pointer-down-outside="handleClickOutside"
      @interact-outside="handleClickOutside"
      @escape-key-down="handleEscapeKeyDown"
      @animation-end="handleAnimationEnd"
    >
      <DialogHeader
        v-if="header" :class="cn('p-4', props.headerClass, {
          'border-b': props.border,
        })"
      >
        <VisuallyHidden v-if="!!slots.header">
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden>
        <slot name="header">
          <DialogTitle class="flex-center gap-x-2 sm:justify-start" :class="{ 'sm:justify-center': props.center }">
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
            {{ typeof title === 'function' ? title() : title }}
          </DialogTitle>
          <DialogDescription :class="cn('text-center md:text-start empty:hidden', { 'md:text-center': props.center })">
            {{ typeof description === 'function' ? description() : description }}
          </DialogDescription>
        </slot>
      </DialogHeader>
      <VisuallyHidden v-else>
        <DialogTitle />
        <DialogDescription />
      </VisuallyHidden>
      <div v-if="!!slots.default" :class="cn('relative flex-1 min-h-40 p-4 overflow-y-auto', props.contentClass)">
        <slot />
      </div>
      <div v-show="props.loading" class="bg-popover/75 flex-center size-full inset-0 absolute z-1000">
        <FmIcon name="i-line-md:loading-twotone-loop" class="size-10" />
      </div>
      <DialogFooter
        v-if="footer" :class="cn('p-3 gap-y-2', props.footerClass, {
          'md:justify-center': props.center,
          'border-t': props.border,
        })"
      >
        <slot name="footer">
          <FmButton v-if="showCancelButton" variant="outline" @click="onCancel">
            {{ typeof cancelButtonText === 'function' ? cancelButtonText() : cancelButtonText }}
          </FmButton>
          <FmButton v-if="showConfirmButton" :disabled="confirmButtonDisabled" :loading="confirmButtonLoading || isConfirmButtonLoading" @click="onConfirm">
            {{ typeof confirmButtonText === 'function' ? confirmButtonText() : confirmButtonText }}
          </FmButton>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
