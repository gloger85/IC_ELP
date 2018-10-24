import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrSettingsComponent } from './hr-settings/hr-settings.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerInboxComponent } from './manager-inbox/manager-inbox.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { UserAdministrationComponent } from './user-administration/user-administration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent },
  { path: 'hr-settings', component: HrSettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'manager-inbox', component: ManagerInboxComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'password-create-new', component: PasswordCreateNewComponent },
  { path: 'request-leave', component: RequestLeaveComponent },
  { path: 'user-administration', component: UserAdministrationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
