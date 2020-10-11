import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditobjectivequestionsPageRoutingModule } from './editobjectivequestions-routing.module';

import { EditobjectivequestionsPage } from './editobjectivequestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditobjectivequestionsPageRoutingModule
  ],
  declarations: [EditobjectivequestionsPage]
})
export class EditobjectivequestionsPageModule {}
