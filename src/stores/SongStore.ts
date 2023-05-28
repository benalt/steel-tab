import { defineStore } from 'pinia'
import { Tuning } from "@/lib/tuning"
import { KeyOf, Note, ChordType } from "@/lib/musicTheory"
import type { Song, Tab } from "@/lib/song"
import { useTunings } from "./TuningStore"

export const useSongs = defineStore( "SongStore", {
  state: () => {
    const tunings = useTunings().standardTunings
    return {
      sampleSongs : {
        "perdido": {
          name: "Perdido",
          uuid: "e58a4f3b-969a-4c12-bdcc-9328797ddee1",
          tuning: tunings.a6,
          keyOf: KeyOf.A,
          tab: {
            grouping: [
              { 1: '3', 2: '3', 4:'3', leftOffset: 20, establishChord: {rootNote: Note.A, chordType: ChordType.maj} },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 50 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15, measureBreak: true, establishChord: {rootNote: Note.A, chordType: ChordType.min7} },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15, establishChord: {rootNote: Note.B, chordType: ChordType.m7b5}},
              { 1: '3', 2: '3', 4:'3', leftOffset: 50 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 , measureBreak: true},
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 55 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 65 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 75 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 80, establishChord: {rootNote: Note.G, chordType: ChordType.dom7}},
              { 1: '3', 2: '3', 4:'2', leftOffset: 15 },
              { 1: '3', 2: '3', 4:'3', leftOffset: 20 },
              { 1: '3', 2: '3', 4:'2', leftOffset: 15, establishChord: {rootNote: Note.Fs, chordType: ChordType.maj7}}
            ]
          }
        } as Song,
      }
    }
  }
})