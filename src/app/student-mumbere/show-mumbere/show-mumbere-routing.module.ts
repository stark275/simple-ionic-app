import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMumberePage } from './show-mumbere.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMumberePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMumberePageRoutingModule {}
