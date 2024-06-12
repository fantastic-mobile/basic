<script setup lang="ts">
definePage({
  meta: {
    title: '图标',
  },
})

const flip = ref<'horizontal' | 'vertical' | 'both'>()
const rotate = ref(0)
</script>

<template>
  <PageLayout navbar>
    <PageMain>
      <p>单色 Icon</p>
      <div>
        <SvgIcon name="example-emotion-line" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="example-emotion-laugh-line" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="example-emotion-unhappy-line" :size="48" :flip="flip" :rotate="rotate" />
      </div>
      <p>彩色 Icon</p>
      <div>
        <SvgIcon name="example-crown" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="example-star" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="example-vip" :size="48" :flip="flip" :rotate="rotate" />
      </div>
      <p>Iconify Icon</p>
      <div>
        <SvgIcon name="i-carbon:4k" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="i-carbon:play-filled-alt" :size="48" :flip="flip" :rotate="rotate" />
        <SvgIcon name="i-carbon:pause-filled" :size="48" :flip="flip" :rotate="rotate" />
      </div>
      <div>
        <p>翻转：</p>
        <van-radio-group v-model="flip" class="space-y-1">
          <van-radio>
            无
          </van-radio>
          <van-radio name="horizontal">
            水平翻转
          </van-radio>
          <van-radio name="vertical">
            垂直翻转
          </van-radio>
          <van-radio name="both">
            水平垂直翻转
          </van-radio>
        </van-radio-group>
        <p>旋转：</p>
        <div class="p-4">
          <van-slider v-model="rotate" :min="0" :max="360" />
        </div>
      </div>
    </PageMain>
  </PageLayout>
</template>
