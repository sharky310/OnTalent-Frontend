import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  
    constructor( private http: HttpClient ) {}

    getAllDocuments(){
        return this.http
            .get(`${environment.apiBaseUrl}/document/list`)
          }

    addDocument({name, file}){
        const formData = new FormData();
        formData.append('file', file);
        return this.http
            .post(`${environment.apiBaseUrl}/document`, formData, {responseType: 'text'})
            .pipe();
     }
}
    
