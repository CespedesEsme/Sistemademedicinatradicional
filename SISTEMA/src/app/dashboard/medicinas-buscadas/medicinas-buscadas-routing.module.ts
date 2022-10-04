import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { MedicinasComponent } from './medicinas/medicinas.component';

const routes: Routes = [
  {
    path: 'populares',
    canActivate: [AuthenticationGuard],
    component: MedicinasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinasBuscadasRoutingModule { }
