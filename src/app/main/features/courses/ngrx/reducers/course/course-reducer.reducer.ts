import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { CourseActions } from '../../actions/course-actions.actions';



export const isLoadingReducer = createReducer<Boolean>(
  false,
  on(CourseActions.setLoading, () => true),
  on(CourseActions.setLoaded, () => false)
);

// Create the reducer
export const coursesReducer = createReducer<Course[]>(
  [],
  on(CourseActions.loadCoursesActionsSuccess, (_, { courses }) => courses),
  on(CourseActions.loadCoursesActionsFailure, (state, { error }) => {
    console.error('Error loading courses:', error);
    return state;
  }),
);

export const courseReducer = createReducer<Course | null>(
  null,
  on(CourseActions.loadCourseActionsSuccess, (_, { course }) => course),
  on(CourseActions.loadCourseActionsFailure, (state, { error }) => {
    console.error('Error loading course:', error);
    return state;
  })
);
