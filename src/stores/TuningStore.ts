import { Tuning } from "@/lib/tuning";
import { Note } from "@/lib/musicTheory";
import { defineStore, Store } from 'pinia'

export const useTunings = defineStore( "TuningsStore", {
  state: () => (
    {
      "a6": new Tuning(
        "A6", 
        Note.A, 
        [ Note.E, Note.Cs, Note.A, Note.Fs,Note.E, Note.Cs, Note.A, Note.Fs ],
        [ Note.Fs ],
      ),
      "c6_high_g" : new Tuning(
        'C6 - High G',
        Note.C,
        [ Note.G, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A ],
        [ Note.A ],
      ),
      "c6_high_e" : new Tuning(
        'C6 - High E',
        Note.C,
        [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.G],
        [ Note.A ],
      ),
      "c6_a7": new Tuning(
        'C6/A7',
        Note.C,
        [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.Cs, Note.A, Note.A ],
        [ Note.A ],
      ),
      
      "e13" : new Tuning(
        'E13',
        Note.E,
        [Note.Gs, Note.E, Note.Cs, Note.B, Note.Gs, Note.E, Note.D, Note.B ],
        [Note.Cs],
      ),
      "b11" : new Tuning(
        'B11',
        Note.B,
        [Note.E, Note.Cs, Note.A, Note.Fs, Note.Ef, Note.Df, Note.B, Note.A],
      ),
      "e9PSG" : new Tuning(
        'E9 Pedal Steel - Emmons Copedent',
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
        'C6 Pedal Steel Guitar - Emmons Copedent',
        Note.C,
        [Note.D, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.F, Note.C],
        null,
        {
          "ll" : [ { stringIndex: 3, change : -1 }],
          "lr" : [ { stringIndex: 3, change : 1 }],
          "p4" : [ { stringIndex: 3, change : 2 }, { stringIndex: 7, change : 2 } ],
          "p5" : [ { stringIndex: 4, change : -1 }, { stringIndex: 8, change : 1 }, { stringIndex: 9, change : 2 }],
          "p6" : [ { stringIndex: 1, change : 1 }, { stringIndex: 1, change : -1 }],
          "p7" : [ { stringIndex: 2, change : 2 }, { stringIndex: 3, change : 2 }],
          "p8" : [ { stringIndex: 0, change : 1 }, { stringIndex:6 , change : 1 }, { stringIndex: 8, change : -1 }, { stringIndex: 9, change : -3 }],
          "rl" : [ { stringIndex: 2, change : -1 } ],
          "rr" : [ { stringIndex: 2, change : 1 }]
        }
      )
    }
  )
});