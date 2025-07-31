<!-- 基本となるフォーム -->
<template>
  <v-card class="pa-4">
    <v-text-field label="名前" v-model="localForm.name" />
    <v-text-field label="年齢" type="number" v-model="localForm.age" />
    <slot />
  </v-card>
</template>

<script setup lang="ts">
  import { defineProps, reactive } from 'vue'

  const props = defineProps<{
    form: {
      name: string
      age: number
    }
  }>()

  const localForm = reactive({ ...props.form })
</script>