import { Tunings, transposeTuningToNewRoot, transposeTuningByFrets } from '../../src/composibles/tunings';
import { describe, expect, test } from 'vitest'
import { s } from 'vitest/dist/types-ad1c3f45';
import { Note } from '../../src/composibles/musicTheory';

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
