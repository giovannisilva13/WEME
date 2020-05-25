import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngInfoPage } from './ong-info.page';

const routes: Routes = [
  {
    path: '',
    component: OngInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngInfoPageRoutingModule {}
