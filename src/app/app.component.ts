import { MainActions } from './main-feature/actions/main-feature.actions';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { user_token_storage } from './cons.vars';
import { UserTokenDecodedModel } from './models/user.decoded.model';
import { Store } from '@ngrx/store';
import { MainStoreState } from './main-feature/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private store: Store<MainStoreState>) {}

  ngOnInit(): void {
    const storedToken = localStorage.getItem(user_token_storage);
    if (storedToken) {
      const currentUser: UserTokenDecodedModel = this.authService.decodeToken(storedToken);
      this.store.dispatch(MainActions.setCurrentUser( currentUser ));
    }
  }
  title = 'LMSAppStudent';
}
