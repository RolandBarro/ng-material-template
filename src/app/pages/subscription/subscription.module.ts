import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { ProductsService } from 'src/app/services/products.service';


@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    SubscriptionRoutingModule
  ],
  providers: [
    ProductsService
  ]
})
export class SubscriptionModule { }
