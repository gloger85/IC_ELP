import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagerDashboardComponent,
    HrDashboardComponent,
    EventLogComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    PasswordResetComponent,
    PasswordCreateNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
