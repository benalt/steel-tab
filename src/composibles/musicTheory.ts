export enum Note {
  A = "A",
  Bf= "Bb",
  B = "B",
  C = "C",
  Cs = "C#",
  D = "D",
  Ef = "Eb",
  E = "E",
  F = "F",
  Fs = "F#",
  G = "G",
  Gs = "G#" // G# is more useful than Ab for playing in E
}

// utility to help transposition 
const noteArray:Array<Note>  = [
  Note.A, Note.Bf, Note.B, Note.C, 
  Note.Cs, Note.D, Note.Ef, Note.E, 
  Note.F, Note.Fs, Note.G, Note.Gs
]

export enum NoteRelationships {
  '_R' = 'Root', // unison
  '_b2' = 'b2/b9', // or b9
  '_2' = '2/9', 
  '_b3' = 'b3', // or #9
  '_3' = '3',
  '_4' = '4/11',
  '_b5' = 'b5',  
  '_5' = '5',
  '_s5' = '#5',
  '_6' = '6/13',
  '_b7' = 'b7',
  '_7' = '♮7'
}

const noteRelationshipsArray:Array<NoteRelationships> = [
  NoteRelationships._R,
  NoteRelationships._b2,
  NoteRelationships._2,
  NoteRelationships._b3,
  NoteRelationships._3,
  NoteRelationships._4,
  NoteRelationships._b5,
  NoteRelationships._5,
  NoteRelationships._s5,
  NoteRelationships._6,
  NoteRelationships._b7,
  NoteRelationships._7,
]

export function getNoteAtFret(startingNote:Note, fret:number):Note {
  const startIdx = noteArray.indexOf(startingNote);
  let destIdxs = startIdx + fret;
  while (destIdxs >= 12) {
    destIdxs -= 12;
  }
  return noteArray[destIdxs];
}

export function getRelationToNote(rootNote:Note, relatedNote:Note):string {
  const rootIdx = noteArray.indexOf(rootNote);
  let relatedIdx = noteArray.indexOf(relatedNote);
  if (rootIdx > relatedIdx ) {
    relatedIdx += 12;
  }
  return noteRelationshipsArray[relatedIdx - rootIdx];
}

