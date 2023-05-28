import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromMainStore from './main-feature/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './main-feature/effects/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { user_token_storage } from './cons.vars';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';

export function tokenGetter() {
  const token = localStorage.getItem(user_token_storage);
  console.log(token);
  return token;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [`${environment.allowedDomain}`],
        disallowedRoutes: [`${environment.disallowedRoutes}`],
      },
    }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(
      fromMainStore.mainStoreFeatureKey,
      fromMainStore.mainAppReducers,
      { metaReducers: fromMainStore.metaReducers }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
