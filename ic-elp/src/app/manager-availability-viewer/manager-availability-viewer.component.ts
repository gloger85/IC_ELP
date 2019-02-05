import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-availability-viewer',
  templateUrl: './manager-availability-viewer.component.html',
  styleUrls: ['./manager-availability-viewer.component.css']
})
export class ManagerAvailabilityViewerComponent implements OnInit {

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
