import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonButtonPageRoutingModule } from './ion-button-routing.module';

import { IonButtonPage } from './ion-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonButtonPageRoutingModule
  ],
  declarations: [IonButtonPage]
})
export class IonButtonPageModule {}
