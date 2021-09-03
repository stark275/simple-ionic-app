import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecouvertePage } from './decouverte.page';

const routes: Routes = [
  {
    path: '',
    component: DecouvertePage
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecouvertePageRoutingModule {}
