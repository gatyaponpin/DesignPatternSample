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
  import { useSetExplanation } from '@/components/useExplanation'
  import { createNotifier } from '@/components/FactoryMethod/NotificationFactory'
  import { notificationTypes, NotificationType } from '@/components/FactoryMethod/Notifier'

  const selectedType = ref<NotificationType>('info')
  const types = notificationTypes

  function notify() {
    const notifier = createNotifier(selectedType.value)
    notifier.notify(`これは ${selectedType.value} 通知です`)
  }

  const setExplanation = useSetExplanation()
  const text = "Factory Method パターンは、<br>サブクラスでインスタンス生成方法を定義し、柔軟に切り替えるパターンです。"

  onMounted(() => {
    setExplanation?.(text)
  })
</script>