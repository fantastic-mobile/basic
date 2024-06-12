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
  <PageLayout navbar>
    <PageMain>
      框架内置 Vant 组件库，本页仅展示部分组件，更多组件及使用说明请查看 Vant 官网
    </PageMain>
    <PageMain title="Button">
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
    </PageMain>
    <PageMain title="Icon">
      <van-icon name="chat-o" />
    </PageMain>
    <van-cell-group inset>
      <van-field v-model="input" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
    <PageMain title="Radio">
      <van-radio-group v-model="radio">
        <van-radio :name="1">
          单选框 1
        </van-radio>
        <van-radio :name="2">
          单选框 2
        </van-radio>
      </van-radio-group>
    </PageMain>
    <PageMain title="Rate">
      <van-rate v-model="rate" />
    </PageMain>
    <PageMain title="Switch">
      <van-switch v-model="toggle" />
    </PageMain>
  </PageLayout>
</template>
