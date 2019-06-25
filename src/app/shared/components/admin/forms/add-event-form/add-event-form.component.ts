import { Component} from '@angular/core';
import { ToastService } from 'src/app/core/services/components/toast.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/api/event.service';

@Component({
  selector: 'ot-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent{

  addEventForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(8)]],
      type :['', [Validators.required, Validators.minLength(7)]],
      id: ['', [Validators.required, Validators.minLength(1)]],
    }
  );

  constructor(private fb: FormBuilder, private toastService: ToastService, private eventService: EventService) { }


  createEvent(){
    if (this.addEventForm.valid){
      this.eventService.addEvent(this.addEventForm.value).subscribe(
        ()=>{
            this.toastService.addToast({
              title:'Hey',
              message: `We are created the event: ${this.addEventForm.value['name']} `,
              variant: 'primary'
          }),
          this.addEventForm.get('name').setValue('');
          this.addEventForm.get('type').setValue('');
          this.addEventForm.get('id').setValue('');
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
