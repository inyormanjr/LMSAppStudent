import { createReducer, on } from '@ngrx/store';
import { clearCurrentUser, setCurrentUser, setLoaded, setLoading } from '../actions/main-feature.actions';
import { loginSuccess, logoutSuccess } from '../actions/auth.actions';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';

export const isLoadingReducer = createReducer<boolean>(
  false,
  on(setLoading, () => true),
  on(setLoaded, () => false)
);

export const currentUserReducer = createReducer<UserTokenDecodedModel | null>(
  null,
  on(setCurrentUser, (_, { user }) => user),
  on(clearCurrentUser, () => null),
  on(loginSuccess, (_, { user }) => user),
  on(logoutSuccess, () => null)
);
