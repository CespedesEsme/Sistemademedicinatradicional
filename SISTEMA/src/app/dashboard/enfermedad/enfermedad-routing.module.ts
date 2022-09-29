import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaEnfermedadesComponent } from './lista-enfermedades/lista-enfermedades.component';

const routes: Routes = [
  {
    path: 'lista-enfermedades',
    canActivate: [AuthenticationGuard],
    component: ListaEnfermedadesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EnfermedadRoutingModule { }
