import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability-viewer-detailes',
  templateUrl: './availability-viewer-detailes.component.html',
  styleUrls: ['./availability-viewer-detailes.component.css']
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
  /* nextMonth = new Date() + 31;
  dateFrom = this.today.getDay() + '-' + this.today.getMonth() + '-' + this.today.getFullYear();
  dateTo = this.today.getDay() + '-' + this.today.getMonth() + 1 + '-' + this.today.getFullYear(); */

  constructor() { }

  ngOnInit() {
    this.showTab = true;
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
      field: '01-Jan',
      header: '01-Jan'
    },
    {
      field: '02-Jan',
      header: '02-Jan'
    },
    {
      field: '03-Jan',
      header: '03-Jan'
    },
    {
      field: '04-Jan',
      header: '04-Jan'
    },
    {
      field: '05-Jan',
      header: '05-Jan'
    },
    {
      field: '06-Jan',
      header: '06-Jan'
    },
    {
      field: '07-Jan',
      header: '07-Jan'
    },
    {
      field: '08-Jan',
      header: '08-Jan'
    },
    {
      field: '09-Jan',
      header: '09-Jan'
    },
    ];

    this.availabilityCalendarNordicks = [
      {
        number: '1',
        nameSurname: 'Andrzej Apple',
        '01-Jan': 'SL'
      },
      {
        number: '2',
        nameSurname: 'Greg Don Vasyl',
        '02-Jan': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Dżołana Amaizing',
        '02-Jan': 'H'
      },
      {
        number: '4',
        nameSurname: 'Dżanusz Policjant'
      },
      {
        number: '5',
        nameSurname: 'Iron MAn',
      }
    ];
    this.colsSA = [{
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
      field: '01-Jan',
      header: '01-Jan'
    },
    {
      field: '02-Jan',
      header: '02-Jan'
    },
    {
      field: '03-Jan',
      header: '03-Jan'
    },
    {
      field: '04-Jan',
      header: '04-Jan'
    },
    {
      field: '05-Jan',
      header: '05-Jan'
    },
    {
      field: '06-Jan',
      header: '06-Jan'
    },
    {
      field: '07-Jan',
      header: '07-Jan'
    },
    {
      field: '08-Jan',
      header: '08-Jan'
    },
    {
      field: '09-Jan',
      header: '09-Jan'
    },
    ];

    this.availabilityCalendarSA = [
      {
        number: '1',
        nameSurname: 'Jaroslaw Psikuta',
        '02-Jan': 'H'
      },
      {
        number: '2',
        nameSurname: 'Radek Orzel',
        '07-Jan': 'SL'
      },
      {
        number: '3',
        nameSurname: 'Wielki Szu',
        '08-Jan': 'H'
      },
      {
        number: '4',
        nameSurname: 'Thor Odinson',
        '08-Jan': ''
      }
    ];

    this.colsUK = [{
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
      field: '01-Jan',
      header: '01-Jan'
    },
    {
      field: '02-Jan',
      header: '02-Jan'
    },
    {
      field: '03-Jan',
      header: '03-Jan'
    },
    {
      field: '04-Jan',
      header: '04-Jan'
    },
    {
      field: '05-Jan',
      header: '05-Jan'
    },
    {
      field: '06-Jan',
      header: '06-Jan'
    },
    {
      field: '07-Jan',
      header: '07-Jan'
    },
    {
      field: '08-Jan',
      header: '08-Jan'
    },
    {
      field: '09-Jan',
      header: '09-Jan'
    },
    ];

    this.availabilityCalendarUK = [
      {
        number: '1',
        nameSurname: 'Gartosz Branda',
        '04-Jan': 'H'
      },
      {
        number: '2',
        nameSurname: 'Marcin Pyak',
        '05-Jan': 'H'
      },
      {
        number: '3',
        nameSurname: 'Andrze GŁogier',
        '06-Jan': 'SL'
      },
      {
        number: '4',
        nameSurname: 'Lord Vater',
        '04-Jan': 'H'
      },
      {
        number: '5',
        nameSurname: 'Yoda',
        '05-Jan': 'H'
      },
      {
        number: '6',
        nameSurname: 'Han Duet',
        '06-Jan': 'H'
      }
    ];
  }

  openAll() {
    this.showTab = true;
  }
  closeAll() {
    this.showTab = false;
  }
}
