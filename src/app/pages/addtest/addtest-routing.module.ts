import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtestPage } from './addtest.page';

const routes: Routes = [
  {
    path: '',
    component: AddtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtestPageRoutingModule {}
