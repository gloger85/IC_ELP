import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { AboutComponent } from './about/about.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'password-create-new', component: PasswordCreateNewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
