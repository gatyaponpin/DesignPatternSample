# 説明

## アンチパターン

ボタンコンポーネントを実装する際に、形状 × 色 でコンポーネントを分けたい。
単純に実装していくと以下のようになる。

- 丸い赤ボタン → RoundedRedButton
- 丸い青ボタン → RoundedBlueButton
- 角ばった赤ボタン → SquareRedButton

⇒ 形状 × 色 の数だけクラスやコンポーネントが必要になる。

## Bridgeパターンを使うと

- 「形状（Button Abstraction）」と「色（Color Implementation）」を分離して、独立に組み合わせられるようにできる。
- 新たな概念が追加された場合も修正/追加が容易になる。

## 抽象層と実装層

- 抽象層（Abstraction）
- 実装層（Implementor）

Bridgeパターンでは、「構造」と「機能の実装」を橋渡し（Bridge）して分離する必要があります。
今回はボタンの形状を「構造」と定義して、それ以外を「振舞の実装」としました。

## 各ファイル/ディレクトリの責務

- useButtonBridge.ts ... データ提供（Bridge構造を利用して生成したボタン群を提供）
- ButtonShape.ts ... ボタン形状の抽象クラス（BridgeのAbstraction側）、これ以外のImplementorを全て呼び出す
- ButtonColor.ts ... 色に関する共通インターフェース（BridgeのImplementor側）
- shape/ ... 構造定義（RefinedAbstraction）
- color/ ... ButtonColor の実装（ConcreteImplementor）

## 課題

- レベル１：形状と色をそれぞれ追加してください。
- レベル２：実装層に「ボタンサイズ」を追加してください。
