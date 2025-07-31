<template>
  <div ref="wrapper">
    <BasicForm v-model:form="localForm" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, defineProps } from 'vue'
import BasicForm from './BasicForm.vue'

const wrapper = ref<HTMLElement | null>(null)

const props = defineProps<{
  form: {
    name: string
    age: number
  }
}>()

const localForm = reactive({ ...props.form } as { name: string; age: number })

onMounted(() => {
  const labels = wrapper.value?.querySelectorAll('label, .v-label') ?? []
  labels.forEach((label) => {
    if (label.textContent?.includes('年齢')) {
      const parent = label.closest('.v-input')
      parent?.remove()
    }
  })
})
</script>