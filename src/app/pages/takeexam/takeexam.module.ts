import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeexamPageRoutingModule } from './takeexam-routing.module';

import { TakeexamPage } from './takeexam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeexamPageRoutingModule
  ],
  declarations: [TakeexamPage]
})
export class TakeexamPageModule {}
