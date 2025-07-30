<template>
  <v-container class="py-8" max-width="500">
    <v-card>
      <v-card-title class="text-h6">
        Factory Method パターン デモ
      </v-card-title>

      <v-card-text>
        <v-select v-model="selectedType" :items="types" label="通知タイプ" variant="outlined" density="comfortable"></v-select>

        <v-btn class="mt-2" color="primary" block @click="notify">
          通知を発行
        </v-btn>
      </v-card-text>

      <v-card-subtitle class="mb-2 text-caption text-grey-darken-1">
        選んだタイプに応じて異なる通知手段が呼び出されます
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { createNotifier } from '@/components/FactoryMethod/NotificationFactory'
  import { notificationTypes, NotificationType } from '@/components/FactoryMethod/Notifier'
  import { useSetExplanation } from '@/components/useExplanation'

  const types = notificationTypes
  const selectedType = ref<NotificationType>('info')
    
  function notify() {
    const notifier = createNotifier(selectedType.value)
    notifier.notify(`これは ${selectedType.value} 通知です`)
  }

  const setExplanation = useSetExplanation()
  const text = `
  Factory Method パターンは、<br>
  サブクラスにインスタンス生成を任せ、拡張性を高めるパターンです。<br><br>

  - 基底クラスで「インスタンス生成の枠組み（工場）」を定義し、<br>
  - 実際に生成する具体クラスはサブクラスで決定する。<br><br>

   使用例：<br>
  - 通知サービスの切り替え（メール/SMS/Slack） <br>
  - ログ出力処理<br>
  - UIコンポーネントの構築ツール<br><br>

  通知タイプの実装：<br>
  info：コンソールにメッセージが表示されます。<br>
  error：JSアラートが表示されます。
  `

  onMounted(() => {
    setExplanation?.(text)
  })
</script>