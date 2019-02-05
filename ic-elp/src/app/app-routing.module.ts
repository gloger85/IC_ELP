import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { AvailabilityViewerComponent } from './availability-viewer/availability-viewer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrEventLogComponent } from './hr-event-log/hr-event-log.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrHolidayPlannerComponent } from './hr-holiday-planner/hr-holiday-planner.component';
import { HrReportsDashboardComponent } from './hr-reports-dashboard/hr-reports-dashboard.component';
import { HrSettingsComponent } from './hr-settings/hr-settings.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerAvailabilityViewerComponent } from './manager-availability-viewer/manager-availability-viewer.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerInboxComponent } from './manager-inbox/manager-inbox.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';
import { UserAdministrationComponent } from './user-administration/user-administration.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'availability-viewer', component: AvailabilityViewerComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'hr-event-log', component: HrEventLogComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent },
  { path: 'hr-holiday-planner', component: HrHolidayPlannerComponent },
  { path: 'hr-reports-dashboard', component: HrReportsDashboardComponent },
  { path: 'hr-settings', component: HrSettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'manager-availability-viewer', component: ManagerAvailabilityViewerComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'manager-inbox', component: ManagerInboxComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'password-create-new', component: PasswordCreateNewComponent },
  { path: 'user-administration', component: UserAdministrationComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
