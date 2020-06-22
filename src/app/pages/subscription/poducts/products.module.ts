import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsService } from 'src/app/services/products.service';


@NgModule({
  declarations: [ProductsComponent, ProductsListComponent],
  imports: [
    CommonModule,
    PoductsRoutingModule
  ],
  providers: [
    ProductsService,
  ]
})
export class PoductsModule { }
