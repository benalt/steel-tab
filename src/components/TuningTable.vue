<script setup lang="ts">
import { Tuning } from '../lib/tuning';
import { Note, relationToNote, noteAtFret } from "../lib/musicTheory";
import func from '../../vue-temp/vue-editor-bridge';

const props = defineProps({
  tuning: Tuning
})

console.log(props.tuning)

function findRelationToNote(root:Note, note:Note):string {
  return relationToNote(root, note)
}
  
function getChangeFor(stringIdx:number, pedal:string):number | null {
  const changes = props.tuning.changesForString(stringIdx);
  if (changes && changes[pedal]) {
    return changes[pedal][0].change;
  }
}


</script>

<template>
  <h1>{{tuning.name}}</h1>
  <p>Root: {{tuning.root}}</p>
  <table border="1">
    <tr>
      <td>String</td>
      <td>Note</td>
      <td>Scale Degree from {{tuning.root}}</td>
      <td v-for="(altNote, idx) in tuning.altRoots" :key="`tuning-${tuning.name}-alt-1-${idx}-idx`">Scale Degree from {{altNote}}</td>
      <td v-for="(pedal, key) in tuning.copedent" :key="`tuning-${tuning.name}-alt-1-${key}`">{{key.toUpperCase()}}</td>
    </tr>
    <tr v-for="(stringNote, idx) in tuning.strings" :key="`tuning-${tuning.name}-${idx}-idx`">
      <td>{{ idx + 1 }}</td>
      <td>{{stringNote}}</td>
      <td>{{findRelationToNote(tuning.root, stringNote)}}</td>
      <td v-for="(altNote, idx2) in tuning.altRoots" :key="`tuning-${tuning.name}-alt-1-${idx2}-idx`">
        {{findRelationToNote(altNote, stringNote)}}
      </td>
      <td v-for="(pedal, key) in tuning.copedent" :key="`tuning-${tuning.name}-alt-1-${key}`">
        <span v-if="getChangeFor(idx, key)">
        {{ getChangeFor(idx, key)}}
        {{ noteAtFret(stringNote, getChangeFor(idx, key) ) }}
        </span> 
      </td>
    </tr>
  </table>
</template>



<style>

</style>