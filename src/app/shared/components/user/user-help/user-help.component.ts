import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/components/toast.service';

@Component({
  selector: 'ot-user-help',
  templateUrl: './user-help.component.html',
  styleUrls: ['./user-help.component.scss']
})
export class UserHelpComponent{

  constructor( private toastService: ToastService) {}

  getHelp(){
    this.toastService.addToast({
      title:'Notification received',
      message: `They will be in touch with you very soon.`,
      variant: 'success',
   }) 
  }

}
