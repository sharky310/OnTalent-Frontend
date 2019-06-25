import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/components/toast.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'ot-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent{

  constructor(private fb: FormBuilder, private toastService: ToastService, private userService: UserService) { }

  addUserForm = this.fb.group(
    {
      dni: ['', [Validators.required, Validators.minLength(8)]],
      email :['', [Validators.required, Validators.minLength(7)]],
      first_name: ['', [Validators.required, Validators.minLength(5)]],
      last_name: ['', [Validators.required, Validators.minLength(5)]],
    }
  );

  dateNow : Date = new Date();
  dateNowISO = this.dateNow.toISOString();

  createUser(){
    console.log("create user");
    if (this.addUserForm.valid){
      this.userService.addUser(this.addUserForm.value).subscribe(
        ()=>{
            this.toastService.addToast({
              title:'Hey',
              message: `We are created the user ${this.addUserForm.value['dni']} `,
              variant: 'primary'
          }),
        ()=>{
            this.toastService.addToast({
              title:'Hey',
              message: `We've had trouble releasing him. Check the data `,
              variant: 'danger'
          })
          }
        }
      )
    }
    else{
      
    }
}

}
