import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hr-add-holiday',
  templateUrl: './hr-add-holiday.component.html',
  styleUrls: ['./hr-add-holiday.component.css']
})
export class HrAddHolidayComponent implements OnInit {
  displayCalendar =  false;
  date: Date;
  holidayName: any;
  addHolidayForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addHolidayForm = this.fb.group({
      requestDate: [''],
      holidayName: [''],
      calendar: this.date
    });
  }
  
  
  SendRequest(): void {
    console.log(this.addHolidayForm.controls.calendar.value);
    console.log(this.addHolidayForm.controls.holidayName.value);
   }
}
