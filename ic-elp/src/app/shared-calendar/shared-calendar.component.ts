import { Component, OnInit } from '@angular/core';

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

    this.invalidDates = [new Date(), new Date('2018-11-01'), new Date('2018-11-11')];
  }

  Confirm() : void {
  }

  CountNumberOfWorkingDays() : number {
    if(!this.rangeDates[1]){
      this.requestedDays = 1;
      return 1;
    } 

    let workDaysCount : number = 0;
    let startDate : Date = this.rangeDates[0];
    let endDate : Date = this.rangeDates[1];
    let date : Date = new Date(startDate);

    while(date <= endDate){
      if(!(date.getDay() in [0,6] || this.IsPublicHoliday(date))) workDaysCount++;
      date.setDate(date.getDate() + 1);
    }

    this.requestedDays = workDaysCount;
    return workDaysCount;
  }

  IsPublicHoliday(date : Date) : boolean{
    
    let holidays : Array<number[]> = [ // [month][day]
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

    let month : number = date.getMonth();
    let day : number = date.getDate();     
    
    if (month >= 3 && month <= 6)
    {
        // Obliczanie Wielkanocy
        let a = date.getFullYear() % 19;
        let b = Math.floor(date.getFullYear() / 100);
        let c = date.getFullYear() % 100;
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

        let wielkanoc = new Date(date.getFullYear(), easterMonth, easterDay);
        let wielkanocnyPoniedzialek = new Date(date.getFullYear(), easterMonth, easterDay+1);
        let zeslanieDuchaSwietego = new Date(date.getFullYear(), easterMonth, easterDay+49);
        let bozeCialo = new Date(date.getFullYear(), easterMonth, easterDay+60);

        holidays.push([wielkanoc.getMonth(), wielkanoc.getDate()]);
        holidays.push([wielkanocnyPoniedzialek.getMonth(), wielkanocnyPoniedzialek.getDate()]);
        holidays.push([zeslanieDuchaSwietego.getMonth(), zeslanieDuchaSwietego.getDate()]);
        holidays.push([bozeCialo.getMonth(), bozeCialo.getDate()]);  
    }

    for(let holiday of holidays)
    {
      if(month == holiday[0] && day == holiday[1]) return true;
    }

    return false;
  }
}
