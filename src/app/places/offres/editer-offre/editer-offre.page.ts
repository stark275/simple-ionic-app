import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-editer-offre',
  templateUrl: './editer-offre.page.html',
  styleUrls: ['./editer-offre.page.scss'],
})
export class EditerOffrePage implements OnInit {

  place: Place;
constructor(
  private route: ActivatedRoute,
  private placesService: PlacesService,
  private navCtrl: NavController
) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
    if (!paramMap.has('placeId')) {
      this.navCtrl.navigateBack('/places/tabs/offres');
      return;
    }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

}
