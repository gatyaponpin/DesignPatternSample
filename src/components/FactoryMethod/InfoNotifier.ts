import type { Notifier } from './Notifier'

export class InfoNotifier implements Notifier {
  notify(message: string): void {
    console.log(`🟢 INFO: ${message}`)
  }
}