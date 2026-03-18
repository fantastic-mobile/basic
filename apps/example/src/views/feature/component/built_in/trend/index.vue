<script setup lang="ts">
definePage({
  meta: {
    title: '趋势符号',
  },
})
</script>

<template>
  <AppPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              Default 风格
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="12.3%" />
              <FmTrend value="12.3%" type="down" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              Filled 风格
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="+12.3%" variant="filled" />
              <FmTrend value="-12.3%" variant="filled" type="down" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              Soft 风格
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="12.3%" variant="soft" />
              <FmTrend value="12.3%" variant="soft" type="down" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              Outline 风格
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="12.3%" variant="outline" />
              <FmTrend value="12.3%" variant="outline" type="down" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              尺寸对比
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="12.3%" size="small" />
              <FmTrend value="12.3%" size="medium" />
              <FmTrend value="12.3%" size="large" />
            </div>
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="颜色反转">
        <div class="space-y-4">
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              Reverse 模式（用于成本、错误率等下降是好事的场景）
            </p>
            <div class="flex gap-2 items-center">
              <FmTrend value="错误率 -12.3%" type="down" reverse variant="filled" />
              <FmTrend value="成本节省 15%" type="down" reverse variant="soft" prefix="↓" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              不同风格对比
            </p>
            <div class="flex flex-wrap gap-2 items-center">
              <FmTrend value="12.3%" reverse />
              <FmTrend value="12.3%" reverse variant="filled" />
              <FmTrend value="12.3%" reverse variant="soft" />
              <FmTrend value="12.3%" reverse variant="outline" />
            </div>
          </div>
        </div>
      </FmPageMain>
      <FmPageMain title="前缀后缀">
        <div class="space-y-4">
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              前缀和后缀
            </p>
            <div class="flex flex-wrap gap-2 items-center">
              <FmTrend value="12.3" prefix="$" variant="soft" />
              <FmTrend value="12.3" suffix="%" variant="soft" />
              <FmTrend value="1,234" prefix="¥" variant="outline" />
              <FmTrend value="45.6" suffix="kg" variant="outline" />
            </div>
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-2">
              组合使用
            </p>
            <div class="flex flex-wrap gap-2 items-center">
              <FmTrend value="2,345" prefix="$" suffix=".00" variant="filled" />
              <FmTrend value="98.5" suffix="%" variant="filled" />
              <FmTrend value="+123" prefix="↑" variant="soft" />
              <FmTrend value="-45" prefix="↓" variant="soft" type="down" />
            </div>
          </div>
        </div>
      </FmPageMain>
    </div>
  </AppPageLayout>
</template>
