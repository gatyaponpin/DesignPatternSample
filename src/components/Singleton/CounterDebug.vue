<template>
  <v-card class="pa-4" color="grey lighten-4">
    <h3>デバッグビュー</h3>
    <p>グローバルカウンター：{{ count }}</p>
    <v-btn color="secondary" @click="refresh">再取得</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Counter } from './Counter'

const counter = Counter.getInstance()
const count = ref(counter.getCount())

function refresh() {
  count.value = counter.getCount()
}
</script>