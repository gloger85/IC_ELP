import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AvailabilityViewerComponent } from './availability-viewer/availability-viewer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrEventLogComponent } from './hr-event-log/hr-event-log.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
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
import { AuthGuard } from './services/route-guards/auth-guard.guard';
import { RegisterComponent } from './register/register.component';
import { HrHolidayPlannerComponent } from './hr-holiday-planner/hr-holiday-planner.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      },
      {
        path: 'logout',
        component: LogoutComponent,
        redirectTo: ''
      },
      { 
        path: 'about', 
        component: AboutComponent,
        data: {}
      },
      { 
        path: 'availability-viewer', 
        component: AvailabilityViewerComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN', 'MANAGER']}
      },
      { 
        path: 'dashboard', 
        component: DashboardComponent, 
        data: {allowedRoles: ['SUPER_ADMIN', 'USER', 'HR_ADMIN']}
      },
      { 
        path: 'event-log', 
        component: EventLogComponent ,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN', 'MANAGER']}
      },
      // { 
      //   path: 'hr-event-log', 
      //   component: HrEventLogComponent,
      //   data: {} 
      // },
      { 
        path: 'hr-dashboard', 
        component: HrDashboardComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN']} 
      },
      { 
        path: 'hr-holiday-planner', 
        component: HrHolidayPlannerComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN']}
      },
      { 
        path: 'hr-reports-dashboard', 
        component: HrReportsDashboardComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN']} 
      },
      { path: 'hr-settings', 
        component: HrSettingsComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN']} 
      },
      { 
        path: 'login', 
        component: LoginComponent ,
        data: {}
      },
      { 
        path: 'logout', 
        component: LogoutComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN', 'MANAGER', 'USER']}
      },
      { 
        path: 'manager-availability-viewer', 
        component: ManagerAvailabilityViewerComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'MANAGER']}
      },
      { 
        path: 'manager-dashboard', 
        component: ManagerDashboardComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'MANAGER']}
      },
      { 
        path: 'manager-inbox', 
        component: ManagerInboxComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'MANAGER']} 
      },
      // { 
      //   path: 'password-create-new', 
      //   component: PasswordCreateNewComponent,
      //   data: {} 
      // },
      { 
        path: 'user-administration', 
        component: UserAdministrationComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN', 'MANAGER']}
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {allowedRoles: ['SUPER_ADMIN', 'HR_ADMIN']}
      }
    ]
  },
  { 
    path: 'password-reset', 
    component: PasswordResetComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
