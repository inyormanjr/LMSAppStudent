import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { currentUserReducer, isLoadingReducer } from './main-feature.action.reducers';
import { UserModel } from 'src/app/models/user.model';

export const mainStoreFeatureKey = 'mainStore';

export interface MainStoreState {
  isLoading: boolean;
  currentUser: UserModel | null;
}

export const mainAppReducers: ActionReducerMap<MainStoreState> = {
  isLoading: isLoadingReducer,
  currentUser: currentUserReducer,
};

export const metaReducers: MetaReducer<MainStoreState>[] = isDevMode() ? [] : [];
