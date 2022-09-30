import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinaRoutingModule } from './medicina-routing.module';
import { ListaMedicinaComponent } from './lista-medicina/lista-medicina.component';
import { CrearMedicinaComponent } from './crear-medicina/crear-medicina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListaEnfermedadesComponent } from './lista-enfermedades/lista-enfermedades.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ListaMedicinaComponent,
    CrearMedicinaComponent,
    ListaEnfermedadesComponent
  ],
  imports: [
    CommonModule,
    MedicinaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgSelectModule
  ]
})
export class MedicinaModule { }
