<script setup lang="ts">
definePage({
  meta: {
    title: 'Trend',
  },
})
</script>

<template>
  <PageLayout navbar>
    <PageMain>
      标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外
    </PageMain>
    <PageMain title="基础用法">
      <p>
        <Trend value="12.3" />
      </p>
      <p>
        <Trend value="12.3" type="down" />
      </p>
    </PageMain>
    <PageMain title="颜色反转">
      <p>
        <Trend value="12.3" reverse />
      </p>
      <p>
        <Trend value="12.3" type="down" reverse />
      </p>
    </PageMain>
    <PageMain title="前缀后缀">
      <p>
        <Trend value="12.3" prefix="$" />
      </p>
      <p>
        <Trend value="12.3" suffix="%" />
      </p>
    </PageMain>
  </PageLayout>
</template>
