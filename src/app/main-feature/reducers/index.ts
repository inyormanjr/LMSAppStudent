import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { currentUserReducer, isLoadingReducer } from './main-feature.action.reducers';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';

export const mainStoreFeatureKey = 'mainStore';

export interface MainStoreState {
  isLoading: boolean;
  currentUser: UserTokenDecodedModel | null;
}

export const mainAppReducers: ActionReducerMap<MainStoreState> = {
  isLoading: isLoadingReducer,
  currentUser: currentUserReducer,
};

export const metaReducers: MetaReducer<MainStoreState>[] = isDevMode() ? [] : [];
