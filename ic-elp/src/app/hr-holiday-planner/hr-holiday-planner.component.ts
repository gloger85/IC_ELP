import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-holiday-planner',
  templateUrl: './hr-holiday-planner.component.html',
  styleUrls: ['./hr-holiday-planner.component.css']
})
export class HrHolidayPlannerComponent implements OnInit {

  public requestStateData: any;

  constructor() { }

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
