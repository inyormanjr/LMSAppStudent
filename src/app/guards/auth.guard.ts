import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { user_token_storage } from '../cons.vars';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem(user_token_storage);
    if (token) {
      // Token exists, allow access to main route
      return true;
    } else {
      // Token doesn't exist, redirect to login route
      this.router.navigate(['login']);
      return false;
    }
  }
}
