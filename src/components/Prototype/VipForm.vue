<!-- 拡張させたフォーﾑ -->
<template>
  <BasicForm :form="form">
    <v-text-field label="VIPコード" v-model="localForm.vipCode" />
  </BasicForm>
</template>

<script setup lang="ts">
import BasicForm from './BasicForm.vue'
import { defineProps, reactive } from 'vue'

const props = defineProps<{
  form: {
    name: string
    age: number
    vipCode: string
  }
}>()

  const localForm = reactive({ ...props.form })
</script>