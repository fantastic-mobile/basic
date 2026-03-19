import type { ThemeSettings } from '@fantastic-mobile/settings'
import settingsDefault from '@/settings'

export const useAppSettingsStore = defineStore(
  'appSettings',
  () => {
    const settings = ref(settingsDefault)

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    watch(() => settings.value.theme.colorScheme, (val) => {
      document.documentElement.classList.add('disable-color-scheme-transition-duration')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('disable-color-scheme-transition-duration')
        })
      })
      if (val === '') {
        prefersColorScheme.addEventListener('change', updateTheme)
      }
      else {
        prefersColorScheme.removeEventListener('change', updateTheme)
      }
    }, {
      immediate: true,
    })

    const currentColorScheme = ref<Exclude<Required<ThemeSettings>['colorScheme'], ''>>()
    watch(() => settings.value.theme.colorScheme, updateTheme, {
      immediate: true,
    })
    function updateTheme() {
      let colorScheme = settings.value.theme.colorScheme
      if (colorScheme === '') {
        colorScheme = prefersColorScheme.matches ? 'dark' : 'light'
      }
      currentColorScheme.value = colorScheme
      switch (colorScheme) {
        case 'light':
          document.documentElement.classList.remove('dark')
          break
        case 'dark':
          document.documentElement.classList.add('dark')
          break
      }
    }
    watch(() => settings.value.theme.radius, (val) => {
      document.documentElement.style.removeProperty('--radius')
      document.documentElement.style.setProperty('--radius', `${val}rem`)
    }, {
      immediate: true,
    })
    watch([
      () => settings.value.app.rip,
      () => settings.value.theme.colorAmblyopia,
    ], (val) => {
      document.documentElement.style.removeProperty('filter')
      if (val[0] && val[1]) {
        document.documentElement.style.setProperty('filter', 'grayscale(100%) invert(80%)')
      }
      else if (val[0]) {
        document.documentElement.style.setProperty('filter', 'grayscale(100%)')
      }
      else if (val[1]) {
        document.documentElement.style.setProperty('filter', 'invert(80%)')
      }
    }, {
      immediate: true,
    })

    const title = ref('')
    // 设置网页标题
    function setTitle(val: string) {
      title.value = val
    }

    return {
      settings,
      currentColorScheme,
      title,
      setTitle,
    }
  },
)
