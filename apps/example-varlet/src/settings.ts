import { setSettings } from '@fantastic-mobile/settings'

export default setSettings({
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
})
