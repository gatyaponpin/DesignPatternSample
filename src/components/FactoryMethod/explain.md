# 各ファイルの責務

- Notifier.ts ... 通知の仕様を管理するインタフェース
- NotificationFactory.ts ... 通知オブジェクトの生成を行うクラス
- InfoNotifier.ts ... 具象クラスA（コンソールに通知）
- ErrorNotifier.ts ... 具象クラスB（JSアラートで通知）
