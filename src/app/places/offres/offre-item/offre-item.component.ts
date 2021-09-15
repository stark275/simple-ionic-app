import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offre-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.scss'],
})
export class OffreItemComponent implements OnInit {

  @Input() offre: Place;
  constructor() { }

  ngOnInit() {}

  getDummyDate(){
     return new Date();
  }


}
