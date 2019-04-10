import { CalendarService } from './../services/calendar/calendar.service';
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
import { RequestType, Occassion, DeathOf } from '../domain/request-enums';

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
    this.requestedNumberOfDays = this._calendarService.CountNumberOfWorkingDays(
      this.rangeDates,
      this.invalidDates,
      this.invalidDays
    );
    if (this.rangeDates[1]) {
      this.CalendarValidate();
    }
    this.displayRequestSummary = true;
  }

  OnOccasionChange(event, __this) {
    const occasion = event.value ? event.value.name : null;

    if (occasion === Occassion.death) {
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
      this.requestType === RequestType.paternityLeave &&
      ![7, 14].includes(this.requestedNumberOfDays)
    ) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE 7 OR 14 DAYS.';
    } else if (
      this.requestType === RequestType.childCare &&
      ![1, 2].includes(this.requestedNumberOfDays)
    ) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE 1 OR 2 DAYS.';
    } else if (
      this.requestType === RequestType.onDemandLeave &&
      this.requestedNumberOfDays > 4
    ) {
      this.calendarErrorMsg = 'YOU CAN ONLY CHOOSE UP TO 4 DAYS.';
    } else {
      this.calendarErrorMsg = null;
    }
  }

  OnRequestTypeChange(event) {
    this.requestType = event.value ? event.value.name : null;
    this.msgs = [];
    this.daysOrHours = null;
    this.calendarErrorMsg = null;
    if (this.requestType === RequestType.paternityLeave) {
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
      case RequestType.personalLeave: {
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
      case RequestType.onDemandLeave: {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'YOU CAN ONLY CHOOSE UP TO 4 DAYS OF ON DEMAND LEAVE PER YEAR.'
        });
        break;
      }
      case RequestType.occassionalLeave: {
        this.msgs.push({
          severity: 'warn',
          summary: 'Important information!',
          detail:
            'APPLYING FOR OCCASSIONAL LEAVE REQUIRES SUBMITTING TO HR ' +
            'DEPARTMENT DOCUMENT CONFIRMING FORMALLY THE OCCASION ' +
            '(eg. birth/marriage/death certificate).'
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
      case RequestType.excusedPaidAbsence: {
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
      case RequestType.excusedUnpaidAbsence: {
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
      case RequestType.unpaidLeave: {
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
      case RequestType.childCare: {
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
      case RequestType.maternityLeave: {
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
      case RequestType.parentalLeave: {
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
      case RequestType.paternityLeave: {
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
      case RequestType.unpaidChildcareLeave: {
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

  constructor(
    private fb: FormBuilder,
    private _calendarService: CalendarService
  ) {}

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
      {
        label: RequestType.personalLeave,
        value: { id: 1, name: RequestType.personalLeave }
      },
      {
        label: RequestType.onDemandLeave,
        value: { id: 2, name: RequestType.onDemandLeave }
      },
      {
        label: RequestType.occassionalLeave,
        value: { id: 3, name: RequestType.occassionalLeave }
      },
      {
        label: RequestType.excusedPaidAbsence,
        value: { id: 4, name: RequestType.excusedPaidAbsence }
      },
      {
        label: RequestType.excusedUnpaidAbsence,
        value: { id: 5, name: RequestType.excusedUnpaidAbsence }
      },
      {
        label: RequestType.unpaidLeave,
        value: { id: 6, name: RequestType.unpaidLeave }
      },
      {
        label: RequestType.childCare,
        value: { id: 7, name: RequestType.childCare }
      },
      {
        label: RequestType.maternityLeave,
        value: { id: 8, name: RequestType.maternityLeave }
      },
      {
        label: RequestType.parentalLeave,
        value: { id: 9, name: RequestType.parentalLeave }
      },
      {
        label: RequestType.paternityLeave,
        value: { id: 10, name: RequestType.paternityLeave }
      },
      {
        label: RequestType.unpaidChildcareLeave,
        value: { id: 11, name: RequestType.unpaidChildcareLeave }
      }
    ];

    this.occasions = [
      { label: 'Select occasion', value: null },
      {
        label: Occassion.employeesWedding,
        value: { id: 1, name: Occassion.employeesWedding }
      },
      {
        label: Occassion.emploeesChildWedding,
        value: { id: 2, name: Occassion.emploeesChildWedding }
      },
      { label: Occassion.death, value: { id: 3, name: Occassion.death } },
      {
        label: Occassion.childBirth,
        value: { id: 4, name: Occassion.childBirth }
      }
    ];

    this.degreesOfKinship = [
      { label: 'Select degree', value: null },
      { label: DeathOf.spouse, value: { id: 1, name: DeathOf.spouse } },
      { label: DeathOf.child, value: { id: 2, name: DeathOf.child } },
      { label: DeathOf.mother, value: { id: 3, name: DeathOf.mother } },
      { label: DeathOf.father, value: { id: 4, name: DeathOf.father } },
      {
        label: DeathOf.fatherInLaw,
        value: { id: 5, name: DeathOf.fatherInLaw }
      },
      {
        label: DeathOf.motherInLaw,
        value: { id: 6, name: DeathOf.motherInLaw }
      },
      {
        label: DeathOf.grandfather,
        value: { id: 7, name: DeathOf.grandfather }
      },
      {
        label: DeathOf.grandmother,
        value: { id: 8, name: DeathOf.grandmother }
      },
      { label: DeathOf.stepfather, value: { id: 9, name: DeathOf.stepfather } },
      {
        label: DeathOf.stepmother,
        value: { id: 10, name: DeathOf.stepmother }
      },
      { label: DeathOf.sister, value: { id: 11, name: DeathOf.sister } },
      { label: DeathOf.brother, value: { id: 12, name: DeathOf.brother } },
      { label: DeathOf.other, value: { id: 13, name: DeathOf.other } }
    ];

    this.daysOrHoursOptions = [
      { label: 'Select days or hours', value: null },
      { label: 'Days', value: { id: 1, name: 'Days' } },
      { label: 'Hours', value: { id: 2, name: 'Hours' } }
    ];
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
      this.invalidDates.push.apply(
        this.invalidDates,
        this._calendarService.GetPublicHolidaysByYear(year)
      );

      if (month >= 11) {
        // Kalendarz wyswietlany na przelomie roku
        this.invalidDates.push.apply(
          this.invalidDates,
          this._calendarService.GetPublicHolidaysByYear(year + 1)
        );
      }
    }
  }

  SendRequest(): void {
    console.log(this.requestForm.value);
  }
}
