import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-decouverte',
  templateUrl: './decouverte.page.html',
  styleUrls: ['./decouverte.page.scss'],
})
export class DecouvertePage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
