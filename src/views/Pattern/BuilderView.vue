<template>
  <v-container class="py-8" max-width="600">
    <v-card>
      <v-card-title class="text-h6">フォーム選択（Builder パターン）</v-card-title>
      <v-card-text>
        <v-select
          v-model="selected"
          :items="formTypes"
          label="フォームタイプを選択"
          variant="outlined"
        />

        <v-form @submit.prevent="submit">
          <v-text-field
            v-for="field in fields"
            :key="field.name"
            v-model="formData[field.name]"
            :label="field.label"
            :type="field.type"
            class="mb-4"
          />
          <v-btn type="submit" color="primary">送信</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { FieldConfig } from '@/components/Builder/FormBuilder'
import { formTypes, type FormType, getFormConfig } from '@/components/Builder/FormFactory'
  import { useSetExplanation } from '@/components/useExplanation'

const selected = ref<FormType>('basic')
const fields = ref<FieldConfig[]>([])
const formData = ref<Record<string, string>>({})

function loadForm(type: FormType) {
  const config = getFormConfig(type)
  fields.value = config
  formData.value = Object.fromEntries(config.map(f => [f.name, '']))
}

watch(selected, (val) => loadForm(val), { immediate: true })

function submit() {
  alert(JSON.stringify(formData.value, null, 2))
}

const setExplanation = useSetExplanation()
const text = `
  Builder パターンは、<br>
  <strong>複雑なオブジェクトを段階的に構築する</strong>ためのパターンです。<br>
  オブジェクトの生成手順を部品ごとに分離し、柔軟な組み立てや再利用を可能にする目的があります。<br><br>

  - ビルダー（抽象クラス／インターフェース）で構築手順を定義し、<br>
  - 具象ビルダーが具体的なパーツの組み立て方法を実装する。<br><br>

  使用例：<br>
  - SQL クエリや JSON の構築<br>
  - ユーザー登録・問い合わせなどの動的フォーム構築<br>
  - ゲームキャラクターの装備やスキル構成の構築<br>
  - レポートやドキュメントのセクション組み立て（HTML / Markdown / PDF）<br>
`

onMounted(() => {
  setExplanation?.(text)
})
</script>