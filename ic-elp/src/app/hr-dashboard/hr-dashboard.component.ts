import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  public requestStateData: any;

  constructor() {
  }

  ngOnInit() {
    this.requestStateData = {
      labels: ['Approved', 'Cancelled', 'Awaiting'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56'
              ]
          }]
      };
  }

}
