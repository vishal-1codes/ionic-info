import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSearchPageRoutingModule } from './ion-search-routing.module';

import { IonSearchPage } from './ion-search.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [IonSearchPage]
})
export class IonSearchPageModule {}
