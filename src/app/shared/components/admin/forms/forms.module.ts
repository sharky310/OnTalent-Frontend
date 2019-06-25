import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { AddDocumentFormComponent } from './add-document-form/add-document-form.component';

@NgModule({
  declarations: [AddUserFormComponent, AddEventFormComponent, AddDocumentFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[AddUserFormComponent, AddEventFormComponent, AddDocumentFormComponent]
})
export class FormsModule { }
