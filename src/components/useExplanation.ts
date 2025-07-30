// composables/useExplanation.ts
import { inject, provide, ref } from 'vue'

const explanationText = ref('')

export function provideExplanation() {
  provide('setExplanation', (text: string) => {
    explanationText.value = text
  })

  return explanationText
}

export function useSetExplanation() {
  return inject<(text: string) => void>('setExplanation')
}