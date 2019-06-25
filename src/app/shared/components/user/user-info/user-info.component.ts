
import { Component} from '@angular/core';
import { UserService } from 'src/app/core/services/api/user.service';
import { AuthService } from 'src/app/core/services/security/auth.service';

@Component({
  selector: 'ot-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent{

  user = {};

  constructor(public userService: UserService, private authService: AuthService) {

    try{
    this.userService.getUser()
    .subscribe(res=>{
      this.user = res;
    });
  } catch (e){
    console.log("Error");
  }
}
  }
      

