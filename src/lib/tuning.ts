import { read } from 'fs';
import { readonly } from 'vue';
import { Note, fretsBetween, noteAtFret } from './musicTheory';

type PSGChange = {
  stringIndex: number,
  change: number 
}

type PSGCopedent = {
  [key:string] : Array<PSGChange> 
}

export class Tuning {  

  constructor(
    readonly name: string,
    readonly root: Note,
    readonly strings: Array<Note>,
    readonly copedent: PSGCopedent = null,
  ) {

  }

  public transposeTuningToNewRoot(newRoot:Note):Tuning {
    const frets = fretsBetween(this.root, newRoot);
    return new Tuning (
      `${this.name}, transposed to root ${newRoot}`,
      newRoot,
      this.strings.map( (note:Note) => (noteAtFret(note, frets)) ),
      this.copedent
    );
  }
  
  public transposeTuningByFrets(fretCount:number):Tuning {
    return new Tuning (
      `${this.name}, transposed by ${fretCount.toString()} frets`,
      noteAtFret(this.root, fretCount),
      this.strings.map( (note:Note) => (noteAtFret(note, fretCount)) ),
      this.copedent
    )
  }
  
  public changesForString( stringIdx:number ):PSGCopedent | null {
    if (!this.copedent) {
      return null;
    }
    const changesCopedent = {}
    for (var pedalName in this.copedent) {
      this.copedent[pedalName].forEach( (change:PSGChange)=>{
        if ( change.stringIndex === stringIdx ) { // Here's a change that applies
          if (changesCopedent[pedalName]) {
            changesCopedent[pedalName].push(change)
           } else {
            changesCopedent[pedalName] = [change]
           }
        }
      });
    }
    return changesCopedent;
  }
  
  public getNoteForTuning(stringIdx:number, fret:number, change:string = null):Note {
    const rootNote = this.strings[stringIdx];
    let targetNote = noteAtFret(rootNote, fret);
    if (this.copedent && change ) {
      const changesThatMightBeApplied = this.changesForString(stringIdx);
      if ( changesThatMightBeApplied[change]) {
        // this could be a little classier
        targetNote = noteAtFret(targetNote, changesThatMightBeApplied[change][0].change)
      }    
    }
    return targetNote
  }
};


