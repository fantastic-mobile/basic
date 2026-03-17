# 页面优化模式

本文档展示如何用框架内建组件替换常见的自定义代码和原生 HTML 实现。

## 基础元素替换

### 按钮优化

**优化前**:
```vue
<button class="btn btn-primary" @click="handleClick">提交</button>

<button class="custom-button" :disabled="loading">
  <span v-if="loading">加载中...</span>
  <span v-else>提交</span>
</button>
```

**优化后**:
```vue
<FmButton @click="handleClick">提交</FmButton>

<FmButton :loading="loading">提交</FmButton>
```

### 输入框优化

**优化前**:
```vue
<div class="form-group">
  <input v-model="username" type="text" class="form-control" placeholder="请输入用户名">
</div>
```

**优化后**:
```vue
<FmInput v-model="username" placeholder="请输入用户名" />
```

### 卡片容器优化

**优化前**:
```vue
<div class="card">
  <div class="card-header"><h3>卡片标题</h3></div>
  <div class="card-body">卡片内容</div>
  <div class="card-footer">底部内容</div>
</div>
```

**优化后**:
```vue
<FmCard title="卡片标题">
  卡片内容
  <template #footer>底部内容</template>
</FmCard>
```

## 交互组件替换

### 模态对话框优化

**优化前**:
```vue
<script setup>
const visible = ref(false)
function handleClose() { visible.value = false }
function handleConfirm() { visible.value = false }
</script>

<template>
  <div v-if="visible" class="modal-overlay" @click="handleClose">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>标题</h3>
        <button @click="handleClose">×</button>
      </div>
      <div class="modal-body">内容</div>
      <div class="modal-footer">
        <button @click="handleClose">取消</button>
        <button @click="handleConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); }
</style>
```

**优化后**:
```vue
<script setup>
const visible = ref(false)
</script>

<template>
  <FmButton @click="visible = true">打开对话框</FmButton>
  <FmModal v-model="visible" title="标题">
    内容
  </FmModal>
</template>
```

### 抽屉优化（移动端侧边滑出）

**优化前**:
```vue
<div v-if="open" class="drawer-overlay">
  <div class="drawer-panel">
    <!-- 自定义抽屉 -->
  </div>
</div>
```

**优化后**:
```vue
<FmDrawer v-model="open" title="设置">
  内容
</FmDrawer>
```

> 注意：基础版只有 `FmDrawer`，不支持 `FmSpringDrawer`（专业版特性）。

## 反馈组件替换

### 加载状态优化

**优化前**:
```vue
<div v-if="loading" class="loading-overlay">
  <div class="spinner"></div>
  <p>加载中...</p>
</div>

<style scoped>
.loading-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.8); }
</style>
```

**优化后**:
```vue
<script setup>
import { useFmLoading } from '@/ui/components/FmLoading'

async function fetchData() {
  const { close } = useFmLoading({ text: '加载中...' })
  try {
    await api.getData()
  }
  finally {
    close()
  }
}
</script>
```

### 消息提示优化

**优化前**:
```vue
<script setup>
function showMessage(msg: string) { alert(msg) }
</script>
```

**优化后**:
```vue
<script setup>
import { fmToast } from '@/ui/components/FmToast'

function showSuccess() { fmToast.success('操作成功') }
function showError() { fmToast.error('操作失败') }
</script>
```

## 表单组件替换

### 复选框优化

**优化前**:
```vue
<label class="checkbox-wrapper">
  <input v-model="checked" type="checkbox">
  <span>同意协议</span>
</label>
```

**优化后**:
```vue
<FmCheckbox v-model="checked">同意协议</FmCheckbox>
```

### 开关优化

**优化前**:
```vue
<div class="switch-wrapper">
  <input v-model="enabled" type="checkbox" class="switch-input">
  <span class="switch-slider"></span>
</div>
<style scoped>.switch-wrapper { /* 自定义开关样式 */ }</style>
```

**优化后**:
```vue
<FmSwitch v-model="enabled" />
```

### 下拉选择优化

**优化前**:
```vue
<select v-model="selected" class="form-select">
  <option value="">请选择</option>
  <option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</option>
</select>
```

**优化后**:
```vue
<FmSelect v-model="selected" :options="options" placeholder="请选择" />
```

## 数据展示优化

### 标签页优化

**优化前**:
```vue
<script setup>
const activeTab = ref('tab1')
</script>
<template>
  <div class="tab-headers">
    <div :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">标签1</div>
    <div :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">标签2</div>
  </div>
  <div v-if="activeTab === 'tab1'">内容1</div>
  <div v-if="activeTab === 'tab2'">内容2</div>
</template>
```

**优化后**:
```vue
<FmTabs v-model="activeTab">
  <template #tab1>内容1</template>
  <template #tab2>内容2</template>
</FmTabs>
```

### 头像显示优化

**优化前**:
```vue
<div class="avatar">
  <img v-if="user.avatar" :src="user.avatar" alt="头像">
  <span v-else class="fallback">{{ user.name[0] }}</span>
</div>
<style scoped>.avatar { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; }</style>
```

**优化后**:
```vue
<FmAvatar :src="user.avatar" :alt="user.name" />
```

### 数字统计动画优化

> 注意：基础版不包含 `FmAnimatedCountTo` 等数字动画组件（专业版特性），请使用原生方式或第三方库实现。

## 常见场景映射

| 场景 | 原实现 | 框架组件 |
|------|--------|----------|
| 卡片容器 | 自定义 card div | `FmCard` |
| 按钮 | 原生 `<button>` | `FmButton` |
| 输入框 | 原生 `<input>` | `FmInput` |
| 下拉选择 | 原生 `<select>` | `FmSelect` |
| 开关 | 自定义 checkbox | `FmSwitch` |
| 弹窗 | 自定义遮罩弹层 | `FmModal` / `useFmModal()` |
| 抽屉 | 自定义侧边栏 | `FmDrawer` |
| 加载中 | 自定义 loading | `useFmLoading()` |
| 消息提示 | alert / 自定义 toast | `fmToast` |
| 标签页 | 手动切换 active | `FmTabs` |
| 头像 | img + fallback | `FmAvatar` |
