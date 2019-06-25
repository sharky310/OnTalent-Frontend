import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/security/auth.service';


@Component({
  selector: 'ot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(7)]],
    password:['',[Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          if (this.authService.authInfo['role']===1)
          this.router.navigate(['/adminPage']);
          else   this.router.navigate(['/userPage']);
        },
        () => {
          this.loginForm.get('password').setValue('')
        }
      );

      }
    }

}
