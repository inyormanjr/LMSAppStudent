import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Course } from 'src/app/main/models/course';
import { courseReducer } from './dashboard-reducer.reducer';

export const dashboardStoreFeatureKey = 'dashboardStore';

export interface DashboardState {
  courses: Course[];
}

export const reducers: ActionReducerMap<DashboardState> = {
  courses: courseReducer,
};


export const metaReducers: MetaReducer<DashboardState>[] = isDevMode() ? [] : [];
