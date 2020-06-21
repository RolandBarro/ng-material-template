import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { LandingRoutingModule } from './landing-routing.module';

// components
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,

    // shared
  ]
})
export class LandingModule { }
