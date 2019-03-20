import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loggedIn: boolean = true;

  constructor(private authService: AuthService, private tokenService :TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.authService.currentStatus.subscribe(status => {
      this.loggedIn = status;
      console.log(status);
    })
  }

  logout() {
    this.authService.logout().subscribe( data => {
      this.tokenService.signOut();
      this.loggedIn = false;
      this.newStatus(this.loggedIn);
      this.router.navigateByUrl('/login');
    })
  }

  private newStatus(value: boolean) {
    this.authService.changeStatus(value);
  }
}
