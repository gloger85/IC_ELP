import { Component, OnInit } from '@angular/core';

interface MemberItem {
  name: string;
}

@Component({
  selector: 'app-hr-settings',
  templateUrl: './hr-settings.component.html',
  styleUrls: ['./hr-settings.component.css']
})

export class HrSettingsComponent implements OnInit {

  public display: Boolean = false;
  public members: MemberItem[];
  public selectedMeber: MemberItem;

  constructor() {
    this.members = [
      {name: 'Janusz Andrzejczak'},
      {name: 'Marek Kondrat'},
      {name: 'Marlin Janowska'},
      {name: 'Norbert Wieckowski'},
      {name: 'Zofia Stasiak'}
    ];
  }

  ngOnInit() {
  }

  showDialog(role: String) {
    if (role === 'Team-Group') {
      this.display = true;
    }
  }
}
