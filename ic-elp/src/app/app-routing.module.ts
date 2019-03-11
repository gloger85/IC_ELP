import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AuthGuard } from './services/route-guards/auth-guard.guard';

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
        data: {}
      },
      { 
        path: 'dashboard', 
        component: DashboardComponent, 
        data: { allowedRoles: ['ADMIN']}
      },
      { 
        path: 'event-log', 
        component: EventLogComponent ,
        data: {}
      },
      { 
        path: 'hr-event-log', 
        component: HrEventLogComponent,
        data: {} 
      },
      { 
        path: 'hr-dashboard', 
        component: HrDashboardComponent,
        data: {} 
      },
      { 
        path: 'hr-holiday-planner', 
        component: HrHolidayPlannerComponent,
        data: {}
      },
      { 
        path: 'hr-reports-dashboard', 
        component: HrReportsDashboardComponent,
        data: {} 
      },
      { path: 'hr-settings', 
        component: HrSettingsComponent,
        data: {} 
      },
      { 
        path: 'login', 
        component: LoginComponent ,
        data: {}
      },
      { 
        path: 'logout', 
        component: LogoutComponent,
        data: {} 
      },
      { 
        path: 'manager-availability-viewer', 
        component: ManagerAvailabilityViewerComponent,
        data: {} 
      },
      { 
        path: 'manager-dashboard', 
        component: ManagerDashboardComponent,
        data: {}
      },
      { 
        path: 'manager-inbox', 
        component: ManagerInboxComponent,
        data: {} 
      },
      { 
        path: 'password-reset', 
        component: PasswordResetComponent,
        data: {} 
      },
      { 
        path: 'password-create-new', 
        component: PasswordCreateNewComponent,
        data: {} 
      },
      { 
        path: 'user-administration', 
        component: UserAdministrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
