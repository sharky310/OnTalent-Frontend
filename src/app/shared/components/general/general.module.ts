import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

@NgModule({
  declarations: [NotFoundComponent,
                LoginComponent,
                ApplyFormComponent,
                ValidationMessagesComponent
                ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    ApplyFormComponent,
    ValidationMessagesComponent
  ]
})
export class GeneralModule { }
