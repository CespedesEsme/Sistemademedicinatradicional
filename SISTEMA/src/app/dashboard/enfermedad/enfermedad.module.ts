import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfermedadRoutingModule } from './enfermedad-routing.module';
import { ListaEnfermedadesComponent } from './lista-enfermedades/lista-enfermedades.component';
import { CrearEnfermedadesComponent } from './crear-enfermedades/crear-enfermedades.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ListaEnfermedadesComponent,
    CrearEnfermedadesComponent
  ],
  imports: [
    CommonModule,
    EnfermedadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class EnfermedadModule { }
