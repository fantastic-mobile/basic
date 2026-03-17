# FmLoading 加载动画

全屏加载动画组件，基于 SpinKit 提供 12 种加载动画效果。支持函数式调用。

## 基础用法

通过 `useFmLoading` 函数调用：

```vue
<script setup lang="ts">
function showLoading() {
  const { close } = useFmLoading({
    type: 'plane',
    size: 50,
    text: '加载中...',
  })

  // 关闭 loading
  setTimeout(() => {
    close()
  }, 2000)
}
</script>

<template>
  <FmButton @click="showLoading">
    显示 Loading
  </FmButton>
</template>
```

## 加载类型

支持 12 种加载动画类型：

- `plane` - 平面旋转
- `chase` - 追逐圆点
- `bounce` - 弹跳球
- `wave` - 波浪
- `pulse` - 脉冲
- `flow` - 流动
- `swing` - 摆动
- `circle` - 圆圈
- `circle-fade` - 淡入圆圈
- `grid` - 网格
- `fold` - 折叠
- `wander` - 漫游

## API

### useFmLoading Options

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 加载动画类型 | `'plane' \| 'chase' \| 'bounce' \| 'wave' \| 'pulse' \| 'flow' \| 'swing' \| 'circle' \| 'circle-fade' \| 'grid' \| 'fold' \| 'wander'` | `'plane'` |
| size | 加载动画尺寸 (px) | `number` | `50` |
| text | 加载提示文字 | `string` | `undefined` |

### 返回值

| 属性 | 说明 | 类型 |
|------|------|------|
| close | 关闭加载动画的方法 | `() => void` |

## 示例

### 切换加载类型

```vue
<script setup lang="ts">
const type = ref('plane')

function loading() {
  const { close } = useFmLoading({
    type: type.value,
    size: 50,
    text: '加载中...',
  })
  setTimeout(() => {
    close()
  }, 2000)
}
</script>

<template>
  <FmButtonGroup>
    <FmButton
      v-for="item in [
        { label: 'Plane', value: 'plane' },
        { label: 'Chase', value: 'chase' },
        { label: 'Wave', value: 'wave' },
      ]"
      :key="item.value"
      :variant="type === item.value ? 'default' : 'outline'"
      @click="type = item.value"
    >
      {{ item.label }}
    </FmButton>
  </FmButtonGroup>
  <FmButton @click="loading">
    加载 Loading
  </FmButton>
</template>
```

### 自定义尺寸

```vue
<script setup lang="ts">
function showLargeLoading() {
  const { close } = useFmLoading({
    type: 'circle',
    size: 80,
    text: '正在处理大数据...',
  })
  setTimeout(() => {
    close()
  }, 2000)
}
</script>
```

### 无文字提示

```vue
<script setup lang="ts">
function showSimpleLoading() {
  const { close } = useFmLoading({
    type: 'pulse',
    size: 40,
  })
  setTimeout(() => {
    close()
  }, 1500)
}
</script>
```
