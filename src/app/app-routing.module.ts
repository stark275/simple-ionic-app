import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-mumbere',
    pathMatch: 'full'
  },
  {
    path: 'student-mumbere',
    children:[
      {
        path: '',
        loadChildren: () => import('./student-mumbere/student-mumbere.module').then( m => m.StudentMumberePageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./student-mumbere/show-mumbere/show-mumbere.module').then( m => m.ShowMumberePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
