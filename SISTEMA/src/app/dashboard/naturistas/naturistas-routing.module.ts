import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaNaturistasComponent } from './lista-naturistas/lista-naturistas.component';

const routes: Routes = [
  {
    path: 'aportes',
    component: ListaNaturistasComponent,
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaturistasRoutingModule { }
