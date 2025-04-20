// 该文件为系统默认配置，请勿修改！！！

import type { RecursiveRequired, Settings } from '#/global'

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
  app: {
    colorScheme: 'light',
    radius: 0.5,
    enableMournMode: false,
    enableColorAmblyopiaMode: false,
    enablePermission: false,
    enableProgress: true,
    enableDynamicTitle: false,
    enableBackTop: true,
  },
  navbar: {
    enable: false,
  },
  tabbar: {
    enable: false,
    list: [],
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
    beian: '',
  },
}

export default globalSettingsDefault
