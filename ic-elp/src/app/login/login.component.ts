import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/auth/token-storage.service';
import { AuthLoginInfo } from './authorization/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  form: any = {};
  isLoggedIn =false;
  isLoginFailed = false;
  errorMessage: string = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );

    this.authService.attemptLogin(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.newStatus(this.isLoggedIn);
        this.roles = this.tokenStorage.getAuthorities();        
        this.router.navigateByUrl('/dashboard')
      },
      error => {
        this.errorMessage = "Email or password is not valid";
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage() {
    window.location.reload();
  }

  private newStatus(value: boolean) {
    this.authService.changeStatus(value);
  }
}


