import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaMedicinaComponent } from './lista-medicina/lista-medicina.component';

const routes: Routes = [
  {
    path: 'lista-medicina',
    canActivate: [AuthenticationGuard],
    component: ListaMedicinaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MedicinaRoutingModule { }
