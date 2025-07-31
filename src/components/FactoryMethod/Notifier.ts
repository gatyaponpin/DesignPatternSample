// 通知の仕様を決める部分
export const notificationTypes = ['info', 'error'] as const
export type NotificationType = typeof notificationTypes[number]

export interface Notifier {
  notify(message: string): void;
}