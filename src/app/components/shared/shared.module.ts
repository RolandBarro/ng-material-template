import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarMainComponent } from './navbar-main/navbar-main.component';

@NgModule({
  declarations: [NavbarMainComponent],
  imports: [
    CommonModule,
    RouterModule,

    // third-party
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [ NavbarMainComponent ]
})
export class SharedModule { }
