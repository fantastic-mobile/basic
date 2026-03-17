# FmButtonGroup 按钮组

将多个按钮组合在一起的容器组件，支持水平/垂直排列和分割线。

## 基础用法

```vue
<template>
  <FmButtonGroup>
    <FmButton>
      <FmIcon name="i-mdi:eye" />
      查看详情
    </FmButton>
    <FmButton>
      <FmIcon name="i-mdi:pencil" />
      编辑
    </FmButton>
    <FmButton>
      <FmIcon name="i-mdi:delete" />
      删除
    </FmButton>
  </FmButtonGroup>
</template>
```

## 垂直排列

```vue
<template>
  <FmButtonGroup orientation="vertical">
    <FmButton>操作 1</FmButton>
    <FmButton>操作 2</FmButton>
    <FmButton>操作 3</FmButton>
  </FmButtonGroup>
</template>
```

## 带分割线

```vue
<template>
  <FmButtonGroup :separator="true">
    <FmButton variant="outline">复制</FmButton>
    <FmButton variant="outline">粘贴</FmButton>
    <FmButton variant="outline">剪切</FmButton>
  </FmButtonGroup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| orientation | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| separator | 是否显示分割线 | `boolean` | `false` |
| class | 自定义类名 | `HTMLAttributes['class']` | `undefined` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽，放置 FmButton 组件 |

## 示例

### 工具栏按钮组

```vue
<template>
  <FmButtonGroup>
    <FmButton variant="ghost" size="icon">
      <FmIcon name="i-lucide:bold" />
    </FmButton>
    <FmButton variant="ghost" size="icon">
      <FmIcon name="i-lucide:italic" />
    </FmButton>
    <FmButton variant="ghost" size="icon">
      <FmIcon name="i-lucide:underline" />
    </FmButton>
  </FmButtonGroup>
</template>
```

### 垂直菜单

```vue
<template>
  <FmButtonGroup orientation="vertical" :separator="true" class="w-48">
    <FmButton variant="ghost" class="justify-start">
      <FmIcon name="i-heroicons:user" class="mr-2" />
      个人资料
    </FmButton>
    <FmButton variant="ghost" class="justify-start">
      <FmIcon name="i-heroicons:cog" class="mr-2" />
      账户设置
    </FmButton>
    <FmButton variant="ghost" class="justify-start">
      <FmIcon name="i-heroicons:shield-check" class="mr-2" />
      安全选项
    </FmButton>
  </FmButtonGroup>
</template>
```

### 与其他组件组合

```vue
<template>
  <FmButtonGroup>
    <FmSelect v-model="action" class="w-32">
      <FmSelectOption value="export">导出</FmSelectOption>
      <FmSelectOption value="import">导入</FmSelectOption>
    </FmSelect>
    <FmButton>执行</FmButton>
  </FmButtonGroup>
</template>
```

### 嵌套按钮组

```vue
<template>
  <FmButtonGroup>
    <FmButton>左侧</FmButton>
    <FmButtonGroup :separator="true">
      <FmButton>嵌套 1</FmButton>
      <FmButton>嵌套 2</FmButton>
    </FmButtonGroup>
    <FmButton>右侧</FmButton>
  </FmButtonGroup>
</template>
```
