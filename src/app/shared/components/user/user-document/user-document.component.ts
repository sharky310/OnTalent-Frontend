import { Component} from '@angular/core';
import { DocumentService } from 'src/app/core/services/api/document.service';

@Component({
  selector: 'ot-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.scss']
})
export class UserDocumentComponent{


  listDocument;
  
  constructor(public documentService:DocumentService) { 

    try{
      this.documentService.getAllDocuments()
      .subscribe(document=>{
        this.listDocument = document;
      });
    } catch (e){
      console.log("Error");
    }
  }

}
