import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/main-feature/actions/auth.actions';
import { MainStoreState } from 'src/app/main-feature/reducers';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<MainStoreState>, private router: Router) {}

  onSubmit() {
   this.store.dispatch(
     login({ username: this.username, password: this.password })
   );
  }
}
