import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  webApiUrl = environment.webApiUrl;

  private passwordReset = this.webApiUrl + 'users/password/reset'

  constructor(private http: HttpClient) { }

  restorePassword(email): Observable<string> {
    return this.http.post<string>(this.passwordReset, email, httpOptions);
  }
}
