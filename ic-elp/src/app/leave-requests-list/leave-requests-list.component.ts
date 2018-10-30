import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../domain/leaveRequest';

@Component({
  selector: 'app-leave-requests-list',
  templateUrl: './leave-requests-list.component.html',
  styleUrls: ['./leave-requests-list.component.css']
})
export class LeaveRequestsListComponent implements OnInit {

  leaves: LeaveRequest[];
  displayDialog: boolean = false;

  cols: any[];

  constructor() { }

  ngOnInit() {
      this.leaves = [
        { id: '132', startDate: '2018-12-03', endDate: '2018-12-03', status: 'Pending'},
        { id: '342', startDate: '2018-10-01', endDate: '2018-10-01', status: 'Approved'},
        { id: '112', startDate: '2018-10-03', endDate: '2018-10-03', status: 'Canceled'},
        { id: '345', startDate: '2018-11-15', endDate: '2018-11-15', status: 'Approved'},
      ];

      this.cols = [
          { field: 'id', header: 'Number' },
          { field: 'startDate', header: 'Start date' },
          { field: 'endDate', header: 'End date' },
          { field: 'status', header: 'Status' }
      ];
  }

  showDialog() {
    this.displayDialog = true;
  }
}
