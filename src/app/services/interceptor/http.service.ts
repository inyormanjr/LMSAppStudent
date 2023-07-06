import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MainStoreState } from 'src/app/main-feature/reducers';
import { Store } from '@ngrx/store';
import { MainActions } from 'src/app/main-feature/actions/main-feature.actions';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private mainStore: Store<MainStoreState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Show the progress bar or perform any other loading indicator action here
    this.mainStore.dispatch(MainActions.setLoading());
    console.log("Request Started");
    // Add authorization headers, modify request, etc. if needed
    const modifiedRequest = request.clone({
      // Add headers, modify properties, etc.
    });

    return next.handle(modifiedRequest).pipe(
      finalize(() => {
        console.log('Request Completed');
        this.mainStore.dispatch(MainActions.setLoaded());
      })
    );
  }
}
