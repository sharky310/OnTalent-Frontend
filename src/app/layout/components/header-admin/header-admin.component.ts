import { Component} from '@angular/core';
import { AuthService } from 'src/app/core/services/security/auth.service';

@Component({
  selector: 'ot-header-admin',
  template: `<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">
      <i class="fas fa-plane-arrival"></i>
    OnTalent System
  </a>
  <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" (click)="authService.logout()">Logout</button>
    </form>
</nav>`
})
export class HeaderAdminComponent {

  constructor(private authService: AuthService) { }
}
