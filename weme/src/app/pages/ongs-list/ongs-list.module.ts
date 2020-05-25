import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngsListPageRoutingModule } from './ongs-list-routing.module';

import { OngsListPage } from './ongs-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngsListPageRoutingModule
  ],
  declarations: [OngsListPage]
})
export class OngsListPageModule {}
