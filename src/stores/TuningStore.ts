import { Tuning } from "@/lib/tuning"
import { Note } from "@/lib/musicTheory"
import { defineStore } from 'pinia'

export const useTunings = defineStore( "TuningsStore", {
  state: () => (
    {
      standardTunings : {
        "a6": new Tuning({
          uuid: "b33e11b9-1b7e-4a4e-94ae-c09f4d89830e",
          name: "A6", 
          root: Note.A, 
          courses: [ Note.E, Note.Cs, Note.A, Note.Fs,Note.E, Note.Cs, Note.A, Note.Fs ],
          altRoots : [ Note.Fs ],
        }),
        "c6_high_g" : new Tuning({
          uuid: "96e6a9db-0530-4338-8f7a-ac106b2a3004",
          name: 'C6 - High G',
          root: Note.C,
          courses: [ Note.G, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A ],
          altRoots : [ Note.A ],
        }),
        "c6_high_e" : new Tuning({
          uuid: "2cc42356-23e6-4886-bd80-15c949fb35bc",
          name: 'C6 - High E',
          root: Note.C,
          courses: [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.G],
          altRoots : [ Note.A ],
        }),
        "c6_a7": new Tuning({
          uuid: "d696eaee-6054-4be8-823b-dc5903bbdbb1",
          name: 'C6/A7',
          root: Note.C,
          courses: [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.Cs, Note.A, Note.A ],
          altRoots : [ Note.A ],
        }),
        "e13" : new Tuning({
          uuid: "7c38e495-1d43-4cb0-997a-b538dd5ca462",
          name: 'E13',
          root: Note.E,
          courses: [ Note.Gs, Note.E, Note.Cs, Note.B, Note.Gs, Note.E, Note.D, Note.B ],
          altRoots : [ Note.Cs],
        }),
        "b11" : new Tuning({
          uuid: "56a46672-d75c-4baa-9a03-5f1a45dc58eb",
          name: 'B11',
          root: Note.B,
          courses: [ Note.E, Note.Cs, Note.A, Note.Fs, Note.Ef, Note.Df, Note.B, Note.A ],
        }),
        "e9PSG" : new Tuning({
          uuid: "48d59b12-4d82-4140-8bce-d3fbd13733b3",
          name: 'E9 Pedal Steel - Emmons copedent',
          root: Note.E,
          courses: [ Note.Fs, Note.Ds, Note.Gs, Note.E, Note.B, Note.Gs, Note.Fs, Note.E, Note.D, Note.B ],
          copedent: { 
            "ll" :      [ { courseIndex: 3, change: 1 }, { courseIndex: 7, change: 1 } ],
            "lr":       [ { courseIndex: 3, change: -1 }, { courseIndex: 7, change: -1 } ],
            "lv" :      [ { courseIndex: 4, change: -1 }, { courseIndex: 9, change: -1 } ],
            "a" :       [ { courseIndex: 4, change: 2 }, { courseIndex: 9, change: 2 } ],
            "b" :       [ { courseIndex: 2, change: 1 }, { courseIndex: 5, change: 1 } ],
            "c" :       [ { courseIndex: 3, change: 2 }, { courseIndex: 4, change: 2 } ],
            "rl" :      [ { courseIndex: 1, change: 1 }, { courseIndex: 5, change: -2 } ],
            "rr_half":  [ { courseIndex: 1, change: -1} ],
            "rr" :      [ { courseIndex: 1, change: -2 }, { courseIndex:8, change:-2 } ], 
          }
        }),
        "c6PSG" : new Tuning({
          uuid: "6e31849e-f17c-42a1-97ec-c82dd12b29f6",
          name: 'C6 Pedal Steel Guitar - Emmons copedent',
          root: Note.C,
          courses: [ Note.D, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.F, Note.C ],
          copedent : {
            "ll" : [ { courseIndex: 3, change : -1 }],
            "lr" : [ { courseIndex: 3, change : 1 } ],
            "p4" : [ { courseIndex: 3, change : 2 }, { courseIndex: 7, change : 2 } ],
            "p5" : [ { courseIndex: 4, change : -1 }, { courseIndex: 8, change : 1 }, { courseIndex: 9, change : 2 } ],
            "p6" : [ { courseIndex: 1, change : 1 }, { courseIndex: 1, change : -1 } ],
            "p7" : [ { courseIndex: 2, change : 2 }, { courseIndex: 3, change : 2 } ],
            "p8" : [ { courseIndex: 0, change : 1 }, { courseIndex:6 , change : 1 }, { courseIndex: 8, change : -1 }, { courseIndex: 9, change : -3 } ],
            "rl" : [ { courseIndex: 2, change : -1 } ],
            "rr" : [ { courseIndex: 2, change : 1 }]
          },
        }),
        "dobro" : new Tuning({
          uuid: "b8cb9131-f721-4307-a43f-68cdb57536a6",
          name: 'Dobro Open G', 
          root: Note.G,
          courses: [ Note.D, Note.B, Note.G, Note.D, Note.B, Note.G ],
          altRoots : [ Note.E ]
        })
      }
    }
  )
})