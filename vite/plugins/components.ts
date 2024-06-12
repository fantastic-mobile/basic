import components from 'unplugin-vue-components/vite'

export default function createComponents() {
  return components({
    dirs: [
      'src/components/*',
      'src/ui-kit',
    ],
    deep: false,
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
