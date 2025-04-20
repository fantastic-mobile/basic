<script setup lang="ts">
definePage({
  meta: {
    title: '趋势符号',
  },
})
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <div class="flex flex-col gap-2">
          <FmTrend value="12.3" />
          <FmTrend value="12.3" type="down" />
        </div>
      </FmPageMain>
      <FmPageMain title="颜色反转">
        <div class="flex flex-col gap-2">
          <FmTrend value="12.3" reverse />
          <FmTrend value="12.3" type="down" reverse />
        </div>
      </FmPageMain>
      <FmPageMain title="前缀后缀">
        <div class="flex flex-col gap-2">
          <FmTrend value="12.3" prefix="$" />
          <FmTrend value="12.3" suffix="%" />
        </div>
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
