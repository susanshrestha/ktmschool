import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterloginPage } from './afterlogin.page';

const routes: Routes = [
  {
    path: '',
    component: AfterloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterloginPageRoutingModule {}
