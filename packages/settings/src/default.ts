import type { RequiredDeep } from 'type-fest'
import type { SettingsOptions } from '../types'

const settingsDefault: RequiredDeep<SettingsOptions> = {
  app: {
    auth: false,
    dynamicTitle: false,
    rip: false,
  },
  theme: {
    colorScheme: 'light',
    radius: 0.5,
    colorAmblyopia: false,
  },
  navbar: {
    enable: false,
  },
  tabbar: {
    enable: false,
    list: [],
  },
  page: {
    progress: true,
    backTop: true,
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
  },
}

export default settingsDefault
