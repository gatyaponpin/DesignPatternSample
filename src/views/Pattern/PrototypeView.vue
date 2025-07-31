<template>
  <v-container>
    <v-btn
      v-for="proto in prototypeRegistry"
      :key="proto.key"
      class="ma-2"
      @click="showForm(proto)"
    >
      {{ proto.label }}フォームを表示
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
import { prototypeRegistry, FormComponentEntry } from '@/components/Prototype/useFormPrototype'
import { useSetExplanation } from '@/components/useExplanation'

type FormInstance<T> = {
  component: Component
  data: T
}

const currentForm = ref<FormInstance<unknown> | null>(null)

function showForm<T>(entry: FormComponentEntry<T>) {
  currentForm.value = {
    component: entry.component,
    data: entry.create()
  }
}

const setExplanation = useSetExplanation()
  const text = `
    Prototype パターンは、<br>
    <strong>既存のオブジェクトを複製して新しいインスタンスを生成する</strong>パターンです。<br><br>

    - 抽象クラスまたはインターフェースに clone() メソッドを定義し、
    - 具象クラスが自身の複製方法（ディープコピーなど）を実装する。<br><br>

    使用例：<br>
    - ゲームキャラやスキル構成のテンプレート複製 <br>
    - 複雑なフォームやUI構造の再利用<br>
    - オブジェクト初期化コストが高い設計書・図面などの複製<br>
    - ユーザー別のカスタム設定プリセットの生成<br><br>

    なぜ「複製」する必要があるのか：<br>
    例えば、会員登録フォームと、それを元にしたVIP会員登録フォームがあるとする。<br>
    別ファイルで定義すると、「BasicRegisterForm」「BivRegisterForm」となるだろう。<br>
    これでは似たようなフィールド・構成が重複するため、保守性が悪い。<br><br>
    
    「共通コンポーネント化」との違い：<br>
    - クローンすれば、元ファイルと同様の機能を担保しつつ、元ファイルに修正を入れる必要が無い！
  `

  onMounted(() => {
    setExplanation?.(text)
  })
</script>
