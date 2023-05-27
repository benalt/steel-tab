import { Note } from './musicTheory';

type TuningStrings = Array<Note>
type Tuning = {
  root: Note,
  altRoots?: Array<Note>,
  strings : TuningStrings
};

export const tunings:{ [key: string]: Tuning } = {
  "A6" : {
    root: Note.A,
    strings : [ Note.E, Note.Cs, Note.A, Note.Fs,Note.E, Note.Cs, Note.A, Note.Fs ]
  },
  "C6 - High E" : {
    root: Note.C,
    strings :[ Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.G ]
  },
  "C6 - High G" : {
    root: Note.C,
    strings: [ Note.G, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A ]
  },
  "C6/A7" : {
    root: Note.C,
    altRoots : [Note.A],
    strings : [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.Cs, Note.A, Note.A ]
  },
  "E13" : {
    root: Note.E,
    strings: [Note.Gs, Note.E, Note.Cs, Note.B, Note.Gs, Note.E, Note.D, Note.B ]
  }
}