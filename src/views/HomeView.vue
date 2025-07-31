<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <strong>生成系</strong>
      </v-col>
    </v-row>
    <v-row>
      <PatternButton label="Factory Method" to="/factory" />
      <PatternButton label="Abstract Factory" to="/abstract" />
      <PatternButton label="Builder" to="/builder" />
      <PatternButton label="Prototype" to="/prototype" />
      <PatternButton label="Singleton" to="/singleton" />
    </v-row>
    <v-row>
      <v-col cols="12">
        <strong>構造系</strong>
      </v-col>
    </v-row>
    <v-row>
      <PatternButton label="Adapter" to="/adapter" />
      <PatternButton label="Bridge" to="/bridge" />
      <PatternButton label="Composite" to="/composite" :disabled="true"/>
      <PatternButton label="Decorator" to="/decorator" :disabled="true"/>
      <PatternButton label="Facade" to="/facade" :disabled="true"/>
      <PatternButton label="Flyweight" to="/flyweight" :disabled="true"/>
      <PatternButton label="Proxy" to="/proxy" :disabled="true"/>
    </v-row>
    <v-row>
      <v-col cols="12">
        <strong>振舞系</strong>
      </v-col>
    </v-row>
    <v-row>
      <PatternButton label="Chain of Responsibility" to="/chain" :disabled="true"/>
      <PatternButton label="Command" to="/command"  :disabled="true"/>
      <PatternButton label="Iterator" to="/iterator" :disabled="true"/>
      <PatternButton label="Mediator" to="/mediator" :disabled="true"/>
      <PatternButton label="Memento" to="/memento" :disabled="true"/>
      <PatternButton label="Observer" to="/observer" :disabled="true"/>
      <PatternButton label="State" to="/state" :disabled="true"/>
      <PatternButton label="Strategy" to="/strategy" :disabled="true"/>
      <PatternButton label="Template Method" to="/template" :disabled="true"/>
      <PatternButton label="Visitor" to="/visitor" :disabled="true"/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useSetExplanation } from '@/components/useExplanation'
  import PatternButton from '@/components/HomeButtonComponent.vue'

const setExplanation = useSetExplanation()
  const text = "デザインパターンの機能説明です。<br>確認したいパターンをクリックしてください。<br><br>※実装途中のものは非アクティブです。"

  onMounted(() => {
    setExplanation?.(text)
  })
</script>
