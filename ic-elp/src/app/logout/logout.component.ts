import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/auth/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private tokenService :TokenStorageService) { }

  ngOnInit() {}

  logout() {
    this.auth.logout().subscribe( data => {
      this.tokenService.signOut();
      window.location.reload();
    })
  }
}
