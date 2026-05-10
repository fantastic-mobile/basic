<script setup lang="ts">
definePage({
  meta: {
    title: '复选框',
  },
})

const checked1 = ref(false)
const checked2 = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <div class="flex gap-4">
          <FmCheckbox v-model="checked1">
            同意协议
          </FmCheckbox>
        </div>
      </FmPageMain>
      <FmPageMain title="半选状态">
        <FmCheckbox v-model="checked2">
          部分选中
        </FmCheckbox>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
