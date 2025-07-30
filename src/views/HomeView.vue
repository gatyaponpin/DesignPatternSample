<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <strong>生成系</strong>
      </v-col>
    </v-row>
 <v-row>
      <PatternButton label="Factory Method" to="/factory" />
      <PatternButton label="Abstract Factory" to="/abstract" :disabled="true"/>
      <PatternButton label="Builder" to="/builder" :disabled="true"/>
      <PatternButton label="Prototype" to="/prototype" :disabled="true"/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useSetExplanation } from '@/components/useExplanation'
  import PatternButton from '@/components/ButtonComponent.vue'

const setExplanation = useSetExplanation()
  const text = "デザインパターンの機能説明です。<br>確認したいパターンをクリックしてください。<br><br>※実装途中のものは非アクティブです。"

  onMounted(() => {
    setExplanation?.(text)
  })
</script>
