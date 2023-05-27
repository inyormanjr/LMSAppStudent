import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { selectCurrentUser } from 'src/app/main-feature/selectors/main-selector.selectors';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  currentUser$: Observable<UserTokenDecodedModel | null>;
  constructor(private store: Store<MainStoreState>) {
     this.currentUser$ = this.store.select(selectCurrentUser);
  }
  ngOnInit(): void {
  }
}
