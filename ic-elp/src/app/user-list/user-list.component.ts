import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      { id: '123', firstName: 'Andrzej', lastName: 'Dzabkon', fullName: 'Andrzej Dzabkon', team: 'South Africa', email: 'ab@cd.ed', active: 'Yes'},
      { id: '124', firstName: 'Grzegorz', lastName: 'Sylow', fullName: 'Grzegorz Sylow', team: 'Aon 360', email: 'ab@cd.ed', active: 'Yes'},
      { id: '125', firstName: 'Bartosz', lastName: 'Granda', fullName: 'Bartosz Granda', team: 'South Africa', email: 'ab@cd.ed', active: 'Yes'},
      { id: '126', firstName: 'Joanna', lastName: 'Kopacz', fullName: 'Joanna Kopacz', team: 'South Africa', email: 'ab@cd.ed', active: 'Yes'},
    ];
  }

}
