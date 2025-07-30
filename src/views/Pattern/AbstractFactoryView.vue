<template>
  <v-container class="py-8" max-width="600">
    <v-card>
      <v-card-title class="text-h6">
        Abstract Factory パターン デモ
      </v-card-title>

      <v-card-text>
        <v-select
          v-model="selectedTheme"
          :items="types"
          label="テーマを選択"
          variant="outlined"
        />

        <component :is="currentButton" class="mt-4" />
        <component :is="currentAlert" class="mt-4" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { themeTypes } from '@/components/AbstractFactory/UIFactory'
import type { ThemeType } from '@/components/AbstractFactory/UIFactory'
import { getFactory } from '@/components/AbstractFactory/FactorySelector'
import { useSetExplanation } from '@/components/useExplanation'

const types = themeTypes
const selectedTheme = ref<ThemeType>('light')

const factory = computed(() => getFactory(selectedTheme.value))
const currentButton = computed(() => factory.value.createButton())
const currentAlert = computed(() => factory.value.createAlert())

const setExplanation = useSetExplanation()
const text = `
  Abstract Factory パターンは、<br>
  関連するオブジェクト群をまとめて生成するためのパターンです。<br>
  製品群の整合性を保ちながら、テーマや環境に応じた切替を容易にする目的があります。<br><br>

  - 抽象クラスで製品群の生成インターフェースを定義し、<br>
  - 具象クラスがそれぞれに応じた製品（コンポーネント）群を生成する。<br><br>

  使用例：<br>
  - プラットフォーム別UIコンポーネント<br>
  - ゲームのステージごとのオブジェクト生成<br>
  - 多言語対応<br>
  - HTML / PDF / Markdown の出力切り替え
`

onMounted(() => {
  setExplanation?.(text)
})
</script>