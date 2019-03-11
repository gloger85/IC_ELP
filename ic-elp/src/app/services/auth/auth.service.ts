import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthLoginInfo } from 'src/app/login/authorization/login-info';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/login/authorization/jwt-response';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

// CanActivate interface manages navigation business rules
export class AuthService {

  private loginUrl = 'http://localhost:8080/login';
  private logoutUrl = 'http://localhost:8080/logout';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  attemptLogin(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  logout() {
    return this.http.post(this.logoutUrl, {});
  }

  isAuthorized(allowedRoutes: string[]): boolean {
    
    if(allowedRoutes == null || allowedRoutes.length === 0) {
      return true;
    }

    return allowedRoutes.some(authority => this.tokenStorage.getAuthorities().includes(authority));
  }
}
