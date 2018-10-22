import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-inbox',
  templateUrl: './manager-inbox.component.html',
  styleUrls: ['./manager-inbox.component.css']
})
export class ManagerInboxComponent implements OnInit {

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
