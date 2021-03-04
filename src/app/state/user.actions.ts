import { createAction } from '@ngrx/store';

export const incrementAge = createAction('[Counter Component] Increment age');
export const decrementAge = createAction('[Counter Component] Decrement age');
export const sendAnniversaryEmail = createAction('[Counter Component] Send anniversary email');
