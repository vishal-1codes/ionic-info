import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonPaginationPageRoutingModule } from './ion-pagination-routing.module';

import { IonPaginationPage } from './ion-pagination.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonPaginationPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [IonPaginationPage]
})
export class IonPaginationPageModule {}
