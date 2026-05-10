<script setup lang="ts">
definePage({
  meta: {
    title: '单选组',
  },
})

const value1 = ref('comfortable')
const options1 = [
  { label: '默认', value: 'default' },
  { label: '舒适', value: 'comfortable' },
  { label: '紧凑', value: 'compact' },
]

const value2 = ref('growth')
const options2 = [
  {
    label: '创业版',
    value: 'starter',
    description: '适合 1-10 人小团队，保留核心能力。',
  },
  {
    label: '成长版',
    value: 'growth',
    description: '适合多角色协作，支持审批与审计流程。',
  },
  {
    label: '企业版',
    value: 'enterprise',
    description: '高级安全策略与 SSO 即将开放。',
    disabled: true,
  },
]
const currentLabel2 = computed(() =>
  options2.find(option => option.value === value2.value)?.label ?? '',
)

const value3 = ref('balanced')
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
const currentLabel3 = computed(() =>
  options3.find(option => option.value === value3.value)?.label ?? '',
)
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <div class="gap-4 grid">
          <FmRadioGroup v-model="value1" :options="options1" />
          <FmRadioGroup v-model="value1" :options="options1" class="flex" />
          <div class="text-sm text-muted-foreground">
            当前值：{{ value1 }}
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="带描述和禁用态">
        <div class="gap-4 grid">
          <FmRadioGroup v-model="value2" :options="options2" />
          <div class="text-sm text-muted-foreground">
            已选套餐：{{ currentLabel2 }}
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="自定义选项内容">
        <div class="gap-4 grid">
          <FmRadioGroup
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
          </FmRadioGroup>
          <div class="text-sm text-muted-foreground">
            当前模式：{{ currentLabel3 }}
          </div>
        </div>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
