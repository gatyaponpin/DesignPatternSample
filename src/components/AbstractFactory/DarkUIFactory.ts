// 具象クラスB

import DarkButton from './DarkButton.vue'
import DarkAlert from './DarkAlert.vue'
import type { UIFactory } from './UIFactory'

export class DarkUIFactory implements UIFactory {
  createButton() {
    return DarkButton
  }
  createAlert() {
    return DarkAlert
  }
}