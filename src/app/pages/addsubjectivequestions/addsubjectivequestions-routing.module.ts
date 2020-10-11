import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsubjectivequestionsPage } from './addsubjectivequestions.page';

const routes: Routes = [
  {
    path: '',
    component: AddsubjectivequestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsubjectivequestionsPageRoutingModule {}
