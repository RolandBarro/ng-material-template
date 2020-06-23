import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPageComponent } from './components/containers/full-page/full-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '',
    component: FullPageComponent,
    children: [
      { path: 'home',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
      },
      { path: 'subscription',
        loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
