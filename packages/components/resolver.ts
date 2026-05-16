import type { ImportsMap } from 'unplugin-auto-import/types'
import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'

const COMPONENT_PREFIX = 'Fm'
const PACKAGE_NAME = '@fantastic-mobile/components'

const BASIC_COMPONENT_NAMES = [
  'FmAvatar',
  'FmBadge',
  'FmButton',
  'FmButtonGroup',
  'FmCard',
  'FmCheckbox',
  'FmCheckboxGroup',
  'FmDivider',
  'FmDrawer',
  'FmIcon',
  'FmInput',
  'FmLabel',
  'FmLoading',
  'FmModal',
  'FmPageMain',
  'FmRadioGroup',
  'FmScrollArea',
  'FmSelect',
  'FmSlider',
  'FmSwitch',
  'FmTabs',
  'FmToast',
  'FmTrend',
] as const

const COMPONENT_NAMES = [
  ...BASIC_COMPONENT_NAMES,
] as const

const AUTO_IMPORT_NAMES = [
  'useFmDrawer',
  'useFmLoading',
  'useFmModal',
  'useFmToast',
] as const

export const AutoImports: ImportsMap = {
  [PACKAGE_NAME]: [...AUTO_IMPORT_NAMES],
}

export function ComponentsResolver(): ComponentResolver {
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

export const ComponentsType: TypeImport = {
  from: PACKAGE_NAME,
  names: [...COMPONENT_NAMES],
}
