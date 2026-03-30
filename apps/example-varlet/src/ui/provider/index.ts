import type { App } from 'vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

function install(app: App) {
  app.use(Varlet)
}

export default { install }
