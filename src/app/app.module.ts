import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './userReducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { FormatPersonPipe } from './my-counter/to-age.pipe';

export const STORE_CONFIG = {
  runtimeChecks: {
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictStateSerializability: false,
    strictActionSerializability: false,
  },
};


@NgModule({
  declarations: [AppComponent, MyCounterComponent, FormatPersonPipe],
  imports: [BrowserModule, StoreModule.forRoot({ user: userReducer }, STORE_CONFIG), [
    StoreDevtoolsModule.instrument({
      maxAge: 200,
    }),
  ]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
