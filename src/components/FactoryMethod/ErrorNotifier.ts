import type { Notifier } from './Notifier'

export class ErrorNotifier implements Notifier {
  notify(message: string): void {
    alert(`ERROR: ${message}`)
  }
}