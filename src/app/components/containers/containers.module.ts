import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page/full-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FullPageComponent],
  imports: [
    CommonModule,
    RouterModule,

    // shared
    SharedModule,
  ],
  exports: [FullPageComponent]
})
export class ContainersModule { }
