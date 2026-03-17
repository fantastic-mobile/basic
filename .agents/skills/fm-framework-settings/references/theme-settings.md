# 主题设置 (theme)

## colorScheme

- **类型**: `'' | 'light' | 'dark'`
- **默认值**: `'light'`
- **说明**: 颜色方案
  - `'light'` - 明亮模式
  - `'dark'` - 暗黑模式
  - `''` - 跟随系统

## radius

- **类型**: `number`
- **默认值**: `0.5`
- **说明**: 圆角系数，取值范围 0 到 1
  - `0` - 无圆角（方形）
  - `0.5` - 中等圆角
  - `1` - 最大圆角

## colorAmblyopia

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 色弱模式，启用后使用色弱友好的颜色方案

## 完整示例

```typescript
theme: {
  colorScheme: 'light',
  radius: 0.5,
  colorAmblyopia: false,
}
```

## 常见配置

**跟随系统颜色方案:**
```typescript
theme: {
  colorScheme: '',
}
```

**强制暗色模式:**
```typescript
theme: {
  colorScheme: 'dark',
}
```

**调大圆角:**
```typescript
theme: {
  radius: 0.8,
}
```
