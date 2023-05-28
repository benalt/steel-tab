<script setup lang="ts">
  import { useTunings } from "../stores/TuningStore";
  const tunings = useTunings();
</script>

<template>
  <ul>
    <li v-for="(tuning, key) in tunings" :key="`tuning-${tuning.key}`"> 
      <router-link :to="`/tuning/${ key }`">{{tuning.name}}</router-link>
    </li>
  </ul>
</template>


<style>

</style>