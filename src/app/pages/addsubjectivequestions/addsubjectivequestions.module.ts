import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsubjectivequestionsPageRoutingModule } from './addsubjectivequestions-routing.module';

import { AddsubjectivequestionsPage } from './addsubjectivequestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsubjectivequestionsPageRoutingModule
  ],
  declarations: [AddsubjectivequestionsPage]
})
export class AddsubjectivequestionsPageModule {}
