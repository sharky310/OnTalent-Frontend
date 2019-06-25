import { Component} from '@angular/core';
import { EventService } from 'src/app/core/services/api/event.service';

@Component({
  selector: 'ot-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent{

  listEvent;

  constructor(public eventService:EventService) {

    try{
      this.eventService.getAllEvents()
      .subscribe(event=>{
        this.listEvent = event;
      });
    } catch (e){
      console.log("Error");
    }
  }
   }

