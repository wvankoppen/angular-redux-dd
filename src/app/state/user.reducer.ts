import { createReducer, on } from '@ngrx/store';
import { incrementAge, decrementAge } from './user.actions';

export const initialState = {
  name: 'wouter',
  age: 34
};

const _counterReducer = createReducer(
  initialState,
  on(incrementAge, (state) => ({...state, age: state.age+1})),
  on(decrementAge, (state) => ({...state,  age: state.age-1})),
);

export function userReducer(state, action) {
  return _counterReducer(state, action);
}
