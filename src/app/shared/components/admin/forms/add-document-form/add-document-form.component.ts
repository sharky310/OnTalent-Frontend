import { Component} from '@angular/core';
import { ToastService } from 'src/app/core/services/components/toast.service';
import { FormBuilder } from '@angular/forms';
import { DocumentService } from 'src/app/core/services/api/document.service';

@Component({
  selector: 'ot-add-document-form',
  templateUrl: './add-document-form.component.html',
  styleUrls: ['./add-document-form.component.scss']
})
export class AddDocumentFormComponent{

  addDocumentForm = this.fb.group(
    {
      name: ['', []],
      file :['', []],
    }
  );

  constructor(private fb: FormBuilder, private toastService: ToastService, private documentService: DocumentService) { }

  sendDocument(){
    if (this.addDocumentForm.valid){
      this.documentService.addDocument(this.addDocumentForm.value).subscribe(
        ()=>{
          console.log(this.addDocumentForm);
            this.toastService.addToast({
              title:'Hey',
              message: `We are upload file: ${this.addDocumentForm.value['name']} `,
              variant: 'primary'
          }),
          this.addDocumentForm.get('name').setValue('');
          this.addDocumentForm.get('type').setValue('');
          this.addDocumentForm.get('id').setValue('');
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
