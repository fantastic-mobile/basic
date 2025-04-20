<script setup lang="ts">
definePage({
  meta: {
    title: '基础组件',
  },
})

const input = ref('')
const radio = ref(1)
const rate = ref(3)
const toggle = ref(true)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <div class="flex flex-col gap-4 p-4">
      <FmPageMain class="m-0">
        框架内置 Vant 组件库，本页仅展示部分组件，更多组件及使用说明请查看 Vant 官网
      </FmPageMain>
      <FmPageMain title="Button" class="m-0">
        <van-button type="primary">
          主要按钮
        </van-button>
        <van-button type="success">
          成功按钮
        </van-button>
        <van-button type="default">
          默认按钮
        </van-button>
        <van-button type="danger">
          危险按钮
        </van-button>
        <van-button type="warning">
          警告按钮
        </van-button>
      </FmPageMain>
      <FmPageMain title="Icon" class="m-0">
        <van-icon name="chat-o" />
      </FmPageMain>
      <van-cell-group inset class="mx-0">
        <van-field v-model="input" label="文本" placeholder="请输入用户名" />
      </van-cell-group>
      <FmPageMain title="Radio" class="m-0">
        <van-radio-group v-model="radio">
          <van-radio :name="1">
            单选框 1
          </van-radio>
          <van-radio :name="2">
            单选框 2
          </van-radio>
        </van-radio-group>
      </FmPageMain>
      <FmPageMain title="Rate" class="m-0">
        <van-rate v-model="rate" />
      </FmPageMain>
      <FmPageMain title="Switch" class="m-0">
        <van-switch v-model="toggle" />
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
