import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MaterialModule } from 'src/app/materials/material/material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [NavbarMainComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,

    // custom
    MaterialModule,
  ],
  exports: [
    DialogComponent,
    NavbarMainComponent,
  ]
})
export class SharedModule { }
