import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },

      {
        path: 'products',
        loadChildren: () => import('./poducts/products.module').then(m => m.PoductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
