import type { PluginOption } from 'vite'
import boxen from 'boxen'
import picocolors from 'picocolors'
import banner from 'vite-plugin-banner'

export interface FantasticMobileCopyrightOptions {
  edition?: string
  website?: string
}

function resolveOptions(options: FantasticMobileCopyrightOptions = {}) {
  return {
    edition: options.edition ?? '基础版',
    website: options.website ?? 'https://fantastic-mobile.hurui.me',
  }
}

export function createFantasticMobileBannerPlugin(options: FantasticMobileCopyrightOptions = {}): PluginOption {
  const { website } = resolveOptions(options)

  return banner(`
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * ${website}
 */
  `)
}

export function createFantasticMobileTerminalInfoPlugin(options: FantasticMobileCopyrightOptions = {}): PluginOption {
  const { edition, website } = resolveOptions(options)

  return {
    name: 'vite-plugin-terminal-info',
    apply: 'serve',
    async buildStart() {
      const { bold, green, cyan, bgGreen, underline } = picocolors

      // eslint-disable-next-line no-console
      console.log(
        boxen(
          `${bold(green(`由 ${bgGreen('Fantastic-mobile')} 驱动`))}\n\n${underline(website)}\n\n当前使用：${cyan(edition)}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            textAlignment: 'center',
          },
        ),
      )
    },
  }
}

export function createFantasticMobileSystemCopyrightPlugin(options: FantasticMobileCopyrightOptions = {}): PluginOption {
  const { website } = resolveOptions(options)
  const fontFamily = 'font-family: "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Consolas, "Liberation Mono", monospace;'
  const mainStyle = `${fontFamily} font-size: 14px; font-weight: 700; padding: 6px 8px; color: #fff; background: #e24329;`
  const subStyle = `${fontFamily} font-size: 14px; font-weight: 500; padding: 6px 8px; color: #fff; background: #707070;`
  const iconStyle = `${fontFamily} font-size: 14px; font-weight: 500; padding: 6px 4px 6px 8px; color: #fff; background: #707070;`
  const linkStyle = `${fontFamily} font-size: 14px; font-weight: 500; letter-spacing: 0.2px; padding: 6px 8px 6px 4px; color: #fff; background: #707070; text-decoration: underline; text-underline-offset: 2px;`

  return {
    name: 'vite-plugin-system-copyright',
    apply: 'build',
    transform(code, id) {
      if (!/src\/main\.ts$/.test(id)) {
        return
      }

      return {
        code: `
/* eslint-disable no-console */
if ((navigator.language).toLowerCase() === 'zh-cn') {
  console.info('%c由%cFantastic-mobile%c驱动%c👉%c${website}', ${JSON.stringify(subStyle)}, ${JSON.stringify(mainStyle)}, ${JSON.stringify(subStyle)}, ${JSON.stringify(iconStyle)}, ${JSON.stringify(linkStyle)})
}
else {
  console.info('%cPowered by %cFantastic-mobile%c%c👉%c${website}', ${JSON.stringify(subStyle)}, ${JSON.stringify(mainStyle)}, ${JSON.stringify(subStyle)}, ${JSON.stringify(iconStyle)}, ${JSON.stringify(linkStyle)})
}

${code}
        `,
        map: null,
      }
    },
  }
}

export function createFantasticMobileCopyrightPlugins(options: FantasticMobileCopyrightOptions = {}): PluginOption[] {
  return [
    createFantasticMobileBannerPlugin(options),
    createFantasticMobileTerminalInfoPlugin(options),
    createFantasticMobileSystemCopyrightPlugin(options),
  ]
}
