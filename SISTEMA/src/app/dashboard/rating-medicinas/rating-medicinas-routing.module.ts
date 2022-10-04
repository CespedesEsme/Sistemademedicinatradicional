import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/authentication/authentication.guard';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {
    path: 'medicinas',
    canActivate: [AuthenticationGuard],
    component: RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingMedicinasRoutingModule { }
