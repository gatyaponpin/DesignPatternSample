# デザインパターンサンプルアプリについて

## サンプルアプリ

- Render.com で配信しています。

<https://designpatternsample.onrender.com>

## アプリの説明

- このアプリは、GoFが提唱するデザインパターンの概念説明のためのアプリです。
- デザインパターンの概念説明については、様々なサイトやブログが明るいです。
- 画面左部にオブジェクトコンポーネント、右部に説明文が表示されます。
- 画面上の説明とソースコードを見比べながら内容を確認してください。
- （適当に作ったのでディレクトリ構造とかはお粗末です。。。）

## 開発者向け

- 本リポジトリをクローンして、"explain.md" の "課題" の内容で改修してみてください。
- 手順は以下の通りです。

```bash
git clone https://github.com/gatyaponpin/DesignPatternSample.git
cd sample-app
npm install
npm run serve
```

## ディレクトリ構造

```txt
/
└─ src
   ├─ components ... 各デザインパターンのクラスやコンポーネント群
   ├─ views ... 実際に画面に表示するを整えるためのファイル群
   |  └─ Pattern ... デザインパターンの呼び出し元ファイル群
   └─ App.vue ... ルートコンポーネント
```
