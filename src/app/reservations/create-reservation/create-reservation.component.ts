import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss'],
})
export class CreateReservationComponent implements OnInit {

  @Input() selectedPlace: Place;
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {}
  onCancel(){
  this.modalCtrl.dismiss(null,'cancel');
  }
  onReservePlace(){
  this.modalCtrl.dismiss({message:'Ceci est un message fictif'},'confirm');
  }


}
