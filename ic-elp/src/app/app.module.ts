
/**
 * PLEASE KEEP IMPORTS IN A CORRECT ORDER, THANK YOU!
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { SharedCalendarComponent } from './shared-calendar/shared-calendar.component';
import { SharedDetailInfoBarComponent } from './shared-detail-info-bar/shared-detail-info-bar.component';
import { SharedDashboardMenuComponent } from './shared-dashboard-menu/shared-dashboard-menu.component';
import { SharedTeamViewerComponent } from './shared-team-viewer/shared-team-viewer.component';
import { SharedMemberLeaveDetailsComponent } from './shared-member-leave-details/shared-member-leave-details.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TreeModule } from 'primeng/tree';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    EventLogComponent,
    HrDashboardComponent,
    LoginComponent,
    LogoutComponent,
    ManagerDashboardComponent,
    PasswordResetComponent,
    PasswordCreateNewComponent,
    RequestLeaveComponent,
    SharedDetailInfoBarComponent,
    SharedTeamViewerComponent,
    SharedDashboardMenuComponent,
    SharedCalendarComponent,
    SharedMemberLeaveDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    MegaMenuModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    PanelModule,
    TreeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
