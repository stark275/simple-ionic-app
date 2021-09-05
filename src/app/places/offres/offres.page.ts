import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  offres: Place[];
  constructor(private placeservice: PlacesService) { }

  ngOnInit() {
    this.offres=this.placeservice.places;
  }

}
