import { createReducer, on } from '@ngrx/store';
import { clearCurrentUser, setCurrentUser, setLoaded, setLoading } from '../actions/main-feature.actions';
import { loginSuccess, logoutSuccess } from '../actions/auth.actions';
import { UserModel } from 'src/app/models/user.model';

export const isLoadingReducer = createReducer<boolean>(
  false,
  on(setLoading, () => true),
  on(setLoaded, () => false)
);

export const currentUserReducer = createReducer<UserModel | null>(
  null,
  on(setCurrentUser, (_, { user }) => user),
  on(clearCurrentUser, () => null),
  on(loginSuccess, (_, { user }) => user),
  on(logoutSuccess, () => null)
);
