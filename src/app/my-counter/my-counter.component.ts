import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../app.model';
import { increment, decrement, sendEmail } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  person$: Observable<Person>;

  constructor(private store: Store< {user:Person} >) {
    this.person$ = store.select(s => s.user);

    this.person$.subscribe(p => {
      if (p.age === 40) {
        this.store.dispatch(sendEmail());
      }
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
