---
name: fm-theme-customizer
description: 为 Fantastic-mobile 框架创建和定制主题配色方案，始终同时生成明色（light）和暗色（dark）两套主题。当用户提到以下任何需求时必须使用此技能：换主题颜色、换配色、做一个 XX 风格的主题、主题太单调了、品牌色是 XXX 帮我生成主题、把 tweakcn 配色转成框架主题、想要暗色/冷色/暖色调、根据设计稿颜色生成主题。即使用户只是描述一种感觉（"清新"、"沉稳"、"科技感"）或提供一个颜色值（"#2563EB"），也应触发此技能。支持"吉卜力"、"赛博朋克"、"莫兰迪"、"北欧极简"等专业设计风格关键词。
---

# 主题定制器

为 Fantastic-mobile 框架修改主题配色。基础版使用固定的明暗主题结构，**始终同时输出明色和暗色两套**，缺少任何一套都会导致对应模式下显示异常。

## 第一步：确认工作区（必须阻塞等待用户回复）

本项目是 monorepo 架构。**在执行任何文件读写操作之前**，必须先确认目标应用：

1. 执行 `ls apps/` 列出所有可用应用
2. **立即向用户提问**，明确询问要在哪个应用中生成主题，并**停止等待回复**
3. 收到用户明确回复后，才能继续后续步骤

> **严格规则**：如果用户没有在请求中明确说明目标应用（例如"在 example 应用中"、"apps/core"），则必须提问，不得自行猜测或默认选择任何应用。

后续所有文件路径以 `apps/<app>/` 为根，其中 `<app>` 为用户确认的应用名称。

## 主题文件位置

- 主题定义：`apps/<app>/themes/index.ts`（直接修改 `lightTheme` 和 `darkTheme` 对象）

基础版主题文件结构是两个具名导出，没有命名主题注册表：

```typescript
export const lightTheme = {
  'color-scheme': 'light',
  // shadcn token
  '--background': '...',
  // ...
  // 框架专属 token
  '--g-bg': '...',
  // ...
}

export const darkTheme = {
  'color-scheme': 'dark',
  // shadcn token
  '--background': '...',
  // ...
  // 框架专属 token
  '--g-bg': '...',
  // ...
}
```

## 工作流程

### 第二步：确认设计风格

如果用户没有明确指定颜色，先提供风格参考。读取 `references/design-styles.md` 获取完整的风格目录和配色建议。

### 第三步：生成 OKLCH 色值

框架使用 **OKLCH 色彩空间**，格式为 `L C H`（不含 `oklch()` 包裹，直接写三个数值）。

转换规则：
- 明色背景：`1 0 0`（纯白）或接近白色的暖/冷色调
- 暗色背景：`0.141 0.005 285.823`（默认深灰）或更深的色调
- 主色（primary）：明色通常比暗色亮度（L值）高 0.05~0.1

读取 `references/theme-structure.md` 了解完整的 CSS 变量说明和取值规范。

### 第四步：输出主题代码

直接替换 `apps/<app>/themes/index.ts` 中 `lightTheme` 和 `darkTheme` 的色值，保持文件结构不变：

```typescript
export const lightTheme = {
  'color-scheme': 'light',
  // shadcn 标准 token（必填）
  '--background': 'L C H',
  '--foreground': 'L C H',
  '--card': 'L C H',
  '--card-foreground': 'L C H',
  '--popover': 'L C H',
  '--popover-foreground': 'L C H',
  '--primary': 'L C H',
  '--primary-foreground': 'L C H',
  '--secondary': 'L C H',
  '--secondary-foreground': 'L C H',
  '--muted': 'L C H',
  '--muted-foreground': 'L C H',
  '--accent': 'L C H',
  '--accent-foreground': 'L C H',
  '--destructive': '0.577 0.245 27.325',  // 通常保持不变
  '--border': 'L C H',
  '--input': 'L C H',
  '--ring': 'L C H',  // 通常与 primary 相同
  // 框架专属 token（必填）
  '--g-bg': 'oklch(0.9612 0 0)',  // 明色：略深于背景，形成层次感
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
}

export const darkTheme = {
  'color-scheme': 'dark',
  // shadcn 标准 token（同明色结构，但色值更深）
  '--background': 'L C H',
  // ... 其余 shadcn token
  // 框架专属 token
  '--g-bg': 'oklch(var(--background))',  // 暗色：与背景相同，避免过多层次
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
}
```

## 参考资源

- **设计风格目录**：`references/design-styles.md` — 包含 20+ 种专业设计风格的配色方案和灵感来源
- **CSS 变量说明**：`references/theme-structure.md` — 每个变量的作用、取值规范和明暗差异（含完整暗色模板）
- **社区配色**：https://tweakcn.com/community — 可直接参考社区主题的 shadcn CSS 变量
