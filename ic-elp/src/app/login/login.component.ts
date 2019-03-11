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

  private _loginRoutingMap: Map<string, string> = new Map([
    ['hr@infosys.com', 'hr-dashboard'],
    ['manager@infosys.com', 'manager-dashboard'],
    ['member@infosys.com', 'dashboard']
  ]);


  form: any = {};
  isLoggedIn =false;
  isLoginFailed = false;
  // msgs: Message[] = [];
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
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );

    this.authService.attemptLogin(this.loginInfo).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        // window.location.reload();
        this.router.navigateByUrl('/dashboard')
      },
      error => {
        console.log(error);
        this.errorMessage = "Email or password is not valid";
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage() {
    window.location.reload();
  }
}


