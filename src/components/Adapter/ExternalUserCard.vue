<template>
  <v-card class="pa-4">
    <h3>{{ form.name }}</h3>
    <p>ID: {{ form.id }}</p>
    <p>Email: {{ form.email }}</p>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  form: {
    id: string
    name: string
    email: string
  }
}>()
</script>