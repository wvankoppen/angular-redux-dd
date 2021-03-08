import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { celebrateBirthday, initializeUser } from './state/user.actions';
import { User } from './state/user.model';

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="initialize()">Initialize</button>

    <h3>Current user</h3>
    <p>{{ user$ | async | formatUser }}</p>
    <p>
      <button (click)="celebrateBirthday()">Celebrate birthday</button>
    </p>
  `,
})
export class UserComponent {
  user$: Observable<User>;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = store.select((s) => s.user);
  }

  initialize() {
    this.store.dispatch(initializeUser());
  }

  celebrateBirthday() {
    this.store.dispatch(celebrateBirthday());
  }
}
