import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRangePage } from './ion-range.page';

const routes: Routes = [
  {
    path: '',
    component: IonRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRangePageRoutingModule {}
