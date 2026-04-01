# 版权设置 (copyright)

底部版权信息配置。

## enable

- **类型**: `boolean`
- **默认值**: `false`
- **说明**: 是否开启底部版权信息显示。也可在路由 meta 中单独控制某个页面是否显示版权信息

## dates

- **类型**: `string`
- **默认值**: `''`
- **说明**: 网站运行日期，例如 `'2024-present'`

## company

- **类型**: `string`
- **默认值**: `''`
- **说明**: 版权信息中显示的公司/项目名称

## website

- **类型**: `string`
- **默认值**: `''`
- **说明**: 版权信息中显示的网站地址

## 完整示例

```typescript
copyright: {
  enable: true,
  dates: '2024-present',
  company: 'My Company',
  website: 'https://example.com',
}
```
