import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';

export const setLoading = createAction('[Course View] Set Loading');
export const setLoaded = createAction('[Course View] Set Loaded');

export const loadCoursesActions = createAction(
  '[Course View] Load CoursesActions',
  props<{ studentId: string }>()
);

export const loadCoursesByStudentIdAndParams = createAction(
  '[Course View] Load CourseActions',
  props<{  courseCode: string }>()
);
export const loadCoursesActionsSuccess = createAction(
  '[Course View] Load CourseActions Success',
  props<{ courses: Course[] }>()
);
export const loadCoursesActionsFailure = createAction(
  '[Course View] Load CourseActions Failure',
  props<{ error: any }>()
);

export const loadCourseActions = createAction(
  '[Course View] Load CourseActions',
  props<{  courseId: string }>()
);
export const loadCourseActionsSuccess = createAction(
  '[Course View] Load CourseActions Success',
  props<{ course: Course }>()
);
export const loadCourseActionsFailure = createAction(
  '[Course View] Load CourseActions Failure',
  props<{ error: any }>()
);




export const CourseActions = {
  loadCoursesActions,
  loadCoursesActionsSuccess,
  loadCoursesByStudentIdAndParams,
  loadCoursesActionsFailure,
  loadCourseActions,
  loadCourseActionsSuccess,
  loadCourseActionsFailure,
  setLoading,
  setLoaded,
};
