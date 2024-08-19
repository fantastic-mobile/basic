import { defaultsDeep } from 'lodash-es'
import settingsDefault from '@/settings.default'

const globalSettings: Settings.all = {
  app: {
    enablePermission: true,
    enableDynamicTitle: true,
  },
  tabbar: {
    list: [
      {
        path: '/feature',
        icon: 'i-ic:sharp-auto-awesome',
        activeIcon: 'i-ic:twotone-auto-awesome',
        text: '特色',
      },
      {
        path: '/',
        icon: 'i-ic:sharp-home',
        activeIcon: 'i-ic:twotone-home',
        text: '主页',
      },
      {
        path: '/user',
        icon: 'i-ic:baseline-person',
        activeIcon: 'i-ic:twotone-person',
        text: '我的',
      },
    ],
  },
  copyright: {
    dates: '2024-present',
    company: 'Fantastic-mobile',
    website: 'https://fantastic-mobile.hurui.me',
  },
}

export default defaultsDeep(globalSettings, settingsDefault) as RecursiveRequired<Settings.all>
