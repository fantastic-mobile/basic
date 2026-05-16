<script setup lang="ts">
const currency = ref('CNY')
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FmButtonGroup>
      <FmInput />
      <FmButton variant="outline" size="icon">
        <FmIcon name="i-ep:search" />
      </FmButton>
    </FmButtonGroup>
    <FmButtonGroup>
      <FmSelect
        v-model="currency"
        :options="[
          { label: '¥', value: 'CNY' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]"
        class="gap-1 w-inherit"
      />
      <FmInput placeholder="10.00" />
    </FmButtonGroup>
  </div>
</template>
