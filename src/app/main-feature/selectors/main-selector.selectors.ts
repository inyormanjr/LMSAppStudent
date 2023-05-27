import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainStoreState, mainStoreFeatureKey } from '../reducers';


// Create a feature selector for the auth state
const selectAuthState =
  createFeatureSelector<MainStoreState>(mainStoreFeatureKey);

// Create a selector to get the currentUser from the auth state
export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: MainStoreState) => state.currentUser
);

export const selectisLoading = createSelector(
  selectAuthState,
  (state: MainStoreState) => state.isLoading
);
