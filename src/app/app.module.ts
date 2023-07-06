import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromMainStore from './main-feature/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './main-feature/effects/auth.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { user_token_storage } from './cons.vars';
import { AuthGuard } from './guards/auth.guard';
import { ModalService } from './services/modal.service';
import { BotSocketService } from './main/services/bot-socket-service.service';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxModule } from './shared/ngx/ngx.module';
import { HttpInterceptorService } from './services/interceptor/http.service';

export function tokenGetter() {
  const token = localStorage.getItem(user_token_storage);
  return token;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 10000,
      progressBar: true,
    }),
    NgxModule,
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
  providers: [
    AuthGuard,
    ModalService,
    BotSocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
