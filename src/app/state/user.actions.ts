import { createAction, props } from '@ngrx/store';
import { User } from './user.state';

export const initializeUser = createAction('[User] Initialize');
export const initializeUserSuccess = createAction('[User] Initialize (success)', props<User>());
export const initializeUserError = createAction('[User] Initialize (error)', props<any>());
export const incrementUserAge = createAction('[User] Increment age');
export const decrementUserAge = createAction('[User] Decrement age');
export const celebrateAnniversary = createAction('[User] Celebrate anniversary');
