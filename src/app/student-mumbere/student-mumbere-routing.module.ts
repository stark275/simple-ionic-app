import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentMumberePage } from './student-mumbere.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMumberePage
  },
  {
    path: 'show-mumbere',
    loadChildren: () => import('./show-mumbere/show-mumbere.module').then( m => m.ShowMumberePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMumberePageRoutingModule {}
