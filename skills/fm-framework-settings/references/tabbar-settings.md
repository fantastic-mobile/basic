# 底部标签栏设置 (tabbar)

移动端底部导航栏配置。

## enable

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 是否启用底部标签栏

## list

- **类型**: `tabbarListItem[]`
- **默认值**: `[]`
- **说明**: 底部导航菜单项列表

### tabbarListItem 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | `string` | 是 | 路由路径（来自 vue-router auto-routes） |
| `icon` | `string` | 否 | 未激活时的图标 |
| `activeIcon` | `string` | 否 | 激活时的图标 |
| `text` | `string` | 否 | 显示文字，支持 i18n key |

## 完整示例

```typescript
import { $t } from '@/locales'

tabbar: {
  enable: true,
  list: [
    {
      path: '/',
      icon: 'i-ic:sharp-home',
      activeIcon: 'i-ic:twotone-home',
      text: $t('tabbar.index'),
    },
    {
      path: '/user/',
      icon: 'i-ic:baseline-person',
      activeIcon: 'i-ic:twotone-person',
      text: $t('tabbar.user'),
    },
  ],
}
```
