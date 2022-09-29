import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication/authentication.guard';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ListaMedicinaComponent } from './medicina/lista-medicina/lista-medicina.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        canActivate: [AuthenticationGuard],
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        canActivate: [AuthenticationGuard],
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'medicina',
        component: ListaMedicinaComponent,
        canActivate: [AuthenticationGuard],
        data: {
          title: 'Analytics'
        }
      },
     
    ]
  },
  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'medicina', loadChildren: () => import('./medicina/medicina.module').then(m => m.MedicinaModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
