import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { ListaMedicinasComponent } from './lista-medicinas/lista-medicinas.component';

const routes: Routes = [
  {
    path: 'medicinas',
    component: ListaMedicinasComponent,
    canActivate: [AuthenticationGuard],    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinasRangosRoutingModule { }
