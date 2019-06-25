import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { AddUserFormComponent } from './components/admin/forms/add-user-form/add-user-form.component';  
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CapitalizePipe]
})

export class SharedModule { }
