import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';

export const STORE_CONFIG = {
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
    },
};

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({ user: userReducer }, STORE_CONFIG),
        EffectsModule.forRoot([UserEffects]),
        [
            StoreDevtoolsModule.instrument({
                maxAge: 200,
            }),
        ],
    ],
})
export class UserStateModule {}
