import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralModule } from '../shared/components/general/general.module';
import { ApplyLayoutComponent } from './apply-layout/apply-layout.component';
import { WallAdminModule } from '../shared/components/admin/wall-admin/wall-admin.module';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { ToastComponent } from './components/toast/toast.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '../shared/components/admin/forms/forms.module';

@NgModule({
  declarations: [LoginLayoutComponent,
     AdminLayoutComponent, 
     UserLayoutComponent, 
     HeaderLoginComponent, 
     FooterComponent,
     ApplyLayoutComponent,
     AdminNavComponent,
     HeaderAdminComponent,
     ToastComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    GeneralModule,
    SharedModule,
  ],
  exports: [
    AdminLayoutComponent,
    ToastComponent
  ]
})

export class LayoutModule { }
