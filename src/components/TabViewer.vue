<script setup lang="ts">
import type { PropType } from 'vue'
import type { Tab } from '../lib/song'
import { Tuning } from '../lib/tuning'
import TabItem from './TabItem.vue';

const props = defineProps({
  tab: {
    type: Object as PropType<Tab>,
    required: true
  },
  tuning: {
    type: Tuning,
    required: true
  }
})

</script>

<template>
  <TabItem v-for="(group, idx) in tab.grouping" :tabItem="group" :tuning="tuning" :key="`tab-${idx}`" />  
</template>

<style scoped>
</style>