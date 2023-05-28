import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { courseReducer, isLoadingReducer } from './course/course-reducer.reducer';

export const courseStoreFeatureKey = 'courseStore';

export interface CoursesState {
  courses: Course[];
  isLoading: Boolean;
}

export const reducers: ActionReducerMap<CoursesState> = {
  courses: courseReducer,
  isLoading: isLoadingReducer,
};

export const metaReducers: MetaReducer<CoursesState>[] = isDevMode() ? [] : [];
