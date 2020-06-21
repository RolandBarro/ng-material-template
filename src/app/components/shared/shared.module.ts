import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { MaterialModule } from 'src/app/materials/material/material.module';

@NgModule({
  declarations: [NavbarMainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // custom
    MaterialModule,
  ],
  exports: [
    NavbarMainComponent,
  ]
})
export class SharedModule { }
