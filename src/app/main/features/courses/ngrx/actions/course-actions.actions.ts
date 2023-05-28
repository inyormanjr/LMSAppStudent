import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from 'src/app/main/models/course';

export const setLoading = createAction('[Course View] Set Loading');
export const setLoaded = createAction('[Course View] Set Loaded');

export const loadCoursesActions = createAction(
  '[CourseActions] Load CoursesActions',
  props<{ studentId: string }>()
);

export const loadCoursesByStudentIdAndParams = createAction(
  '[CoursesActions] Load CourseActions',
  props<{ studentId: string, courseCode: string }>()
);
export const loadCoursesActionsSuccess = createAction(
  '[CoursesActions] Load CourseActions Success',
  props<{ courses: Course[] }>()
);
export const loadCoursesActionsFailure = createAction(
  '[CoursesActions] Load CourseActions Failure',
  props<{ error: any }>()
);

export const loadCourseActions = createAction(
  '[CourseActions] Load CourseActions',
  props<{ studentId: string , courseId: string}>()
);
export const loadCourseActionsSuccess = createAction(
  '[CourseActions] Load CourseActions Success',
  props<{ course: Course}>()
);
export const loadCourseActionsFailure = createAction(
  '[CourseActions] Load CourseActions Failure',
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
