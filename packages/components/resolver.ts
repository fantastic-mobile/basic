import type { ImportsMap } from 'unplugin-auto-import/types'
import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'

const COMPONENT_PREFIX = 'Fm'
const PACKAGE_NAME = '@fantastic-mobile/components'

// 所有已注册的组件名（与 index.ts 导出保持同步）
// 这是唯一数据源，resolver 和 types 都从这里读取
const COMPONENT_NAMES = [
  'FmAvatar',
  'FmBadge',
  'FmButton',
  'FmButtonGroup',
  'FmCard',
  'FmCheckbox',
  'FmDivider',
  'FmDrawer',
  'FmIcon',
  'FmInput',
  'FmLoading',
  'FmModal',
  'FmPageMain',
  'FmScrollArea',
  'FmSelect',
  'FmSlider',
  'FmSwitch',
  'FmTabs',
  'FmToast',
  'FmTrend',
] as const

const AUTO_IMPORT_NAMES = [
  'useFmDrawer',
  'useFmLoading',
  'useFmModal',
  'fmToast',
] as const

/**
 * unplugin-auto-import 静态导入配置
 * 用于脚本中自动导入 package 暴露的工具方法
 */
export const FantasticAutoImports: ImportsMap = {
  [PACKAGE_NAME]: [...AUTO_IMPORT_NAMES],
}

/**
 * unplugin-vue-components resolver
 * 用于模板中自动导入组件
 */
export function FantasticComponentsResolver(): ComponentResolver {
  const names = new Set<string>(COMPONENT_NAMES)
  return {
    type: 'component',
    resolve(name: string) {
      if (name.startsWith(COMPONENT_PREFIX) && names.has(name)) {
        return {
          name,
          from: PACKAGE_NAME,
        }
      }
    },
  }
}

/**
 * unplugin-vue-components types 配置
 * 用于在生成的 components.d.ts 中声明全局组件类型
 *
 * @example 在 vite 配置中使用：
 * ```ts
 * import { FantasticComponentsResolver, FantasticComponentsType } from '@fantastic-mobile/components/resolver'
 *
 * components({
 *   resolvers: [FantasticComponentsResolver()],
 *   types: [FantasticComponentsType],
 * })
 * ```
 */
export const FantasticComponentsType: TypeImport = {
  from: PACKAGE_NAME,
  names: [...COMPONENT_NAMES],
}
