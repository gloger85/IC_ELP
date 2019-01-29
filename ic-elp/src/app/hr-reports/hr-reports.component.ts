import { Component, OnInit } from '@angular/core';

interface Team {
  name: string;
}

@Component({
  selector: 'app-hr-reports',
  templateUrl: './hr-reports.component.html',
  styleUrls: ['./hr-reports.component.css']
})
export class HrReportsComponent implements OnInit {

  dateFrom: Date;
  dateTo: Date;
  invalidDates: Array<Date>;
  teams: Team[];
  selectedTeam: Team;
  showProgressSpinner: boolean;
  hideButton: boolean;

  constructor() {
    this.teams = [
      {name: '--All--'},
      {name: 'Germany'},
      {name: 'AON360'},
      {name: 'Nordics'},
      {name: 'Lux'}
  ];
  this.showProgressSpinner = false;
  this.hideButton = false;
   }

  ngOnInit() {
    const today = new Date();
    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  SendRequest(): void {
    this.showProgressSpinner = true;
    this.hideButton = true;
  }
}
