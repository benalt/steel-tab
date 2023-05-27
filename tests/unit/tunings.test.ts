import { Tunings, transposeTuningToNewRoot, transposeTuningByFrets, changesForString, getNoteForTuning } from '../../src/lib/tunings';
import { describe, expect, test } from 'vitest'
import { s } from 'vitest/dist/types-ad1c3f45';
import { Note } from '../../src/lib/musicTheory';

/*
describe('tunings', () => {
})
*/

describe('transposing', () => {
  test('it transposes up with a new root', ()=>{
    const newTuning = transposeTuningToNewRoot(Tunings.a6, Note.C);
    expect(newTuning.root).toBe(Note.C);
    expect(newTuning.strings[0]).toBe(Note.G);
    expect(newTuning.strings[1]).toBe(Note.E);
    expect(newTuning.strings[2]).toBe(Note.C);
    expect(newTuning.strings[3]).toBe(Note.A);
  })
  
  test('it transposes down with a new root', ()=>{
    const newTuning = transposeTuningToNewRoot(Tunings.a6, Note.G);
    expect(newTuning.root).toBe(Note.G);
    expect(newTuning.strings[0]).toBe(Note.D);
    expect(newTuning.strings[1]).toBe(Note.B);
    expect(newTuning.strings[2]).toBe(Note.G);
    expect(newTuning.strings[3]).toBe(Note.E);
  })

  test('it transposes up fret count', ()=>{
    const newTuning = transposeTuningByFrets(Tunings.a6, 3);
    expect(newTuning.root).toBe(Note.C);
    expect(newTuning.strings[0]).toBe(Note.G);
    expect(newTuning.strings[1]).toBe(Note.E);
    expect(newTuning.strings[2]).toBe(Note.C);
    expect(newTuning.strings[3]).toBe(Note.A);
  })

  test('it transposes down fret count', ()=>{
    const newTuning = transposeTuningByFrets(Tunings.a6, -2);
    expect(newTuning.root).toBe(Note.G);
    expect(newTuning.strings[0]).toBe(Note.D);
    expect(newTuning.strings[1]).toBe(Note.B);
    expect(newTuning.strings[2]).toBe(Note.G);
    expect(newTuning.strings[3]).toBe(Note.E);
  })

})

describe('changesForString', ()=>{
  test('returns null for a tuning w/o a copedent', ()=>{
    const changes = changesForString(Tunings.a6, 1);
    expect(changes).toBe(null);
  })
  
  test('returns the changes for a tuning w/o a copedent', ()=>{
    const changes = changesForString(Tunings.e9PSG, 1);
    const changesString7 = changesForString(Tunings.e9PSG, 7);

    expect(Object.keys(changes)).toEqual(['rl', 'rr_half', 'rr'])
    expect(Object.keys(changesString7)).toEqual(['ll', 'lr'])
    
    expect(changes.rl[0].change).toBe(1);
    expect(changesString7.lr[0].change).toBe(-1);
  })

})

describe('noteForTuning', ()=>{
  test('returns null for a tuning w/o a copedent', () => {
    const note = getNoteForTuning(Tunings.a6, 2, 2);
    expect(note).toBe(Note.B);
  })
  
  test('returns the changes for a tuning w a copedent w/o changes', ()=>{
    const note = getNoteForTuning(Tunings.e9PSG, 3, 2);
    expect(note).toBe(Note.Fs);
  })

  test('returns the changes for a tuning w a copedent w/ changes', ()=>{
    const note = getNoteForTuning(Tunings.e9PSG, 4, 0, 'a');
    const otherNote = getNoteForTuning(Tunings.e9PSG, 4, 2, 'a');
    expect(note).toBe(Note.Cs);
    expect(otherNote).toBe(Note.Ef);
  })

  test('a change that doesn\'t apply won\'t change the note ', ()=>{
    const note = getNoteForTuning(Tunings.e9PSG, 0, 0, 'rr_half');
    const noteString3 = getNoteForTuning(Tunings.e9PSG, 3, 2, 'b'); // string 3, fret 2

    expect(note).toBe(Note.Fs);  
    expect(noteString3).toBe(Note.Fs);  
  })

  test('returns the changes for a tuning w a copedent w/ half_change', ()=>{
    const note = getNoteForTuning(Tunings.e9PSG, 1, 0, 'rr_half');
    expect(note).toBe(Note.D);  
  })
})