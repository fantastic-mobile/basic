# 主题 CSS 变量结构说明

## 变量分类

主题由两类变量组成：
1. **shadcn 标准 token** — 通用设计系统变量，控制组件颜色
2. **框架专属 token（`--g-*`）** — 控制移动端布局区域颜色

---

## shadcn 标准 Token

格式：`'L C H'`（OKLCH 三个数值，不含 `oklch()` 包裹）

| 变量 | 作用 |
|------|------|
| `--background` | 页面主背景色 |
| `--foreground` | 主文字颜色 |
| `--card` | 卡片背景色（通常同 background） |
| `--card-foreground` | 卡片文字颜色 |
| `--popover` | 弹出层背景色 |
| `--popover-foreground` | 弹出层文字颜色 |
| `--primary` | 主色调（按钮、高亮、激活状态） |
| `--primary-foreground` | 主色上的文字颜色 |
| `--secondary` | 次要色（次要按钮、标签背景） |
| `--secondary-foreground` | 次要色上的文字颜色 |
| `--muted` | 静音色（禁用状态、次要背景） |
| `--muted-foreground` | 静音色上的文字颜色 |
| `--accent` | 强调色（hover 状态背景） |
| `--accent-foreground` | 强调色上的文字颜色 |
| `--destructive` | 危险/错误色（删除、警告） |
| `--border` | 边框颜色 |
| `--input` | 输入框边框颜色 |
| `--ring` | 焦点环颜色（通常同 primary） |

---

## 框架专属 Token（`--g-*`）

格式：`'oklch(L C H)'` 或 `'oklch(var(--xxx))'`（含 `oklch()` 包裹）

| 变量 | 作用 |
|------|------|
| `--g-bg` | 页面主要区域背景（内容区） |
| `--g-navbar-bg` | 顶部导航栏背景 |
| `--g-navbar-color` | 顶部导航栏文字颜色 |
| `--g-tabbar-bg` | 底部标签栏背景 |
| `--g-tabbar-color` | 底部标签栏未激活项文字颜色 |
| `--g-tabbar-active-color` | 底部标签栏激活项文字颜色 |

---

## 明色与暗色的关键差异

### 主要区域背景（`--g-bg`）

明色略深于背景，形成层次感；暗色与背景相同，避免过多层次：

```typescript
// 明色
'--g-bg': 'oklch(0.9612 0 0)',

// 暗色
'--g-bg': 'oklch(var(--background))',
```

---

## 完整明色 `--g-*` 模板

```typescript
light: {
  // shadcn token ...
  '--g-bg': 'oklch(0.9612 0 0)',
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
},
```

## 完整暗色 `--g-*` 模板

```typescript
dark: {
  // shadcn token ...
  '--g-bg': 'oklch(var(--background))',
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
},
```
