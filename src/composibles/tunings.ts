import { Note, fretsBetween, noteAtFret } from './musicTheory';

type Tuning = {
  name: string,
  root: Note,
  altRoots?: Array<Note>,
  strings : Array<Note>
};

export const Tunings:{ [key: string]: Tuning } = {
  "a6" : {
    name: "A6",
    root: Note.A,
    strings : [ Note.E, Note.Cs, Note.A, Note.Fs,Note.E, Note.Cs, Note.A, Note.Fs ]
  },
  "c6_high_e" : {
    name: 'C6 - High E',
    root: Note.C,
    strings :[ Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A, Note.G ]
  },
  "c6_high_g" : {
    name: 'C6 - High G',
    root: Note.C,
    strings: [ Note.G, Note.E, Note.C, Note.A, Note.G, Note.E, Note.C, Note.A ]
  },
  "c6_a7" : {
    name: 'C6/A7',
    root: Note.C,
    altRoots : [ Note.A ],
    strings : [ Note.E, Note.C, Note.A, Note.G, Note.E, Note.Cs, Note.A, Note.A ]
  },
  "e13" : {
    name: 'E13',
    root: Note.E,
    strings: [Note.Gs, Note.E, Note.Cs, Note.B, Note.Gs, Note.E, Note.D, Note.B ]
  }
}

export function transposeTuningToNewRoot(tuning:Tuning, newRoot:Note):Tuning {
  const frets = fretsBetween(tuning.root, newRoot)
  return {
    name : `${tuning.name}, transposed to root ${newRoot}`,
    root: newRoot,
    strings: tuning.strings.map( (note:Note) => (noteAtFret(note, frets)) )
  }
}

export function transposeTuningByFrets(tuning:Tuning, fretCount:number):Tuning {
  return {
    name : `${tuning.name}, transposed by ${fretCount.toString()} frets`,
    root: noteAtFret(tuning.root, fretCount),
    strings: tuning.strings.map( (note:Note) => (noteAtFret(note, fretCount)) )
  }
}