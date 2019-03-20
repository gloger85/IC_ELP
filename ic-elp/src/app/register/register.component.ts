import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../domain/sigup-info';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignedUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log();

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.personalId,
      this.form.name,
      this.form.surname,
      this.form.position
    );

    this.authService.signUp(this.signupInfo).subscribe(data => {
      console.log(data);
      this.isSignedUp = true;
      this.isSignedUpFailed = false;
    },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignedUpFailed = true;
      }
    );
  }

}
