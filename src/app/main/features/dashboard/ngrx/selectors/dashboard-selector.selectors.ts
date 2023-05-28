import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState, dashboardStoreFeatureKey } from '../store/reducers';

export const selectDashboardState = createFeatureSelector<DashboardState>(
  dashboardStoreFeatureKey
);

export const selectCourses = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.courses
);
