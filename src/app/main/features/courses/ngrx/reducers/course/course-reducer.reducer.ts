import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { CourseActions } from '../../actions/course-actions.actions';



export const isLoadingReducer = createReducer<Boolean>(
  false,
  on(CourseActions.setLoading, () => true),
  on(CourseActions.setLoaded, () => false)
);

// Create the reducer
export const courseReducer = createReducer<Course[]>(
  [],
  on(CourseActions.loadCourseActionsSuccess, (_, { courses }) => courses),
  on(CourseActions.loadCourseActionsFailure, (state, { error }) => {
    // Handle the failure case, such as displaying an error message
    console.error('Error loading courses:', error);
    return state;
  }),
);
