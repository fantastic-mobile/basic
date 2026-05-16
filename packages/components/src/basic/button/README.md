# FmButton 按钮组件

基础按钮组件，支持多种样式变体和尺寸，内置加载状态支持。

## 基础用法

```vue
<template>
  <FmButton>默认按钮</FmButton>
  <FmButton variant="destructive">危险按钮</FmButton>
  <FmButton variant="outline">边框按钮</FmButton>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' \| 'expand'` | `'default'` | 按钮样式变体 |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | 按钮尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `class` | `HTMLAttributes['class']` | - | 自定义 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 按钮内容（图标、文字等） |

## Events

无

## 示例

### 不同样式变体

```vue
<template>
  <FmButton>默认</FmButton>
  <FmButton variant="secondary">次要</FmButton>
  <FmButton variant="destructive">危险</FmButton>
  <FmButton variant="outline">边框</FmButton>
  <FmButton variant="ghost">幽灵</FmButton>
  <FmButton variant="link">链接</FmButton>
</template>
```

### 不同尺寸

```vue
<template>
  <FmButton size="sm">小按钮</FmButton>
  <FmButton>默认尺寸</FmButton>
  <FmButton size="lg">大按钮</FmButton>
  <FmButton size="icon"><FmIcon name="i-lucide:search" /></FmButton>
  <FmButton size="icon-sm"><FmIcon name="i-lucide:search" /></FmButton>
  <FmButton size="icon-lg"><FmIcon name="i-lucide:search" /></FmButton>
</template>
```

### 加载状态

```vue
<script setup lang="ts">
const loading = ref(false)

function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <FmButton :loading="loading" @click="handleClick">
    {{ loading ? '加载中...' : '点击加载' }}
  </FmButton>
</template>
```

### 禁用状态

```vue
<template>
  <FmButton disabled>禁用按钮</FmButton>
  <FmButton :disabled="true" variant="outline">禁用边框按钮</FmButton>
</template>
```

### 带图标按钮

```vue
<template>
  <FmButton>
    <FmIcon name="i-lucide:plus" />
    添加
  </FmButton>
  <FmButton size="icon">
    <FmIcon name="i-lucide:search" />
  </FmButton>
</template>
```

## 注意事项

1. **loading 状态**：设置 `loading` 为 `true` 时，按钮会自动显示旋转加载图标并禁用点击
2. **icon 尺寸**：
   - `size="icon"`：正方形按钮 (36px)，适合放置纯图标
   - `size="icon-sm"`：小号正方形按钮 (32px)
   - `size="icon-lg"`：大号正方形按钮 (40px)
3. **变体选择**：
   - `default`：主操作按钮
   - `secondary`：次要操作
   - `destructive`：删除、危险操作
   - `outline`：边框样式，用于低优先级操作
   - `ghost`：幽灵按钮，用于更次要的操作
   - `link`：链接样式
   - `expand`：展开动画效果按钮

## 典型使用场景

- 表单提交按钮
- 操作触发按钮（新增、编辑、删除）
- 导航链接按钮
- 工具栏操作按钮
- 对话框/抽屉底部操作按钮
