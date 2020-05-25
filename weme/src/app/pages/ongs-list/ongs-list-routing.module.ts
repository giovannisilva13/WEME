import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngsListPage } from './ongs-list.page';

const routes: Routes = [
  {
    path: '',
    component: OngsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngsListPageRoutingModule {}
