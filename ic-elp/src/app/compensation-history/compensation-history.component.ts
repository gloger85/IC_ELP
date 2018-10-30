import { Component, OnInit } from '@angular/core';
import { CompensationRequest } from '../domain/compensationRequest';

@Component({
  selector: 'app-compensation-history',
  templateUrl: './compensation-history.component.html',
  styleUrls: ['./compensation-history.component.css']
})
export class CompensationHistoryComponent implements OnInit {

  compensations : CompensationRequest[];
  displayDialog: boolean = false;

  constructor() { }

  ngOnInit() {
    this.compensations = [
      { id: '132', numberOfHours: 4, startDate: '2018-12-03', endDate: '2018-12-03', status: 'Pending' , description: 'DB BackUp'},
      { id: '132', numberOfHours: -4, startDate: '2018-12-03', endDate: '2018-12-03', status: 'Pending' , description: ''},
      { id: '342', numberOfHours: 4, startDate: '2018-10-01', endDate: '2018-10-01', status: 'Approved', description: 'Other description'},
      { id: '112', numberOfHours: -4, startDate: '2018-10-03', endDate: '2018-10-03', status: 'Canceled', description: ''},
      { id: '345', numberOfHours: 4, startDate: '2018-11-15', endDate: '2018-11-15', status: 'Approved', description: 'Urgent INC474637'},
    ];
  }

  showDialog() {
    this.displayDialog = true;
}

}
