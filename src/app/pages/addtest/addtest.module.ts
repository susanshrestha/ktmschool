import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtestPageRoutingModule } from './addtest-routing.module';

import { AddtestPage } from './addtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtestPageRoutingModule
  ],
  declarations: [AddtestPage]
})
export class AddtestPageModule {}
