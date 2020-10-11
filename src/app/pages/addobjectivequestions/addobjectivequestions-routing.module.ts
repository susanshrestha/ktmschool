import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddobjectivequestionsPage } from './addobjectivequestions.page';

const routes: Routes = [
  {
    path: '',
    component: AddobjectivequestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddobjectivequestionsPageRoutingModule {}
