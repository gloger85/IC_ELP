import { Component, OnInit, Input } from '@angular/core';
import { DashboardAccessService } from '../services/dashboard/dashboard-access.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-dashboards-access',
  templateUrl: './dashboards-access.component.html',
  styleUrls: ['./dashboards-access.component.css']
})
export class DashboardsAccessComponent implements OnInit {

  loggedIn: boolean;
  hasAuthority: number;

  constructor(private daService: DashboardAccessService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentStatus.subscribe(status => {
      this.loggedIn = status;
      this.hasAuthority = this.daService.changeDashboard();
    })
  }

}
