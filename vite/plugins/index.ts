import type { PluginOption } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import appInfo from './app-info'

import createDevtools from './devtools'
import createAutoImport from './auto-import'
import createComponents from './components'
import createUnocss from './unocss'
import createSvgIcon from './svg-icon'
import createMock from './mock'
import createCompression from './compression'
import createArchiver from './archiver'
import createConsole from './console'
import createBanner from './banner'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    appInfo(),
    VueRouter({
      routesFolder: './src/views',
      dts: './src/types/typed-router.d.ts',
      exclude: ['**/components', '**/_*/**', '**/_*'],
    }),
    vue(),
    vueJsx(),
  ]
  vitePlugins.push(createDevtools(viteEnv))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createMock(viteEnv, isBuild))
  vitePlugins.push(...createCompression(viteEnv, isBuild))
  vitePlugins.push(createArchiver(viteEnv))
  vitePlugins.push(createConsole())
  vitePlugins.push(createBanner())
  return vitePlugins
}
