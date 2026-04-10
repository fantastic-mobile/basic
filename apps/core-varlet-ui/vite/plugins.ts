import type { PluginOption } from 'vite'
import process from 'node:process'
import { FantasticAutoImports, FantasticComponentsResolver, FantasticComponentsType } from '@fantastic-mobile/components/resolver'
import { createFantasticMobileCopyrightPlugins } from '@fantastic-mobile/copyright'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
import vueLegacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import TurboConsole from 'unplugin-turbo-console/vite'
import components from 'unplugin-vue-components/vite'
import { loadEnv } from 'vite'
import Archiver from 'vite-plugin-archiver'
import { compression } from 'vite-plugin-compression2'
import { envParse, parseLoadedEnv } from 'vite-plugin-env-parse'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import { qrcode } from 'vite-plugin-qrcode'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'

export default function createVitePlugins(mode: string, isBuild = false) {
  const viteEnv = parseLoadedEnv(loadEnv(mode, process.cwd()))
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    VueRouter({
      routesFolder: './src/views',
      dts: './src/types/route-map.d.ts',
      exclude: ['**/components', '**/_*/**', '**/_*'],
    }),
    vue(),
    vueJsx(),
    vueLegacy({
      renderLegacyChunks: false,
      modernPolyfills: [
        'es.array.at',
        'es.object.has-own',
      ],
    }),

    // https://github.com/vuejs/devtools-next
    viteEnv.VITE_ENABLE_VUE_DEVTOOLS && VueDevTools(),

    envParse({
      dtsPath: 'src/types/env.d.ts',
    }),

    // https://github.com/svitejs/vite-plugin-qrcode
    qrcode(),

    // https://github.com/unplugin/unplugin-auto-import
    autoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
        FantasticAutoImports,
      ],
      dts: './src/types/auto-imports.d.ts',
      dirs: [
        './src/store/modules/**/*',
        './src/composables/**/*',
      ],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    components({
      globs: [
        'src/components/*/index.vue',
      ],
      dts: './src/types/components.d.ts',
      resolvers: [
        FantasticComponentsResolver(),
      ],
      types: [
        FantasticComponentsType,
      ],
    }),

    Unocss(),

    // https://github.com/SpiriitLabs/vite-plugin-svg-spritemap
    VitePluginSvgSpritemap('./src/assets/icons/*.svg'),

    // https://github.com/condorheroblog/vite-plugin-fake-server
    vitePluginFakeServer({
      logger: !isBuild,
      include: 'src/api/modules',
      enableProd: isBuild && viteEnv.VITE_BUILD_FAKE,
    }),

    // https://github.com/nonzzz/vite-plugin-compression
    viteEnv.VITE_BUILD_COMPRESS && compression({
      exclude: [/\.(br)$/, /\.(gz)$/],
      algorithms: viteEnv.VITE_BUILD_COMPRESS.split(',').map((item: string) => ({
        gzip: 'gzip',
        brotli: 'brotliCompress',
      }[item])),
    }),

    viteEnv.VITE_BUILD_ARCHIVE && Archiver({
      archiveType: viteEnv.VITE_BUILD_ARCHIVE,
    }),

    // https://github.com/unplugin/unplugin-turbo-console
    TurboConsole(),
    createFantasticMobileCopyrightPlugins(),

    {
      name: 'vite-plugin-debug-plugin',
      transform: (code, id) => {
        if (/src\/main.ts$/.test(id)) {
          if (viteEnv.VITE_APP_DEBUG_TOOL === 'eruda') {
            code = `
${code}
import eruda from 'eruda'
eruda.init()
            `
          }
          else if (viteEnv.VITE_APP_DEBUG_TOOL === 'vconsole') {
            code = `
${code}
import VConsole from 'vconsole'
new VConsole()
            `
          }
          return {
            code,
            map: null,
          }
        }
      },
    },
  ]
  return vitePlugins
}
