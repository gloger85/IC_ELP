import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-event-viewer',
  templateUrl: './shared-event-viewer.component.html',
  styleUrls: ['./shared-event-viewer.component.css']
})
export class SharedEventViewerComponent implements OnInit {
  events: {
    id: number,
    date: Date,
    user: string,
    typeOfAction: string,
    change: string

  }[];

  ngOnInit() {
    this.events = [
      {
        id: 1,
        date: new Date('2018-10-10'),
        user: 'Batman bin Superman',
        typeOfAction: 'ADD',
        change: 'Added new holiday request'
      },
      {
        id: 2,
        date: new Date('2018-10-09'),
        user: 'Iron Man',
        typeOfAction: 'UPDATE',
        change: 'Holiday request has been updated'
      },
      {
        id: 3,
        date: new Date('2018-10-08'),
        user: 'Luke Skywalker',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 4,
        date: new Date('2018-10-07'),
        user: 'Luke Skywalker',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 5,
        date: new Date('2018-10-06'),
        user: 'Darth Vader',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 6,
        date: new Date('2018-10-05'),
        user: 'Yoda',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 7,
        date: new Date('2018-10-04'),
        user: 'Luke Skywalker',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 8,
        date: new Date('2018-10-03'),
        user: 'Black Widow',
        typeOfAction: 'UPDATE',
        change: 'Holiday request has been UPDATED'
      },
      {
        id: 9,
        date: new Date('2018-10-02'),
        user: 'Hulk',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 10,
        date: new Date(2017, 10, 10, 13, 10, 15),
        user: 'Thor',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      }
    ];
  }
}

