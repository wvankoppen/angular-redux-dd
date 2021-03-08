import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const initializeUser = createAction('[User] Initialize');
export const initializeUserSuccess = createAction('[User] Initialize (success)', props<User>());
export const initializeUserError = createAction('[User] Initialize (error)', props<any>());

export const celebrateBirthday = createAction('[User] Celebrate birthday');
