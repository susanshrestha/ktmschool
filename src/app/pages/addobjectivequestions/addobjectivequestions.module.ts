import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddobjectivequestionsPageRoutingModule } from './addobjectivequestions-routing.module';

import { AddobjectivequestionsPage } from './addobjectivequestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddobjectivequestionsPageRoutingModule
  ],
  declarations: [AddobjectivequestionsPage]
})
export class AddobjectivequestionsPageModule {}
