import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability-viewer-detailes',
  templateUrl: './availability-viewer-detailes.component.html',
  styles: [`
  .holiday {
      background-color: #1CA979 !important;
      color: #ffffff !important;
      text-align: center;
      width: 80px;
  }

  .sickLeave {
      background-color: #fcbb1c !important;
      color: #ffffff !important;
      text-align: center;
      width: 80px;
       }

  .weekend {
      background-color: #a3ae8e !important;
      color: #ffffff !important;
      text-align: center;
      width: 80px;
       }

  .normal {
      background-color: #ffffff !important;
      text-align: center;
      width: 80px;
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
  date: Date[];
  today = new Date();
  showTab: boolean;
  isWeekend: boolean;
  /* nextMonth = new Date() + 31;
  dateFrom = this.today.getDay() + '-' + this.today.getMonth() + '-' + this.today.getFullYear();
  dateTo = this.today.getDay() + '-' + this.today.getMonth() + 1 + '-' + this.today.getFullYear(); */

  constructor() { }

  ngOnInit() {
    this.showTab = true;
    this.isWeekend = false;
    this.colsNordicks = [{
      /*
      field: 'StudentId',
      header: this.dateFrom
    }, {
      field: 'Dept',
      header: this.dateTo
    }, {
      field: 'PassoutYear',
      header: 'Passout Year'
      */
      field: 'number',
      header: ''
    },
    {
      field: 'nameSurname',
      header: ''
    },
    {
      field: '2019-01-01',
      header: '2019-01-01'
    },
    {
      field: '2019-01-02',
      header: '2019-01-02'
    },
    {
      field: '2019-01-03',
      header: '2019-01-03'
    },
    {
      field: '2019-01-04',
      header: '2019-01-04'
    },
    {
      field: '2019-01-05',
      header: '2019-01-05'
    },
    {
      field: '2019-01-06',
      header: '2019-01-06'
    },
    {
      field: '2019-01-07',
      header: '2019-01-07'
    },
    {
      field: '2019-01-08',
      header: '2019-01-08'
    },
    {
      field: '2019-01-09',
      header: '2019-01-09'
    },
    ];

    this.availabilityCalendarNordicks = [
      {
        number: '1',
        nameSurname: 'Andrzej Apple',
        '2019-01-01': 'SL'
      },
      {
        number: '2',
        nameSurname: 'Greg Don Vasyl',
        '2019-01-02': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Dżołana Amaizing',
        '2019-01-02': 'H'
      },
      {
        number: '4',
        nameSurname: 'Dżanusz Polic'
      },
      {
        number: '5',
        nameSurname: 'Iron MAn',
      }
    ];
    this.colsSA = [{
      field: 'number',
      header: ''
    },
    {
      field: 'nameSurname',
      header: ''
    },
    {
      field: '2019-01-01',
      header: '2019-01-01'
    },
    {
      field: '2019-01-02',
      header: '2019-01-02'
    },
    {
      field: '2019-01-03',
      header: '2019-01-03'
    },
    {
      field: '2019-01-04',
      header: '2019-01-04'
    },
    {
      field: '2019-01-05',
      header: '2019-01-05'
    },
    {
      field: '2019-01-06',
      header: '2019-01-06'
    },
    {
      field: '2019-01-07',
      header: '2019-01-07'
    },
    {
      field: '2019-01-08',
      header: '2019-01-08'
    },
    {
      field: '2019-01-09',
      header: '2019-01-09'
    },
    ];

    this.availabilityCalendarSA = [
      {
        number: '1',
        nameSurname: 'Jaroslaw Psikuta',
        '2019-01-02': 'H'
      },
      {
        number: '2',
        nameSurname: 'Radek Orzel',
        '2019-01-07': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Wielki Szu',
        '2019-01-08': 'H'
      },
      {
        number: '4',
        nameSurname: 'Thor Odinson',
        '2019-01-08': ''
      }
    ];

    this.colsUK = [{
      field: 'number',
      header: ''
    },
    {
      field: 'nameSurname',
      header: ''
    },
    {
      field: '2019-01-01',
      header: '2019-01-01'
    },
    {
      field: '2019-01-02',
      header: '2019-01-02'
    },
    {
      field: '2019-01-03',
      header: '2019-01-03'
    },
    {
      field: '2019-01-04',
      header: '2019-01-04'
    },
    {
      field: '2019-01-05',
      header: '2019-01-05'
    },
    {
      field: '2019-01-06',
      header: '2019-01-06'
    },
    {
      field: '2019-01-07',
      header: '2019-01-07'
    },
    {
      field: '2019-01-08',
      header: '2019-01-08'
    },
    {
      field: '2019-01-09',
      header: '2019-01-09'
    },
    ];

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
        nameSurname: 'Chan Zolo',
        '2019-01-04': 'H'
      }
    ];
  }

  openAll() {
    this.showTab = true;
  }

  closeAll() {
    this.showTab = false;
  }
  checkLeaveType(leaveType, weekDate) {
    let style = 'normal';
    this.checkIfWeekend(weekDate);
    if (this.isWeekend) {
      return style = 'weekend';
    }
    switch (leaveType) {
      case 'H':
        return style = 'holiday';
        break;
      case 'SL':
        return style = 'sickLeave';
        break;
      default:
        return style = 'normal';
    }

  }
  checkIfWeekend(weekDate) {
    let style = null;
    const myDate = new Date(weekDate);
    console.log (weekDate);
    if (myDate.getDay() === 0 || myDate.getDay() === 6) {
      this.isWeekend = true;
      return style = 'weekend';

    } else {
      this.isWeekend = false;
      return style = 'normal';
    } /* saturday is 6th day and sunday 0 day of the week */
  }
}
