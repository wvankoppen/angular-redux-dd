import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserStateModule } from './state/user.state.module';
import { UserComponent } from './user.component';
import { FormatUserPipe } from './pipes/format-user.pipe';

@NgModule({
  declarations: [AppComponent, UserComponent, FormatUserPipe],
  imports: [BrowserModule, HttpClientModule, UserStateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
