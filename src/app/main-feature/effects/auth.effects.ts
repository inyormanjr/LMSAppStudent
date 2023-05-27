import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from '../actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { MainStoreState } from '../reducers';
import { Store } from '@ngrx/store';
import { AuthResponseModel } from 'src/app/models/auth.response.model';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService
          .login(action.username, action.password)
          .pipe(
            map((authResponse: AuthResponseModel) => loginSuccess({ user: this.authService.decodeToken(authResponse.token) })),
            catchError((error) => of(loginFailure({ error })))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap((action) =>
        this.authService
          .register(action.username, action.password)
          .pipe(
            map(() => registerSuccess()),
            catchError((error) => of(registerFailure({ error })))
          )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error) => of(logoutFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, mainStore: Store<MainStoreState>) {}
}
