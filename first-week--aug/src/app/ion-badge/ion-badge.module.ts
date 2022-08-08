import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonBadgePageRoutingModule } from './ion-badge-routing.module';

import { IonBadgePage } from './ion-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBadgePageRoutingModule
  ],
  declarations: [IonBadgePage]
})
export class IonBadgePageModule {}
