import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentMumberePageRoutingModule } from './student-mumbere-routing.module';

import { StudentMumberePage } from './student-mumbere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentMumberePageRoutingModule
  ],
  declarations: [StudentMumberePage]
})
export class StudentMumberePageModule {}
