import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-availability-viewer-detailes',
  templateUrl: './availability-viewer-detailes.component.html',
  styles: [`
  .holiday {
      background-color: #1CA979 !important;
      color: #ffffff !important;
      text-align: center;
      font-size: '12px';
    }
  .sickLeave {
      background-color: #fcbb1c !important;
      color: #ffffff !important;
      text-align: center;
      font-size: '12px';
    }

  .weekend {
      background-color: #a3ae8e !important;
      color: #ffffff !important;
      text-align: center;
      font-size: '12px';
    }

  .normal {
      background-color: #ffffff !important;
      text-align: center;
      font-size: '12px';
    }

  .emptyTh {
      text-align: left;
      width: 120px;
      font-size: '8px';
    }
`]
})
export class AvailabilityViewerDetailesComponent implements OnInit {

  availabilityCalendarNordicks: any[];
  colsNordicks: any[];
  availabilityCalendarSA: any[];
  colsSA: any[];
  availabilityCalendarUK: any[];
  colsUK: any[];
  startDate = new Date();
  dateFrom = new Date();
  dateTo = new Date();
  showTab: boolean;
  isWeekend: boolean;
  temp = new Object();

  constructor(public datepipe: DatePipe, private location: Location) { }

  ngOnInit() {
    this.showTab = true;
    this.isWeekend = false;
    this.dateFrom = new Date(this.dateFrom.getFullYear(), this.dateFrom.getMonth(), 1);
    this.dateTo = new Date(this.dateFrom.getFullYear(), this.dateFrom.getMonth(), this.dateFrom.getDate() + 30);

    console.log('from: ' + this.dateFrom);
    console.log('to: ' + this.dateTo);

    this.colsNordicks = [{
      field: 'nameSurname',
      header: ''
    }];

    this.availabilityCalendarNordicks = [
      {
        nameSurname: 'Andrzej Apple',
        '2019-02-14': 'SL',
        '2019-02-15': 'SL'
      },
      {
        nameSurname: 'Greg Don Vasyl',
        '2019-02-12': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Dżołana Amaizing',
        '2019-02-18': 'H'
      },
      {
        number: '4',
        nameSurname: 'Dżanusz Polic',
        '2019-02-12': 'H',
        '2019-02-13': 'H'
      },
      {
        number: '5',
        nameSurname: 'Iron MAn',
      }
    ];
    this.colsSA = [{
      field: 'nameSurname',
      header: ''
    }];

    this.availabilityCalendarSA = [
      {
        number: '1',
        nameSurname: 'Jaroslaw Psikuta',
        '2019-02-02': 'H'
      },
      {
        number: '2',
        nameSurname: 'Radek Orzel',
        '2019-02-07': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Wielki Szu',
        '2019-02-08': 'H'
      },
      {
        number: '4',
        nameSurname: 'Thor Odinson',
        '2019-02-08': ''
      }
    ];

    this.colsUK = [{
      field: 'nameSurname',
      header: ''
    }];

    this.availabilityCalendarUK = [
      {
        number: '1',
        nameSurname: 'Gartosz Branda',
        '2019-01-04': 'H'
      },
      {
        number: '2',
        nameSurname: 'Marcin Pyak',
        '2019-01-01': 'H',
        '2019-01-02': 'H'
      },
      {
        number: '3',
        nameSurname: 'Andrze GŁogier',
        '2019-01-02': 'SL',
        '2019-01-03': 'SL'
      },
      {
        number: '4',
        nameSurname: 'Lord Vater',
        '2019-01-04': 'H'
      },
      {
        number: '5',
        nameSurname: 'Yoda',
        '2019-01-03': 'H'
      },
      {
        number: '6',
        nameSurname: 'Chan Ziolo',
        '2019-01-04': 'H'
      }
    ];

    for (const q = this.dateFrom; q < this.dateTo; q.setDate(q.getDate() + 1)) {
      this.colsNordicks.push({ field: this.datepipe.transform(q, 'yyyy-MM-dd'), header: this.datepipe.transform(q, 'yyyy-MM-dd') });
      this.colsSA.push({ field: this.datepipe.transform(q, 'yyyy-MM-dd'), header: this.datepipe.transform(q, 'yyyy-MM-dd') });
      this.colsUK.push({ field: this.datepipe.transform(q, 'yyyy-MM-dd'), header: this.datepipe.transform(q, 'yyyy-MM-dd') });
    }
  }

  openAll() {
    this.showTab = true;
  }

  closeAll() {
    this.showTab = false;
  }

  checkColumnType(leaveType, weekDate) {
    let style = 'normal';
    this.checkIfWeekend(weekDate);

    switch (leaveType) {
      case 'H':
        style = 'holiday';
        break;
      case 'SL':
        style = 'sickLeave';
        break;
      default:
        style = 'normal';
    }
    if (this.isWeekend) {
      style = 'weekend';
    }
    return style;
  }

  checkIfWeekend(weekDate) {
    let style = null;
    const myDate = new Date(weekDate);

    if (myDate.getDay() === 0 || myDate.getDay() === 6) {
      this.isWeekend = true;
      style = 'weekend';
    } else {
      this.isWeekend = false;
      style = 'normal';
    } /* saturday is 6th day and sunday 0 day of the week */
    if (!weekDate) {
      style = 'emptyTh';
    }
    return style;
  }

  prevWeek() {
    alert('TODO: logika do pokazywania miesiaca wczesniej'); /*
    this.dateFrom = new Date(this.dateFrom.getFullYear(), this.dateFrom.getMonth(), this.dateFrom.getDate() - 7);
    this.dateTo = new Date(this.dateTo.getFullYear(), this.dateTo.getMonth(), this.dateTo.getDate() - 7);
    /* while (this.colsNordicks.length > 2) {
      this.colsNordicks.pop();
  }
    for (const q = this.dateFrom; q < this.dateTo; q.setDate(q.getDate() + 1)) {
      this.colsNordicks.push({ field: this.datepipe.transform(q, 'yyyy-MM-dd'), header: this.datepipe.transform(q, 'yyyy-MM-dd') });
    }*/
  }

  nextWeek() {
    alert('TODO: logika do pokazywania miesiaca pozniej');
    /*

        this.dateFrom = new Date(this.dateFrom.getFullYear(), this.dateFrom.getMonth(), this.dateFrom.getDate() + 7);
        this.dateTo = new Date(this.dateTo.getFullYear(), this.dateTo.getMonth(), this.dateTo.getDate() + 7);
        while (this.colsNordicks.length > 2) {
          this.colsNordicks.pop();
        }
        for (const q = this.dateFrom; q < this.dateTo; q.setDate(q.getDate() + 1)) {
          this.colsNordicks.push({ field: this.datepipe.transform(q, 'yyyy-MM-dd'), header: this.datepipe.transform(q, 'yyyy-MM-dd') });
        }
        */
  }
  GoBack(): void {
    this.location.back();
  }
}
