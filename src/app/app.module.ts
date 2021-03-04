import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UserComponent } from './user.component';
import { FormatUserPipe } from './pipes/format-user.pipe';

export const STORE_CONFIG = {
  runtimeChecks: {
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictStateSerializability: false,
    strictActionSerializability: false,
  },
};


@NgModule({
  declarations: [AppComponent, UserComponent, FormatUserPipe],
  imports: [BrowserModule,EffectsModule.forRoot([UserEffects]),StoreModule.forRoot({ user: userReducer }, STORE_CONFIG), [
    StoreDevtoolsModule.instrument({
      maxAge: 200,
    }),
  ]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
