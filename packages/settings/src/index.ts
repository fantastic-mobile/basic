import type { RequiredDeep } from 'type-fest'
import type { SettingsOptions } from '../types'
import { createDefu } from 'defu'
import { cloneDeep } from 'es-toolkit'
import settingsDefault from './default'

const merge = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key] = value
    return true
  }
})

export function setSettings(settings: SettingsOptions) {
  return merge(settings, cloneDeep(settingsDefault)) as RequiredDeep<SettingsOptions>
}
