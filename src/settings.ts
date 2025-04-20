import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'
import { cloneDeep } from 'es-toolkit'

const globalSettings: Settings.all = {
  // 请在此处编写或粘贴配置代码
  tabbar: {
    list: [
      {
        path: '/',
        icon: 'i-ic:sharp-home',
        activeIcon: 'i-ic:twotone-home',
        text: '主页',
      },
      {
        path: '/user/',
        icon: 'i-ic:baseline-person',
        activeIcon: 'i-ic:twotone-person',
        text: '我的',
      },
    ],
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
