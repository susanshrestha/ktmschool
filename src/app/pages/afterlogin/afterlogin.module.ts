import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterloginPageRoutingModule } from './afterlogin-routing.module';

import { AfterloginPage } from './afterlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterloginPageRoutingModule
  ],
  declarations: [AfterloginPage]
})
export class AfterloginPageModule {}
