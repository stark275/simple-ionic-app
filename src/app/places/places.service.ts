import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Parc de garamba',
      'La RDC offre une gamme variée d’attraits touristiques à travers différentes provinces ',
      'https://www.investindrc.cd/fr/IMG/arton55.jpg',
      1500
    ),
    new Place(
      'p3',
      'Parc national des Virunga',
      'Le parc national des Virunga est le plus ancien parc national de l Afrique',
      ' https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQtsg6EQKYQhgBS3FeZnEdaJV2RkYWNNgl_bg&usqp=CAU',
      1500
    ),
    new Place(
      'p3',
      'Parc de garamba',
      'La RDC offre une gamme variée d’attraits touristiques à travers différentes provinces ',
      'https://www.investindrc.cd/fr/IMG/arton55.jpg',
      1500
    ),
  ];
  constructor() { }

  get places(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

}
