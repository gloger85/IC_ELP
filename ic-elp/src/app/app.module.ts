import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';

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
import { SharedDetailInfoBarComponent } from './shared-detail-info-bar/shared-detail-info-bar.component';
import { SharedTeamViewerComponent } from './shared-team-viewer/shared-team-viewer.component';
import { SharedDashboardMenuComponent } from './shared-dashboard-menu/shared-dashboard-menu.component';
import { SharedCalendarComponent } from './shared-calendar/shared-calendar.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';

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
    PasswordCreateNewComponent,
    SharedDetailInfoBarComponent,
    SharedTeamViewerComponent,
    SharedDashboardMenuComponent,
    SharedCalendarComponent,
    RequestLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MegaMenuModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    ProgressSpinnerModule,
    CalendarModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
