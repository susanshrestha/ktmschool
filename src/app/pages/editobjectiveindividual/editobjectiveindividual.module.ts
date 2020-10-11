import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditobjectiveindividualPageRoutingModule } from './editobjectiveindividual-routing.module';

import { EditobjectiveindividualPage } from './editobjectiveindividual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditobjectiveindividualPageRoutingModule
  ],
  declarations: [EditobjectiveindividualPage]
})
export class EditobjectiveindividualPageModule {}
