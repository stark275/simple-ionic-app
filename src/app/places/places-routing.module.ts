import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children:[
      {
        path: 'decouverte',
         children:[
          {
            path: '',
            loadChildren: () => import('./decouverte/decouverte.module').then( m => m.DecouvertePageModule)
          },
          {
            path:':placeId',
            loadChildren: () => import('./decouverte/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          }

        ]
      },//Fin

      //zone pour les chemis  offres
      {
        path: 'offres', children:[
          {
            path: '',
            loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)

          },
          // {
          //   path: 'nouvelle',
          //   loadChildren: () => import('./offres/nouvelle-offre/nouvelle-offre.module').then( m => m.NouvelleOffrePageModule)

          // },
          {
            path: 'editer/:placeId',
            loadChildren: () => import('./offres/editer-offre/editer-offre.module').then( m => m.EditerOffrePageModule)

          },
          {
            path: ':placeId',
            loadChildren: () => import('./offres/offre-reservation/offre-reservation.module').then( m => m.OffreReservationPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/places/tabs/decouverte',
        pathMatch:'full'
      }

    ]
  },
  {
    path:'',
    redirectTo:'/places/tabs/decouverte',
    pathMatch:'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
