<template>
  <v-col cols="3">
    <v-btn :to="to" :disabled="disabled" variant="outlined" class="ma-1 pa-1" block>
      {{ label }}
    </v-btn>
  </v-col>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps<{ 
    label: string
    to: string
    disabled?: boolean
  }>()
</script>