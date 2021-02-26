import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
  name: 'Wouter',
  age: 34
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, age: state.age+1})),
  on(decrement, (state) => ({...state,  age: state.age-1})),
);

export function userReducer(state, action) {
  return _counterReducer(state, action);
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
