import autoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'pinia',
      VueRouterAutoImports,
      {
        'vue-router/auto': ['useLink'],
      },
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [
      './src/utils/composables/**',
    ],
  })
}
