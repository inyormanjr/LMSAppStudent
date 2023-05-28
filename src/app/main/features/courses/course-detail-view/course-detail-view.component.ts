import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoursesState } from '../ngrx/reducers';
import { Observable } from 'rxjs';
import { Course } from 'src/app/main/models/course';
import { CourseActions } from '../ngrx/actions/course-actions.actions';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';
import { selectCurrentUser } from 'src/app/main-feature/selectors/main-selector.selectors';
import { ActivatedRoute } from '@angular/router';
import { CourseSelectors } from '../ngrx/selectors/courses-selector.selectors';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
  styleUrls: ['./course-detail-view.component.css'],
})
export class CourseDetailViewComponent {


  discussions = [
    {
      title: 'Introduction to Components',
      description: 'This discussion covers the basics of Angular components.',
      date: new Date(),
      creator: 'Jane Smith',
    },
    {
      title: 'Angular Forms',
      description: 'This discussion explores Angular forms and their usage.',
      date: new Date(),
      creator: 'John Doe',
    },
    // Add more discussions as needed
  ];

  currentUser$: Observable<UserTokenDecodedModel | null>;
  selectedCourse$: Observable<Course | null>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<CoursesState>, private mainStore: Store<MainStoreState>) {

    this.currentUser$ = mainStore.select(selectCurrentUser);

    this.currentUser$.subscribe(x => {
      this.route.params.subscribe((params) => {
        const courseId = params['courseId'];
        // Use the courseId as needed in your component logic
        console.log('Course Id:', courseId);

      store.dispatch(
        CourseActions.loadCourseActions({ studentId: x?.id, courseId: courseId })
      );
      });
    });
     this.selectedCourse$ = this.store.select(CourseSelectors.selectedCourse);

  }
}
