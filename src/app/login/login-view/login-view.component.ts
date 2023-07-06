import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/main-feature/actions/auth.actions';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { mainStateSelectors } from 'src/app/main-feature/selectors/main-selector.selectors';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent {
  username: string = '';
  password: string = '';
  isLoading$: Observable<boolean>;

  constructor(private store: Store<MainStoreState>, private router: Router) {
    this.isLoading$ = this.store.select(mainStateSelectors.selectisLoading);


  }

  onSubmit() {
   this.store.dispatch(
     login({ username: this.username, password: this.password })
   );
  }
}
