import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  private passwordReset = "http://localhost:8080/users/password/reset"

  constructor(private http: HttpClient) { }

  restorePassword(email): Observable<string> {
    return this.http.post<string>(this.passwordReset, email, httpOptions);
  }
}
