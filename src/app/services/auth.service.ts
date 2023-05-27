import { UserLogin } from './../models/user.login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthResponseModel } from '../models/auth.response.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/v1'; // Replace with your API endpoint URL

  constructor(private http: HttpClient, private jwtHelper:JwtHelperService) {}

  login(username: string, password: string): Observable<any> {
    const loginData: UserLogin = {
      email: username,
      password: password,
    };
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {
      email: username,
      password,
    }).pipe(map((response: AuthResponseModel) =>
     response));
  }

  public decodeToken(token: string): any {
    const decoded = this.jwtHelper.decodeToken(token);
    console.log(decoded);
    return decoded;
  }

  register(username: string, password: string): Observable<any> {
    const registerData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/auth/register`, registerData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, null);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/authuser`);
  }
}
