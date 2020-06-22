import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { LandingRoutingModule } from './landing-routing.module';

// components
import { LandingComponent } from './landing.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';


@NgModule({
  declarations: [LandingComponent, BannerSectionComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,

    // shared
  ]
})
export class LandingModule { }
