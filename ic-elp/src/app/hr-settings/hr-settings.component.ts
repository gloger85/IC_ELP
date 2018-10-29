import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-settings',
  templateUrl: './hr-settings.component.html',
  styleUrls: ['./hr-settings.component.css']
})
export class HrSettingsComponent implements OnInit {

  public display: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog(role: String) {
    if (role === 'Team-Group') {
      this.display = true;
    }
  }
}
