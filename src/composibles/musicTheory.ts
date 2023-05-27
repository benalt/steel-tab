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

// this will always be a positive number, as a jump down can be expressed as a jump up
// e.g. A is a minor third below C (down 3 semitones/frets, -3), A is also a 6th above C up 9 semitones
// this relationshp can be expressed 12 + -3 = 9
export function noteAtFret(startingNote:Note, fret:number):Note {
  const startIdx = noteArray.indexOf(startingNote);
  let destIdxs = startIdx + fret;
  
  while (destIdxs < 0 ) {
    destIdxs += 12;
  }

  return noteArray[destIdxs % 12];
}

// this will always be a positive number, as a jump down can be expressed as a jump up
// e.g. A is a minor third below C (down 3 semitones/frets, -2), A is also a 6th above C up 9 semitones
// this relationshp can be expressed 12 + -3 = 9
export function fretsBetween(rootNote:Note, relatedNote:Note):number {
  const rootIdx = noteArray.indexOf(rootNote);
  let relatedIdx = noteArray.indexOf(relatedNote);
  while (rootIdx > relatedIdx ) {
    relatedIdx += 12;
  }
  return relatedIdx - rootIdx;
}

export function relationToNote(rootNote:Note, relatedNote:Note):string {
  return noteRelationshipsArray[fretsBetween(rootNote, relatedNote)];
}

