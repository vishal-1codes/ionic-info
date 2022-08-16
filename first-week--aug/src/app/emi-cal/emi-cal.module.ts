import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiCalPageRoutingModule } from './emi-cal-routing.module';

import { EmiCalPage } from './emi-cal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiCalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmiCalPage]
})
export class EmiCalPageModule {}
