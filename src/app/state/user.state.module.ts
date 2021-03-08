import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';

export const STORE_CONFIG = {
  runtimeChecks: {
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictStateSerializability: false,
    strictActionSerializability: false,
  },
};

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ user: userReducer }, STORE_CONFIG),
    [
      StoreDevtoolsModule.instrument({
        maxAge: 200,
      }),
    ],
  ],
})
export class UserStateModule {}
