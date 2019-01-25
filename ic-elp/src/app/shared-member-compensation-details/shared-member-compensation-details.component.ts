import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-shared-member-compensation-details',
  templateUrl: './shared-member-compensation-details.component.html',
  styleUrls: ['./shared-member-compensation-details.component.css']
})
export class SharedMemberCompensationDetailsComponent implements OnInit {
  display = false;
  noOfHoursSelectItems: SelectItem[];
  noOfHoursTooltip: string;

  constructor() {}

  ngOnInit() {
  }

  showDialog(requestType) {
    this.updateFields(requestType);
    this.display = true;
  }

  updateFields(requestType: string) {
    if (requestType === 'compensation') {
      this.noOfHoursSelectItems = [
        {label: 'Select number of hours', value: null},
        {label: '4', value: {id: 4 }},
        {label: '8', value: {id: 8 }},
      ];
      this.noOfHoursTooltip = 'Select 4 or 8 value to request compensation hours';
    } else if (requestType === 'overtime') {
      this.noOfHoursSelectItems = [
        {label: 'Select number of hours', value: null},
        {label: '1', value: {id: 1 }},
        {label: '2', value: {id: 2 }},
        {label: '3', value: {id: 3 }},
        {label: '4', value: {id: 4 }},
        {label: '5', value: {id: 5 }},
        {label: '6', value: {id: 6 }},
        {label: '7', value: {id: 7 }},
        {label: '8', value: {id: 8 }},
      ];
      this.noOfHoursTooltip = 'Select one of 1-8 values to reqeust overtime hours';
    }
  }
}
