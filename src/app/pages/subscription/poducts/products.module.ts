import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoductsRoutingModule } from './products-routing.module';

import { ProductsService } from 'src/app/services/products.service';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from 'src/app/materials/material/material.module';
import { SubscriptionDialogComponent } from './components/subscription-dialog/subscription-dialog.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsListComponent,
    SubscriptionDialogComponent,
  ],
  imports: [
    CommonModule,
    PoductsRoutingModule,
    MaterialModule,

    // custom
  ],
  providers: [
    ProductsService,
  ]
})
export class PoductsModule { }
