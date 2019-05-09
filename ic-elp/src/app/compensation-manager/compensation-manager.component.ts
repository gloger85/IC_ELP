import { Component, OnInit } from '@angular/core';
import { CompensationRequest } from '../domain/compensationRequest';

@Component({
  selector: 'app-compensation-manager',
  templateUrl: './compensation-manager.component.html',
  styleUrls: ['./compensation-manager.component.css']
})
export class CompensationManagerComponent implements OnInit {
  public requestStateData: any;
  compensations: CompensationRequest[];
  displayDialog = false;

  constructor() {}

  ngOnInit() {
    this.compensations = [
      {
        id: '132',
        user: 'Andrzej Kowalczyk',
        numberOfHours: 4,
        startDate: new Date('2018-12-03'),
        endDate: '2018-12-03',
        status: 'Pending',
        description: 'DB BackUp'
      },
      {
        id: '132',
        user: 'Jan Wasyl',
        numberOfHours: -4,
        startDate: new Date('2018-12-03'),
        endDate: '2018-12-03',
        status: 'Pending',
        description: ''
      },
      {
        id: '342',
        user: 'Damian Bobner',
        numberOfHours: 4,
        startDate: new Date('2018-10-01'),
        endDate: '2018-10-01',
        status: 'Approved',
        description: 'Other description'
      },
      {
        id: '112',
        user: 'Donatan Krol',
        numberOfHours: -4,
        startDate: new Date('2018-10-03'),
        endDate: '2018-10-03',
        status: 'Canceled',
        description: ''
      },
      {
        id: '345',
        user: 'Dorian Krol',
        numberOfHours: 4,
        startDate: new Date('2018-11-15'),
        endDate: '2018-11-15',
        status: 'Approved',
        description: 'Urgent INC474637'
      }
    ];

    this.requestStateData = {
      labels: ['Approved', 'Cancelled', 'Awaiting'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }
      ]
    };
  }

  showDialog() {
    this.displayDialog = true;
  }
}
