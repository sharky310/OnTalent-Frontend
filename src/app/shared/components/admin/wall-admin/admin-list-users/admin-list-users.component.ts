import { Component} from '@angular/core';
import { UserService } from 'src/app/core/services/api/user.service';
import { UserModel } from 'src/app/core/core.models';

@Component({
  selector: 'ot-admin-list-users',
  templateUrl: './admin-list-users.component.html',
  styleUrls: ['./admin-list-users.component.scss']
})
export class AdminListUsersComponent{


  listUsers;

  constructor(private userService: UserService) { 

    try{
    this.userService.getAllUsers().subscribe(
      res =>{
        this.listUsers = res;
      } 
      );
    } catch(e){
      console.log("Error");
    }
  }
}
