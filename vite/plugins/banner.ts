import banner from 'vite-plugin-banner'

export default function createBanner() {
  return banner(`
/**
 * 由 Fantastic-mobile 提供技术支持
 * Powered by Fantastic-mobile
 * https://fantastic-mobile.github.io/
 */
  `)
}
