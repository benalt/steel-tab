import { Note, fretsBetween, noteAtFret } from './musicTheory';

type PSGChange = {
  stringIndex: number,
  change: number 
}

type PSGCopedent = {
  [key:string] : Array<PSGChange> 
}


type Tuning = {
  name: string,
  root: Note,
  altRoots?: Array<Note>,
  strings : Array<Note>
  copedent?: PSGCopedent;
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
  },
  "b11" : {
    name: 'B11',
    root: Note.B,
    strings: [Note.E, Note.Cs, Note.A, Note.Fs, Note.Ef, Note.Df, Note.B, Note.A]
  },
  "e9PSG" : {
    name: 'E9 Pedal Steel - Emmons Copedent',
    root: Note.E,
    strings: [Note.Fs, Note.Ds, Note.Gs, Note.E, Note.B, Note.Gs, Note.Fs, Note.E, Note.D, Note.B],
    copedent: { 
      "a" :       [ { stringIndex: 4, change: 2 }, { stringIndex: 9, change: 2 } ],
      "b" :       [ { stringIndex: 2, change: 1 }, { stringIndex: 5, change: 1 } ],
      "c" :       [ { stringIndex: 3, change: 2 }, { stringIndex: 4, change: 2 } ],
      "rl" :      [ { stringIndex: 1, change: 1 }, { stringIndex: 5, change: -2 } ],
      "rr_half":  [ { stringIndex: 1, change: -1} ],
      "rr" :      [ { stringIndex: 1, change: -2 }, { stringIndex:8, change:-2 } ],
      "ll" :      [ { stringIndex: 3, change: 1 }, { stringIndex: 7, change: 1 } ],
      "lv" :      [ { stringIndex: 4, change: -1 }, { stringIndex: 9, change: -1 } ],
      "lr":       [ { stringIndex: 3, change: -1 }, { stringIndex: 7, change: -1 } ]
    }
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

export function changesForString(tuning:Tuning, stringIdx:number):PSGCopedent | null {
  if (!tuning.copedent) {
    return null;
  }
  const changesCopedent = {}
  for (var pedalName in tuning.copedent) {
    tuning.copedent[pedalName].forEach( (change:PSGChange)=>{
      if ( change.stringIndex === stringIdx ) { // Here's a change that applies
        if (changesCopedent[pedalName]) {
          changesCopedent[pedalName].push(change)
         } else {
          changesCopedent[pedalName] = [change]
         }
      }
    });
  }
  return changesCopedent;
}

export function getNoteForTuning(tuning:Tuning, stringIdx:number, fret:number, change:string = null):Note {
  const rootNote = tuning.strings[stringIdx];
  let targetNote = noteAtFret(rootNote, fret);
  
  if (tuning.copedent && change ) {
    const changesThatMightBeApplied = changesForString(tuning, stringIdx);
    if ( changesThatMightBeApplied[change]) {
      // this could use some abstraction... 
      targetNote = noteAtFret(targetNote, changesThatMightBeApplied[change][0].change)
    }    
  }

  return targetNote
  
}