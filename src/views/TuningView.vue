<script setup lang="ts">
import TuningTable from '../components/TuningTable.vue'
import { useTunings } from '../stores/TuningStore'
import { useRoute } from "vue-router"
const tunings = useTunings().standardTunings
const route = useRoute()
// @ts-ignore
const tuning = tunings[route.params.key as string]
</script>

<template>
  <TuningTable :tuning="tuning"/>
</template>
