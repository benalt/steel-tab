<script setup lang="ts">
import type { PropType } from 'vue'
import type { TabItem } from '../lib/song'
import { Tuning } from '../lib/tuning'

const props = defineProps({
  tabItem: {
    type: Object as PropType<TabItem>,
    required: true
  },
  tuning: {
    type: Tuning,
    required: true
  }
})

function spaceOrSoundCall(sound:string|undefined):string {
  if (sound) { return sound; }
  return '\xa0'
}
</script>

<template>
  <div :class="`tab-item ${tabItem.measureBreak ? 'measure-break' : '' }`">
    <div class="establishedChord" v-if="tabItem.establishChord">
      {{tabItem.establishChord.rootNote}}{{tabItem.establishChord.chordType}}
    </div>
    <div class="tab-cell" :style="{ paddingLeft: tabItem.leftOffset + 'px'}" v-for="(course, courseIndex) in tuning.courses" :key="`tab-${courseIndex}`">
      {{spaceOrSoundCall(tabItem[courseIndex])}}
    </div>
    <div class="tab-item-handle"></div>
  </div>
</template>

<style scoped>
.tab-item {
  position: relative;
  border-top: 1px solid var(--tab-border);
  margin-bottom: 3em;
}

.tab-item.measure-break {
  border-left: 1px solid var(--tab-border);
}

.tab-item:last-child {
  border-right: 1px solid var(--tab-border);
}

.tab-cell {
  border-bottom: 1px solid var(--tab-border);
  padding-right: .8em;
}

.tab-item-handle {
  display: none;
  position: absolute;
  top: -.5em;
  left: calc(100% - 1.5em);
  background-color: blue;
  width: 1em;
  height: 1em;
  border-radius: .5em;
}


.tab-item::after {
  content: "";
  position: absolute;
  top: -.8em;
  left: 0;
  right: 0;
  bottom: -.8em;
  border-radius: .2em;
  background: rgba(0,0,0, .1);
  display: none;
}
.tab-item:hover::after { 
  display: block;
}

.tab-item:hover .tab-item-handle {
  display: block;
}

.establishedChord {
  position: absolute;
  top: -2em;
  left: calc(100% - 20px);
  font-size: 1.1em;
}
</style>