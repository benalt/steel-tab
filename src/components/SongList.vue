<script setup lang="ts">
import { useSongs } from '../stores/SongStore';
const allSongs = useSongs().sampleSongs

</script>

<template>
  <h1>All the songs I know about</h1>
  <ul>
    <li v-for="(song, key) in allSongs" :key="`tuning-${key}`"> 
      <router-link :to="`/song/${ key }`">{{ song.name }}: {{ song.keyOf }}</router-link>
    </li>
  </ul>
</template>

<style></style>