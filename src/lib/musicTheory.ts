export enum Note {
  Af = "Ab",
  A = "A",
  As = "As",
  Bf= "Bb",
  B = "B",
  Bs = "B#",
  Cf = "Cb",
  C = "C",
  Cs = "C#",
  Df = "Db",
  D = "D",
  Ds = "D#",
  Ef = "Eb",
  E = "E",
  Es = "E#",
  Ff = "Fb",
  F = "F",
  Fs = "F#",
  Gf = "Gb",
  G = "G",
  Gs = "G#"
}

type NoteDict = {
  [key: string] : Note
}

// these are used for calcualations to get rid of aliases and weird names.
enum NoteAliases {
  "Ab" = Note.Gs, // Prefer G# because a lot of country songs are in E and G# is the third there :shrug:
  "A#" = Note.Bf,
  "B#" = Note.C,
  "Cb" = Note.B,
  "Db" = Note.Cs,
  "D#" = Note.Ef,
  "E#" = Note.F,
  "Ff" = Note.E,
  "Gf" = Note.Fs
}

export enum KeyOf {
  Af = "Ab",
  Af_min = "Ab minor",
  A = "A",
  A_min = "A minor",
  Bf= "Bb",
  Bf_min = "Bb minor",
  B = "B",
  B_min = "B minor",
  C = "C",
  C_min = "C minor",
  Cs = "C#",
  Cs_min = "C# minor",
  Df = "Db",
  Df_min = "Db minor",
  D = "D",
  D_min = "D minor",
  Ef = "Eb",
  Ef_min = "Eb minor",
  E = "E",
  E_min = "E minor",
  F = "F",
  F_min = "F minor",
  Fs = "F#",
  Fs_min = "F# minor",
  G = "G",
  G_min = "G minor",
}

export enum ChordType {
  maj = "",
  min = "m",
  dom7 = "7",
  maj7 = "M7",
  min7 = "m7",
  dim = "dim",
  m7b5 = "m7b5",
  aug = "aug",
}

export type Chord = {
  rootNote: Note,
  chordType: ChordType
}

export function calculatableNote(note:Note) : Note {
  const noteAsString:string = note as string
  // accessing these like this - i'm not sure how else to get TS to accept it w/o the code becoming unreadable
  // @ts-ignore 
  if (NoteAliases[noteAsString]) {
    // @ts-ignore
    return NoteAliases[noteAsString]
  } else {
    return note
  }
}

// utility to help transposition, notes in order.
const noteArray:Array<Note>  = [
  Note.A, Note.Bf, Note.B, Note.C, 
  Note.Cs, Note.D, Note.Ef, Note.E, 
  Note.F, Note.Fs, Note.G, Note.Gs
]

// to help desribe what is going on in any played position
export enum NoteRelationships {
  '_R' = 'root', // unison
  '_b2' = 'b2', // or b9
  '_2' = '2',
  '_b3' = 'b3',
  '_3' = '3',
  '_4' = '4',
  '_b5' = 'b5',  
  '_5' = '5',
  '_s5' = '#5',
  '_6' = '6',
  '_b7' = 'b7',
  '_7' = '♮7'
}

// used along with noteArray to describe how a note relates to a root
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
export function noteAtFret(rootNote:Note, fret:number):Note {
  rootNote = calculatableNote(rootNote)
  const startIdx = noteArray.indexOf(rootNote)
  let destIdxs = startIdx + fret

  while (destIdxs < 0 ) {
    destIdxs += 12
  }

  return noteArray[destIdxs % 12]
}

// this will always be a positive number, as a jump down can be expressed as a jump up
// e.g. A is a minor third below C (down 3 semitones/frets, -2), A is also a 6th above C up 9 semitones
// this relationshp can be expressed 12 + -3 = 9
export function fretsBetween(rootNote:Note, relatedNote:Note):number {
  rootNote = calculatableNote(rootNote)
  relatedNote = calculatableNote(relatedNote)
  const rootIdx = noteArray.indexOf(rootNote)
  let relatedIdx = noteArray.indexOf(relatedNote)
  
  while (rootIdx > relatedIdx ) {
    relatedIdx += 12
  }
  return relatedIdx - rootIdx
}

export function relationToNote(rootNote:Note, relatedNote:Note):string {
  rootNote = calculatableNote(rootNote)
  relatedNote = calculatableNote(relatedNote)

  return noteRelationshipsArray[fretsBetween(rootNote, relatedNote)]
}
