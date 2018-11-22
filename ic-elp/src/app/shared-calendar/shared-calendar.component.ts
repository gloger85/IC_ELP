import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-shared-calendar',
  templateUrl: './shared-calendar.component.html',
  styleUrls: ['./shared-calendar.component.css']
})
export class SharedCalendarComponent implements OnInit {
  rangeDates: Date[];
  invalidDates: Array<Date>;
  en: any;
  pl: any;
  requestedDays : number;
  requestTypes: SelectItem[];

  constructor(
    private location: Location
  ) {}

  ngOnInit() {
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
    this.pl = {
      firstDayOfWeek: 1,
      dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
      dayNamesShort: ['Nie', 'Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob'],
      dayNamesMin: ['Ni', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
      monthNames: [ 'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
                    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień' ],
      monthNamesShort: [ 'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru' ],
      today: 'Dziś',
      clear: 'Wyczyść'

    };

    this.DisablePublicpublicHolidaysInCalendar(new Date().getMonth(), new Date().getFullYear());

    this.requestTypes = [
      {label:'Select request type', value:null},
      {label:'Personal Leave', value:{id:1, name: 'Personal Leave'}},
      {label:'On demand leave', value:{id:2, name: 'On demand leave'}},
      {label:'Occassional leave', value:{id:3, name: 'Occassional leave'}},
      {label:'Excused paid absence', value:{id:4, name: 'Excused paid absence'}},
      {label:'Excused unpaid absence', value:{id:5, name: 'Excused unpaid absence'}},
      {label:'Unpaid leave', value:{id:6, name: 'Unpaid leave'}},
      {label:'Child care', value:{id:7, name: 'Child care'}},
      {label:'Maternity leave', value:{id:8, name: 'Maternity leave'}},
      {label:'Parental leave', value:{id:9, name: 'Parental leave'}},
      {label:'Paternity leave', value:{id:10, name: 'Paternity leave'}},
      {label:'Unpaid childcare leave', value:{id:11, name: 'Unpaid childcare leave'}},
  ];
  }

  CountNumberOfWorkingDays() : number {
    if(!this.rangeDates[1]){
      this.requestedDays = 1;
      return 1;
    } 

    let workingDaysCount : number = 0;
    let startDate : Date = this.rangeDates[0];
    let endDate : Date = this.rangeDates[1];
    let date : Date = new Date(startDate);

    while(date <= endDate){
      if(!(date.getDay() == 0 || date.getDay() == 6 || this.IsPublicHoliday(date))) workingDaysCount++;
      date.setDate(date.getDate() + 1);
    }

    this.requestedDays = workingDaysCount;
    return workingDaysCount;
  }

  DisablePublicpublicHolidaysInCalendar(month : number, year : number) : void{
    this.invalidDates = [];

    for(let publicHoliday of this.GetPublicHolidaysByYear(year)){
      this.invalidDates.push(new Date(year, publicHoliday[0], publicHoliday[1]));
    }

    if(month >= 11){ // Kalendarz wyswietlany na przelomie roku
      for(let publicHoliday of this.GetPublicHolidaysByYear(year + 1)){
        this.invalidDates.push(new Date(year + 1, publicHoliday[0], publicHoliday[1]));
      }
    }
  }

  GetPublicHolidaysByYear(year : number) : Array<number[]>{
    
    let publicHolidays : Array<number[]> = [ // [month][day]
      [0,1],  // Nowy Rok
      [0,6],  // Trzech Króli
      [4,1],  // Święto Pracy
      [4,3],  // Święto Konstytucji 3 Maja
      [7,15], // Wniebowzięcie Najświętszej Maryi Panny
      [10,1], // Wszystkich Świętych
      [10,11],// Święto Niepodległości
      [11,25],// Boże Narodzenie
      [11,26] // Boże Narodzenie
    ];
  
    // Obliczanie Wielkanocy
    let a = year % 19;
    let b = Math.floor(year / 100);
    let c = year % 100;
    let d = Math.floor(b / 4);
    let e = b % 4;
    let f = Math.floor((b + 8) / 25);
    let g = Math.floor((b - f + 1) / 3);
    let h = (19 * a + b - d - g + 15) % 30;
    let i = Math.floor(c / 4);
    let k = c % 4;
    let l= (32+2*e+2*i-h-k)%7;
    let m = Math.floor((a+11*h+22*l)/451);
    let p = (h + l - 7 * m + 114) % 31;
    let easterDay = p + 1;
    let easterMonth = Math.floor((h + l - 7 * m + 114) / 31);

    easterMonth--; // W JavaScript miesiące zaczynają się od 0 

    let wielkanoc = new Date(year, easterMonth, easterDay);
    let wielkanocnyPoniedzialek = new Date(year, easterMonth, easterDay+1);
    let zeslanieDuchaSwietego = new Date(year, easterMonth, easterDay+49);
    let bozeCialo = new Date(year, easterMonth, easterDay+60);

    publicHolidays.push([wielkanoc.getMonth(), wielkanoc.getDate()]);
    publicHolidays.push([wielkanocnyPoniedzialek.getMonth(), wielkanocnyPoniedzialek.getDate()]);
    publicHolidays.push([zeslanieDuchaSwietego.getMonth(), zeslanieDuchaSwietego.getDate()]);
    publicHolidays.push([bozeCialo.getMonth(), bozeCialo.getDate()]);  

    return publicHolidays;
  }

  GoBack() : void {
    this.location.back();
  }

  IsPublicHoliday(date : Date) : boolean{
    
    let publicHolidays : Array<number[]> = this.GetPublicHolidaysByYear(date.getFullYear());

    let month : number = date.getMonth();
    let day : number = date.getDate();     

    for(let publicHoliday of publicHolidays)
    {
      if(month == publicHoliday[0] && day == publicHoliday[1]) return true;
    }

    return false;
  }

  SendRequest() : void {
  }
}
