---
name: fm-page-optimizer
description: "优化 Vue 页面，用 Fantastic-mobile 框架内建组件（src/ui/components/）替换自定义实现和原生 HTML。当用户说：'帮我优化这个页面'、'把这些原生 HTML 换成框架组件'、'用 FmCard/FmModal/FmButton 重构一下'、'这个页面太乱了'、'统一一下 UI 风格'、'用内建组件替换自定义弹窗/加载'，即使用户只是说'看看这个页面能不能改进'也应触发此技能。"
---

# 页面优化器

利用 Fantastic-mobile 的内建组件优化 Vue 页面，用框架组件替换自定义实现，减少重复代码，保持 UI 一致性。

## 第一步：确认工作区（必须阻塞等待用户回复）

本项目是 monorepo 架构。**在执行任何文件读写操作之前**，必须先确认目标应用：

1. 执行 `ls apps/` 列出所有可用应用
2. **立即向用户提问**，明确询问要在哪个应用中优化页面，并**停止等待回复**
3. 收到用户明确回复后，才能继续后续步骤

> **严格规则**：如果用户没有在请求中明确说明目标应用（例如"在 example 应用中"、"apps/core"），则必须提问，不得自行猜测或默认选择任何应用。

后续所有文件路径以 `apps/<app>/` 为根，其中 `<app>` 为用户确认的应用名称。

## 优化工作流

### 步骤 1: 分析页面，识别替换机会

读取目标页面，找出三类可优化点：

- **原生 HTML 元素**：`<button>`、`<input>`、`<select>`、自定义卡片 div 等
- **重复造轮子的自定义组件**：自定义弹窗、加载状态、提示消息等
- **可简化的内联逻辑**：手动标签页切换、手动状态管理等

### 步骤 2: 查找合适的框架组件

先查组件目录确认有哪些可用组件：

```
Read: references/components-catalog.md
```

确定组件后，读取对应 README 了解完整 API（props、slots、events）：

```
Read: apps/<app>/src/ui/components/Fm[ComponentName]/README.md
```

README 是最权威的用法来源，不确定时优先看文档而不是猜。

### 步骤 3: 参考优化模式（可选）

如果不确定如何替换，查看前后对比示例：

```
Read: references/optimization-patterns.md
```

### 步骤 4: 实施替换

替换时保留所有原始功能，不要改变业务逻辑。框架组件提供组合式函数用于编程式控制，优先使用：

- `useFmModal()` — 编程式打开/关闭弹窗、confirm 确认框
- `fmToast` — 显示成功/错误提示（从 `@/ui/components/FmToast` 导入）
- `useFmLoading()` — 控制加载遮罩

组件可以组合使用，例如：

```vue
<FmCard title="用户列表">
  <FmButton @click="handleAdd">新增</FmButton>
</FmCard>
```

### 步骤 5: 验证

替换后确认导入路径正确（`@/ui/components/Fm[ComponentName]`），props 和 v-model 绑定符合组件 API。如有问题，回到组件 README 核对。
