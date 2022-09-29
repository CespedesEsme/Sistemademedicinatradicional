import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTipoComponent } from './lista-tipo/lista-tipo.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { TipoRoutingModule } from './tipo-routing.module';



@NgModule({
  declarations: [
    ListaTipoComponent,
    CrearTipoComponent
  ],
  imports: [
    CommonModule,
    TipoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class TipoModule { }
