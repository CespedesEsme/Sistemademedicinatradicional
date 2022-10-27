import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinasRangosRoutingModule } from './medicinas-rangos-routing.module';
import { ListaMedicinasComponent } from './lista-medicinas/lista-medicinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ListaMedicinasComponent
  ],
  imports: [
    CommonModule,
    MedicinasRangosRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ]
})
export class MedicinasRangosModule { }
