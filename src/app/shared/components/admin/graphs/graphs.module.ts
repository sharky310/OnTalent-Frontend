import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatedUsersComponent } from './validated-users/validated-users.component';
import { ChartsModule } from 'ng2-charts';
import { NumberEventsComponent } from './number-events/number-events.component';

@NgModule({
  declarations: [ValidatedUsersComponent, NumberEventsComponent],
  imports: [
    ChartsModule,
    CommonModule
  ],
  exports: [ValidatedUsersComponent, NumberEventsComponent]
})
export class GraphsModule { }
