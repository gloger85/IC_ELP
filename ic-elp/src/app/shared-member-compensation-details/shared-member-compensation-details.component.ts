import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-member-compensation-details',
  templateUrl: './shared-member-compensation-details.component.html',
  styleUrls: ['./shared-member-compensation-details.component.css']
})
export class SharedMemberCompensationDetailsComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
}


