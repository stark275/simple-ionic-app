/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Reservation } from './reservation.model';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  loadedbReservations: Reservation[];

  constructor(private reservationService: ReservationService) { }
  ngOnInit() {
    this.loadedbReservations=this.reservationService.reservations;
  }

  onSupprimeReservation(offreId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
