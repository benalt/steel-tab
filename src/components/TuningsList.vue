<script setup lang="ts">
import { useTunings } from "../stores/TuningStore"
const tunings = useTunings().standardTunings;
</script>

<template>
  <h1>All the standard tunings</h1>
  <ul>
    <li v-for="(tuning, key) in tunings" :key="`tuning-${key}`"> 
      <router-link :to="`/tuning/${ key }`">{{tuning.name}}</router-link>
    </li>
  </ul>
</template>

<style></style>