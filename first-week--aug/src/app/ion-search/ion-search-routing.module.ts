import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSearchPage } from './ion-search.page';

const routes: Routes = [
  {
    path: '',
    component: IonSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSearchPageRoutingModule {}
