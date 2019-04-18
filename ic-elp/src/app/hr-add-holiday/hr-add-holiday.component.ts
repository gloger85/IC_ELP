import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HolidayService } from '../services/holiday/holiday.service';
import { Holiday } from '../domain/holiday/holiday';
import { DataService } from '../services/data/data.service';
import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-hr-add-holiday',
  templateUrl: './hr-add-holiday.component.html',
  styleUrls: ['./hr-add-holiday.component.css']
})
export class HrAddHolidayComponent implements OnInit {
  displayCalendar =  false;
  date: Date;
  requestDate: Date;
  holidayName: any;
  addHolidayForm: FormGroup;
  holiday: Holiday;
  buttonState: string;
  idTaken: number;

  constructor(
    private fb: FormBuilder,
    private holidayService: HolidayService,
    private dataService: DataService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.addHolidayForm = this.fb.group({
      requestDate: [''],
      holidayName: [''],
      calendar: this.date
    });

    this.dataService.currentButtonState.subscribe(status => {
      this.buttonState = status;
      console.log(this.buttonState);
      
    });
    this.dataService.currentIdTaken.subscribe(id => {
      this.idTaken = id;
      console.log(this.idTaken);
    })
  }
  
  
  SendRequest(): void {
    let dateToString = this.addHolidayForm.controls['calendar'].value;
    let abstractToString = this.addHolidayForm.controls['holidayName'].value;
    this.displayCalendar = false;
    
    this.holiday = new Holiday(abstractToString, dateToString);

    this.holidayService.addHolidays(this.holiday).subscribe( data => {
      console.log('data send');
    }, 
    error => {
      console.log('data  was not sent');
    })
  }
// TODO: automatically update the body of the holiday on edit button pressed
  editHoliday(id: number) {
    let holiday: Holiday;
    this.holidayService.getHolidayById(id).subscribe(data => {
      holiday = data;
      holiday.name = this.addHolidayForm.controls['holidayName'].value;
      this.holidayService.updateHoliday(id, holiday).subscribe(() => {
        console.log('Data sent');
      },
      error => {   
        console.log(holiday);
      });
    });
    console.log(id);
    
    
    this.displayCalendar = false;
  }
}
