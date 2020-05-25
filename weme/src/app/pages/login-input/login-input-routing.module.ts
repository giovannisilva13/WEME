import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInputPage } from './login-input.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInputPageRoutingModule {}
