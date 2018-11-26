import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HrAddHolidayComponent } from '../hr-add-holiday/hr-add-holiday.component';

@Component({
  selector: 'app-hr-holiday-management-calendar',
  templateUrl: './hr-holiday-management-calendar.component.html',
  styleUrls: ['./hr-holiday-management-calendar.component.css']
})
export class HrHolidayManagementCalendarComponent implements OnInit {
  @ViewChild(HrAddHolidayComponent)
  private hrAddHoliday: HrAddHolidayComponent;
  compensations: any;
  displayDialog = false;
  holidayName: any;
  rangeDates: Date;
  display = false;

  constructor() {}

  ngOnInit() {
    this.compensations = [
      { name: 'StarWars Day', holidayDate: '2018-05-04'},
      { name: 'Halloween', holidayDate: '2018-10-31'},
      { name: 'Compensation for 11.11', holidayDate: '2018-12-01'},
    ];
  }

  showDialog() {
    this.displayDialog = true;
  }

  showCalendar() {
    this.hrAddHoliday.displayCalendar = true;
  }

  editCompensation() {
    this.hrAddHoliday.displayCalendar = true;
    this.hrAddHoliday.addHolidayForm.controls['holidayName'].setValue('StarWars Day');
    this.hrAddHoliday.addHolidayForm.controls['calendar'].setValue('04/05/2018');
  }
}
