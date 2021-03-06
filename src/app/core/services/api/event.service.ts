import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  
    constructor( private http: HttpClient ) {}

    getAllEvents(){
        return this.http
            .get(`${environment.apiBaseUrl}/event/list`)
          }

    addEvent({name, type, id}){
         return this.http
            .post(`${environment.apiBaseUrl}/event`, {
              name,
              type,
              id,
            }, {responseType: 'text'})
            .pipe();
          }    
}
    
