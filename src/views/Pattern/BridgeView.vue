<template>
  <v-container class="py-8" max-width="600">
    <v-card>
      <v-card-title class="text-h6">ボタン選択（Bridge パターン）</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedLabel"
          :items="buttonLabels"
          label="表示するボタンを選択"
          variant="outlined"
        />

        <v-btn
          v-if="selectedButton"
          :class="selectedButton.shape.getClasses()"
          class="mt-4"
        >
          {{ selectedButton.label }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useButtonBridge } from '@/components/Bridge/useButtonBridge'
import { useSetExplanation } from '@/components/useExplanation'

const { buttons } = useButtonBridge()

const selectedLabel = ref<string>(buttons[0]?.label || '')

const buttonLabels = buttons.map(b => b.label)

const selectedButton = computed(() =>
  buttons.find(b => b.label === selectedLabel.value)
)

const setExplanation = useSetExplanation()
const text = `
  Bridge パターンは、<br>
  <strong>抽象部分と実装部分を分離して独立に拡張</strong>できる構造を提供します。<br><br>

  この例では、<br>
  - 形状（角型・丸型）を <strong>抽象</strong> とし、<br>
  - 色（赤・青）を <strong>実装</strong> として分離。<br><br>

  組み合わせの爆発を防ぎ、<br>
  形状や色をそれぞれ独立して追加・差し替え可能にしています。
`

onMounted(() => {
  setExplanation?.(text)
})
</script>

<style scoped>
.bg-red {
  background-color: #f44336;
}
.bg-blue {
  background-color: #2196f3;
}
</style>