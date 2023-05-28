import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { selectCurrentUser } from 'src/app/main-feature/selectors/main-selector.selectors';
import { Course } from 'src/app/main/models/course';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';
import { dashboardCoursesActions } from '../ngrx/actions/dashboard-actions.actions';
import { selectCourses } from '../ngrx/selectors/dashboard-selector.selectors';
import { Announcement } from 'src/app/main/models/anouncement';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  currentUser$: Observable<UserTokenDecodedModel | null>;
  assessments = [
    { name: 'assessments 1', value: 10 },
    { name: 'assessments 2', value: 20 },
    { name: 'assessments 3', value: 15 },
  ];

  announcements: Announcement[] = [
    {
      title: 'Important Announcement 1',
      description: 'This is the first important announcement.',
      dateCreated: new Date(),
      creator: 'John Doe',
    },
    {
      title: 'Important Announcement 2',
      description: 'This is the second important announcement.',
      dateCreated: new Date(),
      creator: 'Jane Smith',
    },
    {
      title: 'Important Announcement 2',
      description: 'This is the second important announcement.',
      dateCreated: new Date(),
      creator: 'Jane Smith',
    },
  ];

  courses$: Observable<Course[]>;
  constructor(private store: Store<MainStoreState>) {
    this.currentUser$ = this.store.select(selectCurrentUser);

    this.currentUser$.subscribe((x) => {
      this.store.dispatch(
        dashboardCoursesActions.loadDashboardCourses({
          studentId: x?.id,
        })
      );
    });

    this.courses$ = this.store.select(selectCourses);
  }
  ngOnInit(): void {}
}
