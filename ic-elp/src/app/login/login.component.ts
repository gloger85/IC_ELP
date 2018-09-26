import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  msgs: Message[] = [];

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
      this.showErrorMessage();
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
      this.showErrorMessage();
    }

    return dashboardUrl;
  }

  public showErrorMessage() : void{
    // tslint:disable-next-line:no-console
    console.error('Incorect e-mail and/or password');
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Incorect e-mail and/or password', detail:'Please make sure that the email and password are correct'});
    return;
  }
}
