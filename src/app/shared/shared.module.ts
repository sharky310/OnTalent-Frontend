import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { GraphsModule } from './components/admin/graphs/graphs.module';
import { GeneralModule } from './components/general/general.module';

@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule,
    FormsModule,
    GraphsModule,
    GeneralModule 
  ],
  exports: [CapitalizePipe]
})

export class SharedModule { }
