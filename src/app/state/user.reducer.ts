import { createReducer, on } from '@ngrx/store';
import { incrementUserAge, decrementUserAge, initializeUserSuccess } from './user.actions';

export const initialState = null;

const _counterReducer = createReducer(
  initialState,
  on(incrementUserAge, (state) => ({...state, age: state.age+1})),
  on(decrementUserAge, (state) => ({...state,  age: state.age-1})),
  on(initializeUserSuccess, (state, action) => ({...state,  name: action.name, age: action.age})),
);

export function userReducer(state, action) {
  return _counterReducer(state, action);
}
