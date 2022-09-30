import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaMedicinaComponent } from './lista-medicina/lista-medicina.component';
import { ListaEnfermedadesComponent } from './lista-enfermedades/lista-enfermedades.component';

const routes: Routes = [
  {
    path: 'lista-medicina',
    canActivate: [AuthenticationGuard],
    component: ListaMedicinaComponent
  },
  {
    path: 'lista-enfermedades/:id',
    canActivate: [AuthenticationGuard],
    component: ListaEnfermedadesComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MedicinaRoutingModule { }
