<script setup lang="ts">
import type { FieldProps, PickerOption, PickerProps, PopupProps } from 'vant'

defineOptions({
  name: 'VanFieldPicker',
})

const props = defineProps<{
  label?: FieldProps['label']
  name?: FieldProps['name']
  id?: FieldProps['id']
  size?: FieldProps['size']
  placeholder?: FieldProps['placeholder']
  border?: FieldProps['border']
  colon?: FieldProps['colon']
  required?: FieldProps['required']
  center?: FieldProps['center']
  arrowDirection?: FieldProps['arrowDirection']
  labelClass?: FieldProps['labelClass']
  labelWidth?: FieldProps['labelWidth']
  labelAlign?: FieldProps['labelAlign']
  leftIcon?: FieldProps['leftIcon']
  rightIcon?: FieldProps['rightIcon']
  rules?: FieldProps['rules']
  round?: PopupProps['round']
  columns?: PickerOption[]
}>()

const value = defineModel<string | number>()
const valuePicker = ref<any>([value.value])
const valueStr = computed(() => props.columns?.find((item: any) => item.value === value.value)?.text)

const showPicker = ref(false)
</script>

<template>
  <van-field :id :model-value="valueStr" :label :name :size :placeholder :border :colon :required :center :arrow-direction :label-class :label-width :label-align :left-icon :right-icon :rules is-link readonly @click="showPicker = true" />
  <van-popup v-model:show="showPicker" :round position="bottom" teleport="body">
    <van-picker :model-value="valuePicker" :columns @confirm="({ selectedOptions }) => { value = selectedOptions[0]?.value; showPicker = false }" @cancel="showPicker = false" />
  </van-popup>
</template>
