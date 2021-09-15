import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffresPageRoutingModule } from './offres-routing.module';

import { OffresPage } from './offres.page';
import { OffreItemComponent } from './offre-item/offre-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffresPageRoutingModule
  ],
  declarations: [OffresPage,OffreItemComponent]
})
export class OffresPageModule {}
