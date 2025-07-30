<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{ text: string }>()
</script>

<template>
  <div>
    <h3 class="text-h6 mb-2">解説</h3>
    <p v-html="text"></p>
  </div>
</template>