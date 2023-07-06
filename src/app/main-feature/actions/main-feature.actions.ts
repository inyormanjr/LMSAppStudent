import { Action, createAction, createReducer, on } from '@ngrx/store';
import { UserTokenDecodedModel } from 'src/app/models/user.decoded.model';


// Define your actions
 const setLoading = createAction('[Main Store] Set Loading');
 const setLoaded = createAction('[Main Store] Set Loaded');
 const setCurrentUser = createAction(
  '[Main Store] Set Current User',
  (user: UserTokenDecodedModel) => ({ user })
);
const clearCurrentUser = createAction('[Main Store] Clear Current User');

export const MainActions = {setLoading, setLoaded, setCurrentUser, clearCurrentUser};
