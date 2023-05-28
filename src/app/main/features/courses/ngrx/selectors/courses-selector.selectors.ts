import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState, courseStoreFeatureKey } from '../reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>(
  courseStoreFeatureKey
);

 const courses = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.courses
);

 const isLoading = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isLoading
);

export const CourseSelectors = {courses, isLoading};
