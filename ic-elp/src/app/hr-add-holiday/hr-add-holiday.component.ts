import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hr-add-holiday',
  templateUrl: './hr-add-holiday.component.html',
  styleUrls: ['./hr-add-holiday.component.css']
})
export class HrAddHolidayComponent implements OnInit {
  displayCalendar =  false;
  rangeDates: Date;
  invalidDates: Array<Date>;
  addedDays: number;
  requestTypes: SelectItem[];
  en: any;
  holidayName: any;
  addHolidayForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addHolidayForm = this.fb.group({
      requestDate: [''],
      holidayName: [''],
      calendar: this.rangeDates
    });
    this.en = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December' ],
      monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
      today: 'Today',
      clear: 'Clear'
    };
    this.DisablePublicpublicHolidaysInCalendar(new Date().getMonth(), new Date().getFullYear());
  }
  CountNumberOfWorkingDays(): number {
    if (!this.rangeDates) {
      this.addedDays = 1;
      return 1;
    }

    let workingDaysCount = 0;
    const holidayDate: Date = this.rangeDates;
    const date: Date = new Date(holidayDate);

    while (date <= holidayDate) {
      if (!(date.getDay() === 0 || date.getDay() === 6 || this.IsPublicHoliday(date))) {
        workingDaysCount++;
      }
      date.setDate(date.getDate() + 1);
    }

    this.addedDays = workingDaysCount;
    return workingDaysCount;
  }

  DisablePublicpublicHolidaysInCalendar(month: number, year: number): void {
    this.invalidDates = [];

    for (const publicHoliday of this.GetPublicHolidaysByYear(year)) {
      this.invalidDates.push(new Date(year, publicHoliday[0], publicHoliday[1]));
    }

    if (month >= 11) { // Kalendarz wyswietlany na przelomie roku
      for (const publicHoliday of this.GetPublicHolidaysByYear(year + 1)) {
        this.invalidDates.push(new Date(year + 1, publicHoliday[0], publicHoliday[1]));
      }
    }
  }

  GetPublicHolidaysByYear(year: number): Array<number[]> {

    const publicHolidays: Array<number[]> = [ // [month][day]
      [0, 1],  // Nowy Rok
      [0, 6],  // Trzech Króli
      [4, 1],  // Święto Pracy
      [4, 3],  // Święto Konstytucji 3 Maja
      [7, 15], // Wniebowzięcie Najświętszej Maryi Panny
      [10, 1], // Wszystkich Świętych
      [10, 11], // Święto Niepodległości
      [11, 25], // Boże Narodzenie
      [11, 26]  // Boże Narodzenie
    ];

    // Obliczanie Wielkanocy
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const p = (h + l - 7 * m + 114) % 31;
    const easterDay = p + 1;
    let easterMonth = Math.floor((h + l - 7 * m + 114) / 31);

    easterMonth--; // W JavaScript miesiące zaczynają się od 0

    const wielkanoc = new Date(year, easterMonth, easterDay);
    const wielkanocnyPoniedzialek = new Date(year, easterMonth, easterDay + 1);
    const zeslanieDuchaSwietego = new Date(year, easterMonth, easterDay + 49);
    const bozeCialo = new Date(year, easterMonth, easterDay + 60);

    publicHolidays.push([wielkanoc.getMonth(), wielkanoc.getDate()]);
    publicHolidays.push([wielkanocnyPoniedzialek.getMonth(), wielkanocnyPoniedzialek.getDate()]);
    publicHolidays.push([zeslanieDuchaSwietego.getMonth(), zeslanieDuchaSwietego.getDate()]);
    publicHolidays.push([bozeCialo.getMonth(), bozeCialo.getDate()]);

    return publicHolidays;
  }
  IsPublicHoliday(date: Date): boolean {

    const publicHolidays: Array<number[]> = this.GetPublicHolidaysByYear(date.getFullYear());

    const month: number = date.getMonth();
    const day: number = date.getDate();

    for (const publicHoliday of publicHolidays) {
      if (month === publicHoliday[0] && day === publicHoliday[1]) {
        return true;
      }
    }

    return false;
  }
  SendRequest(): void {
    console.log(this.addHolidayForm.controls.calendar.value);
    console.log(this.addHolidayForm.controls.holidayName.value);
   }
}
