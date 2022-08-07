import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRangePageRoutingModule } from './ion-range-routing.module';

import { IonRangePage } from './ion-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRangePageRoutingModule
  ],
  declarations: [IonRangePage]
})
export class IonRangePageModule {}
