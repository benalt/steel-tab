<script setup lang="ts">
import SongHead from "../components/SongHead.vue";
import TabViewer from "../components/TabViewer.vue";
import TuningLineHead from "../components/TuningLineHead.vue"

import { useRoute } from "vue-router"
import { useSongs } from '../stores/SongStore';

const route = useRoute()
const allSongs = useSongs().sampleSongs
// @ts-ignore
const song = allSongs[route.params.key as string]
</script>

<template>
  <SongHead :song="song"/>
  <div class="tab-container">
    <TuningLineHead :tuning="song.tuning" />
    <TabViewer :tab="song.tab" :tuning="song.tuning" />
  </div>
</template>

<style scoped>
.tab-container {
  display: flex;
  flex-wrap: wrap;
}

</style>
