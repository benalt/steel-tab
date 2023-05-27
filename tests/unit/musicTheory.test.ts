import { Note, NoteRelationships, noteAtFret, relationToNote, fretsBetween } from '../../src/composibles/musicTheory';
import { describe, expect, test } from 'vitest'

describe('noteAtFret', () => {
  test('it returns the note at fret 0', () => {
    expect( noteAtFret(Note.A, 0)).toBe(Note.A)
    expect( noteAtFret(Note.Fs, 0)).toBe(Note.Fs)
  })

  test('it returns the note at fret 10', () => {
    expect( noteAtFret(Note.A, 10)).toBe(Note.G)
    expect( noteAtFret(Note.E, 10)).toBe(Note.D)
  })

  test('it returns the note at fret 12', () => {
    expect( noteAtFret(Note.A, 12)).toBe(Note.A)
    expect( noteAtFret(Note.C, 12)).toBe(Note.C)
  })

  test('it returns the note at fret 15', () => {
    expect( noteAtFret(Note.A, 15)).toBe(Note.C)
    expect( noteAtFret(Note.E, 15)).toBe(Note.G)
  })

  test('it returns the note at fret 26', () => {
    expect( noteAtFret(Note.A, 26)).toBe(Note.B)
    expect( noteAtFret(Note.Gs, 26)).toBe(Note.Bf)
  })

  test('it returns the note at fret -2', () => {
    expect( noteAtFret(Note.A, -2)).toBe(Note.G)
    expect( noteAtFret(Note.A, -5)).toBe(Note.E)
  })
});

describe('relationToNote', () => {
  test('returns the correct relationship for a Root', () => {
    expect( relationToNote(Note.A, Note.A)).toBe(NoteRelationships._R);
    expect( relationToNote(Note.G, Note.G)).toBe(NoteRelationships._R);
  })

  test('returns the correct relationship for a 6th', () => {
    expect( relationToNote(Note.A, Note.Fs)).toBe(NoteRelationships._6);
    expect( relationToNote(Note.C, Note.A)).toBe(NoteRelationships._6);
  })

  test('returns the correct relationship for a Minor Third', () => {
    expect( relationToNote(Note.A, Note.C)).toBe(NoteRelationships._b3);
    expect( relationToNote(Note.E, Note.G)).toBe(NoteRelationships._b3);
  })
});

describe('fretsBetween', () => {
  test('returns correct semitones between roots', ()=>{
    expect( fretsBetween(Note.A, Note.A) ).toBe(0);
    expect( fretsBetween(Note.G, Note.G) ).toBe(0);
  })
  
  test('returns correct semitones between roots', ()=>{
    expect( fretsBetween(Note.A, Note.B) ).toBe(2);
    expect( fretsBetween(Note.G, Note.Fs) ).toBe(11);
  })

})