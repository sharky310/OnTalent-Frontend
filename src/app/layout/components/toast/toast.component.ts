import { Component, OnInit } from '@angular/core';
import { ToastService, ToastData } from 'src/app/core/services/components/toast.service';

@Component({
  selector: 'ot-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent{

  constructor(public toastService: ToastService) { }
}
