import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffresPage } from './offres.page';

const routes: Routes = [
  {
    path: '',
    component: OffresPage
  },
  {
    path: 'editer-offre',
    loadChildren: () => import('./editer-offre/editer-offre.module').then( m => m.EditerOffrePageModule)
  },
  {
    path: 'offre-reservation',
    loadChildren: () => import('./offre-reservation/offre-reservation.module').then( m => m.OffreReservationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresPageRoutingModule {}
