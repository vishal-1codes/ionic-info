import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmiCalPage } from './emi-cal.page';

const routes: Routes = [
  {
    path: '',
    component: EmiCalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmiCalPageRoutingModule {}
