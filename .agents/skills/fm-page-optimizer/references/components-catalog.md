# Fantastic-mobile 内建组件目录

本文档列出所有可用的框架内建组件及其使用场景。组件位于 `apps/<app>/src/ui/components/`。

> **提示**: 每个组件目录下都有 `README.md` 使用文档，包含完整的 API 说明 (Props/Slots/Events/Methods) 和示例代码。
> 查阅方式：`Read: apps/<app>/src/ui/components/Fm[ComponentName]/README.md`

## 基础组件

### FmButton / FmButtonGroup
**用途**: 按钮组件，支持多种样式和状态
**特性**: loading 状态、disabled 状态、按钮组

### FmBadge
**用途**: 徽章标签，用于状态标识和数量提示

### FmIcon
**用途**: 图标组件，基于 [iconify](https://icon-sets.iconify.design/)
**示例**: `<FmIcon name="i-mdi:home" />`

### FmAvatar
**用途**: 头像组件

### FmCheckbox
**用途**: 复选框组件

### FmInput
**用途**: 输入框组件

### FmSelect
**用途**: 下拉选择组件

### FmSlider
**用途**: 滑块组件

### FmSwitch
**用途**: 开关组件

## 布局组件

### FmCard
**用途**: 卡片容器，支持标题、描述、内容、底部插槽
**特性**: title, description, footer slot

### FmDivider
**用途**: 分割线组件

### FmPageLayout
**用途**: 页面布局容器

### FmPageMain
**用途**: 页面主体容器

### FmScrollArea
**用途**: 滚动区域容器

### FmTabs
**用途**: 标签页组件

## 反馈组件

### FmModal
**用途**: 弹窗/对话框
**编程式用法**: `useFmModal()` — 打开/关闭弹窗、confirm 确认框

### FmDrawer
**用途**: 抽屉组件（侧边滑出）

### FmToast
**用途**: 轻提示消息（成功/错误/警告）
**编程式用法**: `import { fmToast } from '@/ui/components/FmToast'`，然后 `fmToast.success('操作成功')`

### FmLoading
**用途**: 加载遮罩
**编程式用法**: `useFmLoading(options)` — 控制加载状态

## 数据展示

### FmTrend
**用途**: 趋势指标组件
