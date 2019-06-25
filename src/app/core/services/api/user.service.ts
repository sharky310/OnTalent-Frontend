import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../../core.models';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public currentUser: UserModel;
  public listUsers: UserModel[];

  constructor( private http: HttpClient ) {}

  addUser({dni, first_name, last_name, email}){
    return this.http
    .post(`${environment.apiBaseUrl}/account`, {
      dni,
      first_name,
      last_name,
      email
    }, {responseType: 'text'})
    .pipe();
  }
  
  getUser(){
      return this.http
        .get(`${environment.apiBaseUrl}/profile`)
        .pipe();
      }

  getAllUsers(){
    return this.http
        .get(`${environment.apiBaseUrl}/profiles`)
      }
  

  updatePassword(value){
    return this.http
    .put(`${environment.apiBaseUrl}/profile/pass`,value.pass);
  }

}