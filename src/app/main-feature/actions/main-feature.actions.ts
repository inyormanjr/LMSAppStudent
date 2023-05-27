import { Action, createAction, createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';


// Define your actions
export const setLoading = createAction('[Main Store] Set Loading');
export const setLoaded = createAction('[Main Store] Set Loaded');
export const setCurrentUser = createAction(
  '[Main Store] Set Current User',
  (user: UserModel) => ({ user })
);
export const clearCurrentUser = createAction('[Main Store] Clear Current User');
