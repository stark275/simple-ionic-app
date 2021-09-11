/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';

@Injectable({providedIn: 'root'})

export class ReservationService{
  private _reservation: Reservation[] =[
    {
      id:'xyz',
      placeId:'p1',
      placeTitre:'Fleuve Congo Hotel',
      nombreVisiteur:3,
      userId:'abc'
    }
  ];


  get reservations(){
    return[...this._reservation];
  }

}
