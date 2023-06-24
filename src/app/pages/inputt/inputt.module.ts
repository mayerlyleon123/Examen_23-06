import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputtPageRoutingModule } from './inputt-routing.module';

import { InputtPage } from './inputt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputtPageRoutingModule
  ],
  declarations: [InputtPage]
})
export class InputtPageModule {}
