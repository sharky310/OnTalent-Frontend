import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { NotFoundComponent } from './shared/components/general/not-found/not-found.component';
import { ApplyLayoutComponent } from './layout/apply-layout/apply-layout.component';
import { AuthGuard } from './core/guards/auth-user.guard';
import { AuthAdminGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginLayoutComponent
  },
  {
    path: 'adminPage',
    component: AdminLayoutComponent,
    canActivate: [AuthAdminGuard],
    children: [
      {
      path: '',
      loadChildren: './shared/components/admin/wall-admin/wall-admin.module#WallAdminModule'
     }
    ]
  },
  {
    path: 'userPage',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
      path: '',
      loadChildren: './shared/components/user/user.module#UserModule'
      }
    ]
  },
  {
    path: 'applyPage',
    component: ApplyLayoutComponent
  },
  {
    path: '**', 
    component: NotFoundComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
