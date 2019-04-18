import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HrAddHolidayComponent } from '../hr-add-holiday/hr-add-holiday.component';
import { Holiday } from '../domain/holiday/holiday';
import { HolidayService } from '../services/holiday/holiday.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-hr-holiday-management-calendar',
  templateUrl: './hr-holiday-management-calendar.component.html',
  styleUrls: ['./hr-holiday-management-calendar.component.css']
})
export class HrHolidayManagementCalendarComponent implements OnInit {
  @ViewChild(HrAddHolidayComponent)
  private hrAddHoliday: HrAddHolidayComponent;
  holidays: Holiday[];
  displayDialog = false;
  holidayName: any;
  rangeDates: Date;
  display = false;
  buttonState: string;
  idTaken: number;

  constructor(private holidayService: HolidayService, private dataService: DataService) {}

  ngOnInit() {

    this.holidayService.getRefreshNeeded
        .subscribe(() => {
          this.getAllHolidays();
        });
    this.getAllHolidays();
    this.dataService.currentButtonState.subscribe(status => {
      this.buttonState = status;
    });

    this.dataService.currentIdTaken.subscribe( id => {
      this.idTaken = id;
    });
  }

  showDialog() {
    this.displayDialog = true;
  }

  showCalendar() {
    this.hrAddHoliday.displayCalendar = true;
    this.buttonState = 'Add Clicked';
    this.newStatus(this.buttonState);
  }

  editCompensation(id: number) {
    this.hrAddHoliday.displayCalendar = true;
    this.buttonState = 'Edit Clicked';
    this.newStatus(this.buttonState);
    this.newIdStatus(id);    
  }

  deleteHoliday(id: number) {
    this.displayDialog = false;
    this.holidayService.removeHoliday(id).subscribe(() => {
      console.log("Entry deleted");
    });
  }

  private getAllHolidays() {
    this.holidayService.getAllHolidays().subscribe( data => {
      this.holidays = data;
    });
  }

  private newStatus(value: string) {
    this.dataService.changeState(value);
  }
  private newIdStatus(id: number) {
    this.dataService.notifyId(id);
  }
}
