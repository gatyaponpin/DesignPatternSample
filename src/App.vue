<template>
  <v-app>
    <v-app-bar color="primary">
      <v-btn to="/"><v-icon>mdi-home</v-icon></v-btn>
      <v-toolbar-title>Design Patter Sample App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="mt-5 d-flex">
        <v-layout height="80vh" class="pa-5 border">
          <router-view/>
        </v-layout>
        <v-layout height="80vh" class="pa-5 border">
          <ExplainBox :text="explanationText" />
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { provideExplanation } from '@/components/useExplanation'
  import ExplainBox from '@/views/ExplainBox.vue'

  const explanationText = provideExplanation()
</script>
