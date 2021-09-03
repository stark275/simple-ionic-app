import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffreReservationPage } from './offre-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: OffreReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreReservationPageRoutingModule {}
