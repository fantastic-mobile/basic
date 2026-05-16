<template>
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
</template>
