<script setup lang="ts">
definePage({
  meta: {
    title: '滚动区域',
  },
})

const scrollbar = ref(true)
const mask = ref(false)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <FmPageMain>
      <div class="flex-col-start gap-4">
        <div class="flex-col-start gap-4">
          <div class="flex-center-start gap-4">
            <div class="text-sm">
              显示滚动条
            </div>
            <FmSwitch v-model="scrollbar" />
          </div>
          <div class="flex-center-start gap-4">
            <div class="text-sm">
              显示遮罩
            </div>
            <FmSwitch v-model="mask" />
          </div>
        </div>
        <FmScrollArea :scrollbar :mask class="h-72 w-full border rounded-md">
          <div v-for="tag in 20" :key="tag" class="p-4 text-sm">
            {{ tag }}
          </div>
        </FmScrollArea>
        <FmScrollArea horizontal :scrollbar :mask class="w-full border rounded-md">
          <div class="flex-center-start">
            <div v-for="tag in 20" :key="tag" class="h-16 w-16 flex-center text-sm">
              {{ tag }}
            </div>
          </div>
        </FmScrollArea>
      </div>
    </FmPageMain>
  </FmPageLayout>
</template>
