import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-hr-dashboard-menu',
  templateUrl: './hr-dashboard-menu.component.html',
  styleUrls: ['./hr-dashboard-menu.component.css']
})

export class HrDashboardMenuComponent implements OnInit {

  private mainMenuItems: MenuItem[];

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
          label: 'Holiday Planner', icon: 'fa fa-fw fa-calendar', routerLink: ['/hr-holiday-planner']
        }
    ];
  }
}
