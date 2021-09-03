import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffreReservationPageRoutingModule } from './offre-reservation-routing.module';

import { OffreReservationPage } from './offre-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffreReservationPageRoutingModule
  ],
  declarations: [OffreReservationPage]
})
export class OffreReservationPageModule {}
