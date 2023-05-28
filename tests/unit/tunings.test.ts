import { describe, expect, test, beforeEach } from 'vitest'
import { Note } from '../src/lib/musicTheory'
import { useTunings } from '../src/stores/TuningStore'
import { setActivePinia, createPinia } from 'pinia'

let tunings;

describe('transposing', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    tunings = useTunings().standardTunings;
  })
  
  test('it transposes up with a new root', ()=>{
    const newTuning = tunings.a6.transposeTuningToNewRoot(Note.C);
    expect(newTuning.root).toBe(Note.C);
    expect(newTuning.courses[0]).toBe(Note.G);
    expect(newTuning.courses[1]).toBe(Note.E);
    expect(newTuning.courses[2]).toBe(Note.C);
    expect(newTuning.courses[3]).toBe(Note.A);
  })
  
  test('it transposes down with a new root', ()=>{
    const newTuning = tunings.a6.transposeTuningToNewRoot(Note.G);
    expect(newTuning.root).toBe(Note.G);
    expect(newTuning.courses[0]).toBe(Note.D);
    expect(newTuning.courses[1]).toBe(Note.B);
    expect(newTuning.courses[2]).toBe(Note.G);
    expect(newTuning.courses[3]).toBe(Note.E);
  })

  test('it transposes up fret count', ()=>{
    const newTuning = tunings.a6.transposeTuningByFrets(3);
    expect(newTuning.root).toBe(Note.C);
    expect(newTuning.courses[0]).toBe(Note.G);
    expect(newTuning.courses[1]).toBe(Note.E);
    expect(newTuning.courses[2]).toBe(Note.C);
    expect(newTuning.courses[3]).toBe(Note.A);
  })

  test('it transposes down fret count', ()=>{
    const newTuning = tunings.a6.transposeTuningByFrets(-2);
    expect(newTuning.root).toBe(Note.G);
    expect(newTuning.courses[0]).toBe(Note.D);
    expect(newTuning.courses[1]).toBe(Note.B);
    expect(newTuning.courses[2]).toBe(Note.G);
    expect(newTuning.courses[3]).toBe(Note.E);
  })

})

describe('changesForCourse', ()=>{
  beforeEach(() => {
    setActivePinia(createPinia())
    tunings = useTunings().standardTunings;
  })

  test('returns null for a tuning w/o a copedent', ()=>{
    const changes = tunings.a6.changesForCourse(1);
    expect(changes).toBe(null);
  })
  
  test('returns the changes for a tuning w/ a copedent', ()=>{
    const changes = tunings.e9PSG.changesForCourse(1);
    const changesString7 = tunings.e9PSG.changesForCourse(7);

    expect(Object.keys(changes)).toEqual(['rl', 'rr_half', 'rr'])
    expect(Object.keys(changesString7)).toEqual(['ll', 'lr'])
    
    expect(changes.rl[0].change).toBe(1);
    expect(changesString7.lr[0].change).toBe(-1);
  })
})

describe('noteForTuning', () => {
  
  beforeEach(() => {
    setActivePinia(createPinia())
    tunings = useTunings().standardTunings;
  })

  test('returns null for a tuning w/o a copedent', () => {
    const note = tunings.a6.getNoteForTuning(2, 2);
    expect(note).toBe(Note.B);
  })
  
  test('returns the changes for a tuning w a copedent w/o changes', ()=>{
    const note = tunings.e9PSG.getNoteForTuning(3, 2);
    expect(note).toBe(Note.Fs);
  })

  test('returns the changes for a tuning w a copedent w/ changes', ()=>{
    const note = tunings.e9PSG.getNoteForTuning(4, 0, 'a');
    const otherNote = tunings.e9PSG.getNoteForTuning(4, 2, 'a');
    expect(note).toBe(Note.Cs);
    expect(otherNote).toBe(Note.Ef);
  })

  test('a change that doesn\'t apply won\'t change the note ', ()=>{
    const note = tunings.e9PSG.getNoteForTuning(0, 0, 'rr_half');
    const noteString3 = tunings.e9PSG.getNoteForTuning(3, 2, 'b'); // string 3, fret 2

    expect(note).toBe(Note.Fs);  
    expect(noteString3).toBe(Note.Fs);  
  })

  test('returns the changes for a tuning w a copedent w/ half_change', ()=>{
    const note = tunings.e9PSG.getNoteForTuning(1, 0, 'rr_half');
    expect(note).toBe(Note.D);  
  })
})
