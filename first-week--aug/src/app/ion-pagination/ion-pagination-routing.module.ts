import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonPaginationPage } from './ion-pagination.page';

const routes: Routes = [
  {
    path: '',
    component: IonPaginationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonPaginationPageRoutingModule {}
