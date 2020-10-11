import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditobjectivequestionsPage } from './editobjectivequestions.page';

const routes: Routes = [
  {
    path: '',
    component: EditobjectivequestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditobjectivequestionsPageRoutingModule {}
