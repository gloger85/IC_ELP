import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authService.isAuthorized(allowedRoles);

    if(!isAuthorized) {
      this.router.navigate(['/login']);
    }

    return isAuthorized;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const allowedRoles: any[] = next.data.allowedRoles;
    const isAuthorized = this.authService.isAuthorized(allowedRoles);

    if(!isAuthorized) {
      this.router.navigate(['/login']);
    }

    return isAuthorized;
  }
}
