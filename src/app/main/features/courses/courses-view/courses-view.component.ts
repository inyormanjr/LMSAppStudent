import { Component } from '@angular/core';
import { CourseWithStats } from 'src/app/main/models/course.with.stats';
import { CoursesState } from '../ngrx/reducers';
import { Store } from '@ngrx/store';
import { CourseActions } from '../ngrx/actions/course-actions.actions';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { Observable } from 'rxjs';
import { selectCurrentUser } from 'src/app/main-feature/selectors/main-selector.selectors';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';
import { Course } from 'src/app/main/models/course';
import { CourseSelectors } from '../ngrx/selectors/courses-selector.selectors';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css'],
})
export class CoursesViewComponent {


  courses$: Observable<Course[]>;
  currentUser$: Observable<UserTokenDecodedModel | null>;
  constructor(
    private store: Store<CoursesState>,
    private mainStore: Store<MainStoreState>
  ) {
    this.currentUser$ = this.mainStore.select(selectCurrentUser);
    this.currentUser$.subscribe((x) => {
      this.store.dispatch(
        CourseActions.loadCourseActions({ studentId: x?.id })
      );
    });

    this.courses$ = this.store.select(CourseSelectors.courses);
  }
}
