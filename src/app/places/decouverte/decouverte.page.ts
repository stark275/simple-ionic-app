import { Component, OnInit } from '@angular/core';
import {SegmentChangeEventDetail} from '@ionic/core';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.page.html',
  styleUrls: ['./decouverte.page.scss'],
})
export class DecouvertePage implements OnInit {
  loadedPlaces: Place[];
  listloadedPlaces: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces=this.placesService.places;
    this.listloadedPlaces=this.loadedPlaces.slice(1);
  }

  onFilterIUpdate(event: any){
   console.log(event.detail);
  }

}
