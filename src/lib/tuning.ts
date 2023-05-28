import { read } from 'fs'
import { Note, fretsBetween, noteAtFret } from './musicTheory'
import {v4 as uuidv4} from 'uuid';

type PSGChange = {
  stringIndex: number,
  change: number 
}

type PSGCopedent = {
  [key:string] : Array<PSGChange> 
}

export class Tuning {  
  
  
  constructor(
    public readonly uuid: string,
    public readonly name: string,
    public readonly root: Note,
    public readonly strings: Array<Note>,
    public readonly altRoots: Array<Note> | null = null,
    public readonly copedent: PSGCopedent | null = null,
  ) {}

  public transposeTuningToNewRoot(newRoot:Note):Tuning {
    const frets = fretsBetween(this.root, newRoot)
    return new Tuning (
      uuidv4(),
      `${this.name}, transposed to root ${newRoot}`,
      newRoot,
      this.strings.map( (note:Note) => (noteAtFret(note, frets)) ),
      this.altRoots,
      this.copedent
    )
  }
  
  public transposeTuningByFrets(fretCount:number):Tuning {
    return new Tuning (
      uuidv4(),
      `${this.name}, transposed by ${fretCount.toString()} frets`,
      noteAtFret(this.root, fretCount),
      this.strings.map( (note:Note) => (noteAtFret(note, fretCount)) ),
      this.altRoots,
      this.copedent
    )
  }
  
  public changesForString( stringIdx:number ):PSGCopedent | null {
    if (!this.copedent) {
      return null
    }
    const changesCopedent:{
      [key:string] : Array<PSGChange>
    } = {}

    for (var pedalName in this.copedent) {
      this.copedent[pedalName].forEach( (change:PSGChange)=>{
        if ( change.stringIndex === stringIdx ) { // Here's a change that applies
          if (changesCopedent.hasOwnProperty('pedalName') === undefined) {
            changesCopedent[pedalName].push(change)
           } else {
            changesCopedent[pedalName] = [change]
           }
        }
      })
    }
    return changesCopedent
  }
  
  public getNoteForTuning(stringIdx:number, fret:number, change:string|null = null):Note {
    const rootNote = this.strings[stringIdx]
    let targetNote = noteAtFret(rootNote, fret)
    if (this.copedent && change ) {
      const changesThatMightBeApplied = this.changesForString(stringIdx)
      if ( changesThatMightBeApplied && changesThatMightBeApplied[change]) {
        // this could be a little classier
        targetNote = noteAtFret(targetNote, changesThatMightBeApplied[change][0].change)
      }    
    }
    return targetNote
  }
}


