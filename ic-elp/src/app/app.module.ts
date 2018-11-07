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
import { CompensationHistoryComponent } from './compensation-history/compensation-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrDashboardMenuComponent } from './hr-dashboard-menu/hr-dashboard-menu.component';
import { HrDetailInfoBarComponent } from './hr-detail-info-bar/hr-detail-info-bar.component';
import { HrSettingsComponent } from './hr-settings/hr-settings.component';
import { HrViewerComponent } from './hr-viewer/hr-viewer.component';
import { LeaveRequestsListComponent } from './leave-requests-list/leave-requests-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerInboxComponent } from './manager-inbox/manager-inbox.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { SharedCalendarComponent } from './shared-calendar/shared-calendar.component';
import { SharedDetailInfoBarComponent } from './shared-detail-info-bar/shared-detail-info-bar.component';
import { SharedDashboardMenuComponent } from './shared-dashboard-menu/shared-dashboard-menu.component';
import { SharedEventViewerComponent } from './shared-event-viewer/shared-event-viewer.component';
import { SharedMemberCompensationDetailsComponent } from './shared-member-compensation-details/shared-member-compensation-details.component';
import { SharedMemberLeaveDetailsComponent } from './shared-member-leave-details/shared-member-leave-details.component';
import { SharedTeamViewerComponent } from './shared-team-viewer/shared-team-viewer.component';
import { TreeTestComponent } from './tree-test/tree-test.component';
import { UserAdministrationComponent } from './user-administration/user-administration.component';
import { UserListComponent } from './user-list/user-list.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataTableModule } from 'primeng/datatable';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { HrHolidayPlannerComponent } from './hr-holiday-planner/hr-holiday-planner.component';
import { HrHolidayPlannerCalendarComponent } from './hr-holiday-planner-calendar/hr-holiday-planner-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompensationHistoryComponent,
    DashboardComponent,
    EventLogComponent,
    HrDashboardComponent,
    HrDashboardMenuComponent,
    HrDetailInfoBarComponent,
    HrSettingsComponent,
    HrViewerComponent,
    LeaveRequestsListComponent,
    LoginComponent,
    LogoutComponent,
    ManagerDashboardComponent,
    ManagerInboxComponent,
    PasswordResetComponent,
    PasswordCreateNewComponent,
    RequestLeaveComponent,
    SharedCalendarComponent,
    SharedDashboardMenuComponent,
    SharedDetailInfoBarComponent,
    SharedEventViewerComponent,
    SharedMemberCompensationDetailsComponent,
    SharedMemberLeaveDetailsComponent,
    SharedTeamViewerComponent,
    TreeTestComponent,
    UserAdministrationComponent,
    UserListComponent,
    HrHolidayPlannerComponent,
    HrHolidayPlannerCalendarComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ChartModule,
    ConfirmDialogModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MegaMenuModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ProgressSpinnerModule,
    TableModule,
    TabViewModule,
    TreeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
