import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../user.service';
import { UserState } from './user.model';
import { celebrateBirthday, initializeUser, initializeUserError, initializeUserSuccess } from './user.actions';

@Injectable({
    providedIn: 'root',
})
export class UserEffects {
    constructor(private actions$: Actions, private store$: Store<UserState>, private userService: UserService) {}

    initializeUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(initializeUser),
            switchMap((action) => this.userService.getUser()),
            map((user) => initializeUserSuccess(user)),
            catchError((error) => of(initializeUserError(error)))
        )
    );

    logAge$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(celebrateBirthday),
                withLatestFrom(this.store$),
                tap(([action, state]) => console.log('Log age change!', action, state.user.age))
            ),
        { dispatch: false }
    );

    makeSomeCake$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(celebrateBirthday),
                withLatestFrom(this.store$),
                tap(([action, state]) => console.log('Make some cake'))
            ),
        { dispatch: false }
    );
}
