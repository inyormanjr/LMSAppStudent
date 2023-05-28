import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { courseReducer, coursesReducer, isLoadingReducer } from './course/course-reducer.reducer';

export const courseStoreFeatureKey = 'courseStore';

export interface CoursesState {
  courses: Course[];
  isLoading: Boolean;
  selectedCourse: Course | null
}

export const reducers: ActionReducerMap<CoursesState> = {
  courses: coursesReducer,
  isLoading: isLoadingReducer,
  selectedCourse: courseReducer,
};

export const metaReducers: MetaReducer<CoursesState>[] = isDevMode() ? [] : [];
