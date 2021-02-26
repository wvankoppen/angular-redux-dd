import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {person:{
  name: 'Wouter',
  age: 34
}};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state,  person: {...state.person, age: state.person.age+1}})),
  on(decrement, (state) => ({...state,  person: {...state.person, age: state.person.age-1}})),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/