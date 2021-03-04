import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { UserState } from '../app.model';
import { incrementAge } from './user.actions';

@Injectable({
    providedIn: 'root',
})
export class UserEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<UserState>,

    ) {}
    logAge$ = createEffect(
        () => this.actions$.pipe(
            ofType(incrementAge),
            withLatestFrom(this.store$),
            tap(([action,state]) => console.log('Action is fired!', action, state.user.age))
        ),
        { dispatch: false }
);}
