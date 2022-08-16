import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'ion-alert',
    loadChildren: () => import('./ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
    path: 'ion-range',
    loadChildren: () => import('./ion-range/ion-range.module').then( m => m.IonRangePageModule)
  },
  {
    path: 'ion-badge',
    loadChildren: () => import('./ion-badge/ion-badge.module').then( m => m.IonBadgePageModule)
  },
  {
    path: 'ion-search',
    loadChildren: () => import('./ion-search/ion-search.module').then( m => m.IonSearchPageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
  {
    path: 'ion-pagination',
    loadChildren: () => import('./ion-pagination/ion-pagination.module').then( m => m.IonPaginationPageModule)
  },
  {
    path: 'emi-cal',
    loadChildren: () => import('./emi-cal/emi-cal.module').then( m => m.EmiCalPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
