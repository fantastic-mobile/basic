<script setup lang="ts">
const input = ref('')
const radio = ref(1)
const rate = ref(3)
const toggle = ref(true)
</script>

<template>
  <AppPageLayout :navbar="false" tabbar>
    <FmPageMain title="Button">
      <VarButton>默认按钮</VarButton>
      <VarButton type="primary">
        主要按钮
      </VarButton>
      <VarButton type="info">
        信息按钮
      </VarButton>
      <VarButton type="success">
        成功按钮
      </VarButton>
      <VarButton type="warning">
        警告按钮
      </VarButton>
      <VarButton type="danger">
        危险按钮
      </VarButton>
    </FmPageMain>
    <VarForm class="mx-4">
      <VarInput v-model="input" label="用户名" placeholder="请输入用户名" />
    </VarForm>
    <FmPageMain title="Radio">
      <VarRadioGroup v-model="radio">
        <VarRadio :checked-value="1">
          单选框 1
        </VarRadio>
        <VarRadio :checked-value="2">
          单选框 2
        </VarRadio>
      </VarRadioGroup>
    </FmPageMain>
    <FmPageMain title="Rate">
      <VarRate v-model="rate" />
    </FmPageMain>
    <FmPageMain title="Switch">
      <VarSwitch v-model="toggle" />
    </FmPageMain>
  </AppPageLayout>
</template>
