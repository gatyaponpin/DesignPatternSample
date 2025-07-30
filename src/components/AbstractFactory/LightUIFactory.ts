// 具象クラスA

import LightButton from './LightButton.vue'
import LightAlert from './LightAlert.vue'
import type { UIFactory } from './UIFactory'

export class LightUIFactory implements UIFactory {
  createButton() {
    return LightButton
  }
  createAlert() {
    return LightAlert
  }
}