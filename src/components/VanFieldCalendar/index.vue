<script setup lang="ts">
import type { CalendarProps, FieldProps } from 'vant'
import dayjs from '@/utils/dayjs'

defineOptions({
  name: 'VanFieldCalendar',
})

const props = withDefaults(
  defineProps<{
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
    color?: CalendarProps['color']
    minDate?: CalendarProps['minDate']
    maxDate?: CalendarProps['maxDate']
    formatter?: CalendarProps['formatter']
    showConfirm?: CalendarProps['showConfirm']
    confirmText?: CalendarProps['confirmText']
    firstDayOfWeek?: CalendarProps['firstDayOfWeek']
    round?: CalendarProps['round']
    format?: string
    valueFormat?: string
  }>(),
  {
    format: 'YYYY-MM-DD',
    valueFormat: '',
  },
)

const value = defineModel<string>()
const valueStr = computed(() => value.value && dayjs(value.value).format(props.format))
const valueDate = computed(() => dayjs(value.value).toDate())
const showCalendar = ref(false)

function onConfirm(date: Date) {
  value.value = dayjs(date).format(props.valueFormat)
  showCalendar.value = false
}
</script>

<template>
  <van-field :id :model-value="valueStr" :label :name :size :placeholder :border :colon :required :center :arrow-direction :label-class :label-width :label-align :left-icon :right-icon :rules is-link readonly @click="showCalendar = true" />
  <van-calendar v-model:show="showCalendar" :color :min-date :max-date :default-date="valueDate" :formatter :show-confirm :confirm-text :first-day-of-week :round teleport="body" @confirm="onConfirm" />
</template>
