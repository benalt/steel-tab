import { Tuning } from "@/lib/tuning"
import { Note } from "@/lib/musicTheory"
import { defineStore } from 'pinia'

export const useTunings = defineStore( "TuningsStore", {
  state: () => (
    {
      standardTunings : {
        "a6": new Tuning(
          "b33e11b9-1b7e-4a4e-94ae-c09f4d89830e",
          "A6", 
          Note.A, 
          [ Note.E, Note.Cs, Note.A, Note.Fs,Note.E, Note.Cs, Note.A, Note.Fs ],
          [ Note.Fs ],
        ),
        "c6_high_g" : new Tuning(
          "96e6a9db-0530-4338-8f7a-ac106b2a3004",
          'C6 - High G',
          Note.C,
          [ Note.G, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A ],
          [ Note.A ],
        ),
        "c6_high_e" : new Tuning(
          "2cc42356-23e6-4886-bd80-15c949fb35bc",
          'C6 - High E',
          Note.C,
          [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.G],
          [ Note.A ],
        ),
        "c6_a7": new Tuning(
          "d696eaee-6054-4be8-823b-dc5903bbdbb1",
          'C6/A7',
          Note.C,
          [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.Cs, Note.A, Note.A ],
          [ Note.A ],
        ),
        
        "e13" : new Tuning(
          "7c38e495-1d43-4cb0-997a-b538dd5ca462",
          'E13',
          Note.E,
          [Note.Gs, Note.E, Note.Cs, Note.B, Note.Gs, Note.E, Note.D, Note.B ],
          [Note.Cs],
        ),
        "b11" : new Tuning(
          "56a46672-d75c-4baa-9a03-5f1a45dc58eb",
          'B11',
          Note.B,
          [Note.E, Note.Cs, Note.A, Note.Fs, Note.Ef, Note.Df, Note.B, Note.A],
        ),
        "e9PSG" : new Tuning(
          "48d59b12-4d82-4140-8bce-d3fbd13733b3",
          'E9 Pedal Steel - Emmons copedent',
          Note.E,
          [Note.Fs, Note.Ds, Note.Gs, Note.E, Note.B, Note.Gs, Note.Fs, Note.E, Note.D, Note.B],
          null,
          { 
            "ll" :      [ { stringIndex: 3, change: 1 }, { stringIndex: 7, change: 1 } ],
            "lr":       [ { stringIndex: 3, change: -1 }, { stringIndex: 7, change: -1 } ],
            "lv" :      [ { stringIndex: 4, change: -1 }, { stringIndex: 9, change: -1 } ],
            "a" :       [ { stringIndex: 4, change: 2 }, { stringIndex: 9, change: 2 } ],
            "b" :       [ { stringIndex: 2, change: 1 }, { stringIndex: 5, change: 1 } ],
            "c" :       [ { stringIndex: 3, change: 2 }, { stringIndex: 4, change: 2 } ],
            "rl" :      [ { stringIndex: 1, change: 1 }, { stringIndex: 5, change: -2 } ],
            "rr_half":  [ { stringIndex: 1, change: -1} ],
            "rr" :      [ { stringIndex: 1, change: -2 }, { stringIndex:8, change:-2 } ], 
          }
        ),
        "c6PSG" : new Tuning(
          "6e31849e-f17c-42a1-97ec-c82dd12b29f6",
          'C6 Pedal Steel Guitar - Emmons copedent',
          Note.C,
          [Note.D, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.F, Note.C],
          null,
          {
            "ll" : [ { stringIndex: 3, change : -1 }],
            "lr" : [ { stringIndex: 3, change : 1 } ],
            "p4" : [ { stringIndex: 3, change : 2 }, { stringIndex: 7, change : 2 } ],
            "p5" : [ { stringIndex: 4, change : -1 }, { stringIndex: 8, change : 1 }, { stringIndex: 9, change : 2 } ],
            "p6" : [ { stringIndex: 1, change : 1 }, { stringIndex: 1, change : -1 } ],
            "p7" : [ { stringIndex: 2, change : 2 }, { stringIndex: 3, change : 2 } ],
            "p8" : [ { stringIndex: 0, change : 1 }, { stringIndex:6 , change : 1 }, { stringIndex: 8, change : -1 }, { stringIndex: 9, change : -3 } ],
            "rl" : [ { stringIndex: 2, change : -1 } ],
            "rr" : [ { stringIndex: 2, change : 1 }]
          },
        ),
        "dobro" : new Tuning(
          "b8cb9131-f721-4307-a43f-68cdb57536a6",
          'Dobro Open G', 
          Note.G,
          [Note.D, Note.B, Note.G, Note.D, Note.B, Note.G ],
          [Note.E]
        )
      }
    }
  )
})