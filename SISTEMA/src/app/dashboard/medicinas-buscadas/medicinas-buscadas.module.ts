import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinasBuscadasRoutingModule } from './medicinas-buscadas-routing.module';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MedicinasComponent
  ],
  imports: [
    CommonModule,
    MedicinasBuscadasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MedicinasBuscadasModule { }
