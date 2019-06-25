import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthInfo } from '../../core.models';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    
  authInfo: AuthInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem('auth'));
  }

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem('auth', JSON.stringify(info));      
        })
      );
  }

  logout() {
    localStorage.removeItem('auth');
    this.authInfo = null;
    this.router.navigate(['']);
  }


}