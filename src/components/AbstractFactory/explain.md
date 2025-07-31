# 各ファイルの責務

- UIFactory.ts ... インタフェース
- FactorySelector.ts ... 生成パターンの選択を行うクラス
- LightUIFactory.ts ... 具象クラスAの生成を管理するクラス
- DarkUIFactory.ts ... 具象クラスBの生成を管理するクラス
- LightAlert.vue ... 具象クラスA（ライトテーマのアラート）
- LightButton.vue ... 具象クラスA'（ライトテーマのボタン）
- DarkAlert.vue ... 具象クラスB（ダークテーマのアラート）
- DarkButton.vue ... 具象クラスB'（ダークテーマのボタン）
