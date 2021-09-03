import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecouvertePageRoutingModule } from './decouverte-routing.module';

import { DecouvertePage } from './decouverte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecouvertePageRoutingModule
  ],
  declarations: [DecouvertePage]
})
export class DecouvertePageModule {}
