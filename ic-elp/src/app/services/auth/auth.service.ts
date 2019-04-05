import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthLoginInfo } from 'src/app/login/authorization/login-info';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtResponse } from 'src/app/login/authorization/jwt-response';
import { TokenStorageService } from './token-storage.service';
import { SignUpInfo } from 'src/app/domain/sigup-info';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

// CanActivate interface manages navigation business rules
export class AuthService {

  webApiUrl = environment.webApiUrl;

  private statusSource = new BehaviorSubject<boolean>(this.tokenStorage.isTokenPresent());
  currentStatus = this.statusSource.asObservable();

  private loginUrl = this.webApiUrl + 'login';
  private logoutUrl = this.webApiUrl + 'logout';
  private signupUrl = this.webApiUrl + 'users/register';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  changeStatus(status: boolean) {
    this.statusSource.next(status);
  }

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

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }


}
