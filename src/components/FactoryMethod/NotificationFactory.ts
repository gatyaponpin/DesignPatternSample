// 通知オブジェクトの生成を行う部分
import { InfoNotifier } from './InfoNotifier'
import { ErrorNotifier } from './ErrorNotifier'
import type { Notifier, NotificationType } from './Notifier'

export function createNotifier(type: NotificationType): Notifier {
  switch (type) {
    case 'info':
      return new InfoNotifier()
    case 'error':
      return new ErrorNotifier()
    default:
      throw new Error(`Unknown notification type: ${type}`)
  }
}