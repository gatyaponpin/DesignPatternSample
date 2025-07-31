<template>
  <CounterDisplay />
  <CounterDebug />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import CounterDisplay from '@/components/Singleton/CounterDisplay.vue'
import CounterDebug from '@/components/Singleton/CounterDebug.vue'
import { useSetExplanation } from '@/components/useExplanation'

const setExplanation = useSetExplanation()
  const text = `
    Singleton パターンは、<br>
    <strong>あるクラスのインスタンスがアプリケーション全体でただ1つしか存在しないこと</strong>を保証するパターンです。<br><br>

    特性：<br>
    - インスタンスが１つだけ<br>
    - グローバルアクセス可能<br>
    - 状態を１箇所に集中<br><br>

    使用例：<br>
    - 設定管理 <br>
    - ログ管理<br>
    - 認証情報<br>
    - １回だけ初期化したい処理（DB接続、外部APIクライアントなど）<br><br>

    ※基本的には <strong>Pinia や Redux のようなリアクティブな状態管理ライブラリを使うべき</strong>
  `

  onMounted(() => {
    setExplanation?.(text)
  })
</script>