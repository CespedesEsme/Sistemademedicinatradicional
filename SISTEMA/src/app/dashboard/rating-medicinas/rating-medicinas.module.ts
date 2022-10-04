import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RatingMedicinasRoutingModule } from './rating-medicinas-routing.module';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    RatingMedicinasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RatingMedicinasModule { }
