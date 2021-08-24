import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMumberePageRoutingModule } from './show-mumbere-routing.module';

import { ShowMumberePage } from './show-mumbere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMumberePageRoutingModule
  ],
  declarations: [ShowMumberePage]
})
export class ShowMumberePageModule {}
