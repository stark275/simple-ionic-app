/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  offres: Place[];
  constructor(private placeservice: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offres=this.placeservice.places;
  }

  onEdit(offreId: string, SlidingItem: IonItemSliding){
    SlidingItem.close();
    this.router.navigate(['/','places','tabs','offres','editer', offreId]);

    console.log('Édition dun élément',offreId);
  }

}
