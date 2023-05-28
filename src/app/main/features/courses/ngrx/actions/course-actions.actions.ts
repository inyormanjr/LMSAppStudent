import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';

export const setLoading = createAction('[Course View] Set Loading');
export const setLoaded = createAction('[Course View] Set Loaded');

export const loadCourseActions = createAction(
  '[CourseActions] Load CourseActions',
  props<{ studentId: string }>()
);
export const loadCourseActionsSuccess = createAction(
  '[CourseActions] Load CourseActions Success',
  props<{ courses: Course[] }>()
);
export const loadCourseActionsFailure = createAction(
  '[CourseActions] Load CourseActions Failure',
  props<{ error: any }>()
);

export const CourseActions = {
  loadCourseActions,
  loadCourseActionsSuccess,
  loadCourseActionsFailure,
  setLoading,
  setLoaded,
};
