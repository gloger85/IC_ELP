import { DynamicControlDropdown } from './../dynamicControlDropdown';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { User } from '../domain/user';
import { DynamicControlAutocomplete } from '../dynamicControlAutocomplete';
import { DynamicControlTextbox } from '../dynamicControlTextbox';
import { DynamicControlSlide } from '../dynamicControlSlide';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-shared-calendar',
  templateUrl: './shared-calendar.component.html',
  styleUrls: ['./shared-calendar.component.css']
})
export class SharedCalendarComponent implements OnInit {
  requestDate: Date = new Date();
  rangeDates: Date[];
  invalidDates: Array<Date>;
  invalidDays: number[];
  en: any;
  pl: any;
  requestedNumberOfDays: number;
  requestedNumberOfHours: number;
  calendarErrorMsg: string;
  rangeHours: number[];
  requestType: string;
  requestTypes: SelectItem[];
  occasions: SelectItem[];
  degreesOfKinship: SelectItem[];
  daysOrHoursOptions: SelectItem[];
  daysOrHours: string;

  display: boolean;
  displayRequestSummary: boolean;
  displayHoursInputs: boolean;
  requestForm: FormGroup;

  agreedWithUser: User;
  replacementUser: User;

  users: User[] = [
    {
      id: '123',
      firstName: 'Andrzej',
      lastName: 'Dzabkon',
      fullName: 'Andrzej Dzabkon',
      team: 'South Africa',
      email: 'ab@cd.ed',
      active: 'Yes'
    },
    {
      id: '124',
      firstName: 'Grzegorz',
      lastName: 'Sylow',
      fullName: 'Grzegorz Sylow',
      team: 'Aon 360',
      email: 'ab@cd.ed',
      active: 'Yes'
    },
    {
      id: '125',
      firstName: 'Bartosz',
      lastName: 'Granda',
      fullName: 'Bartosz Granda',
      team: 'South Africa',
      email: 'ab@cd.ed',
      active: 'Yes'
    },
    {
      id: '126',
      firstName: 'Joanna',
      lastName: 'Kopacz',
      fullName: 'Joanna Kopacz',
      team: 'South Africa',
      email: 'ab@cd.ed',
      active: 'Yes'
    }
  ];

  filteredUsers: User[];

  msgs: Message[] = [];
  msg: string;

  dynamicControls: any[] = [];

  filteredUsersBroker(__this): User[] {
    return __this.filteredUsers;
  }

  AddFormGroup(
    formControlName: string,
    validators: ValidatorFn[] = null
  ): FormGroup {
    if (formControlName) {
      const formGroup = this.fb.group({
        [formControlName]: ''
      });
      if (validators) {
        formGroup.controls[formControlName].setValidators(validators);
      }
      return formGroup;
    } else {
      return this.fb.group({});
    }
  }

  OnCalendarSelect() {
    if (this.daysOrHours === 'Hours' && this.rangeDates && this.rangeDates[1]) {
      this.rangeDates[0] = this.rangeDates[1];
      this.rangeDates[1] = null;
    }
    this.CountNumberOfWorkingDays();
    if (this.rangeDates[1]) {
      this.CalendarValidate();
    }
    this.displayRequestSummary = true;
  }

  OnOccasionChange(event, __this) {
    const occasion = event.value ? event.value.name : null;

    if (occasion === 'Death') {
      __this.dynamicControls.push(
        new DynamicControlDropdown({
          key: 'degreeOfKinship',
          label: 'Degree of kinship:',
          options: __this.degreesOfKinship
        })
      );
      (<FormArray>__this.requestForm.get('dynamicFormControls')).push(
        new FormGroup({ degreeOfKinship: new FormControl() })
      );
    } else if (
      __this.dynamicControls.length > 1 &&
      __this.dynamicControls[1].key === 'degreeOfKinship'
    ) {
      __this.dynamicControls.pop();
      (<FormArray>__this.requestForm.get('dynamicFormControls')).removeAt(1);
    }
  }

  CalendarValidate() {
    if (
      this.requestType === 'Paternity leave' &&
      ![7, 14].includes(this.requestedNumberOfDays)
    ) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE 7 OR 14 DAYS.';
    } else if (
      this.requestType === 'Child care' &&
      ![1, 2].includes(this.requestedNumberOfDays)
    ) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE 1 OR 2 DAYS.';
    } else {
      this.calendarErrorMsg = null;
    }
  }

  OnRequestTypeChange(event) {
    this.requestType = event.value ? event.value.name : null;
    this.msgs = [];
    this.daysOrHours = null;
    this.calendarErrorMsg = null;
    if (this.requestType === 'Paternity leave') {
      this.invalidDates = [];
      this.invalidDays = [];
    } else {
      this.DisablePublicpublicHolidaysInCalendar(
        new Date().getMonth(),
        new Date().getFullYear()
      );
      this.invalidDays = [0, 6];
    }
    if (this.rangeDates) {
      for (let i = 0; i < this.rangeDates.length; i++) {
        if (this.rangeDates[i]) {
          this.rangeDates[i].setDate(null);
        }
      }
    }
    this.displayRequestSummary = false;
    this.displayHoursInputs = false;
    this.dynamicControls = [];
    (<FormArray>this.requestForm.get('dynamicFormControls')).controls = [];

    switch (this.requestType) {
      case 'Personal Leave': {
        this.dynamicControls.push(
          new DynamicControlAutocomplete({
            key: 'agreedWithUser',
            label: 'Agreed with:',
            placeholder: 'Type to search...',
            forceSelection: 'true',
            field: 'fullName',
            suggestions: this.filteredUsersBroker,
            completeMethod: this.filterUsersBroker
          })
        );
        this.dynamicControls.push(
          new DynamicControlAutocomplete({
            key: 'replacementUser',
            label: 'Replacement:',
            placeholder: 'N/A',
            forceSelection: 'true',
            field: 'fullName',
            suggestions: this.filteredUsersBroker,
            completeMethod: this.filterUsersBroker
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('agreedWithUser')
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('replacementUser')
        );
        break;
      }
      case 'On demand leave': {
        break;
      }
      case 'Occassional leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR OCCASSIONAL LEAVE REQUIRES SUBMITTING DOCUMENT ' +
            'CONFIRMING FORMALLY THE OCCASION (eg. birth/marriage/death certificate).'
        });
        this.dynamicControls.push(
          new DynamicControlDropdown({
            key: 'occasion',
            label: 'Occasion:',
            options: this.occasions,
            onChange: this.OnOccasionChange
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('occasion')
        );
        break;
      }
      case 'Excused paid absence': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'THIS TYPE OF ABSENCE REQUIRES SUBMITTING IN HR DEPARTMENT FORMAL DOCUMENT ' +
            'STATING THE REASON OF EXCUSE IN ORDER TO ATTACH IT TO EMPLOYEE’S PERSONAL FILES (EG. BLOOD DONATION CERTIFICATE).'
        });
        this.dynamicControls.push(
          new DynamicControlTextbox({
            key: 'reason',
            label: 'Reason:',
            type: 'text',
            class: 'ui-g-9',
            tooltip: 'This is mandatory field. Please provide description.'
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('reason', [Validators.required])
        );
        break;
      }
      case 'Excused unpaid absence': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'THIS TYPE OF ABSENCE REQUIRES SUBMITTING IN HR DEPARTMENT ' +
            'FORMAL DOCUMENT STATING THE REASON OF EXCUSE IN ORDER TO ATTACH ' +
            'IT TO EMPLOYEE’S PERSONAL FILES (EG. CONFIRMATION FROM COURT/MILITARY COMMISSION).'
        });
        this.dynamicControls.push(
          new DynamicControlTextbox({
            key: 'reason',
            label: 'Reason:',
            type: 'text',
            class: 'ui-g-9',
            tooltip: 'This is mandatory field. Please provide description.'
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('reason', [Validators.required])
        );
        break;
      }
      case 'Unpaid leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR UNPAID LEAVE REQUIRES SUBMITTING IN HR DEPARTMENT ' +
            'PRINTED AND SIGNED FORM IN ORDER TO ATTACH IT TO EMPLOYEE’S PERSONAL FILES.'
        });
        this.dynamicControls.push(
          new DynamicControlAutocomplete({
            key: 'agreedWithUser',
            label: 'Agreed with:',
            placeholder: 'Type to search...',
            forceSelection: 'true',
            field: 'fullName',
            suggestions: this.filteredUsersBroker,
            completeMethod: this.filterUsersBroker
          })
        );
        this.dynamicControls.push(
          new DynamicControlAutocomplete({
            key: 'replacementUser',
            label: 'Replacement:',
            placeholder: 'N/A',
            forceSelection: 'true',
            field: 'fullName',
            suggestions: this.filteredUsersBroker,
            completeMethod: this.filterUsersBroker
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('agreedWithUser')
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('replacementUser')
        );
        break;
      }
      case 'Child care': {
        this.msgs.push({
          severity: 'error',
          summary: 'Important information!',
          detail:
            'NO CHILD CARE ALLOWANCE FOR THE CURRENT YEAR. IT IS NECESSARY ' +
            'TO SUBMIT SIGNED FORM ENTITLING THE EMPLOYE TO CHILD CARE.'
        });
        this.dynamicControls.push(
          new DynamicControlSlide({
            key: 'rangeHour',
            range: true,
            slideMin: 0,
            slideMax: 24,
            class: 'ui-g-9'
          })
        );
        (<FormArray>this.requestForm.get('dynamicFormControls')).push(
          this.AddFormGroup('rangeHour')
        );
        break;
      }
      case 'Maternity leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR MATERNITY LEAVE REQUIRES SUBMITTING IN HR DEPARTMENT ' +
            'PRINTED AND SIGNED FORM IN ORDER TO ATTACH IT TO EMPLOYEE’S PERSONAL ' +
            'FILES AS WELL AS SUBMITTING BIRTH CERTIFICATE OF A CHILD.'
        });
        break;
      }
      case 'Parental leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR PARENTAL LEAVE REQUIRES SUBMITTING IN HR DEPARTMENT ' +
            'PRINTED AND SIGNED FORM IN ORDER TO ATTACH IT TO EMPLOYEE’S PERSONAL ' +
            'FILES AS WELL AS SUBMITTING BIRTH CERTIFICATE OF A CHILD.'
        });
        break;
      }
      case 'Paternity leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR PATERNITY LEAVE REQUIRES SUBMITTING IN HR DEPARTMENT ' +
            'PRINTED AND SIGNED FORM IN ORDER TO ATTACH IT TO EMPLOYEE’S PERSONAL ' +
            'FILES AS WELL AS SUBMITTING BIRTH CERTIFICATE OF A CHILD.'
        });
        break;
      }
      case 'Unpaid childcare leave': {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR UNPAID CHILDCARE LEAVE REQUIRES SUBMITTING IN HR ' +
            'DEPARTMENT PRINTED AND SIGNED FORM IN ORDER TO ATTACH IT TO EMPLOYEE’S ' +
            'PERSONAL FILES AS WELL AS SUBMITTING BIRTH CERTIFICATE OF A CHILD.'
        });
        break;
      }
      default: {
        return;
        break;
      }
    }
  }

  OnDaysOrHoursChange(event) {
    if (this.rangeDates) {
      for (let i = 0; i < this.rangeDates.length; i++) {
        if (this.rangeDates[i]) {
          this.rangeDates[i].setDate(null);
        }
      }
    }
    this.displayRequestSummary = false;
    this.daysOrHours = event.value ? event.value.name : null;
    if (this.daysOrHours === 'Days') {
      this.displayHoursInputs = false;
    } else if (this.daysOrHours === 'Hours') {
      this.displayHoursInputs = true;
    }
  }


  filterUsersBroker(event, __this) {
    __this.filterUsers(event);
  }

  filterUsers(event) {
    const query = event.query;
    const filtered: any[] = [];
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        filtered.push(user);
      }
    }
    this.filteredUsers = filtered;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.daysOrHours = null;
    this.display = false;
    this.displayRequestSummary = false;

    this.requestForm = this.fb.group({
      requestDate: [''],
      employeeFullName: [''],
      calendar: this.rangeDates,
      requestType: [this.requestType, Validators.required],
      daysOrHours: this.daysOrHours,
      dynamicFormControls: this.fb.array([]),
      rangeHour: this.rangeHours
    });

    this.en = {
      firstDayOfWeek: 1,
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      today: 'Today',
      clear: 'Clear'
    };
    this.pl = {
      firstDayOfWeek: 1,
      dayNames: [
        'Niedziela',
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek',
        'Sobota'
      ],
      dayNamesShort: ['Nie', 'Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob'],
      dayNamesMin: ['Ni', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'],
      monthNames: [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
      ],
      monthNamesShort: [
        'Sty',
        'Lut',
        'Mar',
        'Kwi',
        'Maj',
        'Cze',
        'Lip',
        'Sie',
        'Wrz',
        'Paź',
        'Lis',
        'Gru'
      ],
      today: 'Dziś',
      clear: 'Wyczyść'
    };

    this.DisablePublicpublicHolidaysInCalendar(
      new Date().getMonth(),
      new Date().getFullYear()
    );

    this.invalidDays = [0, 6];
    this.rangeHours = [8, 16];
    this.requestedNumberOfHours = 8;

    this.requestTypes = [
      { label: 'Select request type', value: null },
      { label: 'Personal Leave', value: { id: 1, name: 'Personal Leave' } },
      { label: 'On demand leave', value: { id: 2, name: 'On demand leave' } },
      {
        label: 'Occassional leave',
        value: { id: 3, name: 'Occassional leave' }
      },
      {
        label: 'Excused paid absence',
        value: { id: 4, name: 'Excused paid absence' }
      },
      {
        label: 'Excused unpaid absence',
        value: { id: 5, name: 'Excused unpaid absence' }
      },
      { label: 'Unpaid leave', value: { id: 6, name: 'Unpaid leave' } },
      { label: 'Child care', value: { id: 7, name: 'Child care' } },
      { label: 'Maternity leave', value: { id: 8, name: 'Maternity leave' } },
      { label: 'Parental leave', value: { id: 9, name: 'Parental leave' } },
      { label: 'Paternity leave', value: { id: 10, name: 'Paternity leave' } },
      {
        label: 'Unpaid childcare leave',
        value: { id: 11, name: 'Unpaid childcare leave' }
      }
    ];

    this.occasions = [
      { label: 'Select occasion', value: null },
      {
        label: 'Employee’s wedding',
        value: { id: 1, name: 'Employee’s wedding' }
      },
      {
        label: 'Emploee’s child wedding',
        value: { id: 2, name: 'Emploee’s child wedding' }
      },
      { label: 'Death', value: { id: 3, name: 'Death' } },
      { label: 'Child birth', value: { id: 4, name: 'Child birth' } }
    ];

    this.degreesOfKinship = [
      { label: 'Select degree', value: null },
      { label: 'Spouse', value: { id: 1, name: 'Spouse' } },
      { label: 'Child', value: { id: 2, name: 'Child' } },
      { label: 'Mother', value: { id: 3, name: 'Mother' } },
      { label: 'Father', value: { id: 4, name: 'Father' } },
      { label: 'Father-in-law', value: { id: 5, name: 'Father-in-law' } },
      { label: 'Mother-in-law', value: { id: 6, name: 'Mother-in-law' } },
      { label: 'Grandfather', value: { id: 7, name: 'Grandfather' } },
      { label: 'Grandmother', value: { id: 8, name: 'Grandmother' } },
      { label: 'Stepfather', value: { id: 9, name: 'Stepfather' } },
      { label: 'Stepmother', value: { id: 10, name: 'Stepmother' } },
      { label: 'Sister', value: { id: 11, name: 'Sister' } },
      { label: 'Brother', value: { id: 12, name: 'Brother' } },
      {
        label: 'Other dependent or person being under employee’s care',
        value: {
          id: 13,
          name: 'Other dependent or person being under employee’s care'
        }
      }
    ];

    this.daysOrHoursOptions = [
      { label: 'Select days or hours', value: null },
      { label: 'Days', value: { id: 1, name: 'Days' } },
      { label: 'Hours', value: { id: 2, name: 'Hours' } }
    ];
  }

  IsInvalidDay(date: Date) {
    return this.invalidDays.includes(date.getDay());
  }

  CountNumberOfWorkingDays(): number {
    if (!this.rangeDates || !this.rangeDates[1]) {
      this.requestedNumberOfDays = 1;
      return 1;
    }

    let workingDaysCount = 0;
    const startDate: Date = this.rangeDates[0];
    const endDate: Date = this.rangeDates[1];
    const date: Date = new Date(startDate);

    while (date <= endDate) {
      if (!(this.IsInvalidDate(date) || this.IsInvalidDay(date))) {
        workingDaysCount++;
      }
      date.setDate(date.getDate() + 1);
    }

    this.requestedNumberOfDays = workingDaysCount;
    return workingDaysCount;
  }

  CountNumberOfHours(): number {
    this.requestedNumberOfHours = this.rangeHours[1] - this.rangeHours[0];
    if (this.requestedNumberOfHours > 8) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE 8 HOURS PER DAY.';
    } else {
      this.calendarErrorMsg = null;
    }
    return this.requestedNumberOfHours;
  }

  DisablePublicpublicHolidaysInCalendar(month: number, year: number): void {
    this.invalidDates = [];
    this.invalidDays = [];
    if (this.requestType !== 'Paternity leave') {
      this.invalidDays = [0, 6];
      for (const publicHoliday of this.GetPublicHolidaysByYear(year)) {
        this.invalidDates.push(
          new Date(year, publicHoliday[0], publicHoliday[1])
        );
      }

      if (month >= 11) {
        // Kalendarz wyswietlany na przelomie roku
        for (const publicHoliday of this.GetPublicHolidaysByYear(year + 1)) {
          this.invalidDates.push(
            new Date(year + 1, publicHoliday[0], publicHoliday[1])
          );
        }
      }
    }
  }

  GetPublicHolidaysByYear(year: number): Array<number[]> {
    const publicHolidays: Array<number[]> = [
      // [month][day]
      [0, 1], // Nowy Rok
      [0, 6], // Trzech Króli
      [4, 1], // Święto Pracy
      [4, 3], // Święto Konstytucji 3 Maja
      [7, 15], // Wniebowzięcie Najświętszej Maryi Panny
      [10, 1], // Wszystkich Świętych
      [10, 11], // Święto Niepodległości
      [11, 25], // Boże Narodzenie
      [11, 26] // Boże Narodzenie
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
    publicHolidays.push([
      wielkanocnyPoniedzialek.getMonth(),
      wielkanocnyPoniedzialek.getDate()
    ]);
    publicHolidays.push([
      zeslanieDuchaSwietego.getMonth(),
      zeslanieDuchaSwietego.getDate()
    ]);
    publicHolidays.push([bozeCialo.getMonth(), bozeCialo.getDate()]);

    return publicHolidays;
  }

  IsInvalidDate(date: Date): boolean {
    return this.invalidDates.includes(date);
  }

  IsPublicHoliday(date: Date): boolean {
    const publicHolidays: Array<number[]> = this.GetPublicHolidaysByYear(
      date.getFullYear()
    );

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
    console.log(this.requestForm.value);
  }
}
