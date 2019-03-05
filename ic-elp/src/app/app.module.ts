/**
 * PLEASE KEEP IMPORTS IN A CORRECT ORDER, THANK YOU!
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { AvailabilityViewerComponent } from './availability-viewer/availability-viewer.component';
import { AvailabilityViewerDetailesComponent } from './availability-viewer-detailes/availability-viewer-detailes.component';
import { CompensationHistoryComponent } from './compensation-history/compensation-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { HrAddHolidayComponent } from './hr-add-holiday/hr-add-holiday.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrDashboardMenuComponent } from './hr-dashboard-menu/hr-dashboard-menu.component';
import { HrDetailInfoBarComponent } from './hr-detail-info-bar/hr-detail-info-bar.component';
import { HrEventLogComponent } from './hr-event-log/hr-event-log.component';
import { HrHolidayPlannerCalendarComponent } from './hr-holiday-planner-calendar/hr-holiday-planner-calendar.component';
import { HrHolidayManagementCalendarComponent } from './hr-holiday-management-calendar/hr-holiday-management-calendar.component';
import { HrHolidayPlannerComponent } from './hr-holiday-planner/hr-holiday-planner.component';
import { HrReportsComponent } from './hr-reports/hr-reports.component';
import { HrReportsDashboardComponent } from './hr-reports-dashboard/hr-reports-dashboard.component';
import { HrSettingsComponent } from './hr-settings/hr-settings.component';
import { HrViewerComponent } from './hr-viewer/hr-viewer.component';
import { LeaveRequestsListComponent } from './leave-requests-list/leave-requests-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerAvailabilityViewerComponent } from './manager-availability-viewer/manager-availability-viewer.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerInboxComponent } from './manager-inbox/manager-inbox.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordCreateNewComponent } from './password-create-new/password-create-new.component';
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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataTableModule } from 'primeng/datatable';
import { DatePipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AvailabilityViewerComponent,
    AvailabilityViewerDetailesComponent,
    CompensationHistoryComponent,
    DashboardComponent,
    EventLogComponent,
    HrAddHolidayComponent,
    HrDashboardComponent,
    HrDashboardMenuComponent,
    HrDetailInfoBarComponent,
    HrEventLogComponent,
    HrHolidayPlannerCalendarComponent,
    HrHolidayManagementCalendarComponent,
    HrHolidayPlannerComponent,
    HrReportsComponent,
    HrReportsDashboardComponent,
    HrSettingsComponent,
    HrViewerComponent,
    LeaveRequestsListComponent,
    LoginComponent,
    LogoutComponent,
    ManagerDashboardComponent,
    ManagerInboxComponent,
    PasswordResetComponent,
    PasswordCreateNewComponent,
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
    ManagerAvailabilityViewerComponent
  ],
  imports: [
    AccordionModule,
    AutoCompleteModule,
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
    MultiSelectModule,
    PanelModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    SliderModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    TreeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
