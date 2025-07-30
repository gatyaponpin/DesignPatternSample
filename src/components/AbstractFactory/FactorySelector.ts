// 具象クラスを選択する責務
import { LightUIFactory } from './LightUIFactory'
import { DarkUIFactory } from './DarkUIFactory'
import type { UIFactory, ThemeType } from './UIFactory'

export function getFactory(theme: ThemeType): UIFactory {
  switch (theme) {
    case 'light':
      return new LightUIFactory()
    case 'dark':
      return new DarkUIFactory()
    default:
      return new LightUIFactory()
  }
}