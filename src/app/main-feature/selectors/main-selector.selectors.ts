import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainStoreState, mainStoreFeatureKey } from '../reducers';


// Create a feature selector for the auth state
const selectMainState =
  createFeatureSelector<MainStoreState>(mainStoreFeatureKey);

// Create a selector to get the currentUser from the auth state
 const selectCurrentUser = createSelector(
  selectMainState,
  (state: MainStoreState) => state.currentUser
);

 const selectisLoading = createSelector(
  selectMainState,
  (state: MainStoreState) => state.isLoading
 );

 export const mainStateSelectors = { selectCurrentUser, selectisLoading };
