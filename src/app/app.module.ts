import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ToAgePipe } from './my-counter/to-age.pipe';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, ToAgePipe],
  imports: [BrowserModule, StoreModule.forRoot({ person: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/