import { MainActions } from './../actions/main-feature.actions';
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logoutSuccess } from '../actions/auth.actions';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';

export const isLoadingReducer = createReducer<boolean>(
  false,
  on(MainActions.setLoading, () => true),
  on(MainActions.setLoaded, () => false)
);

export const currentUserReducer = createReducer<UserTokenDecodedModel | null>(
  null,
  on(MainActions.setCurrentUser, (_, { user }) => user),
  on(MainActions.clearCurrentUser, () => null),
  on(loginSuccess, (_, { user }) => user),
  on(logoutSuccess, () => null)
);
