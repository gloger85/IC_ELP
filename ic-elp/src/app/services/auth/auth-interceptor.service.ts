import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor( private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authRequest = req;
    const token = this.token.getToken();
    
    if (token != null) {
      authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)})
    }
    return next.handle(authRequest);
  }
}

export const httpInterceptorproviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
]
