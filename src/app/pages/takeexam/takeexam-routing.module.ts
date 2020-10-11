import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeexamPage } from './takeexam.page';

const routes: Routes = [
  {
    path: '',
    component: TakeexamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeexamPageRoutingModule {}
