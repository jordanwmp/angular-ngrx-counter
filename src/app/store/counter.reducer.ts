import { createReducer, on } from '@ngrx/store'
import { decrement, increment, reset } from './counter.actions'

export const initialState = 0

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => state = 0)
)
