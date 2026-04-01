# 应用设置 (app)

## auth

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 是否开启权限功能

## dynamicTitle

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 是否启用动态页面标题（根据当前路由自动更新 document.title）

## rip

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 哀悼模式，开启后网站将整体变灰

## 完整示例

```typescript
app: {
  auth: true,
  dynamicTitle: true,
  rip: false,
}
```

## 常见配置

**开启权限功能:**
```typescript
app: {
  auth: true,
}
```

**开启哀悼模式:**
```typescript
app: {
  rip: true,
}
```
