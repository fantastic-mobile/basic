# FmModal 对话框组件

模态对话框组件，支持拖拽、最大化、自定义内容和多种显示模式。

## 基础用法

```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <FmButton @click="open = true">打开对话框</FmButton>
  <FmModal v-model="open" title="对话框标题">
    <div>对话框内容</div>
  </FmModal>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `id` | `string` | - | 对话框唯一标识 |
| `modelValue` | `boolean` | `false` | 是否打开对话框 |
| `zIndex` | `number` | `2000` | 层级 |
| `title` | `string \| () => string` | - | 标题 |
| `description` | `string \| () => string` | - | 描述文字 |
| `icon` | `'info' \| 'success' \| 'warning' \| 'error'` | - | 图标类型 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `closable` | `boolean` | `true` | 是否显示关闭按钮 |
| `center` | `boolean` | `false` | 内容是否居中 |
| `border` | `boolean` | `true` | 是否有边框分割线 |
| `alignCenter` | `boolean` | `false` | 对话框是否垂直居中 |
| `overlay` | `boolean` | `true` | 是否显示遮罩 |
| `overlayBlur` | `boolean` | `false` | 遮罩是否模糊 |
| `showConfirmButton` | `boolean` | `true` | 是否显示确定按钮 |
| `showCancelButton` | `boolean` | `false` | 是否显示取消按钮 |
| `confirmButtonText` | `string \| () => string` | `'确定'` | 确定按钮文字 |
| `cancelButtonText` | `string \| () => string` | `'取消'` | 取消按钮文字 |
| `confirmButtonDisabled` | `boolean` | `false` | 确定按钮是否禁用 |
| `confirmButtonLoading` | `boolean` | `false` | 确定按钮加载状态 |
| `beforeClose` | `(action, done) => void` | - | 关闭前回调 |
| `header` | `boolean` | `true` | 是否显示头部 |
| `footer` | `boolean` | `true` | 是否显示底部 |
| `closeOnClickOverlay` | `boolean` | `true` | 点击遮罩是否关闭 |
| `closeOnPressEscape` | `boolean` | `true` | 按 ESC 是否关闭 |
| `destroyOnClose` | `boolean` | `true` | 关闭时销毁内容 |
| `openAutoFocus` | `boolean` | `false` | 打开时自动聚焦 |
| `class` | `HTMLAttributes['class']` | - | 外层 CSS 类 |
| `headerClass` | `HTMLAttributes['class']` | - | 头部 CSS 类 |
| `contentClass` | `HTMLAttributes['class']` | - | 内容区 CSS 类 |
| `footerClass` | `HTMLAttributes['class']` | - | 底部 CSS 类 |

## Slots

| 名称 | 说明 |
|------|------|
| `header` | 自定义头部内容 |
| `default` | 对话框主体内容 |
| `footer` | 自定义底部内容 |

## Events

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 打开状态变化时触发 |
| `open` | 打开时触发 |
| `opened` | 打开动画完成后触发 |
| `close` | 关闭时触发 |
| `closed` | 关闭动画完成后触发 |
| `confirm` | 点击确定按钮时触发 |
| `cancel` | 点击取消按钮时触发 |

## Exposed Methods

无

## 示例

### 基础对话框

```vue
<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <FmButton @click="open = true">打开对话框</FmButton>
  <FmModal v-model="open" title="对话框标题" description="这里是一段描述">
    <div>这是对话框内容</div>
  </FmModal>
</template>
```

### 带取消按钮

```vue
<script setup lang="ts">
const open = ref(false)

function handleConfirm() {
  console.log('确认')
  open.value = false
}

function handleCancel() {
  console.log('取消')
  open.value = false
}
</script>

<template>
  <FmModal
    v-model="open"
    title="确认操作"
    show-cancel-button
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    <div>请确认是否继续？</div>
  </FmModal>
</template>
```

### 图标对话框

```vue
<script setup lang="ts">
const successOpen = ref(false)
const errorOpen = ref(false)
</script>

<template>
  <div class="flex gap-2">
    <FmButton @click="successOpen = true">成功提示</FmButton>
    <FmButton @click="errorOpen = true">错误提示</FmButton>
  </div>

  <FmModal v-model="successOpen" title="操作成功" icon="success" align-center border>
    <div>您的操作已成功完成</div>
  </FmModal>

  <FmModal v-model="errorOpen" title="操作失败" icon="error" align-center border>
    <div>操作失败，请稍后重试</div>
  </FmModal>
</template>
```

### 垂直居中对话框

```vue
<template>
  <FmModal v-model="open" title="居中对话框" align-center>
    <div>对话框在屏幕垂直居中显示</div>
  </FmModal>
</template>
```

### 内容居中对话框

```vue
<template>
  <FmModal v-model="open" title="内容居中" center>
    <div class="text-center">
      <p>标题和内容都居中显示</p>
      <p>按钮也会居中对齐</p>
    </div>
  </FmModal>
</template>
```

### 关闭前确认

```vue
<script setup lang="ts">
import { useFmModal } from '@fantastic-mobile/components'

const open = ref(false)

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  if (action === 'close') {
    useFmModal().confirm({
      title: '提示',
      content: '确定要关闭吗？未保存的内容将丢失。',
      onConfirm: () => done(),
    })
  }
  else {
    done()
  }
}
</script>

<template>
  <FmModal v-model="open" title="编辑" :before-close="handleBeforeClose">
    <form class="flex flex-col gap-4">
      <FmInput placeholder="请输入..." />
    </form>
  </FmModal>
</template>
```

### 加载状态

```vue
<script setup lang="ts">
const open = ref(false)
const loading = ref(false)

function handleSubmit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    open.value = false
  }, 2000)
}
</script>

<template>
  <FmModal v-model="open" title="提交" :loading="loading" :confirm-button-loading="loading" @confirm="handleSubmit">
    <form class="flex flex-col gap-4">
      <FmInput placeholder="输入内容" />
    </form>
  </FmModal>
</template>
```

### 自定义头部和底部

```vue
<template>
  <FmModal v-model="open">
    <template #header>
      <div class="flex-between">
        <span class="font-bold">自定义标题</span>
        <FmIcon name="i-lucide:info" />
      </div>
    </template>
    <div>对话框内容</div>
    <template #footer>
      <div class="flex gap-2">
        <FmButton variant="outline">取消</FmButton>
        <FmButton>保存</FmButton>
      </div>
    </template>
  </FmModal>
</template>
```

### 调整对话框宽度

```vue
<template>
  <FmModal v-model="open" title="大对话框" class="sm:max-w-2xl">
    <div>这是一个较宽的对话框</div>
  </FmModal>
</template>
```

## 函数式调用

```vue
<script setup lang="ts">
const modal = useFmModal()

function showAlert() {
  modal.info({
    title: '提示',
    content: '这是一条提示信息',
    onConfirm: () => {
      console.log('确认')
    },
  })
}

function showSuccess() {
  modal.success({
    title: '成功',
    content: '操作成功完成',
  })
}

function showConfirm() {
  modal.confirm({
    title: '确认',
    content: '确定要删除吗？',
    onConfirm: () => {
      console.log('删除')
    },
  })
}

function showError() {
  modal.error({
    title: '错误',
    content: '操作失败',
  })
}

function showWarning() {
  modal.warning({
    title: '警告',
    content: '此操作有风险',
  })
}
</script>

<template>
  <div class="flex gap-2">
    <FmButton @click="showAlert">信息提示</FmButton>
    <FmButton @click="showSuccess">成功提示</FmButton>
    <FmButton @click="showConfirm">确认对话框</FmButton>
    <FmButton @click="showError">错误提示</FmButton>
    <FmButton @click="showWarning">警告提示</FmButton>
  </div>
</template>
```

## 注意事项

1. **v-model 绑定**：使用 `v-model` 控制对话框打开状态
2. **图标类型**：`icon` 支持 `info`、`success`、`warning`、`error` 四种
3. **关闭回调**：`beforeClose` 接收 `action`（`confirm`/`cancel`/`close`）和 `done` 函数
4. **拖拽限制**：拖拽仅在有标题栏且非最大化状态下有效
5. **动画事件**：`opened` 和 `closed` 在动画完成后触发
6. **函数式调用**：`useFmModal()` 提供 `info`、`success`、`warning`、`error`、`confirm` 方法

## 典型使用场景

- 确认对话框
- 表单编辑
- 详情展示
- 消息提示（alert）
- 警告提示
- 配置设置
