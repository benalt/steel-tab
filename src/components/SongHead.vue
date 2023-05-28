<script setup lang="ts">
import type { PropType } from 'vue'
import type { Song } from "../lib/song";

const props = defineProps({
  song: {
    type: Object as PropType<Song>,
    required: true
  }
})

</script>

<template>
  <h1>{{ song.name }}</h1>
  <p>{{ song.keyOf }}</p>
  <p>{{ song.tuning.name }}</p>
</template>

<style scoped>
</style>