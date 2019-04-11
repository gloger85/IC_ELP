import { Component, OnInit } from '@angular/core';
import { PasswordResetService } from '../services/password-reset/password-reset.service';
import { Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  email: string;
  isResetingFailed: boolean = false;
  errorMessage: string = "Email is invalid"

  constructor(private reset: PasswordResetService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.reset.restorePassword(this.email).subscribe( data => { 
      console.log(data);
    },
      error => {
        this.errorMessage = error.error.message;
        this.isResetingFailed = true;
      }
    )
  }

}
