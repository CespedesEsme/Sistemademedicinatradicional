import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaturistasRoutingModule } from './naturistas-routing.module';
import { ListaNaturistasComponent } from './lista-naturistas/lista-naturistas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaNaturistasComponent
  ],
  imports: [
    CommonModule,
    NaturistasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NaturistasModule { }
