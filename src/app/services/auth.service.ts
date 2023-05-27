import { UserLogin } from './../models/user.login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthResponseModel } from '../models/auth.response.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenDecodedModel } from '../models/user.decoded.model';
import { environment } from 'src/environments/environment';
import { user_token_storage } from '../cons.vars';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.api_uri + '/auth'; // Replace with your API endpoint URL

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(username: string, password: string): Observable<AuthResponseModel> {
    const loginData: UserLogin = {
      email: username,
      password: password,
    };
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/login`, {
      email: username,
      password,
    }).pipe(map((authResponse: AuthResponseModel) => {
      localStorage.setItem(user_token_storage, authResponse.token);
      return authResponse
    }));
  }

  public decodeToken(token: string): UserTokenDecodedModel {
    const decoded = this.jwtHelper.decodeToken(token);
    return decoded;
  }

  register(username: string, password: string): Observable<any> {
    const registerData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, null);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/authuser`);
  }
}
