import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offre-reservation',
  templateUrl: './offre-reservation.page.html',
  styleUrls: ['./offre-reservation.page.scss'],
})
export class OffreReservationPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/offres');
        return;
      }
      this.place=this.placeService.getPlace(paramMap.get('placeId'));
  });

  }

}
