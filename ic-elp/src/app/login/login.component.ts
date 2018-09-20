import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginRoutingMap : Map<string,string> = new Map([
    ['hr@infosys.com', 'hr-dashboard'],
    ['manager@infosys.com','manager-dashboard'],
    ['others', 'dashboard']
    ]);

  constructor() { }

  ngOnInit() {
  }

  login(email : string) : void {
    
    console.log('Email entered: ' + email);

    email = email.trim();
    if (!email) { 
      console.log('Email not provided');
      return;
     }
    ///TODO: Email validation (@infosys.com)

    console.log('Navigate to: ' + this.getDashboardUrlByEmail(email));
    
    ///TODO: Navigate to the login page with extras
    //this.router.navigate(['/'+]);
  }

  getDashboardUrlByEmail(email : string) : string {
    
    var dashboardUrl : string = this._loginRoutingMap.get(email);

    if(dashboardUrl){
      return dashboardUrl;
    }else{
      return this._loginRoutingMap.get('others');
    }
  } 
}
