import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[AddUserFormComponent]
})
export class FormsModule { }
