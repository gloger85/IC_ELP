import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public login(email: string): void {
    // tslint:disable-next-line:no-console
    console.info(`Email entered: ${email}`);
    email = email.trim().toLocaleLowerCase();

    if (!email) {
      console.error('Email not provided');
      return;
    }

    // tslint:disable-next-line:no-console
    console.info(`Navigate to: ${this.getDashboardUrlByEmail(email)}`);
    this.router.navigate([`./${this.getDashboardUrlByEmail(email)}`]);
  }

  private getDashboardUrlByEmail(email: string): string {
    const dashboardUrl: string = this._loginRoutingMap.get(email);

    // TODO: We should look for better option here.
    if (typeof dashboardUrl === 'undefined' || !dashboardUrl) {
      return '/enter-error-page-here';
    }

    return dashboardUrl;
  }
}
