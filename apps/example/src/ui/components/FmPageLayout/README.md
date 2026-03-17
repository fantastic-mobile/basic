# FmPageLayout 页面布局组件

页面级布局容器组件，集成导航栏（Navbar）、标签栏（Tabbar）、版权信息、返回顶部等功能，是构建移动端页面的核心组件。

## 基础用法

```vue
<template>
  <FmPageLayout>
    <div class="p-4">页面内容</div>
  </FmPageLayout>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `titleCenter` | `boolean` | `true` | 导航栏标题是否居中 |
| `navbar` | `boolean` | - | 是否启用导航栏，默认使用全局配置 `navbar.enable` |
| `navbarBorder` | `boolean` | `true` | 导航栏是否显示边框 |
| `navbarClass` | `HTMLAttributes['class']` | - | 导航栏自定义 CSS 类 |
| `tabbar` | `boolean` | - | 是否启用标签栏，默认使用全局配置 `tabbar.enable` |
| `tabbarBorder` | `boolean` | `true` | 标签栏是否显示边框 |
| `tabbarClass` | `HTMLAttributes['class']` | - | 标签栏自定义 CSS 类 |
| `contentClass` | `HTMLAttributes['class']` | - | 内容区域自定义 CSS 类 |
| `copyright` | `boolean` | - | 是否显示底部版权信息，默认使用全局配置 `copyright.enable` |
| `backTop` | `boolean` | - | 是否启用返回顶部按钮，默认使用全局配置 `page.backTop` |

## Slots

| 名称 | 说明 |
|------|------|
| `default` | 页面主体内容 |
| `navbar` | 自定义导航栏中间内容（标题区域） |
| `tabbar` | 自定义标签栏内容 |

## Events

| 事件名 | 说明 |
|--------|------|
| `scroll` | 页面滚动时触发 |
| `reachTop` | 滚动到顶部时触发 |
| `reachBottom` | 滚动到底部时触发 |

## Exposed Methods

| 名称 | 类型 | 说明 |
|------|------|------|
| `ref` | `HTMLElement` | 布局容器的 DOM 引用 |

## 示例

### 基础页面布局

```vue
<template>
  <FmPageLayout>
    <div class="p-4">
      <h2>页面标题</h2>
      <p>页面内容</p>
    </div>
  </FmPageLayout>
</template>
```

### 自定义导航栏

```vue
<template>
  <FmPageLayout>
    <template #navbar>
      <span class="font-bold">自定义标题</span>
    </template>
    <div class="p-4">页面内容</div>
  </FmPageLayout>
</template>
```

### 滚动事件监听

```vue
<script setup lang="ts">
function handleReachBottom() {
  console.log('到达底部，加载更多')
}
</script>

<template>
  <FmPageLayout @reach-bottom="handleReachBottom">
    <div v-for="i in 50" :key="i" class="p-4 border-b">
      列表项 {{ i }}
    </div>
  </FmPageLayout>
</template>
```

### 禁用导航栏

```vue
<template>
  <FmPageLayout :navbar="false">
    <div class="p-4">全屏内容页</div>
  </FmPageLayout>
</template>
```

## 注意事项

1. **全局配置优先级**：props 中传入的值优先级高于全局配置

## 典型使用场景

- 所有移动端页面的根容器
- 需要自定义导航栏的详情页
- 带底部标签栏的首页
- 需要下拉加载更多的列表页
