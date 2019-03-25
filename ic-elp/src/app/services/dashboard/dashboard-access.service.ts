import { Injectable } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

enum Roles {
  superAdmin = "SYSTEM_ADMIN",
  hrAdmin = "HR_ADMIN",
  manager = "MANAGER",
  user = "USER"
}

@Injectable({
  providedIn: 'root'
})
export class DashboardAccessService {

  constructor(private tokenStorage: TokenStorageService) { }

  changeDashboard() {
    if(this.tokenStorage.getAuthorities().includes(Roles.superAdmin)) {
      return 1;
    } else if (this.tokenStorage.getAuthorities().includes(Roles.hrAdmin) && this.tokenStorage.getAuthorities().length == 1) {
      return 2;
    } else if (this.tokenStorage.getAuthorities().includes(Roles.manager) && this.tokenStorage.getAuthorities().length == 1) {
      return 3;
    } else if (this.tokenStorage.getAuthorities().includes(Roles.user) && this.tokenStorage.getAuthorities().length == 1) {
      return 4;
    } else { 
      return 0;
    }
  }
}
