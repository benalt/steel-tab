<script setup lang="ts">
import TuningTable from '../components/TuningTable.vue'
import { useTunings } from '../stores/TuningStore';
import { useRoute } from "vue-router";
const tunings = useTunings();
const route = useRoute();

const tuning = tunings[route.params.key];

</script>

<template>
  <TuningTable :tuning="tuning"/>
</template>
