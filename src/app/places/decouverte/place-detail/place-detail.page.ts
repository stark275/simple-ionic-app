import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateReservationComponent } from 'src/app/reservations/create-reservation/create-reservation.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
      this.navCtrl.navigateBack('/places/tabs/decouverte');
      return;
      }
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });

  }

  onReserverPlace() {
    //this.router.navigateByUrl('/places/tabs/decouverte');
    this.modalController
      .create({
        component:CreateReservationComponent,
        componentProps: {selectedPlace:this.place}
      })
      .then(modalEl =>{
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData =>{
        console.log(resultData.data, resultData.role);
        if (resultData.role==='confirm'){
        console.log('reservee!');
        }
      });
  }
}
