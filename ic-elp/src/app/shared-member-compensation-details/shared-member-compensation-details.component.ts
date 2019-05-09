import { CalendarService } from './../services/calendar/calendar.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CompensationRequest } from '../domain/compensationRequest';
import { CompensationService } from '../services/compensation/compensation.service';
import { DateService } from '../services/date/date.service';

@Component({
  selector: 'app-shared-member-compensation-details',
  templateUrl: './shared-member-compensation-details.component.html',
  styleUrls: ['./shared-member-compensation-details.component.css']
})
export class SharedMemberCompensationDetailsComponent implements OnInit {
  display = false;
  noOfHoursSelectItems: SelectItem[];
  noOfHoursTooltip: string;

  invalidDates: Array<Date>;
  invalidDays: number[];
  compensationDate: Date;
  selectedNumberOfHours: number;
  compensationDescription: string;

  constructor(private _calendarService: CalendarService, 
      private compensationService: CompensationService,
      private dateService: DateService) {}

  ngOnInit() {
    this.DisablePublicpublicHolidaysInCalendar(
      new Date().getMonth(),
      new Date().getFullYear()
    );
  }

  DisablePublicpublicHolidaysInCalendar(month: number, year: number): void {
    this.invalidDates = [];
    this.invalidDays = [];

    this.invalidDays = [0, 6];
    this.invalidDates.push.apply(
      this.invalidDates,
      this._calendarService.GetPublicHolidaysByYear(year)
    );
  }

  showDialog(requestType) {
    this.updateFields(requestType);
    this.display = true;
  }

  updateFields(requestType: string) {
    if (requestType === 'compensation') {
      this.noOfHoursSelectItems = [
        {label: 'Select number of hours', value: null},
        {label: '4', value: 4 },
        {label: '8', value: 8 },
      ];
      this.noOfHoursTooltip = 'Select 4 or 8 value to request compensation hours';
    } else if (requestType === 'overtime') {
      this.noOfHoursSelectItems = [
        {label: 'Select number of hours', value: null},
        {label: '1', value: 1 },
        {label: '2', value: 2 },
        {label: '3', value: 3 },
        {label: '4', value: 4 },
        {label: '5', value: 5 },
        {label: '6', value: 6 },
        {label: '7', value: 7 },
        {label: '8', value: 8 },
      ];
      this.noOfHoursTooltip = 'Select one of 1-8 values to reqeust overtime hours';
    }
  }

  saveCompensations() {
    let transformedDate: Date = new Date(Date.UTC(this.compensationDate.getFullYear()
                                                      ,this.compensationDate.getMonth()
                                                      ,this.compensationDate.getDate()));
    let requestValue: CompensationRequest = new CompensationRequest(transformedDate, this.selectedNumberOfHours, this.compensationDescription);
    this.compensationService.addCompensation(requestValue).subscribe( data => {
      
    },
    err => {
      console.log("Could not send the data!!!");
    })
    
  }
}
