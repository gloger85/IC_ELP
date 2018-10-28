import { Component, OnInit } from '@angular/core';
import { Event } from '../domain/event';
import { EventService } from '../services/EventService.service';

@Component({
  selector: 'app-shared-event-viewer',
  templateUrl: './shared-event-viewer.component.html',
  styleUrls: ['./shared-event-viewer.component.css'],
})
export class SharedEventViewerComponent implements OnInit {

  events: Event[];


  constructor(private eventService: EventService) { }

  ngOnInit() {
      this.eventService.getEvent().then(events => this.events = events);
  }
}
