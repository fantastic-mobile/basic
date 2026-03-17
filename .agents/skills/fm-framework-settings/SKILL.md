---
name: fm-framework-settings
description: 管理和配置 Fantastic-mobile 框架设置。当用户提到以下任何需求时必须使用此技能：开启/关闭权限功能、哀悼模式；切换暗色/亮色/跟随系统颜色方案、调整圆角、启用色弱模式；配置顶部导航栏（navbar）启用状态；配置底部标签栏（tabbar）启用状态和导航菜单列表；调整进度条、返回顶部；设置底部版权信息；以及任何涉及 apps/*/src/settings/index.ts 的修改。
---

# 框架设置

## 第一步：确认工作区（必须阻塞等待用户回复）

本项目是 monorepo 架构，`apps/` 目录下存放各应用。**在执行任何文件读写操作之前**，必须先确认目标应用：

1. 执行 `ls apps/` 列出所有可用应用
2. **立即向用户提问**，明确询问要在哪个应用中修改设置，并**停止等待回复**
3. 收到用户明确回复后，才能继续后续步骤

> **严格规则**：如果用户没有在请求中明确说明目标应用（例如"在 example 应用中"、"apps/core"），则必须提问，不得自行猜测或默认选择任何应用。

确认后，后续所有文件路径均以该应用目录为根，例如 `apps/<app>/src/settings/index.ts`。

## 核心文件

以下路径中的 `<app>` 替换为实际应用名：

- `apps/<app>/src/types/global.d.ts` - TypeScript 类型定义（只读参考）
- `apps/<app>/src/settings/index.ts` - 当前配置文件（修改此文件）
- `apps/<app>/src/settings/default.ts` - 默认完整配置（禁止修改，仅供参考）

## 工作流程

1. **确认应用**：参见上方"确认工作区"，得到 `<app>` 后再继续
2. 读取 `apps/<app>/src/settings/index.ts` 了解当前配置
3. 查阅 `apps/<app>/src/types/global.d.ts` 中的类型定义了解可用选项
4. 查阅 `apps/<app>/src/settings/default.ts` 了解默认值
5. 仅修改 `apps/<app>/src/settings/index.ts`
6. 修改后检查：与默认值相同的配置项直接移除——`index.ts` 只需保留真正自定义的内容，框架会自动继承默认配置，这样维护时一眼就能看出哪些是项目定制的

## 配置领域

详细配置选项请参考：
- **应用设置**: [references/app-settings.md](references/app-settings.md) - 权限、水印、错误日志、哀悼模式、默认语言等
- **主题设置**: [references/theme-settings.md](references/theme-settings.md) - 颜色方案、主题同步、圆角、色弱模式等
- **顶部导航栏**: [references/navbar-settings.md](references/navbar-settings.md) - 启用状态、显示模式等
- **底部标签栏**: [references/tabbar-settings.md](references/tabbar-settings.md) - 启用状态、显示模式、导航菜单列表等
- **页面设置**: [references/page-settings.md](references/page-settings.md) - 切换动画、进度条、返回顶部等
- **版权设置**: [references/copyright-settings.md](references/copyright-settings.md) - 版权开关、日期、公司、网站等
