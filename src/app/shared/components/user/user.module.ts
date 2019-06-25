import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEventComponent } from './user-event/user-event.component';
import { UserDocumentComponent } from './user-document/user-document.component';
import { Routes, RouterModule } from '@angular/router';
import { UserHelpComponent } from './user-help/user-help.component';

const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent
  },
  {
    path: 'events',
    component: UserEventComponent
  },
  {
    path: 'documents',
    component: UserDocumentComponent
  },
  {
    path: 'help',
    component: UserHelpComponent
  },
]

@NgModule({
  declarations: [UserInfoComponent, UserEventComponent, UserDocumentComponent, UserHelpComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [UserInfoComponent, UserHelpComponent]
})
export class UserModule { }
