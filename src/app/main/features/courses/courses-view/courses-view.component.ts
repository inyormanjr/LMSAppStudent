import { mainStateSelectors } from 'src/app/main-feature/selectors/main-selector.selectors';
import { Component } from '@angular/core';
import { CourseWithStats } from 'src/app/main/models/course.with.stats';
import { CoursesState } from '../ngrx/reducers';
import { Store } from '@ngrx/store';
import { CourseActions } from '../ngrx/actions/course-actions.actions';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { Observable } from 'rxjs';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';
import { Course } from 'src/app/main/models/course';
import { CourseSelectors } from '../ngrx/selectors/courses-selector.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css'],
})
export class CoursesViewComponent {
  courses$: Observable<Course[]>;
  currentUser$: Observable<UserTokenDecodedModel | null>;
  selectedCourse: any; // Variable to hold the selected course
  //selectedCourse$: Observable<Course>;

  constructor(
    private store: Store<CoursesState>,
    private mainStore: Store<MainStoreState>,
    private router:Router
  ) {
    this.currentUser$ = this.mainStore.select(mainStateSelectors.selectCurrentUser);
    this.currentUser$.subscribe((x) => {
      this.store.dispatch(
        CourseActions.loadCoursesActions({ studentId: x?.id })
      );
    });

    this.courses$ = this.store.select(CourseSelectors.courses);
  }

  openPreviewModal(course: any) {
    this.selectedCourse = course; // Set the selected course
  }


  goToCourse(courseId: any) {
    //this.router.navigateByUrl();
  }
}
