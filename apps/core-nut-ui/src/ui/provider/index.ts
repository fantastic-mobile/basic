import type { App } from 'vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/style.css'
import '@nutui/touch-emulator'

function install(app: App) {
  app.use(NutUI)
}

export default { install }
