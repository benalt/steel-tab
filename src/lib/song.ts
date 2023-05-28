import {v4 as uuidv4} from 'uuid';
import { KeyOf } from "./musicTheory";
import type { Chord } from "./musicTheory";
import {Tuning } from "./tuning";

export type TabItem = {
  [key: number]: string, 
  measureBreak?:boolean
  leftOffset: number
  establishChord? : Chord
}

export type Tab = {
  grouping: Array<TabItem>,
}

export type Song = { 
  uuid: string
  name: string
  keyOf: KeyOf
  tuning: Tuning
  tab: Tab|undefined
}