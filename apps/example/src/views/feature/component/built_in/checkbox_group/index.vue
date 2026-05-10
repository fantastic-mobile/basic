<script setup lang="ts">
definePage({
  meta: {
    title: '复选框组',
  },
})

const value1 = ref(['music'])
const options1 = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]
const currentText1 = computed(() =>
  options1
    .filter(option => value1.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)

const value2 = ref(['dashboard', 'report'])
const options2 = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
    disabled: true,
  },
]
const currentText2 = computed(() =>
  options2
    .filter(option => value2.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)

const value3 = ref(['focus', 'balanced'])
const options3 = [
  {
    label: '专注模式',
    value: 'focus',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
const currentText3 = computed(() =>
  options3
    .filter(option => value3.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)

const value4 = ref(['dashboard'])
const options4 = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]
const currentText4 = computed(() =>
  options4
    .filter(option => value4.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <div class="gap-4 grid">
          <FmCheckboxGroup v-model="value1" :options="options1" />
          <FmCheckboxGroup v-model="value1" :options="options1" class="flex" />
          <div class="text-sm text-muted-foreground">
            当前值：{{ currentText1 }}
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="带描述和禁用态">
        <div class="gap-4 grid">
          <FmCheckboxGroup v-model="value2" :options="options2" />
          <div class="text-sm text-muted-foreground">
            当前值：{{ currentText2 }}
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="自定义选项内容">
        <div class="gap-4 grid">
          <FmCheckboxGroup
            v-model="value3"
            :options="options3"
            class="gap-1"
            option-class="rounded-xl border border-transparent px-1 py-1"
          >
            <template #option="{ option, checked, disabled }">
              <div
                class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between" :class="[
                  checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
                  disabled && 'opacity-60',
                ]"
              >
                <div class="gap-1 grid min-w-0">
                  <div class="text-sm font-medium truncate">
                    {{ option.label }}
                  </div>
                  <div
                    v-if="option.description"
                    class="text-xs text-muted-foreground leading-5"
                  >
                    {{ option.description }}
                  </div>
                </div>
                <span
                  class="text-xs font-medium shrink-0" :class="[
                    checked ? 'text-primary' : 'text-muted-foreground',
                  ]"
                >
                  {{ checked ? '已选中' : '可选择' }}
                </span>
              </div>
            </template>
          </FmCheckboxGroup>
          <div class="text-sm text-muted-foreground">
            当前模式：{{ currentText3 }}
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="最少 / 最多选择">
        <div class="gap-4 grid">
          <FmCheckboxGroup
            v-model="value4"
            :options="options4"
            :min="1"
            :max="2"
          />
          <div class="text-sm text-muted-foreground">
            当前值：{{ currentText4 }}
          </div>
          <div class="text-xs text-muted-foreground leading-5">
            已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
          </div>
        </div>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
