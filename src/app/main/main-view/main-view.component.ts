import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { selectCurrentUser, selectisLoading } from 'src/app/main-feature/selectors/main-selector.selectors';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  currentUser$: Observable<UserTokenDecodedModel | null>;
  isLoading$: Observable<boolean>;
  constructor(private store: Store<MainStoreState>, private authService: AuthService, private router: Router) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.isLoading$ = this.store.select(selectisLoading);
  }
  ngOnInit(): void { }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
