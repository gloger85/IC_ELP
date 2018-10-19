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
        date: new Date(2017, 10, 10, 13, 10, 15),
        user: 'Batman bin Superman',
        typeOfAction: 'ADD',
        change: 'Added new holiday request'
      },
      {
        id: 2,
        date: new Date(2017, 10, 10, 13, 10, 15),
        user: 'Iron Man',
        typeOfAction: 'UPDATE',
        change: 'Holiday request has been updated'
      },
      {
        id: 3,
        date: new Date(2017, 10, 10, 13, 10, 15),
        user: 'Luke Skywalker',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      },
      {
        id: 4,
        date: new Date(2017, 10, 10, 13, 10, 15),
        user: 'Luke Skywalker',
        typeOfAction: 'APPROVAL',
        change: 'Holiday request has been approved'
      }
    ];
  }
}

