import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    EnfermedadesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    NgSelectModule,
  ]
})
export class ReportesModule { }
