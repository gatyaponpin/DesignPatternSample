<template>
  <v-container>
    <v-btn
      v-for="adapter in adapterRegistry"
      :key="adapter.key"
      class="ma-2"
      @click="showForm(adapter)"
    >
      {{ adapter.label }} を表示
    </v-btn>

    <v-divider class="my-4" />

    <component
      v-if="currentForm"
      :is="currentForm.component"
      v-model:form="currentForm.data"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Component } from 'vue'
import { adapterRegistry, type AdapterComponentEntry } from '@/components/Adapter/useAdapterRegistry'
import { useSetExplanation } from '@/components/useExplanation'

type FormInstance<T> = {
  component: Component
  data: T
}

const currentForm = ref<FormInstance<unknown> | null>(null)

function showForm<T>(entry: AdapterComponentEntry<T>) {
  currentForm.value = {
    component: entry.component,
    data: entry.create()
  }
}

const setExplanation = useSetExplanation()
const text = `
  Adapter パターンは、<br>
  <strong>インターフェースの異なるクラス同士をつなぐ変換層</strong>を提供する構造パターンです。<br><br>

  - 既存のクラスや外部APIの形式が合わないとき、<br>
  - クライアントが期待する形式に変換して橋渡しします。<br><br>

  使用例：<br>
  - 外部APIの snake_case → camelCase 変換<br>
  - 古いログシステムを新ロガーインターフェースで再利用<br>
  - 異なる支払いサービス（PayPal/Stripeなど）を統一インターフェースで扱う<br><br>

  Vueでは主に：<br>
  - APIレスポンス整形関数として<br>
  - Wrapperコンポーネントによる props 変換<br>
  - 非互換な props やデータ構造の受け渡し補完<br><br>
`

onMounted(() => {
  setExplanation?.(text)
})
</script>