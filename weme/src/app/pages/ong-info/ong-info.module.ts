import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngInfoPageRoutingModule } from './ong-info-routing.module';

import { OngInfoPage } from './ong-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngInfoPageRoutingModule
  ],
  declarations: [OngInfoPage]
})
export class OngInfoPageModule {}
