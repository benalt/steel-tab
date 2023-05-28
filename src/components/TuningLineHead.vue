<script setup lang="ts">
import { Tuning } from "../lib/tuning";

const props = defineProps({
  tuning: {
    type: Tuning,
    required: true    
  }
})
</script>

<template>

  <div class="course-head">
    <div class="course-label" v-for="(note, idx) in tuning.courses" :key="`course-${idx}`">
      <span class="course-note">{{note}}</span>
      <span class="course-index">{{idx + 1}}</span>
    </div>
  </div>
</template>

<style scoped>
.course-head {
  border-top: 1px solid var(--tab-border);
  border-left: 1px solid var(--tab-border);
  margin-bottom: 2em;
}

.course-label {
  border-bottom: 1px solid var(--tab-border);
}

.course-note,
.course-index { 
  display: inline-block;  
  min-width: 32px;
  padding: 0 5px;
  text-align: center;
  border-right: 1px solid var(--tab-border);
}

</style>