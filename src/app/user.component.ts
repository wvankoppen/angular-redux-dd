import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './app.model';
import { incrementAge, decrementAge, sendAnniversaryEmail } from './state/user.actions';

@Component({
  selector: 'app-user',
  template: `
    <button id="increment" (click)="increment()">Increment age</button>
    <button id="decrement" (click)="decrement()">Decrement age</button>

    <p>Formatted by pipe: {{ user$ | async | formatUser }}</p>
    <p>State: {{ user$ | async | json }}</p>

  `})
export class UserComponent {
  user$: Observable<User>;

  constructor(private store: Store< {user:User} >) {
    this.user$ = store.select(s => s.user);

    this.user$.subscribe(u => {
      if (u.age === 40) {
        this.store.dispatch(sendAnniversaryEmail());
      }
    });
  }

  increment() {
    this.store.dispatch(incrementAge());
  }

  decrement() {
    this.store.dispatch(decrementAge());
  }
}
