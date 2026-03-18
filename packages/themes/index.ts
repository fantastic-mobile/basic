export const lightTheme = {
  'color-scheme': 'light',
  // shadcn
  '--background': '1 0 0',
  '--foreground': '0.141 0.005 285.823',
  '--card': '1 0 0',
  '--card-foreground': '0.141 0.005 285.823',
  '--popover': '1 0 0',
  '--popover-foreground': '0.141 0.005 285.823',
  '--primary': '0.21 0.006 285.885',
  '--primary-foreground': '0.985 0 0',
  '--secondary': '0.967 0.001 286.375',
  '--secondary-foreground': '0.21 0.006 285.885',
  '--muted': '0.967 0.001 286.375',
  '--muted-foreground': '0.552 0.016 285.938',
  '--accent': '0.967 0.001 286.375',
  '--accent-foreground': '0.21 0.006 285.885',
  '--destructive': '0.577 0.245 27.325',
  '--border': '0.92 0.004 286.32',
  '--input': '0.92 0.004 286.32',
  '--ring': '0.705 0.015 286.067',
  // 主要区域
  '--g-bg': 'oklch(0.9612 0 0)',
  // 导航栏
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  // 标签栏
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
}

export const darkTheme = {
  'color-scheme': 'dark',
  // shadcn
  '--background': '0.141 0.005 285.823',
  '--foreground': '0.985 0 0',
  '--card': '0.21 0.006 285.885',
  '--card-foreground': '0.985 0 0',
  '--popover': '0.21 0.006 285.885',
  '--popover-foreground': '0.985 0 0',
  '--primary': '0.92 0.004 286.32',
  '--primary-foreground': '0.21 0.006 285.885',
  '--secondary': '0.274 0.006 286.033',
  '--secondary-foreground': '0.985 0 0',
  '--muted': '0.274 0.006 286.033',
  '--muted-foreground': '0.705 0.015 286.067',
  '--accent': '0.274 0.006 286.033',
  '--accent-foreground': '0.985 0 0',
  '--destructive': '0.704 0.191 22.216',
  '--border': '0.252 0.002 286.27',
  '--input': '0.341 0 0',
  '--ring': '0.552 0.016 285.938',
  // 主要区域
  '--g-bg': 'oklch(var(--background))',
  // 导航栏
  '--g-navbar-bg': 'oklch(var(--background))',
  '--g-navbar-color': 'oklch(var(--foreground))',
  // 标签栏
  '--g-tabbar-bg': 'oklch(var(--background))',
  '--g-tabbar-color': 'oklch(var(--accent-foreground) / 50%)',
  '--g-tabbar-active-color': 'oklch(var(--foreground))',
}

export default {
  default: {
    light: lightTheme,
    dark: darkTheme,
  },
}
