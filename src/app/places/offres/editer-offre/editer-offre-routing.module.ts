import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditerOffrePage } from './editer-offre.page';

const routes: Routes = [
  {
    path: '',
    component: EditerOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditerOffrePageRoutingModule {}
