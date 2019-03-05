import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-hr-dashboard-menu',
  templateUrl: './hr-dashboard-menu.component.html',
  styleUrls: ['./hr-dashboard-menu.component.css']
})

export class HrDashboardMenuComponent implements OnInit {

  public mainMenuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
      this.mainMenuItems = [
        {
          label: 'HR Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/hr-dashboard']
        },
        {
          label: 'HR Inbox (7)', icon: 'fa fa-fw fa-inbox', routerLink: ['/hr-dashboard']
        },
        {
          label: 'HR Admin', icon: 'fa fa-fw fa-stack-overflow', routerLink: ['/hr-settings']
        },
        {
          label: 'Holiday Planner', icon: 'fa fa-fw fa-calendar', routerLink: ['/hr-holiday-planner']
        },
        {
          label: 'Availability Viewer', icon: 'fa fa-fw fa-table', routerLink: ['/availability-viewer']
        },
        {
          label: 'Reporting', icon: 'fa fa-fw fa-file-excel-o', routerLink: ['/hr-reports-dashboard']
        },
        {
          label: 'Event log', icon: 'fa fa-fw fa-gears', routerLink: ['/hr-event-log']
        }
    ];
  }
}
