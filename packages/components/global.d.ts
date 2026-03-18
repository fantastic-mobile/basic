import 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    FmAvatar: typeof import('./index')['FmAvatar']
    FmBadge: typeof import('./index')['FmBadge']
    FmButton: typeof import('./index')['FmButton']
    FmButtonGroup: typeof import('./index')['FmButtonGroup']
    FmCard: typeof import('./index')['FmCard']
    FmCheckbox: typeof import('./index')['FmCheckbox']
    FmDivider: typeof import('./index')['FmDivider']
    FmDrawer: typeof import('./index')['FmDrawer']
    FmIcon: typeof import('./index')['FmIcon']
    FmInput: typeof import('./index')['FmInput']
    FmLoading: typeof import('./index')['FmLoading']
    FmModal: typeof import('./index')['FmModal']
    FmPageMain: typeof import('./index')['FmPageMain']
    FmScrollArea: typeof import('./index')['FmScrollArea']
    FmSelect: typeof import('./index')['FmSelect']
    FmSlider: typeof import('./index')['FmSlider']
    FmSwitch: typeof import('./index')['FmSwitch']
    FmTabs: typeof import('./index')['FmTabs']
    FmToast: typeof import('./index')['FmToast']
    FmTrend: typeof import('./index')['FmTrend']
  }
}

export {}
