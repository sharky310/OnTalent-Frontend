import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallAdminComponent } from './wall-admin/wall-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminDocumentComponent } from './admin-document/admin-document.component';
import { FormsModule } from '../forms/forms.module';
import { AdminListUsersComponent } from './admin-list-users/admin-list-users.component';


const routes: Routes = [
  {
    path: '',
    component: WallAdminComponent
  },
  {
    path: 'users',
    component: AdminUsersComponent
  },
  {
    path: 'events',
    component: AdminEventComponent
  },
  {
    path: 'documents',
    component: AdminDocumentComponent
  }
];


@NgModule({
  declarations: [WallAdminComponent, AdminUsersComponent, AdminDocumentComponent, AdminEventComponent, AdminListUsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [WallAdminComponent, AdminListUsersComponent]
})

export class WallAdminModule { }
