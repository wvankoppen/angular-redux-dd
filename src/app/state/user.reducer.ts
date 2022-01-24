import { createReducer, on } from '@ngrx/store';
import { celebrateBirthday, initializeUserSuccess } from './user.actions';

export const initialState = null;

const _userReducer = createReducer(
    initialState,
    on(initializeUserSuccess, (state, action) => ({ ...state, name: action.name, age: action.age })),
    on(celebrateBirthday, (state) => ({ ...state, age: state.age + 1 }))
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}
