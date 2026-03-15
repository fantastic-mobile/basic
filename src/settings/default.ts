// 该文件为系统默认配置，请勿修改！！！

import type { Settings } from '#/global'
import type { RequiredDeep } from 'type-fest'

const globalSettingsDefault: RequiredDeep<Settings.all> = {
  app: {
    enablePermission: false,
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

export default globalSettingsDefault
