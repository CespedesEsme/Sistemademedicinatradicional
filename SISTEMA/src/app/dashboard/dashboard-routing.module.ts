import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication/authentication.guard';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ListaMedicinaComponent } from './medicina/lista-medicina/lista-medicina.component';
import { ListaTipoComponent } from './tipo/lista-tipo/lista-tipo.component';
import { ListaEnfermedadesComponent } from './enfermedad/lista-enfermedades/lista-enfermedades.component';


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
      {
        path: 'tipo',
        component: ListaTipoComponent,
        canActivate: [AuthenticationGuard],
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'enfermedad',
        component: ListaEnfermedadesComponent,
        canActivate: [AuthenticationGuard],
        data: {
          title: 'Analytics'
        }
      },
    ]
  },
  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'medicina', loadChildren: () => import('./medicina/medicina.module').then(m => m.MedicinaModule) },
  { path: 'tipo', loadChildren: () => import('./tipo/tipo.module').then(m => m.TipoModule) },
  { path: 'enfermedad', loadChildren: () => import('./enfermedad/enfermedad.module').then(m => m.EnfermedadModule) },
  { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },
  { path: 'naturistas', loadChildren: () => import('./naturistas/naturistas.module').then(m => m.NaturistasModule) },
  { path: 'rating', loadChildren: () => import('./rating-medicinas/rating-medicinas.module').then(m => m.RatingMedicinasModule) },
  { path: 'medicinas', loadChildren: () => import('./medicinas-buscadas/medicinas-buscadas.module').then(m => m.MedicinasBuscadasModule) },
  { path: 'rango', loadChildren: () => import('./medicinas-rangos/medicinas-rangos.module').then(m => m.MedicinasRangosModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
