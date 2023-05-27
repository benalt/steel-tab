import { Note, getNoteAtFret, getRelationToNote, NoteRelationships } from '../../src/composibles/musicTheory';
import { describe, expect, test } from 'vitest'

describe('getNoteAtFret', () => {
  test('it returns the note at fret 0', () => {
    expect( getNoteAtFret(Note.A, 0)).toBe(Note.A)
    expect( getNoteAtFret(Note.Fs, 0)).toBe(Note.Fs)
  })

  test('it returns the note at fret 10', () => {
    expect( getNoteAtFret(Note.A, 10)).toBe(Note.G)
    expect( getNoteAtFret(Note.E, 10)).toBe(Note.D)
  })

  test('it returns the note at fret 12', () => {
    expect( getNoteAtFret(Note.A, 12)).toBe(Note.A)
    expect( getNoteAtFret(Note.C, 12)).toBe(Note.C)
  })

  test('it returns the note at fret 15', () => {
    expect( getNoteAtFret(Note.A, 15)).toBe(Note.C)
    expect( getNoteAtFret(Note.E, 15)).toBe(Note.G)
  })

  test('it returns the note at fret 26', () => {
    expect( getNoteAtFret(Note.A, 26)).toBe(Note.B)
    expect( getNoteAtFret(Note.Gs, 26)).toBe(Note.Bf)
  })

  test('returns the correct relationship for a Root', () => {
    expect( getRelationToNote(Note.A, Note.A)).toBe(NoteRelationships._R);
    expect( getRelationToNote(Note.G, Note.G)).toBe(NoteRelationships._R);
  })

  test('returns the correct relationship for a 6th', () => {
    expect( getRelationToNote(Note.A, Note.Fs)).toBe(NoteRelationships._6);
    expect( getRelationToNote(Note.C, Note.A)).toBe(NoteRelationships._6);
  })

  test('returns the correct relationship for a Minor Third', () => {
    expect( getRelationToNote(Note.A, Note.C)).toBe(NoteRelationships._b3);
    expect( getRelationToNote(Note.E, Note.G)).toBe(NoteRelationships._b3);
  })

})