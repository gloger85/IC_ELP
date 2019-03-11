import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedCalendarComponent } from '../shared-calendar/shared-calendar.component';

@Component({
  selector: 'app-shared-member-leave-details',
  templateUrl: './shared-member-leave-details.component.html',
  styleUrls: ['./shared-member-leave-details.component.css']
})
export class SharedMemberLeaveDetailsComponent implements OnInit {

  @ViewChild(SharedCalendarComponent)
  public sharedCalendar: SharedCalendarComponent;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  showDialog() {
    this.sharedCalendar.display = true;
  }

}
