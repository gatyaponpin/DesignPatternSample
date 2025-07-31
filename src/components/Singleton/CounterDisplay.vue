<template>
  <v-card class="pa-4">
    <h3>カウンター表示</h3>
    <p>現在の値：{{ count }}</p>
    <v-btn color="primary" @click="incrementCounter">カウント +1</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Counter } from './Counter' // ファイルパスは環境に合わせて調整

const counter = Counter.getInstance()
const count = ref(counter.getCount())

function incrementCounter() {
  counter.increment()
  count.value = counter.getCount()
}
</script>