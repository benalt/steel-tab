<script setup lang="ts">
import { Tuning } from '../lib/tuning'
import { Note, relationToNote, noteAtFret } from "../lib/musicTheory"

const props = defineProps({
  tuning: {
    type: Tuning,
    required: true
  }
})

function findRelationToNote(root:Note, note:Note):string {
  return relationToNote(root, note)
}
  
function getChangeFor(courseIndex:number, pedal:string):number | null {
  const changes = props.tuning?.changesForCourse(courseIndex)
  if (changes && changes[pedal]) {
    return changes[pedal][0].change
  }
  return null
}

function getNoteAtFret(courseNote:Note, change:number|null):string {
  if (!change) { return ""}
  return noteAtFret(courseNote, change ).toString()
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
      <td v-for="(pedal, key) in tuning.copedent" :key="`tuning-${tuning.name}-alt-1-${key}`">{{(key as string).toUpperCase()}}</td>
    </tr>
    <tr v-for="(courseNote, idx) in tuning.courses" :key="`tuning-${tuning.name}-${idx}-idx`">
      <td>{{ idx + 1 }}</td>
      <td>{{courseNote}}</td>
      <td>{{findRelationToNote(tuning.root, courseNote)}}</td>
      <td v-for="(altNote, idx2) in tuning.altRoots" :key="`tuning-${tuning.name}-alt-1-${idx2}-idx`">
        {{findRelationToNote(altNote, courseNote)}}
      </td>
      <td v-for="(pedal, key) in tuning.copedent" :key="`tuning-${tuning.name}-alt-1-${key}`">
        <span v-if="getChangeFor(idx, key as string)">
        {{ getChangeFor(idx, key as string)}}
        {{ getNoteAtFret(courseNote, getChangeFor(idx, key as string) ) }}
        </span> 
      </td>
    </tr>
  </table>
</template>



<style>

</style>