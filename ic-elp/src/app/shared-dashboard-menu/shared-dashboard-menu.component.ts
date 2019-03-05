import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-shared-dashboard-menu',
  templateUrl: './shared-dashboard-menu.component.html',
  styleUrls: ['./shared-dashboard-menu.component.css']
})

export class SharedDashboardMenuComponent implements OnInit {

  public mainMenuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
      this.mainMenuItems = [
        {
          label: 'Manager Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/manager-dashboard']
        },
        {
          label: 'Manager Inbox (4)', icon: 'fa fa-fw fa-inbox', routerLink: ['/manager-inbox']
        },
        {
          label: 'Availability Viewer', icon: 'fa fa-fw fa-table', routerLink: ['/manager-availability-viewer']
        },
        {
          label: 'Event log', icon: 'fa fa-fw fa-gears', routerLink: ['/event-log']
        }
    ];
  }
}

