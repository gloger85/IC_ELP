import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(private location: Location) {
    this.teams = [
      {name: '--All--'},
      {name: 'Germany'},
      {name: 'AON360'},
      {name: 'Nordics'},
      {name: 'Lux'}
  ];
  this.showProgressSpinner = false;
   }

  ngOnInit() {
    const today = new Date();
    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  SendRequest(): void {
    this.showProgressSpinner = true;
  }

  GoBack(): void {
    this.location.back();
  }
}
