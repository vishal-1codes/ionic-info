import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonButtonPage } from './ion-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonButtonPageRoutingModule {}
