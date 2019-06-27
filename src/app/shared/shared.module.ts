import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { GraphsModule } from './components/admin/graphs/graphs.module';
import { GeneralModule } from './components/general/general.module';
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule,
    FormsModule,
    GraphsModule,
    GeneralModule,
    ReactiveFormsModule
  ],
  exports: [CapitalizePipe]
})

export class SharedModule { }
