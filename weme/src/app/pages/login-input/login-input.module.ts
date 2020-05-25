import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInputPageRoutingModule } from './login-input-routing.module';

import { LoginInputPage } from './login-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginInputPageRoutingModule
  ],
  declarations: [LoginInputPage]
})
export class LoginInputPageModule {}
