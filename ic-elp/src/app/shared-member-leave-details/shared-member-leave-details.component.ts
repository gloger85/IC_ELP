import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-member-leave-details',
  templateUrl: './shared-member-leave-details.component.html',
  styleUrls: ['./shared-member-leave-details.component.css']
})
export class SharedMemberLeaveDetailsComponent implements OnInit {

  display: boolean = false;
  
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

}
