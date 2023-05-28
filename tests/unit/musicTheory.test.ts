import { Note, NoteRelationships, noteAtFret, relationToNote, fretsBetween, calculatableNote } from '../../src/lib/musicTheory';
import { describe, expect, test } from 'vitest'

describe('calculatableNote', ()=>{
  test('returns a calcualtable note from an oddball', ()=>{
    expect( calculatableNote(Note.Ds) ).toBe(Note.Ef);
    expect( calculatableNote(Note.Df) ).toBe(Note.Cs);
    expect( calculatableNote(Note.Af) ).toBe(Note.Gs);
  })

  test('returns a calcualtable note from an normie', ()=>{
    expect( calculatableNote(Note.A) ).toBe(Note.A);
    expect( calculatableNote(Note.Ef) ).toBe(Note.Ef);
    expect( calculatableNote(Note.Gs) ).toBe(Note.Gs);
  })
})

describe('noteAtFret', () => {
  test('it returns the note at fret 0', () => {
    expect( noteAtFret(Note.A, 0)).toBe(Note.A)
    expect( noteAtFret(Note.Fs, 0)).toBe(Note.Fs)
    expect( noteAtFret(Note.Ds, 0)).toBe(Note.Ef) // This will undergo the normalization
  })

  test('it returns the note at fret 10', () => {
    expect( noteAtFret(Note.A, 10)).toBe(Note.G)
    expect( noteAtFret(Note.E, 10)).toBe(Note.D)
    expect( noteAtFret(Note.Df, 10)).toBe(Note.B) // This will undergo the normalization
  })

  test('it returns the note at fret 12', () => {
    expect( noteAtFret(Note.A, 12)).toBe(Note.A)
    expect( noteAtFret(Note.C, 12)).toBe(Note.C)
    expect( noteAtFret(Note.Af, 12)).toBe(Note.Gs) // This will undergo the normalization
  })

  test('it returns the note at fret 15', () => {
    expect( noteAtFret(Note.A, 15)).toBe(Note.C)
    expect( noteAtFret(Note.E, 15)).toBe(Note.G)
    expect( noteAtFret(Note.Ds, 15)).toBe(Note.Fs)
  })

  test('it returns the note at fret 26', () => {
    expect( noteAtFret(Note.A, 26)).toBe(Note.B)
    expect( noteAtFret(Note.Gs, 26)).toBe(Note.Bf)
    expect( noteAtFret(Note.Af, 26)).toBe(Note.Bf) // this will undergo normalization
  })

  test('it returns the note at negative frets', () => {
    expect( noteAtFret(Note.A, -2)).toBe(Note.G)
    expect( noteAtFret(Note.A, -5)).toBe(Note.E)
    expect( noteAtFret(Note.Af, -2)).toBe(Note.Fs)
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

