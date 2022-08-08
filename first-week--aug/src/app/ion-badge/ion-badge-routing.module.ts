import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonBadgePage } from './ion-badge.page';

const routes: Routes = [
  {
    path: '',
    component: IonBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonBadgePageRoutingModule {}
