import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "./state/user.state";
import { decrementUserAge, incrementUserAge, initializeUser } from "./state/user.actions";

@Component({
  selector: "app-user",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="initialize()">Initialize</button>

    <p>
      <button (click)="increment()">Increment age</button>
      <button (click)="decrement()">Decrement age</button>
    </p>
    <h3>Current user</h3>
    <p>{{ user$ | async | formatUser }}</p>
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

  increment() {
    this.store.dispatch(incrementUserAge());
  }

  decrement() {
    this.store.dispatch(decrementUserAge());
  }
}
