import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];
  public teams: SelectItem[];

  constructor(private location: Location) {
    this.teams = [
      {label: 'Aon 360', value: {id: 1, name: 'Aon 360'}},
      {label: 'Germany', value: {id: 1, name: 'Germany'}},
      {label: 'Luxemburg', value: {id: 1, name: 'Luxemburg'}},
      {label: 'Nordics', value: {id: 1, name: 'Nordics'}},
      {label: 'South Africa', value: {id: 1, name: 'South Africa'}},
    ];
   }

  ngOnInit() {
    this.users = [
      { id: '123', firstName: 'Andrzej', lastName: 'Dzabkon', fullName: 'Andrzej Dzabkon', team: 'South Africa', email: 'ab@cd.ed', active: 'Yes'},
      { id: '124', firstName: 'Grzegorz', lastName: 'Sylow', fullName: 'Grzegorz Sylow', team: 'Aon 360', email: 'ab@cd.ed', active: 'Yes'},
      { id: '125', firstName: 'Bartosz', lastName: 'Granda', fullName: 'Bartosz Granda', team: 'South Africa', email: 'ab@cd.ed', active: 'Yes'},
      { id: '126', firstName: 'Joanna', lastName: 'Kopacz', fullName: 'Joanna Kopacz', team: 'Germany', email: 'yz@cd.ed', active: 'No'}
    ];
  }
  GoBack(): void {
    this.location.back();
  }
}
