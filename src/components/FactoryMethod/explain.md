# 説明

## 各ファイルの責務

- Notifier.ts ... 通知の仕様を管理するインタフェース
- NotificationFactory.ts ... 通知オブジェクトの生成を行うクラス
- InfoNotifier.ts ... 具象クラスA（コンソールに通知）
- ErrorNotifier.ts ... 具象クラスB（JSアラートで通知）

## 課題

- レベル１：　スナックバーで通知される機能を、呼び出し元の修正＋以下ファイルの追加で実装してください。
  - WarningNotifier.ts
  - NotifierSnackbar
