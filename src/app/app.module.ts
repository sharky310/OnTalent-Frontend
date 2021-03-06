import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { GeneralModule } from './shared/components/general/general.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/security/auth.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { UserService } from './core/services/api/user.service';
import { CoreModule } from './core/core.module';
import { ChartsModule } from 'ng2-charts';
import { GraphsModule } from './shared/components/admin/graphs/graphs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    GeneralModule,
    SharedModule,
    FormsModule,
    CoreModule,
    ChartsModule,
    GraphsModule
  ],
  exports: [
    ChartsModule,
    GraphsModule,
    GeneralModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
