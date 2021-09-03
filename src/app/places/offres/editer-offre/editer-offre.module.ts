import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditerOffrePageRoutingModule } from './editer-offre-routing.module';

import { EditerOffrePage } from './editer-offre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditerOffrePageRoutingModule
  ],
  declarations: [EditerOffrePage]
})
export class EditerOffrePageModule {}
