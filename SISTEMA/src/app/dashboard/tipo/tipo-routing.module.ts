import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaTipoComponent } from './lista-tipo/lista-tipo.component';

const routes: Routes = [
  {
    path: 'lista-tipo',
    canActivate: [AuthenticationGuard],
    component: ListaTipoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TipoRoutingModule { }
