import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetSafeArea from '@yeungkc/unocss-preset-safe-area'
import { entriesToCss, toArray } from '@unocss/core'
import { darkTheme, lightTheme } from './themes'

export default defineConfig<Theme>({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },
  variants: [
    (matcher) => {
      if (!matcher.startsWith('hocus:') && !matcher.startsWith('hocus-')) {
        return matcher
      }
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover, ${s}:focus`,
      }
    },
  ],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  preflights: [
    {
      getCSS: () => {
        const returnCss: any = []
        // 明亮主题
        const lightCss = entriesToCss(Object.entries(lightTheme))
        const lightRoots = toArray([`*,::before,::after`, `::backdrop`])
        returnCss.push(lightRoots.map(root => `${root}{${lightCss}}`).join(''))
        // 暗黑主题
        const darkCss = entriesToCss(Object.entries(darkTheme))
        const darkRoots = toArray([`html.dark,html.dark *,html.dark ::before,html.dark ::after`, `html.dark ::backdrop`])
        returnCss.push(darkRoots.map(root => `${root}{${darkCss}}`).join(''))

        return returnCss.join('')
      },
    },
  ],
  theme: {
    colors: {
      'ui-primary': 'rgb(var(--ui-primary))',
      'ui-text': 'rgb(var(--ui-text))',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetRemToPx(),
    presetSafeArea(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  configDeps: [
    'themes/index.ts',
  ],
})
